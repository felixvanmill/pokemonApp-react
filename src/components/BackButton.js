import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ style, className }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            style={style}
            className={className}>
            Go Back
        </button>
    );
};

export default BackButton;
