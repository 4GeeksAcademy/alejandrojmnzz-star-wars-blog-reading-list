import React, { useContext } from "react";
import swLogo from "../../img/Star-Wars-Logo-1.png"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Navbar() {
    const { store, actions } = useContext(Context)
    return (
        <div className="container-fluid navbar">
            <div className="container px-5">
                <Link to="/"><img src={swLogo} className="logo"/></Link>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="bg-secondary rounded px-1 ms-1">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu">
                        {
                            store.favorites.map((item) => (
                                <li className="d-flex align-items-center"><Link className="dropdown-item" to={item.nature == "character" ? `/characters/${item.uid}` : `/planets/${item.uid}`}>{item.properties.name}</Link><button className="btn" onClick={() => actions.deleteFavorite(item._id)}><i class="fa-solid fa-trash"></i></button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}