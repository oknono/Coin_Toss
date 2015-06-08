function handleclick(){
	// Short animation spinning the colors
	//setTimeout(display("test1"), 5000)
	//console.log("purple")
    coin_toss()
	window.setTimeout(reload_page, 1500);
}

function coin_toss(){
	if (Math.random() > 0.5){
		display("yes");
		text("yes");
	}
	else {
		display("no");
		text("no");
	}
}

function reload_page(){
	location.reload();
}

function display(outcome){
	change_class = document.getElementById("root");
    change_class.setAttribute("class", outcome);
}

function text(outcome){
	change_text = document.getElementById("p_text");
    change_text.innerHTML = outcome.toUpperCase();
}
