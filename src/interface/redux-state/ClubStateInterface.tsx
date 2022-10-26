export interface ClubStateInterface {
  clubs: Club[];
  isLoading: boolean;
  isSuccessful: boolean;
  isValid: boolean;
  error?: any;
}

export interface Club {
  id: number;
  nom: string;
  slug: string;
  categories: string;
  logo: string;
  country: string;
  sexe: string;
  type: string;
  competitions: string | number;
}
