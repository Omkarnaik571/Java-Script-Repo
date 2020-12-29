let myName = {
  firstName: "Omkar",
  lastName: "Naik",
};

let printName = function (homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      " , " +
      state
  );
};

function dump(homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      " , " +
      state
  );
  this.lastName = "patel";
}

let myName2 = {
  firstName: "Aaryan",
  lastName: "Naik",
};

// Call() Method example .......
/*By Using call() or apply() you can pass the reference of an Object to a different object,
 & with that reference you can access & manupulate the data*/

printName.call(myName, "Kinjirkela", "odisha");
printName.call(myName2, "bangalore", "Karnataka..");

dump.apply(myName, ["xxx", "yyy"]);

// apply() Method example .......
printName.apply(myName, ["California", "Usa.."]);
printName.apply(myName2, ["London", "United Kingdom.."]);


//bind() Method example .......

let bindedMethod = printName.bind(myName, "Malysia", "Singapore");
console.log("Binded Method Example - "+ bindedMethod)
bindedMethod();


