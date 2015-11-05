<?php
	require 'vendor/autoload.php';
	require 'dbHandler.php';


	/**	
	 * PHP router used for nice urls and getting information. 
	 */

	$app = new \Slim\Slim();
	/**
	 * Main get Requests for pages inside
	 */
	$app->get('/:fileName', function ($fileName) {
		$ext = ".php";
		if(file_exists($fileName.$ext))
		{
	    	echo include($fileName.$ext);
		} else
		{
			echo include("404.php");
		}
	});

	/**
	 * Initial get Request for first call to page
	 */
	$app->get('/', function() {
		echo include("home.php");
	});

	/**
	 * Getting projects
	 */
	
	$app->get('/experiments/all', function() {
		echo getProjects();
	});

	$app->get('/experiments/:experimentName', function($experimentName) {
		if(file_exists("project.php"))
		{
			echo include("project.php");
		} else
		{
			echo include("404.php");
		}
	});

	/**
	 * Get single project
	 */
	$app->get('/experiments/:experimentName/get', function($experimentName) {
		if(getProject($experimentName) == false)
		{
			echo false;
		} else
		{
			echo getProject($experimentName);
		}
	});


	$app->run();