import propTypes from "prop-types";
function Result ({total}) {

    return (
        <p>Total es: {total} </p>
    )

}

Result.propTypes = {
    total: propTypes.number,

}
export default Result;