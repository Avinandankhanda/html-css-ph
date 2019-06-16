// let hotels=[
//     {
//         name:'spa',
//         cover_image:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:1000,
//         no_of_rooms:200,
//     },
//     {
//         name:'bed room',
//         cover_image:"https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:10,
//         no_of_rooms:1,
//     },
//     {
//         name:'bath room',
//         cover_image:"https://images.unsplash.com/photo-1545060894-bd408b72adf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:10,
//         no_of_rooms:1,
//     },
//     {
//         name:'pool',
//         cover_image:"https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:10,
//         no_of_rooms:1,
//     },
//     {
//         name:'eco friendly',
//         cover_image:"https://images.unsplash.com/photo-1465670277367-f9c604766898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:10,
//         no_of_rooms:1,
//     },
//     {
//         name:'dining table',
//         cover_image:"https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4080&q=80",
//         price_per_night:10,
//         no_of_rooms:1,
//     },
// ];
// let hotelsHtml = '';
// hotels.forEach((hotel,index)=>{
//     hotelsHtml += `<div class="col-xs-4" id="image2">
//                         <img src=${hotel.cover_image} alt="${hotel.name}" id="${index}">
//                     </div>`;
// });
// const element = document.getElementById('img2l');
// element.addEventListener('click',()=>{
//     const id = this.attributes.id;
//     let clickedhotel={}
//     hotels.forEach((hotel,index)=>{
//         if(index==id){
//             clickedhotel=hotel;
//         }
//     });
//     alert(clickedhotel.name)

// })
// element.innerHTML = hotelsHtml;
