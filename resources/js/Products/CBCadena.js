let CBCadena = class {
  constructor() {
    
  }
  initialFill(){
  	
  	let options = "<option value=-1>Selecciona cadena</option>";
	$.each(cadenas, function(i,cadena){
		options += "<option value='"+cadena.id+"'>"+cadena.name+"</option>";
	})
	eCadenaModal.empty().append(options);
	eCadena.empty().append(options);
  }
  change(selectedVal,config){
	let options = "";
	$.each(marcas[selectedVal], function(i,marca){
		options += "<option value='"+marca.id+"'>"+marca.name+"</option>";
	});
	config.target.empty().append(options);
  }
}