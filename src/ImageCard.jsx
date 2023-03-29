import React, { useState } from 'react';

const ImageCard = ({ image }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <div className="imageCard" onClick={toggleModal}>
                <img
                    src={image.links[0].href !== 'N/A' ? image.links[0].href : 'https://via.placeholder.com/400'}
                    alt={image.data[0].description}
                />
            </div>
            <div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <img
                                src={image.links[0].href !== 'N/A' ? image.links[0].href : 'https://via.placeholder.com/400'}
                                alt={image.data[0].description}
                            />

                            <div>Center: {image.data[0].center}</div>
                            <div>Date Created: {image.data[0].date_created}</div>
                            <p>Description: {image.data[0].description}</p>

                            <button onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageCard;