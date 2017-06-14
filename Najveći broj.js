// document.getElementById('budala').addEventListener("click", budala())
window.onload = function () {
	colorChange()
}

function colorChange() {
document.body.style.backgroundColor = "#000"
document.getElementById("h1").style.color = "#0f0"
document.getElementById("output").style.color = "cyan"
}

function dodaj(valuta) {
	if(document.getElementById("input").value == ""){
		alert("Prvo upiši neki broj!")
	} else {
		var trenutno = document.getElementById("h1").innerHTML
		console.log(valuta)
		var valuta1 = document.createTextNode(valuta)
		var zapeta = document.createTextNode(", ")
		var span = document.createElement("SPAN")
		span.appendChild(valuta1)
		span.className = "brojevi"
		document.getElementById("h1").appendChild(span)
		document.getElementById("h1").appendChild(zapeta)
		document.getElementById("input").value = ""
		var v = document.getElementsByClassName("brojevi")
		for (i=0; i<v.length; i++){
			v[i].style.color = "red"
		}
	}
}

function pronadji() {
	if (document.getElementById("input").value !== ""){
		dodaj(document.getElementById("input").value)
	}
	var brojevi = document.getElementsByClassName("brojevi")
	var max = -Infinity
	for (i=0; i<brojevi.length; i++){
		var broj = parseInt(brojevi[i].innerHTML)
		if(broj>max){
			max = broj
		}
	}
	console.log(max)
	document.getElementById("output").innerHTML = "Najveći broj je: " + max
}

function reset() {
	document.getElementById("h1").innerHTML = "Nađi najveći broj: "
}