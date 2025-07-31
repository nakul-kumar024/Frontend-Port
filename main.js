function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('active');
}

document.querySelector('a[href="#projects"]').addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("rightPanel").classList.add("active");
});

function closePanel() {
  document.getElementById("rightPanel").classList.remove("active");
}

document.querySelector('a[href="#resume"]').addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("resumePanel").classList.add("active");
});

document.querySelector('a[href="#contact"]').addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("contactPanel").classList.add("active");
});

function closeResume() {
  document.getElementById("resumePanel").classList.remove("active");
}

function closeContact() {
  document.getElementById("contactPanel").classList.remove("active");
}

function closeProject() {
  document.getElementById("expandedCard").classList.remove("active");
}

function openProject(projectId) {
  const projectData = {
    chatbox: {
      title: "Chatbox App",
      desc: "A real-time chat app using Node.js and SerpAPI.",
      github: "https://github.com/yourgithub/chatbox",
      demo: "https://scambox.onrender.com/",
      info: "Chatbox is a full-stack, AI-powered chat assistant...",
      fullImage: "images/scambox.jpg"
    },
    netflix: {
      title: "Netflix Clone",
      desc: "A frontend Netflix UI replica built with HTML, CSS, and JS.",
      github: "https://github.com/yourgithub/netflix-clone",
      demo: "https://netflix-clone-1e3v.vercel.app/",
      info: "This Netflix Clone is a frontend-only project focused on replicating...",
      fullImage: "images/netdecs.jpg"
    },
    player: {
      title: "Music Player",
      desc: "A music player with search and playlist features.",
      github: "https://github.com/yourgithub/music-player",
      demo: "https://music-player-xi-two.vercel.app/",
      info: "This project is a Music player built entirely with HTML, CSS, and JavaScript...",
      fullImage: "images/player mini card.jpg"
    }
  };

  const data = projectData[projectId];

  document.getElementById("expandedImg").src = data.fullImage;
  document.getElementById("projectTitle").textContent = data.title;
  document.getElementById("projectDesc").textContent = data.desc;
  document.getElementById("githubLink").href = data.github;
  document.getElementById("demoLink").href = data.demo;
  document.getElementById("projectInfo").textContent = data.info;

  document.getElementById("expandedCard").classList.add("active");
}

// ✉️ Contact Form Submission Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const responseEl = document.getElementById("formResponse");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    const formData = { name, email, message };

    try {
      const response = await fetch("https://nakul-portfolio-l2xr.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        responseEl.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        responseEl.textContent = "❌ Failed to send message. Try again.";
      }
    } catch (err) {
      console.error("Error:", err);
      responseEl.textContent = "❌ Network error. Please try again later.";
    }
  });
});
