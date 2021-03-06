import 'jest-extended';
import { OpenTournamentRegistrations } from '../../../../../src/modules/tournaments-registrations/core/application/command/OpenTournamentRegistrations';
import { TournamentRegistrationsWasOpened } from '../../../../../src/modules/tournaments-registrations/core/domain/event/TournamentRegistrationsWasOpened';
import { CommandResult } from '../../../../../src/shared/core/application/command/CommandResult';
import { RegisterPlayerForTournament } from '../../../../../src/modules/tournaments-registrations/core/application/command/RegisterPlayerForTournament';
import { PlayerProfileWasCreated } from '../../../../../src/modules/player-profiles/core/domain/event/PlayerProfileWasCreated';
import { janKowalski } from '../../../../test-support/shared/core/people';
import { PlayerWasRegisteredForTournament } from '../../../../../src/modules/tournaments-registrations/core/domain/event/PlayerWasRegisteredForTournament';
import { CloseTournamentRegistrations } from '../../../../../src/modules/tournaments-registrations/core/application/command/CloseTournamentRegistrations';
import { TournamentRegistrationsWereClosed } from '../../../../../src/modules/tournaments-registrations/core/domain/event/TournamentRegistrationsWereClosed';
import { testTournamentsRegistrationsModule } from './TestTournamentsRegistrationsModule';
import { registerPlayerForTournament } from './TestHelpers';
import Failure = CommandResult.Failure;
import { MIN_TOURNAMENT_PLAYERS } from '../../../../../src/modules/tournaments-registrations/core/domain/TournamentRegistrations';

describe('Tournament Registrations | Write Side', () => {
  const currentTime = new Date();
  const tournamentId = 'TournamentId';

  it('given not opened tournaments registrations, when open tournament registrations, then tournament registrations was opened', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    //When
    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    const commandResult = await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    //Then
    expect(commandResult.isSuccess()).toBeTruthy();

    expect(tournamentsRegistrations.lastPublishedEvent()).toStrictEqual(
      new TournamentRegistrationsWasOpened({ occurredAt: currentTime, tournamentId }),
    );
  });

  it('given opened tournaments registrations, when try to open tournament registrations, then command should fail', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    //When
    const commandResult = await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    //Then
    expect(commandResult.isSuccess()).toBeFalsy();
    expect((commandResult as Failure).reason).toStrictEqual(new Error('Registrations was opened before!'));
  });

  it('given opened tournaments registrations, when try to register player without profile, then command should fail', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    //When
    const playerWithoutProfile = 'NotExistingPlayer';
    const registerPlayerForTournament = new RegisterPlayerForTournament({ tournamentId, playerId: playerWithoutProfile });
    const commandResult = await tournamentsRegistrations.executeCommand(registerPlayerForTournament);

    //Then
    expect(commandResult.isSuccess()).toBeFalsy();
    expect((commandResult as Failure).reason).toStrictEqual(
      new Error('Player with id = NotExistingPlayer cannot take part in the tournament!'),
    );
  });

  it('given opened tournaments registrations and player has profile, when register player, then player should be registered for the tournament', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    const playerId = 'JanKowalskiId';
    const playerProfileWasCreated = new PlayerProfileWasCreated({ occurredAt: currentTime, playerId, ...janKowalski });
    tournamentsRegistrations.publishEvent(playerProfileWasCreated);

    //When
    const registerPlayerForTournament = new RegisterPlayerForTournament({ tournamentId, playerId });
    const commandResult = await tournamentsRegistrations.executeCommand(registerPlayerForTournament);

    //Then
    expect(commandResult.isSuccess()).toBeTruthy();
    expect(tournamentsRegistrations.lastPublishedEvent()).toStrictEqual(
      new PlayerWasRegisteredForTournament({ occurredAt: currentTime, tournamentId, playerId }),
    );
  });

  it('given opened tournaments registrations with 1 registered player, when try to close registrations, then command should fail', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId1', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId2', tournamentId);

    //When
    const closeTournamentRegistrations = new CloseTournamentRegistrations({ tournamentId });
    const commandResult = await tournamentsRegistrations.executeCommand(closeTournamentRegistrations);

    //Then
    expect(commandResult.isSuccess()).toBeFalsy();
    expect((commandResult as Failure).reason).toStrictEqual(
      new Error(`Min players for tournament is ${MIN_TOURNAMENT_PLAYERS}, but only 2 players registered!`),
    );
  });

  it('given opened tournaments registrations with 8 registered players, when close registrations, then registrations should be closed', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId1', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId2', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId3', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId4', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId5', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId6', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId7', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId8', tournamentId);

    //When
    const closeTournamentRegistrations = new CloseTournamentRegistrations({ tournamentId });
    const commandResult = await tournamentsRegistrations.executeCommand(closeTournamentRegistrations);

    //Then
    expect(commandResult.isSuccess()).toBeTruthy();
    expect(tournamentsRegistrations.lastPublishedEvent()).toStrictEqual(
      new TournamentRegistrationsWereClosed({
        occurredAt: currentTime,
        tournamentId,
        registeredPlayersIds: ['PlayerId1', 'PlayerId2', 'PlayerId3', 'PlayerId4', 'PlayerId5', 'PlayerId6', 'PlayerId7', 'PlayerId8'],
      }),
    );
  });

  it('given opened tournaments registrations with 9 registered players, when close registrations, then command should fail', async () => {
    //Given
    const tournamentsRegistrations = testTournamentsRegistrationsModule(currentTime);

    const openTournamentRegistrations = new OpenTournamentRegistrations({ tournamentId });
    await tournamentsRegistrations.executeCommand(openTournamentRegistrations);

    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId1', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId2', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId3', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId4', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId5', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId6', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId7', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId8', tournamentId);
    await registerPlayerForTournament(tournamentsRegistrations, 'PlayerId9', tournamentId);

    //When
    const closeTournamentRegistrations = new CloseTournamentRegistrations({ tournamentId });
    const commandResult = await tournamentsRegistrations.executeCommand(closeTournamentRegistrations);

    //Then
    expect(commandResult.isSuccess()).toBeFalsy();
    expect((commandResult as Failure).reason).toStrictEqual(
      new Error('There must be even number of players to start tournament! Now is 9'),
    );
  });
});
