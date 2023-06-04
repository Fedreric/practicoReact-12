import { Container, Form, Spinner } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react";
const Formulario = () => {
  const [categoria, setCategoria] = useState("business");
  const [pais, setPais] = useState("ar");
  const [noticias, setNoticias] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const DEFAULT_PAIS = "ar";
  const KEY_PAISES = {
    Afghanistan: "af",
    Albania: "al",
    Algeria: "dz",
    Angola: "ao",
    Argentina: "ar",
    Australia: "au",
    Austria: "at",
    Azerbaijan: "az",
    Bahrain: "bh",
    Bangladesh: "bd",
    Barbados: "bb",
    Belarus: "by",
    Belgium: "be",
    Bermuda: "bm",
    Bhutan: "bt",
    Bolivia: "bo",
    BosniaAndHerzegovina: "ba",
    Brazil: "br",
    Brunei: "bn",
    Bulgaria: "bg",
    Burkinafasco: "bf",
    Cambodia: "kh",
    Cameroon: "cm",
    Canada: "ca",
    CapeVerde: "cv",
    CaymanIslands: "ky",
    Chile: "cl",
    China: "cn",
    Colombia: "co",
    Comoros: "km",
    CostaRica: "cr",
    CôtedIvoire: "ci",
    Croatia: "hr",
    Cuba: "cu",
    Cyprus: "cy",
    Czechrepublic: "cz",
    Denmark: "dk",
    Djibouti: "dj",
    Dominica: "dm",
    Dominicanrepublic: "do",
    DRCongo: "cd",
    Ecuador: "ec",
    Egypt: "eg",
    ElSalvador: "sv",
    Estonia: "ee",
    Ethiopia: "et",
    Fiji: "fj",
    Finland: "fi",
    France: "fr",
    Frenchpolynesia: "pf",
    Gabon: "ga",
    Georgia: "ge",
    Germany: "de",
    Ghana: "gh",
    Greece: "gr",
    Guatemala: "gt",
    Guinea: "gn",
    Haiti: "ht",
    Honduras: "hn",
    Hongkong: "hk",
    Hungary: "hu",
    Iceland: "is",
    India: "in",
    Indonesia: "id",
    Iraq: "iq",
    Ireland: "ie",
    Israel: "il",
    Italy: "it",
    Jamaica: "jm",
    Japan: "jp",
    Jordan: "jo",
    Kazakhstan: "kz",
    Kenya: "ke",
    Kuwait: "kw",
    Kyrgyzstan: "kg",
    Latvia: "lv",
    Lebanon: "lb",
    Libya: "ly",
    Lithuania: "lt",
    Luxembourg: "lu",
    Macau: "mo",
    Macedonia: "mk",
    Madagascar: "mg",
    Malawi: "mw",
    Malaysia: "my",
    Maldives: "mv",
    Mali: "ml",
    Malta: "mt",
    Mauritania: "mr",
    Mexico: "mx",
    Moldova: "md",
    Mongolia: "mn",
    Montenegro: "me",
    Morocco: "ma",
    Mozambique: "mz",
    Myanmar: "mm",
    Namibia: "na",
    Nepal: "np",
    Netherland: "nl",
    Newzealand: "nz",
    Niger: "ne",
    Nigeria: "ng",
    Northkorea: "kp",
    Norway: "no",
    Oman: "om",
    Pakistan: "pk",
    Panama: "pa",
    Paraguay: "py",
    Peru: "pe",
    Philippines: "ph",
    Poland: "pl",
    Portugal: "pt",
    Puertorico: "pr",
    Romania: "ro",
    Russia: "ru",
    Rwanda: "rw",
    Samoa: "ws",
    SanMarino: "sm",
    Saudiarabia: "sa",
    Senegal: "sn",
    Serbia: "rs",
    Singapore: "sg",
    Slovakia: "sk",
    Slovenia: "si",
    SolomonIslands: "sb",
    Somalia: "so",
    Southafrica: "za",
    Southkorea: "kr",
    Spain: "es",
    SriLanka: "lk",
    Sudan: "sd",
    Sweden: "se",
    Switzerland: "ch",
    Syria: "sy",
    Taiwan: "tw",
    Tajikistan: "tj",
    Tanzania: "tz",
    Thailand: "th",
    Tonga: "to",
    Tunisia: "tn",
    Turkey: "tr",
    Turkmenistan: "tm",
    Uganda: "ug",
    Ukraine: "ua",
    Unitedarabemirates: "ae",
    Unitedkingdom: "gb",
    Unitedstatesofamerica: "us",
    Uruguay: "uy",
    Uzbekistan: "uz",
    Venezuela: "ve",
    Vietnam: "vi",
    Yemen: "ye",
    Zambia: "zm",
    Zimbabwe: "zw",
  };
  const paisElegido = (pais) => {
    const keyPais = KEY_PAISES[pais] ?? DEFAULT_PAIS;
    return keyPais;
  };
  useEffect(() => {
    consultarApi();
  }, [categoria, pais]);

  const consultarApi = async () => {
    setSpinner(true);
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_2390338fd0d756307ef040ecd26608655dde4&category=${categoria}&country=${pais}`
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      setSpinner(false);
    } catch (e) {
      console.log(e);
    }
  };

  const mostrarSpiner = spinner?(
    <Container className="my-5 text-center">
      <Spinner animation="border" />;
    </Container>
  ):(
    <ListaNoticias noticias={noticias}></ListaNoticias>
  )

  return (
    <>
      <Form className="container">
        <Form.Group
          className="row align-items-center"
        >
          <div className="col-md-2">
            <Form.Label>Buscar por categorias: </Form.Label>
          </div>
          <div className="col-md-10">
            <Form.Select
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            >
              <option>business</option>
              <option>entertainment</option>
              <option>environment</option>
              <option>food</option>
              <option>health</option>
              <option>politics</option>
              <option>science</option>
              <option>sports</option>
              <option>technology</option>
              <option>top</option>
              <option>tourism</option>
              <option>world</option>
            </Form.Select>
          </div>
        <div className="col-md-2">
            <Form.Label>Buscar por pais: </Form.Label>
          </div>
          <div className="col-md-10">
            <Form.Select
              id="pais"
              name="pais"
              value={pais}
              onChange={(e) => {
                const keyPais = paisElegido(e.target.value.trim());
                setPais(keyPais);
              }}
            >
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Angola</option>
              <option>Argentina</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Bermuda</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>BosniaAndHerzegovina</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkinafasco</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>CapeVerde</option>
              <option>CaymanIslands</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>CostaRica</option>
              <option>CôtedIvoire</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czechrepublic</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominicanrepublic</option>
              <option>DRCongo</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>ElSalvador</option>
              <option>Estonia</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Frenchpolynesia</option>
              <option>Gabon</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Haiti</option>
              <option>Honduras</option>
              <option>Hongkong</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Libya</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Macau</option>
              <option>Macedonia</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Mauritania</option>
              <option>Mexico</option>
              <option>Moldova</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar</option>
              <option>Namibia</option>
              <option>Nepal</option>
              <option>Netherland</option>
              <option>Newzealand</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>Northkorea</option>
              <option>Norway</option>
              <option>Oman</option>
            </Form.Select>
          </div>
        </Form.Group>
        <hr></hr>
      </Form>
      {mostrarSpiner}
    </>
  );
};

export default Formulario;
