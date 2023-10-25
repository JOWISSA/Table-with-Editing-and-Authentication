
export interface TableAction {
  type: string;
  payload?: any;
}

export interface TableState {
  data: any[];
  loading: boolean;
  error: null | string;
  currentPage: number;
  itemsPerPage: number;
}
