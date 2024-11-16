import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { useContext } from "react";

function Planets() {
    const { store } = useContext(Context)
    const { theid } = useParams()
    const [data, setData] = useState({})
    const {properties, description} = data

    function getPlanet() {
        let result = store.planets.find((item) => item.uid == theid)
        console.log(result)
        setData(
            result
        )
    }
    useEffect(() => {
        getPlanet()
    }, [])
    function PlanetDetails(props) {
        return (
            <div className="col-2 mt-2">
                <span className="d-flex flex-row justify-content-center">{props.name}:<br/></span>
                <span className="d-flex flex-row justify-content-center">{props.nameData}</span>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row px-5">
                <div className="col-6 d-flex justify-content-center">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${theid == 1 ? Math.floor(Math.random() * 10 + 2): theid}.jpg`}
                    />
                </div>
                <div className="col-6">
                    <div>
                        <h1 className="d-flex justify-content-center">{name}</h1>
                        <p className="fs-4 d-flex justify-content-center">{description}</p>
                    </div>
                </div>
                <div className="col-12 border border-danger mt-4"></div>
            </div>
            <div className="row text-danger justify-content-between px-5 pt-2">
                    
                    <PlanetDetails name="Name" nameData={properties?.name}/> 
                    <PlanetDetails name="Climate" nameData={properties?.climate}/>    
                    <PlanetDetails name="Population" nameData={properties?.population}/>
                    <PlanetDetails name="Orbital Period" nameData={properties?.orbital_period}/>
                    <PlanetDetails name="Rotation Period" nameData={properties?.rotation_period}/>    
                    <PlanetDetails name="Diameter" nameData={properties?.diameter}/>    

                </div>
        </div>
    )
}

export default Planets
