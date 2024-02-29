

let productos = [

  {
    imagen: "./imgb/bm1.png",
    nombre: "Manos libre L67 calme",
    precio: 38500,
  },
  {
    imagen: "./imgb/mb2.png",
    nombre: "Manos libre L70 rosado",
    precio: 38500
  },
  {
    imagen: "./imgb/mb3.png",
    nombre: "Manos libre L20 cafe",
    precio: 78750
  },
  {
    imagen: "./imgb/mb4.png",
    nombre: "Manos libre L67 rosado",
    precio: 35500
  },
  {
    imagen: "./imgb/mb6.png",
    nombre: "Manos libre L08 rosado",
    precio: 61250
  },
  {
    imagen: "./imgb/mb7.png",
    nombre: "Manos libre L70 calme",
    precio: 38500
  },
  {
    imagen: "./imgb/mb8.png",
    nombre: "Manos libre L16 rosado",
    precio: 31500
  },
  {
    imagen: "./imgb/mb9.png",
    nombre: "Manos libre D2631 azul",
    precio: 69860
  },
  {
    imagen: "./imgb/mb10.png",
    nombre: "Manos libre D2625 negro",
    precio: 52500
  },
  {
    imagen: "./imgb/mb11.png",
    nombre: "Manos libre L25 negro",
    precio: 78500
  },
  {
    imagen: "./imgb/mb12.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },
  {
    imagen: "./imgb/mb13.png",
    nombre: "Manos libre L25 rosado",
    precio: 73500
  }
]

let productoscarteras = [
  {
    imagen: "imgb/bll1.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },
  {
    imagen: "imgb/bll2.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  }, 
  {
    imagen: "imgb/bll3.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  }, 
  {
    imagen: "imgb/bll4.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },
  {
    imagen: "imgb/bll5.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },  
  {
    imagen: "imgb/bll6.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll7.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll8.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll9.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll10.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll11.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },  {
    imagen: "imgb/bll12.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll13.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll14.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll15.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll16.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll17.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll18.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll19.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  },   {
    imagen: "imgb/bll20.png",
    nombre: "Manos libre D2630 azul",
    precio: 38500
  }, 
]

// esto nos permite que al  momento que carge
//  el navegador se va a mostar los elementos  que esta en pintar
document.addEventListener("DOMContentLoaded", () => {
  pintar()
document.getElementById("tableini").style.display = "none";
});




// nos permite pintar  las cards para que el usuario las pueda odservar

function pintar() {
  productos.forEach((item, i) => {
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    let imagen = document.createElement("div");
    imagen.setAttribute("id", "imagen");
    let img = document.createElement("img");
    img.src = item.imagen;
    imagen.appendChild(img);
    div.appendChild(imagen);

    let titulo = document.createElement("div");
    titulo.setAttribute("class", "titulo");
    titulo.textContent = item.nombre;
    div.appendChild(titulo);

    let precio = document.createElement("div");
    precio.setAttribute("class", "precio");
    precio.textContent = item.precio;
    div.appendChild(precio);

    // Botón de agregar
    let boton = document.createElement("button");
    boton.setAttribute("id", "agregar");
    boton.textContent = "Agregar";
    boton.addEventListener("click", () => {
      agregarAlCarrito(i);

    });
    div.appendChild(boton);

    document.getElementById("contenedor").appendChild(div);
  });

}

let carritoinf = [];
function agregarAlCarrito(i) {
  // carritoinf.push(productos[i])
  let productoExistente = carritoinf.find(producto => producto.nombre === productos[i].nombre);
  if (productoExistente) {
    productoExistente.cantidad++;
    // productoExistente.total +=  parseFloat(productos.precio);

  } else {
    carritoinf.push({
      nombre: productos[i].nombre,
      imagen: productos[i].imagen,
      precio: parseFloat(productos[i].precio),
      cantidad: 1

    });
  }
  mostrarCarrito()

}



function mostrarCarrito() {
  let carritobody = document.getElementById("carrito");
  
  document.getElementById("carrito").textContent=""

  let totaldecompra = 0;
  carritoinf.forEach((item, i) => {
    let tr = document.createElement("tr");

    let imagen = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.imagen;
    imagen.appendChild(img);
    tr.appendChild(imagen);

    let titulo = document.createElement("td");
    titulo.textContent = item.nombre;
    tr.appendChild(titulo);

    let precio = document.createElement("td");
    precio.textContent = item.precio * item.cantidad;
    tr.appendChild(precio);

    let cantidad = document.createElement("td");
    cantidad.textContent = item.cantidad;
    tr.appendChild(cantidad);

    let eliminar = document.createElement("td");
    eliminar.textContent = "x";
    eliminar.addEventListener("click", (event) => {
      event.stopPropagation(); // Detener la propagación del evento
      const indexcan = carritoinf.findIndex(producto => producto.nombre === item.nombre);
      if (indexcan !== -1) {
          if (carritoinf[indexcan].cantidad > 1) {
              // Si la cantidad es mayor que 1, se reduce en 1
              carritoinf[indexcan].cantidad--;
          } else {
              // Si la cantidad es 1, se elimina el elemento del carrito
              carritoinf.splice(indexcan, 1);
          }
      mostrarCarrito();
    }
  })

    tr.appendChild(eliminar);
    carritobody.appendChild(tr);
    totaldecompra += item.precio * item.cantidad;
  });
  let trtotal = document.createElement("tr")
  let total1 = document.createElement("td")
  total1.textContent = "Total:"
  total1.setAttribute("colspan", "2")
  trtotal.appendChild(total1)

  let totaltodo = document.createElement("td")
  totaltodo.textContent = totaldecompra
  trtotal.appendChild(totaltodo)

carritobody.appendChild(trtotal)

let contenedorIcono = document.getElementById("carrito-icon");


let carritotabla = document.getElementById("tableini");
contenedorIcono.addEventListener("click", () => {
  if (carritotabla.style.display === "none") {
    carritotabla.style.display = "block";
  } else {
    carritotabla.style.display = "none";
  }
});
  contenedorIcono.appendChild(tableini);

}
