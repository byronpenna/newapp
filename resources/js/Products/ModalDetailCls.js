let ModalDetailCls = class{
	fillProduct(product){
		console.log("product fill",product);
		eModal.find(".modalTitle").empty().append(product.name);
		eModal.find(".imgModal").attr("src",product.img);
	}
}