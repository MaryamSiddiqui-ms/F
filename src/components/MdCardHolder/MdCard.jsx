import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './md.css';

const MdCard = ({doc, color}) => {

    return (
        <>
            <Link to={doc.title} style={{color: 'white'}}>
                <div className={"md-card " + color}>
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