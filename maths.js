const products = [
    {id:0, name:"xiomi phone one night", price: 21000},
    {id:1, name:"iphone", price: 78000},
    {id:2, name:"Mac book air", price: 10000},
    {id:3, name:"lenovo yoga laptop", price: 21000},
    {id:4, name:"Samsung phone note 7", price: 21000},
    {id:5, name:"Nokia old age phone gone", price: 21000},
    {id:6, name:"Dell inspiron Laptop", price: 21000},
    {id:7, name:"Phone one", price: 21000}

];

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;

}

const result = matchProducts(products,'Phone');
console.log(result);