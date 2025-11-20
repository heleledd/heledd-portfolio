import '../styles/Carousel.css'

function Carousel({ items} ) {
    
    return (
        <>
            <div className="carousel-container">
                {items.map((item, index) => (
                    <div key={index}>
                        <img className="carousel-img" src={item.img}></img>
                        <h2 className="carousel-title">{item.name}</h2>
                        <p className="carousel-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Carousel