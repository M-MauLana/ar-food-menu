// Event listener for AR buttons
document.querySelectorAll('.view-ar').forEach(button => {
  button.addEventListener('click', (event) => {
    const model = event.target.getAttribute('data-model');
    window.location.href = `./ar-viewer.html?model=${model}`;
  });
});
