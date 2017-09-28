// window.onload=function(){

// 	var button = document.querySelector(".gettaxrate");
// 	button.addEventListener("click", calcTax);

// 	function calcTax(){
// 			var cost = document.querySelector("#taxcalc").value;
// 			cost = cost.trim();
// 			cost = cost.split(" ");
// 			var message = '';

// 			for (var i in cost){
// 				var carCost = cost[i];
// 				var cost = '';

// 				if ((cost.length == 1) && (carCost.length == 0)) { // The pressed the shift key or spacebar, just ignore...
// 						// break;
// 				} else if (isNaN(carCost) && (carCost.length > 0)) { // Test for letters like "A" but ignore actual "NaN" 
// 					message = "<strong>ERROR</strong> - Please only enter numbers."; 
// 						break;
// 				} else if (carCost < 0) {
// 					message = "<strong>ERROR</strong> - Valid price are 0 - 100,000.";
// 						break;
// 				} else if (letterGrade > 100) {
// 					message = "<strong>ERROR</strong> - Valid price are 0 - 100,000.";
// 						break;
// 				}
// 				message += cost + " ";

// 		} // end loop through array...
// 				var letter = document.querySelector("#taxoutput").innerHTML = message;
// 				// tax calculation.
// 				var taxes = 0;
// 				for( var i = 0; i < cost.length; i++){
// 					taxes += parseInt(cost[i]);
// 					var total = taxes * 0.08;
// 				}
// 				console.log(total);
// 				document.querySelector("#taxoutput").innerHTML = total;
// 	}
// }

$(".gettaxrate").on('click', function(){
	var taxRate = 0.08; //0.08%
    var input = $('#price').val();
    var total = "$" + (input * taxRate);
    $("#taxoutput").html(total);

   //  if ((input == 1) && (input == 0)) { // The pressed the shift key or spacebar, just ignore...
			// 			// break;
			// 	} else if (isNaN(input) && (input > 0)) { // Test for letters like "A" but ignore actual "NaN" 
			// 		total = "<strong>ERROR</strong> - Please only enter numbers."; 
			// 			break;
			// 	} else if (input < 0) {
			// 		total = "<strong>ERROR</strong> - Please Enter a Value";
			// 			break;
			// 	}
			//  	$("#taxoutput").html(total);
			// }
	
});
