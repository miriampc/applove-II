window.addEventListener('load', function(){
  var images=document.getElementsByClassName('box-work');
  var modal=document.getElementsByClassName('modal');
  images[0].onclick=function(){
    console.log(modal[0]);
     modal[0].style.display="block";
  };
});
