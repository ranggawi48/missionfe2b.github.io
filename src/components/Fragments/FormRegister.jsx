import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";
import Button from "../Elements/Button";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.confirmPassword) {
      alert("Harus diisi semua data!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }

    const userData = {
      username: formData.username,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registrasi berhasil!");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputForm
        label="Kata sandi"
        name="password"
        type="password"
        placeholder="Masukkan kata sandi"
        value={formData.password}
        onChange={handleChange}
      />
      <InputForm
        label="Konfirmasi Kata sandi"
        name="confirmPassword"
        type="password"
        placeholder="Masukkan kata sandi"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Navigation type="register" />
      <Button>Daftar</Button>
    </form>
  );
};

export default FormRegister;
