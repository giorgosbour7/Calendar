const dat= new Date();
const monthsk =["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentmonth=0;

  var modal = document.getElementById("myModal");


const day=dat.getDate();
const month=dat.getMonth();
const year=dat.getFullYear();

document.getElementById("mhnas").innerHTML=year+" "+ monthsk[month];

const daysInMonth = new Date(year,month+1, 0).getDate();	


const ebdomada=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const firstday = new Date(year,month, 1);
const objecttostring =firstday.toLocaleString("en-us",{
	weekday:"long",
	year:"numeric",
	month:"numeric",
	day:"numeric",
});
const meresprin =ebdomada.indexOf(objecttostring.split(",")[0]);

let daynow=parseInt(1);
let daybox=parseInt(meresprin)+parseInt(1);
let clicked=null;
let datedate=null;
let number =0;


for (let i=meresprin ; i<=(parseInt(daysInMonth)+parseInt(meresprin)); i++)	
{  
    for (let s=1; s<=meresprin ; s++)
			{
			//kenes meres
			document.getElementById("box"+s).innerHTML=" ";	
			document.getElementById("box"+s).style.backgroundColor = "lightblue";

			}
			
			
	
    document.getElementById("box"+daybox).innerHTML=daynow+" ";	
	document.getElementById("box"+daybox).onclick=Hello;
    document.getElementById("markos").onclick=Save;
	
	var scale = document.getElementById("box"+daybox);
	

    scale.addEventListener("click", function check() 
	{
		
	var datesss=new Date(year,month,(i-meresprin+2));
	var actualdate=new Date(year,month,(i-meresprin+1));
	
	clicked=datesss; //gia na treksei swsta h synarthsh
	datedate=actualdate; //pragmatikh hmeromhnia gia thn sygkrish
	console.log(clicked);
	number=i+1;
	
    // const parent = document.createElement("box"+daybox);
    // const child = document.createElement("p"+daybox);
    // parent.append(child, childTwo, 'Hello world'); // Works fine
    // parent.appendChild(child, childTwo, 'Hello world');
	
	
	
    });
	
	
	



	let k=parseInt(daysInMonth)+parseInt(1)+parseInt(meresprin);
	console.log(k);
	for (k ; k<=42 ; k++)
	{   document.getElementById("box"+k).onclick="";
		document.getElementById("box"+k).innerHTML=" ";	
		document.getElementById("box"+k).style.backgroundColor = "lightblue";
	}
	if (day==daynow)
		{
		document.getElementById("box"+daybox).style.backgroundColor = "lightpink";
		}
	daynow++;
	daybox++;
}


var currentyear=dat.getFullYear();
currentmonth=dat.getMonth();

function backmonth()
{
	
currentmonth--;

const dat= new Date();
const day=dat.getDate();
var month=dat.getMonth()-Math.abs(currentmonth);



console.log(currentyear);

if (currentmonth==-1) 
{

currentyear--;
console.log(currentyear);
currentmonth=11;
}

console.log(currentyear);


document.getElementById("mhnas").innerHTML=currentyear+" "+ monthsk[currentmonth];

console.log(year+" "+ currentmonth);




const daysInMonth = new Date(currentyear,currentmonth+1, 0).getDate();	


const ebdomada=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const firstday = new Date(currentyear,currentmonth, 1);
const objecttostring =firstday.toLocaleString("en-us",{
	weekday:"long",
	year:"numeric",
	month:"numeric",
	day:"numeric",
});
const meresprin =ebdomada.indexOf(objecttostring.split(",")[0]);

let daynow=parseInt(1);
let daybox=parseInt(meresprin)+parseInt(1);

for (let i=meresprin ; i<=(parseInt(daysInMonth)+parseInt(meresprin)); i++)	
{
	
    for (let s=1; s<=meresprin ; s++)
			{
			document.getElementById("box"+s).onclick="";
			document.getElementById("box"+s).innerHTML=" ";	
			document.getElementById("box"+s).style.backgroundColor = "lightblue";
			}
    document.getElementById("box"+daybox).innerHTML=daynow;	
	document.getElementById("box"+daybox).style.backgroundColor = "white";
	
	document.getElementById("box"+daybox).onclick=Hello;
    document.getElementById("markos").onclick=Save;
	
	var scale = document.getElementById("box"+daybox);
	

    scale.addEventListener("click", function check() 
	{
		
	var datesss=new Date(year,month,(i-meresprin+2));
	var actualdate=new Date(currentyear,month,(i-meresprin+1));
	
	clicked=datesss; //gia na treksei swsta h synarthsh
	datedate=actualdate; //pragmatikh hmeromhnia gia thn sygkrish
	console.log(clicked);
	number=i+1;
	
    // const parent = document.createElement("box"+daybox);
    // const child = document.createElement("p"+daybox);
    // parent.append(child, childTwo, 'Hello world'); // Works fine
    // parent.appendChild(child, childTwo, 'Hello world');
	
	
	
    });
	
	
	
	
	let k=parseInt(daysInMonth)+parseInt(1)+parseInt(meresprin);
	for (k ; k<=42 ; k++)
	{   
        document.getElementById("box"+k).onclick="";
		document.getElementById("box"+k).innerHTML=" ";	
		document.getElementById("box"+k).style.backgroundColor = "lightblue";
	}
	
	daynow++;
	daybox++;
}

}

function nextmonth()
{
	
currentmonth++;

const dat= new Date();
const day=dat.getDate();
var month=dat.getMonth()+currentmonth;


if (currentmonth==12) 
{
currentyear++;
currentmonth=0;

}

document.getElementById("mhnas").innerHTML=currentyear+" "+ monthsk[currentmonth];
console.log(currentmonth);



const daysInMonth = new Date(currentyear,currentmonth+1, 0).getDate();	


const ebdomada=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const firstday = new Date(currentyear,currentmonth, 1);
const objecttostring =firstday.toLocaleString("en-us",{
	weekday:"long",
	year:"numeric",
	month:"numeric",
	day:"numeric",
});
const meresprin =ebdomada.indexOf(objecttostring.split(",")[0]);

let daynow=parseInt(1);
let daybox=parseInt(meresprin)+parseInt(1);

for (let i=meresprin ; i<=(parseInt(daysInMonth)+parseInt(meresprin)); i++)	
{  
    for (let s=1; s<=meresprin ; s++)
			{
			document.getElementById("box"+s).onclick="";
			document.getElementById("box"+s).innerHTML=" ";	
			document.getElementById("box"+s).style.backgroundColor = "lightblue";
			}
    document.getElementById("box"+daybox).innerHTML=daynow;	
	document.getElementById("box"+daybox).style.backgroundColor = "white";
	document.getElementById("box"+daybox).onclick=Hello;
    document.getElementById("markos").onclick=Save;
	
	var scale = document.getElementById("box"+daybox);
	

    scale.addEventListener("click", function check() 
	{
		
	var datesss=new Date(year,month,(i-meresprin+2));
	var actualdate=new Date(currentyear,month,(i-meresprin+1));
	
	clicked=datesss; //gia na treksei swsta h synarthsh
	datedate=actualdate; //pragmatikh hmeromhnia gia thn sygkrish
	console.log(clicked);
	number=i+1;
	
    // const parent = document.createElement("box"+daybox);
    // const child = document.createElement("p"+daybox);
    // parent.append(child, childTwo, 'Hello world'); // Works fine
    // parent.appendChild(child, childTwo, 'Hello world');
	
	
	
    });
	
	
	let k=parseInt(daysInMonth)+parseInt(1)+parseInt(meresprin);
	for (k ; k<=42 ; k++)
	{   
        document.getElementById("box"+k).onclick="";
		document.getElementById("box"+k).innerHTML=" ";	
		document.getElementById("box"+k).style.backgroundColor = "lightblue";
	}
	
	daynow++;
	daybox++;
}


}







 function Hello() 
{
	modal.style.display = "block";
    

}

function Close()
{
modal.style.display ="none"; 
document.getElementById("event").value=" ";
document.getElementById("eventdes").value=" ";	

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function Save()
{
	
console.log(clicked);
var text ="      " + document.getElementById("event").value;
var text1="      " + document.getElementById("eventdes").value;
console.log(text,text1,clicked);	
	

										

										
										
							
    const parent = document.getElementById("box"+number);
    const child = document.createElement("p"+number);
    parent.append(child,text); // Works fine
						
modal.style.display ="none"; 
document.getElementById("event").value=" ";	
document.getElementById("eventdes").value=" ";	

}

