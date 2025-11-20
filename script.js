const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.getElementById('teamContainer');
const btn = document.getElementById('addMemberBtn');

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  const cardHTML = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm text-center team-card">
                        <div class="pt-4">
                            <img src="${member.img}" class="team-avatar rounded-circle" alt="${member.name}">
                        </div>
                        <div class="card-body pt-2">
                            <h5 class="card-title fw-bold mb-1">${member.name}</h5>
                            <p class="text-primary small fw-bold">${member.role}</p>
                            <p class="text-muted small">${member.email}</p>
                        </div>
                    </div>
                </div>
            `;

  teamContainer.innerHTML += cardHTML;
}


btn.addEventListener("click", function () {
  teamMembers.push({
    name: "Aldo De Negri",
    role: "Junior Developer",
    email: "aldo.denegri@team.com",
    img: ""
  });

  const nuovaCard = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm text-center team-card">
                        <div class="pt-4">
                            <img src="${teamMembers[teamMembers.length - 1].img}" class="team-avatar rounded-circle" alt="${teamMembers[teamMembers.length - 1].name}">
                        </div>
                        <div class="card-body pt-2">
                            <h5 class="card-title fw-bold mb-1">${teamMembers[teamMembers.length - 1].name}</h5>
                            <p class="text-primary small fw-bold">${teamMembers[teamMembers.length - 1].role}</p>
                            <p class="text-muted small">${teamMembers[teamMembers.length - 1].email}</p>
                        </div>
                    </div>
                </div>
            `;

  teamContainer.innerHTML += nuovaCard;
  btn.disabled = true;
  btn.textContent = "Membro aggiunto!";
  btn.classList.replace("btn-success", "btn-secondary");
});