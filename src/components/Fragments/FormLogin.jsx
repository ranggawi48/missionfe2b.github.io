import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";
import Button from "../Elements/Button";
import { AuthContext } from "../../context/AuthContext";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = loginData;

    if (!username || !password) {
      alert("Harap masukkan username dan kata sandi.");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Akun tidak ditemukan. Silakan registrasi terlebih dahulu.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (username === parsedUser.username && password === parsedUser.password) {
      alert("Login berhasil!");

      login(parsedUser);
      navigate("/home");
    } else {
      alert("Username atau kata sandi salah.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Masukkan username"
          value={loginData.username}
          onChange={handleChange}
        />
        <InputForm
          label="Kata Sandi"
          name="password"
          type="password"
          placeholder="Masukkan kata sandi"
          value={loginData.password}
          onChange={handleChange}
        />
        <Navigation type="login" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default FormLogin;