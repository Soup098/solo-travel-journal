import pin from "../images/pin.png"

export default function Card(props){
    return(
        <section>
            <img src={props.place.imgUrl} alt="country image" width="195" height="260"/>
            <div className="info-section">
                <div className="country-section">
                    <img src={pin} alt="location-pin" />
                    <h1>{props.place.country}</h1>
                    <a href={props.place.googleLink} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="specific-location">{props.place.location}</h1>
                <h2 className="dates">{props.place.dates}</h2>
                <p className="description">{props.place.description}</p>
            </div>
        </section>
    )
}