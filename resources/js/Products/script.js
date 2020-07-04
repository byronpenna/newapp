
/*const cbCadena = function(){
	let options = "<option value=-1>Selecciona cadena</option>";
	$.each(cadenas, function(i,cadena){
		options += "<option value='"+cadena.id+"'>"+cadena.name+"</option>";
	})
	eCadena.empty().append(options);
}*/




function fillCb(){

}
let instanceCbCadena = new CBCadena();
let instanceCbMarca = new CBMarca();
function initial(){
	
	instanceCbCadena.initialFill();
	console.log("initial",productos[0][0]);
}

$(document).ready(function(){
	console.log(marcas[0]);
	initial();
	// cadena 

		$(document).on("change",".cbCadena",function(){
			let config = {
				target: eMarca
			}
			instanceCbCadena.change($(this).val(),config);
			$(".cbMarca").change();
		})
		$(document).on("change",".cbCadenaModal",function(){
			let config = {
				target: eMarcaModal
			}
			instanceCbCadena.change($(this).val(),config);
			$(".cbMarcaModal").change();
		})
	// marcas
	$(document).on("change",".cbMarca",function(){
		config = {
			target: eProductos
		}
		instanceCbMarca.change($(this).val(),config);
	})
	$(document).on("change",".cbMarcaModal",function(){
		config = {
			target: eProductos
		}
		instanceCbMarca.change($(this).val(),config);
	})
	$(document).on("click",".btnSetear",function(){
		//$('#modal').modal('toggle');
		/*$('.modal').modal({
	        show: 'true'
	    }); */
	    let divProduct = $(this).parents(".divProductBlock");
	    let objProduct = new DivProduct();
	    let product = objProduct.getDataProduct($(this));
	    let cls = new ModalDetailCls();
	    cls.fillProduct(product);
	    eModal.modal('show'); 
	    
	})
	/*$('#btnModal').on('shown.bs.modal', function () {
	  $('#myInput').trigger('focus')
	})*/
})