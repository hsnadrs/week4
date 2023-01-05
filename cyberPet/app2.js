// creating global variables for pet and the interval
let pet = null;
let interval = null;


// this is the generic cyberpet class that has properties and methods that can be
// applied to any animal
//class cyberPet {
    function Pet (name) { //constructor start with capital letter e,g P
        this.name = name;
        this.hunger = 100;
        this.thirsty = 100;
        this.health = 100;
        this.eat =()=> {
            this.hunger = (this.hunger + 10 >= 100) ? 100 : this.hunger + 10; //ternary oporator
            this.thirsty -= 7;
            this.health = (this.health + 15 >= 100) ? 100 : this.health + 15;
    
        }
    
        this.drink =() =>{
            this.health = (this.health + 10 >= 100) ? 100 : this.health + 10;
            this.thirsty = (this.thirsty + 15 >= 100) ? 100 : this.thirsty + 15;
        }
    
    } //end object constructer


    
//}
// using the cyberpet class as a foundation the Dog class adds more specific
// methods on top of what the cyberpet class has made
//class Dog extends cyberPet {
  //  constructor(name) {
        // the super method gets all the properties from the cyberpet class and
        // brings them into the dog class e.g. health, hunger, thirsty etc...
    function Dog (name){
        
        
         // Calling Pet constructor function
         Pet.call(this, name);//call keyword https://www.geeksforgeeks.org/javascript-function-prototype-call-method/
  
         // Adding a new parameter
         //this.specialization = specialization;
         this.happy = 100;
    


    // this.playFetch=()=> {
    //     this.happy += 20;
    //     this.thirsty -= 10;
    //     this.hunger -= 10;
    // }
}


// cat builds from the cyberpet again adding more relevant data for a cat as well
// as the properties from the cyberpet class
//class Cat extends cyberPet {
 //   constructor(name) {
    function Cat (name){
        //super(name)
        
        Pet.call(this, name);//call keyword https://www.geeksforgeeks.org/javascript-function-prototype-call-method/
  
        this.lazy = 100;
    

    this.groom=()=> {
        this.health += 10;
        this.hunger -= 5;
        this.thirsty -= 5;
    }
}

//class Rabbit extends cyberPet {
  //  constructor(name) {
    function Rabbit (name){
  //      super(name)
  
  Pet.call(this, name);//call keyword https://www.geeksforgeeks.org/javascript-function-prototype-call-method/
  
        this.digging = 100;
    

    this.adventuring=()=> {
        this.digging += 10;
        this.hunger -= 5;
        this.thirsty -= 5;
    }
}
// create a new Cat class whilst passing it it's names
// let newwPet = new Cat("Whiskers")
// create a new Cat class whilst passing it it's names
// newwPet.groom()
// newwPet.drink()
// logging the variable with the cat class to see it's new stats
// console.log(newwPet)


// function to update stats
const updateStats = () => {
    document.getElementById('hungerStat').textContent = `Hunger: ${pet.hunger}`;
    document.getElementById('thirstyStat').textContent = `Thirsty: ${pet.thirsty}`;
    document.getElementById('healthStat').textContent = `Health: ${pet.health}`;
    document.getElementById('hunger').value = pet.hunger
    document.getElementById('thirst').value = pet.thirsty
    document.getElementById('health').value = pet.health
}

// when feed button is clicked run the eat method from the pet class and update stats
document.querySelector('#feedBtn').addEventListener('click', () => {
    pet.eat();
    updateStats();
})

document.querySelector('#drinkBtn').addEventListener('click', () => {
    pet.drink();
    updateStats();
})

// gets the form and adds the event listener to it that runs on the forms submit
document.getElementById('form1').addEventListener('submit', (event) => {
    event.preventDefault() //stops the form directing to another page 
    processSubmittedPet(event);
});
document.getElementById('form2').addEventListener('submit', (event) => {
    event.preventDefault() //stops the form directing to another page 
    processSubmittedPet(event);
});
document.getElementById('form3').addEventListener('submit', (event) => {
    event.preventDefault() //stops the form directing to another page 
    processSubmittedPet(event);
});
   
function processSubmittedPet(event){
    //hide choice and show status
   document.getElementById('clickableImages').style.display = 'none';
   document.getElementById('gameBox').style.display = 'block';
   
    let chosenPet = '';
    let clickedForm = event.target;
    //console.log(clickedForm);
    let allFormElements = clickedForm.elements;

    let hiddenInput = allFormElements.petClicked;//hidden input called petClicked
    let petNameInput = allFormElements.petName;//hidden input called petClicked

    chosenPet =hiddenInput.value;
    let petName= petNameInput.value;
    console.log(chosenPet);
    console.log(petName);
    // checking the radio buttons to see what the user selected and store 
    // selected value in chosenPet variable
    // document.querySelectorAll('.choice').forEach((element) => {
    //     if (element.checked) {
    //         // storing the users choice in variable
    //         chosenPet = element.value
    //     }
    // })

    // get the input name value
    //let petName = document.getElementById('name').value;
//show image
let divChild = document.getElementById ('petIcon');//get div for image insertion
let icon=document.createElement('img'); //create image
if (chosenPet =="cat"){ //if check which pet image
icon.src= 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';
} else if (chosenPet =="dog"){
 icon.src= 'https://images.pexels.com/photos/14008804/pexels-photo-14008804.jpeg';
} else if (chosenPet =="rabbit"){
 icon.src= 'https://lirp.cdn-website.com/69faaec6/dms3rep/multi/opt/charlie-1920w.jpg';
}
divChild.appendChild(icon);//final insertion of img element inside the chosen <div>
//end of show image
    // create dog or cat based on user choice and pass typed name to class
    if (chosenPet === 'dog') {
        //create dog
        pet = new Dog(petName)//new constructor function OBJECT same like class
    } else if (chosenPet === 'cat') {
        //create cat
        pet = new Cat(petName)
    } else if (chosenPet === 'rabbit') {
        pet = new Rabbit(petName)
    }
    // console.log(petName)


    // display pet name  in title
   document.getElementById('displayPetName').textContent = `${petName} please feed, drink or die`;

    // start the interval to reduce stats every second
    interval = setInterval(() => {
        pet.thirsty -= 10;
        pet.hunger -= 10;
        pet.health -= 5;

        // runs function which updates stats using JS DOM
        updateStats();

        // if stat hits 0 stop the interval and display message
        if (pet.hunger <= 0 || pet.thirsty <= 0) {
            clearInterval(interval); // JS function Use clearInterval() to stop the time
            document.getElementById('death').style.display = 'block';
            document.getElementById('message').textContent = `${petName} died`;
        }
    }, 1000);


   


}

document.getElementById('resetBtn').addEventListener('click', () => {
    window.location.reload()
})


// submitBtn.addEventListener('click', () => {
//     console.log('clicked')
//     document.querySelectorAll('.choice').forEach((element) => {
//         console.log(element.checked) //this then would console log the different elements
//     }) //this would return an array of all the classes with choice in it

// })//the checked property checks if the radio buttons have been checked

//ENTER KEY
// document.addEventListener('keypress', (event) => {
//     if (event.code === "Enter") {
//         //handle pet choice
//     }
//     console.log(event.code)
//})
