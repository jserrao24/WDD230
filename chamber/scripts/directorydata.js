fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const spotlightMembers = data.businesses.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
    const selectedMembers = getRandomMembers(spotlightMembers, 3); // Adjust the number as needed

    selectedMembers.forEach((member, index) => {
      const spotlightSection = document.querySelector(`.spotlight-${index + 1}`);
      if (spotlightSection) {
        spotlightSection.querySelector('h2').textContent = member.title;
        spotlightSection.querySelector('img').src = member.image;
        spotlightSection.querySelector('p').textContent = member.description;
        spotlightSection.querySelector('.mail a').textContent = member.website;
        spotlightSection.querySelector('.mail a').href = member.website;
      }
    });
  })
  .catch(error => console.error('Error:', error));

// Helper function to randomly select members
function getRandomMembers(members, count) {
  const shuffledMembers = members.sort(() => 0.5 - Math.random());
  return shuffledMembers.slice(0, count);
}