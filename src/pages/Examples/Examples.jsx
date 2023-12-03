import { useState, useEffect } from "react";
import { Sidebar, Header } from "../../components";
import links from "../../statics/links";
import './examples.css'

const Examples = () => {
    return (
        <div>
            <Sidebar links={links} />
            <Header />
            <div className="examples">
                <div className="btn-group">
                    <div className="model-btn run-model">Run Model</div>
                    <div className="model-btn generate-proof">Generate Proof</div>
                    <div className="model-btn verify-btn">Verify</div>
                </div> 
            </div>
        </div>
    )
}

export default Examples;