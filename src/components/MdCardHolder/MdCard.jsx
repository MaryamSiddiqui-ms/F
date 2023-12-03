import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './md.css';

const MdCard = ({doc}) => {

    return (
        <>
            <Link to={doc.title} style={{color: 'white'}}>
                <div className="md-card">
                    <p className="md-heading">
                        {doc.title}
                    </p>
                    <p className="md-text">
                        {doc.description}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default MdCard;