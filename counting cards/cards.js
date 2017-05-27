var count = 0;
function countCards(cardVal){
    switch(cardVal) {
        case 2:
            count = count + 1;
            break
        case 3:
            count = count + 1;
            break
        case 4:
            count = count + 1;
            break
        case 5:
            count = count + 1;
            break
        case 6:
            count = count + 1;
            break
        case 7:
            count = count;
            break
        case 8:
            count = count;
            break
        case 9:
            count = count;
            break
        case 10:
            count = count - 1;
            break
        case "A":
            count = count - 1;
            break
        case "j":
            count = count - 1;
            break
        case "K":
            count = count - 1;
            break
        case "Q":
            count = count - 1;
    }
    
    if(count > 0) {
        res = count + " " + "Bet";
    }
    else {
        res = count + " " + "Hold";
    }
    
    return res;
}

var reci = countCards("J");
console.log(reci);