export interface ArbitreStateInterface {
    arbitres: Arbitre[];
    isLoading: boolean;
    isSuccessful: boolean;
    isValid: boolean;
    error?: any;
  }
  
  export interface Arbitre {
    id: number;
    nom: string;
    prenom: string;
    role: string;
    nationalite: string;
    photo: string;
  }
  