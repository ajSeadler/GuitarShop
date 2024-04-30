// seedData.js

const initialData = {
  categories: [
    { name: 'Electric Guitars' },
    { name: 'Acoustic Guitars' },
    { name: 'Amplifiers' },
    { name: 'Bass Guitars' }
  ],
  products: [
    {
      name: 'Gibson Les Paul Standard 60s',
      brand: 'Gibson',
      description: 'An iconic electric guitar known for its warm tone and sustain.',
      price: 2299.99,
      stock_quantity: 5,
      image_url: 'https://images.ctfassets.net/m8onsx4mm13s/5TnbfQFGO7YuWFnFyvuMFd/2cf389894ef5f3ddf41bd084d8ba981d/__static.gibson.com_product-images_USA_USA1R6524_Bourbon_Burst_LPS619B8NH1_1.jpg?w=1200&h=1200',
      categories: ['Electric Guitars']
    },
    {
      name: 'Fender Stratocaster',
      brand: 'Fender',
      description: 'A versatile electric guitar with a distinct tone and style.',
      price: 1499.99,
      stock_quantity: 10,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/M08142000001000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Martin D-28',
      brand: 'Martin',
      description: 'A legendary acoustic guitar known for its rich tone and craftsmanship.',
      price: 2999.99,
      stock_quantity: 8,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/K40776000001000-00-600x600.jpg',
      categories: ['Acoustic Guitars']
    },
    {
      name: 'Fender Stratocaster',
      brand: 'Fender',
      description: "The Fender Stratocaster stands as a quintessential icon within the realm of electric guitars, embodying a rich legacy steeped in musical history and innovation. Crafted with precision and passion by the renowned Fender Musical Instruments Corporation, the Stratocaster has etched its mark as a symbol of excellence, versatility, and enduring style. At its core, the Fender Stratocaster is a masterpiece of engineering, boasting a sleek and ergonomic design that seamlessly merges form with function. Its iconic double-cutaway body, sculpted with precision contours, not only enhances aesthetic appeal but also offers unparalleled comfort and playability, allowing musicians to effortlessly navigate the fretboard with unparalleled ease.",
      price: 1499.99,
      stock_quantity: 7,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L69975000005000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'PRS SE Custom 24',
      brand: 'PRS',
      description: 'A high-quality electric guitar with a wide range of tones.',
      price: 1099.99,
      stock_quantity: 3,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L80932000004000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Taylor 814ce',
      brand: 'Taylor',
      description: 'A premium acoustic-electric guitar with exceptional playability and sound.',
      price: 3499.99,
      stock_quantity: 4,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L78743000001000-00-600x600.jpg',
      categories: ['Acoustic Guitars']
    },
    {
      name: 'Ibanez RG550',
      brand: 'Ibanez',
      description: 'A classic shredder guitar known for its fast playability and powerful tone.',
      price: 999.99,
      stock_quantity: 8,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/K59743000003000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Epiphone Les Paul Standard',
      brand: 'Epiphone',
      description: 'A budget-friendly version of the iconic Les Paul guitar with great tone and playability.',
      price: 599.99,
      stock_quantity: 10,
      image_url: 'https://media.sweetwater.com/api/i/q-82__h-750__f-webp__ha-df96d7c7f1da6cd3__hmac-b207fad823e69c7e206a1e74f57866d5c3ad726e/images/guitars/EILS6ITNH/23111525976/23111525976-body-large.jpg.auto.webp',
      categories: ['Electric Guitars']
    },
    {
      name: 'Gretsch G5420T Electromatic',
      brand: 'Gretsch',
      description: 'A semi-hollowbody electric guitar with classic Gretsch sound and style.',
      price: 799.99,
      stock_quantity: 9,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L88823000004000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'ESP LTD EC-1000',
      brand: 'ESP',
      description: 'A versatile electric guitar suitable for various styles, from metal to blues.',
      price: 999.99,
      stock_quantity: 11,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/516629000011000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Jackson Soloist SL2',
      brand: 'Jackson',
      description: 'A high-performance electric guitar designed for shredding and lead playing.',
      price: 2399.99,
      stock_quantity: 6,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/M07589000003000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Gibson SG Standard - TV Yellow',
      brand: 'Gibson',
      description: 'A classic solid-body electric guitar known for its biting tone and playability.',
      price: 1999.99,
      stock_quantity: 8,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L54585000005000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'PRS SE Custom 22 - Semi Hollow',
      brand: 'PRS',
      description: 'A versatile electric guitar with a comfortable neck and great build quality.',
      price: 879.99,
      stock_quantity: 5,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/K58572000003000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Schecter Hellraiser C-1',
      brand: 'Schecter',
      description: 'A metal-oriented electric guitar with active pickups and fast neck.',
      price: 899.99,
      stock_quantity: 7,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/J05082000001000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Taylor 214ce',
      brand: 'Taylor',
      description: 'A mid-range acoustic-electric guitar with solid construction and balanced tone.',
      price: 1099.99,
      stock_quantity: 6,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L69529000001000-00-600x600.jpg',
      categories: ['Acoustic Guitars']
    },
    {
      name: 'Gibson ES-335',
      brand: 'Gibson',
      description: 'A versatile semi-hollowbody electric guitar favored by blues and jazz players.',
      price: 2799.99,
      stock_quantity: 4,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L73697000001000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Fender Telecaster',
      brand: 'Fender',
      description: 'A classic solid-body electric guitar known for its twangy tone and simplicity.',
      price: 1499.99,
      stock_quantity: 8,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L78119000004000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Martin HD-28',
      brand: 'Martin',
      description: 'A premium acoustic guitar with a full, rich sound and excellent projection.',
      price: 3399.99,
      stock_quantity: 3,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L40111000001000-00-600x600.jpg',
      categories: ['Acoustic Guitars']
    },
    {
      name: 'Gibson Flying V',
      brand: 'Gibson',
      description: 'An iconic electric guitar with a unique body shape and powerful tone.',
      price: 2399.99,
      stock_quantity: 6,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/M02133000001000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: ' Epiphone Casino (USA)',
      brand: 'Epiphone',
      description: 'A hollowbody electric guitar known for its warm, resonant tone and lightweight body.',
      price: 2999.99,
      stock_quantity: 1,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L76765000001000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Jackson King V KVXMG',
      brand: 'Jackson',
      description: 'A metal-oriented electric guitar with aggressive styling and powerful pickups.',
      price: 999.99,
      stock_quantity: 5,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/J16721000002000-00-600x600.jpg',
      categories: ['Electric Guitars']
    },
    {
      name: 'Fender Twin Reverb',
      brand: 'Fender',
      description: 'A classic tube amplifier known for its clean tone and lush reverb.',
      price: 1199.99,
      stock_quantity: 10,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/L63371000001000-00-600x600.jpg',
      categories: ['Amplifiers']
    },
    {
      name: 'Marshall DSL40CR',
      brand: 'Marshall',
      description: 'A versatile tube amplifier suitable for various genres, from blues to rock.',
      price: 749.99,
      stock_quantity: 12,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/K64638000000000-00-600x600.jpg',
      categories: ['Amplifiers']
    },
    {
      name: 'Orange Crush 20',
      brand: 'Orange',
      description: 'A solid-state amplifier with versatile tones and built-in effects.',
      price: 199.99,
      stock_quantity: 15,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/J16412000002000-00-600x600.jpg',
      categories: ['Amplifiers']
    },
    {
      name: 'Vox AC15C1',
      brand: 'Vox',
      description: 'A classic tube amplifier with British tone and vintage style.',
      price: 799.99,
      stock_quantity: 9,
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/J00124000001000-00-600x600.jpg',
      categories: ['Amplifiers']
    },
  ],
  orders: [
    { user_id: 1, total_price: 999.99, status: 'shipped' },
    { user_id: 2, total_price: 799.99, status: 'pending' }
  ],
  order_items: [
    { order_id: 1, product_id: 1, quantity: 1, item_price: 999.99 },
    { order_id: 2, product_id: 2, quantity: 1, item_price: 799.99 }
  ],
  reviews: [
    { product_id: 1, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 2, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 3, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 4, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 5, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 6, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 7, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 8, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 9, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 10, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 11, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 12, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 13, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 14, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 15, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 16, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 17, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 18, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 19, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 20, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
    { product_id: 21, user_id: 1, rating: 5, comment: 'Great guitar! Love it.' },
    { product_id: 22, user_id: 2, rating: 4, comment: 'Nice acoustic guitar, good sound quality.' },
  ],
};

module.exports = initialData;
