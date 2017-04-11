window.addEventListener('load', function(){
  var container=document.getElementById('container');
  var images=document.getElementsByClassName('box-work');
  var modal=document.getElementsByClassName('modal');
  var closeModal=document.getElementById('close-modal');

  allImages.forEach(function(e,id){
    var divBox=document.createElement('div');
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var h5Name=document.createElement('h5');
    //modal
    // var divModal=document.createElement('div');
    // var modalContent=document.createElement('div');

    divBox.setAttribute("class",'box-work');
    figure.setAttribute("class","image");
    image.setAttribute("id","idImage"+id);
    image.src="assets/images/img-"+(id+1)+".jpg";
    caption.setAttribute("class",'name-coder');
    h5Name.setAttribute("class",'mb-0');
    figure.appendChild(image);
    h5Name.appendChild(document.createTextNode(e));
    caption.appendChild(h5Name);
    figure.appendChild(caption);
    divBox.appendChild(figure);
    divBox.appendChild(h5Name);
    container.appendChild(divBox);
    //modal
    // divModal.setAttribute("class",'modal');
    // modalContent.setAttribute("class",'modal-content');

  });

  //eventos onclick
  images[0].onclick=function(){
    console.log(modal[0]);
     modal[0].style.display="block";
  };
  closeModal.onclick=function(e){
    console.log("aki");
    modal[0].setAttribute("class","none");
  };

});
