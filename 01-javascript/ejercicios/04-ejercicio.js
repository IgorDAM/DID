async function getUppercaseTitlesByUser(userId = 1) {
    // 1) fetch posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);//Comprobar que la respuesta es correcta
    // 2) json
    const posts = await response.json(); //Se coloca await para esperar a que se resuelva la promesa
    // 3) filter por userId
    const filtrados = posts.filter(post => post.userId === userId);//Se usa filter para obtener solo los posts del usuario con userId 1
    // 4) map a títulos en mayúsculas
    const tituloMayusculas = filtrados.map((f) => ({...f, title: f.title.toUpperCAse()}));//Se usa map para transformar los títulos a mayúsculas
    console.log(tituloMayusculas);//Se imprimen los títulos en mayúsculas
}

getUppercaseTitlesByUser()

//----------------------------------------------------------------

async function totalElectronics() {
  // GET https://fakestoreapi.com/products
    const response = await fetch('https://fakestoreapi.com/products'); //Se coloca await para esperar a que se resuelva la promesa
    console.log(response);//Comprobar que la respuesta es correcta
    const productos = await response.json(); //Se pasa la respuesta a json
    console.log(productos);//Comprobar que los datos son correctos
   
    // filter por category === 'electronics'
    const electronica = productos.filter(producto => producto.category === 'electronics');//Se usa filter para obtener solo los productos de la categoría 'electronics'
    console.log(electronica);//Comprobar que los datos son correctos

    // reduce sumando price
    const total = electronica.reduce((acc, producto) => acc + producto.price, 0);//Se usa reduce para sumar los precios de los productos de la categoría 'electronics'
}

totalElectronics() //Llamada a la función
console.log(total);//Imprime el total de los productos de la categoría 'electronics' 

//----------------------------------------------------------------

async function usersWithPostCount() {
  // Promise.all([fetch users, fetch posts])
    const [usersResponse, postsResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts')
    ]); //Se usa Promise.all para hacer dos fetch en paralelo

    const users = await usersResponse.json(); //Se pasa la respuesta de usuarios a json
    const posts = await postsResponse.json(); //Se pasa la respuesta de posts a json


  // Para cada usuario, cuenta cuántos posts tiene
    const usersWithCount = users.map(user => {
        const postsCount = posts.filter(post => post.userId === user.id).length;
        //Se usa filter para contar los posts de cada usuario.Se usa length para obtener el número de posts

  // Devuelve [{ userName, postsCount }] ordenado por postsCount desc
        return { userName: user.name, postsCount };}).sort((a, b) => b.postsCount - a.postsCount);
    //Se usa sort para ordenar los usuarios por número de posts de forma descendente

    return usersWithCount;
   
   usersWithPostCount() //Llamada a la función
         console.log(usersWithCount);//Se imprimen los usuarios con el número de posts
}

//----------------------------------------------------------------

async function cleanComments() {
    // GET /comments
    const response = await fetch('https://jsonplaceholder.typicode.com/comments'); //Se coloca await para esperar a que se resuelva la promesa
  
    // filter body includes 'qui' (case-insensitive)
    const comments = await response.json(); //Se pasa la respuesta a json
    const filtrados = comments.filter(comment => comment.body.toLowerCase().includes('qui'));
    //Se usa filter para obtener solo los comentarios que contienen la palabra 'qui' (sin importar mayúsculas o minúsculas)

    // map: email a minúsculas
    const emailsMinusculas = filtrados.map((f) => ({...f, email: f.email.toLowerCase()}));
    //Se usa map para transformar los emails a minúsculas
  
    // sort por postId, luego email
    const ordenados = emailsMinusculas.sort((a, b) => a.postId - b.postId || a.email.localeCompare(b.email));
    //Se usa sort para ordenar los comentarios por postId y luego por email
    //el a.postId - b.postId ordena por postId y el a.email.localeCompare(b.email) ordena por email si los postId son iguales

    return ordenados;

    cleanComments() //Llamada a la función
    console.log(ordenados);//Se imprimen los comentarios filtrados, transformados y ordenados

}