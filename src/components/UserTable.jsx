// UserTable.js

import React from "react";

const UserTable = ({ tableData, setTableData, handleEdit }) => {
  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((userData, index) => (
            <tr key={index}>
              <td>{userData.name}</td>
              <td>{userData.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
