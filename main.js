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
        desc: "A real-time chat app using Node.js and Socket.io.",
        github: "https://github.com/yourgithub/chatbox",
        demo: "https://scambox.onrender.com/"
      },
      netflix: {
        title: "Netflix Clone",
        desc: "A frontend Netflix UI replica built with HTML, CSS, and JS.",
        github: "https://github.com/yourgithub/netflix-clone",
        demo: "https://nakulflix.vercel.app"
      },
      player: {
        title: "Music Player",
        desc: "A music player with search and playlist features.",
        github: "https://github.com/yourgithub/music-player",
        demo: "https://music-player-xi-two.vercel.app/"
      }
    };
  
    const data = projectData[projectId];
  
    document.getElementById("projectContent").innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.desc}</p>
      <div style="margin-top:20px;">
        <a href="${data.github}" target="_blank">🔗 GitHub</a> |
        <a href="${data.demo}" target="_blank">🌐 Live Demo</a>
      </div>
    `;
  
    document.getElementById("expandedCard").classList.add("active");
  }
  















  function openProject(projectId) {
    const projectData = {
      chatbox: {
        title: "Chatbox App",
        desc: "A real-time chat app using Node.js and SerpAPI.",
        github: "https://github.com/yourgithub/chatbox",
        demo: "https://scambox.onrender.com/",
        info:  "Chatbox is a full-stack, AI-powered chat assistant designed with both functionality and responsiveness in mind. It features a sleek and adaptive frontend built with HTML, CSS, and JavaScript, paired with a robust Node.js backend that handles API communication and logic processing. The application is powered by SerpAPI for real-time search queries and uses the Wikipedia API as a fallback for delivering accurate and informative responses when direct answers aren't available. This layered approach ensures that users always receive meaningful replies, even in edge cases.",
        fullImage: "images/scambox.jpg" // ✅ Better version of your poster
      },
      netflix: {
        title: "Netflix Clone",
        desc: "A frontend Netflix UI replica built with HTML, CSS, and JS.",
        github: "https://github.com/yourgithub/netflix-clone",
        demo: "https://netflix-clone-1e3v.vercel.app/",
        info: " This Netflix Clone is a frontend-only project focused on replicating the look and feel of the world’s most popular streaming platform. Built using HTML and CSS,  the project showcases a clean, visually engaging, and responsive UI that mirrors Netflix’s modern design aesthetics. The layout features dynamically structured content sections such as Trending Now, Top Picks, and Originals, with hover effects and image-based carousels that simulate a real-world streaming interface. ",
        fullImage: "images/netdecs.jpg"
      },
      player: {
        title: "Music Player",
        desc: "A music player with search and playlist features.",
        github: "https://github.com/yourgithub/music-player",
        demo: "https://music-player-xi-two.vercel.app/",
        info: "This project is a Music player built entirely with HTML, CSS, and JavaScript, offering a clean, responsive, and interactive experience for playing and managing songs. It allows users to browse through albums, view song lists, and play tracks with full control over playback. The design is intuitive and device-friendly, adapting smoothly across screen sizes. Songs and album data are dynamically loaded using structured JSON files, and users can interact with elements like play/pause buttons, seekbar, volume control, and real-time duration display",
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
  














  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('formResponse').textContent = "✅ Message sent successfully (mock)!";
    
    // Optional: Reset form
    event.target.reset();
  
    return false;
  }
  

















































  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="message"]').value;
  
      const formData = { name, email, message };
  
      try {
        const response = await fetch("https://nakul-portfolio-de0y.onrender.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("✅ Message sent successfully!");
          form.reset();
        } else {
          alert("❌ Failed to send message. Try again.");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("❌ Error occurred.");
      }
    });
  });
  