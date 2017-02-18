import { Departamento } from '../products';
export const departamentosQuerySet: Departamento[ ] = [
    { nombre: "Clothing", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", hero: "http://cdn.playbuzz.com/cdn/02dad71a-73d0-46ac-80ec-b2555f689d34/0e83b243-b5fc-4d89-93e3-c4ff4dd47763.jpg"},
    { nombre: "Jewelery", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", hero: "http://cdn.paper4pc.com/images/diamonds-diamond-jewelery-bokeh-bling-abstraction-abstract-sparkle-wallpaper-3.jpg"},    
    { nombre: "Kids", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", hero: "https://s-media-cache-ak0.pinimg.com/originals/d3/c2/68/d3c268f8ce6e7dbac47dea5770a77544.jpg"}, 
    { nombre: "Shoes", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", hero: "https://m.media-amazon.com/images/G/01/6pm/landing/coop/shoes/170201COOP/1._V534799631_.jpg"},
    { nombre: "Baby", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, magna in aliquam volutpat.", hero: "http://winarticles.net/wp-content/uploads/2014/03/baby-grey-colored-eyes.jpg"},
];
export const departamentosList = departamentosQuerySet.map(departamento => departamento.nombre);