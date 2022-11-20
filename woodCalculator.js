/** ****************************** Wood Calculator *******************************************
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