const scheduleData = [
    {
      title: "AI Trends",
      description:
        "Explore the latest advancements and innovations in Artificial Intelligence.",
      image: "assets/Ai-trends.webp",
    },
    {
      title: "Web Development 101",
      description:
        "An introductory session on modern web development practices.",
      image: "assets/web-development-101.webp",
    },
    {
      title: "Cloud Computing Basics",
      description:
        "Learn the essentials of cloud computing and its applications.",
      image: "assets/cloud-computing.webp",
    },
    {
      title: "Cybersecurity Insights",
      description:
        "Understand the challenges and solutions in cybersecurity today.",
      image: "assets/cybersecurity.webp",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    // Get today's date and format it for the page title
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);
    document.title = `Tech Conference 2024 - ${formattedDate}`;
  
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    // Add smooth scrolling and active link highlighting on scroll
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  
    // Highlight active navigation link based on scroll position
    window.addEventListener("scroll", () => {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;
  
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("text-white", "font-bold", "text-lg");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("text-white", "font-bold", "text-lg");
        }
      });
    });
  
    /**
     * Displays a toast message on the screen.
     * 
     * This function creates a toast notification with the specified message
     * and appends it to the toast container. The toast will automatically
     * fade out and be removed after 3 seconds.
     * 
     * @param {string} message - The message to display in the toast notification.
     */
    function showToast(message) {
      // Create toast container if it doesn't exist
      const toastContainer = document.getElementById("toastContainer");
      const toast = document.createElement("div");
  
      // Set toast properties
      toast.className =
        "bg-green-500 text-white p-4 rounded shadow-lg transition-all duration-500";
      toast.innerHTML = message;
  
      // Append toast to the container
      toastContainer.appendChild(toast);
  
      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.classList.add("opacity-0");
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    }
  
    // Log contact form inputs to console and show toast after submission
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Get form values
        const name = this[0].value;
        const email = this[1].value;
        const message = this[2].value;
  
        // Log the form values to the console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
        // Reset the form fields
        this.reset();
  
        // Show success toast message
        showToast("Your message has been successfully submitted!");
      });
  
    // Generate Schedule Cards for the conference schedule
    const scheduleGrid = document.getElementById("scheduleGrid");
    scheduleData.forEach((session) => {
      const card = document.createElement("div");
      card.className = "session bg-gray-100 p-6 rounded shadow hover:shadow-lg";
  
      // Set card content
      card.innerHTML = `
        <img src="${session.image}" alt="${session.title}" class="w-full h-40 object-cover rounded mb-4">
        <h3 class="text-xl font-bold mb-2">${session.title}</h3>
        <p class="text-gray-600">${session.description}</p>
      `;
  
      // Append the card to the schedule grid
      scheduleGrid.appendChild(card);
    });
  });
  