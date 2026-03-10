# Dashboard de Usuarios – Práctica 3.2

## Descripción

Este proyecto corresponde a la **Práctica 2 de Sitios Web Dinámicos**, donde se implementa un dashboard que obtiene información de usuarios desde una API pública utilizando **Fetch API y JavaScript asíncrono (async/await)**.El sistema permite cargar usuarios, visualizar sus publicaciones y filtrarlos mediante una búsqueda en tiempo real.

## API utilizada

Los datos se obtienen desde la API pública:

https://jsonplaceholder.typicode.com

Endpoints utilizados:

* `/users` → obtener lista de usuarios
* `/posts?userId=` → obtener publicaciones de un usuario

---

## Funcionalidades

* Cargar usuarios desde una API externa.
* Renderizar tarjetas de usuarios dinámicamente en el DOM.
* Ver publicaciones de cada usuario.
* Filtro de búsqueda en tiempo real.
* Manejo de estados (cargando, éxito y error).
* Uso de `async/await` para peticiones asíncronas.

---

## Estructura del proyecto

```
dashboard-proyecto
│
├── dashboard.html
├── dashboard.js
├── api.js
├── estilos.css
└── README.md
```

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio

```
git clone URL_DEL_REPOSITORIO
```

2. Abrir la carpeta del proyecto.

3. Ejecutar el archivo `dashboard.html` con **Live Server** es una extencion o en un navegador.

4. Presionar el botón **Cargar Usuarios** para obtener los datos de la API.

---

## ALUMNO

Juan Carlos Nicolas Cortez
