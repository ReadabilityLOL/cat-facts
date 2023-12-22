const apiUrl = 'https://catfact.ninja/fact';
const factHolder = document.querySelector('.cat-fact');

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
	  factHolder.textContent = `${data.fact}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
