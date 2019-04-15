
const form = document.getElementById('forma');
const boton = document.getElementById('boton');
const mainDiv = document.getElementById('main');
const inputText = document.querySelector('input');
const botonAudio = document.getElementById("botonAudio");


form.addEventListener('submit', (e) => {
	e.preventDefault();

	const text = inputText.value;
	var nuevoDiv = document.createElement("DIV");
	var nuevoLi = document.createElement("LI");
  document.body.appendChild(nuevoDiv);
	nuevoDiv.appendChild(nuevoLi);
  
  var contenedor = document.getElementById('container');
  contenedor.appendChild(nuevoDiv);
	nuevoLi.innerText = text;
  form.reset();
  var array = text.split("");
  var arrayAudios = [];
  var parrafo = document.createElement("P"); 
 

  for(var i = 0; i < array.length; i++){
      
    if (array[i] == "a"|| array[i] == "A") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/a.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoA = document.createTextNode("  .- ");     
       parrafo.appendChild(textoA); 
    } 

    else if (array[i] == "b"|| array[i] == "B") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/b.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoB = document.createTextNode(" -... ");     
       parrafo.appendChild(textoB); 
    } 

    else if (array[i] == "c"|| array[i] == "C") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/c.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoC = document.createTextNode(" -.-. ");     
       parrafo.appendChild(textoC); 
    } 

     else if (array[i] == "d"|| array[i] == "D") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/d.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoD = document.createTextNode(" -.. ");     
       parrafo.appendChild(textoD); 
    } 

    else if (array[i] == "e"|| array[i] == "E") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/e.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoE = document.createTextNode(" . ");     
       parrafo.appendChild(textoE); 
    }

     else if (array[i] == "f"|| array[i] == "F") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/f.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoF = document.createTextNode(" ..-. ");     
       parrafo.appendChild(textoF); 
    } 

     else if (array[i] == "g"|| array[i] == "G") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/g.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoG = document.createTextNode(" --. ");     
       parrafo.appendChild(textoG); 
    } 

    else if (array[i] == "h"|| array[i] == "H") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/h.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoH = document.createTextNode(" .... ");     
       parrafo.appendChild(textoH); 
    }  

    else if (array[i] == "i"|| array[i] == "I") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/i.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoI = document.createTextNode(" .. ");     
       parrafo.appendChild(textoI); 
    } 

     else if (array[i] == "j"|| array[i] == "J") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/j.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoJ = document.createTextNode(" .--- ");     
       parrafo.appendChild(textoJ); 
    } 

    else if (array[i] == "k"|| array[i] == "K") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/k.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoK = document.createTextNode(" -.- ");     
       parrafo.appendChild(textoK); 
    }  

    else if (array[i] == "l"|| array[i] == "L") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/l.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoL = document.createTextNode(" .-.. ");     
       parrafo.appendChild(textoL); 
    } 

    else if (array[i] == "m"|| array[i] == "M") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/m.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoM = document.createTextNode(" -- ");     
       parrafo.appendChild(textoM); 
    } 

    else if (array[i] == "n"|| array[i] == "N") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/n.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoN = document.createTextNode(" -. ");     
       parrafo.appendChild(textoN); 
    }  

    else if (array[i] == "o"|| array[i] == "O") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/o.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoO = document.createTextNode(" --- ");     
       parrafo.appendChild(textoO); 
    } 

    else if (array[i] == "p"|| array[i] == "P") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/p.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoP = document.createTextNode(" .--. ");     
       parrafo.appendChild(textoP); 
    } 

    else if (array[i] == "q"|| array[i] == "Q") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/q.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoY = document.createTextNode(" --.- ");     
       parrafo.appendChild(textoY); 
    }  

    else if (array[i] == "r"|| array[i] == "R") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/r.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoR = document.createTextNode(" .-. ");     
       parrafo.appendChild(textoR); 
    } 
    else if (array[i] == "s"|| array[i] == "S") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/s.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoS = document.createTextNode(" ... ");     
       parrafo.appendChild(textoS); 
    } 

     else if (array[i] == "t"|| array[i] == "T") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/t.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoT = document.createTextNode(" - ");     
       parrafo.appendChild(textoT); 
    }  

    else if (array[i] == "u"|| array[i] == "U") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/r.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoU = document.createTextNode(" ..- ");     
       parrafo.appendChild(textoU); 
    } 

    else if (array[i] == "v"|| array[i] == "V") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/v.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoV = document.createTextNode(" ...- ");     
       parrafo.appendChild(textoV); 
    }  

    else if (array[i] == "w"|| array[i] == "W") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/w.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoW = document.createTextNode(" .-- ");     
       parrafo.appendChild(textoW);  
    } 

     else if (array[i] == "x"|| array[i] == "X") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/x.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoX = document.createTextNode(" -..- ");     
       parrafo.appendChild(textoX);  
    } 

    else if (array[i] == "y"|| array[i] == "Y") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/y.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoY = document.createTextNode(" -.-- ");     
       parrafo.appendChild(textoY);  
    }  

    else if (array[i] == "z"|| array[i] == "Z") {
       var sonido = document.createElement("AUDIO");
       sonido.setAttribute("src","sonido/z.mp3");
       sonido.setAttribute("controls", "controls");       
       document.body.appendChild(sonido);
       arrayAudios.push(sonido);
       nuevoLi.appendChild(parrafo);      
       var textoZ = document.createTextNode(" --..  ");     
       parrafo.appendChild(textoZ);     
       
    } 

    else if (array[i] == " ") {
       nuevoLi.appendChild(parrafo);      
       var textoSPACE = document.createTextNode(" / ");     
       parrafo.appendChild(textoSPACE);     
        
    }
  

    else {
       alert("INTRODUCE UNA LETRA");
    }

}

var btn = document.createElement("BUTTON");
btn.innerText = "PLAY MESSAGE";
nuevoDiv.appendChild(btn);
console.log(arrayAudios);


btn.addEventListener('click', function(e){
for (let i=0; i<arrayAudios.length; i++) {
    setTimeout( function timer(){
       arrayAudios[i].play();
    }, i*1110 );
}
}, true);


});





