

export interface CompetitionStateInterface {
    competitions: Competition[];
    isLoading: boolean;
    isSuccessful: boolean;
    isValid: boolean;
    error?: any;
  }
  
  export interface Competition {
    id: number;
    label: string;
    date_debut: string;
    date_fin: string;
    location: string;
    pays_org: string;
  }
  