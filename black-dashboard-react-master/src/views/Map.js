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

function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Pendaftaran Satuan Kerja Baru</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Nama</label>
                        <Input
                          placeholder="Masukkan nama resmi satuan kerja..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Alamat</label>
                        <Input
                        placeholder="Masukkan alamat lengkap satuan kerja..."
                        type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Latituda</label>
                        <Input
                          placeholder="Masukkan angka latituda yang sesuai..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Longituda</label>
                        <Input
                          placeholder="Masukkan angka longituda yang sesuai..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                     <Col className="px-md-1" md="5">
                      <FormGroup>
                        <label>Desa</label>
                        <Input
                          placeholder="Masukkan nama desa..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Kecamatan</label>
                        <Input
                          placeholder="Masukkan nama kecamatan..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-md-1" md="5">
                      <FormGroup>
                        <label>Kota/Kabupaten</label>
                        <Input
                          placeholder="Masukkan nama kota/kabupaten..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Provinsi</label>
                        <Input
                          placeholder="Masukkan nama provinsi..."
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

export default Map;
