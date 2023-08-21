import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling
import logoPuskesmas from "assets/img/puskes.png";
import stei from "assets/img/stei.png";
import sith from "assets/img/sith.png";
import kirei from "assets/img/kirei.png";
import invisible from "assets/img/invisible.png";
import visible from "assets/img/visible.png";

import { useFormik } from "formik";
import AuthService from "../services/auth";

import axios from "axios";
import { useSignIn } from 'react-auth-kit'

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [warningMessage, setWarningMessage] = React.useState(''); // New state
  const navigate = useNavigate();
  const signIn=useSignIn();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (loginPayload) => {
    setIsLoading(true); // Set isLoading to true when the button is pressed
    setError(''); // Clear any previous error message
    setWarningMessage(''); // Clear any previous warning message
    console.log(loginPayload, "ini payload");
    try {
      const response = await AuthService.signIn(loginPayload);
      const data = response.data;
      console.log(data, "ini hasil request");
      const accessToken = data.accessToken;
      console.log(accessToken, "ini token");
      localStorage.setItem('accessToken', accessToken);
      const id = data.userData.id;
      console.log(id, "ini id");
      localStorage.setItem('id', id);
      const role = data.userData.role;
      console.log(role, "ini role");
      localStorage.setItem('role', role);
      const satker = data.userData.satker_id;
      console.log("ini satker_id", satker);
      localStorage.setItem("satker", satker);
      
      signIn({
        auth: accessToken,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: {loginPayload}
      })
      fetchdata();
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          localStorage.removeItem('accessToken');
          setWarningMessage('Invalid password'); // Set the warning message
        } else if (error.response.status === 404) {
          localStorage.removeItem('accessToken');
          setWarningMessage('Incorrect username'); // Set the warning message
        } else {
          console.log('An error occurred during login');
          console.error(error);
        }
      } else {
        console.log('An error occurred during login');
        console.error(error);
      }
      
      setIsLoading(false); // Set isLoading back to false after API call is done
      
    }
  };

  const baseURL = "http://localhost:3000";

  const fetchdata = () => {
    var config ={
      header: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer '
      }
    }

    axios.get(baseURL)
    .then(res => {
      navigate('/admin/dashboard')
    })
  }


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="login-page">
      <div className="div">
        <div className="small-team">
          <img className="logo-puskesmas" alt="Logo puskesmas" src={logoPuskesmas} />
        </div>
        <div className="div-wrapper">
          <div className="group-2">
            <div className="group-3">
              <div className="group-4">
                <h1 className="text-wrapper">Masuk</h1>
                <div className="text-wrapper-2">Halaman Web Proyek Antropometri</div>
              </div>
              <div className="text-wrapper-3">Selamat Datang !</div>
              <form onSubmit={formik.handleSubmit}>
                <div className="group-5">
                  <div className="group-21">
                    <label className="group-text">Masukkan ID Pengguna</label>
                    <input
                      type="text"
                      className="text-input"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      name="username"
                      placeholder="ID Pengguna"
                      required
                    />
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="group-21">
                        <label className="group-text">Masukkan kata sandi</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="text-input"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name="password"
                          placeholder="Kata Sandi"
                          required
                        />
                      </div>
                      <img
                        className="invisible"
                        alt={showPassword ? "Visible" : "Invisible"}
                        src={showPassword ? visible : invisible}
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap">
                    {warningMessage && <p className="warning-message">{warningMessage}</p>} {/* Display warning message */}
                      {error && <p className="error-message">{error}</p>}
                      <button className="login-button" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Masuk'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="group-7">
            <img className="logo-SITH-FC" alt="Logo SITH FC" src={sith} />
            <img className="stei-itb" alt="Stei itb" src={stei} />
            <img className="logo-kupu" alt="Logo kupu" src={kirei} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;