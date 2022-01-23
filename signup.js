
//async function for signup
async function register(){
    let signupData={
           email:document.getElementById("email").value,
           password:document.getElementById("password").value,
    };
    signupData=JSON.stringify(signupData); //reassign variable name
    //console.log("signupData:", signupData);
    // use authentication for signun data
     let register_api=`http://localhost:2345/register`;
     //use POST method
     let response=await fetch(register_api, {
         method: "POST",
         body: signupData,
         headers: {
             "Content-Type": "application/json",
         },
     });
     let data= await response.json();
     console.log("data:",data);
     let password=document.getElementById("password").value;
     let email=document.getElementById("email").value;
     //validation for email
     let flag=0;
     for(var i=0;i<email.length;i++){
         if(email[i]==='@'){
             flag=1;
             break;
         }
     }
     if(flag===0){
        document.getElementById("email").style.borderColor="red";
         alert("Please enter a valid email.");
         return false;
     }
    //password validation
     else if(password.length<6){
        document.getElementById("password").style.borderColor="red";
        document.getElementById("email").style.borderColor="grey";
       alert("Password must be greater than or equal to 6 charecters.");
        return false;
    }
     else if(data.error===false){
        document.getElementById("password").style.borderColor="grey";
        document.getElementById("email").style.borderColor="grey";
         alert("You have joined successfully.");
         window.location.href="signin.html";
     }
     else if(data.error===true && data.message==="Registration failed, user already exists"){
        document.getElementById("password").style.borderColor="grey";
        document.getElementById("email").style.borderColor="grey";
         alert("User already exists.");
     }
   
     else{
         alert("Something went wrong or user already exist, please try again.");
         
     }
}
//if already have account signin function
function signin(){
    window.location.href="http://localhost:2345/auth/google";
}