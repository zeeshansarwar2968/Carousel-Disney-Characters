// Initializing and capturing the elements required to achieve functionality
const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

// Adding event listeners to the two buttons
leftArrow.addEventListener("click", getLeftData);
rightArrow.addEventListener("click", getRightData);

var imageFile = document.getElementsByClassName("image")[0];
var description = document.getElementsByClassName("description")[0];

// Adding a default image to display area
imageFile.style.backgroundImage = `url(https://download.logo.wine/logo/Disney%2B/Disney%2B-White-Logo.wine.png)`;

//Initializing a counter to loop through the entire database
var imageCounter = 0;

// Starting the main function to display on left button click
async function getLeftData(){

    try {
        const result1 = await fetch("https://api.disneyapi.dev/characters")
        const jsonResult = await result1.json();
        const info = await jsonResult.data;
    
        //logic to count the iteration of images looped on left click
        if(imageCounter === 0){
            imageCounter = info.length - 1;
        } else {
          imageCounter --;
        }
        //publishing the fetched data to the appropriate tags
        imageFile.style.backgroundImage = `url(${info[imageCounter].imageUrl})`;
        description.style.visibility = "visible";
        description.innerHTML = `${info[imageCounter].name}`;
        ;  
    } catch (error) {
        console.log("Error in loading data...");
    }
};

// Starting the main function to display on right button click
async function getRightData(){

    try{
        const result1 = await fetch("https://api.disneyapi.dev/characters")
        const jsonResult = await result1.json();
        const info = await jsonResult.data;
        
        //logic to count the iteration of images looped on left click
        if(imageCounter === info.length - 1){
          imageCounter = 0;
        } else {
          imageCounter ++;
        }
        //publishing the fetched data to the appropriate tags
        imageFile.style.backgroundImage = `url(${info[imageCounter].imageUrl})`;
        description.style.visibility = "visible";
        description.innerHTML = `${info[imageCounter].name}`;
        ;  
    } catch (error) {
        console.log("Error in loading data...");
    }
};






    
