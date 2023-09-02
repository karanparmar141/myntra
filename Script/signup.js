import nav from "../Components/nav.js";
document.getElementById("navbar").innerHTML=nav();

const sign =(e)=>{
    e.preventDefault();

    let user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    };

    fetch(`http://localhost:3000/user?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length>0){
            alert("user is already exist");
            setTimeout(
                window.location.href="/index.html",2000
            )
        }
        else{
            setTimeout(
                window.location.href="/index.html",1000
            )
                fetch("http://localhost:3000/user",{
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                })
        }
    })
}
document.getElementById("sign-page").addEventListener("submit",sign)    