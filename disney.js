const API_BASE_URL = "https://api.disneyapi.dev/character/"

async function getRandomDisney(){

	let ID = Math.floor(Math.random() * 7438) + 1;
	let data = null
	try {
		let response = await fetch(API_BASE_URL + ID);
		data = await response.json();
	} catch (error) {
		console.log(error)
	}
    console.log(data.data.name);

    let disneyImage = document.getElementById("disneyImage");
	disneyImage.src = data.data.imageUrl;

}
