import { useState, useEffect } from "react";
import MdCard from "./MdCard";

const MdCardHolder = ({ docs }) => {
    const [documents, setDocuemnts] = useState([]);

    useEffect(() => {
        setDocuemnts(docs);
    }, [])

    const colors = [
        "purple",
        "green",
        "pink"
    ]

    return (
        <div className="card-holder">
            {
                documents.map((document, index) =>{
                    return <MdCard key={index} doc={document} color={colors[index%colors.length]} />
                })
            }
        </div>
    )

}

export default MdCardHolder;