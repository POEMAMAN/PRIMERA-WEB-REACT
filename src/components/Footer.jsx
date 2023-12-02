import propTypes from "prop-types";
//en vez de poner todo el rato props, puedes destructurarlo, pones en llaves directamente el nombre de la propiedad, 
//y luego llamas en el elemento directamente el nombre de la propiedad
function Footer ({instagram,x}) {

    return (<footer>
        <h2>Este es mi pie de pagina</h2>
        <p>{instagram}</p>
        <p>{x}</p>
    </footer>)
}
Footer.propTypes = {
    instagram: propTypes.string,
    x: propTypes.string

}

export default Footer;