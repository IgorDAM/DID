# Ejercicios: `fetch` + Promesas + `async/await` + métodos de arrays

## 1) Filtra y transforma posts

**Enunciado:** Descarga los posts y quédate solo con los de
`userId = 1`. Devuelve un array de títulos en mayúsculas.

``` js
async function getUppercaseTitlesByUser(userId = 1) {
    // 1) fetch posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    // 2) json
    const posts = await response.json(); 
    // 3) filter por userId
    const filtrados = posts.filter(post => post.userId === userId);
    // 4) map a títulos en mayúsculas
    const tituloMayusculas = filtrados.map((f) => ({...f, title: f.title.toUpperCAse()}));
    console.log(tituloMayusculas);
}

getUppercaseTitlesByUser()
```
### Usé fetch para obtener posts.
### Filtré por userId.
### Mapeé para poner títulos en mayúsculas.
------------------------------------------------------------------------

## 2) Suma de precios (reduce)

**Enunciado:** Descarga los productos de Fake Store API y calcula el
**precio total** de los productos con `category = 'electronics'`.

``` js
async function totalElectronics() {
  // GET https://fakestoreapi.com/products
    const response = await fetch('https://fakestoreapi.com/products'); 
    console.log(response);
    const productos = await response.json(); 
    console.log(productos);
   
  // filter por category === 'electronics'
    const electronica = productos.filter(producto => producto.category === 'electronics');
    console.log(electronica);

  // reduce sumando price
    const total = electronica.reduce((acc, producto) => acc + producto.price, 0);
}
totalElectronics() 
console.log(total); 
```
### Obtuve productos de FakeStoreAPI.
### Filtré por categoría 'electronics'.
### Sumé los precios con reduce.
------------------------------------------------------------------------

## 3) Combinación con `Promise.all`

**Enunciado:** Descarga **usuarios** y **posts** en paralelo. Devuelve
una lista de objetos `{ userName, postsCount }`, ordenada
descendentemente por `postsCount`.

``` js
async function usersWithPostCount() {
  // Promise.all([fetch users, fetch posts])
    const [usersResponse, postsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts')
    ]); 

    const users = await usersResponse.json(); 
    const posts = await postsResponse.json();

  // Para cada usuario, cuenta cuántos posts tiene
    const usersWithCount = users.map(user => {
        const postsCount = posts.filter(post => post.userId === user.id).length;
        
 // Devuelve [{ userName, postsCount }] ordenado por postsCount desc
        return { userName: user.name, postsCount };}).sort((a, b) => b.postsCount - a.postsCount);
   
     return usersWithCount;
   
   usersWithPostCount() 
         console.log(usersWithCount);
}
```
### Usé Promise.all para hacer dos fetch en paralelo.
### Conté los posts por usuario.
### Ordené por cantidad de posts descendente.


## 4) Pipeline: buscar, filtrar, normalizar, ordenar

**Enunciado:** De JSONPlaceholder, toma **comments**, filtra los que
contengan la palabra `'qui'` en `body`, normaliza `email` a minúsculas,
y ordénalos por `postId` asc y después por `email` asc.

``` js
async function cleanComments() {
    // GET /comments
    const response = await fetch('https://jsonplaceholder.typicode.com/comments'); 
  
    // filter body includes 'qui' (case-insensitive)
    const comments = await response.json();
    const filtrados = comments.filter(comment => comment.body.toLowerCase().includes('qui'));
    

    // map: email a minúsculas
    const emailsMinusculas = filtrados.map((f) => ({...f, email: f.email.toLowerCase()}));
    
  
    // sort por postId, luego email
    const ordenados = emailsMinusculas.sort((a, b) => a.postId - b.postId || a.email.localeCompare(b.email));
   

    return ordenados;

    cleanComments() 
    console.log(ordenados);

}
```
### Obtuve comments de JSONPlaceholder.
### Filtré los que contienen 'qui' en el body (case-insensitive).
### Mapeé para poner emails en minúsculas.
### Ordené por postId y luego por email.
