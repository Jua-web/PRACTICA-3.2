import { obtenerPostsDeUsuario, obtenerUsuarios } from './api.js';

const contenedor = document.getElementById('contenedor-usuarios');
const spinner = document.getElementById('spinner');
const estado = document.getElementById('estado');
const btnCargar = document.getElementById('btnCargar');

function mostrarEstado(msg, tipo='info'){
    estado.textContent = msg;
    estado.className = `estado-${tipo}`;
}


function renderizarTarjeta(usuario){

    const card = document.createElement('article');

    card.className = 'tarjeta-usuario';

    card.innerHTML = `
    <img src="https://ui-avatars.com/api/?name=${usuario.name}&background=2E5FA3&color=fff" class="avatar">
        <h3>${usuario.name}</h3>
        <p>📧 ${usuario.email}</p>
        <p>🌐 ${usuario.website}</p>
        <p>🏢 ${usuario.company.name}</p>

        <button class="btn-posts" data-id="${usuario.id}">
        Ver publicaciones
        </button>

        <div class="posts-container" hidden></div>
    `;

    card.querySelector('.btn-posts').addEventListener('click', async () => {

        const postsDiv = card.querySelector('.posts-container');

        postsDiv.hidden = false;

        postsDiv.innerHTML = "<em>Cargando posts...</em>";

        try{

            const posts = await obtenerPostsDeUsuario(usuario.id);

            postsDiv.innerHTML = posts.slice(0,3)
            .map(p => `<p><strong>${p.title}</strong></p>`)
            .join('');

        }catch(err){

            postsDiv.innerHTML = `<span>Error: ${err.message}</span>`;

        }

    });

    return card;
}


btnCargar.addEventListener('click', async () => {
    btnCargar.disabled = true;

    spinner.hidden = false;

    contenedor.innerHTML = "";

    mostrarEstado("Solicitando datos...","info");

    try{

        const usuarios = await obtenerUsuarios();

        usuarios.forEach(u => {
            contenedor.appendChild(renderizarTarjeta(u));
        });

        mostrarEstado(`${usuarios.length} usuarios cargados`,"ok");

    }catch(err){

        mostrarEstado(`Error: ${err.message}`,"error");

    }finally{

        spinner.hidden = true;
        btnCargar.disabled = false;

    }

});


document.getElementById('busqueda').addEventListener('input',(e)=>{

    const query = e.target.value.toLowerCase();

    document.querySelectorAll('.tarjeta-usuario').forEach(card => {

        const nombre = card.querySelector('h3').textContent.toLowerCase();

        card.hidden = !nombre.includes(query);

    });

});

document.getElementById('btnLimpiar').addEventListener('click', () => {

    // borrar usuarios
    contenedor.innerHTML = "";

    // limpiar buscador
    document.getElementById('busqueda').value = "";

    // limpiar estado
    estado.textContent = "";

});