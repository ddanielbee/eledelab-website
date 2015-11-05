<!doctype html>
<html ng-app="project" class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Elede Lab</title>
        <meta name="description" content="Laboratorio de Diseño multidisciplinario dedicado a la creación de Startups y Emprendimientos que cambien el mundo.">
        <meta property="fb:app_id" content="472245606257027" />
        <meta property="fb:admins" content="740325533"/>
        <meta property="og:title" content="Elede Lab"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://eledelab.co"/>
        <meta property="og:image" content="http://www.eledelab.co/img/facebook-home.jpg"/>
        <meta property="og:description" content="Somos un grupo multidisciplinario apasionado por la exploración de la tecnología, el diseño y la interacción. Creemos que estas son herramientas esenciales para contar las ideas innovadoras que habitan las mentes creativas." />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@eledelab">
        <meta name="twitter:creator" content="@eledelab">
        <meta name="twitter:title" content="Elede Lab">
        <meta name="twitter:description" content="Somos un grupo multidisciplinario apasionado por la exploración de la tecnología, el diseño y la interacción. Creemos que estas son herramientas esenciales para contar las ideas innovadoras que habitan las mentes creativas.">
        <meta name="twitter:image:src" content="http://www.eledelab.co/img/twitter-card-default.jpg">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="/css/normalize.css">
        <link rel="stylesheet" href="/css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/css/foundation.css">
        <link rel="stylesheet" href="/css/styles.css">

<script src="/js/min/modernizr-2.8.3.min.js"></script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-60768043-1', 'auto');
          ga('send', 'pageview');

        </script>
    </head>

<?php
    require 'default_content/header_dark.php';
    //replace light with dark for dark starting
?>
        <!-- Header Ends -->
        
        <!-- STARTS CONTENT (this gets swapped after ajax call) -->

        <div ng-controller="ProjectController as project" class="content project">
            <div ng-show="project.experiment" class="row">
                <div class="lab-modal">
                    <div class="bio-pic">
                        <img ng-src="{{project.experiment.hero_image}}">
                    </div>
                    <div class="row">
                        <div class="columns medium-2">&nbsp;</div>
                        <div class="columns small-12 medium-8">
                            <div class="equipo-bio-content">
                                <h2 class="hugetext should-slide">{{project.experiment.title}}</h2>
                                <h3 class="sub-title should-slide">{{project.experiment.subtitle}}</h3>
                                <p ng-show="project.experiment.text_1" class="should-slide">{{project.experiment.text_1}}</p>
                            <div ng-show="project.experiment.video" class="flex-video widescreen vimeo should-slide">
                                <iframe ng-src="{{project.experiment.video | trusted}}" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a ng-href="https://vimeo.com/{{project.experiment.video | trusted}}" >{{project.experiment.title}}</a> from <a href="https://vimeo.com/eledelab">Elede Lab</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                            </div>
                            
                            <p ng-show="project.experiment.text_2" class="should-slide">{{project.experiment.text_2}}</p>
                            <ul>
                                
                                <li  ng-show="project.experiment.images_1" ng-repeat="image in project.experiment.images_1">
                                
                                    <img class="project-image" ng-src="{{image}}">
                                </li>
                            </ul>
                            <p ng-show="project.experiment.text_3" class="should-slide">{{project.experiment.text_3}}</p>
                            <ul>
                                
                                <li  ng-show="project.experiment.images_2" ng-repeat="image in project.experiment.images_2">
                                
                                    <img class="project-image" ng-src="{{image}}">
                                </li>
                            </ul>
                            <a target="_blank" ng-show="project.experiment.website_url" ng-href="{{project.experiment.website_url}}" class="button show-for-small-only should-slide">Website</a>
                            <div class="bio-links">
                                <p class="should-slide">You can read more and stay on top of this project in:</p>
                                <a ng-show="project.experiment.facebook_url" ng-href="{{project.experiment.facebook_url}}" target="_blank" class="dark-icon icon lefty-link fb-dark should-slide"></a>
                                <a ng-show="project.experiment.behance_url" ng-href="{{project.experiment.behance_url}}" target="_blank" class="dark-icon icon bh-dark should-slide"></a>
                                
                            </div>
                            <p class="should-slide">Quieres darte cuenta cuando lancemos algún experimento ? </p>
                                <p class="should-slide">Danos tu correo y cada mes te contaremos qué ha pasado en el laboratorio:</p>
                                <p class="error-message"></p>
                                <p class="success-message">Sigue las instrucciones de la nueva pestaña para completar tu suscripción y muchas gracias por seguir nuestros experimentos !</p>

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
                        <div class="columns medium-2 website-column show-for-medium-up">
                            <a target="_blank" ng-show="project.experiment.website_url" ng-href="{{project.experiment.website_url}}" class="button">Website</a>
                        </div>
                            
                    </div>
            
                </div>
            </div>
            <div class="row" ng-hide="project.experiment">
            <?php
                require 'project404.php';
                ?>
            </div>
        </div>
        <!-- ENDS CONTENT -->

<?php
    require 'default_content/footer.php';
    ?>
    
        <a href="#" class="equipo-bio-close"></a>
        <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script>window.jQuery || document.write('<script src="/js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <script src="/js/min/common-min.js"></script>
        <script src="/js/project.js"></script>
        <script src="/js/min/angular.min.js"></script>
        <script src="/js/project-angular.js"></script>
        
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        
<?php
    require 'default_content/doc_end.php';
?>