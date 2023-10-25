import { TableAction, TableState } from '../Types/table';

const initialState: TableState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
};

const tableReducer = (state: TableState = initialState, action: TableAction): TableState => {
  switch (action.type) {
    case 'FETCH_TABLE_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_TABLE_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'FETCH_TABLE_FAILURE':
      return { ...state, loading: false, data: [], error: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
