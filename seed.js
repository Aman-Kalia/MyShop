const Product = require('./models/product');



const products = [
    {
        name: 'Iphone 11',
        price: 100000,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Ipad',
        price: 40000,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Macbook Pro',
        price: 89000,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Drones',
        price: 99900,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Sports Shoes',
        price: 1000,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Nike Shoes',
        price: 2000,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Jeans',
        price: 899,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'HP Envy',
        price: 49900,
        desc: "HP Envy is a Windows 10 laptop with a 17.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM. The HP Envy packs 1TB of HDD storage. Graphics are powered by Nvidia GeForce GTX 850M.",
        img:'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHAlMjBsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Dell XPS 15',
        price: 79900,
        desc: "Dell XPS 15 is a Windows 10 Professional laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i5 processor and it comes with 4GB of RAM. The Dell XPS 15 packs 256GB of SSD storage.",
        img:'https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Mobile Covers',
        price: 499,
        desc: "It protects the whole body of the mobile phone from exterior damage and also protects it against all sorts of scratches or nicks that might get onto its body.",
        img:'https://media.istockphoto.com/photos/pile-of-multicolored-plastic-back-covers-for-mobile-phone-choice-of-picture-id1288663488?b=1&k=20&m=1288663488&s=170667a&w=0&h=YM8cozrS_7ZkolFSXPek1Nd_z90Mu14vbSiESpIQ10A='
    },  
    {
        name: 'T-shirt',
        price: 799,
        desc: "A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. ",
        img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },  
    {
        name: 'Bedsheets',
        price: 1999,
        desc: "The most important characteristics of the best luxury sheets include cooling capability, softness, durability and health benefits. A wide choice of colors and styles are also part of what makes sheets luxurious.",
        img:'https://images.unsplash.com/photo-1629079447930-9ff0af14385e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZCUyMHNoZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'JBL Speaker',
        price: 499,
        desc: " JBL speaker is one of the wireless options offered by the reputed brand amongst other electronic instruments like sports headphones, soundbars, studio monitors, controllers, headphones, etc. ... With up to 20,000 mAh rechargeable battery power in some speakers, you can play music for as long as 24 hours.",
        img:'https://images.unsplash.com/photo-1561930661-20c9650e3e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amJsJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },  
    {
        name: 'Office Chairs',
        price: 6990,
        desc: "An office chair, or desk chair, is a type of chair that is designed for use at a desk in an office. It is usually a swivel chair, with a set of wheels for mobility and adjustable height. ",
        img:'https://images.unsplash.com/photo-1589779256250-a8743f78f4af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }, 
    {
        name: 'Toys',
        price: 499,
        desc: "Toys that can be played with in a multitude of ways help your child's brain expand and get them thinking in narratives. This, in turn, helps them to see the world more broadly.",
        img:'https://media.istockphoto.com/photos/collection-of-different-toys-on-wooden-table-picture-id1322274556?b=1&k=20&m=1322274556&s=170667a&w=0&h=KMtQ3_UG6o2EF-2XcEDs0FSH8SocMVv3ifmJvR8p5rM='
    }, 
    {
        name: 'Helmet',
        price: 1399,
        desc: "Helmets create an additional layer for the head and thus protect the wearer from some of the more severe forms of traumatic brain injury. A helmet aims to reduce the risk of serious head and brain injuries by reducing the impact of a force or collision to the head.",
        img:'https://images.unsplash.com/photo-1596688995074-0a30cef97752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhlbG1ldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }, 
];


const seedDB = async () => {
    
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');
}

module.exports = seedDB;