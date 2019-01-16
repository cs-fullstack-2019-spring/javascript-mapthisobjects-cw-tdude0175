// Use .map to create a new array of objects
// where each object has a property for pet number and pet type based on the elements in the array.
// Print the new array of objects.
// let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects



/*
build the function for stuff to exist in.
map CATALOGS the values and the index in that order


 */
main();

function main()
{                 
    let arr = ["dog", "cat", "pig", "hamster"];

    let pet_objects = []; // new array to hold objects

    function typesOfPets(pet, ndx)
    {
        let petInfo ={};

        petInfo.number = ndx;
        petInfo.type = pet;


        return petInfo;
    }
    // function positionOfPets(notUsed,petLocation)
    // {
    //     return(petLocation);
    // }

    pet_objects =  arr.map(typesOfPets);

  //  pet_objects.push(arr.map(positionOfPets));
console.log(arr);
console.log(pet_objects);

}

