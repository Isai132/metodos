const btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', () => {

  let x1 = parseFloat(document.getElementById('x1').value);
  let y1 = parseFloat(document.getElementById('y1').value);
  let z1 = parseFloat(document.getElementById('z1').value);
  let r1 = parseFloat(document.getElementById('r1').value);
  let x2 = parseFloat(document.getElementById('x2').value);
  let y2 = parseFloat(document.getElementById('y2').value);
  let z2 = parseFloat(document.getElementById('z2').value);
  let r2 = parseFloat(document.getElementById('r2').value);
  let x3 = parseFloat(document.getElementById('x3').value);
  let y3 = parseFloat(document.getElementById('y3').value);
  let z3 = parseFloat(document.getElementById('z3').value);
  let r3 = parseFloat(document.getElementById('r3').value);
  let txtx = document.getElementById('x');
  let txty = document.getElementById('y');
  let txtz = document.getElementById('z');

  function determinante(x1,y1,z1,x2,y2,z2,x3,y3,z3){
    let a1 = (y2*z3)-(z2*y3);
    let a2 = (x2*z3)-(z2*x3);
    let a3 = (x2*y3)-(y2*x3);
    let d = (x1*a1)-(y1*a2)+(z1*a3)
    return(d);
  }

  let d = determinante(x1,y1,z1,x2,y2,z2,x3,y3,z3);

  let x = determinante(r1,y1,z1,r2,y2,z2,r3,y3,z3)/d;
  let y = determinante(x1,r1,z1,x2,r2,z2,x3,r3,z3)/d;
  let z = determinante(x1,y1,r1,x2,y2,r2,x3,y3,r3)/d;

  txtx.value = x.toFixed(1);
  txty.value = y.toFixed(1);
  txtz.value = z.toFixed(1); 
});

