
class tomagotchiPet{
	constructor(petName, hunger, sleepiness, boredom, age){
		this.petName = petName
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.boredom = boredom
		this.age = age
	}
}


let pet = new tomagotchiPet("New Pet", 0, 0, 0, 0)
$(".petStats").append("<p>" + pet.petName + "</p>" + "<p>" + pet.hunger + "</p>" + "<p>" + pet.sleepiness + "</p>" + "<p>" + pet.boredom + "</p>" + "<p>" + pet.age + "</p>")

$("#change-pet-name").click(function(){
  let petName = $("#change-pet-name").val()
  if(petName === ""){
		alert("Name cannot be blank.")
	}else{
	$("#petName").append($petName)
	$("#petName").val("")
}
})
