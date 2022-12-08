export interface Iuser{
    id: number,
    name: string,
    maney:number,
    location: number,
}

export interface Istate{
    users: Iuser[],
    whoNow: number,
    step: number[]
}