
export default function ComParametro(props) {

    const { titulo, subtitulo } = { ...props }

    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
        </div>
    )
}