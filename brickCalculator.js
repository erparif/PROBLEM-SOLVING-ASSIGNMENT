/** ******************************** Brick Calculator ************************************** */

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
console.log(brickResult, "Brick");