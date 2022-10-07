import './Card.css'

const Card = (props) => {

    const { titulo, color, children } = props

    const cardStyle = {
        'backgroundColor': color || '#F00',
        'borderColor': color || '#F00'
    }

    return (
        <div className='card' style={cardStyle}>
            <div className='title'>{titulo}</div>
            <div className='content'>{children}</div>
        </div>
    )
}

export default Card;