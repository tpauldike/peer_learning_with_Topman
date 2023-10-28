#!/usr/bin/node

if (process.argv.length < 3) {
    console.log("Please run the script again and add your name");
} else if (process.argv.length == 3) {
    console.log("Welcome " + process.argv[2]);
    console.log("You entered only 1 name");
} else {
    console.log("Welcome", process.argv[2], process.argv[3]);
    console.log("You entered " + process.argv.length + " names");
}

//argv = [node, <the_js_file>,Joe, Serah, Thomas, Jones, Jack]
