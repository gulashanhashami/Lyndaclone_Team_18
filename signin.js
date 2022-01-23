//async function for login
async function login(){
    loginData={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    };
    loginData=JSON.stringify(loginData);
    //use authentication for login data
    let login_api= `http://localhost:2345/login`;
    //now fetch requset
    let response=await fetch(login_api, {
        //use POST method
        method: "POST",
        body: loginData,
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data=await response.json();
    console.log("data:", data);
    let email=document.getElementById("email").value;
    //function call for get profile data
    getProfile(email, data.token);
    if(data.error===false){
        document.getElementById("email").style.borderColor="grey";
        document.getElementById("password").style.borderColor="grey";
        alert("Login successfully.");
        window.location.href="home.html";
    }
    else{
        document.getElementById("email").style.borderColor="red";
        document.getElementById("password").style.borderColor="red";
        alert("Please enter same email and password.");
    }
}
//async function for get profile of user
  async function getProfile(email, token){
       let api=  `http://localhost:2345/user/${email}`;
       let response= await fetch(api, {
           headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
           },
       });
       let data=await response.json();
       console.log("data:", data);
  }