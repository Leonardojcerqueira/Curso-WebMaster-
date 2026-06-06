
<?php
if (isset($_GET['url'])) {
    $url = $_GET['url'];

    if (file_exists($url . '.html')) {
        include($url . '.html');
    } else {
        include('404.html');
    }

} else {
    include('home.html');
}
?>
