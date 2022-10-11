class Billete
{
  constructor(va, ca)
  {
    this.valor= va;
    this.cantidad=ca;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
  mostrar()
  {
      document.body.appendChild(this.imagen);
  }
}

var imagenes = [];
imagenes[100000] = "100.jpg";
imagenes[50000] = "50.jpg";
imagenes[20000] = "20.jpg";
imagenes[10000] = "10.jpg";


var caja = [];
var entregado = [];
caja.push(new Billete(100000, 5));
caja.push(new Billete(50000, 10));
caja.push(new Billete(20000, 5));
caja.push(new Billete(10000, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado");
var b = document.getElementById("extraer");
var r1 = document.getElementById("resultado1");
var disponible = document.getElementById("disponible");
b.addEventListener("click", entregarDinero);

var saldoDisponible = 0;
for (var ca of caja) {
   saldoDisponible += ca.valor * ca.cantidad;
   disponible.innerHTML = "Saldo Disponible es: " + saldoDisponible;
}

function entregarDinero()
{
  var t = document.getElementById("dinero")  ;
  dinero = parseInt(t.value);

  for(var bi of caja)
  {

    if (dinero > 0)
    {

      div = Math.floor(dinero/bi.valor);
      if (div > bi.cantidad)
      {
          papeles = bi.cantidad;
      }
      else
      {
          papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }

  }

 if (dinero>0)
 {
    r.innerHTML="Cajero sin Fondo";
 }
 else
 {
   for (var e of entregado)
   {
       if (e.cantidad>0)
       {
            r.innerHTML += e.cantidad + "billete de Gs. "+ e.valor + "<br />";


              for(var d=1; d<=e.cantidad; d++)
               {
                  r1.innerHTML += "<img src=" + e.imagen.src + " />";   //trae dinero en imagen
                  r1.innerHTML += " - ";

               }
                 r1.innerHTML += "<br/><br/>";
       }
//innerHTML atributo del objeto resultado p visualizar en un <p>
   }
 }
}
