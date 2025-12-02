import { X } from 'lucide-react';
import '../styles/ReadMoreOverlay.css'

export default function ReadMoreOverlay({item, handleCardClick}) {
    return (
        <div className="modal-container">
            <div className="modal-card">

                <button 
                    className="close-modal-btn" 
                    onClick={() => handleCardClick(item)}
                >
                    <X size={24} />
                </button>

                <div className="rider-full-profile-content">
                    <img className='rider-full-profile-image' src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
    );
}