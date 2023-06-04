import { Row, CardGroup, Container } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  const listadoNoticas = [...noticias]
//   const noticias = noticiasFiltradas? (
//     <CardGroup>
//       <Row>
//         {noticiasFiltradas.map((noticia, index) => (
//           <Noticia key={index} noticia={noticia}></Noticia>
//         ))}
//       </Row>
//     </CardGroup>
//   ) : (
//     <Container className="my-5">
//       <h1 className="display-4 text-center fst-italic">
//         No hay noticias disponibles
//       </h1>
//     </Container>
//   );
  return (
    <>
    {/* {noticias} */}
      {/* <Container className="my-5">
        <h1 className="display-4 text-center fst-italic">
          No hay noticias disponibles
        </h1>
      </Container> */}
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
