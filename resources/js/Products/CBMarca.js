let CBMarca = class {
	validate(productos,selected){
		let returnVal = false;
		try{
			returnVal = Array.isArray(productos) && 
						Array.isArray(productos[eCadena.val()]) &&
						Array.isArray(productos[eCadena.val()][selected]);
		}catch(error){

		}
		return returnVal;
	}
	change(selectedVal,config){
		let divs = "";

		console.log(eMarca.val(),selectedVal);
		if(this.validate(productos,selectedVal)){
			$.each(productos[eCadena.val()][selectedVal], function(i,producto){
				divs += "\
					<div class='col-md-3 col-6 product-block divProductBlock'>\
						<a href='#'>\
							<img class='img-fluid img-portfolio img-hover mb-3' \
								src='"+producto.img+"' \
								alt='Camara Nikon Reflex D7200 + Lente 18-140'>\
						</a>\
						<div class='caption'>\
							<span class='id'>"+producto.id+"</span>\
					  		<span class='spSet'>SETEADO</span>\
					  		<h3 class='hProductTitle'>\
					  		<a href='/camara-nikon-reflex-d7200-lente-18-140'>\
					  			"+producto.name+"\
					  		</a>\
					  		</h3>\
					  		<div class='price-mob'>\
							    "+producto.price+"\
							  </div>\
					  		<div class='clearfix'></div>\
					  		<p class='product-block-description d-none d-md-block'>\
					  		</p>\
					  		<button class='btn btnSetear'>Setear</button>\
						</div>\
				    </div>\
				";
				/*
				divs += "\
				<div class='items col-xs-6 col-sm-3 col-md-3 col-lg-3'>\
		            <div class='info-block block-info clearfix'>\
		                <div data-toggle='buttons' class='btn-group itemcontent'>\
		                    <label class='btn btn-default'>\
		                        <div class='itemcontent'>\
		                            <input type='checkbox' name='var_id[]' autocomplete='off' value=''>\
		                            img <img class='img-fluid img-portfolio img-hover mb-3' src='https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/255/320?1564681025' >\
		                            <span class='fa fa-keyboard-o fa-2x'></span>\
		                            <h5>"+producto.name+"</h5>\
		                        </div>\
		                    </label>\
		                </div>\
		            </div>\
		        </div>\
				";

				*/
			});		
		}else{
			config.target.empty().append("No hay productos disponibles");					
		}
		
		config.target.empty().append(divs);
	}
}