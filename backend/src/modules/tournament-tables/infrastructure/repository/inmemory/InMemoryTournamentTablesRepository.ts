import { TournamentTablesRepository } from '../../../core/application/TournamentTablesRepository';
import { TournamentTable } from '../../../core/domain/TournamentTable';
import { OptimisticLockingException } from '../../../../../shared/core/application/OptimisticLockingException';

export class InMemoryTournamentTablesRepository implements TournamentTablesRepository {
  private readonly entities: { [tableId: string]: TournamentTable } = {};

  async save(tournamentTable: TournamentTable): Promise<void> {
    const tableId = `${tournamentTable.tournamentId}_${tournamentTable.tableNumber.raw}`;
    if ((this.entities[tableId]?.version ?? 0) !== tournamentTable.version) {
      return Promise.reject(new OptimisticLockingException(tournamentTable.version));
    }
    this.entities[tableId] = new TournamentTable({
      ...tournamentTable,
      version: tournamentTable.version + 1,
    });
  }

  async saveAll(tournamentTables: TournamentTable[]): Promise<void> {
    await Promise.all(tournamentTables.map(async (table) => await this.save(table)));
  }

  findByTournamentIdAndTableNumber(tournamentId: string, tableNumber: number): Promise<TournamentTable> {
    return Promise.resolve(this.entities[`${tournamentId}_${tableNumber}`]);
  }

  findAllByTournamentId(tournamentId: string): Promise<TournamentTable[]> {
    return Promise.resolve(
      Object.keys(this.entities)
        .filter((id) => this.entities[id].tournamentId === tournamentId)
        .map((id) => this.entities[id]),
    );
  }
}
