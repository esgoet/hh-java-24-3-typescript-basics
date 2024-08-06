const age : number = 27;
for (let i : number = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("Age " + age + " is greater than 18.");
}

const score : number = 0;
if (score) {
    console.log("Score is available.");
    console.log("Score is evaluated as truthy.");
}

const username : string = "";
if (username) {
    console.log("Username is available.");
} else {
    console.log("Username is evaluated as falsy.");
}

const isAdmin : boolean = false;
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is false");
}