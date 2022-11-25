//json iteration using forin loop

const myinfo = {
    "firstname": "prasanth",
    "lastname": "p",
    "dob": "13/06/1997",
    "nationality": "Indian",
    "religion": "Hindu",
}


for (const key in myinfo) {
      {
      console.log(`${key}: ${myinfo[key]}`);
     }
  };

//json iteration using for loop 

const myinfo1 = {
    "firstname" : "John",
    "lastname" : "Cena",
    "dob": "23/04/1977",
    "nationality": "American",
    "religion": "christian",
}
let array = Object.keys(myinfo1);

for (let i = 0 ; i< array.length ; i++)
{
    console.log(`${array[i]} : ${myinfo1[array[i]]} `);
};

//json iteration using forof loop


const myinfo2 = {
    "firstname" : "virat",
    "lastname" : "kholi",
    "dob": "05/11/1988",
    "nationality": "Indian",
    "religion": "Hindu",
}
let array1 = Object.keys(myinfo2);

for (value of array1)
{
    console.log(`${value} : ${myinfo2[value]}`);
}

//json iteration using foreach

const myinfo3 = {
    "firstname": "Lionel",
    "lastname": "Messi",
    "dob": "05/02/1985",
    "nationality": "Argentine",
    "religion": "christian catholic",
}
let array2 = Object.keys(myinfo3);

array2.forEach( (value) => {
    console.log( value + ":" + myinfo3[value])
});




