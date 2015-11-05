<?php
	require 'default_content/head_start.php';
	require 'default_content/head_end.php';
	require 'default_content/header_dark.php';
?>

	<div class="content contacto">
		<div class="row">
			<div class="columns small-12">
				<div class="title-container">
					<h2 class="hugetext should-slide lab-title">Quieres entrar al laboratorio ?</h2>
					<h2 class="hugetext should-slide second-line">(también aceptamos saludos)</h2>
					<div class="actions-container">
						<div class="hello-contact should-slide">
							<p>Preguntas y Saludos</p>
							<a href="mailto:info@eledelab.co?subject=Hola%20Elede" class="button">info@eledelab.co</a>
						</div>
						<div class="idea-contact should-slide">
							<p>Seamos un Equipo</p>
							<a href="#0"  class="button modal-button morph-modal" data-type="modal-trigger">Formulario de Experimento</a>
							<span class="contact-modal-bg"></span>
						</div>
					</div>

					<p class="should-slide padded-side">Quieres mantenerte en contacto ?</p>
          <p class="should-slide padded-side">Danos tu correo y cada mes te contaremos qué ha pasado en el laboratorio:</p>
          <p class="error-message padded-side"></p>
          <p class="success-message padded-side">Sigue las instrucciones de la nueva pestaña para completar tu suscripción y muchas gracias por seguir nuestros experimentos !</p>

          <!-- Begin MailChimp Signup Form -->
          <div id="mc_embed_signup">
          <form action="//eledelab.us10.list-manage.com/subscribe/post?u=92ffba20439c4fea7f5b17ddb&amp;id=1121aef59c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
              
                  <div class="mc-field-group">
                      <label for="mce-EMAIL" style="display:none;">Email Address </label>
                      <input type="email" value="" name="EMAIL" class="required email lab-input validate should-slide" id="mce-EMAIL" placeholder="Correo Electrónico">
                  </div>
                  <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;">
                      <input type="text" name="b_92ffba20439c4fea7f5b17ddb_1121aef59c" tabindex="-1" value="">
                  </div>
                  <div class="clear">
                      <input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" class="button lab-button should-slide">
                  </div>
              </div>
          </form>
          </div>
				</div>
			</div>
		</div>


		<div class="contact-modal">
			<div class="contact-modal-content">
				<?php
					require 'default_content/contact_form.php';
				?>
			</div> <!-- cd-modal-content -->
		</div> <!-- cd-modal -->

		<a href="#0" class="equipo-bio-close"></a>
	</div>

<?php
	require 'default_content/footer.php';
	require 'default_content/common_scripts.php';
?>
	<script src="js/vendor/min/wufoo-min.js"></script>
	<script src="js/velocity.min.js"></script>
	<script src="js/contacto.js"></script>

<?php
	require 'default_content/doc_end.php';
?>