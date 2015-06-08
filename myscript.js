function handleclick(){
	// Short animation spinning the colors
    display("test");
    text("");
    window.setTimeout(coin_toss, 2000);	
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
	window.setTimeout(reload_page, 1500);
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
