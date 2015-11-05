<?php

	$GLOBALS['errorMessages'] = array(
			"mail" => array(
					"duplicate" => "Oops, ya te suscribiste ! (o alguien se suscribió en tu nombre... que miedo)"
				), 
			"defaultError" => "Hubo un error, y no es tu culpa. Inténtalo de nuevo más tarde."
		);

/**
 * Simple function to connect to the database
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @return Object mysqli connection object
 */
	function connectToDb()
	{
		// Test Database Info
		//$mysqli=mysqli_connect("localhost", "root", "root", "elede");
		// Actual Database info (can't post that on github)
		$mysqli=mysqli_connect("hostname", "username", "password", "dbname");
		// Check connection
		if (mysqli_connect_errno()) {
		  return "Failed to connect to MySQL: " . mysqli_connect_error();
		} else
		{
			return $mysqli;
		}
	}

/**
 * Helper function for closing the database
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  object $stmt   
 * @param  object $mysqli 
 * @return void         
 */
	function closeDb($stmt, $mysqli)
	{
		$stmt->close();
		mysqli_close($mysqli);
	}

/**
 * Gets called when all projects need to be fetched. Used in the portfolio section
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @return json Json object with all the necessary information on the project
 */
	function getProjects() {
		$mysqli = connectToDb();
		$stmt = $mysqli->prepare("SELECT id, thumb_title, seo_link, thumb_image FROM projects");
		$stmt->execute();
		$stmt->bind_result($sId, $sThumbTitle, $sSeoLink, $sThumbImage);
		$aProjects = array();
		
		while($stmt->fetch())
		{
			$aTemp = array(
				"id" 			=> $sId, 
				"thumb_title" 	=> $sThumbTitle,
				"seo_link"		=> $sSeoLink,
				"thumb_image" 	=> $sThumbImage
			);
		array_push($aProjects, $aTemp);
		}
		closeDb($stmt, $mysqli);
		return json_encode($aProjects);
	}

/**
 * Function for fetching a single project
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  String $sExperimentName Name of the project
 * @return json                  Json object with all necessary info on the project
 */
	function getProject($sExperimentName) {
		$mysqli = connectToDb();
		$stmt = $mysqli->prepare("SELECT title, subtitle, hero_image, video, text_1, text_2, text_3, images_1, images_2, website_url, behance_url, facebook_url FROM projects WHERE seo_link = ?");
		$stmt->bind_param('s', $sExperimentName);
		$stmt->execute();
		$stmt->bind_result($sTitle, $sSubtitle, $sHeroImage, $sVideo, $sTextOne, $sTextTwo, $sTextThree, $sImagesOne, $sImagesTwo, $sWebsiteUrl, $sBehanceUrl, $sFacebookUrl);
		$aProject = array();
		$stmt->store_result();
		while($stmt->fetch())
		{
			$aTemp = array(
				"title"			=> $sTitle,
				"subtitle"		=> $sSubtitle,
				"hero_image"	=> $sHeroImage,
				"video"			=> $sVideo,
				"text_1"		=> utf8_encode($sTextOne),
				"text_2"		=> utf8_encode($sTextTwo),
				"text_3"		=> utf8_encode($sTextThree),
				"images_1"		=> $sImagesOne,
				"images_2"		=> $sImagesTwo,
				"website_url"	=> $sWebsiteUrl,
				"facebook_url"	=> $sFacebookUrl,
				"behance_url"	=> $sBehanceUrl
			);
			$aProject = $aTemp;
		}
		if($stmt->num_rows == 0)
		{
			return false;
		}
		foreach ($aProject as $key => $value) {
			if($value == null)
			{
				unset($aProject[$key]);
			}
		}
		if(isset($aProject["images_1"]))
		{
			$aProject["images_1"] = explode("_", $aProject["images_1"]);
		}
		if(isset($aProject["images_2"]))
		{
			$aProject["images_2"] = explode("_", $aProject["images_2"]);
		}
		return json_encode($aProject);
	}














