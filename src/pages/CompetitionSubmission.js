import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import CompetitionGuidelines from "../components/CompetitionGuidelines";
import {BsUpload} from 'react-icons/bs';

const CompetitionSubmission = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const clearErrorMessage = () => {
        setErrorMessage(null);
    };

    const [modalContent, setModalContent] = useState({
        title: '',
        body: '',
        footer: '',
        action: null
    });

    const [showModal, setShowModal] = useState(false);

    const location = useLocation();
    const {imageUrl, title, description} = location.state || {};

    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const fileList = event.target.files || event.dataTransfer.files;
        const imageUrls = Array.from(fileList).map(file => URL.createObjectURL(file));

        if (images.length + imageUrls.length > 3) {
            setErrorMessage("You can upload a Maximum of 3 Images.");
            return;
        }

        setImages(prevImages => [...prevImages, ...imageUrls]);
    };

    const handleImageRemove = (urlToRemove) => {
        setImages(prevImages => prevImages.filter(url => url !== urlToRemove));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        handleImageUpload(event);
    };

    const handleSubmit = () => {
        if (images.length === 0) {
            setModalContent({
                title: 'Warning',
                body: 'Please Upload Images first.',
                footer: 'Close',
                action: null
            });
            setShowModal(true);
            return;
        }
        setModalContent({
            title: 'Confirmation',
            body: 'Are you sure you want to submit?',
            footer: 'Yes',
            action: 'confirm'
        });
        document.body.classList.add('no-scroll'); // Add this line
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove('no-scroll'); // Add this line
    };
    const [showPostRefreshModal, setShowPostRefreshModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('showSuccessMessage') === 'true') {
            setModalContent({
                title: 'Success',
                body: 'Your Outfit Images are submitted successfully!',
                footer: 'Close',
                action: 'success'
            });
            setShowModal(true);
            localStorage.removeItem('showSuccessMessage'); // Clear the flag
        }
    }, []);

    const confirmSubmission = () => {
        // Logic to send the images to the backend
        // ...

        // Set a flag in localStorage to show the success message after the page reloads
        localStorage.setItem('showSuccessMessage', 'true');

        // Refresh the page
        window.location.reload();
    };

    return (
        <div className="competition-section">
            <div className="theme-display">
                <div className="theme-details">
                    <p className="theme-display-title">{title}</p>
                    <p className="theme-display-description">{description}</p>
                </div>
                <div className="theme-image">
                    <img src={imageUrl} alt={title}/>
                </div>
            </div>

            <div className="submission-section">
                <div className="submission-section-inner">
                    <div className="submission-description">
                        <p style={{fontWeight: 'bold', fontSize: '24px'}}>Attention Participants!</p>
                        <p>📜 Before diving into the competition, it's crucial to familiarize yourself with the rules.
                            👉 Please ensure you thoroughly read and understand the Competition Guidelines.</p>
                    </div>
                </div>
                <CompetitionGuidelines/>
                <p style={{fontWeight: '500', fontSize: '36px'}}>Upload your Outfit Here</p>
                <p style={{fontWeight: '500', fontSize: '14px', color: 'var(--color-677279)'}}>Maximum Number of Outfit Images you can submit is 3</p>
                <div className="upload-section" onDragOver={handleDragOver} onDrop={handleDrop}
                     onClick={clearErrorMessage}>
                    {errorMessage && <p style={{color: 'red', marginBottom: '10px'}}>{errorMessage}</p>}
                    <label htmlFor="outfit-upload" className="upload-label">
                        <div className="upload-icon">
                            <BsUpload/>
                        </div>
                        <p>Click here or drag and drop your outfit image</p>
                    </label>
                    <input type="file" id="outfit-upload" className="upload-input" accept="image/*"
                           onChange={handleImageUpload} multiple/>
                </div>
                <div className="uploaded-images">
                    {images.map((url, index) => (
                        <div className="uploaded-image" key={index}>
                            <img src={url} alt="Uploaded Outfit" className="preview-image"/>
                            <button className="btn-delete" onClick={() => handleImageRemove(url)}>x</button>
                        </div>
                    ))}
                </div>

                <div className="submit-section">
                    <button className="btn btn-filter" onClick={handleSubmit}>Submit</button>
                </div>
            </div>

            {showModal && <div className="modal-backdrop show"></div>}
            <div className={showModal ? "modal fade show d-block" : "modal fade"} id="myModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{modalContent.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {modalContent.body}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={closeModal}>Close
                            </button>
                            {modalContent.action === 'confirm' && <button type="button" className="btn btn-primary"
                                                                          onClick={confirmSubmission}>Yes</button>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionSubmission;
