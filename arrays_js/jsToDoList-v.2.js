

var listToDo = [];
var command = prompt("What would you like to do?");

while(command !== "exit") {
	if (command === "new") {
		var newToDo = prompt("Enter new TODO!!!");
		listToDo.push(newToDo);
		console.log("New TODO was added");
	}
	if (command === "list") {
		console.log("***************");
		listToDo.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("***************");
	} 

	if (command === "delete") {
		var index = prompt("Enter index of todo to delete");
		listToDo.splice(index, 1); 
		console.log("ToDO was succesfully deleted");
	}
	command = prompt("What would you like to do?");
	
}
console.log("done");