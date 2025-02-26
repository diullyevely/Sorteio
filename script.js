const button = document.querySelector(".button");

function sorteio() {
  const input1 = Math.ceil(document.querySelector(".primeiro-input").value);
  const input2 = Math.floor(document.querySelector(".segundo-input").value);
  const resultado = document.querySelector(".resultado")
  
  const result = Math.floor(Math.random() * (input2-input1+1)+input1)
 
 resultado.innerHTML= result
 

}

button.addEventListener("click", sorteio);
