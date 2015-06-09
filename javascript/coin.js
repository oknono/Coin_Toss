function handleclick(){
	// Short animation spinning the colors
    display("test");
    window.setTimeout(coin_toss, 500);	
}

function coin_toss(){
    // shows outcome of coin toss and reloads page
	if (Math.random() > 0.5){
		display("yes");
	}
	else {
		display("no");
	}
	window.setTimeout(reload_page, 1500);
}

function reload_page(){
	location.reload();
}

function display(outcome){
	change_class = document.getElementById("root");
    change_class.setAttribute("class", outcome);
    change_text = document.getElementById("p_text");
    if (outcome == "test"){
        change_text.innerHTML = "?";
    }
    else{
        change_text.innerHTML = outcome.toUpperCase();
    }
    
}

