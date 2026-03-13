// Dark Light Mode

const toggle = document.getElementById("theme-toggle");

if(toggle){

toggle.onclick = () => {
document.body.classList.toggle("light");
};

}


// GitHub Projects Loader

const container = document.getElementById("project-container");

if(container){

fetch("https://api.github.com/users/Kamalesh-S-coder/repos")

.then(res => res.json())

.then(data => {

data.forEach(repo => {

const card = document.createElement("div");

card.className = "project-card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>
`;

container.appendChild(card);

});

});

}