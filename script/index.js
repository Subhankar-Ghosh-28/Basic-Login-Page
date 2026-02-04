let count = 0;
      function loginUser() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
          alert("Please fill in both fields!");
          return;
        }

        // Save to localStorage (temporary)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // Optional: log for debugging
        console.log("Email:", email);
        console.log("Password:", password);

        window.location.href = "main.html";
      }

      function loginWithGoogle() {
        console.log("Google login clicked!");
        alert("Google login feature coming soon!");
      }

      function loginWithFB() {
        console.log("Facebook login clicked!");
        alert("Facebook login feature coming soon!");
      }

      // Password toggle functionality
      const togglePassword = document.getElementById("togglePassword");
      const passwordInput = document.getElementById("password");

      togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.textContent = type === "password" ? "👁️" : "🙈";
      });

      // Initialize toggle button
      togglePassword.textContent = "👁️";