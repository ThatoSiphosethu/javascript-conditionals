var clickPlus = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();

		// Increment a variable that tracks the
		// number of button clicks
        clickPlus++;
		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clickPlus);
		// When the count gets to 10, reset it to 0
        if (clickPlus === 10)
        {
            clickPlus = 0;
        }


	}



    function checkAge(event) {
        event.preventDefault();

        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());
        var age = 2020 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18)
        {
            $("#birthYearOutput").text("Child")
        }
        // If they are 18 or over, print "Adult" instead
        else
        {
            $("#birthYearOutput").text("Adult")
        }
    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var amount = parseInt($("#purchaseAmount").val());
        var price = amount;
        // Get the state from the text box with ID "state"
        var stateRate = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (stateRate === "WI")
        {
           rate = 5;
        }
        else if (stateRate === "IL")
        {
            rate = 8;
        }
        else if (stateRate === "MN")
        {
            rate = 7.5;
        }
        else if (stateRate === "MI")
        {
            rate = 5.5;
        }
        else
        {
            $("#salesTaxOutput").text("Error");
            return ;
        }
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        var taxAmount = price / rate;

        var totalAmount = price + taxAmount
        $("#salesTaxOutput").text(totalAmount);
        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        event.preventDefault();

        // Get the cat's age from the text box with
        // ID of "catAge"
        var birthDate = parseInt($("#catAge").val());
        var age= birthDate;
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if (age <= 2)
        {
           feed = "kitten chow";
        }
        else if (age <= 10)
        {
            feed = "adult chow";
        }
        else
        {
            feed = "senior chow";
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
        var food = feed;
        $("#catAgeOutput").text(food);

    }

    function drawCard(event) {
        event.preventDefault();

        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"

        var description;
        var card;
        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue >=2 && faceValue <= 10)
        {
            description = faceValue;
        }
        else if (faceValue === 1)
        {
            description = "Ace";
        }
        else if (faceValue ===11)
        {
            description = "Jack";
        }
        else if (faceValue === 12)
        {
            description = "Queen";
        }
        else if (faceValue === 13)
        {
            description = "King";
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
       if (suit === 1)
       {
           card = "Clubs";
       }
       else if (suit === 2)
       {
           card = "Spades";
       }
       else  if (suit === 3)
       {
           card = "Hearts";
       }
       else if (suit === 4)
       {
           card = "Diamonds"
       }
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(`${description} of ${card}`);

    }

});