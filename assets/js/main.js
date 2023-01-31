console.log("test");

console.table("test");

/* 
input > 
    knopf drücken hinzufügen => 
        function hinzufügen zum Array > 
            output

*/


//Variable 
let input = document.querySelector("#input");

let buttonHinzufügen = document.querySelector(`input[value="hinzufügen"]`);  // dann muss man keine ID vergeben
let buttonRückwärts = document.querySelector(`input[value="rückwärts"]`);   // dann muss man keine ID vergeben

let output = document.querySelector("ol"); // ol oder p in html verweisen

// EventlListener

buttonHinzufügen.addEventListener("click", insArrayHinzufügen);

buttonRückwärts.addEventListener("click", ausArrayRückwärts)

const arrayListe = ["bitte befüll mich"];
console.log(arrayListe);
console.table(arrayListe);



// fuction 
function insArrayHinzufügen(event) {
    event.preventDefault();
    console.log("eventListener geht");
    if (input.value != "") {
        arrayListe.push(`<li>  ${input.value} </li>`);
        input.value = "";                      // macht Eingabefeld wieder leer


        console.log("in function: " + arrayListe);
        console.table(arrayListe);

        output.innerHTML = arrayListe.join("");;
    };
};


// fuction
function ausArrayRückwärts(){
    if(arrayListe.length > 0){      // 0 löscht auch Anfangstext "bitte befüll mich" :-)
        arrayListe.pop();

        output.innerHTML = arrayListe.join("");
    }
}



console.log("danach: " + arrayListe);
console.table(arrayListe);



