import React, { useState, useEffect } from 'react';
import "../components/Cookie.css"

const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
};

const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const loadGoogleAnalytics = () => {
    if (!getCookie('cookieConsent')) return;

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TT543V0CV9';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-TT543V0CV9');
};

const Cookie = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = getCookie('cookieConsent');
        if (!consent) {
            setShowPopup(true);
        } else {
            loadGoogleAnalytics();
        }
    }, []);

    const handleAccept = () => {
        setCookie('cookieConsent', 'true', 365);
        loadGoogleAnalytics();
        setShowPopup(false);
    };

    const handleDecline = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="cookie-consent">
                    <p>We use cookies to improve your experience. By clicking "Accept," you agree to our use of cookies.</p>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleDecline}>Decline</button>
                </div>
            )}
        </>
    );
};

export default Cookie;
