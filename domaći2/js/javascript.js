function validacija(){
    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime");
    var sifra = document.getElementById("lozinka");
    var kontakt = document.getElementById("kontakt");
if (ime.value.length==0 ||prezime.value.length==0 ||  sifra.value.length==0 || kontakt.value.length==0 ){
 
    if (ime.value.length==0 ){
        ime.style.border ="1px solid red"
    }
    else{
        ime.style.border ="1px solid gray"
    }
 
    if (prezime.value.length==0){
        prezime.style.border ="1px solid red"
    }else{
        prezime.style.border ="1px solid gray"
    }
 
    if (sifra.value.length==0){
        sifra.style.border ="1px solid red"
    }else{
        sifra.style.border ="1px solid gray"
    }
 
    if (kontakt.value.length==0){
        kontakt.style.border ="1px solid red"
    }else{
        kontakt.style.border ="1px solid gray"
    }
} else{
alert("Vasi podaci su uspesno uneti\n" + ime.value+" "+ prezime.value+ "\n"+ sifra.value + "\n" + kontakt.value);
}}
var image1=document.getElementById("jagoda")
image1.addEventListener('mouseover', function(){
    image1.src = "img/jagode.jpg"
  })
  image1.addEventListener('mouseout', function(){
      image1.src = "img/jagoda (2).jpeg"
    })
var image2=document.getElementById("breskva")
image2.addEventListener('mouseover', function(){
    image2.src = "img/breskve.jpg"
  })
  image2.addEventListener('mouseout', function(){
      image2.src = "img/breskva.jpeg"
    })
    var image3=document.getElementById("aronija")
image3.addEventListener('mouseover', function(){
    image3.src = "img/aronije.jpg"
  })
  image3.addEventListener('mouseout', function(){
      image3.src = "img/aronija.jpeg"
    })
 var image4=document.getElementById("jabuka")
 image4.addEventListener('mouseover', function(){
      image4.src = "img/jabuke.jpg"
    })
image4.addEventListener('mouseout', function(){
      image4.src = "img/jabuka.jpeg"
    })
var image5=document.getElementById("malina")
image5.addEventListener('mouseover', function(){
      image5.src = "img/maline.jpg"
    })
image5.addEventListener('mouseout', function(){
       image5.src = "img/malina.jpeg"
    })
 var image6=document.getElementById("kruska")
 image6.addEventListener('mouseover', function(){
      image6.src = "img/kruske.jpg"
    })
image6.addEventListener('mouseout', function(){
      image6.src = "img/kruška.jpeg"
    })

    let burgerModal = document.getElementById('hamburgerModal')
    let burgerMenu = document.getElementById('burgerMenu')
    let closeModal = document.getElementById('closeModal')
    burgerMenu.addEventListener('click', function(){
      burgerModal.style = 'display: flex'
    })
    
    closeModal.addEventListener('click', function(){
      burgerModal.style = 'display: none'
    })