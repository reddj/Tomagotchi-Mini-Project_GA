
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
$(".petStats").append("<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")

$("#change-pet-name").click(function(){
  let petName = $("#change-petName-input").val()
  if(petName === ""){
		alert("Please add a name for your pet.")
	}else{
	pet.petName = petName
	refresh()
}
})

let refresh = function(){
	$(".petStats").empty()
	$(".petStats").append(
		`<p>${pet.petName}</p>
		 <p>Hunger: ${pet.hunger}</p>
		 <p>Sleepiness: ${pet.sleepiness}</p>
		 <p>Boredom: ${pet.boredom}</p>
		 <p>Age: ${pet.age}</p>`)
		//"<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")
}

let increase = function(){
	setTimeout(function(){
		pet.hunger += 1
		if(pet.hunger < 10){
		$(".petStats").empty()
		$(".petStats").append("<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")
        increase()
	}}, 5000)
}

let increase2 = function(){
	setTimeout(function(){
		pet.sleepiness += 1
		if(pet.sleepiness < 10){
		$(".petStats").empty()
		$(".petStats").append("<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")
        increase2();
	}}, 5000)
}

let increase3 = function(){
	setTimeout(function(){
		
		pet.boredom += 1
		if(pet.boredom < 10){
		$(".petStats").empty()
		$(".petStats").append("<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")
        increase3();
	}}, 5000)
}

let increase4 = function(){
	setTimeout(function(){
		pet.age += 1
		death()
		$(".petStats").empty()
		$(".petStats").append("<p>" + pet.petName + "</p>" + "<p> Hunger: " + pet.hunger + "</p>" + "<p> Sleepiness: " + pet.sleepiness + "</p>" + "<p> Boredom: " + pet.boredom + "</p>" + "<p> Age: " + pet.age + "</p>")
        increase4();
	}, 5000)
}

$("#feed-pet").click(function(){
 if(pet.hunger !== 10){
   pet.hunger--
   refresh()
 }
})

$("#sleep").click(function(){
 if(pet.sleepiness !== 10){
   pet.sleepiness--
   refresh()
 }
})

$("#play-with-pet").click(function(){
 if(pet.boredom !== 10){
   pet.boredom--
   refresh()
 }
})

let death = function(){
	if(pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10){
		$(".pet").fadeOut()
	}
}

increase()
increase2()
increase3()
increase4()




