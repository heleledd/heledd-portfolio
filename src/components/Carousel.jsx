import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css'

function Carousel({ items} ) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }
        
        ]
    };

    return (
        <>
            <div className="carousel-container">
                <Slider {...settings}>
                    {items.map((item, index) => (
                        <div key={index} className="carousel-card">
                            <div className="img-container">
                                <img className="carousel-img" src={item.img}></img>
                            </div>
                            <div className="carousel-content-container">
                                <h3 className="carousel-title">{item.name}</h3>
                                <p className="carousel-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Carousel