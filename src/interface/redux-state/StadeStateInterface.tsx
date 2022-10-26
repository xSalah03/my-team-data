export interface StadeStateInterface {
    stades: Stade[];
    isLoading: boolean;
    isSuccessful: boolean;
    isValid: boolean;
    error?: any;
  }
  
  export interface Stade {
    id: number
    nom: string;
    adresse: string;
    maps: string;
  }
  