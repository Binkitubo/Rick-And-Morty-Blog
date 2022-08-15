const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characterCard: [],
			locationCard: [],
			characterDetails: [],
			locationDetails: [],
			addFav: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacterCard: () => {
				fetch("https://rickandmortyapi.com/api/character")
					.then((response) => response.json())
					.then((data) => setStore({ characterCard: data.results }));
			},

			loadCharacterDetails: (id) => {
				fetch(`https://rickandmortyapi.com/api/character/${id}`)
					.then((response) => response.json())
					.then((data) => setStore({ characterDetails: data }));
			},

			loadLocationCard: () => {
				fetch("https://rickandmortyapi.com/api/location")
					.then((response) => response.json())
					.then((data) => setStore({ locationCard: data.results }));
			},

			loadLocationDetails: (id) => {
				fetch(`https://rickandmortyapi.com/api/location/${id}`)
					.then((response) => response.json())
					.then((data) => setStore({ locationDetails: data }));
			},

			handleFav: (addElem) => {
				const store = getStore();
				setStore({ addFav: [...store.addFav, addElem] });
			},

			handleDelete: (i) => {
				const store = getStore();
				const newList = store.addFav.filter((item) => item !== i);
				setStore({ addFav: newList });
			},
		}
	};
};

export default getState;
