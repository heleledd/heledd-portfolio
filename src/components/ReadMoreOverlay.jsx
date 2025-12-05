import { X } from 'lucide-react';
import '../styles/ReadMoreOverlay.css'
import ReactMarkdown from 'react-markdown';

export default function ReadMoreOverlay({item, handleCardClick}) {

    function Fade() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
    }

    return (
        <div className="modal-container">
            <div className="modal-card">

                <button 
                    className="close-modal-btn" 
                    onClick={() => handleCardClick(item)}
                >
                    <X size={24} />
                </button>

                <div className="full-profile-content">
                    <img className='full-profile-image' src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                    <ReactMarkdown>{item.long_desc}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}