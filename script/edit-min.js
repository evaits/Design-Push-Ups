let ms=[];for(let e=0;e<localStorage.length;e++)"arr"!=localStorage.key(e)&&"today"!=localStorage.key(e)&&"best"!=localStorage.key(e)&&"user"!=localStorage.key(e)&&ms.push(Date.parse(localStorage.key(e)));ms.sort(((e,t)=>t-e));const date=[];for(let e=0;e<ms.length;e++)date.push(Intl.DateTimeFormat("en-US").format(ms[e]));let user=localStorage.getItem("user");if(user=JSON.parse(user),date.length>0){let e,t,a,o,l,n,r,c,d,s=document.querySelector(".blocks");for(let m=0;m<date.length;m++)e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("h6"),o=document.createElement("div"),l=document.createElement("br"),n=document.createElement("span"),r=document.createElement("div"),c=document.createElement("div"),btn_delete=document.createElement("div"),d=document.createElement("div"),e.className="block",t.className="left-info",a.className="date",o.className="repeats",n.className="lng-repeats",r.className="right-info",c.className="dots",btn_delete.className="delete lng-delete delete-"+m,d.className="percent",date_localStorage=date[m],8==date_localStorage.length?(o.innerHTML=localStorage.getItem(date_localStorage),date_localStorage=date_localStorage.split(""),date_localStorage.splice(2,0,"0"),date_localStorage=date_localStorage.join("")):o.innerHTML=localStorage.getItem(date_localStorage),reform_date=date_localStorage.slice(0,4),reform_date=reform_date.replace("/","."),4==reform_date.length&&(reform_date="0"+reform_date),reform_date=reform_date[3]+reform_date[4]+reform_date[2]+reform_date[0]+reform_date[1],a.innerHTML=reform_date,n.innerHTML="REPEATS",c.innerHTML="...",btn_delete.innerHTML="Delete",c.setAttribute("onclick","open_delete("+m+")"),timeVar=localStorage.getItem(date_localStorage),timeVar>=Number(user.daily)&&"en"==user.lang?d.innerHTML="Done":timeVar<=Number(user.daily)&&"en"==user.lang&&(d.innerHTML="Nearly"),timeVar>=Number(user.daily)&&"ua"==user.lang?(d.innerHTML="Добре",d.style.fontFamily='"Roboto Mono", monospace',d.style.fontWeight="400"):timeVar<=Number(user.daily)&&"ua"==user.lang&&(d.innerHTML="Зле",d.style.fontFamily='"Roboto Mono", monospace',d.style.fontWeight="400"),delete timeVar,s.append(e),e.append(t),t.append(a),t.append(o),o.append(n),e.append(r),r.append(c),c.append(btn_delete),r.append(l),r.append(d)}else{let e=document.querySelector(".blocks"),t=document.createElement("p");t.className="lack","en"==user.lang?t.innerHTML="It's your first day":(t.innerHTML="Це твій перший день",t.style.fontFamily='"Roboto Mono", monospace'),e.append(t)}function open_delete(e){let t=document.querySelector(".delete-"+e);t.style.display="block",t.setAttribute("onclick","delete_fun()");window.globalVar=e}function delete_fun(){let e=globalVar;if(confirm("Are you sure?")){let t=date[e];localStorage.removeItem(t),location.reload()}}$(document).ready((function(){$(document).mouseup((function(e){var t=$(".delete"),a=$(".dots");a.is(e.target)||0!==a.has(e.target).length||t.hide()}))})),null==user.lang&&(user.lang="en"),location.href=window.location.pathname+"#"+user.lang;const arrLeng=["en","ua"];function changeLang(){let e=window.location.hash;for(key in e=e.substring(1),arrLeng.includes(e)||(location.href=window.location.pathname+"#en",location.reload()),user=e,historyLng){const t=document.querySelectorAll(".lng-"+key);for(let a=0;a<t.length;a++)t[a].innerHTML=historyLng[key][e],"delete"==key&&"ua"==e&&(t[a].style.right="-3px"),t[a].style.fontFamily='"Roboto Mono", monospace'}}changeLang();