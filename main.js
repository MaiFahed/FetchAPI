fetch('https://www.anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(function (data) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let row of data) {
      out += `
       <tr>
       <td>${row.url}</td>
       <td>${row.name}</td>
       <td>${row.isbn}</td>
       <td>${row.authors}</td>
       <td>${row.numberOfPages}</td>
       <td>${row.publisher}</td>
       <td>${row.country}</td>
       <td>${row.mediaType}</td>
       <td>${row.released}</td>
       </tr>
      `;
    }
    placeholder.innerHTML = out;
  })
  .catch(error => console.log(error));