import propTypes from "prop-types";

function Button(props) {
    return <button className={props.classCss} id={props.id}>
                {props.title} 
           </button>;
}
Button.propTypes = {
    title: propTypes.string,
    classCss: propTypes.string.isRequired,
    id: propTypes.number
}

export default Button;
    