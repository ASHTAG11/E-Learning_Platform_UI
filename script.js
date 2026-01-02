// Redirect from dashboard
function goToCourses() {
  window.location.href = "courses.html";
}

// Enroll course logic
function enrollCourse(courseName) {
  let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  if (!enrolledCourses.includes(courseName)) {
    enrolledCourses.push(courseName);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    alert(courseName + " enrolled successfully!");
  } else {
    alert("You already enrolled in this course.");
  }
}

// Update dashboard counts
function updateDashboard() {
  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const enrolledCountEl = document.getElementById("enrolledCount");
  const availableCountEl = document.getElementById("availableCount");

  if (enrolledCountEl) {
    enrolledCountEl.textContent = enrolledCourses.length;
  }

  if (availableCountEl) {
    availableCountEl.textContent = 12;
  }
}

// Progress bar logic
window.onload = () => {
  updateDashboard();

  const progress = localStorage.getItem("progress");
  if (progress && document.getElementById("progressBar")) {
    const bar = document.getElementById("progressBar");
    bar.style.width = progress + "%";
    bar.textContent = progress + "%";
  }
};

const btn = document.getElementById("completeBtn");
  const msg = document.getElementById("statusMsg");

  btn.addEventListener("click", () => {
    // Save progress
    localStorage.setItem("progress", 70);

    // UI feedback
    msg.style.display = "block";
    btn.textContent = "Completed ✔";
    btn.disabled = true;
    btn.style.background = "#22c55e";
  });


  

// Creepy flicker effect
const flickerElements = document.querySelectorAll("button, .view-btn, .primary-btn");

setInterval(() => {
  flickerElements.forEach(el => {
    if (Math.random() > 0.85) {
      el.style.opacity = "0.6";
      setTimeout(() => el.style.opacity = "1", 120);
    }
  });
}, 600);
