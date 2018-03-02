function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
});

function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var email=document.createElement("h3");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var address=document.createElement("h3");
  address.innerHTML=basic.address;
  profile.appendChild(address);
  /*var photo=document.createElement("img");
  photo.src=basic.photo;
  profile.appendChild(photo);*/
}
