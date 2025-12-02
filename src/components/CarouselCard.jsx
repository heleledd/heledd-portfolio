export default function CarouselCard({id, item, onCardClick}) {
  return (
    <div key={id} className="carousel-card" onClick={() => onCardClick(id)}>
        <div className="img-container">
            <img className="carousel-img" src={item.img}></img>
        </div>
        <div className="carousel-content-container">
            <h3 className="carousel-title">{item.name}</h3>
            <p className="carousel-desc">{item.desc}</p>
        </div>
    </div>
  )
}
