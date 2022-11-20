/** *************************  Problem 01 **************************************
********************* Input Feet Output Mile ****************************** */
function feetToMile(feet) {
    let mile = feet / 5280;
    mile = mile.toFixed(5);
    // mile = Math.round(mile);
    return mile;
}
let result = feetToMile(50300);
console.log(result);
/** **************************** Problem 01 done *********************************** */

/** ***************************** Problem 02 ********************************************* 
 * ****************************** Wood Calculator *******************************************
        1 char = 1 ft
        1 table = 3 ft
        1 bed = 5 ft
*/

function woodCalculator(char, table, bed) {
    char = char * 1;
    table = table * 3;
    bed = bed * 5;
    let woodCalculator = char + table + bed;
    return woodCalculator;
}
let woodResult = woodCalculator(14, 8, 14);
console.log(woodResult, "ft");
/** ******************************** Problem 02 Done ********************************* */

/** ******************************** Problem 03  ******************************************
 * ******************************** Brick Calculator ************************************** */

// function name brickCalculator
// 1-10 floor = 15 feet height
// 11-20 floor = 12 feet height
// 21-any = 10 feet height
// and 
// 1 feet = 1000 brick 

function flooName(floor) {
    let perFeetBrick = 1000;
    let height1 = 15 ; // 1-10 floor >= 10
    let height2 = 12 ; // 11-20 floor >= 11 && floor <= 20
    let height3 = 10 ; // 20- any floor
    let totalBrick1, totalBrick2, totalBrick3;

    if (floor <= 10) {
        totalBrick1 = floor * height1 * perFeetBrick;
        return totalBrick1;
    } 
    if(floor >= 11 && floor <= 20) {
        totalBrick1 = 10 * height1 * perFeetBrick;
        totalBrick2 = (floor - 10) * height2 * perFeetBrick;
        return totalBrick1 + totalBrick2;
    }else{
        totalBrick1 = 10 * height1 * perFeetBrick;
        totalBrick2 = (20 - 10) * height2 * perFeetBrick;
        totalBrick3 = (floor -20) * height3 * perFeetBrick;
        return totalBrick1 + totalBrick2 + totalBrick3;
    }
}

let brickResult = flooName(25);
console.log(brickResult);
/** ******************************** Problem 03  Done ****************************************** */

/** ******************************** Problem 04  ****************************************** */
/** ******************************** Tiny Friend ********************************************** */ 
// Input a friend list output one  tiny friend 

function tinyFriend(friendsName) {
    let tinyFriend = friendsName[0];
    for(let i = 0; i< friendsName.length; i++){
        let element = friendsName[i];
        if(element.length < friendsName.length){
            tinyFriend = element;
        }
    }
    return tinyFriend;
}
let tinyFriendResult = ["Arif", "Robin", "Shakaoyat", "Raj", "Jonaki"];
let resultFriend = tinyFriend(tinyFriendResult);
console.log(resultFriend);
/** ******************************** Problem 04 Done ****************************************** */
