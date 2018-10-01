//Code to solve the assignment 
//Make sure that node js has been installed before running this code 
// array =  ['pro', 'gram', 'merit', 'program', 'it', 'programmer']; 

//input : programmerit 
//output : 
//pro, gram, merit
//program, merit
//programmer, it





let wordCollections = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];
let value = "false";

function findMatchValue(input, pos, list) {
    while (pos < input.length) {
        wordCollections.forEach(function(item) {
            if (input.startsWith(item, pos)) {
                let l = list.slice();
                l.push(item);
                findMatchValue(input,pos+item.length,l);
            }
        });
        ++pos;
    }
    if (list.length > 0) {
       if(list.join('') === input){
           console.log(list.toString());
           value="true";
       }
       if(value==="false"){
         console.log(list.toString());
       }
    }
}

findMatchValue("programmerit", 0, []);