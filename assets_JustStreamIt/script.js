

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('#modal');
  const openModal = document.querySelector('#openModal');
  const closeModal = document.querySelector('#closeModal');

  openModal.addEventListener('click', () => {
      modal.showModal();
  });

  closeModal.addEventListener('click', () => {
      modal.close();
  });
});




fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(response => response.json())
  .then(data => {
    const bestMovie = data.results[0]; // on récupère le premier élément du tableau "results" qui est le meilleur film

    const titleElement = document.querySelector('#best-film-title'); // on récupère l'élément HTML avec l'id "best-film-title"
    const imageElement = document.querySelector('#best-film-image');
    const descriptionElement = document.querySelector('#best-film-description');

    titleElement.textContent = bestMovie.title;  // on affiche le titre du meilleur film
    imageElement.src = bestMovie.image_url; 

    // Fetch la description du film avec son id
    fetch(`http://localhost:8000/api/v1/titles/${bestMovie.id}`)
      .then(response => response.json())
      .then(movieData => {
        // si pas de déscription, on affiche "Déscription absente"
        descriptionElement.textContent = movieData.description || "Déscription absente";
      })
      .catch(error => console.error('Error:', error));
  })
  .catch(error => console.error('Error:', error));




pour catégory mystery:
 http://localhost:8000/api/v1/titles/?genre=Mystery&sort_by=-imdb_score










// document.addEventListener('DOMContentLoaded', function () {
//     const modal = document.querySelector('#modal');
//     const closeModal = document.querySelector('#closeModal');
//     const filmDetailsContent = document.querySelector('#filmDetailsContent');
  
//     document.body.addEventListener('click', function(event) {
//         if (event.target.classList.contains('details_button')) {
//             const movieId = event.target.getAttribute('data-id');
//             if (movieId) {
//                 fetchMovieDetails(movieId);
//                 if (typeof modal.showModal === 'function') {
//                     modal.showModal();
//                 } else {
//                     alert('Modal functionality is not supported in this browser.');
//                 }
//             }
//         }
//     });
  
//     closeModal.addEventListener('click', () => {
//         if (typeof modal.close === 'function') {
//             modal.close();
//         } else {
//             alert('Modal functionality is not supported in this browser.');
//         }
//     });
  
//     function fetchMovieDetails(id) {
//         fetch(`http://localhost:8000/api/v1/titles/${id}`)
//             .then(response => response.json())
//             .then(data => {
//                 filmDetailsContent.innerHTML = `
//                     <h2>${data.title}</h2>
//                     <img src="${data.image_url}" alt="${data.title}" class="img-fluid">
//                     <p>${data.description || "Déscription absente"}</p>
//                 `;
//             })
//             .catch(error => console.error('Error:', error));
//     }
  
//     fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
//         .then(response => response.json())
//         .then(data => {
//             const bestMovie = data.results[0];
  
//             const titleElement = document.querySelector('#best-film-title');
//             const imageElement = document.querySelector('#best-film-image');
//             const descriptionElement = document.querySelector('#best-film-description');
//             const openBestFilmModal = document.querySelector('#openBestFilmModal');
  
//             titleElement.textContent = bestMovie.title;
//             imageElement.src = bestMovie.image_url;
//             openBestFilmModal.setAttribute('data-id', bestMovie.id);
  
//             fetch(`http://localhost:8000/api/v1/titles/${bestMovie.id}`)
//                 .then(response => response.json())
//                 .then(movieData => {
//                     descriptionElement.textContent = movieData.description || "Déscription absente";
//                 })
//                 .catch(error => console.error('Error:', error));
//         })
//         .catch(error => console.error('Error:', error));
//   });
  