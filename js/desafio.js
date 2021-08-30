

// condicionales con suma de valores

alert("Bienvenido a Heladerias VALTIN")
let agregado = prompt("luego de elegir tu helado, qué adicional quieres poner (kitkat - brownie o nueces) ?");
		let precio = 0.00;
		let helado = 50;
		let precioFinal = 0.00;

		if(agregado=="oreo"){
			precio = 10;
		}else if(agregado == "kitkat"){
			precio = 30;
		}else if(agregado == "brownie"){
			precio = 45.75;
		}else  if(agregado == "nueces"){
			precio = 35;
		}else{
			alert("no tenemos este agregado, lo sentimos.Por favor vuelva a elegir un adicional");
			precio = 0;
		}

		precioFinal = helado + precio;
		alert("el precio del helado será de $ " + precioFinal);
      
   let rptapusuario = prompt("desea finalizar la compra ?");     
      if(rptapusuario=='Si' || rptapusuario=='SI' || rptapusuario=='si') {
         alert('Gracias por su compra');
      } else {
         alert('Por favor elija otro de nuestros exquisitos helados');
      }




// condicionales con un Array de Objetos

let arrayObjetos = [
    {
        nombre : "Carlos",
        edad:23,
        auto:"Hyundai",
        deporte:"windsurf"
    },

    {
        nombre : "Sergio",
        edad:15,
        auto:"Ford",
        deporte:"paddel"
    },
    
    {
        nombre : "Juan",
        edad:35,
        auto:"Citroen",
        deporte:"futbol"
    }  
];

// declaracion de variables 

let nombre0 = arrayObjetos[0].nombre; 
let edad0 = arrayObjetos[0].edad;
let auto0 = arrayObjetos[0].auto;
let deporte0 = arrayObjetos[0].deporte;
let nombre1 = arrayObjetos[1].nombre; 
let edad1 = arrayObjetos[1].edad;
let auto1 = arrayObjetos[1].auto;
let deporte1 = arrayObjetos[1].deporte;
let nombre2 = arrayObjetos[2].nombre; 
let edad2 = arrayObjetos[2].edad;
let auto2 = arrayObjetos[2].auto;
let deporte2 = arrayObjetos[2].deporte;


 if(edad0 < 21 ) {
     console.log( "El usuario "+ nombre0 + " es menor de edad" );
 }  else if( edad0 < 18  )   {
    console.log( "El usuario "+ nombre0 + " es muy menor");
 }  else {
    console.log( "El usuario "+ nombre0 + " es mayor de edad ");
 }
  
 if(auto0 === "Citroen" ) {
    console.log( "El usuario "+ nombre0 + " tiene un "+ auto0 );
}  else if( auto0 === "Hyundai"  )   {
   console.log( "El usuario "+ nombre0 + " tiene un "+ auto0);
}  else {
   console.log("El usuario "+ nombre0 + " tiene un Ford");
}

if(deporte0 === "paddel" ) {
    console.log( "El usuario "+ nombre0 + " juega al "+ deporte0 );
}  else if( deporte0 === "futbol"  )   {
   console.log( "El usuario "+ nombre0 + " juega al "+ deporte0);
}  else {
   console.log("El usuario "+ nombre0 + " hace windsurf");
}


 if(edad1 < 21 ) {
    console.log( "El usuario "+ nombre1 + " es menor de edad" );
}  else if( edad0 < 18  )   {
   console.log( "El usuario "+ nombre1 + " es muy menor");
}  else {
   console.log( "El usuario "+ nombre1 + " es mayor de edad ");
}

if(auto1 === "Citroen" ) {
    console.log( "El usuario "+ nombre1 + " tiene un "+ auto1 );
}  else if( auto1 === "Hyundai"  )   {
   console.log( "El usuario "+ nombre1 + " tiene un "+ auto1);
}  else {
   console.log("El usuario "+ nombre1 + " tiene un Ford");
}

if(deporte1 === "paddel" ) {
    console.log( "El usuario "+ nombre0 + " juega al "+ deporte1 );
}  else if( deporte1 === "futbol"  )   {
   console.log( "El usuario "+ nombre0 + " juega al "+ deporte1);
}  else {
   console.log("El usuario "+ nombre0 + " hace windsurf");
}


if(edad2 < 21 ) {
    console.log( "El usuario "+ nombre2 + " es menor de edad" );
}  else if( edad0 < 18  )   {
   console.log( "El usuario "+ nombre2 + " es muy menor");
}  else {
   console.log( "El usuario "+ nombre2 + " es mayor de edad ");
}

if(auto2 === "Citroen" ) {
    console.log( "El usuario "+ nombre2 + " tiene un "+ auto2 );
}  else if( auto2 === "Hyundai"  )   {
   console.log( "El usuario "+ nombre2 + " tiene un "+ auto2);
}  else {
   console.log("El usuario "+ nombre2 + " tiene un Ford");
}

if(deporte2 === "paddel" ) {
    console.log( "El usuario "+ nombre0 + " juega al "+ deporte2 );
}  else if( deporte2 === "futbol"  )   {
   console.log( "El usuario "+ nombre0 + " juega al "+ deporte2);
}  else {
   console.log("El usuario "+ nombre0 + " hace windsurf");
}

alert("Recorrido de Array finalizado");