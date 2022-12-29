// Exercice 1 : Le Traducteur Du Monde 

/*1.Demandez à l'utilisateur quelle langue il parle.*/
    let LangParle = prompt("Quelle est la langue que vous parle")
/*Convertissez la réponse de l'utilisateur en minuscules, afin que toutes les entrées de l'utilisateur soient acceptées dans l'instruction if. Par exemple « anglais » ou « anglais » ou « anglais » ect… » */ 
    let LangParleMin = LangParle.toLowerCase()
/*Créez quelques conditions : */
switch(LangParleMin){
    case "français":
        /*Si l'utilisateur parle français : affiche "Bonjour" */
        alert("Bonjour")
        break

    case "anglais":
        /*Si l'utilisateur parle anglais : affiche « Hello » */
        alert("Hello")
        break

    case "hébreu":
        /*Si l'utilisateur parle hébreu : afficher « Shalom » */
        alert("Shalom")
        break

    default:
        /*Si l'utilisateur ne parle aucune de ces 3 langues : affiche '01110011 01101111 01110010 01110010 01111001' */
        alert('01110011 01101111 01110010 01110010 01111001')
}

// Exercice 2 : L'assignateur De Notes 

/*1.Demandez à l'utilisateur sa note.*/

let note = prompt("Veuillez entrer votre note svp: ")


if(note > 90){
    /* 2.Si la note est supérieure à 90, console.log "A" */
    console.log("A")
}else if(note>80 && note <=90){
    /* 3.Si la note est comprise entre 80 et 90 (inclus), console.log "B"*/
    console.log("B")
}else if(note>=70 && note<=80){
    /* 4.Si la note est comprise entre 70 (inclus) et 80 (inclus), console.log "C" */
    console.log("C")
}else{
    /* 5.Si la note est inférieure à 70, console.log "D" */
    console.log("D")
}

// Exercice 3 : Verbe

/* Des Instructions */
/* 1.Demander à l'utilisateur une chaîne. Ce doit être un verbe. */
let verbe = prompt("Veuillez entrer un verbe")
/*2.Si la longueur de la chaîne est d'au moins 3 et que la chaîne ne se termine pas par « ing », ajoutez « ing » à la fin de la chaîne.*/
if(verbe.length >= 3 && !verbe.endsWith("ing")) {
        console.log(verbe + "ing");
    }else if (verbe.length >= 3 && verbe.endsWith("ing")) {
            return verbe + "ly"; /* 3.Si la longueur de la chaîne est d'au moins 3 et que la chaîne se termine par "ing", ajoutez "ly" à sa fin.*/
}else if (verbe.length < 3) {
    console.log(verbe);/* 4.Si la longueur de la chaîne est inférieure à 3, laissez-la inchangée.*/
}


