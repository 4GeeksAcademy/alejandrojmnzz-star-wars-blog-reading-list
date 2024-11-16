import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Card({characterData = false, planetData = false}) {
    const context = useContext(Context)

    return (
        <div className="col-12">
						<h2 className="text-danger py-4">{characterData == true ? "Characters" : planetData && "Planets"}</h2>
						<div className="cards-scroll d-flex">
							{
								(characterData ? context.store.people : context.store.planets).map((item) => {
									return (
										<div key={item._id} className="card">
											<img src={planetData && item.uid == 1 ? `https://starwars-visualguide.com/assets/img/planets/${Math.floor(Math.random() * 10 + 2)}.jpg` : item.image} className="card-img-top"/>
												<div className="card-body">
													<h5 className="card-title">{item.properties.name}</h5>
                                                    {
                                                    characterData ?
													<p className="card-text">
                                                        Gender: {item.properties.gender} <br/>
                                                        Hair color: {item.properties.hair_color} <br/>
                                                        Eye color: {item.properties.eye_color}			
													</p>
                                                    : planetData &&
                                                    <p className="card-text">
                                                        Population: {item.properties.population} <br/>
                                                        Terrain: {item.properties.terrain}
                                                    </p>

                                                    }
													<div className="d-flex justify-content-between">
														<Link to={`/${characterData ? "characters" : planetData && "planets"}/${item.uid}`} className="btn btn-outline-primary">Learn more!</Link>
														{
															characterData ? <button 
															className="btn btn-outline-warning" 
															onClick={() => context.actions.addFavorite(item, "character")}>
															{context.store.favorites.includes(item) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
															</button>
															: <button 
															className="btn btn-outline-warning" 
															onClick={() => context.actions.addFavorite(item, "planet")}>
															{context.store.favorites.includes(item) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
															</button>
														}
														
													</div>
												</div>
										</div>
									)
								 }
								)
							}
						</div>
					</div>
    )
}
export default Card;