export const Card = ({cardTitle = 'default title', cardText, cardImage}) => {
    return (

        <div className="card">
        <img src={cardImage} className="card-img-top custom-img" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
        </div>
        </div>    
    )
}