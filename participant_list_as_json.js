/**
 * From page pretekaj.sk transform surname and name at starting list to JSON.
 * 
 * It is necessary to execute code below in console. JQuery inclusion is awaited.
 */

 var ucastnici = [];
$("td:nth-child(3)").each(function(){
  let splitted = $(this).text().split(" ");
  let lowerCasedSurname = splitted[0][0] + splitted[0].substring(1).toLowerCase();
  ucastnik = {
    priezvisko: lowerCasedSurname,
    meno: splitted[1]
  }
  ucastnici.push(ucastnik);
})

console.log(JSON.stringify(ucastnici, null, 4));


