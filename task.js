const cards=document.querySelector("div")
cards.innerHTML=`
<img src="https://blog.cdn.level.game/2023/09/manishaleveldesigner_render_an_image_of_lord_ganesha_with_all_h_bad14d0b-9524-4c98-9ef7-6115454ed4f9.png"  width="300px">
<p>Ganesh</p>
<button>Cilck Me</button>`

cards.style.backgroundColor="gray";
cards.style.border="2px solid red";
cards.style.display="inline-block";
cards.style.padding="30px";
cards.style.width="300px";
cards.style.height="350px";
cards.style.textAlign="center";


let cardone=document.querySelector("section")
cardone.innerHTML=`
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AhKMjytj3GRXz4u-JIbzjAE22KHwa22CSQ&s"  width="300px">
<p>Ganesh</p>
<button>Cilck </button>`

cardone.style.backgroundColor="gray";
cardone.style.border="2px solid red";
cardone.style.display="inline-block";
cardone.style.padding="30px";
cardone.style.width="300px";
cardone.style.height="350px";
cardone.style.textAlign="center";



let anothercard=document.createElement("div")
anothercard.innerHTML=`
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpL9bt8-t6xEpd21HJNYsVkTY_Ygtc2FeACw&s" width="300px">
<p>Lord shiva</p>
<button>click Me</button>`
anothercard.style.backgroundColor="gray";
anothercard.style.border="2px solid red";
anothercard.style.display="inline-block";
anothercard.style.padding="30px";
anothercard.style.width="300px";
anothercard.style.height="350px";
anothercard.style.textAlign="center";

document.body.appendChild(anothercard)




let cardtwo=document.createElement("div")
cardtwo.innerHTML=`
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AhKMjytj3GRXz4u-JIbzjAE22KHwa22CSQ&s" width="300px">
<p>Lord shiva</p>
<button>click Me</button>`
cardtwo.style.backgroundColor="gray";
cardtwo.style.border="2px solid red";
cardtwo.style.display="inline-block";
cardtwo.style.padding="30px";
cardtwo.style.width="300px";
cardtwo.style.height="350px";
cardtwo.style.textAlign="center";

document.body.appendChild(cardtwo)