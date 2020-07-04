let DivProduct = class{
	getDataProduct(div){
		var product = {
			id: 0,
			name: "",
			price: 0,
			img: ""
		}
		let divBase = div.parents(".divProductBlock");
		product.name = divBase.find(".hProductTitle").text().trim();
		product.price = divBase.find(".price-mob").text().trim();
		product.id = divBase.find(".id").text().trim()
		product.img = divBase.find(".img-portfolio").attr("src");
		console.log("product is",product);
		return product;
	}
}