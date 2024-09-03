import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./AuthForm.module.css";
import images from "../../assets/images";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorData, setErrorData] = useState("");
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      username: !username,
      password: !password,
    };

    setErrors(newErrors);

    if (newErrors.username || newErrors.password) {
      setErrorData("Введите данные в обязательные поля");
      return;
    }

    setErrorData("");
    setErrors({
      username: false,
      password: false,
    });
  };

  function ShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={classes["login-form"]}>
      <h2>Вход</h2>
      {errorData && <p className={classes["error"]}>{errorData}</p>}
      <form onSubmit={handleSubmit}>
        <div className={classes["form-group"]}>
          <label htmlFor="username">Имя пользователя</label>
          <input
            className={errors.username ? classes["input-error"] : ""}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setErrors((prev) => ({ ...prev, username: false }))}
          />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor="password">Пароль</label>
          <input
            className={errors.password ? classes["input-error"] : ""}
            type={showPassword ? "" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setErrors((prev) => ({ ...prev, password: false }))}
          />
          <button
            type="button"
            className={classes["show-password"]}
            onClick={ShowPassword}
          >
            {showPassword ? (
              <img src={images.eyeOnIcon} />
            ) : (
              <img src={images.eyeOffIcon} />
            )}
          </button>
        </div>
        <button type="submit" className={classes.button}>
          Авторизоваться
        </button>
        <div className={classes.register}>
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </div>
      </form>
    </div>
  );
}
