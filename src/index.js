document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("all").addEventListener("click", async () => {
		let response = await fetch("products.json");
		let result = await response.json();
		printData(result.products);
	});

	document
		.getElementById("aplhabetical")
		.addEventListener("click", async () => {
			let response = await fetch("products.json");
			let result = await response.json();

			let order = result.products.sort(function (a, b) {
				let first = a.title.toUpperCase();
				let second = b.title.toUpperCase();

				if (first < second) {
					return -1;
				} else if (first > second) {
					return 1;
				} else {
					return 0;
				}
			});
			printData(order);
		});

	document
		.getElementById("mostExpensive")
		.addEventListener("click", async () => {
			let response = await fetch("products.json");
			let result = await response.json();

			let expensive = result.products.sort((a, b) => {
				if (a.price < b.price) {
					return 1;
				} else if (a.price > b.price) {
					return -1;
				} else {
					return 0;
				}
			});
			printData(expensive);
		});

	document
		.getElementById("searchButton")
		.addEventListener("click", async () => {
			let response = await fetch("products.json");
			let result = await response.json();
			let inputText = document.getElementById("szovegmezo").value;
			let filtering = result.filter(() => {
				return result.description.includes(inputText.toLowerCase());
			});
			printData(filtering);
		});

	document.getElementById("offer").addEventListener("click", async () => {
		let response = await fetch("products.json");
		let result = await response.json();
	});

	function printData(termekek) {
		let termekLista = document.getElementById("adatok");
		termekLista.textContent = "";

		for (let p of termekek) {
			let li = document.createElement("li");
			li.innerHTML =
				p.id +
				". " +
				p.title +
				" - " +
				p.description +
				"<br>Price: " +
				p.price +
				" - Discount: " +
				p.discountPercentage +
				"%<br>Rating: " +
				p.rating +
				" - Stock: " +
				p.stock +
				"<br>Brand: " +
				p.brand +
				" - Category: " +
				p.category +
				"<hr>";
			termekLista.appendChild(li);
		}
	}
});
