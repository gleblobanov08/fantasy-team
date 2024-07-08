import React from "react";
import groups from "../assets/groups.jpeg"
import { Link } from "react-router-dom"
import "../styles/Components.css"

function HomePage() {
    return (
        <>
        <h1>Welcome to Fantasy Football!</h1>
        <img src={groups} alt="" className="groups" />
        <Link to="/team-selection">Choose your team</Link>
        </>
    );
}

export default HomePage;