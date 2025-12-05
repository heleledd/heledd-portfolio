import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css'
import CarouselCard from "./CarouselCard.jsx";

function Carousel({ items, handleCardClick } ) {
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
                        <CarouselCard key={index} id={index} item={item} onCardClick={() => handleCardClick(item)} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Carousel
