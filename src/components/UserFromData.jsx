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
      <form action="">
        <input
          className="mt-1 px-3 py-2 bg-white border border-slate-300 w-4/12 rounded-md sm:text-sm focus:ring-1"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="mt-1 px-3 py-2 bg-white border border-slate-300 w-4/12 rounded-md sm:text-sm focus:ring-1"
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className="bg-indigo-500 px-8 py-2 rounded"
          onClick={handleSubmit}
        >
          {editingIndex !== null ? "Update" : "Save"}
        </button>
      </form>
      <UserTable
        tableData={tableData}
        setTableData={setTableData}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default UserFromData;
