// UserTable.js

import React from "react";

const UserTable = ({ tableData, setTableData, handleEdit }) => {
  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <>
    <h2 className="text-3xl font-semibold text-center pt-5 pb-8"> Table Data</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Password</th>
   
          </tr>
        </thead>
        <tbody>
          {tableData.map((userData, index) => {
            return (
              <tr className="text-center">
                <td className="py-2 px-4 border-b">{userData.name}</td>
                <td className="py-2 px-4 border-b">{userData.password}</td>
                <td className="py-2 px-4 border-b flex gap-8 text-center">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
