import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from '@react-google-maps/api';

const Hospitals = () => {
    const mapContainerStyle = {
        width: '700px',
        height: '400px',
        position: 'absolute',
        left: '450px',
        top: '50px',
        borderRadius: '18px',
        overflow: 'hidden'
    };

    const center = {
        lat: 16.5169,
        lng: 80.6452
    };

    const searchBoxRef = useRef(null);
    const mapRef = useRef(null);

    const onLoad = (ref) => {
        searchBoxRef.current = ref;
    };

    const onPlacesChanged = () => {
        const places = searchBoxRef.current.getPlaces();
        const bounds = new window.google.maps.LatLngBounds();

        if (places && places.length > 0) {
            places.forEach((place) => {
                if (place.geometry && place.geometry.location) {
                    bounds.extend(place.geometry.location);
                }
            });
            mapRef.current.fitBounds(bounds);
        }
    };

    const hospitalTypes = [
        "General Hospital", 
        "Children's Hospital",
        "MultiSpeaciality Hospital",
        "NueroPathic Hospital",
        "Dental Hospital", 
        "Rehabilitation Hospital", 
        "Specialized Clinic", 
        "Urgent Care Center"
    ];

    const hospitals = [
        {
            name: "Krishna Institute of Medical Sciences (KIMS)",
            specialties: "30 Physicians, 15 Surgeons, 12 Anesthetists",
            treatments: "cardiology, neurology, orthopedic surgery",
            address: "5th Floor, Vijaya Durga Complex, MG Road, Vijayawada",
            contact: "0866-2482000",
            latitude: 16.5069,
            longitude: 80.66,
        },
        {
            name: "NRI General Hospital",
            specialties: "20 Physicians, 6 Surgeons, 10 Pediatricians",
            treatments: "emergency care, maternity services, cancer treatment",
            address: "Opposite Satyam Theatre, NH16, Vijayawada",
            contact: "0866-2490000",
            latitude: 16.5233,
            longitude: 80.6452,
        },
        {
            name: "Vijaya Hospital",
            specialties: "8 Physicians, 2 Surgeons, 4 Cardiologists",
            treatments: "general medicine, critical care, diabetes management",
            address: "Narayana Rao Road, Vijayawada",
            contact: "0866-2501000",
            latitude: 16.5040, 
            longitude: 80.6300, 
        },
        {
            name: "American Hospital",
            specialties: "12 Physicians, 3 Neurologists, 8 Dentists, 10 Cardiologists",
            treatments: "eye surgery, chemotherapy, liver transplant, kidney transplant",
            address: "abc, xyz, 123, Vijayawada",
            contact: "678432674827",
        },
        {
            name: "Medcy Hospital",
            specialties: "15 Physicians, 4 Surgeons, 5 Cardiologists",
            treatments: "general surgery, cardiac care, orthopedic treatments",
            address: "pqr, st, 456, Vijayawada",
            contact: "678432674828",
        },
        {
            name: "Srinivasa Hospitals",
            specialties: "10 Physicians, 3 Surgeons, 5 Gynecologists",
            treatments: "orthopedic surgeries, maternity care, pediatric services",
            address: "NTR Circle, Vijayawada",
            contact: "0866-2470000",
            latitude: 16.5050, 
            longitude: 80.6400, 
        },
        
    ];

    const actions = [
        { label: "Book Video Consultation", onClick: () => console.log("Video Consultation") },
        { label: "Book Appointment", onClick: () => console.log("Appointment") },
        { label: "Call Ambulance", onClick: () => console.log("Ambulance") },
    ];

    const [currentHospitalIndex, setCurrentHospitalIndex] = useState(0);

    const handleNext = () => {
        setCurrentHospitalIndex((prevIndex) => (prevIndex + 1) % hospitals.length);
    };

    const handlePrev = () => {
        setCurrentHospitalIndex((prevIndex) => (prevIndex - 1 + hospitals.length) % hospitals.length);
    };

    const currentHospital = hospitals[currentHospitalIndex];

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div
                style={{
                    width: '307px',
                    height: '644px',
                    borderRadius: '18px',
                    backgroundColor: '#D71345',
                    position: 'absolute',
                    left: '92px',
                    top: '50px',
                    padding: '10px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    overflowY: 'auto'
                }}
            >
                <h2>Hospital Type</h2>
                <br />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    {hospitalTypes.map((type) => (
                        <div key={type} style={{ marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" id={type} name={type} />
                            <label htmlFor={type} style={{ marginLeft: '8px' }}>{type}</label>
                        </div>
                    ))}
                </div>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyDr20O9bMcae2tLopmByUQ6hhB3HTrU5Sw" libraries={['places']}>
                <GoogleMap
                    ref={mapRef}
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={13.5}
                >
                    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                        <input
                            type="text"
                            placeholder="Search for hospitals"
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `240px`,
                                height: `32px`,
                                padding: `0 12px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "400px",
                                top: "15px"
                            }}
                        />
                    </StandaloneSearchBox>
                    
                    {/* Markers for each hospital */}
                    {hospitals.map((hospital, index) => (
                        <Marker 
                            key={index} 
                            position={{ lat: hospital.latitude, lng: hospital.longitude }} 
                            title={hospital.name}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>

            <div style={{
                position: 'absolute',
                left: '450px',
                top: '470px', 
                width: '700px',
                padding: '20px',
                backgroundColor: '#f2f2f2',
                borderRadius: '10px',
                textAlign: 'center'
            }}>
                <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h3>{currentHospital.name}</h3>
                    <p><strong>Available:</strong> {currentHospital.specialties}</p>
                    <p><strong>Treatments:</strong> {currentHospital.treatments}</p>
                    <p><strong>Address:</strong> {currentHospital.address}</p>
                    <p><strong>Contact:</strong> {currentHospital.contact}</p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {actions.map((action, i) => (
                            <button
                                key={i}
                                onClick={action.onClick}
                                style={{
                                    padding: '10px 20px',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    borderRadius: '5px',
                                    backgroundColor: '#D71345',
                                    color: '#fff',
                                    border: 'none'
                                }}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <button 
                        onClick={handlePrev} 
                        style={{
                            marginRight: '10px',
                            padding: '5px 10px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            backgroundColor: '#D71345',
                            color: '#fff',
                            border: 'none'
                        }}
                    >
                        Previous
                    </button>
                    <button 
                        onClick={handleNext} 
                        style={{
                            padding: '5px 10px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            backgroundColor: '#D71345',
                            color: '#fff',
                            border: 'none'
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hospitals;
