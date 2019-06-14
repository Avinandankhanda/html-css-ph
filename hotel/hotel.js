let hotels=[
    {
        name:'spa',
        cover_image:"https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/03/05/9b/mgm-grand.rend.hgtvcom.581.436.suffix/1491580846278.jpeg",
        price_per_night:1000,
        no_of_rooms:200,
    },
    {
        name:'bed room',
        cover_image:"http://amarmidnapore.com/wp-content/uploads/2018/10/NIRMAL-HOTEL.jpg",
        price_per_night:10,
        no_of_rooms:1,
    },
    {
        name:'bath room',
        cover_image:"https://content3.jdmagicbox.com/comp/midnapore/a5/9999p3222.3222.170929162319.u9a5/catalogue/green-park-bar-and-restaurants-jhargram-midnapore-restaurants-00b502emp9.jpg",
        price_per_night:10,
        no_of_rooms:1,
    },
    {
        name:'pool',
        cover_image:"http://www.jhargramtourism.com/hotels/aranyasundari01.jpg",
        price_per_night:10,
        no_of_rooms:1,
    },
    {
        name:'eco friendly',
        cover_image:"http://www.jhargramtourism.com/hotels/aranyasundari01.jpg",
        price_per_night:10,
        no_of_rooms:1,
    },
    {
        name:'dining table',
        cover_image:"http://www.jhargramtourism.com/hotels/aranyasundari01.jpg",
        price_per_night:10,
        no_of_rooms:1,
    },
];
let hotelsHtml = '';
hotels.forEach((hotel,index)=>{
    hotelsHtml += `<div class="col-xs-4" id="image2">
                        <img src=${hotel.cover_image} alt="${hotel.name}" id="${index}">
                    </div>`;
});
const element = document.getElementById('img2l');
element.addEventListener('click',()=>{
    const id = this.attributes.id;
    let clickedhotel={}
    hotels.forEach((hotel,index)=>{
        if(index==id){
            clickedhotel=hotel;
        }
    });
    alert(clickedhotel.name)

})
element.innerHTML = hotelsHtml;
