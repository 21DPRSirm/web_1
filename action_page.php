<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Page</title>
</head>
<body>
  <form action="login.php" method="post">
    <label for="uname">Username:</label>
    <input type="text" id="uname" name="uname" required><br>

    <label for="psw">Password:</label>
    <input type="password" id="psw" name="psw" required><br>

    <button type="submit">Login</button>
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username and password from the form
    $username = $_POST["uname"];
    $password = $_POST["psw"];

    // Check if the username and password are correct
    if ($username == "myusername" && $password == "mypassword") {
      // Redirect to the specified URL
      header("Location: RegistraTest.html");
      exit();
    } else {
      // Display an error message
      echo "Invalid username or password.";
    }
  }
  ?>
</body>
</html>
