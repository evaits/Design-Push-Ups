let user=localStorage.getItem("user");user=JSON.parse(user),document.querySelector(".name").innerHTML=user.firstName+" "+user.lastName,document.querySelector(".height").innerHTML=user.height+"cm",document.querySelector(".weight").innerHTML=user.weight+"kg",document.querySelector(".age").innerHTML=user.age+"yo";let avatar=document.querySelector(".avatar");function goBack(){window.history.back()}function delete_db(){1==confirm("Are you sure?")&&(localStorage.clear(),alert("Data Base is clear"))}"Female"==user.gender?avatar.setAttribute("src","img/profile/avatar-woman.png"):avatar.setAttribute("src","img/profile/avatar-boy.png"),location.href=window.location.pathname+"#"+user.lang;const arrLeng=["en","ua"];function changeLang(){let e=window.location.hash;if(e=e.substring(1),arrLeng.includes(e)||(location.href=window.location.pathname+"#en",location.reload()),user=e,"ua"==e)for(key in profileLng){const e=document.querySelectorAll(".lng-"+key);for(let r=0;r<e.length;r++)e[r].innerHTML=profileLng[key].ua,e[r].style.fontFamily='"Roboto Mono",monospace'}}changeLang();