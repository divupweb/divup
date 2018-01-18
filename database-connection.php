<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: *");
header('Content-Type: text/html; charset=utf-8');
$servername = "localhost";
$username = "divup";
$password = "frostbite2";
$dbname = "divup";
$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8');
if(!$conn){
    die("Connection failed: " .mysqli_connecet_error());
}

$showData = "SELECT * FROM protfolio_items";
$data = array();
$result = mysqli_query($conn, $showData);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
} else {
    echo "0 results";
};
print json_encode($data);
mysqli_close($conn);
?>