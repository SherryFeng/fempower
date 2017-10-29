
//import googlemaps
//from secret.py import key 

var mentors = new Array ();
var mentees = new Array ();
var names=[];
var current=[];
var matches = new Array();
var compare=[];

var mentorcounter=4;
var menteecounter=6;

var count1=0;
var count2=0;



var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var addInput = document.getElementById("location");
var mentorInput = document.getElementById("mentor");
var fieldInput = document.getElementById("field");
var linkedInInput = document.getElementById("linkedIn");
var emailInput = document.getElementById("email");
var interestInput = document.getElementById("interest"); 
var messageBox = document.getElementById("display");

/*var service = googlemaps.Client(key=key);*/

//examples for testing
mentors[0]=["Sheryl Sandberg","48", "Washington, DC", "mentor","tech", "startup"];
mentors[1]=["Susan Wojcicki","40", "Fairfax, Virginia", "mentor","business", "recruitment"];
mentors[2]=["Melinda Gates","53", "Durham, North Carolina", "mentor","business", "startup"];
mentors[3]=["Elissa Shevinsky","27", "Fairfax, Virginia", "mentor","business", "startup"];

mentees[0]=["Meg Whitman","61", "Alexandria, Virginia", "mentee","tech", "recruitment"];
mentees[1]=["Aditi Pilani","20", "Durham, North Carolina", "mentee","tech", "general advice"];
mentees[2]=["Ginni Rometty","60", "Kernersville, NC", "mentee","tech", "startup"];
mentees[3]=["Sherry Feng","20", "Greensboro, NC", "mentee","law", "startup"];
mentees[4]=["Anna Cunningham","20", "Kernersville, NC", "mentee","tech", "startup"];
mentees[5]=["Jenny Chin","20", "Kernersville, NC", "mentee","tech", "startup"];
current.push(nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);


function insert() {
	if (mentorInput.value==("mentor")){
		mentors[mentorcounter]= new Array (nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);
		mentorcounter=mentorcounter+1;
		for (j=0;j<mentees.length;j++){
			if (count2<=3 && ((mentees[j][4]==current[4]) || (mentees[j][7]==current[7]))){
				matches[count2] = new Array(mentees[j][0],mentees[j][1],mentees[j][2],mentees[j][3],mentees[j][4],mentees[j][5],mentees[j][6],mentees[j][7]);
				count2=count2+1;
			}

			
		}
	}
	else {
		mentees[menteecounter] = new Array (nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);
			menteecounter=menteecounter+1;
			for (i=0;i<mentors.length;i++){
			if (count1<=3 && ((mentors[i][4]==current[4]) || (mentors[i][7]==current[7]))){
				/*compare=mentors[j][2];*/
				/*if(service.getDistanceMatrix[current[2],mentors[i][2]]{
					(alert("Success!"));*/
					matches[count1]= new Array (mentors[i][0],mentors[i][1],mentors[i][2],mentors[i][3],mentors[i][4],mentors[i][5],mentors[i][6],mentors[i][7]);
					count1=count1+1;
				//}
			}
		}

	}


	names.push(nameInput.value);
	clearAndShow();

 
}

function clearAndShow (){
	nameInput.value="";
	messageBox.innerHTML="";
	messageBox.innerHTML+="Names: "+names.join(", ");

	}
	/*messageBox.innerHTML+="Mentors: "+mentInputs.join(",");*/
	
	
}


/*<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfagwXweNt8Rd2sXlANtgbrQxgCEHQ5R4&callback=initMap">
</script>*/

