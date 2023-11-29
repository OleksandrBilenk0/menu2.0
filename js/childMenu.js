const menu = [
    // Сніданки
    {
        id: 1,
        title: "Вівсянка з пармезаном",
        category: "Сніданки",
        price: 75,
        img: "./img/01сніданки/0101.png",
        desc: `Вівсяні пластівці відварені на куриному бульйоні (за бажанням, можна на воді), додається вершкове масло та тертий пармезан.`,
    },
    {
        id: 1,
        title: "Скрембл з прошутто",
        category: "Сніданки",
        price: 90,
        img: "./img/01сніданки/0106.png",
        desc: `Ніжна глазунья в поєднанні зі справжнів італійським прошутто та сіжими томатами .`,
    },
    // Антипасті
    {
        id: 2,
        title: "Сирна антипасті",
        category: "Антипасті",
        price: 229,
        img: "./img/02антипасті/0201.png",
        desc: `Сир пармезан, сир брі, сир горгонзола , моцарела баффало ,оливки, каперси , виноград, горіх грецький, мед, джем.`,
    },
    {
        id: 2,
        title: "М'ясна антипасті",
        category: "Антипасті",
        price: 305,
        img: "./img/02антипасті/0202.png",
        desc: `Сальтичон , Парма, Прошутто, Чорізо, томати в'ялені, маслини , каперси ,грінки , томати чері.`,
    },
    
    // Закуски
    {
        id: 4,
        title: "Карпачо з телятини",
        category: "Закуски",
        price: 235,
        img: "./img/soon1.png",
        desc: `Італійська страва приготована виключно з відбірного сирого м'яса телятини . Поливається медово-гірчичним соусом , руколла та пармезан .За бажанням можна додати грінки. `,
    },
    {
        id: 4,
        title: "Карпачо з лосося",
        category: "Закуски",
        price: 295,
        img: "./img/soon1.png",
        desc: `Філе лосося попередньо поливається оливковою олією, тертий пармезан , руколла , каперси . За бажанням можна додати грінки.`,
    },    
];

// Загружаем элементы при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  // Функция для отображения элементов меню
  function displayMenuItems(menuItems) {
    const menuSection = document.querySelector(".section-center");
    const menuHTML = menuItems.map(function (menuItem) {
      return `
        <article class="menu-item">
          <img src="${menuItem.img}" alt="${menuItem.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">₴${menuItem.price}</h4>
            </header>
            <p class="item-text">${menuItem.desc}</p>
          </div>
        </article>
      `;
    });
  
    // Преобразуем массив HTML в строку и добавляем в HTML-код
    menuSection.innerHTML = menuHTML.join("");
  }
  
  // Функция для отображения и фильтрации кнопок меню
  function displayMenuButtons() {
    const categories = ["Повне меню"]; // Создаем массив категорий, начинаем с "all"
    const menuButtons = document.querySelector(".btn-container");
  
    // Проходим по элементам меню и добавляем уникальные категории в массив
    menu.forEach(function (menuItem) {
      if (!categories.includes(menuItem.category)) {
        categories.push(menuItem.category);
      }
    });
  
    // Создаем кнопки категорий
    const categoryButtons = categories.map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");

    
    
  
    // Добавляем кнопки категорий в HTML
    menuButtons.innerHTML = categoryButtons;
  
    // Добавляем обработчики событий для кнопок фильтрации
    const filterButtons = menuButtons.querySelectorAll(".filter-btn");
  
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        const category = event.currentTarget.dataset.id;
  
        if (category === "Повне меню") {
          // Если выбрана категория "all", показываем все элементы меню
          displayMenuItems(menu);
        } else {
          // В противном случае, фильтруем элементы меню по категории
          const filteredMenu = menu.filter(function (menuItem) {
            return menuItem.category === category;
          });
  
          displayMenuItems(filteredMenu);
        }
      });
    });
  }

  