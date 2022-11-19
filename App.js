function validation(){
    let user=document.getElementById('user').value;
    let phone=document.getElementById('phone').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    if((email=="") && (phone=="") && (email=="")&&(password=="")){
        document.getElementById('enteremail',).innerHTML="----please fill the fields";
        document.getElementById('phonenumber',).innerHTML="----please fill the fields";
        document.getElementById('username',).innerHTML="----please fill the fields";
        document.getElementById('enterpassword',).innerHTML="----please fill the fields";
        return false;
    }
    
    if(user==""){
      document.getElementById('username').innerHTML="----please enter your name";
    return false;}

      if((user.length<=2) || (user.length>20)){
        document.getElementById('username').innerHTML="----name is to short";
  return false; 
    }
    if(!isNaN(user)){
    document.getElementById('username').innerHTML="----number not allowed";
    return false;}

    if(phone==""){
        document.getElementById('phonenumber').innerHTML="----please enter phone number";
    return false;
    }
    if((phone.length<=2)||(phone.length>11)){
        document.getElementById('phonenumber').innerHTML="----please enter valid number";
    return false; 
    }
    if(email==""){
        document.getElementById('enteremail').innerHTML="----please enter email";
        return false;
    }
 localStorage.clear()

    
localStorage.setItem("name",user)
localStorage.setItem("phone",phone)
localStorage.setItem("email",email)
localStorage.setItem("password",password)


  
  }

let main=document.getElementById("name_row")
let td1=document.createElement("td")
td1.innerHTML=localStorage.getItem("name")
main.append(td1)

let td2=document.createElement("td")
td2.innerHTML=localStorage.getItem("phone")
main.append(td2)


let td3=document.createElement("td")
td3.innerHTML=localStorage.getItem("email")
main.append(td3)


let td4=document.createElement("td")
td4.innerHTML=localStorage.getItem("password")
main.append(td4)