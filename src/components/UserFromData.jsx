// UserFromData.js

import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";

const UserFromData = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [tableData, setTableData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("userTableData")) || [];
    return storedData;
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("userTableData", JSON.stringify(tableData));
  }, [tableData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // If editing, update the existing data
      const updatedData = [...tableData];
      updatedData[editingIndex] = formData;
      setTableData(updatedData);
      setEditingIndex(null);
    } else {
      // If not editing, add new data
      setTableData([...tableData, formData]);
    }

    setFormData({
      name: "",
      password: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditingIndex(index);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-indigo-600 p-10">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl  text-center font-semibold">Login From</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              UserName
            </label>
            <input
              type="text"
              className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 "
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="" className="block text-base mb-2">
              password
            </label>
            <input
              type="text"
              className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 "
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <button
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
     
      </div>
      <UserTable
        tableData={tableData}
        setTableData={setTableData}
        handleEdit={handleEdit}
      />


     
    </>
  );
};

export default UserFromData;
