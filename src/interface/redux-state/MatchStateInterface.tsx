export interface MatchStateInterface {
  matchs: Match[];
  isLoading: boolean;
  isSuccessful: boolean;
  isValid: boolean;
  error?: any;
}

export interface Match {
  id: number;
  competitions: string | number;
  equipe: string;
  equipe_adverse: string;
  date_match: string;
  time_match: string;
  stade: string;
  adresse: string;
}

