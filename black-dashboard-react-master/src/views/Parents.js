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
import ParentService from "../services/parent";

import { useSignIn } from 'react-auth-kit'

const Parents=() =>{
  const signIn=useSignIn();
  const [initialAuthDone, setInitialAuthDone] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

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

  const handleSubmit = async (parentPayload) => {
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
    console.log(parentPayload, "ini payload");
    try {
      // Next, use the accessToken to make a request to MonitorService
      const parentResponse = await ParentService.parent(parentPayload, config);
      const parentData = parentResponse.data;
      console.log(parentData, "ini hasil monitor post");

      if (parentResponse.status === 201) {
        setIsSuccess(true);
        setNotificationMessage('Account created successfully.');
        formik.resetForm(); // Reset form fields
      } else {
        setIsSuccess(false);
        setNotificationMessage('Something went wrong. Please try again.');
      }

    } catch (error) {
      console.log('An error occurred during upload.');
      console.error(error);
      setIsSuccess(false);
      setNotificationMessage('Something went wrong. Please try again.');
      
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
                <h5 className="title">Pendaftaran Orangtua Baru</h5>
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
                        <label>Relasi</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.relation}
                          onChange={formik.handleChange}
                          name="relation"
                          placeholder="Relasi dengan anak (m/f/o)"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nomor Telepon</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.contact}
                          onChange={formik.handleChange}
                          name="contact"
                          placeholder="Nomor telepon orang tua"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="10">
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
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>No. Kartu Keluarga</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.no_kk}
                          onChange={formik.handleChange}
                          name="no_kk"
                          placeholder="No. kartu keluarga"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Alamat</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          name="address"
                          placeholder="Alamat"
                          required
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Tanggal Lahir</label>
                        <Input
                          type="text"
                          className="text-input"
                          value={formik.values.date_of_birth}
                          onChange={formik.handleChange}
                          name="date_of_birth"
                          placeholder="Tanggal lahir"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                        <FormGroup>
                          <label>ID Satuan Kerja</label>
                          <Input
                            type="text"
                            className="text-input"
                            value={formik.values.satker_id}
                            onChange={formik.handleChange}
                            name="satker_id"
                            placeholder="ID Satuan kerja"
                            required
                          />
                        </FormGroup>
                      </Col>
                    <Col className="pr-md-1" md="10">
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
                    </Row>
                    {isSuccess && (
                      <div>
                        {notificationMessage}
                      </div>
                    )}
                    {!isSuccess && notificationMessage && (
                      <div>
                        {notificationMessage}
                      </div>
                    )}
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

export default Parents;
