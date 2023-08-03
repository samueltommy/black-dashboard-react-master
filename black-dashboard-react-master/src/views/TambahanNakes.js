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

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Pendaftaran Tenaga Kesehatan Baru</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama Depan</label>
                        <Input
                          placeholder="Masukkan nama depan anak..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Nama Belakang</label>
                        <Input
                        placeholder="Masukkan nama belakang anak..."
                        type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>E-mail Orangtua</label>
                        <Input
                          placeholder="Masukkan e-mail orangtua..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Kata Sandi</label>
                        <Input
                          placeholder="Ketikkan posisi yang sesuai dengan pengguna..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="10">
                      <FormGroup>
                        <label>Posisi</label>
                        <Input
                          placeholder="Masukkan atau ganti kata sandi..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>NIP</label>
                        <Input
                          placeholder="Masukkan NIP..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>NIK</label>
                        <Input
                          placeholder="Masukkan 16 digit NIK anak..."
                          type="number"
                        />
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
        </Row>
      </div>
    </>
  );
}

export default Icons;