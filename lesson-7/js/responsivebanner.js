const date = new Date();
const day = date.getDay();
if (day == 5) {
	document.getElementsByClassName("pancakes")[0].style.display = "block";
}
