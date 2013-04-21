function go(){
	document.getElementById("pagenav_mark").firstChild.click()
	console.log("marked as read");
};

document.getElementsByClassName("original")[0].firstChild.addEventListener("click", go, false);
console.log("loaded extension");