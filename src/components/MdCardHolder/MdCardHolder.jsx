import { useState, useEffect } from "react";
import MdCard from "./MdCard";

const MdCardHolder = ({ docs }) => {
    const [documents, setDocuemnts] = useState([]);

    useEffect(() => {
        setDocuemnts(docs);
    }, [])

    return (
        <div className="card-holder">
            {
                documents.map((document, index) =>{
                    return <MdCard key={index} doc={document} />
                })
            }
        </div>
    )

}

export default MdCardHolder;