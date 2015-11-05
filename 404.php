<?php
    require 'default_content/head_start.php';
?>

<!-- Any kind of extra css you need here -->

<?php
    require 'default_content/head_end.php';
    require 'default_content/header_dark.php';
    //replace light with dark for dark starting
?>
        <!-- Header Ends -->
        
        <!-- STARTS CONTENT (this gets swapped after ajax call) -->

        <div class="content lab">
            <div class="row">
                <div class="columns small-12">
                    <div class="title-container">
                        <h2 class="hugetext should-slide lab-title">Oops, parece que esa página no existe</h2>
                        <p class="should-slide">Te pedimos perdón =(</p>
                        <p class="should-slide">Siempre puedes seguir los siguientes enlaces (o la navegación principal arriba) para llegar a donde querías ir.</p>
                        <br>
                        <a href="http://eledelab.co" class="button">eledelab.co</a>
                        <a href="http://blog.eledelab.co" class="button">blog.eledelab.co</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- ENDS CONTENT -->

<?php
    require 'default_content/footer.php';
    require 'default_content/common_scripts.php';
?>
        <script src="/js/404.js"></script>
        
        
<?php
    require 'default_content/doc_end.php';
?>