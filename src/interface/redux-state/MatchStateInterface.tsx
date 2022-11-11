export interface MatchStateInterface {
    matchs: Match[];
    isLoading: boolean;
    isSuccessful: boolean;
    isValid: boolean;
    error?: any;
  }
  
  export interface Match {
    id: number;
    nom: string;
    prenom: string;
    date_naissance: string;
    poste: string;
    lateralite: string;
    nationalite: string;
    numero_dossard: number;
    id_equipe: number;
    image: string;
    sexe: string;
    instat_fullname: any;
    national_team: number;
    category: any;
    poids: number;
    taille: number;
  }
  
  