/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import { useFormik } from "formik";
import UsersService from "../services/users";

import { useSignIn } from 'react-auth-kit'

const Users=() =>{
  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);

  const fetchdata = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }
  
      var config = {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        }
      };
  
    } catch (error) {
      // Handle errors here
      console.error('An error occurred during API call.', error);
    }
  };

  const handleSubmit = async (usersPayload) => {
    fetchdata();
    const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found. Please login first.');
        return;
      }
  
      var config = {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
        }
      };
    console.log(usersPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const usersResponse = await UsersService.users(usersPayload, config);
      const usersData = usersResponse.data;
      console.log(usersData, "ini hasil monitor post");

    } catch (error) {
      console.log('An error occurred during upload.');
      console.error(error);
      
    }
  };

  useEffect(() => {
    // If the initial authentication is not done, trigger the fetchdata function
    if (!initialAuthDone) {
      fetchdata();
      setInitialAuthDone(true);
    }
  }, [initialAuthDone]);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      relation: "",
      contact: "",
      nik: "",
      no_kk: "",
      address: "",
      date_of_birth: "",
      satker_id: "",
      email: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Pendaftaran Pengguna Baru</h5>
              </CardHeader>
              <CardBody>
                <form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Depan</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                          name="first_name"
                          placeholder="Nama depan"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Nama Belakang</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                          name="last_name"
                          placeholder="Nama belakang"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Alamat email"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          name="username"
                          placeholder="Username pengguna"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="10">
                      <FormGroup>
                        <label>Role</label>
                        <Input
                          type="select" // Use type="select" for dropdown
                          className="text-input"
                          value={formik.values.role}
                          onChange={formik.handleChange}
                          name="role"
                          placeholder="Role"
                          required
                        >
                          <option value="1">1</option> {/* Add options with desired values */}
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>ID Satuan Kerja</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.satker_id}
                          onChange={formik.handleChange}
                          name="satker_id"
                          placeholder="ID satker"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>NIK</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.nik}
                          onChange={formik.handleChange}
                          name="nik"
                          placeholder="NIK"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Button className="btn-fill" color="primary" type="submit">
                      Save
                    </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Users;