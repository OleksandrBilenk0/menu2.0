// Related Items
const menu = [
    // Сніданки
    {
        id: 1,
        title: "Perfecto сніданок",
        category: "Сніданки",
        price: "₴260",
        img: "./img/01сніданки/0101.png",
        desc: ``,
    },
    
    {
        id: 1,
        title: "Пьядіна з шинкою та сиром",
        category: "Сніданки",
        price: "₴295",
        img: "./img/01сніданки/0106.png",
        desc: ``,

    },
    {
        id: 1,
        title: "Пьядіна з креветкою та авокадо",
        category: "Сніданки",
        price: "₴350",
        img: "./img/01сніданки/0106.png",
        desc: ``,

    },
    {
        id: 1,
        title: "Яйця пашот-сюпрем з лососем",
        category: "Сніданки",
        price: "₴320",
        img: "./img/01сніданки/0107.png",
        desc: ``,
    },
    {
        id: 1,
        title: "Фрітата з овочами",
        category: "Сніданки",
        price: "₴265",
        img: "./img/01сніданки/0104.png",
        desc: ``,
    },
    

    // Антипасті
    {
        id: 2,
        title: "Сирна антипасті <br> (300г.)",
        category: "Антипасті",
        price: "₴340",
        img: "./img/02антипасті/0201.png",
        desc: ``,
    },
    {
        id: 2,
        title: "М'ясна антипасті <br> (270г.)",
        category: "Антипасті",
        price: "₴380",
        img: "./img/02антипасті/0202.png",
        desc: ``,
    },
    
    // Брускета-бар
    {
        // 03брускета-бар/0306.png
        id: 3,
        title: "З креветками <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴110",
        img: "./img/soon1.png",
        desc: ``,
    },
    {
        id: 3,
        title: "З ростбіфом <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴110",
        img: "./img/03брускета-бар/0302.png",
        desc: ``,
    },
    {
        id: 3,
        title: "З лососем <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴110",
        img: "./img/03брускета-бар/0303.png",
        desc: ``,
    },
    {
        id: 3,
        title: "З прошутто <br> (1шт.)",
        category: "Брускета-бар",
        price: "₴110",
        img: "./img/03брускета-бар/0304.png",
        desc: ``,
    },

    // Закуски
    {
        id: 4,
        title: "Вітелло-Тонато <br> (200г.)",
        category: "Закуски",
        price: "₴310",
        img: "./img/04закуски/0403.png",
        desc: ``,
    },
    {
        id: 4,
        title: "Карпачо з телятини <br> (90/30/15г.)",
        category: "Закуски",
        price: "₴350",
        img: "./img/04закуски/0401.png",
        desc: `Італійська страва приготована виключно з відбірного сирого м'яса телятини. Поливається медово-гірчичним соусом, руколла та пармезан. За бажанням можна додати грінки. `,
    },
    {
        id: 4,
        title: "Карпачо з лосося <br> (90/30/15г.)",
        category: "Закуски",
        price: "₴310",
        img: "./img/04закуски/0402.png",
        desc: `Філе лосося попередньо полите оливковою олією, тертий пармезан, руколла, каперси. За бажанням можна додати грінки.`,
    },
    {
        id: 4,
        title: "Профітролі з паштетом <br> (150/50г.)",
        category: "Закуски",
        price: "₴280",
        img: "./img/04закуски/0403.png",
        desc: ``,
    },
    // Салати
    {
        id: 5,
        title: "Салат з телятиною <br> (300г.)",
        category: "Салати",
        price: "₴330",
        img: "./img/05салати/0501.png",
        desc: ``,
    },
    {
        id: 5,
        title: "Цезар з куркою та крамблом з бекону <br> (280г.)",
        category: "Салати",
        price: "₴295",
        img: "./img/05салати/0502.png",
        desc: ``,
    },
    {
        id: 5,
        title: "Цезар з лососем <br> (280г.)",
        category: "Салати",
        price: "₴315",
        img: "./img/05салати/0509.png",
        desc: `Мікс салату, соус Цезар, томати, яйця перепелині, лосось смажений на грилі, тости, пармезан.`,
    },
    {
        id: 5,
        title: "З пармою, сиром брі та персиком <br> (280г.)",
        category: "Салати",
        price: "₴350",
        img: "./img/05салати/0503.png",
        desc: ``,
    },
    {
        id: 5,
        title: "З креветками та авокадо <br> (280г.)",
        category: "Салати",
        price: "₴335",
        img: "./img/05салати/0505.png",
        desc: `Авокадо, смажена креветка ,мікс салату,томати чері, заправка “Оливково-лимонна”.`,
    },
    {
        id: 5,
        title: "Зі свининою та хрустким сиром камамбер <br> (280г.)",
        category: "Салати",
        price: "₴295",
        img: "./img/05салати/0510.png",
        desc: `Свинина, цукіні, печериці, цибуля, томати, пармезан, соус, зелень.`,
    },
    {
        id: 5,
        title: "Класичний грецький салат <br> (280г.)",
        category: "Салати",
        price: "₴285",
        img: "./img/05салати/0508.png",
        desc: `Томати, огірок, моцарела, авокадо, соус, зелень.`,
    },
    {
        id: 5,
        title: "Теплий з печінкою та карамелізованлю грушею <br> (280г.)",
        category: "Салати",
        price: "₴285",
        img: "./img/05салати/0508.png",
        desc: ``,
    },
    {
        id: 5,
        title: "Зі слабосоленим лососем та імбирем <br> (280г.)",
        category: "Салати",
        price: "₴315",
        img: "./img/05салати/0508.png",
        desc: ``,
    },
    {
        id: 5,
        title: "Салат з морепродуктами <br> (300г.)",
        category: "Салати",
        price: "₴430",
        img: "./img/05салати/0508.png",
        desc: ``,
    },
    {
        id: 5,
        title: "Салат з овочами гриль <br> (280г.)",
        category: "Салати",
        price: "₴295",
        img: "./img/05салати/0508.png",
        desc: ``,
    },
    // Гарячі закуски
    {
        id: 6,
        title: "Рибні палички <br> (150/50г.)",
        category: "Гарячі закуски",
        price: "₴180",
        img: "./img/06гаряче/0601.png",
        desc: `Філе риби "Минтай" обсмажене в паніровці та великій кількості масла . Подаються з соусом "Тар-тар". В одній порції 5 паличок.`,
    },
    {
        id: 6,
        title: "Курячі крильця під соусом BBQ <br> (500г.)",
        category: "Гарячі закуски",
        price: "₴285",
        img: "./img/06гаряче/0602.png",
        desc: ``,
    },
    {
        id: 6,
        title: "Запечений камамбер з медом та ягодами <br> (200г.)",
        category: "Гарячі закуски",
        price: "₴280",
        img: "./img/06гаряче/0607.png",
        desc: ``,
    },
    {
        id: 6,
        title: "Запечений камамбер з часником та травами <br> (200г.)",
        category: "Гарячі закуски",
        price: "₴280",
        img: "./img/06гаряче/0603.png",
        desc: ``,
    },
    {
        id: 6,
        title: "Цибулеві кільця <br> (180г.)",
        category: "Гарячі закуски",
        price: "₴160",
        img: "./img/06гаряче/0604.png",
        desc: ``,
    },
    {
        id: 6,
        title: "Креветка у вершково-часниковому соусі з чіабатою <br> (200/30г.)",
        category: "Гарячі закуски",
        price: "₴395",
        img: "./img/06гаряче/0605.png",
        desc: `Баклажани, томати, сир "Моцарела", сир "Пармезан",  соус "Песто" власного виробництва, базилік.`,
    },
    {
        // 06гаряче/0606.png
        id: 6,
        title: "Сир фрі <br> (200/50г.)",
        category: "Гарячі закуски",
        price: "₴180",
        img: "./img/soon1.png",
        desc: `Домашній сир в паніруванні. Смажаться у фрітюрі. Подаються з ягідним соусом.`,
    },
    {
        // 06гаряче/0606.png
        id: 6,
        title: "Профітролі з жульєном <br> (250г.)",
        category: "Гарячі закуски",
        price: "₴280",
        img: "./img/soon1.png",
        desc: ``,
    },
    // Перші страви
    {
        id: 7,
        title: "Курячий бульйон з домашньою локшиною  <br> (300г.)",
        category: "Перші страви",
        price: "₴90",
        img: "./img/07перше/0701.png",
        desc: `Бульйон на основі курки, домашня паста, перепелині яйця, куряче філе, зелень.`,
    },
    {
        id: 7,
        title: "Суп-гуляш з телятиною <br> (300г.)",
        category: "Перші страви",
        price: "₴174",
        img: "./img/07перше/0705.png",
        desc: ``,
    },
    {
        id: 7,
        title: "Грибний крем-суп <br> (300г.)",
        category: "Перші страви",
        price: "₴145",
        img: "./img/07перше/0702.png",
        desc: `Печериці, вершки , цибуля, гриби білі.`,
    },
    {
        id: 7,
        title: "Сирний крем-суп <br> (300г.)",
        category: "Перші страви",
        price: "₴140",
        img: "./img/07перше/0703.png",
        desc: `В`,
    },
    {
        id: 7,
        title: "Томатний суп з морепродуктами <br> (300г.)",
        category: "Перші страви",
        price: "₴220",
        img: "./img/07перше/0703.png",
        desc: ``,
    },
    {
        id: 7,
        title: "Гарбузовий крем-суп з креветками <br> (300г.)",
        category: "Перші страви",
        price: "₴185",
        img: "./img/07перше/0703.png",
        desc: ``,
    },

    // Гарніри
    {
        id: 8,
        title: "Картопля фрі <br> (150г.)",
        category: "Гарніри",
        price: "₴95",
        img: "./img/08гарніри/0801.png",
        desc: `Картопля попередньо смажена у великій кількості масла. Подається з медово-гірчичним соусом.`,
    },
    {
        // 08гарніри/0802.png
        id: 8,
        title: "Картопляне пюре з пармезаном <br> (160г.)",
        category: "Гарніри",
        price: "₴85",
        img: "./img/soon1.png",
        desc: `Картопляне пюре, вершкове масло, сир "Пармезан".`,
    },
    {
        id: 8,
        title: "Картопля запечена з беконом та зеленню <br> (200г.)",
        category: "Гарніри",
        price: "₴125",
        img: "./img/08гарніри/0803.png",
        desc: ``,
    },
    {
        id: 8,
        title: "Спаржа смажена в соєвому соусі <br> (150г.)",
        category: "Гарніри",
        price: "₴105",
        img: "./img/08гарніри/0804.png",
        desc: ``,
    },
    
    // Піца
    {
        id: 9,
        title: "Маргарита з бейбі-моцарелою <br> (380г.)",
        category: "Піца",
        price: "₴250",
        img: "./img/09піца/0901.png",
        desc: `Томати, "Моцарела", свіжий базилік, соус.`,
    },
    {
        id: 9,
        title: "Імпреза <br> (450г.)",
        category: "Піца",
        price: "₴395",
        img: "./img/09піца/0911.png",
        desc: `Червоний соус, шинка, салямі, куряче філе, перець солодкий, моцарела`,
    },
    {
        id: 9,
        title: "BBQ <br> (480г.)",
        category: "Піца",
        price: "₴340",
        img: "./img/09піца/0902.png",
        desc: `Гриби, копчений сир, соус, балик, томати`,
    },
    {
        id: 9,
        title: "Ді-Парма <br> (480г.)",
        category: "Піца",
        price: "₴480",
        img: "./img/09піца/0903.png",
        desc: `Прошуто, вялені томати, соус, сир моцарела, сир пармезан`,
    },
    {
        // 09піца/0912.png
        id: 9,
        title: "Гавайська <br> (450г.)",
        category: "Піца",
        price: "₴260",
        img: "./img/soon1.png",
        desc: `Копчене куряче філе, сир моцарела, ананаси, розмарин,соус`,
    },
    {
        id: 9,
        title: "Салямі <br> (400г.)",
        category: "Піца",
        price: "₴275",
        img: "./img/09піца/0904.png",
        desc: `Томатна основа, салямі, сир "Моцарела".`,
    },  
    {
        id: 9,
        title: "Пепероні <br> (520г.)",
        category: "Піца",
        price: "₴275",
        img: "./img/09піца/0907.png",
        desc: `Сир "Моцарела", пепероні, маслини, перець чілі , соус.`,
    },
    {
        id: 9,
        title: "Ростбіф <br> (480г.)",
        category: "Піца",
        price: "₴395",
        img: "./img/09піца/0908.png",
        desc: `Печериці, болгарський перець, ростбіф, сир моцарела, червона цибуля , рукола, пармезан.`,
    },
    {
        id: 9,
        title: "Цезар <br> (450г.)",
        category: "Піца",
        price: "₴360",
        img: "./img/09піца/0913.png",
        desc: `Ромен, куряче філе, соус, моцарела, пармезан, бекон`,
    },
    {
        id: 9,
        title: "Квантро-Формаджі <br> (450г.)",
        category: "Піца",
        price: "₴300",
        img: "./img/09піца/0913.png",
        desc: `Сир моцарела, горгонзола, пармезан, гауда, волоські горіхи, виноград, вершковий соус`,
    },
    {
        id: 9,
        title: "З морепродуктами <br> (450г.)",
        category: "Піца",
        price: "₴560",
        img: "./img/09піца/0909.png",
        desc: `Кальмар, креветка, мідії, лосось, соус, чері, оливки`,
    },
    {
        id: 9,
        title: "Мега вулкан <br> (880г.)",
        category: "Піца",
        price: "₴485",
        img: "./img/09піца/0909.png",
        desc: `Салямі, рукола, пармезан, бекон, песто, маслини, чері, дор-блю`,
    },

    // Кальцоне
    {
        id: 10,
        title: "Кальцоне з шинкою та грибами <br> (480г.)",
        category: "Кальцоне",
        price: "₴265",
        img: "./img/10кальцоне/1003.png",
        desc: ``,
    },
    {
        id: 10,
        title: "Кальцоне з ростбіфом та цибулевими кільцями <br> (480г.)",
        category: "Кальцоне",
        price: "₴285",
        img: "./img/10кальцоне/1001.png",
        desc: ``,
    },
    {
        id: 10,
        title: "Кальцоне з сиром та мигдалем <br> (480г.)",
        category: "Кальцоне",
        price: "₴285",
        img: "./img/10кальцоне/1002.png",
        desc: `Тісто власного виробництва, вершкова основа, сир "Моцарела", сир твердий, журавлина, мигдаль.`,
    },
    // Равіолі
    {
        // 11равіолі/1101.png
        id: 11,
        title: "Равіолі з телятиною <br> (240г.)",
        category: "Равіолі",
        price: "₴240",
        img: "./img/soon1.png",
        desc: `Тісто власного виробництва , телятина, соус песто, сир "Пармезан", вершки.`,
    },
    {
        id: 11,
        title: "Равіолі з куркою під соусом 'Карбонара' <br> (260г.)",
        category: "Равіолі",
        price: "₴230",
        img: "./img/11равіолі/1102.png",
        desc: `Тісто власного виробництва, лосось, шпинат, крем-сир, сир "Пармезан", вершки .`,
    },
    // Паста
    {
        id: 12,
        title: "Паста карбонара <br> (280г.)",
        category: "Паста",
        price: "₴225",
        img: "./img/12паста/1201.png",
        desc: `Паста власного виробництва , свіжий бекон, соус на основі жовтків та вершків , пармезан , оливкова олія, спеції.`,
    },
    {
        id: 12,
        title: "Паста болоньєзе <br> (280г.)",
        category: "Паста",
        price: "₴240",
        img: "./img/12паста/1202.png",
        desc: `Паста власного виробництва, томатний соус на основі "Пілаті", базилік, сир "Пармезан", соус "Болоньєзе".`,
    },
    {
        // 12паста/1203.png
        id: 12,
        title: "Паста з морепродуктами та чорнилом каракатиці <br> (280г.)",
        category: "Паста",
        price: "₴395",
        img: "./img/soon1.png",
        desc: ``,
    },
    {
        id: 12,
        title: "Паста кватро формаджі <br> (250г.)",
        category: "Паста",
        price: "₴280",
        img: "./img/12паста/1204.png",
        desc: `Тісто власного виробницва, вершки,сир "Пармезан", сир "Горгонзола", крем-сир, сир "Чедер", мигдалеві пластівці.`,
    },
    {
        id: 12,
        title: "Паста шпинатна з куркою та лососем <br> (300г.)",
        category: "Паста",
        price: "₴255",
        img: "./img/12паста/1205.png",
        desc: `Паста власного виробництва, куряче філе, білі гриби. Соус на основі білого вина та вершків,сир "Пармезан" `,
    },
    {
        id: 12,
        title: "Паста з лісовими грибами<br> (280г.)",
        category: "Паста",
        price: "₴255",
        img: "./img/12паста/1205.png",
        desc: ``,
    },
    {
        id: 12,
        title: "Паста з куркою під соусом песто <br> (280г.)",
        category: "Паста",
        price: "₴240",
        img: "./img/12паста/1205.png",
        desc: ``,
    },
    {
        id: 12,
        title: "З телятиною під соусом арабіата 'гостра' <br> (300г.)",
        category: "Паста",
        price: "₴295",
        img: "./img/12паста/1205.png",
        desc: ``,
    },
    {
        id: 12,
        title: "Лазанья болоньєзе <br> (400г.)",
        category: "Паста",
        price: "₴280",
        img: "./img/12паста/1206.png",
        desc: `Тісто власного виробництва , соус "Бешамель" ,соус "Болоньєзе" , спеції та оливкова олія. Запікається приблизно до 40 хвилин.`,
    },
    {
        id: 12,
        title: "Лазанья з морепродуктами <br> (400г.)",
        category: "Паста",
        price: "₴420",
        img: "./img/12паста/1207.png",
        desc: ``,
    },
    // Ризотто
    {
        // 13ризотто/1301.png
        id: 13,
        title: "Ризотто з грибами та трюфельною олією <br> (400г.)",
        category: "Ризотто",
        price: "₴176",
        img: "./img/soon1.png",
        desc: `В тягучий,неймовірно ароматний Ризотто, який вже випарували на білому вині та спеціях додають білі гриби та слайси Пармезану.`,
    },
    {
        id: 13,
        title: "Ризотто з морепродуктами <br> (450г.)",
        category: "Ризотто",
        price: "₴340",
        img: "./img/13ризотто/1302.png",
        desc: `Рис "Арборіо" проварюється в спеціях,після чого в тягуче відварене ризотто додається лосось, креветка тигрова та мідії.`,
    },
    // Для великої компанії
    {
        id: 14,
        title: "Великий м'ясний сет <br> (1200г.)",
        category: "Для великої компанії",
        price: "₴1500",
        img: "./img/14компанія/1401.png",
        desc: `Ребра свинні, бедро куряче, стейк зі свинини, стейк з телятини, овочі, картопля по-домашньому`,
    },
    {
        id: 14,
        title: "Сет фрі <br> (950г.)",
        category: "Для великої компанії",
        price: "₴820",
        img: "./img/14компанія/1402.png",
        desc: `Нагетси, сир фрі, рибні палички, картопля фрі, цибулеві кільця, мідії фрі, соус`,
    },
    {
        id: 14,
        title: "Сет до пива <br> (500/50/50г.)",
        category: "Для великої компанії",
        price: "₴590",
        img: "./img/14компанія/1403.png",
        desc: `Креветки-рачки, бастурма, курячі крила, чипси з лаваша, мисливські ковбаски, соус`,
    },
    // Страви з м'яса
    {
        id: 15,
        title: "Куряче філе з томатами <br> (250/50/15г.)",
        category: "Страви з м'яса",
        price: "₴289",
        img: "./img/15м'ясо/1501.png",
        desc: `Куряче філе з томатами із хрусткою скоринкою в поєднанні з броколі та спаржею`,
    },
    {
        // 15м'ясо/1503.png
        id: 15,
        title: "Куряче бедро з хурмою <br> (300г.)",
        category: "Страви з м'яса",
        price: "₴290",
        img: "./img/soon1.png",
        desc: ``,
    },
    {
        // 15м'ясо/1505.png
        id: 15,
        title: "Медальйони з телятини <br> (250г.)",
        category: "Страви з м'яса",
        price: "₴460",
        img: "./img/soon1.png",
        desc: `Медальйони готуються з відбірної телячої вирізки , запікаються зі спеціями та при подачі поливаються соусом дор-блю з овочами.`,
    },
    {
        id: 15,
        title: "Стейк рібай <br> (200/90г.)",
        category: "Страви з м'яса",
        price: "₴465",
        img: "./img/15м'ясо/1506.png",
        desc: `Стейк Рібай (прожарку стейка уточнюйте в офіціанта) з пряною картоплею та винно-медовим соусом`,
    },
    {
        id: 15,
        title: "Реберця BBQ з кукурудзою гриль <br> (380г.)",
        category: "Страви з м'яса",
        price: "₴420",
        img: "./img/15м'ясо/1507.png",
        desc: ``,
    },
    {
        id: 15,
        title: "Медальйон зі свинини <br> (220/150г.)",
        category: "Страви з м'яса",
        price: "₴329",
        img: "./img/15м'ясо/1507.png",
        desc: `З лисичками та картоплею пай`,
    },
    {
        id: 15,
        title: "Стейк зі свинини з бургунським соусом <br> (200/50г.)",
        category: "Страви з м'яса",
        price: "₴390",
        img: "./img/15м'ясо/1507.png",
        desc: ``,
    },
    {
        id: 15,
        title: "Телятина 'алла піцайола' (гостра) <br> (280/50г.)",
        category: "Страви з м'яса",
        price: "₴495",
        img: "./img/15м'ясо/1507.png",
        desc: ``,
    },

    // Риба та морепродукти
    {
        id: 16,
        title: "Форель запечена зі шпинатом <br> (1шт.)",
        category: "Риба та морепродукти",
        price: "₴340",
        img: "./img/16риба/1601.png",
        desc: ``,
    },
    {
        // 16риба/1602.png
        id: 16,
        title: "Стейк лосося з помідорами гриль <br> (200/15г.)",
        category: "Риба та морепродукти",
        price: "₴380",
        img: "./img/16риба/1602.png",
        desc: ``,
    },
    {
        id: 16,
        title: "Скумбрія гриль <br> (150/50/15г.)",
        category: "Риба та морепродукти",
        price: "₴220",
        img: "./img/16риба/1603.png",
        desc: ``,
    },
    {
        id: 16,
        title: "Дорадо з овочами гриль <br> (1шт.)",
        category: "Риба та морепродукти",
        price: "₴565",
        img: "./img/16риба/1603.png",
        desc: ``,
    },
    // Десерти
    {
        id: 17,
        title: "Шоколадний фондан <br> (150/50г.)",
        category: "Десерти",
        price: "₴190",
        img: "./img/17десерти/1701.png",
        desc: `Ніжний бісквітний кекс, розрізавши який розтікається гарячий шоколад . Поласувати варто з кулькою морозива)`,
    },
    {
        id: 17,
        title: "Чізкейк від тітки Мартіни <br> (150г.)",
        category: "Десерти",
        price: "₴160",
        img: "./img/17десерти/1702.png",
        desc: ``,
    },
    {
        id: 17,
        title: "Сирники із крем-сиром та солоною карамеллю <br> (200/50г.)",
        category: "Десерти",
        price: "₴190",
        img: "./img/17десерти/1704.png",
        desc: ``,
    },
    {
        id: 17,
        title: "Профітролі із заварним кремом  <br> (150г.)",
        category: "Десерти",
        price: "₴170",
        img: "./img/17десерти/1705.png",
        desc: ``,
    },
    {
        id: 17,
        title: "Груша запечена з сиром брі та дор-блю",
        category: "Десерти",
        price: "₴160",
        img: "./img/17десерти/1705.png",
        desc: ``,
    },
    {
        id: 17,
        title: "Мандаринова насолода",
        category: "Десерти",
        price: "₴150",
        img: "./img/17десерти/1705.png",
        desc: ``,
    },
    
    // Винна карта
    {
        id: 18,
        title: "ВИННА КАРТА",
        category: "Бар",
        price: "",
        img: "./img/Бар/IMG_0012.JPG",
        // Білі вина
        desc: `<span class="bar_title_left"><i>Білі вина</i></span><span class="bar_title_right"><i>150 / 750</i></span><br><br>`, 

        desc1: `<span class="desc_desc"><span class="desc_left">Pinot Grigio, Veneto <br><span class="under_desc">(Італія) сухе</span></span><span class="desc_right">104/520</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Sant’Orsola Vino Bianco<br><span class="under_desc">(Італія) напівсолодке</span></span><span class="desc_right">88/440</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Picolla<br><span class="under_desc">(Італія) напівсолодке</span></span><span class="desc_right">72/360</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="desc_left">Soave, Zeni <br><span class="under_desc">(Італія) сухе</span></span><span class="desc_right">98/490</span><br></span>`,

        // Ігристі вина
        desc5: `<span class="bar_title_left"><i>Ігристі вина</i></span><span class="bar_title_right"><i>150 / 750</i></span><br><br>`,

        desc6: `<span class="desc_desc"><span class="desc_left">Pinot Grigio Brut, Canti<br><span class="under_desc">(Італія) сухе біле</span></span><span class="desc_right">104/520</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Lambrusco dell'Emilia<br><span class="under_desc">напвісолодке  біле</span></span><span class="desc_right">90/450</span><br></span>`,
        desc8: `<span class="desc_desc"><span class="desc_left">Prosecco Frizzante<br><span class="under_desc">(Італія) сухе біле</span></span><span class="desc_right">120/600</span><br></span>`,

        // Рожеві вина
        desc9: `<span class="bar_title_left"><i>Рожеві вина</i></span><span class="bar_title_right"><i>150 / 750</i></span><br><br>`,

        desc10: `<span class="desc_desc"><span class="desc_left">Bardolino Chiaretto Classico, Zeni<br><span class="under_desc">(Італія) сухе</span></span><span class="desc_right">106/530</span><br></span>`,
        desc11: `<span class="desc_desc"><span class="desc_left">Pinot Grigio Veneto Rose, Canti<br><span class="under_desc">(Італія) напівсухе біле</span></span><span class="desc_right">95/475</span><br></span>`,

        // Червоні вина
        desc12: `<span class="bar_title_left"><i>Червоні вина</i></span><span class="bar_title_right"><i>150 / 750</i></span><br><br>`,

        desc13: `<span class="desc_desc"><span class="desc_left">Canti, Merlot Terre Siciliane<br><span class="under_desc">(Італія) сухе</span></span><span class="desc_right">110/550</span><br></span>`,
        desc14: `<span class="desc_desc"><span class="desc_left">Bordolino Classico, Zeni<br><span class="under_desc">(Італія) сухе</span></span><span class="desc_right">110/550</span><br></span>`,
        desc15: `<span class="desc_desc"><span class="desc_left">Sant’Orsola Vino Rosso<br><span class="under_desc">(Італія) напівсолодке</span></span><span class="desc_right">88/440</span><br></span>`,
        desc16: `<span class="desc_desc"><span class="desc_left">Picolla <br><span class="under_desc">(Італія) напівсолодке</span></span><span class="desc_right">72/360</span><br></span>`,

        // Безалкогольні вина
        desc17: `<span class="bar_title_left"><i>Безалкогольні вина</i></span><span class="bar_title_right"><i>150 / 750</i></span><br><br>`,

        desc18: `<span class="desc_desc"><span class="desc_left">Just, Peter Mertes<br><span class="under_desc">(Німеччина)  червоне напівсолодке</span></span><span class="desc_right">110/550</span><br></span>`,
        desc19: `<span class="desc_desc"><span class="desc_left">Just, Peter Mertes<br><span class="under_desc">(Німеччина) біле напівсолодке</span></span><span class="desc_right">110/550</span><br></span>`,
    },
    // Міцний алкоголь
    {
        id: 18,
        title: "Міцний алкоголь",
        category: "Бар",
        price: "",
        img: "./img/Бар/IMG_0010.JPG",
        // Бренді
        desc: `<span class="bar_title_left"><i>Бренді</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc1: `<span class="desc_desc"><span class="desc_left">Старий Кахеті<br><span class="under_desc">(Грузія) 4*</span></span><span class="desc_right">63</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Закарпатський<br><span class="under_desc">(Україна)</span></span><span class="desc_right">57</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Brigadier Grand Reserva<br><span class="under_desc">(Іспанія) 5*</span></span><span class="desc_right">70</span><br></span>`,

        // Горілка
        desc4: `<span class="bar_title_left"><i>Горілка</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc5: `<span class="desc_desc"><span class="desc_left">Nemiroff оригінал<br><span class="under_desc">(Україна)</span></span><span class="desc_right">39</span><br></span>`,
        desc6: `<span class="desc_desc"><span class="desc_left">Nemiroff Delikat<br><span class="under_desc">(Україна)</span></span><span class="desc_right">39</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Finlandia журавлина/класична<br><span class="under_desc">(Фінляндія)</span></span><span class="desc_right">74</span><br></span>`,
        desc8: `<span class="desc_desc"><span class="desc_left">Absolut<br><span class="under_desc">(Україна)</span></span><span class="desc_right">62</span><br></span>`,

        // Віскі
        desc9: `<span class="bar_title_left"><i>Віскі</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc10: `<span class="desc_desc"><span class="desc_left">Jack Daniels Old №7<br><span class="under_desc">(США)</span></span><span class="desc_right">130</span><br></span>`,
        desc11: `<span class="desc_desc"><span class="desc_left">Jameson Irish Whiskey<br><span class="under_desc">(Ірландія)</span></span><span class="desc_right">124</span><br></span>`,
        desc12: `<span class="desc_desc"><span class="desc_left">Jack Daniel's, Tennessee Honey<br><span class="under_desc">(Шотландія, 8 Y.O)</span></span><span class="desc_right">135</span><br></span>`,
        desc13: `<span class="desc_desc"><span class="desc_left">Dewar’s White Label<br><span class="under_desc">(Шотландія)</span></span><span class="desc_right">95</span><br></span>`,

        // Ром
        desc14: `<span class="bar_title_left"><i>Ром</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc15: `<span class="desc_desc"><span class="desc_left">Bacardi Spiced<br><span class="under_desc">(Італія)</span></span><span class="desc_right">112</span><br></span>`,
        desc16: `<span class="desc_desc"><span class="desc_left">Bacardi Carta Negro<br><span class="under_desc">(Італія)</span></span><span class="desc_right">112</span><br></span>`,
        desc17: `<span class="desc_desc"><span class="desc_left">Bacardi Carta Blanca<br><span class="under_desc">(Італія)</span></span><span class="desc_right">112</span><br></span>`,

        // Текіла
        desc18: `<span class="bar_title_left"><i>Текіла</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc19: `<span class="desc_desc"><span class="desc_left">Olmeca blanco<br><span class="under_desc">(Мексика)</span></span><span class="desc_right">120</span><br></span>`,

        // Джин
        desc20: `<span class="bar_title_left"><i>Джин</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc21: `<span class="desc_desc"><span class="desc_left">Bombay Sapphire<br><span class="under_desc">(Великобританія)</span></span><span class="desc_right">120</span><br></span>`,

        // Лікери
        desc22: `<span class="bar_title_left"><i>Лікери</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc23: `<span class="desc_desc"><span class="desc_left">Beileys<br><span class="under_desc">(Ірландія)</span></span><span class="desc_right">116</span><br></span>`,
        desc24: `<span class="desc_desc"><span class="desc_left">Jagermeister<br><span class="under_desc">(Німеччина)</span></span><span class="desc_right">107</span><br></span>`,

        // Вермут
        desc25: `<span class="bar_title_left"><i>Вермут</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc26: `<span class="desc_desc"><span class="desc_left">Martini Bianco<br><span class="under_desc">(Італія)</span></span><span class="desc_right">60</span><br></span>`,
        desc27: `<span class="desc_desc"><span class="desc_left">Martini Rosso<br><span class="under_desc">(Італія)</span></span><span class="desc_right">60</span><br></span>`,
        desc28: `<span class="desc_desc"><span class="desc_left">Martini Extra dry<br><span class="under_desc">(Італія)</span></span><span class="desc_right">60</span><br></span>`,
        desc29: `<span class="desc_desc"><span class="desc_left">Martini Fiero<br><span class="under_desc">(Італія)</span></span><span class="desc_right">60</span><br></span>`,


        // Настоянки
        desc30: `<span class="bar_title_left"><i>Настоянки</i></span><span class="bar_title_right"><i>50ml</i></span><br><br>`, 

        desc31: `<span class="desc_desc"><span class="desc_left">Аранча<br><span class="under_desc">(робила тітка Мартіна)</span></span><span class="desc_right">60</span><br></span>`,
        desc32: `<span class="desc_desc"><span class="desc_left">Лімончелло<br><span class="under_desc">(робила тітка Мартіна)</span></span><span class="desc_right">60</span><br></span>`,
        desc33: `<span class="desc_desc"><span class="desc_left">Becherovka<br><span class="under_desc">(Чехія)</span></span><span class="desc_right">89</span><br></span>`,
    },
    // Слабоалкогольні напої
    {
        id: 18,
        title: "Слабоалкогольні напої",
        category: "Бар",
        price: "",
        img: "./img/Бар/IMG_0013.JPG",
        // Пиво та сидр на розлив 
        desc: `<span class="bar_title_left"><i>Пиво та сидр</i><br><span class="under_desc"></span></span><span class="bar_title_right"><i>0,3 / 0,5</i></span><br><br>`,
        // desc: `<span class="bar_title_left"><i>Пиво та сидр</i><br><span class="under_desc">на розлив</span></span><span class="bar_title_right"><i>0,3 / 0,5</i></span><br><br><br>`,

        desc1: `<span class="desc_desc"><span class="desc_left">Karlsberg<br><span class="under_desc">(на розлив)</span></span><span class="desc_right">65/90</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Kronenbourg BLANC<br><span class="under_desc">(на розлив)</span></span><span class="desc_right">65/90</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Сидр Somersby<br><span class="under_desc">(на розлив)</span></span><span class="desc_right">60/85</span><br></span>`,

        // Пиво в пляшці
        desc4: `<span class="bar_title_left"><i>Пиво в пляшці</i></span><span class="bar_title_right"><i></i></span><br><br>`, 

        desc5: `<span class="desc_desc"><span class="desc_left">Carlsberg<br><span class="under_desc">(0,5) Б/А</span></span><span class="desc_right">95</span><br></span>`,
        desc6: `<span class="desc_desc"><span class="desc_left">Corona Extra<br><span class="under_desc">(0,3)</span></span><span class="desc_right">130</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Grimbergen Double Ambree<br><span class="under_desc">(0,5)</span></span><span class="desc_right">130</span><br></span>`,  
    },
    // Коктейлі
    {
        id: 18,
        title: "Коктейлі",
        category: "Бар",
        price: "",
        img: "./img/Бар/IMG_0009.JPG",
        // Коктейлі
        desc: `<span class="bar_title_left"><i>Коктейлі</i></span><span class="bar_title_right"><i></i></span><br><br>`, 

        desc1: `<span class="desc_desc"><span class="desc_left">Линбургський лимонад<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">КJager Sour<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">П'янкий грейпфрут<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="desc_left">Aperol spritz<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc5: `<span class="desc_desc"><span class="desc_left">Вишневий оксамит<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc6: `<span class="desc_desc"><span class="desc_left">Сицилійський кариб<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Королівське мохіто<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc8: `<span class="desc_desc"><span class="desc_left">Long Island Iced Tea<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc9: `<span class="desc_desc"><span class="desc_left">Bombey Tonic<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc10: `<span class="desc_desc"><span class="desc_left">Схід сонця в Неаполі<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc11: `<span class="desc_desc"><span class="desc_left">Fiero Sour<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,
        desc12: `<span class="desc_desc"><span class="desc_left">Джиада<br><span class="under_desc"></span></span><span class="desc_right">195</span><br></span>`,

        // Шоти
        desc13: `<span class="bar_title_left"><i>Шоти</i></span><span class="bar_title_right"><i></i></span><br><br>`, 

        desc14: `<span class="desc_desc"><span class="desc_left">Б-52<br><span class="under_desc">(60ml)</span></span><span class="desc_right">110</span><br></span>`,
        desc15: `<span class="desc_desc"><span class="desc_left">Бункер шот<br><span class="under_desc">(60ml)</span></span><span class="desc_right">110</span><br></span>`,
        desc16: `<span class="desc_desc"><span class="desc_left">Зелений мексиканець<br><span class="under_desc">(60ml)</span></span><span class="desc_right">110</span><br></span>`,
        desc17: `<span class="desc_desc"><span class="desc_left">Jagermeister шот<br><span class="under_desc">(60ml)</span></span><span class="desc_right">110</span><br></span>`,
        desc18: `<span class="desc_desc"><span class="desc_left">Paloma<br><span class="under_desc">(60ml)</span></span><span class="desc_right">110</span><br></span>`,
    },
    // Бар Б/А 
    {
        id: 19,
        title: "Безалкогольні коктейлі",
        category: "Бар б/а",
        price: "",
        img: "./img/Бар/IMG_0009.JPG",
        desc: `<span class="desc_desc"><span class="desc_left">Піна-Колада<br><span class="under_desc"></span></span><span class="desc_right">88</span><br></span>`,
        desc1: `<span class="desc_desc"><span class="desc_left">Молочний коктейль<br><span class="under_desc"></span></span><span class="desc_right">98</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Мохіто<br><span class="under_desc"></span></span><span class="desc_right">88</span><br></span>`,
    },
    // Лимонади
    {
        id: 19,
        title: "Лимонади власного виробництва",
        category: "Бар б/а",
        price: "",
        img: "./img/Бар/mohito3.webp",
        desc: `<span class="desc_desc"><span class="desc_left">Цитрусовий<br><span class="under_desc">(250ml)</span></span><span class="desc_right">65</span><br></span>`,
        desc1: `<span class="desc_desc"><span class="desc_left">Імбирний<br><span class="under_desc">(250ml)</span></span><span class="desc_right">65</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Полуниця-базилік<br><span class="under_desc">(250ml)</span></span><span class="desc_right">65</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Лаймово-огірковий<br><span class="under_desc">(250ml)</span></span><span class="desc_right">65</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="under_desc">АБО ЗАМОВЛЯЙ 1 ЛІТР БУДЬ-ЯКОГО ЛИМОНАДУ</span></span>`
    },
    // Чаї
    {
        id: 19,
        title: "Чаї",
        category: "Бар б/а",
        price: "",
        img: "./img/Бар/chay-z-imbirom.jpg",
        desc: `<span class="desc_desc"><span class="desc_left">Чай в асортименті<br><span class="under_desc">(600ml)</span></span><span class="desc_right">65</span><br></span>`,
        desc1: `<span class="desc_desc"><span class="desc_left">Фірмовий "Сицилія"<br><span class="under_desc">(600ml)</span></span><span class="desc_right">90</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Обліпиха-розмарин<br><span class="under_desc">(600ml)</span></span><span class="desc_right">85</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Малиновий з м'ятою<br><span class="under_desc">(600ml)</span></span><span class="desc_right">85</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="desc_left">Цитрусовий<br><span class="under_desc">(600ml)</span></span><span class="desc_right">95</span><br></span>`,
        desc5: `<span class="desc_desc"><span class="desc_left">Імбирний<br><span class="under_desc">(600ml)</span></span><span class="desc_right">95</span><br></span>`,
    },
    // Кава
    {
        id: 19,
        title: "Кава",
        category: "Бар б/а",
        price: "",
        img: "./img/Бар/kava-zi-spetsiyamy-marokko-800x549.jpg",
        desc: `<span class="desc_desc"><span class="desc_left">Еспрессо<br><span class="under_desc"></span></span><span class="desc_right">40</span><br></span>`,
        desc1: `<span class="desc_desc"><span class="desc_left">Американо<br><span class="under_desc"></span></span><span class="desc_right">42</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Американо з молоком<br><span class="under_desc"></span></span><span class="desc_right">46</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Капучино<br><span class="under_desc"></span></span><span class="desc_right">55</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="desc_left">Флет-вайт<br><span class="under_desc"></span></span><span class="desc_right">60</span><br></span>`,
        desc5: `<span class="desc_desc"><span class="desc_left">Латте<br><span class="under_desc"></span></span><span class="desc_right">56</span><br></span>`,
        desc6: `<span class="desc_desc"><span class="desc_left">Раф<br><span class="under_desc"></span></span><span class="desc_right">70</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Капуоранж<br><span class="under_desc"></span></span><span class="desc_right">80</span><br></span>`,
        desc8: `<span class="desc_desc"><span class="desc_left">Гарячий шоколад<br><span class="under_desc"></span></span><span class="desc_right">70</span><br></span>`,
        desc9: `<span class="desc_desc"><span class="desc_left">Глясе<br><span class="under_desc"></span></span><span class="desc_right">75</span><br></span>`,
        desc10: `<span class="desc_desc"><span class="desc_left">Какао<br><span class="under_desc"></span></span><span class="desc_right">60</span><br></span>`,
    },
    // Безалкогольні напої
    {
        id: 19,
        title: "Безалкогольні напої",
        category: "Бар б/а",
        price: "",
        img: "./img/Бар/324116858.png",
        desc: `<span class="desc_desc"><span class="desc_left">Coca-cola<br><span class="under_desc">(250ml)</span></span><span class="desc_right">45</span><br></span>`,
        desc1: `<span class="desc_desc"><span class="desc_left">Coca-cola zero<br><span class="under_desc">(250ml)</span></span><span class="desc_right">45</span><br></span>`,
        desc2: `<span class="desc_desc"><span class="desc_left">Fanta<br><span class="under_desc">(250ml)</span></span><span class="desc_right">45</span><br></span>`,
        desc3: `<span class="desc_desc"><span class="desc_left">Schweppes<br><span class="under_desc">(250ml)</span></span><span class="desc_right">47</span><br></span>`,
        desc4: `<span class="desc_desc"><span class="desc_left">Bonaqua<br><span class="under_desc">(330ml)</span></span><span class="desc_right">45</span><br></span>`,
        desc5: `<span class="desc_desc"><span class="desc_left">Сік Rich<br><span class="under_desc">(250ml)</span></span><span class="desc_right">27</span><br></span>`,
        desc6: `<span class="desc_desc"><span class="desc_left">Фреш грейпфрутовий<br><span class="under_desc">(250ml)</span></span><span class="desc_right">105</span><br></span>`,
        desc7: `<span class="desc_desc"><span class="desc_left">Фреш апельсиновий<br><span class="under_desc">(250ml)</span></span><span class="desc_right">95</span><br></span>`,
        desc8: `<span class="desc_desc"><span class="desc_left">Морс<br><span class="under_desc">(250ml)</span></span><span class="desc_right">27</span><br></span>`,
        desc9: `<span class="desc_desc"><span class="desc_left">Узвар<br><span class="under_desc">(250ml)</span></span><span class="desc_right">24</span><br></span>`,

    },
];



