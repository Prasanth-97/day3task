const myinfo = {
    "firstname" : "prasanth",
    "lastname" : "p",
    "dob": "13/06/1997",
    "nationality": "Indian",
    "religion": "Hindu",
}
let array = Object.keys(myinfo);

for (let i = 0 ; i< array.length ; i++)
{
    console.log(`${array[i]} : ${myinfo[array[i]]} `);
}
