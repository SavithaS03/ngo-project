// Donation Data
let donations = [];
let volunteers = [];
let receiptCounter = 1;

// Elements
const donationForm = document.getElementById("donationForm");
const donationTable = document.querySelector("#donationTable tbody");
const totalDonationsEl = document.getElementById("totalDonations");
const donorCountEl = document.getElementById("donorCount");

const volunteerForm = document.getElementById("volunteerForm");
const volunteerTable = document.querySelector("#volunteerTable tbody");
const volunteerCountEl = document.getElementById("volunteerCount");

// Donation Form Submission
donationForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("donorName").value;
  const email = document.getElementById("donorEmail").value;
  const amount = parseFloat(document.getElementById("donorAmount").value);

  const donation = {
    receiptNo: receiptCounter++,
    name, email, amount
  };
  donations.push(donation);
  updateDonationTable();
  updateDashboard();

  donationForm.reset();
  alert("Donation successful! Thank you.");
});

// Volunteer Form Submission
volunteerForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("volName").value;
  const email = document.getElementById("volEmail").value;
  const skills = document.getElementById("volSkills").value;
  const availability = document.getElementById("volAvailability").value;

  const volunteer = {name, email, skills, availability};
  volunteers.push(volunteer);
  updateVolunteerTable();
  updateDashboard();

  volunteerForm.reset();
  alert("Volunteer registered successfully!");
});

// Update Donation Table
function updateDonationTable(){
  donationTable.innerHTML = "";
  donations.forEach(d => {
    const row = `<tr>
      <td>${d.receiptNo}</td>
      <td>${d.name}</td>
      <td>${d.email}</td>
      <td>$${d.amount.toFixed(2)}</td>
    </tr>`;
    donationTable.innerHTML += row;
  });
}

// Update Volunteer Table
function updateVolunteerTable(){
  volunteerTable.innerHTML = "";
  volunteers.forEach(v => {
    const row = `<tr>
      <td>${v.name}</td>
      <td>${v.email}</td>
      <td>${v.skills}</td>
      <td>${v.availability}</td>
    </tr>`;
    volunteerTable.innerHTML += row;
  });
}

// Update Dashboard
function updateDashboard(){
  const total = donations.reduce((sum, d) => sum + d.amount, 0);
  totalDonationsEl.textContent = "$" + total.toFixed(2);
  donorCountEl.textContent = donations.length;
  volunteerCountEl.textContent = volunteers.length;
}
