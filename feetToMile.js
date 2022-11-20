/**  ********************* Input Feet Output Mile ****************************** */
function feetToMile(feet) {
    let mile = feet / 5280;
    mile = mile.toFixed(5);
    // mile = Math.round(mile);
    return mile;
}
let result = feetToMile(50300);
console.log(result);