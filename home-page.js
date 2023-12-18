const menu_btn = document.querySelector('.menu-button');
const mobile_nav = document.querySelector('.mobile-nav');
const responsiveWidth = 768;
const category_list_items = document.querySelectorAll('.category-list-item');
const product_card_container = document.querySelector('.product-card-continer');

//Dummy Datas
const products_of_week = {
    gaming: [
        {
            title: "g-product 1",
            price: "1300",
            img: ""
        },
        {
            title: "g-product 2",
            price: "1500",
            img: ""
        },
        {
            title: "g-product 3",
            price: "1800",
            img: ""
        },
        {
            title: "g-product 4",
            price: "900",
            img: ""
        },
    ],
    home: [
        {
            title: "h-product 1",
            price: "1300",
            img: ""
        },
        {
            title: "h-product 2",
            price: "1500",
            img: ""
        },
        {
            title: "h-product 3",
            price: "1800",
            img: ""
        },
        {
            title: "h-product 4",
            price: "900",
            img: ""
        },
    ],
    office: [
        {
            title: "office-product 1",
            price: "1300",
            img: ""
        },
        {
            title: "office-product 2",
            price: "1500",
            img: ""
        },
        {
            title: "office-product 3",
            price: "1800",
            img: ""
        },
        {
            title: "office-product 4",
            price: "900",
            img: ""
        },
    ],
    others: [
        {
            title: "others-product 1",
            price: "1300",
            img: ""
        },
        {
            title: "others-product 2",
            price: "1500",
            img: ""
        },
    ]
}

const initial_product_lists = [
    ...products_of_week.gaming,
    ...products_of_week.home,
    ...products_of_week.office,
    ...products_of_week.others
];

const removeActiveClass = () => {
    category_list_items.forEach( item => item.classList.remove('active'));
}

menu_btn.addEventListener('click', () => {
    mobile_nav.classList.toggle("mobile-nav-show");
})

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    (windowWidth > responsiveWidth) && mobile_nav.classList.remove("mobile-nav-show");
});

product_card_container.innerHTML = initial_product_lists.map( product => {
    return `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img class="product-img" src="./home-page-photos/633acd6a875a330cc667b57d-eureka-ergonomic-standing-desk-l-shaped-removebg-preview.png" alt="product-card-img">/
            </div>
            <div class="product-content">
                <p class="title">${product.title}</p>
                <p class="price">$ ${product.price}.00</p>
            </div>
        </div>
    `
}).join("");

category_list_items.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
        const clicked_category = item.dataset.category;
        let product_lists;
        if (clicked_category == "all") {
            product_lists = [
                ...products_of_week.gaming,
                ...products_of_week.home,
                ...products_of_week.office,
                ...products_of_week.others
            ]
        }
        if (clicked_category === "gaming") product_lists = [...products_of_week.gaming];
        if (clicked_category === "home") product_lists = [...products_of_week.home];
        if (clicked_category === "office") product_lists = [...products_of_week.office];
        if (clicked_category === "others") product_lists = [...products_of_week.others];

        const product_elements = product_lists.map(product => {
            return `
                <div class="product-card">
                    <div class="product-img-wrapper">
                        <img class="product-img" src="./home-page-photos/633acd6a875a330cc667b57d-eureka-ergonomic-standing-desk-l-shaped-removebg-preview.png" alt="product-card-img">/
                    </div>
                    <div class="product-content">
                        <p class="title">${product.title}</p>
                        <p class="price">$ ${product.price}.00</p>
                    </div>
                </div>
            `
        }).join("");

        product_card_container.innerHTML = product_elements;
    })
})
