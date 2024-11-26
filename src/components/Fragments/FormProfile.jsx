import React, { useState, useEffect } from "react";
import InputForm from "../Elements/InputProfile";

const FormEdit = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setFormData({
        username: userObj.username || "",
        email: userObj.email || "",
        password: userObj.password || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("user", JSON.stringify(updatedData)); // Update localStorage immediately
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Data berhasil diperbarui!");

    setFormData(formData);
  };

  const handleClear = () => {
    localStorage.clear();
    alert("Data berhasil dihapus!");
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    window.location.href = "/"; 
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        label="Kata sandi"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="flex gap-4 mt-1">
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-blue-800 hover:text-white mb-2 z-10"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-red-800 hover:text-white mb-2 z-10"
        >
          Hapus
        </button>
      </div>
    </form>
  );
};

export default FormEdit;
