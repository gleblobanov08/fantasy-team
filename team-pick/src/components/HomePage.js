import React from "react";
import groups from "../assets/group.jpeg"
import { Link } from "react-router-dom"
import "../styles/Components.css"

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Fantasy Football!</h1>
            <img src={groups} alt="" className="groups" />
            <p>Get ready for the Euro 2024 knockout tournament in Germany!</p>
            <p>Select your team and see how well they perform.</p>
            <Link to="/team-selection" className="btn">Choose your team</Link>
        </div>
    );
}

export default HomePage;