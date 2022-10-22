const myinfo = {
    "firstname" : "prasanth",
    "lastname" : "p",
    "dob": "13/06/1997",
    "nationality": "Indian",
    "religion": "Hindu",
}
let array = Object.keys(myinfo);

for (value of array)
{
    console.log(`${value} : ${myinfo[value]}`);
}