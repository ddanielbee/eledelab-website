<body>
<div id="fb-root"></div>
<script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '472245606257027',
          xfbml      : true,
          version    : 'v2.1'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/es_LA/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
        <!--[if lt IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Loader Starts -->
        <div class="loader loading">
        </div>
        <!-- Ends Loader -->

        <!-- Header Starts -->
        <!-- Desktop (and Tablet) Header and Nav -->
        <header class="show-for-medium-up desktop">
            <h1 class="meta-stuff">Elede Lab</h1>
            <nav>
                <ul>
                    <li><a class="ajax-link" href="nosotros" data-link="nosotros">Nosotros</a></li>
                    <li><a class="ajax-link" href="lab" data-link="lab" >El laboratorio</a></li>
                    <li><a target="_blank" href="blog.localhost/">Blog</a></li>
                    <li><a class="ajax-link" href="contacto" data-link="contacto">Contacto</a></li>
                </ul>
            </nav>
            <button type="button" class="tcon tcon-menu--xbutterfly nav-button" aria-label="toggle menu">
                <span class="tcon-menu__lines dark-nav" aria-hidden="true"></span>
                <span class="tcon-visuallyhidden">toggle menu</span>
            </button>
            <div class="row">
                <a href="/" data-link="/" class="logo-dark icon logo-nav ajax-link"></a>
                <a href="/" data-link="/" class="logo-light fade-out icon logo-nav ajax-link"></a>
            </div>
        </header>

        <!-- Mobile Header and Nav -->

        <header class="show-for-small-only mobile">
            <h1 class="meta-stuff">Elede Lab</h1>

            <div class="row">
                <a href="#" class="logo-dark icon logo-nav-small"></a>
                <a href="#" class="logo-light fade-out icon logo-nav-small"></a>
                <button type="button" class="tcon tcon-menu--xbutterfly nav-button-small" aria-label="toggle menu">
                <span class="tcon-menu__lines dark-nav" aria-hidden="true"></span>
                <span class="tcon-visuallyhidden">toggle menu</span>
            </button>
            </div>
            <nav class="mobile-nav">
                <ul>
                    <li><a class="ajax-link" href="nosotros" data-link="nosotros">Nosotros</a></li>
                    <li><a class="ajax-link" href="lab" data-link="lab">El laboratorio</a></li>
                    <li><a target="_blank" href="blog.localhost/">Blog</a></li>
                    <li><a class="ajax-link" href="contacto" data-link="contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <!-- Header Ends -->

