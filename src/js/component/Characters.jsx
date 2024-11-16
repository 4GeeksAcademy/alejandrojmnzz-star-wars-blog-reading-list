import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { useContext } from "react";

function Characters() {
    const { store } = useContext(Context)
    const { theid } = useParams()
    const [data, setData] = useState({})
    const {properties, description} = data

    function getCharacter() {
        let result = store.people.find((item) => item.uid == theid)
        console.log(result)
        setData(
            result
        )
    }
    useEffect(() => {
        getCharacter()
    }, [])
    function CharacterDetails(props) {
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
                        src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
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
                    <CharacterDetails name="Name" nameData={properties?.name}/> 
                    <CharacterDetails name="Birth Year" nameData={properties?.birth_year}/>    
                    <CharacterDetails name="Gender" nameData={properties?.gender}/>
                    <CharacterDetails name="Height" nameData={properties?.height}/>
                    <CharacterDetails name="Skin Color" nameData={properties?.skin_color}/>    
                    <CharacterDetails name="Eye Color" nameData={properties?.eye_color}/>    

                </div>
        </div>
    )
}

export default Characters
