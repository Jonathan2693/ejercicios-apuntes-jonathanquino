/* Obtener los elementos */
let $container = document.querySelector('.container');
let $col1 = document.querySelector('#col1');
let $col2 = document.querySelector('#col2');
let $col3 = document.querySelector('#col3');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
      
    json.forEach((el) => {
        console.log(el);
        let creado = document.createElement('div');
        creado.innerHTML = `<div class="card m-4" style="width: 18rem;" id="${el.id}">
                                <div class="card-body" >
                                    <h5 class="card-title">${el.title}</h5>
                                        <p class="card-text">${el.body}</p>
                                </div>
                            </div>`;
        $container.appendChild(creado);
        })
    });