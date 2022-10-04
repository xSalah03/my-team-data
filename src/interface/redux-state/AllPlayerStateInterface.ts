export interface AllPlayerStateInterface{
  Players: Player[],
  isLoading: boolean,
  isSuccessful: boolean,
  error?: any
}

export interface Player {
  fullname:string,
  age:number
}