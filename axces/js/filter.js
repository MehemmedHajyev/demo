const eatingContainer = document.querySelector('.eating_container');
const basketContainer = document.querySelector('.basket_container')
let product = [
    {
        id: 1,
        name: 'soup',
        img: '../../axces/eating/1.jpg',
    },
    {
        id: 2,
        name: 'soup',
        img: '../../axces/eating/2.jpg',

    }, {
        id: 3,
        name: 'soup',
        img: '../../axces/eating/3.jpg',

    }, {
        id: 4,
        name: 'soup',
        img: '../../axces/eating/4.jpg',

    }, {
        id: 5,
        name: 'spagetti',
        img: '../../axces/eating/5.jpg',

    }, {
        id: 6,
        name: 'spagetti',
        img: '../../axces/eating/6.jpg',
    }, {
        id: 7,
        name: 'spagetti',
        img: '../../axces/eating/7.jpg',
    }, {
        id: 8,
        name: 'spagetti',
        img: '../../axces/eating/8.jpg',
    }, {
        id: 9,
        name: 'beef',
        img: '../../axces/eating/9.jpg',

    }, {
        id: 10,
        name: 'beef',
        img: '../../axces/eating/10.jpg',

    }, {
        id: 11,
        name: 'beef',
        img: '../../axces/eating/11.jpg',
    }, {
        id: 12,
        name: 'beef',
        img: '../../axces/eating/12.jpg',
    }
]
let sebet = []
product.forEach(data => {
    eatingContainer.innerHTML += `
    <div class="eating_card">
    <img src="${data.img}" alt="">
    <div class="eating_card_content">
    <p class='flt_name'>${data.name}</p>
    <button onclick="add(event,${data.id})"> > Sipariş Et</button>
    </div>

    </div>
    `
})
function sebetGoster(arr) {
    arr.forEach(data => {
        basketContainer.innerHTML += `
    <div class='bascet_card'>
    <img src='${data.img}'>
    <p>${data.name}</p>
    <p>${data.count}</p>
    <p>${data.count * data.price}</p>
    <button name=artir onclick='edit()'>+</button>
    <button name=azalt onclick='edit()'>-</button>
    </div>
    `
    })
}
function add(e, id) {
    let sebetYoxla = sebet.find(data => data.id === +id)
    if (sebetYoxla) {
        // sebetYoxla.count = sebetYoxla.count + 1
        sebetYoxla.count += 1
    }
    else {
        let praductAxtar = praduct.find(data => data.id == +id)
        praductAxtar.count = 1
        sebet.push(praductAxtar)
    }
    sebetGoster(sebet)
}



/////filter

let eating_card = document.querySelectorAll('.eating_card')
let fltTitle = document.querySelectorAll('.flt_name')
function searchInp(e) {
    for (let i = 0; i < fltTitle.length; i++) {
        if (fltTitle[i].innerHTML.includes(e.target.value)) {
            eating_card[i].style.display = 'block'
        } else {
            eating_card[i].style.display = 'none'
        }
    }
}













