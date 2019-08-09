let btnFinalizar =  document.getElementById('btn-1');

let aciertos = 0;
let pr1r1 = document.getElementById('pr1r1');
let pr2r3 = document.getElementById('pr2r3');
let pr3r2 = document.getElementById('pr3r2');
let pr4r1 = document.getElementById('pr4r1');
let pr5r1 = document.getElementById('pr5r1');


btnFinalizar.onclick = function(){
	if ( pr1r1.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( pr2r3.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( pr3r2.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( pr4r1.checked == true ) {
		aciertos = aciertos + 1;
	}

	if ( pr5r1.checked == true ) {
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
