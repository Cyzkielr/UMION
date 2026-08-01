function render({container, data, component}) {
  const parent = document.querySelector(container);
  
  parent.innerHTML = "";
  
  data.forEach(item => {
    parent.appendChild(component(item));
  });
}