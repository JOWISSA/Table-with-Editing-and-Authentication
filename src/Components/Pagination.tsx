import React from 'react';
import '../style/Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../action';
import { RootState } from '../Types/RootState';

interface PaginationProps {
  total: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, perPage, onPageChange }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.table.currentPage);
  const totalPages = Math.ceil(total / perPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    onPageChange(pageNumber);
    }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
          <button className="page-link custom-button" onClick={() => handlePageClick(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;