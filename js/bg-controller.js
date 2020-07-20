const imgnm=["1459","b1","b2","b3","b4","b5","b6"];
const imglcol=["#FEFEFE","#FE0000","#FE0000","#7FFF00","#7FFF00","#000000","#DC143C"];
var rand=0;
function initbg()
{

  var z=""+(Math.random()*7);
  rand=Number.parseInt(new String(z));
  console.log(rand);
  var body_e=document.getElementById('g-body');
   body_e.link=imglcol[rand];
   body_e.linkv=imglcol[rand];
   //body_e.alink=imglcol[rand];
   body_e.background=imgnm[rand]+".jpg";
}

function initclr()
{var links=document.getElementsByClassName('v-link');
   links[0].style="font-size:12px;"+"color:"+imglcol[rand]+";";
   links[1].style="font-size:12px;"+"color:"+imglcol[rand]+";";}
function bg()
{
 var z=""+(Math.random()*7);
  var rand_bg=Number.parseInt(new String(z));
  console.log(rand_bg);
   if(rand_bg==rand)
      bg();
 else{
//<!-- HTML Comment-->
  var body_e=document.getElementById('g-body');
  var links=document.getElementsByClassName('v-link');
   links[0].style="font-size:12px;"+"color:"+imglcol[rand_bg]+";";
   links[1].style="font-size:12px;"+"color:"+imglcol[rand_bg]+";";   
   //body_e.link=imglcol[rand_bg];
   //body_e.linkv=imglcol[rand_bg];
   //body_e.alink=imglcol[rand];
   body_e.background=imgnm[rand_bg]+".jpg";} 
}
