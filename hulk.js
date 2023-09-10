const HULK_BASE_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/332.json"

async function getHulk(){

	let data = null
	try {
		let response = await fetch(HULK_BASE_URL);
		data = await response.json();
	} catch (error) {
		console.log(error)
	}
    console.log(data.name);

    let hulkImage = document.getElementById("disneyImage");
	hulkImage.src = data.images.md;
    

}