import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  return (
    <>
      <h1 className="text-center display-3">NOTICIAS</h1>
      <hr />
      <Container>
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
