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