import {HasConstructor} from "../../../../common/hasConstructor";
import {CommandBus} from "./CommandBus";
import {CommandHandler} from "./CommandHandler";

export interface Command {

}

export class InMemoryCommandBus implements CommandBus {
  private handlers = new Map<CommandTypeName, CommandHandler>();

  execute<CommandType extends Command, ResultType = any>(command: CommandType): Promise<ResultType> {
    const commandTypeName = InMemoryCommandBus.commandType(command);
    const commandHandler = this.handlers.get(commandTypeName);
    if (!commandHandler) {
      throw new CommandHandlerNotFoundException(commandTypeName)
    }
    return commandHandler.execute(command)
  }

  //TODO: Result type niepotrzebny?
  registerCommandHandler<CommandType extends Command, ResultType>(commandType: HasConstructor<CommandType>,
                                                  handler: CommandHandler<CommandType, ResultType>
  ) {
    const commandTypeName = commandType.name;
    const commandHandler = this.handlers.get(commandTypeName);
    if (commandHandler) {
      throw new Error('Command handler already registered!')
    }
    this.handlers.set(commandTypeName, handler)
  }

  private static commandType(command: Command): CommandTypeName {
    const {constructor} = Object.getPrototypeOf(command);
    return constructor.name as string;
  }
}

export class CommandHandlerNotFoundException extends Error {
  constructor(commandName: string) {
    super(
        `The command handler for the "${commandName}" command was not found!`,
    );
  }
}

type CommandTypeName = string;
