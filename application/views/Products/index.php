<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">	
	<!------ Include the above in your HEAD tag ---------->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<style type="text/css">

		#search {
		    width:90%;
		}

		.searchicon {
		    color:#5CB85C;
		}

		.items-collection{
		    margin:20px 0 0 0;
		}
		.items-collection label.btn-default.active{
		    background-color:#007ba7;
		    color:#FFF;
		}
		.items-collection label.btn-default{
		    width:90%;
		    border:1px solid #305891;
		    margin:5px; 
		    border-radius: 17px;
		    color: #305891;
		}
		.items-collection label .itemcontent{
		    width:100%;
		}
		.items-collection .btn-group{
		    width:90%
		}
	</style>

<!-- Button trigger modal -->
<!--############## -->
	<div class="container">
    <h2>Ver productos </h2>
    <div class="row">
    	<?php 
    		$this->load->view("Products/partials/search_bar");
    	?>
    	
    	<div class="col-lg-4">
	    	<select class="form-control cbSucursal">
	    		<option>Selecciona sucursal</option>
	    	</select>	
    	</div>
    </div>
    <div class="row">
        <div class="form-group">
            <div class="items-collection divProducts">
                              

            </div>
        </div>
    </div>
	</div>
	<!-- Modal -->
<?php 
	$this->load->view("Products/partials/modal.php");
?>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
	
	<script type="text/javascript">
		
	</script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/CBCadena.js"); ?> ></script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/CBMarca.js"); ?> ></script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/Const.js"); ?> ></script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/ModalDetailCls.js"); ?> ></script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/DivProducts.js"); ?> ></script>
	<script type="text/javascript" src=<?php echo base_url("/resources/js/Products/script.js"); ?> ></script>
</body>
</html>