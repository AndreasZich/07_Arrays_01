
/*** 1.0 Arrays */

/* 1. Array - Einführung */

// let arr;
// arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,6,7,12];
// arr = [true,false];
// arr = ["Ich","bin","Drazen"];

// ausgabe(arr);
// ausgabe(arr[0]);
// ausgabe(arr[2]);
// ausgabe(arr.length);


/* 1a. Schleifen (for-schleife) */

/* For -Schleife als Wiederholungs-Struktur */
// for (let i = 0; i < 10; i++) {
//     ausgabe(i);
// }

/* For -Schleife mit Array */
//let array = ["Ich","bin","Drazen","Savi"];
// for (let i = 0; i < array.length; i++) {
//     ausgabe(i + ":" + array[i]);   
// }

 /*********   Überlegungen **********/

/* 
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// ausgabe("inhalt von a: " + a);


/* Besser: mit FOR-Schleife */
// let a = 0; // Anfangswert
// for (let i = 0; i < 4; i++) {
//     ausgabe("ausgabe aus der loop: " + a);
//     a += 1;  // a = 0 + 1
// }
// ausgabe("ausgabe nach der loop: " + a);

/* 
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Konkatenation eines Strings
*/


// let str = ""; // Anfangswert
// let addStr = "Test"; 
// let gap = " ";
// let punct = ".";

// for (let i = 0; i < 5; i++) {
//     str += addStr + gap;  
// }

// str = str + punct;
// ausgabe("Gesamter String: " + str);



/*** 02b. Funktionalität mit Array  */
let arr = ["Ich","bin","der","coole","Drazen","Savi"];
ausgabe(getSentenceArr2(arr)); // Test
function getSentenceArr2(arr) {
    let gap = " ";
    let punct = ".";
    let str = ""; 
    
    for (let i = 0; i < arr.length; i++) {
       if (i != (arr.length-1)) {
            str += arr[i] + gap; 
       } else {
            str += arr[i] + punct;
       }
    }
    
    return str;  
}


/*** 02a. Funktionalität mit Array  */
// Kritik|Überlegung
// word1,word2, .... word100  :: Semantisch Ordnung
// arr[0],arr[1] ... arr[n] :: Numerische Ordnung (0,1,2,3 ... n)
//let arr = ["Ich","bin","Drazen","Savi"];
//ausgabe(getSentenceArr(arr)); // Test
function getSentenceArr(arr) {
    let gap = " ";
    let punct = ".";
    let str =   arr[0] + gap + 
                arr[1] + gap + 
                arr[2] + gap + 
                arr[3] + 
                punct;
    return str;  
}

/*** 01. Funktionalität mit Einzelparametern */
//ausgabe(getSentence("Ich","bin","Drazen","Savi")); // Test
function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let punct = ".";
    let str =   word1 + gap + 
                word2 + gap + 
                word3 + gap + 
                word4 + 
                punct;
    return str;  
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}