import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function ErrorPage403() {
  const handleGoBack = () => {
    window.history.go(-1)
  };
  return (
    <>
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="page">
        <div className="page-content">
          <div className="container text-center">
            <Row>
              <Col md={12}>
                <div>
                  <div className="text-white">
                    <div className="display-1 mb-5 font-weight-bold error-text">403</div>
                    <h1 className="h3  mb-3 font-weight-bold">Desculpe, mas você não tem permissão para acessar essa página!</h1>
                    <p className="h5 font-weight-normal mb-7 leading-normal">Você pode ter digitado errado o endereço ou a página pode ter sido movida.</p>
                    <Button className="btn text-light border-light mb-5 ms-2 fs-18" onClick={handleGoBack}>Voltar</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}