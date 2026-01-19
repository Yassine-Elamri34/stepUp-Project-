
<?php 

//Varibale
$myNumber = 5;
$myString = "helloo"; 
$myBool = true;
$myNull = null;
$emptyVariable;
// $myDataTime = new DataTime();
// var_dump($myDataTime);

//Arrays

$myArray = array(
'Apple',
'Banana',
'Orange'
);
echo $myArray[0];


$myAssociativeArray = array (
'code'=>'5225' , 'Program'=>'http'
);
echo $myAssociativeArray['code'];


//Global arrays
// $_GlobalARRAY - formal of b lobal arrays 


//Cookies
setcookie('course','5225', time () + (86400 *30));
// setcookie('course','5225', time () - (86400 *30));
var_dump ($_COOKIE['course']);
//session
session_start();
$_SESSION['username'] = 'student 123';
var_dump($_SESSION);


$link = 'https://w3schools.com';
$imageURL = 'https://picsum.photos/201';

var_dump($_GET);


?>

<html>
<head>
    <title>variable </title>
</head>
<body>
    <h1>php first lecture </h1>
    <?php 
    echo $myString;
    echo '<b> hello in bold </b>'
    ?>
 <?php echo $myAssociativeArray ['code']; ?>
    <div>
        <a href ="<?php echo $link?>" target ="_blank" > Go to w3schools </a></div>
       <div> <a href ="<?php echo $imageURL?>" target ="_blank" > image url </a>
</div>
</body>
    </html>




