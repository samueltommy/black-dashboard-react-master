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
import React from "react";

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

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Pengisian Data Pengukuran</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Anak</label>
                        <Input
                          placeholder="Masukkan nama lengkap anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Tanggal Lahir</label>
                        <Input
                        placeholder="Masukkan tanggal lahir anak dalam format DD-MM-YY..."
                        type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>NIK Anak</label>
                        <Input
                          placeholder="Masukkan 16 digit NIK anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          placeholder="Masukkan atau ganti username anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Nama Ayah</label>
                        <Input
                          placeholder="Masukkan nama lengkap Ayah..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Ibu</label>
                        <Input
                          placeholder="Masukkan nama lengkap Ibu..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Email Orang Tua</label>
                        <Input
                          placeholder="Masukkan e-mail orang tua..."
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup action="" method="">
                        <label>Jenis Kelamin</label>
                        <Input
                          placeholder="Pilih jenis kelamin anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    </Row><Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Alamat</label>
                        <Input
                        placeholder="Masukkan alamat rumah yang kini ditinggali..."
                        type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Posyandu</label>
                        <Input
                        placeholder="Masukkan posyandu yang didatangi..."
                        type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/kosongan.png")}
                    />
                    <h5 className="title">Nama Pengguna</h5>
                  </a>
                  <p className="description">Pengguna</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
