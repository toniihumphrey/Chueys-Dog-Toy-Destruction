//set count
if(localStorage.getItem("count") == null){
	localStorage.setItem("count",0)
}
//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (confirm("Do you want to reset Chuey's toy destruction?")) {
    	localStorage.setItem("count",0);
		update();
	}
}