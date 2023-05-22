import axios from "axios";
import React, { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [userProvider, setUserProvider] = useState([]);

  const login = async ({ email, password }) => {
    await axios
      .post("http://localhost:3333/authenticate", { email, password })
      .then((response) => {
        setUserProvider(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const savedUser = localStorage.getItem("user");

  const createAccount = async ({
    name,
    email,
    phone,
    birthDate,
    password,
    confirmPassword,
  }) => {
    await axios
      .post("http://localhost:3333/users", {
        name,
        email,
        phone,
        birthDate,
        password,
        confirmPassword,
      })
      .then((response) => {
        login({ email, password });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const values = {
    login: login,
    createAccount: createAccount,
    userProvider: userProvider,
    savedUser: JSON.parse(savedUser),
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
