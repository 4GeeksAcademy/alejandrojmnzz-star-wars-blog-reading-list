const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: []
		},
		actions: {
			getStarWarsPeople: async () => {
				try {
					if (getStore().people.length <= 0) {
						let response = await fetch(`https://www.swapi.tech/api/people`)
						let data = await response.json()
						for (let i = 0; i < data.results.length; i++) {
							let responseDetail = await fetch(data.results[i].url)
							let dataDetail = await responseDetail.json()
							dataDetail.result["image"] = `https://starwars-visualguide.com/assets/img/characters/${dataDetail.result.uid}.jpg`
							setStore({
								people: [...getStore().people,
								dataDetail.result
								]
							})
							localStorage.setItem("people", JSON.stringify(getStore().people))
						}
					}
				} catch (error) {
					console.log(error)
				}
			},
			getStarWarsPlanets: async () => {
				try {
					if (getStore().planets.length <= 0) {
						let response = await fetch("https://www.swapi.tech/api/planets")
						let data = await response.json()
						for (let i = 0; i < data.results.length; i++) {
							let responseDetail = await fetch(data.results[i].url)
							let dataDetail = await responseDetail.json()
							dataDetail.result["image"] = `https://starwars-visualguide.com/assets/img/planets/${dataDetail.result.uid}.jpg`
							setStore({
								planets: [...getStore().planets,
								dataDetail.result
								]
							})
							localStorage.setItem("planets", JSON.stringify(getStore().planets))
						}
					}
				} catch (error) {
					console.log(error)
				}
			},
			addFavorite: (element, nature) => {
				if (!getStore().favorites.includes(element)) {
				element["nature"] = nature
				setStore({
					favorites: [...getStore().favorites,
					element]
				})
			}
			},
			deleteFavorite: (id) => {
				let result = getStore().favorites.filter((item) => item._id != id)
				setStore({
					favorites: result
				})
			}
		}
	};
};

export default getState;
