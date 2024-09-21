onload = () => {
  document.body.classList.remove("container");

  // Obtener los parámetros de la URL
  const params = new URLSearchParams(window.location.search);

  // Obtener el valor del parámetro 'name'
  const name = params.get('name');

  // Mostrar el nombre en el encabezado
  if (name) {
      document.getElementById('greeting').textContent = `Para ${name}, con cariño:`;
  } else {
      document.getElementById('greeting').textContent = 'Para mi amiga, con cariño:';
  }
};