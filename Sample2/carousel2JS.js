
var elmentByClass=document.getElementsByClassName('slides');
var i = 0 ; //count for first setInterval
var slidesIndex=setInterval(slidesI,10000);

/*function moveUp()
{
if(top==100)
{
clearInterval(up);
//another setinterval will write here to move right
}
else
{
top-=1;
elment.style.top=top+"px";
}
}*/


function slidesI()
{
   i++;
   if(i==4)
     {
       clearInterval(slidesIndex);
       i=0;
       slidesIndex=setInterval(slidesI,10000);
     }//end if
   else
     {    
     var element=document.getElementById("slide"+i);
     var elementLeft=500;
     var rotateSlide=0;
     var topSlide=150;
     var right=430;
     var slideZindex=9998;
     var downAgain=80;
     var perSlide=setInterval(
     function()
       {
         if(elementLeft==430)
             {
              clearInterval(perSlide);
                 
                 
              var topp=setInterval(
                  function()
                  {
                   if(topSlide==80)
                      {
                        clearInterval(topp);
                                         
                        var rotate=setInterval(
                            function()
                            {
                              if(rotateSlide==360)
                               {
                                 clearInterval(rotate); 
                               }//end if of function of setInterval rotate
                               else 
                               {
                                rotateSlide+=20;
                                element.style.transform="rotate("+rotateSlide+"deg)";
                                }//end else of function of setInterval rotate
                            }//end function of setInterval rotate
                               ,10);//end setInterval of rotate
                             }//end if of topp
                   else
                       {
                        topSlide-=5;
                        element.style.top=topSlide+"px";
                       }//end else of topp
                  }//end function of setInterval topp
                  ,10);//end setInterval top
                 
                 
                var Right=setInterval(
                     function()
                     {
                        if(right==500)
                          {
                              clearInterval(Right);
                              var Down=setInterval(
                                  function()
                                  {
                                   if(downAgain==150)
                                     {
                                        clearInterval(Down);
                                     }
                                   else
                                     {
                                        downAgain+=10;
                                        element.style.top=downAgain + "px";  
                                     }
                                  }
                                  ,10);
                          }
                         
                         else
                            {
                              right+=5;
                              if(i==1)
                              {
                              element.style.left=right+"px"; 
                              element.style.zIndex=1; 
                              document.getElementById("slide2").style.zIndex=3;
                              document.getElementById("slide3").style.zIndex=2;
                              }
                              else if(i==2)
                              {
                              element.style.left=right+"px"; 
                              element.style.zIndex=1; 
                              document.getElementById("slide3").style.zIndex=3;
                              document.getElementById("slide1").style.zIndex=2;  
                              }
                              else 
                              {
                              element.style.left=right+"px"; 
                              element.style.zIndex=1; 
                              document.getElementById("slide1").style.zIndex=3;
                              document.getElementById("slide2").style.zIndex=2; 
                              }
                            }
                     }//end function
                     ,10);//end of setInterval Right
                  
             }//end if of perSlide
         else
             {
              elementLeft-=5;
              element.style.left=elementLeft+"px";
             } //end else of function perSlide
       } //end function of setInterval perSlide
        ,10);//end setInterval perSlide
         
      
       
     //-------         
}//end else of slideI

//console.log(i);
}//end function slidesI()
