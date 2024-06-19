/* Global Styles */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

/* Login Screen Styles */

.login-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
  color: #fff;
}

.login-screen form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-screen label {
  margin-bottom: 10px;
}

.login-screen input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.login-screen button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Home Screen Styles */

.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.home-screen h1 {
  margin-bottom: 10px;
}

.home-screen p {
  margin-bottom: 20px;
}

.job-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.job-card {
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.job-card
