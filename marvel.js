const MARVEL_BASE_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"

async function getRandomMarvel(){

	let ID = Math.floor(Math.random() * 731) + 1;
	let data = null
	try {
		let response = await fetch(MARVEL_BASE_URL + ID + ".json");
		data = await response.json();
	} catch (error) {
		console.log(error)
	}
    console.log(data.name);

    let marvelImage = document.getElementById("disneyImage");
	marvelImage.src = data.images.md;
    

}