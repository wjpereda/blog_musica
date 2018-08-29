function validarContrasena(psw,pswx){
  if((psw.value!=pswx.value) && (psw.value!=""))
  {
    alert("Verifique contraseña...");
    return false;
  }
  else
    return true;
}

function abrirVentana(){
	window.open("secundaria.html",
				"sec",
				"width=300,height=400,top=60,left=900");
}

function devolver(){
	window.opener.info.value=document.getElementById('dev').value;
	window.close();
}

function buscarUsuario(alias){
	window.open(
			"../control/ctrlValidarUsuario.php?alias="+alias,
			"sec",
			"width=500,height=50");
	
}

