export interface ISoldier {
    name: string;
    attack: number;
    defense: number;
    timeToSpawn: number;
    army?: IArmy;
    resource: IResource;
}