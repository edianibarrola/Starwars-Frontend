const myUrl = "https://3000-harlequin-chipmunk-e49ijhxj.ws-us03.gitpod.io";
const peopleUrl = "https://www.swapi.tech/api/people";
const planetsUrl = "https://www.swapi.tech/api/planets";
const vehiclesUrl = "https://www.swapi.tech/api/vehicles";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			userList: [],
			people: [
				// {
				// 	uid: "1",
				// 	name: "Luke Skywalker",
				// 	url: "https://www.swapi.tech/api/people/1"
				// },
				// {
				// 	uid: "2",
				// 	name: "C-3PO",
				// 	url: "https://www.swapi.tech/api/people/2"
				// },
				// {
				// 	uid: "3",
				// 	name: "R2-D2",
				// 	url: "https://www.swapi.tech/api/people/3"
				// },
				// {
				// 	uid: "4",
				// 	name: "Darth Vader",
				// 	url: "https://www.swapi.tech/api/people/4"
				// },
				// {
				// 	uid: "5",
				// 	name: "Leia Organa",
				// 	url: "https://www.swapi.tech/api/people/5"
				// },
				// {
				// 	uid: "6",
				// 	name: "Owen Lars",
				// 	url: "https://www.swapi.tech/api/people/6"
				// },
				// {
				// 	uid: "7",
				// 	name: "Beru Whitesun lars",
				// 	url: "https://www.swapi.tech/api/people/7"
				// },
				// {
				// 	uid: "8",
				// 	name: "R5-D4",
				// 	url: "https://www.swapi.tech/api/people/8"
				// },
				// {
				// 	uid: "9",
				// 	name: "Biggs Darklighter",
				// 	url: "https://www.swapi.tech/api/people/9"
				// },
				// {
				// 	uid: "10",
				// 	name: "Obi-Wan Kenobi",
				// 	url: "https://www.swapi.tech/api/people/10"
				// }
			],
			planets: [
				// {
				// 	uid: "1",
				// 	name: "Tatooine",
				// 	url: "https://www.swapi.tech/api/planets/1"
				// },
				// {
				// 	uid: "2",
				// 	name: "Alderaan",
				// 	url: "https://www.swapi.tech/api/planets/2"
				// },
				// {
				// 	uid: "3",
				// 	name: "Yavin IV",
				// 	url: "https://www.swapi.tech/api/planets/3"
				// },
				// {
				// 	uid: "4",
				// 	name: "Hoth",
				// 	url: "https://www.swapi.tech/api/planets/4"
				// },
				// {
				// 	uid: "5",
				// 	name: "Dagobah",
				// 	url: "https://www.swapi.tech/api/planets/5"
				// },
				// {
				// 	uid: "6",
				// 	name: "Bespin",
				// 	url: "https://www.swapi.tech/api/planets/6"
				// },
				// {
				// 	uid: "7",
				// 	name: "Endor",
				// 	url: "https://www.swapi.tech/api/planets/7"
				// },
				// {
				// 	uid: "8",
				// 	name: "Naboo",
				// 	url: "https://www.swapi.tech/api/planets/8"
				// },
				// {
				// 	uid: "9",
				// 	name: "Coruscant",
				// 	url: "https://www.swapi.tech/api/planets/9"
				// },
				// {
				// 	uid: "10",
				// 	name: "Kamino",
				// 	url: "https://www.swapi.tech/api/planets/10"
				// }
			],
			starships: [
				// {
				// 	uid: "2",
				// 	name: "CR90 corvette",
				// 	url: "https://www.swapi.tech/api/starships/2"
				// },
				// {
				// 	uid: "3",
				// 	name: "Star Destroyer",
				// 	url: "https://www.swapi.tech/api/starships/3"
				// },
				// {
				// 	uid: "5",
				// 	name: "Sentinel-class landing craft",
				// 	url: "https://www.swapi.tech/api/starships/5"
				// },
				// {
				// 	uid: "9",
				// 	name: "Death Star",
				// 	url: "https://www.swapi.tech/api/starships/9"
				// },
				// {
				// 	uid: "11",
				// 	name: "Y-wing",
				// 	url: "https://www.swapi.tech/api/starships/11"
				// },
				// {
				// 	uid: "10",
				// 	name: "Millennium Falcon",
				// 	url: "https://www.swapi.tech/api/starships/10"
				// },
				// {
				// 	uid: "13",
				// 	name: "TIE Advanced x1",
				// 	url: "https://www.swapi.tech/api/starships/13"
				// },
				// {
				// 	uid: "15",
				// 	name: "Executor",
				// 	url: "https://www.swapi.tech/api/starships/15"
				// },
				// {
				// 	uid: "12",
				// 	name: "X-wing",
				// 	url: "https://www.swapi.tech/api/starships/12"
				// },
				// {
				// 	uid: "17",
				// 	name: "Rebel transport",
				// 	url: "https://www.swapi.tech/api/starships/17"
				// }
			],
			favorites: [],
			details: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch(peopleUrl) //people list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(error => {
						console.log("Error fetching people list: \n", error);
					});
				fetch(planetsUrl) //planets list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => {
						console.log("Error fetching planet list: \n", error);
					});
				fetch(vehiclesUrl) //starships list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ starships: data.results });
					})
					.catch(error => {
						console.log("Error fetching planet list: \n", error);
					});
				fetch(`${myUrl}/user`) //User list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ userList: data });
					})
					.catch(error => {
						console.log("Error fetching user list: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: data => {
				//gain access to the store by creating a local version of it
				const store = getStore();
				//push new data to local version of the store
				store.favorites.push(data);
				//reset the global store to include newly added values in local store
				setStore(store);
			},
			fetchDetails: url => {
				console.log("url in function: " + url);

				fetch(url) //people list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ details: data.result.properties });
					})
					.catch(error => {
						console.log("Error fetching details: \n", error);
					});
			}
		}
	};
};

export default getState;
