const themes = {
	light: {
		background: " #11729c"
	},
	dark: {
		background: "#A2CD48"
	},
    red: {
        background: "red"
    }
}

function changeCSSTheme(themeName){
	for (const variable in themes[themeName]) {
		console.log("themes[themeName][variable] is:\n" + themes[themeName][variable]);
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
	}
}