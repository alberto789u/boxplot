

function calcularCuartil(arreglo, porcentaje) {
    const longitud = arreglo.length;
    const pos = (longitud - 1) * porcentaje;

    if (Number.isInteger(pos)) {
        return arreglo[pos];
    } else {
        const posInferior = Math.floor(pos);
        const posSuperior = Math.ceil(pos);
        return (arreglo[posInferior] + arreglo[posSuperior]) / 2;
    }
}

function ordenarDatos() {
           
            let datos = document.getElementById("inputDatos").value;

           
            let arrayDatos = datos.split(',').map(Number);

            let c = arrayDatos.length;
            arrayDatos.sort((a, b) => a - b);

           
            document.getElementById("resultado").innerHTML = arrayDatos.join(', ');
            document.getElementById("cantidad").innerHTML = c;
            let q1 = calcularCuartil(arrayDatos, .25);
             document.getElementById("pc").innerHTML=q1;
            
             let m = calcularCuartil(arrayDatos, .5);
             document.getElementById("sc").innerHTML=m;
           let q3 = calcularCuartil(arrayDatos, .75);
             document.getElementById("tc").innerHTML=q3;
             const min =arrayDatos[0];
             const max =arrayDatos[c-1]
             let ddd = [min,q1,m,q3,max];


            let r =arrayDatos[c-1]-arrayDatos[0];

            draw(ddd);
            
           



       
    
}
function draw(arr) { 

        const canvas = document.getElementById("grafica");
        if (canvas.getContext) {``
          const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let i;
      let y = arr[4]-arr[0];
           if(arr[0]===0) {  i = -1; }
           else {  i = arr[0]-y*0.1; }

           let f = arr[4]+y*0.1;

           let rt= f-i;
           console.log(i);
           console.log(f);
          console.log((1000/rt)*(arr[1]-i));
          console.log((1000/rt)*((arr[3]-i)-(arr[1]-i)));
          ctx.fillStyle = "rgb(200 200 200)";
          ctx.fillRect((1000/rt)*(arr[1]-i), 450, (1000/rt)*((arr[3]-i)-(arr[1]-i)), 50);
          ctx.fillStyle = "rgb(10 10 10)";
          ctx.fillRect((1000/rt)*(arr[0]-i), 472, (1000/rt)*((arr[1]-i)-(arr[0]-i)), 5);
          ctx.fillRect((1000/rt)*(arr[3]-i), 472, (1000/rt)*((arr[4]-i)-(arr[3]-i)), 5);
          ctx.fillRect((1000/rt)*(arr[0]-i), 450, 5, 50);
          ctx.fillRect((1000/rt)*(arr[4]-i), 450, 5, 50);
          //ctx.fillRect(470, 470, 50, 50);
          ctx.font="40px Arial";
          ctx.fillStyle = "rgb(0 0 0)";
          ctx.fillText("x", (1000/rt)*(arr[2]-i)-10, 485);
          ctx.font="25px Arial";
          ctx.fillText(arr[0], (1000/rt)*(arr[0]-i)-10, 550);
          ctx.fillText(arr[1], (1000/rt)*(arr[1]-i)-10, 550);
          ctx.fillText(arr[2], (1000/rt)*(arr[2]-i)-10, 430);
          ctx.fillText(arr[3], (1000/rt)*(arr[3]-i)-10, 550);
          ctx.fillText(arr[4], (1000/rt)*(arr[4]-i)-10, 550);

        }
      }        