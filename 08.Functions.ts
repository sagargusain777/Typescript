
function addtwo (number){
    return number + 2;
}

const result = addtwo(2);
console.log(result); // 4


function subtwo (number){
    return number + 2;
}

const result2 = addtwo("2");
console.log(result); 

//Parameter type Annotations

function greeting(name : string){
    console.log(`Hello ${name.toUpperCase() }  You Doing amazing`)

}

greeting("John");

function getUpper( val: string){
    return val.toUpperCase();
}

getUpper("John");

//Passing Deault Values
let loginUser = (username: string, password: string , isLogin : boolean =false) => {
    return `Username: ${username} Password: ${password} isLogin: ${isLogin}`;
}



loginUser("John", "1234" );