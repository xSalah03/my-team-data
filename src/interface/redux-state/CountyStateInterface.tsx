export interface CountryStateInterface {
  countries: Country[];
  isLoading: boolean;
  isSuccessful: boolean;
  error?: any;
}

export interface Country {
  country: string;
  logo: string;
}
