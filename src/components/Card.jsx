import pin from "../images/pin.png"

export default function Card(){
    return(
        <section>
            <img src="https://images.unsplash.com/photo-1508504509543-5ca56440e013?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="info-section">
                <div className="country-section">
                    <img src={pin} alt="location-pin" />
                    <h1>JAPAN</h1>
                    <a href="https://www.google.com/maps/place/Japan/@33.0460107,126.5324867,4145180m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34674e0fd77f192f:0xf54275d47c665244!8m2!3d36.204824!4d138.252924!16zL20vMDNfM2Q?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="specific-location">Mount Fuji</h1>
                <h2 className="datas">12 Jan, 2023 - 24 Jan, 2023</h2>
                <p className="description">Mount fuji is the tallest mountain in Japan. standing at 3776 meters above sea level. Mount Fuji is the single most popular tourist site in Japan for both Japanese and foreign tourists</p>
            </div>
        </section>
    )
}