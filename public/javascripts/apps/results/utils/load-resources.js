
export const load_resources = (resources) => {
  let fragment = new DocumentFragment();

  // Si tuvieramos permisos de CORS se haria con link prefetch
  resources.map( (item)=> {
    let img = document.createElement('img');
    img.src = item;
    img.alt = 'preload image'
    img.className ='hidde';
  
    fragment.appendChild(img)
  })

  let container = window.document.getElementById('images-preload-container');
  container.innerHTML = '';
  container.appendChild(fragment);
}
