document.getElementById('serch-input').addEventListener('keyup', function(event){

   const inputValue = (event.target.value);
   const isEmail = inputValue.endsWith('@gmail.com');
   
   if(isEmail === true){
   
     const buttonInput = document.getElementById("disabled");
     buttonInput.removeAttribute('disabled');
   
   }else{
   
     const buttonInput = document.getElementById("disabled");
     buttonInput.setAttribute('disabled', true);
   
   }
   // inputValue.value = " ";
   });

   document.getElementById('disabled').addEventListener('click', function(){

    const inputV = document.getElementById('serch-input');

    if(inputV.value !== "" ){

        const getClass = document.getElementById('footer-t');

        const createElement = document.createElement('p');
        console.log(createElement);
        createElement.innerText ="Your Email: "+inputV.value;

          //   Set style
          createElement.style.color = "red";
          createElement.style.fontSize = "18px";
          createElement.style.fontWeight = "bold";

        getClass.appendChild(createElement);

    }

});
   
   
   
//  click color change
   
   document.getElementById('footer').addEventListener('dblclick', function(){
       const footerSetColor = document.getElementById('footer');
       footerSetColor.style.backgroundColor = "#DAF7A6";
   
       // document.getElementsByClassName('text-color').style.color= "#ffff";
       // console.log(tagColorSet);
   
       // back color
     document.getElementById('footer').addEventListener('click', function(){
       const footerSetColor = document.getElementById('footer');
       footerSetColor.style.backgroundColor = "#FFF2F1";
   
    });
   
    });
   
   // Change img js

   
const img = document.getElementById('changeImg');
const hoverM = img.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    img.src = "./img/images/bags/bag-2.png"; /*}*/

    img.addEventListener('mouseout', function(){
      img.src = "./img/images/bags/bag-3.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});

const img1 = document.getElementById('changeImg1');
const hoverM1 = img1.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    img1.src = "./img/images/bags/bag-1.png"; /*}*/

    img1.addEventListener('mouseout', function(){
      img1.src = "./img/images/bags/bag-2.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});

const img2 = document.getElementById('changeImg2');
const hoverM2 = img2.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    img2.src = "./img/images/bags/bag-3.png"; /*}*/

    img2.addEventListener('mouseout', function(){
      img2.src = "./img/images/bags/bag-1.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});


// Shoes hover 

const Simg2 = document.getElementById('shoes1');
const ShoverM2 = Simg2.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    Simg2.src = "./img/images/shoes/shoe-3.png"; /*}*/

    Simg2.addEventListener('mouseout', function(){
      Simg2.src = "./img/images/shoes/shoe-1.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});

const Simg3 = document.getElementById('shoes2');
const ShoverM3 = Simg3.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    Simg3.src = "./img/images/shoes/shoe-1.png"; /*}*/

    Simg3.addEventListener('mouseout', function(){
      Simg3.src = "./img/images/shoes/shoe-2.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});

const Simg4 = document.getElementById('shoes3');
const ShoverM4 = Simg4.addEventListener('mouseover', function(){
  // if(img.src != "./img/images/bags/bag-1.png"){
    Simg4.src = "./img/images/shoes/shoe-1.png"; /*}*/

    Simg4.addEventListener('mouseout', function(){
      Simg4.src = "./img/images/shoes/shoe-3.png";
    });
    
  // else{
    // img.src = "./img/images/bags/bag-1.png";
  // }
  // console.log('You hover my img');
});