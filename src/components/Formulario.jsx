import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react";
const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [noticias, setNoticias] = useState([]);
  const DEFAULT_PAIS = "Argentina";
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
  const paisElegido = (pais) =>{
    const keyPais = KEY_PAISES[pais] ?? DEFAULT_PAIS;
    return keyPais;
  }
  useEffect(() => {
    consultarApi(categoria);
  }, [categoria, pais]);

  const consultarApi = async (categoria) => {
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_2390338fd0d756307ef040ecd26608655dde4&category=" +
          categoria
      );
      const dato = await respuesta.json();
      setNoticias(dato.results);
      console.log(dato.results);
      console.log(categoria);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form className="container">
        <Form.Group
          className="row align-items-center"
          controlId="formBasicEmail"
        >
          <div className="col-md-2">
            <Form.Label>Buscar por categorias y pais:</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Select
              id="categoria"
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
          <div className="col-md-5">
            <Form.Select
              id="pais"
               value={pais}
              onChange={(e) => {
                const keyPais = paisElegido(e.target.value)
                setPais(keyPais);
                // consultarApi(categoria)
              }}
            >
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Angola</option>
              <option>Argentina</option>
            </Form.Select>
          </div>
        </Form.Group>
        <hr></hr>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </>
  );
};

export default Formulario;
