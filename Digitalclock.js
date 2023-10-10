
function digiclk()
{
   
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    var ss=date.getSeconds()
    var dt=date.getDate();
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
   if(hh>=12)
   {
      am_pm="PM";
      if(hh>12)
      {
        hh-=12;
      }
   }
  
   if(hh==0)
   {
      hh=12
   }
   if(mo==0)
   {
    mo="jan"
   }
   if(mo==1)
   {
    mo="feb"
   } 
   if(mo==2)
   {
    mo="mar"
   } 
   if(mo==3)
   {
    mo="Apr"
   } 
   if(mo==4)
   {
    mo="may"
   } 
   if(mo==5)
   {
    mo="jun"
   } 
   if(mo==6)
   {
    mo="july"
   } 
   if(mo==7)
   {
    mo="Agu"
   } 
   if(mo==8)
   {
    mo="Sep"
   } 
   if(mo==9)
   {
    mo="Oct"
   } 
   if(mo==10)
   {
    mo="Nov"
   } 
   if(mo==11)
   {
    mo="Dec"
   }
   switch(day)
   {
    case 0: day="sunday"
    document.body.style.backgroundImage="url(./3.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 1: day="Mondy"
    document.body.style.backgroundImage="url(./3.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 2: day="Tuesday"
    document.body.style.backgroundImage="url(./3.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 3: day="Wednesday"
    document.body.style.backgroundImage="url(./3.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 4: day="Thursday"
    document.body.style.backgroundImage="url(./4.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 5: day="Friday"
    document.body.style.backgroundImage="url(./8.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
    case 4: day="Saturday"
    document.body.style.backgroundImage="url(./3.jpg)"
    document.body.style.backgroundRepeat="no-repeat"
    break;
   }
   document.getElementById("time").innerHTML=`${hh}:${mm}:${am_pm}`
   document.getElementById("dd").innerHTML=`${dt}/${mo}/${yy}`
   document.getElementById("day").innerHTML=day
   document.getElementById("sec").innerHTML=ss
   setTimeout(digiclk,1000)
}
digiclk()


var alarammusic=new Audio()
alarammusic.src="../brain-damage-148577.mp3"

function alaram()
{
   var allsettags=document.querySelectorAll("select");
   var usergivenHH=allsettags[0].value
   var usergivenMM=allsettags[1].value
   var usergivenam_pm=allsettags[2].value
   var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    if(hh>=12)
   {
      am_pm="PM";
      if(hh>12)
      {
        hh-=12;
      }
   }
   if(hh=0)
   {
      hh=12;
   }
   if(usergivenHH==hh && usergivenMM==mm && usergivenam_pm==am_pm)
   {
      alarammusic.play()
   }
   else
   {
      alarammusic.pause()
   }
   setTimeout(alaram,1000)

}

function alaramConf()
{
   var allsettags=document.querySelectorAll("select");
   var usergivenHH=allsettags[0].value
   var usergivenMM=allsettags[1].value
   var usergivenam_pm=allsettags[2].value
   alert(`Alaram has been strat for${usergivenHH}:${usergivenMM}:${usergivenam_pm}`)
   document.getElementById("alram").style.display="none"
}

function alaramdisplay()
{
   document.getElementById("alram").style.display="flex"
}