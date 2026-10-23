

export const Collection =[
    {
 id:103,
 img:"https://image.made-in-china.com/202f0j00EGtqYwTaosrQ/Custom-Logo-Winter-Waterproof-Windbreaker-Outdoor-Factory-Working-Mens-Padded-Down-Puffer-Jacket.webp",
 name:"jacket waterproof",
 price:2000,
 category:"clothes",
 color:"black",
 stock:10,
 description:"جاكيت عصري وجميل مقاوم للمطر والبرد"
    },
{
id:104,
img:"https://image.made-in-china.com/202f0j00lnBvgtjHyJqO/Wholesale-Custom-Print-Plain-Blank-100-Cotton-T-Shirt-Dozens-Color-and-Size-Cheap-Stock.webp",
name:"t-shirt",
price:350,
category:"clothes",
color:"red",
stock:8,
description:"تيشرت حلو وخفيف في الحركة واللبس"
},
{

    id:105,
    img:"https://www.reebokshoes.us/wp-content/uploads/2026/05/100248456_TPP_eCom.jpg",
    name:"flat-shoes",
    price:400,
    category:"shoeses",
    color:"white",
    stock:20,
    description:"كوتشي ابيض فلات للخروجات يا جميل "
},
{

    id:106,
    img:"https://image.made-in-china.com/202f0j00AtgCyolnwwpB/Max-Tn-Air-Running-Shoes-for-Men-and-Women.webp",
    name:"sneakers",
    price:700,
    category:"shoeses",
    color:"black",
    stock:7,
    description:"كوتشي اسنيكرز تصميم مريح وعصري"
},
{
id:107,
img:"https://image.made-in-china.com/202f0j00IZLkgKWsAluo/Custom-Men-s-Vintage-Solid-Color-Streetwear-Pullover-Hoodie.webp",
name:"sweatshirt",
price:250,
category:"clothes",
color:"white",
stock:5,
description:"سويت شيرت ابيض شيك"
}

];


export function formatPrice(value){
    return `${value.toLocaleString("ar-EG")}جنية`;
}