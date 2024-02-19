const magicalButton = document.getElementById('magicalButton');

magicalButton.addEventListener('click', function() {
  const colors = ['#ff7f50', '#ff6347', '#ff4500', '#ffa07a', '#ff8c00'];
  const texts = ['Ajala!', 'Geo_Lakah-O!', 'Wordsmith Ajalola!', 'I just want to code!', 'I love you!'];

  // Generate random index
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Change button color
  magicalButton.style.backgroundColor = colors[randomIndex];

  // Change button text
  magicalButton.textContent = texts[randomIndex];
});
