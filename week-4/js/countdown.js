	// STEP 1: Open the Lab 4 HTML page in a browser tab and open up the console.

	// STEP 2a: Build an HTML element of your choice inside the HTML file for this lab to display the value of the variable i (the counter inside the loop below) as it counts down from 10 to 0.
    
    // STEP 2b: create a constant to refer to the HTML element that you just created using querySelector().
	const html = document.querySelector("html");
	const h1 = document.querySelector("h1");
	const p = document.querySelector("p");
	const h2 = document.querySelector("h2")
	const rocket = document.querySelector("img");
	const btn = document.querySelector("button");
    
    // The below for loop counts down every second from 10 to 0, using the setTimeout() function.
	btn.addEventListener("click", () => {

		p.style.display = "none";
		btn.style.display = "none";

		for (let i = 10; i >= 0; i --) {
			setTimeout(function() {
				// STEP 4: Build a switch statement to change the background color of the page to yellow (from 8-5), to orange (from 4-1), and finally to red (at 0).
				h2.style.display = "block";

				switch(i) {
					case 8 || 7 || 6 || 5:
						html.style.backgroundColor = "yellow";
						break;
					case 4 || 3 || 2 || 1:
						html.style.backgroundColor = "orange";
						break;
					case 0:
						html.style.backgroundColor = "red";
						break;
				}
	
	
				// STEP 3: Add a condition with an IF statement that checks if the variable i is equal to zero - and if it is, output "Blastoff" to the HTML element you created above, otherwise just output the value of i.
				if(i === 0) {
					h2.textContent = "Blastoff";
					h1.style.display = "none";
					rocket.classList.remove("unlaunched-rocket");
					rocket.classList.add("rocket");
	
				} else {
					h2.textContent = i;
				}
	
	
			}, 10000 - (1000 * i))
		};

		setTimeout(reset, 15000)
		

		
	})


	const reset = () => {
		html.style.backgroundColor = "white";
		p.style.display = "block";
		btn.style.display = "inline-block";
		h1.style.display = "block";
		h2.style.display = "none";
		rocket.classList.remove("rocket");
		rocket.classList.add("unlaunched-rocket");
	}
    // STEP 5: Add some other feature to this page to make it more interactive or interesting!
