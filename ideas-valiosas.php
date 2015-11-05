<?php
	require 'default_content/particles_tags.php';
?>

<!-- Any kind of extra css you need here -->
<?php
	require 'default_content/head_end.php';
	require 'default_content/header_particles.php';
	if(isset($_GET['mensaje']))
	{
		?>
		<div class="activeMessage" data-message="<?php echo $_GET['mensaje']?>" style="display:none;"></div>
		<?php
	}
?>

	<div class="content particles">
		<div class="main-content">

			<textarea name="mainText" id="particleText" class="lab-input" cols="30" rows="10" placeholder="Hola, escribe tu mensaje aquí"></textarea>
			<button class="button particles-button">Click para hacer mágia</button>
			<div class="error-message">
				<p>Las mejores ideas se cuentan de forma corta. Cuénta la tuya en máximo 15 palabras y 140 caracteres.</p>
			</div>
		</div>
		<div class="particles-content">
			<div id="particle-slider">
				<div class="slides">
					<div class="slide" data-src=""></div>
				</div>
				<canvas class="draw"></canvas>
			</div>
			<?php
				if(isset($_GET['mensaje']))
				{
					?>
					<a href="#" class="new-button button">Cuenta tu propia idea</a>
					<?php
				} else
				{
					?>
					<a href="#" class="new-button button">Quieres Contar otra cosa ?</a>
					<?php
				}
			?>
			<a href="#" class="fb-button button">Comparte <?php if(!isset($_GET['mensaje'])){ ?>tu<?php } else{ ?>esta<?php } ?> idea en Facebook</a>
			<a href="" class="tw-button button">o en Twitter</a>
			<div>
				<a href="http://www.eledelab.co" target="_blank" class="button elede-button">Quieres conocer más ? Visítanos</a>
			</div>
		</div>


	</div>
<?php
	require 'default_content/footer.php';
	require 'default_content/common_scripts.php';
?>

<script src="js/vendor/min/particleslider-current-min.js"></script>
<script src="js/particles.js"></script>
<?php
	require 'default_content/doc_end.php';
?>