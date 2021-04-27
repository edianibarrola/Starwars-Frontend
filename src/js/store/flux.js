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
			people: [],
			planets: [],
			starships: [],
			favorites: [],
			details: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// fetch(peopleUrl) //people list fetch
				fetch(`${myUrl}/person`) //people list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ people: data });
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
				console.log("url in function: " + myUrl + url);

				fetch(myUrl + url) //people list fetch
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ details: data });
					})
					.catch(error => {
						console.log("Error fetching details: \n", error);
					});
			}
		}
	};
};

export default getState;
