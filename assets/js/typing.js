const roles = [

"Ethical Hacker",
"Penetration Tester",
"Backend Developer",
"CTF Player",
"Security Researcher"

];


let index = 0;
let char = 0;

const typing = document.getElementById("typing");

function type(){

    if(char < roles[index].length){
        typing.textContent += roles[index][char];
        char++;
        setTimeout(type,100);
    }

    else{
        setTimeout(erase,1500);
    }

}

function erase(){

    if(char > 0){
        typing.textContent =
        roles[index].substring(0,char-1);

        char--;
        setTimeout(erase,50);
    }

    else{
        index++;

        if(index >= roles.length)
            index = 0;
        setTimeout(type,300);
    }

}

type();