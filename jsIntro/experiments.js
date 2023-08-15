const fname = "Bad Bob";
const lname = "the Albino";
const fullname = `${fname} ${lname}`;

console.log(`Hello ${fullname}! `)

function gunFight(shots) {


    let gunshots = "";
    let shout = "";

    for (let i=0; i<=shots; i++) {
        if (i < shots) {
            gunshots += " BLAM! ";
        } else if (i < 7) {
            shout = "Dang it! I missed him!";
        } else {
            shout = "I got him!";
        }
    }
    console.log("Hey!! ", fullname,  " Hands Up!!!");
    console.log(gunshots);
    console.log(shout);
    return(gunshots);
}

gunFight(6);

let machineGunFight = gunFight;

machineGunFight(12);

