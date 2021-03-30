import {ModuleCoreFactory, TestModuleCore, testModuleCore} from '../../../../test-support/shared/core/TestModuleCore';
import {DoublesTournamentModuleCore} from '../../../../../src/modules/doubles-tournament/core/DoublesTournamentModuleCore';
import {EntityIdGenerator} from '../../../../../src/shared/core/application/EntityIdGenerator';
import {InMemoryMatchesQueueRepository} from '../../../../../src/modules/doubles-tournament/infrastructure/repository/inmemory/InMemoryMatchesQueueRepository';
import {InMemoryDoublesTournamentRepository} from '../../../../../src/modules/doubles-tournament/infrastructure/repository/inmemory/InMemoryDoublesTournamentRepository';
import {CommandBus} from '../../../../../src/shared/core/application/command/CommandBus';
import {InMemoryCommandBus} from '../../../../../src/shared/infrastructure/core/application/command/InMemoryCommandBus';
import {StoreAndForwardDomainEventBus} from "../../../../../src/shared/infrastructure/core/application/event/StoreAndForwardDomainEventBus";
import {InMemoryDomainEventBus} from "../../../../../src/shared/infrastructure/core/application/event/InMemoryDomainEventBus";

export function testDoublesTournamentsModule(
  currentTime: Date,
  entityIdGenerator: EntityIdGenerator,
  commandBus: CommandBus = new InMemoryCommandBus(),
  eventBus: StoreAndForwardDomainEventBus = new StoreAndForwardDomainEventBus(new InMemoryDomainEventBus()),
  ): TestModuleCore {
  const doublesTournamentRepository = new InMemoryDoublesTournamentRepository();
  const matchesQueueRepository = new InMemoryMatchesQueueRepository();
  const moduleCoreFactory: ModuleCoreFactory = (commandBus, eventBus, queryBus) =>
    DoublesTournamentModuleCore(
      eventBus,
      commandBus,
      () => currentTime,
      entityIdGenerator,
      doublesTournamentRepository,
      matchesQueueRepository,
    );
  return testModuleCore(moduleCoreFactory, commandBus, eventBus);
}
