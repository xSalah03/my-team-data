export interface ClubStateInterface {
  clubs: Club[];
  isLoading: boolean;
  isSuccessful: boolean;
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
  competitions: any;
}
