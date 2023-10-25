import React, { useEffect, useState } from 'react';
import '../style/Table.scss';
import axios from 'axios';
import { ApiData, ApiDataResponse } from '../Types/ApiData';
import { Error } from '../Types/Error';
import Pagination from '../Components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Types/RootState';
import { setCurrentPage } from '../action';
import { ApiDataField } from '../Types/ApiData';

const TablePage: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(Error.NONE);
  const [sortColumn, setSortColumn] = useState<ApiDataField>('name');
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Partial<ApiData>>({});

  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.table.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.table.itemsPerPage);

  const total = 100;
  const perPage = 15;

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    fetchData(pageNumber, perPage);
  };

  const handleSort = (column: ApiDataField) => {
    setSortColumn(column);
  };

  const fetchData = (pageNumber: number, perPage: number) => {
    axios.get<ApiDataResponse>(
      `https://technical-task-api.icapgroupgmbh.com/api/table/?page=${pageNumber}`
    )
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(Error.DOWNLOADING);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const handleEdit = (itemId: number) => {
    setIsEditing(itemId);
    const itemToEdit = data.find(item => item.id === itemId);
    setEditedData(itemToEdit ? { ...itemToEdit } : {});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const value = e.target.value;
    setEditedData(prevState => ({ ...prevState, [fieldName]: value }));
  };

  const handleSave = () => {
    if (editedData && editedData.id) {
      axios.put(`https://technical-task-api.icapgroupgmbh.com/api/table/${editedData.id}`, editedData)
        .then((response) => {
          setIsEditing(null);
          setEditedData({});
          fetchData(currentPage, itemsPerPage)
        })
        .catch((error) => {
          setError(Error.DATA_SENDING_ERROR);
        });
    } else {
      setError(Error.DATA_SENDING_ERROR);
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="TablePage">
      <h2 className='Table--title'>Table</h2>
      {loading ? (
        <div className="loading-spinner loading-container"></div>
      ) : (
        <div>
          <table className="Table">
            <thead>
              <tr>
                <th>ID</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('email')}>Email</th>
                <th onClick={() => handleSort('birthday_date')}>Birthday date</th>
                <th onClick={() => handleSort('phone_number')}>Phone number</th>
                <th onClick={() => handleSort('address')}>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {isEditing === item.id ? (
                      <input value={editedData.name || ''} onChange={(e) => handleInputChange(e, 'name')} />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <input value={editedData.email || ''} onChange={(e) => handleInputChange(e, 'email')} />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <input value={editedData.birthday_date || ''} onChange={(e) => handleInputChange(e, 'birthday_date')} />
                    ) : (
                      item.birthday_date
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <input value={editedData.phone_number || ''} onChange={(e) => handleInputChange(e, 'phone_number')} />
                    ) : (
                      item.phone_number
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <input value={editedData.address || ''} onChange={(e) => handleInputChange(e, 'address')} />
                    ) : (
                      item.address
                    )}
                  </td>
                  <td>
                    {isEditing === item.id ? (
                      <button onClick={handleSave}>Save</button>
                    ) : (
                      <button onClick={() => handleEdit(item.id)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            total={total}
            perPage={perPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {error !== Error.NONE && <div className="error-message">{error}</div>}
    </div>
  );
};

export default TablePage;
