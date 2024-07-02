import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../main";
const Register = () => {
  const { user, setUser } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const { name, email, password, phone, confirmPassword } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    e.preventDefault();
    try {
      const newUser = { name, email, password, phone, confirmPassword };
      const response = await axios.post("", newUser);
      setUser({ res });
    } catch (error) {}
  };
  return <div>Register</div>;
};

export default Register;
