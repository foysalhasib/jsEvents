// Click Event
document.getElementById('clickBtn').addEventListener('click', () => {
  document.getElementById('clickOutput').textContent = 'Button clicked!';
});

// Double Click Event
document.getElementById('dblClickBtn').addEventListener('dblclick', () => {
  document.getElementById('dblClickOutput').textContent = 'Button double-clicked!';
});

// Mouse Over Event
document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverOutput').textContent = 'Mouse is over the box!';
});

// Key Down Event
document.getElementById('keyInput').addEventListener('keydown', (event) => {
  document.getElementById('keyOutput').textContent = `Key pressed: ${event.key}`;
});

// Change Event
document.getElementById('selectInput').addEventListener('change', (event) => {
  document.getElementById('changeOutput').textContent = `You selected: ${event.target.value}`;
});

// Submit Event
document.getElementById('formSubmit').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form refresh
  const name = document.getElementById('nameInput').value;
  document.getElementById('submitOutput').textContent = `Form submitted with name: ${name}`;
});

// Focus Event
document.getElementById('focusInput').addEventListener('focus', () => {
  document.getElementById('focusOutput').classList.remove('hidden');
});

// Blur Event
document.getElementById('blurInput').addEventListener('blur', () => {
  document.getElementById('blurOutput').classList.remove('hidden');
});

// Resize Event
window.addEventListener('resize', () => {
  document.getElementById('resizeOutput').textContent = `Window resized: ${window.innerWidth}x${window.innerHeight}`;
});

// Scroll Event
window.addEventListener('scroll', () => {
  document.getElementById('scrollOutput').textContent = `Scrolled position: ${window.scrollY}px`;
});

