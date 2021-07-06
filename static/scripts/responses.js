
function getBotResponse(input) {
    //rock paper scissors 
	input = input.toLowerCase();
    if (input.includes("rent") && input.includes("vehicle")) {
        return "What kind of vehicle you need?";
    }
	else if (input.includes("lesson") && input.includes("wear") || input.includes("bring")) {
        return "The student must have their learner’s permit with them and wear closed toe shoes. Sunglasses are recommended but not required.";
    }
	else if (input.includes("vehicle") && input.includes("provide")) {
        return "We provide Bike,Luxury,vintage,taxis,self driver and many more. Which one you want? ";
    }
	else if(input.includes("certificate"))
	{
		return "Yes, all students that complete a minimum of 6 hours of training receive a certificate of completion.";
	}
	else if(input.includes("need") || input.includes("want") || (input.includes("bike") || input.includes("vintage") ))
	{
		return "We provide vehicles on the basis of daily,hourly,weekly and monthly";
	}
	else if(input.includes("price") || input.includes("pricing"))
	{
		return "For pricing of our service, Please provide your contact number. Our team will contact you shortly.";
	}
    else if (input.includes("hello")) {
        return "Hello there!";
    } else if (input.includes("goodbye")) {
        return "Talk to you later!Have a nice day";
    } 
	else if (input.includes("Thankyou")) {
        return "Your most welcome!Have a nice day";
    } 
	else {
        return "Try asking something else!";
    }
}