// Загружаем элементы при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const menuSection = document.getElementById('menuSection');

toggleMenuBtn.addEventListener('click', function () {
    menuSection.style.display = (menuSection.style.display === 'none') ? 'block' : 'none';
});

// Функция для отображения элементов меню
function displayMenuItems(menuItems) {
    const menuSection = document.querySelector(".section-center");
    const menuHTML = menuItems.map(function (menuItem) {
        // Собираем все описания в один массив
        const allDescriptions = [menuItem.desc, menuItem.desc1, menuItem.desc2, menuItem.desc3, menuItem.desc4, menuItem.desc5, menuItem.desc6, menuItem.desc7, menuItem.desc8, menuItem.desc9, menuItem.desc10, menuItem.desc11, menuItem.desc12, menuItem.desc13, menuItem.desc14, menuItem.desc15, menuItem.desc16, menuItem.desc17, menuItem.desc18, menuItem.desc19, menuItem.desc20, menuItem.desc21, menuItem.desc22, menuItem.desc23, menuItem.desc24, menuItem.desc25, menuItem.desc26, menuItem.desc27, menuItem.desc28, menuItem.desc29, menuItem.desc30, menuItem.desc31, menuItem.desc32, menuItem.desc33, menuItem.desc34];
        
        // Фильтруем и удаляем пустые описания
        const descriptions = allDescriptions.filter(desc => desc && desc.trim() !== "");
        
        // Преобразуем массив описаний в HTML
        const descriptionsHTML = descriptions.map(desc => `<p class="item-text">${desc}</p>`).join("");
        
        return `
        <article class="menu-item">
          <img src="${menuItem.img}" alt="${menuItem.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">${menuItem.price}</h4>
            </header>
            ${descriptionsHTML} <!-- Вставляем HTML для описаний -->
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



const aboutUsBtn = document.getElementById('aboutUsBtn');
const aboutUsContent = document.getElementById('aboutUsContent');

// Функция, которая отображает информацию о заведении
function showAboutUsInfo() {
    // Здесь можно добавить код для загрузки и отображения информации
    // Например:
    aboutUsContent.innerHTML = `
      <h2></h2>
      <div class="class">
      <img src="./img/banquet.png" alt="instagram">
      <p>Банкети, фуршети, кейтеринг</p></div>
      
      <div class="class">
      <img src="./img/pets.png" alt="instagram">
      <p>Завжди раді вашим чотирилапим друзям</p></div>
      
      <div class="class">
      <img src="./img/discount.png" alt="instagram">
      <p>Знижка 10% кожного понеділка на улюблену пасту</p>
      </div>

      <div class="class">
      <img src="./img/discount.png" alt="instagram">
      <p>Знижка 5% за відмітку в сторіс з кодовим словом</p>
      </div>

      <div class="class">
      <img src="./img/pngegg.png" alt="instagram">
      <p>Кожний четвер вечір фільмів</p>
      </div>

      <div class="class">
      <img src="./img/pngegg (1).png" alt="instagram">
      <p>Транслюємо найцікавіші спортивні події</p>
      </div>

      <div class="class">
      <img src="./img/pngwing.com.png" alt="instagram">
      <p>Доставка страв до дверей вашого будинку</p>
      </div>

      <div class="phone"><p><a href="tel:+380689525758">+38 (068) -952-57-58</a></p></div>

      <div class="information-footer">
      <a href="https://instagram.com/trattoria_sicily?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"><img style="width: 50px; height: 50px; border-radius: 6px;" src="./img/instagram.png" alt="instagram"></a>
      <a href="https://www.facebook.com/Sicily.borispol"><img style="width: 50px; height: 50px; border-radius: 50%; border: 1px solid white" src="./img/facebook.png" alt="facebook"></a>
        </div>
        
    `;
}

// Добавляем обработчик события на кнопку
aboutUsBtn.addEventListener('click', showAboutUsInfo);


// Флаг, который указывает, открыта ли информация
let isAboutUsInfoOpen = false;

// Функция, которая отображает информацию о заведении или скрывает ее
function toggleAboutUsInfo() {
    if (isAboutUsInfoOpen) {
        aboutUsContent.style.display = 'none'; // Скрываем информацию
    } else {
        aboutUsContent.style.display = 'block'; // Отображаем информацию
    }
    isAboutUsInfoOpen = !isAboutUsInfoOpen; // Инвертируем флаг
}

// Добавляем обработчик события на кнопку
aboutUsBtn.addEventListener('click', toggleAboutUsInfo);



