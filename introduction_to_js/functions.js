#!/usr/bin/node
/*
function countTo(number) {
    let no;
    for ( no = 1; no <= number; no++) {
	console.log(no);
    }
    console.log("The last value of no was " + no);
}

countTo(5);
*/

/*
    for ( no = 6; 6 <= 5; no = 5 + 1) {
        console.log(5);               


OUTPUT
1
2
3
4
5

*/

const countFromOneTo = function (number) {
    let no;                                       
    for ( no = 1; no <= number; no++) {           
        console.log(no);                          
    }                                             
    console.log("The last value of no was " + no);
}

countFromOneTo(3);

const count = (n) => {
    let no;
    for ( no = 1; no <= n; no++) {           
        console.log(no);                          
    }
}

count(5)
