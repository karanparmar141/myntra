import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();

const login =(e)=>{
    e.preventDefault();

    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    };

    fetch(`http://localhost:3000/user?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length > 0){
            if(data[0].password===password){
                localStorage.setItem("login",true);
                alert("Login successful")
                setTimeout(
                    window.location.href="/index.html",2000
                )
            }
            else{
                alert("Check your password")
            }
        }
        else{
            alert("User not found")
        }
    })
}
document.getElementById("login-page").addEventListener("submit",login)