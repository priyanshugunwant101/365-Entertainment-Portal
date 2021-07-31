/*var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

var userName = "Priyanshu"
var passWord = "123"

function runMe()
{
    if(u_name.value == userName && u_pass.value == passWord )
    {
        console.log('Login Success');
    }
    else{
        console.log('Login Failed');
    }
}*/
var u_name = document.myForm.u_name;
var message = document.getElementById('message');

function runMe()
{
    if(u_name.value.length < 3)
    {
        message.innerHTML = "needs more chaacters";
        message.style.color = 'red';
        u_name.style.backgroundColor = 'red';
        u_name.style.color = 'white';
    }else if(u_name.value.length == 5)
    {
        message.innerHTML = "Nice, ok";
        message.style.color = 'green';
        u_name.style.backgroundColor = 'green';
        u_name.style.color = 'white';
    }else if(u_name.value.length > 8)
    {
        message.innerHTML = "Limit has been reached";
        message.style.color = 'blue';
        u_name.style.backgroundColor = 'blue';
        u_name.style.color = 'white';
    }
}