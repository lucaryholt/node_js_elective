function myFirstFunction(){
    return "Hello World";
}

//console.log(myFirstFunction());

//funktioner er first class citizens i js, man kan passe funktioner som parametre eller fx gemme dem som variabler

const myVariableFunction = myFirstFunction();

//anonym funktion

const myVariableFunction2 = function (){
    return "what up2";
};

//console.log(myVariableFunction2());

//ny syntax - arrow function

const myArrowFunction = () => {
    console.log("ARROW!");
};

//console.log(myArrowFunction());

function sayHiLater(anyFunctionReference){
    anyFunctionReference();
}

//når den bliver sendt med som parameter er det uden paranteser, da vi ikke skal kalde functionen, men bruge den som en const
//Når man så skal bruge den sendte funktion (linje 28), bruger man paranteser, fordi man nu vil bruge den som funktion

sayHiLater(myArrowFunction);


//callbacks

const poke = (name) => "poke " + name;

function interact(name, interactingFunction){
    console.log(interactingFunction(name));
}

interact("Bob", poke);

interact("Jens", (name) => "hug " + name);

