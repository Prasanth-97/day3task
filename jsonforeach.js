const myinfo = {
    "firstname": "prasanth",
    "lastname": "p",
    "dob": "13/06/1997",
    "nationality": "Indian",
    "religion": "Hindu",
}
let array = Object.keys(myinfo);

array.forEach( (value) => {
    console.log("value", value + ":" + myinfo[value])
})

