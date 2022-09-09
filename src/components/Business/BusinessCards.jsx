
// styles
import "../../css/business.css"

const BusinessCards = ({ cardDetails }) => {
    const renderedCards = cardDetails.map(card => {
        return (
            <div className="business-cards" key={card._id}>
                <div className="bc-icon">
                    <img src={card.icon} alt={card.text} /></div>
                <div className="bc-text">
                    <p className="count">{card.count}</p>
                    <p className="text">{card.text}</p>
                </div>
            </div>
        )
    })

    return ( 
        <div>
            { renderedCards }
        </div>
     )
}

export default BusinessCards