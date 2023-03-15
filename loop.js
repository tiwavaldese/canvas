alert

 const cats = ['Leopard', 'Serval', 'Juguar', 'Tigar', 'Caracal', 'Lion'];
 for(const cat of cats){
    console.log(cat);
 };

 function toUpper(Array){
    return Array.toUpperCase();
 }

 const cats1 = ['Leopard', 'Serval', 'Juguar', 'Tigar', 'Caracal', 'Lion'];
 const upperCats1 = cats1.map(toUpper);
 console.log(upperCats1);

 function lCat(cat){
    return cat.startsWith('L')
 }

 const cats2 = ['Leopard', 'Serval', 'Juguar', 'Tigar', 'Caracal', 'Lion'];
 const filtered= cats2.filter(lCat);

 console.log(filtered);

 const cats3 = ['Leopard', 'Serval', 'Juguar', 'Tigar', 'Caracal', 'Lion'];
 for(let i = 0; i<cats3.length; i++){
    console.log(cats3[i]);
 };

 const cats4 = ['Pete',  'Biggles', 'Jasmine' ];
 let myfavoriteCats= 'My cats are called ';

 for(let i = 0; i < cats4.length; i++ ) {
    if(i === cats4.length - 1){
 
 myfavoriteCats += `,and ${cats4[i]}`;
 console.log(myfavoriteCats)
 }
 else {

 
 myfavoriteCats += `${cats4[i]}`;
 console.log(myfavoriteCats)
 }
 }