

var listToDo = [];
var todo = prompt("What would you like to do?");

while(todo !== "exit") {
	if (todo === "new") {
		var newToDo = prompt("Enter new TODO!!!");
		listToDo.push(newToDo);
		alert("New TODO was added");
	}
	if (todo === "list") {
		console.log(listToDo);
	}
	todo = prompt("What would you like to do?");
	
}
console.log("done");