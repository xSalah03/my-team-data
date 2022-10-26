export interface SaisonStateInterface {
    saisons: Saison[];
    isLoading: boolean;
    isSuccessful: boolean;
    isValid: boolean;
    error?: any;
  }
  
  export interface Saison {
    id: number;
    saison:  number[];
    active: number;
  }
  