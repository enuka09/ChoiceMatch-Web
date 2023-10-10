import React, {useState} from 'react';
import axios from "../config/axios";

async function getDressPrediction(data) {
    const response = await axios.post('/predict', data);
    return response.data;  // assuming the response contains the prediction results directly
}

const FashionRecommendation = () => {
    const [formData, setFormData] = useState({
        'Age': '',
        'Skin color': '',
        'FashionType': '',
        'Event': '',
        'Size': '',
        'Climate': '',
        'ColorMode': '',
        'Gender': '',
        'Color': '',
        'BudgetRange': ''
    });
    const [dressImages, setDressImages] = useState([]);

    function handleInputChange(event) {
        const {name, value} = event.target;
        let adjustedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');
        adjustedName = adjustedName.trim();
        setFormData(prevState => ({...prevState, [adjustedName]: value}));
    }

    function handleButtonClick() {
        getDressPrediction(formData)
            .then((prediction) => {
                const images = Object.values(prediction).map(pair => ({
                    top: `http://127.0.0.1:5000/images/Top_Dress/${pair.top_id}.jpg`,
                    bottom: `http://127.0.0.1:5000/images/Bottom_Dress/${pair.bottom_id}.jpg`
                }));
                setDressImages(images);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error.message);
            });
    }

    return (
        <div className="fashion-container">
            <div className="fashion-input">
                <label className="fashion-label">How old are you?</label>
                <select name="Age" onChange={handleInputChange} className="fashion-select">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What is your Skin Color?</label>
                <select name="Skin color" onChange={handleInputChange} className="fashion-select">
                    <option value="brown">Brown</option>
                    <option value="dark">Dark</option>
                    <option value="others">Others</option>
                    <option value="white">White</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What type of Fashion do you prefer most?</label>
                <select name="FashionType" onChange={handleInputChange} className="fashion-select">
                    <option value="Simple cloth">Simple Cloth</option>
                    <option value="Formal cloth">Formal Cloth</option>
                    <option value="Professional cloth">Professional Cloth</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">For which type of Occasion or Event are you looking?</label>
                <select name="Event" onChange={handleInputChange} className="fashion-select">
                    <option value="Funeral">Funeral</option>
                    <option value="General">General</option>
                    <option value="Indoor party">Indoor Party</option>
                    <option value="Outdoor party">Outdoor Party</option>
                    <option value="wedding">Wedding</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What is your preferred Size?</label>
                <select name="Size" onChange={handleInputChange} className="fashion-select">
                    <option value="small">Small</option>
                    <option value="Large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="2XL">2XL</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What's the weather like where you'll be wearing this?</label>
                <select name="Climate" onChange={handleInputChange} className="fashion-select">
                    <option value="Normal">Normal</option>
                    <option value="Sunny">Sunny</option>
                    <option value="Rainy">Rainy</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">Do you prefer darker or lighter shades?</label>
                <select name="ColorMode" onChange={handleInputChange} className="fashion-select">
                    <option value="Dark">Dark</option>
                    <option value="Light">Light</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">Specify your Gender?</label>
                <select name="Gender" onChange={handleInputChange} className="fashion-select">
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What primary color are you interested in?</label>
                <select name="Color" onChange={handleInputChange} className="fashion-select">
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Grey">Grey</option>
                    <option value="Others">Others</option>
                    <option value="Pink">Pink</option>
                    <option value="Purple">Purple</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>
                    <option value="White">White</option>
                </select>
            </div>

            <div className="fashion-input">
                <label className="fashion-label">What's your budget range?</label>
                <select name="BudgetRange" onChange={handleInputChange} className="fashion-select">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className="fashion-input">
                <button onClick={handleButtonClick} className="fashion-btn">Get Recommendation</button>
            </div>

            <div className="fashion-output">
                {dressImages.map((dress, idx) => (
                    <div key={idx} className="fashion-pair">
                        <p>Pair {idx + 1}</p>
                        <img src={dress.top} alt="Top Dress" width="300" className="fashion-pair"/>
                        <img src={dress.bottom} alt="Bottom Dress" width="300" className="fashion-pair"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FashionRecommendation;
