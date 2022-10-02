'use strict'

class Computer {
    constructor(name, cpuSpeed, ramSize, hddType, hddSize, screenSize) {
        this.name = name;
        this.cpuSpeed = cpuSpeed;
        this.ramSize = ramSize;
        this.hddType = hddType;
        this.hddSize = hddSize;
        this.screenSize = screenSize;
    }
};
let asus = new Computer('ASUS', 4, 32, 'SSD', 525, '2560x1440');
let dell = new Computer('DELL', 2.5, 16, 'SSD', 225, '1920x1080');
let lenovo = new Computer('Lenovo', 3, 24, 'SSD', 350, '1024x768');
let hp = new Computer('HP', 7, 64, 'SSD', 850, '1024x768');

class Comparer {

    compare = function (pc1, pc2) {
        if (pc1.cpuSpeed > pc2.cpuSpeed) {
            console.log(pc1.name + " is Higher with " + pc1.cpuSpeed + " GHz");
            return (pc1.name + " is Higher with " + pc1.cpuSpeed + " GHz");
        } else {
            console.log(pc2.name + " is Higher with " + pc2.cpuSpeed + " GHz");
            return (pc2.name + " is Higher with " + pc2.cpuSpeed + " GHz");
        }
    };

    compare2 = function (pc1, pc2) {
        if (pc1.ramSize > pc2.ramSize) {
            console.log(pc1.name + " is Higher with " + pc1.ramSize + " GB RAM");
            return(pc1.name + " is Higher with " + pc1.ramSize + " GB RAM");
        } else {
            console.log(pc2.name + " is Higher with " + pc2.ramSize + " GB RAM");
            return(pc2.name + " is Higher with " + pc2.ramSize + " GB RAM");
        }
    };

    compare3 = function (pc1, pc2) {
        if (pc1.hddSize > pc2.hddSize) {
            console.log(pc1.name + " is Higher with " + pc1.hddSize + " GB SSD");
            return(pc1.name + " is Higher with " + pc1.hddSize + " GB SSD");
        } else {
            console.log(pc2.name + " is Higher with " + pc2.hddSize + " GB SSD");
            return(pc2.name + " is Higher with " + pc2.hddSize + " GB SSD");
        }
    };

    screenSizeComparer = function (ss1, ss2) {
        if (ss1.screenSize > ss2.screenSize) {
            console.log(ss1.screenSize + " is higher");
        } else if (ss1.screenSize === ss2.screenSize) {
            console.log('They are equal !');
        } else {
            console.log(ss2.screenSize + " is higher");
        }
    };
}

let laptops = [asus, dell, lenovo, hp];

let myComparer = new Comparer();
let resultX = myComparer.compare(asus, dell);
console.log(resultX);
console.log(typeof resultX);
let resultY = myComparer.compare2(asus, dell);
let resultZ = myComparer.compare3(asus, dell);


// myComparer.compare(asus, dell);
// myComparer.compare(dell, lenovo);                 // Lenovo is Higher
// myComparer.screenSizeComparer(asus, dell);
// myComparer.screenSizeComparer(dell, lenovo);
// myComparer.screenSizeComparer(lenovo, dell);
// myComparer.screenSizeComparer(lenovo, hp);        // Equal



//```````````````````````````````````````````````````Other ex 2

// let btnLeft = document.getElementById('pc1');
// let btnRight = document.getElementById('pc2');

// let pMid = document.getElementById('demo');
// let pLeft = document.getElementById('demo2');

// function insertInfo() {
//     pLeft.innerHTML = resultX + "<br> " + resultY + "<br>" + resultZ;
//     console.log(pLeft);
// }
// btnLeft.addEventListener("click", insertInfo);



// function check() {
//     pMid.innerHTML = " " + asus.name + "🔝";


// }
// btnRight.addEventListener("click", check);



// //````````````````````````````````````````````````` Next ex 3
// // id = fpc first pc sel; id = spc second pc sel; 
// // laptops = array with laptops/pcs

// let finalBtn = document.getElementById('test');            // Buton Submit Compare PC`s
// let finalResult = document.getElementById('descrHere');    // Paragraf

// let firstInput = document.getElementById('fpc');
// let secondInput = document.getElementById('spc');


// function btnTouch() {
    
//     finalResult.innerHTML = resultX + "<br> " + resultY + "<br>" + resultZ;

//     for(let i of laptops){
//         if(laptops[i] === firstInput && laptops[i] === secondInput) {
//             console.log('true ddddd');
//         }else {
//             console.log('3log');
//         }
//     }
    
// }

// finalBtn.addEventListener('click', btnTouch);



// ``````````````````````````````````````````````````````` EX 4:
let firstInput = document.getElementById('fpc');        
let secondInput = document.getElementById('spc');     
let compareBtn = document.getElementById('fbtn');      // compare input type button
let finalDescribe = document.getElementById('describe');  // empty paragraph


compareBtn.addEventListener('click', btnTouch);

function btnTouch() {
    finalDescribe.style.display = 'block';
    finalDescribe.innerHTML = resultX + "<br> " + resultY + "<br>" + resultZ;
}
















