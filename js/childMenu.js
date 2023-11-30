const menu2 = [
    // Перші страви
    {
        id: 18,
        title: "Крем-суп з броколі",
        category: "Перші страви",
        price: 80,
        img: "./img/01сніданки/0101.png",
        desc: `Вівсяні пластівці відварені на куриному бульйоні (за бажанням, можна на воді), додається вершкове масло та тертий пармезан.`,
    },
    {
        id: 18,
        title: "Бульйон з фрикадельками",
        category: "Перші страви",
        price: 70,
        img: "./img/01сніданки/0106.png",
        desc: `Ніжна глазунья в поєднанні зі справжнів італійським прошутто та сіжими томатами .`,
    },
    {
        id: 18,
        title: "Курячі стріпси",
        category: "Перші страви",
        price: 79,
        img: "./img/02антипасті/0201.png",
        desc: `Сир пармезан, сир брі, сир горгонзола , моцарела баффало ,оливки, каперси , виноград, горіх грецький, мед, джем.`,
    },
    // Основні страви
    {
        id: 19,
        title: "Патато маус",
        category: "Основні страви",
        price: 119,
        img: "./img/02антипасті/0202.png",
        desc: `Сальтичон , Парма, Прошутто, Чорізо, томати в'ялені, маслини , каперси ,грінки , томати чері.`,
    },
    {
        id: 19,
        title: "Міні-бургер з куркою та картоплею фрі",
        category: "Основні страви",
        price: 175,
        img: "./img/soon1.png",
        desc: `Італійська страва приготована виключно з відбірного сирого м'яса телятини . Поливається медово-гірчичним соусом , руколла та пармезан .За бажанням можна додати грінки. `,
    },
    {
        id: 19,
        title: "Метелики з індичкою",
        category: "Основні страви",
        price: 95,
        img: "./img/soon1.png",
        desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 19,
      title: "Куряче філе з картоплею фрі",
      category: "Основні страви",
      price: 95,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },    
    // Міні піца
    {
      id: 20,
      title: "Пепероні",
      category: "Міні піца",
      price: 145,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 20,
      title: "Піца Фрі",
      category: "Міні піца",
      price: 140,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 20,
      title: "Сирна піца",
      category: "Міні піца",
      price: 140,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    // Напої
    {
      id: 21,
      title: "Сік в асортименті",
      category: "Напої",
      price: 25,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 21,
      title: "Яблучний сауер",
      category: "Напої",
      price: 75,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 21,
      title: "Молочний коктейль",
      category: "Напої",
      price: 95,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 21,
      title: "Мохіто",
      category: "Напої",
      price: 93,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
    {
      id: 21,
      title: "Какао з маршмелоу",
      category: "Напої",
      price: 70,
      img: "./img/soon1.png",
      desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },
];

window.addEventListener("DOMContentLoaded", function () {
  // Здесь можно вызвать функции для отображения меню, если необходимо
  displayMenu2Items(menu2);
  displayMenu2Buttons();
});

const toggleMenu2Btn = document.getElementById('toggleMenu2Btn');
const menu2Section = document.getElementById('menu2Section');

toggleMenu2Btn.addEventListener('click', function () {
  menu2Section.style.display = (menu2Section.style.display === 'none') ? 'block' : 'none';
});

// функция для отображения элементов меню
function displayMenu2Items(menu2Items) {
  const menu2Section = document.querySelector('.section2-center');
  const menu2HTML = menu2Items.map(function (menu2Item) {
    return `
      <article class="menu2-item">
        <img src="${menu2Item.img}" alt="${menu2Item.title}" class="photo2" />
        <div class="item2-info">
          <header>
            <h4>${menu2Item.title}</h4>
            <h4 class="price2">₴${menu2Item.price}</h4>
          </header>
          <p class="item2-text">${menu2Item.desc}</p>
        </div>
      </article>
    `;
  });

  // Преобразуем массив HTML в строку и добавляем в HTML-код секции меню
  menu2Section.innerHTML = menu2HTML.join("");
}

// Ваша функция для отображения и фильтрации кнопок меню
function displayMenu2Buttons() {
  const categories2 = ["Повне меню"];
  const menu2Buttons = document.querySelector(".menu2btn-container");

// Проходим по элементам меню и добавляем уникальные категории в массив
menu2.forEach(function (menu2Item) {
  if (!categories2.includes(menu2Item.category)) {
    categories2.push(menu2Item.category);
  }
});

  // Создаем кнопки категорий
  const category2Buttons = categories2.map(function (category) {
    return `<button class="filter2-btn" type="button" data-id="${category}">${category}</button>`;
  }).join("");

  // Добавляем кнопки категорий в HTML
  menu2Buttons.innerHTML = category2Buttons;

  // Добавляем обработчики событий для кнопок фильтрации
  const filter2Buttons = menu2Buttons.querySelectorAll(".filter2-btn");

  filter2Buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;

      if (category === "Повне меню") {
        // Если выбрана категория "all", показываем все элементы меню
        displayMenu2Items(menu2);
      } else {
        // В противном случае, фильтруем элементы меню по категории
        const filtered2Menu = menu2.filter(function (menu2Item) {
          return menu2Item.category === category;
        });

        displayMenu2Items(filtered2Menu);
      }
    });
  });
}
