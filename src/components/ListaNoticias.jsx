import { Row, CardGroup, Container } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  const listadoNoticas = [...noticias]
  return (
    <>
      <CardGroup>
        <Row>
          {listadoNoticas.map((noticia, index) => (
            <Noticia key={index} noticia={noticia}></Noticia>
          ))}
        </Row>
      </CardGroup>
    </>
  );
};

export default ListaNoticias;
