var navn = "name"; //det man længe har gjort (altså med 'var'), nu er der kommet andre ting

//To nye måder at declare "variabler"
let navn0 = "name";
const navn1 = "name";

//'const' er immutable - dvs at referencen (navn1) er immutable, men værdien godt kan ændres
//der findes som sådan ikke immutable i JS

//'let' giver os korrekte fejlmeddelser
//at bruge en 'let' før den er initialiseret kaster en fejl

//man kan erklære scopes i JS med {}
{
    console.log("scope her")
    var scopedVar = "var";
    let scopedLet = "let";
}
//'let' bliver inde i et scope, mens var kan blive accessed uden for scope
console.log(scopedVar)
console.log(scopedLet)

//man kan også undlade 'let' eller 'const'
name3 = "name"
//den bliver (totalt) global. kan skabe mange problemer - man kan have en god grund til at gøre det