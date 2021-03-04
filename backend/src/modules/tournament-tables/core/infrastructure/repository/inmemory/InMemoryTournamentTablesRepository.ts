import {TournamentTablesRepository} from "../../../application/TournamentTablesRepository";
import {TournamentTable} from "../../../domain/TournamentTable";

export class InMemoryTournamentTablesRepository implements TournamentTablesRepository {
    private readonly entities: { [id: string]: TournamentTable } = {};

    async save(tournamentTable: TournamentTable): Promise<void> {
        this.entities[tournamentTable.tableId] = tournamentTable;
    }

    findByTableId(tableId: string): Promise<TournamentTable> {
        return Promise.resolve(this.entities[tableId]);
    }

    findByTournamentId(tournamentId: string): Promise<TournamentTable[]> {
        return Promise.resolve(
            Object.keys(this.entities)
                .filter((id) => this.entities[id].tournamentId === tournamentId)
                .map(id => this.entities[id]));
    }
    
    findAll(): Promise<TournamentTable[]> {
        return Promise.resolve(Object.keys(this.entities).map((id) => this.entities[id]));
    }
}
