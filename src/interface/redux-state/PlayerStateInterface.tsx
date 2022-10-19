export interface PlayerStateInterface {
  players: Player[];
  isLoading: boolean;
  isSuccessful: boolean;
  error?: any;
}

export interface Player {
  id: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  poste: string;
  lateralite: string;
  nationalite: string;
  numero_dossard: string;
  id_equipe: number;
  image: string;
  sexe: string;
  instat_fullname: any;
  national_team: number;
  category: any;
  poids: number;
  taille: number;
}

