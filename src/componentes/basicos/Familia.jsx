import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" {...props} />
            <FamiliaMembro nome="Mayron" {...props} />
            <FamiliaMembro nome="Elias" {...props} />
        </div>
    )
}

export default Familia;