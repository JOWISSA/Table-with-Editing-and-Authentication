
export interface ApiData {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}


export interface ApiDataResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiData[];
}

export type ApiDataField = 'id' | 'name' | 'email' | 'birthday_date' | 'phone_number' | 'address';
