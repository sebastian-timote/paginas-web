if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
    }

    caches.open('prueba-2');
    // caches.has('prueba-3').then(console.log);//creacion de cache
    // caches.open('cache-v1.1').then( cache => {
    //     //cache.add('clon_bbc.html');//guarda o anade esta pagina al cache
    //     cache.addAll([
    //         '/clon_bbc.html',
    //         '/css/bbc.css',
    //         '/imagenes/china.jpg'
    //     ]).then( () =>{
    //         //cache.delete('/css/style.css');//borra archivo de cache
    //         cache.put('clon_bbc.html', new Response('Hola mundo') );//cambia el contenido del archivo por un texto plano 
    //     });//guarda varios archivos en cache
    //     cache.match('/clon_bbc.html')
    //             .then( res => {
    //                 res.text().then( console.log );//toma la respuesta del cache y la imprime en consola en forma de texto
    //             });
    // });
    // caches.keys().then(Keys => {//coloco los nombres del cache en un array
    //     console.log(key);
    // });
