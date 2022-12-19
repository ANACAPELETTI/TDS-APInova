interface IResource{
    id?: string;
    amount: number;
    resourceType: IResourceType;
    land?: ILand;
}