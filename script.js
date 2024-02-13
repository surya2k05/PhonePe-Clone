function updateGreeting() {
    var name = document.getElementById("nameInput").value;
    var value = document.getElementById("valueInput").value;

    if (name && value) {
      var greeting = "Payment of ₹" + value + " to " + name + " successful.";
      document.getElementById("greeting").innerText = greeting;

      // Hide the input fields and button
      document.getElementById("nameInput").style.display = "none";
      document.getElementById("valueInput").style.display = "none";
      document.querySelector("button").style.display = "none";
    } else {
      alert("Please enter both your name and the payment value!");
    }
  }
