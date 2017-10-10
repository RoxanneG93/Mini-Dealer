

// SEARCH FILTER
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    var div = document.getElementById('notFound');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else if (li[i].style.display = "none") {
        	div.style.display = 'block';
        } else {
            div.style.display = 'none';

        } 

    }
}

// SHOW LIST ITEMS WHTN INPUT IS CLICKED, TOGGLE
$("#myInput").on("click", function() {
	$("#myUL").toggleClass("show");
});




var button = document.querySelector(".gettaxrate");
	button.addEventListener("click", calcTax);

function calcTax(){
	var price = document.querySelector("#price").value;
	price = price.trim();
	price = price.split(" ");
	var total = 0;

	if(price > 0) {
		total = price * .08;
	} else if (isNaN(price)) {
		alert("please enter only numbers");
	} else {
		alert("please enter value greater then 0");
	} 

	document.querySelector("#taxoutput").innerHTML = "$" + total;
}


// TAX CALCULATION

// $(".gettaxrate").on('click', function(){
// 	var taxRate = 0.08; //0.08%
//     var price = $('#price').val();
//     var total = "$" + (price * taxRate);
//     $("#taxoutput").html(total);
//     if(price < 0 ) {
//     	total = "Must be greater then 0";
//     }
	
// });

// else if (a.innerHTML.toUpperCase().indexOf(filter) === -1) {
//         		console.log("it worked!");
//         }

// else if (a.innerHTML.toUpperCase().indexOf(filter) === 0) {
//         	x.style.display = "";
//         } else {
//         	x.style.display = 'none';

// function myFunction() {
//     var x = document.getElementById('myDIV');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }

// $('#myInput').on('keyup', function(event) { // Fired on 'keyup' event

//   if($('#myUL').children().length === 0) { // Checking if list is empty

//     $('.notFound').css('display', 'block'); // Display the Not Found message

//   } else {

//     $('.notFound').css('display', 'none'); // Hide the Not Found message

//   }
// });

