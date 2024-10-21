var user = [];
var obj ;

function objfunction(){
    obj = {
        Name: document.getElementById("Name").value,
        email: document.getElementById("email").value,
        rollnumber: document.getElementById("rollnumber").value,
        password: document.getElementById("password").value,
    };
    user.push(obj);
    console.log(user);
};