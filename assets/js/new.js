$( document ).ready(function() {
    // your code here

/*
var json = [];
$('#Report').find('tbody tr').each(function(){
    var obj = {},
        $td = $(this).find('td'),
        key = $td.eq(0).text(),
        val = parseInt( $td.eq(2).text(), 10 );
    obj[key] = val;
    json.push(obj);
});
*/


  //  var x = $("span").map(function() {

  //      return $(this).text();

  //  }).toArray().join(",");

var json = [];
$( "table.plan td.plan_inhalt > table" ).map(function(index) {
	    var obj = {},
			$td = $(this).find('td');
			//console.log($td);
			//$td = $(this).$("td");
			info = $td.parent().parent().parent();
	if (info.hasClass("kplan_inhalt_bg_normal")) {		
		obj["Fach"] = $td.eq(0).text();
		//TODO add woche
		obj["Raum"] = $td.eq(1).text();
		obj["Lehrer"] = $td.eq(2).text();
	} else if (info.hasClass("kplan_inhalt_bg_vertretung")) {
		obj["Fach"] = $td.eq(1).text();
		obj["Raum"] = $td.eq(2).text();
		obj["Lehrer"] = $td.eq(3).text();
		obj["Vertetung"] = true;
	} else if (info.hasClass("kplan_inhalt_bg_ausfall")) {
	}
    json.push(obj);
	
  //return index +": "+$(this).toArray().join(",");
  //return $(this).append("|").text();
  //console.log( index + ": " + $( this ).text() );
  //var y = $("td").each(function(index){
	//return index +": "+$(this).text(); 
  //});
  //return y; 

 });
 //});
//console.log(x.toString());
console.log(json);

//console.debug(x);

});
