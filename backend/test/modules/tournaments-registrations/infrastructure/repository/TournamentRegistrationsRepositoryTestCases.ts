import { TournamentRegistrationsRepository } from '../../../../../src/modules/tournaments-registrations/core/application/TournamentRegistrationsRepository';
import { TournamentRegistrations } from '../../../../../src/modules/tournaments-registrations/core/domain/TournamentRegistrations';
import { TournamentId } from '../../../../../src/modules/tournaments-registrations/core/domain/TournamentId';
import { RegistrationsStatus } from '../../../../../src/modules/tournaments-registrations/core/domain/RegistrationsStatus';
import { DatabaseTestSupport } from '../../../../test-support/shared/infrastructure/DatabaseTestSupport';
import { EntityIdGenerator } from '../../../../../src/shared/core/application/EntityIdGenerator';
import { UuidEntityIdGenerator } from '../../../../../src/shared/infrastructure/core/application/UuidEntityIdGenerator';
import { PlayerId } from '../../../../../src/shared/core/domain/PlayerId';

export function TournamentRegistrationsRepositoryTestCases(props: {
  name: string;
  repositoryFactory: () => TournamentRegistrationsRepository;
  databaseTestSupport: DatabaseTestSupport;
}): void {
  return describe(props.name, () => {
    const entityIdGenerator: EntityIdGenerator = new UuidEntityIdGenerator();
    let tournamentId1: TournamentId;
    let tournamentId2: TournamentId;
    let tournamentRegistrations1: TournamentRegistrations;
    let tournamentRegistrations2: TournamentRegistrations;
    let repository: TournamentRegistrationsRepository;

    beforeAll(async () => {
      await props.databaseTestSupport.openConnection();
      repository = props.repositoryFactory();
    });
    beforeEach(() => {
      tournamentId1 = TournamentId.from(entityIdGenerator.generate());
      tournamentId2 = TournamentId.from(entityIdGenerator.generate());
      tournamentRegistrations1 = new TournamentRegistrations({ tournamentId: tournamentId1 });
      tournamentRegistrations2 = new TournamentRegistrations({
        tournamentId: tournamentId2,
        status: RegistrationsStatus.OPENED,
        registeredPlayers: [PlayerId.from('1'), PlayerId.from('2')],
      });
    });
    afterEach(async () => await props.databaseTestSupport.clearDatabase());
    afterAll(async () => await props.databaseTestSupport.closeConnection());

    test('findAll returns empty list when nothing was saved', async () => {
      expect(await repository.findAll()).toBeEmpty();
    });

    test('findAll returns all saved tournament registrations', async () => {
      await repository.save(tournamentRegistrations1);
      await repository.save(tournamentRegistrations2);

      expect(await repository.findAll()).toStrictEqual([tournamentRegistrations1, tournamentRegistrations2]);
    });

    test('findByTournamentId returns undefined when tournament with given id is not saved', async () => {
      await repository.save(tournamentRegistrations1);
      await repository.save(tournamentRegistrations2);

      const notExistingTournamentId = TournamentId.from(entityIdGenerator.generate());
      expect(await repository.findByTournamentId(notExistingTournamentId)).toBeUndefined();
    });

    test('findByTournamentId returns tournament registrations with given id when were saved', async () => {
      await repository.save(tournamentRegistrations1);
      await repository.save(tournamentRegistrations2);

      expect(await repository.findByTournamentId(tournamentId1)).toStrictEqual(tournamentRegistrations1);
    });
  });
}
