const names = ["monaem", "shahin gazi", "manik gazi", "joy"];

function largestName(name){
    let largeName = name[0];
    for(let i = 0; i < name.length; i++){
        let asoleiBoroNam = name[i];
        if(asoleiBoroNam.length > largeName.length){
            largeName = asoleiBoroNam;
        }
    }
    return largeName;

}

let boroNam = largestName(names);
console.log(boroNam);