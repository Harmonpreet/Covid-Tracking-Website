var APIdata;
$.getJSON("https://api.covid19api.com/summary", function(data){
APIdata= data;
var options=$("#countryName");
for(var i=0; i<data.Countries.length; i++){
	options.append($("<option />").text(data.Countries[i].Slug));
}
});

$(document).ready(function(){
  $("#cases-button").click(function(){
  	timeIn();
  	var cName= document.getElementById("countryName").value;
    
    var totalCases, totalRecoveries, totalDeaths;
    for(var i=0; i<APIdata.Countries.length; i++){
    	if(APIdata.Countries[i].Slug==cName)
    	{
    		totalCases=APIdata.Countries[i].TotalConfirmed;
    		totalRecoveries=APIdata.Countries[i].TotalRecovered;
    		totalDeaths=APIdata.Countries[i].TotalDeaths;
    		break;
    	}
    }
    setTimeout(function(){
  	document.getElementById("loader-image").src="";
}, 2000);
    setTimeout(function(){
    	document.getElementById("show-country-name").innerHTML=cName.toUpperCase();
  	    document.getElementById("total-cases").innerHTML="Total cases : "+totalCases;
    	document.getElementById("total-recoveries").innerHTML="Total recoveries : "+totalRecoveries;
    	document.getElementById("total-deaths").innerHTML="Total deaths : " +totalDeaths;
    	var mortalityRate=Math.floor((totalDeaths/totalCases)*100);
    	document.getElementById("mortality-rate").innerHTML="mortality rate : " +mortalityRate+ "%";
    
}, 3000);

 
    
  });
});
function timeIn()
{
	document.getElementById("loader-image").src="https://i.gifer.com/4V0b.gif";
}
