import { CommandResult } from '../../../../src/shared/core/application/command/CommandResult';
import { RetryCommandBus } from '../../../../src/shared/infrastructure/core/application/command/RetryCommandBus';
import { StartTournament } from './CommandsTestFixtures';

describe('RetryCommandBus', function () {
  //FIXME: Why mock do not show executes!?
  xit('retrying max number of retires', () => {
    const alwaysFailCommandBus = {
      execute: jest.fn().mockImplementation(() => CommandResult.failureDueTo(new Error('Mock error'))),
      registerHandler: jest.fn(),
    };
    const commandBus = new RetryCommandBus(alwaysFailCommandBus, 3);

    const startTournament = new StartTournament({ tournamentId: 'SampleId' });
    commandBus.execute(startTournament);

    expect(alwaysFailCommandBus.execute).toBeCalledTimes(3);
  });
});