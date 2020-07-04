<?php 

class Products extends CI_Controller {
	public function __construct(){
		$this->load->helper('url');
	}
	public function index()
	{
		$this->load->view('Products/index.php');
	}	
}