function gform()
{
 var x=event.key;
 var y=new String(x);
 if(y=="Enter")
  active();
}
function active()
{
  var x=document.getElementById('search-box').value;
  var z=new String(x);
  var u=document.getElementById('hidden-lnk');
  if(!isURL(z))
   {
    autosbmitter();
   }
  else
  {
    if(z.indexOf(":")!=-1&&z.indexOf("//")!=-1&&z.indexOf(" ")==-1)
     u.href=x;
    else
     u.href="https://"+x;
    u.click();
   }
    
}

function autosbmitter()
{
   /*var temp=document.getElementById('scat').value;
   var newstr=new String(temp);
    if(newstr=="maps")
    {
      var sdt="https://maps.google.com/maps?q=";
      var sbox=document.getElementById('search-box').value;
      sdt=sdt+sbox;
      sdt=sdt+"&hl=";
      let cit=document.getElementById('slang').value;
      if(cit==""||cit==null)
       cit="en-IN";
      sdt=sdt+cit;
      document.getElementById('hidden-lnk').href=sdt;
      document.getElementById('hidden-lnk').click();
    }
else
 {var i=document.getElementById('search-box').value;
    var sst="https://google.com/search?q=";
    sst=sst+i;
    sst=sst+"&tbm=";
    i=document.getElementById('scat').value;
    sst=sst+i;
    sst=sst+"&hl=";
    i=document.getElementById('slang').value;
    if(i==""||i==null)
     i="en-IN";
    sst=sst+i;*/
    var u=document.getElementById('hidden-lnk');
    var i=document.getElementById('search-box').value;
    var sst="https://google.com/search?q=";
    sst=sst+i;
    u.href=sst;
    u.click();
}

function isURL(text)
{
 var str=new String(text);
  if(str.indexOf(" ")==-1&&str.indexOf(".")!=-1)
   return true;
  else if(str.indexOf(" ")==-1&&str.indexOf(":")!=-1)
   return true;
   
  else
   return false; 
}