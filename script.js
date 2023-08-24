//your JS code here. If required.
function updateElement(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello, world!");
		},1000);
	})
}
let output = document.getElementById("output");
updateElement().then((text) => {
	output.textContent = text;
})
