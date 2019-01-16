//Use .filter to create an array of pet objects that only holds the hamsters.
// let pets = [
// {
//   name: 'Spot',
//   type: 'Hamster'
// },
// {
//   name: 'Harry',
//   type: 'Hamster'
// },
// {
//   name: 'Kitty',
//   type: 'Cat'
// }
// ]
//
// let hamsters = []; // new array to hold objects

/*
 both necessary arrays are built
 push objects with the "type" HAMSTER into the hamster array
 compare type against Hamster
 */


main1();

function main1()
{
    let hamsters = [];

    let pets =
        [
        {name: 'Spot', type: 'Hamster'},
        {name: 'Harry', type: 'Hamster'},
        {name: 'Kitty', type: 'Cat'}
        ];

    function hamsterFilter(name)
    {

        return (name.type === "Hamster");

    }
    hamsters = pets.filter(hamsterFilter);

    console.log(hamsters);
}