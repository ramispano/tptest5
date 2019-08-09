let btnFinalizar =  document.getElementById('btn-1');

let aciertos = 0;
let p1r1 = document.getElementById('p1r1');
let p2r3 = document.getElementById('p2r3');
let p3r2 = document.getElementById('p3r2');
let p4r1 = document.getElementById('p4r1');
let p5r1 = document.getElementById('p5r1');


btnFinalizar.onclick = function(){
	if ( p1r1.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( p2r3.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( p3r2.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( p4r1.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( p5r1.checked == true ) {
		aciertos = aciertos + 1;
	}


	if (aciertos == 5 ) {
		document.getElementById('total').innerHTML = " Felicitaciones, Tienes un gran conocimiento de historia!" ;
	}
	else if (aciertos >= 4 ) {
		document.getElementById('total').innerHTML = "Felicitaciones, sabes cosas que otros no" ;
	}
	else if (aciertos == 3 ) {
		document.getElementById ('total').innerHTML = "Justo al limite, eres igual que el promedio" ;
	}
	else if (aciertos == 2 ) {
		document.getElementById('total').innerHTML = "te encuentas por debajo del promedio, Sigue intentandolo";
	}
	else{
		document.getElementById('total').innerHTML = "Has fallado";
	}
	let correcto = document.getElementById('correctas');
	correcto.innerHTML = aciertos;

	aciertos = 0;
}
