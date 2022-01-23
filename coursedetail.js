  //take the data from local storage
  let data=JSON.parse(localStorage.getItem("coursed")) || {};
  console.log(data)
  let contain=document.createElement("div");
      contain.setAttribute("id","contain")
      document.querySelector("body").append(contain); 

 //to show the data on web page
 var p1=document.createElement("p");
   p1.textContent="Type :"+data.type;
   var p2=document.createElement("p");
   p2.textContent="Created by :"+data.by;
    var p3=document.createElement("p");
    p3.textContent="Course duration :"+data.duration;
    var p4=document.createElement("p");
    p4.textContent="Language :"+data.language;
    var p6=document.createElement("p");
    p6.textContent="Level :"+data.level;
    var p7=document.createElement("h2");
    p7.textContent="Course name :"+data.name;
    var p8=document.createElement("p");
    p8.textContent="Skill :"+data.skill;
   var p9=document.createElement("p");
   p9.textContent="Total learners :"+data.totalLearners;
     var p10=document.createElement("p");
   p10.textContent="Update :"+data.year;
    let img=document.createElement("img");
    img.setAttribute("src",data.image); 
    let p11=document.createElement("p");
    p11.innerHTML=`<button onclick="gocheck()" id="btn3">Start my 1-month free trial</button>`
    let p12=document.createElement("p");
    p12.innerHTML=`<button onclick="gocheck1()" id="btn4">Buy now</button>`
    let div1=document.createElement("div");
             div1.setAttribute("id","imgdi")
             let div4=document.createElement("div");
             div4.setAttribute("id","btn3_4")
           var div2=document.createElement("div");
            div2.setAttribute("id","text")
            var div3=document.createElement("div");
            div3.setAttribute("id","imgtext") 
            div4.append(p11,p12)
              div3.append(div1,div2)
             contain.append(div3);
               //console.log("movie:", movie);
            div1.append(img)
            div2.append(p7,p1,p2,p3,p4,p6,p8,p9,p10,div4)
            function gocheck(){
                window.location.href="FreeTrial.html"
            }
            function gocheck1(){
                window.location.href="checkout.html"
            }  