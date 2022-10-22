const myinfo = {
    "firstname": "prasanth",
    "lastname": "p",
    "dob": "13/06/1997",
    "nationality": "Indian",
    "religion": "Hindu",
}
let array = Object.keys(myinfo);

for (const key in myinfo) {
     if (myinfo.hasOwnProperty(key)) {
      console.log(`${key}: ${myinfo[key]}`);
     }
  }
