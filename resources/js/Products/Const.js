let cadenas = [
	{ id: 0, name: "Walmart" },
	{ id: 1, name: "Callejas" }
];
let marcas = [
	[
		{ id: 0, name: "Walmart"},
		{ id: 1, name: "Maxi despensa"},
		{ id: 2, name: "Despensa familiar"}
	],
	[
		{ id: 0, name: "super selectos"}
	],
];
const eCadena 		= $(".cbCadena");
const eCadenaModal 	= $(".cbCadenaModal");
const eMarca 		= $(".cbMarca");
const eMarcaModal	= $(".cbMarcaModal");
const eSucursal 	= $(".cbSucursal");
const eProductoModal = $(".cbProductoModal");

const eProductos 	= $(".divProducts");
const eModal 		= $('#modalDetail');
let productos = [
	[
		[
			// PRODUCTOS WALLmart 
			{ 
				id: 0, name: "Camera wallmart product ", price: 1.50, img: "https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/255/320?1564681025"
			},
			{ 
				id: 0, name: "NoteBook wallmart product 2", price: 1.50, img: "https://cdnx.jumpseller.com/bootstrap/image/6221126/resize/255/320?1564681003"
			}
		],
		[
			// PRODUCTOS maxi 
			{ id: 0, name: "PAD maxi product ",price: 2, img: "https:cdnx.jumpseller.com/bootstrap/image/429448/resize/255/320?1439530289" },
			{ id: 0, name: "maxi product ",price: 2, img: "https://cdnx.jumpseller.com/bootstrap/image/429450/resize/255/320?1439530709"}
		],
		[
			// PRODUCTOS despensa 
			{ id: 0, name: "despensa product ",price: 3}
		]
	]
]