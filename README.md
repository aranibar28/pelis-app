# Pelisplus - Angular 13+

## Estructura de la aplicación:

    ng g m components
    ng g m pipes
    ng g m pages
    ng g m appRouting --flat
    
    ng g c pages/home -is --skip-tests
    ng g c pages/movie -is --skip-tests
    ng g c pages/search -is --skip-tests

    ng g s services/movies
    

## Flujo de Trabajo

- Se define las interfaces de la API para luego exportarlo, utilizar Quicktype.
- En `movies.services.ts` importar: HttpClient, Observable y CarteleraResponse. Luego definir la clase getCartelera()
- Implementar enrutamiento


## Tools:

- https://app.quicktype.io/
- https://www.themoviedb.org/
- https://developers.themoviedb.org/3/movies/get-now-playing