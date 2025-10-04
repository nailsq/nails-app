// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;

// Основные данные приложения
const APP_DATA = {
    master: {
        name: "Алёна",
        photo: "https://drive.google.com/file/d/1rr0ElZ3joDvVCnUV-flhLm8j8tQ3kOI4/view?usp=sharing",
        description: "Персональный мастер маникюра"
    },
    
    // Категории услуг
    categories: [
        {
            id: "manicure",
            name: "💅 Маникюр",
            description: "Маникюр с покрытием и без покрытия",
            icon: "💅",
            services: [1, 2]
        },
        {
            id: "correction", 
            name: "🔧 Коррекция",
            description: "Коррекция разной длины ногтей",
            icon: "🔧",
            services: [3, 4, 5]
        },
        {
            id: "extension",
            name: "📏 Наращивание", 
            description: "Наращивание гелем на формы",
            icon: "📏",
            services: [6, 7, 8]
        },
        {
            id: "repair",
            name: "🛠️ Ремонт",
            description: "Ремонт моей и чужой работы", 
            icon: "🛠️",
            services: [9, 10]
        },
        {
            id: "removal",
            name: "🧹 Снятие",
            description: "Снятие гель-лака и покрытия",
            icon: "🧹", 
            services: [11]
        }
    ],
    
    // Все услуги
    services: {
        1: {
            id: 1,
            name: "Маникюр с покрытием",
            description: "Комплексный уход + обработка кутикулы + покрытие гель-лаком + укрепление гелем",
            price: 1900,
            duration: 90,
            image: "https://i.ibb.co/your-photo/manicure-cover.jpg",
            category: "manicure"
        },
        2: {
            id: 2,
            name: "Маникюр без покрытия",
            description: "Комплексный уход + обработка кутикулы + полировка ногтей",
            price: 600, 
            duration: 60,
            image: "https://i.ibb.co/your-photo/manicure-no-cover.jpg",
            category: "manicure"
        },
        3: {
            id: 3,
            name: "Коррекция (до 3 мм)",
            description: "Коррекция старого покрытия + новый дизайн на короткие ногти",
            price: 2100,
            duration: 120,
            image: "https://i.ibb.co/your-photo/correction-short.jpg",
            category: "correction"
        },
        4: {
            id: 4, 
            name: "Коррекция (до 8 мм)",
            description: "Коррекция старого покрытия + новый дизайн на средние ногти",
            price: 2400,
            duration: 120,
            image: "https://i.ibb.co/your-photo/correction-medium.jpg", 
            category: "correction"
        },
        5: {
            id: 5,
            name: "Коррекция (9+ мм)", 
            description: "Коррекция старого покрытия + новый дизайн на длинные ногти", 
            price: 2700,
            duration: 120,
            image: "https://i.ibb.co/your-photo/correction-long.jpg",
            category: "correction"
        },
        6: {
            id: 6,
            name: "Наращивание (до 3 мм)",
            description: "Полный комплекс наращивания гелем на формы + дизайн на короткие ногти",
            price: 2500,
            duration: 180,
            image: "https://i.ibb.co/your-photo/extension-short.jpg",
            category: "extension"
        },
        7: {
            id: 7,
            name: "Наращивание (до 8 мм)", 
            description: "Полный комплекс наращивания гелем на формы + дизайн на средние ногти",
            price: 2800,
            duration: 180,
            image: "https://i.ibb.co/your-photo/extension-medium.jpg",
            category: "extension"
        },
        8: {
            id: 8,
            name: "Наращивание (9+ мм)",
            description: "Полный комплекс наращивания гелем на формы + дизайн на длинные ногти",
            price: 3100,
            duration: 180, 
            image: "https://i.ibb.co/your-photo/extension-long.jpg",
            category: "extension"
        },
        9: {
            id: 9,
            name: "Ремонт (чужой работы)",
            description: "Ремонт сколов и трещин после другого мастера",
            price: 200,
            duration: 30,
            image: "https://i.ibb.co/your-photo/repair-other.jpg",
            category: "repair"
        },
        10: {
            id: 10,
            name: "Ремонт (моей работы)", 
            description: "Бесплатный ремонт моей работы в течение 3 дней",
            price: 0,
            duration: 20,
            image: "https://i.ibb.co/your-photo/repair-my.jpg",
            category: "repair"
        },
        11: {
            id: 11,
            name: "Снятие покрытия",
            description: "Аккуратное снятие старого покрытия без повреждения ногтевой пластины",
            price: 350,
            duration: 20,
            image: "https://i.ibb.co/your-photo/removal.jpg",
            category: "removal"
        }
    },
    
    // Рабочее время
    workHours: {
        start: 10,    // 10:00
        end: 20,      // 20:00
        breakStart: 14, // 14:00
        breakEnd: 15    // 15:00
    },
    
    // Демо-отзывы
    demoReviews: {
        1: [
            {
                id: 1,
                author: "Екатерина",
                rating: 5,
                text: "Делала маникюр с покрытием - результат превзошел ожидания! Мастер очень внимательна к деталям, посоветовала идеальный цвет.",
                date: "2024-01-15"
            },
            {
                id: 2,
                author: "Мария",
                rating: 5,
                text: "Хожу уже полгода, всегда качественная работа. Рекомендую всем подругам!",
                date: "2024-01-10"
            }
        ],
        3: [
            {
                id: 3,
                author: "Анна",
                rating: 4,
                text: "Коррекция сделана аккуратно, но пришлось немного подождать. В целом довольна результатом.",
                date: "2024-01-08"
            }
        ],
        6: [
            {
                id: 4,
                author: "Ольга",
                rating: 5,
                text: "Впервые наращивала ногти - очень довольна! Выглядят естественно, не мешают в быту.",
                date: "2024-01-05"
            }
        ]
    }
};

// Состояние приложения
let state = {
    cart: [],
    searchQuery: '',
    selectedService: null,
    currentCategory: null
};

// ==================== ОСНОВНЫЕ ФУНКЦИИ ====================

// Инициализация приложения
function initApp() {
    console.log("🚀 Инициализация приложения...");
    
    // Инициализация Telegram Web App
    tg.expand();
    tg.enableClosingConfirmation();
    
    // Загрузка данных
    loadMasterData();
    loadCategories();
    setupDatePicker();
    loadCartFromStorage();
    updateCartDisplay();
    
    // Настройка обработчиков событий
    setupEventListeners();
    
    console.log("✅ Приложение успешно инициализировано");
}

// Загрузка данных мастера
function loadMasterData() {
    console.log("📷 Загрузка данных мастера...");
    
    const masterName = document.getElementById('salon-name');
    const masterPhoto = document.getElementById('master-photo');
    
    if (masterName) {
        masterName.textContent = APP_DATA.master.name;
    }
    
    if (masterPhoto) {
        masterPhoto.src = APP_DATA.master.photo;
        // Обработчик ошибки загрузки фото
        masterPhoto.onerror = function() {
            console.error("❌ Ошибка загрузки фото мастера");
            this.src = 'https://via.placeholder.com/70x70/4CAF50/white?text=MASTER';
        };
    }
}

// Загрузка категорий услуг
function loadCategories() {
    console.log("📂 Загрузка категорий услуг...");
    
    const container = document.getElementById('categories-container');
    
    if (!container) {
        console.error("❌ Не найден контейнер для категорий");
        return;
    }
    
    container.innerHTML = '';
    
    APP_DATA.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-header">
                <div class="category-icon">${category.icon}</div>
                <div>
                    <div class="category-name">${category.name}</div>
                    <div class="category-description">${category.description}</div>
                    <div class="category-services-count">${category.services.length} услуг</div>
                </div>
            </div>
        `;
        
        categoryCard.addEventListener('click', () => openCategory(category));
        container.appendChild(categoryCard);
    });
    
    console.log(`✅ Загружено ${APP_DATA.categories.length} категорий`);
}

// Открытие категории
function openCategory(category) {
    console.log(`📁 Открытие категории: ${category.name}`);
    
    state.currentCategory = category;
    
    // Показываем экран категории
    document.getElementById('category-title').textContent = category.name;
    document.getElementById('category-screen').style.display = 'block';
    
    // Загружаем услуги категории
    loadCategoryServices(category);
}

// Загрузка услуг категории
function loadCategoryServices(category) {
    console.log(`🛠️ Загрузка услуг для категории: ${category.name}`);
    
    const container = document.getElementById('category-services');
    
    if (!container) {
        console.error("❌ Не найден контейнер для услуг категории");
        return;
    }
    
    container.innerHTML = '';
    
    category.services.forEach(serviceId => {
        const service = APP_DATA.services[serviceId];
        if (service) {
            const serviceCard = createServiceCard(service);
            container.appendChild(serviceCard);
        }
    });
    
    console.log(`✅ Загружено ${category.services.length} услуг`);
}

// Создание карточки услуги
function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card-category';
    card.innerHTML = `
        <div class="service-image-category">
            <img src="${service.image}" alt="${service.name}" 
                 onerror="this.src='https://via.placeholder.com/200x150/4CAF50/white?text=Фото+работы'">
        </div>
        <div class="service-info-category">
            <div>
                <div class="service-name-category">${service.name}</div>
                <div class="service-description-category">${service.description}</div>
            </div>
            <div class="service-duration-price">
                <div class="service-duration">⏱ ${service.duration} мин</div>
                <div class="service-price-category">${service.price} ₽</div>
            </div>
            <button class="service-add-btn-category">Добавить</button>
        </div>
    `;
    
    // Обработчик клика по карточке
    card.addEventListener('click', () => openServiceModal(service));
    
    // Обработчик кнопки добавления
    const addBtn = card.querySelector('.service-add-btn-category');
    addBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем открытие модального окна
        addToCart(service);
    });
    
    return card;
}

// Открытие модального окна услуги
function openServiceModal(service) {
    console.log(`🔍 Открытие услуги: ${service.name}`);
    
    state.selectedService = service;
    
    // Заполняем данные в модальном окне
    document.getElementById('modal-service-name').textContent = service.name;
    document.getElementById('modal-service-description').textContent = service.description;
    document.getElementById('modal-service-price').textContent = `${service.price} ₽`;
    document.getElementById('modal-service-duration').textContent = `⏱ Время выполнения: ${service.duration} минут`;
    
    // Устанавливаем фото
    const serviceImage = document.getElementById('modal-service-image');
    serviceImage.src = service.image;
    serviceImage.alt = service.name;
    
    // Загружаем отзывы
    displayReviews(service.id);
    
    // Показываем модальное окно
    document.getElementById('service-modal').style.display = 'flex';
}

// ==================== СИСТЕМА ОТЗЫВОВ ====================

// Загрузка отзывов
function loadReviews(serviceId) {
    return APP_DATA.demoReviews[serviceId] || [];
}

// Отображение отзывов
function displayReviews(serviceId) {
    const reviews = loadReviews(serviceId);
    const reviewsContainer = document.getElementById('reviews-container');
    
    if (!reviewsContainer) {
        console.error("❌ Не найден контейнер для отзывов");
        return;
    }
    
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="no-reviews">Пока нет отзывов. Будьте первыми!</p>';
        return;
    }
    
    let reviewsHTML = '';
    reviews.forEach(review => {
        reviewsHTML += `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author">${review.author}</div>
                    <div class="review-rating">${generateStars(review.rating)}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-text">${review.text}</div>
            </div>
        `;
    });
    
    reviewsContainer.innerHTML = reviewsHTML;
}

// Генерация звезд рейтинга
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// Настройка системы отзывов
function setupReviewsSystem() {
    let currentRating = 0;
    
    // Обработчики для звезд рейтинга
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            
            // Обновляем отображение звезд
            document.querySelectorAll('.star').forEach(s => {
                const starRating = parseInt(s.getAttribute('data-rating'));
                if (starRating <= rating) {
                    s.textContent = '★';
                    s.classList.add('active');
                } else {
                    s.textContent = '☆';
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Обработчик отправки отзыва
    document.getElementById('submit-review-btn').addEventListener('click', function() {
        const reviewText = document.getElementById('review-text').value.trim();
        
        if (currentRating === 0) {
            tg.showPopup({
                title: 'Ошибка',
                message: 'Пожалуйста, поставьте оценку',
                buttons: [{ type: 'ok' }]
            });
            return;
        }
        
        if (!reviewText) {
            tg.showPopup({
                title: 'Ошибка',
                message: 'Пожалуйста, напишите отзыв',
                buttons: [{ type: 'ok' }]
            });
            return;
        }
        
        // В реальном приложении здесь будет отправка на сервер
        tg.showPopup({
            title: 'Спасибо!',
            message: 'Ваш отзыв отправлен на модерацию',
            buttons: [{ type: 'ok' }]
        });
        
        // Очищаем форму
        document.getElementById('review-text').value = '';
        document.querySelectorAll('.star').forEach(star => {
            star.textContent = '☆';
            star.classList.remove('active');
        });
        currentRating = 0;
    });
}

// ==================== СИСТЕМА КОРЗИНЫ ====================

// Добавление услуги в корзину
function addToCart(service) {
    console.log(`🛒 Добавление в корзину: ${service.name}`);
    
    const existingItem = state.cart.find(item => item.id === service.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...service,
            quantity: 1
        });
    }
    
    // Сохраняем корзину
    saveCartToStorage();
    updateCartDisplay();
    
    // Показываем уведомление
    tg.showPopup({
        title: 'Добавлено в корзину',
        message: `${service.name} добавлен(а) в корзину`,
        buttons: [{ type: 'ok' }]
    });
}

// Обновление отображения корзины
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartCount || !cartTotal) {
        console.error("❌ Не найдены элементы корзины");
        return;
    }
    
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = `${totalCount} ${getServiceWord(totalCount)}`;
    cartTotal.textContent = `${totalPrice} ₽`;
}

// Получение правильной формы слова "услуга"
function getServiceWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) return 'услуга';
    if ([2,3,4].includes(count % 10) && ![12,13,14].includes(count % 100)) return 'услуги';
    return 'услуг';
}

// Сохранение корзины в localStorage
function saveCartToStorage() {
    try {
        localStorage.setItem('nailsCart', JSON.stringify(state.cart));
    } catch (error) {
        console.error("❌ Ошибка сохранения корзины:", error);
    }
}

// Загрузка корзины из localStorage
function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('nailsCart');
        if (savedCart) {
            state.cart = JSON.parse(savedCart);
        }
    } catch (error) {
        console.error("❌ Ошибка загрузки корзины:", error);
        state.cart = [];
    }
}

// ==================== СИСТЕМА ЗАПИСИ ====================

// Настройка DatePicker
function setupDatePicker() {
    const dateInput = document.getElementById('booking-date');
    
    if (!dateInput) {
        console.error("❌ Не найден элемент выбора даты");
        return;
    }
    
    const today = new Date();
    
    // Устанавливаем минимальную дату (сегодня)
    dateInput.min = today.toISOString().split('T')[0];
    
    // Устанавливаем максимальную дату (+30 дней)
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);
    dateInput.max = maxDate.toISOString().split('T')[0];
    
    // Обработчик изменения даты
    dateInput.addEventListener('change', function() {
        generateTimeSlots();
    });
}

// Генерация слотов времени
function generateTimeSlots() {
    const dateInput = document.getElementById('booking-date');
    const timeSelect = document.getElementById('booking-time');
    
    if (!dateInput.value) {
        console.log("❌ Дата не выбрана");
        return;
    }
    
    timeSelect.innerHTML = '<option value="">Выберите время</option>';
    
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    
    // Если выбрана сегодняшняя дата, начинаем с текущего часа + 2 часа
    let startHour = APP_DATA.workHours.start;
    if (selectedDate.toDateString() === today.toDateString()) {
        const currentHour = today.getHours();
        startHour = Math.max(startHour, currentHour + 2);
    }
    
    // Генерация временных слотов
    for (let hour = startHour; hour < APP_DATA.workHours.end; hour++) {
        // Пропускаем время обеда
        if (hour >= APP_DATA.workHours.breakStart && hour < APP_DATA.workHours.breakEnd) {
            continue;
        }
        
        // Создаем слоты по 30 минут
        for (let minute = 0; minute < 60; minute += 30) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            
            const option = document.createElement('option');
            option.value = timeString;
            option.textContent = timeString;
            timeSelect.appendChild(option);
        }
    }
    
    console.log(`✅ Сгенерированы слоты времени с ${startHour}:00`);
}

// Открытие модального окна записи
function openBookingModal() {
    console.log("📅 Открытие формы записи...");
    
    if (state.cart.length === 0) {
        tg.showPopup({
            title: 'Корзина пуста',
            message: 'Добавьте услуги в корзину перед записью',
            buttons: [{ type: 'ok' }]
        });
        return;
    }
    
    // Заполняем список выбранных услуг
    const servicesList = document.getElementById('selected-services-list');
    servicesList.innerHTML = '';
    
    state.cart.forEach(item => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'selected-service';
        serviceElement.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity} ₽</span>
        `;
        servicesList.appendChild(serviceElement);
    });
    
    // Обновляем общую стоимость
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('booking-total-price').textContent = totalPrice;
    
    // Сбрасываем форму
    document.getElementById('client-name').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('booking-date').value = '';
    document.getElementById('booking-time').innerHTML = '<option value="">Выберите время</option>';
    
    // Показываем модальное окно
    document.getElementById('booking-modal').style.display = 'flex';
}

// Подтверждение записи
function confirmBooking() {
    console.log("✅ Подтверждение записи...");
    
    const clientName = document.getElementById('client-name').value.trim();
    const clientPhone = document.getElementById('client-phone').value.trim();
    const bookingDate = document.getElementById('booking-date').value;
    const bookingTime = document.getElementById('booking-time').value;
    
    // Валидация формы
    if (!clientName) {
        alert('Пожалуйста, введите ваше имя');
        return;
    }
    
    if (!clientPhone) {
        alert('Пожалуйста, введите ваш телефон');
        return;
    }
    
    if (!bookingDate) {
        alert('Пожалуйста, выберите дату');
        return;
    }
    
    if (!bookingTime) {
        alert('Пожалуйста, выберите время');
        return;
    }
    
    // Создание объекта записи
    const booking = {
        id: Date.now(),
        clientName,
        clientPhone,
        bookingDate,
        bookingTime,
        services: [...state.cart],
        totalPrice: state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        createdAt: new Date().toISOString()
    };
    
    // Сохранение записи
    saveBooking(booking);
    
    // Очистка корзины
    state.cart = [];
    saveCartToStorage();
    updateCartDisplay();
    
    // Закрытие модального окна
    document.getElementById('booking-modal').style.display = 'none';
    
    // Показ подтверждения
    tg.showPopup({
        title: 'Запись подтверждена!',
        message: `Спасибо, ${clientName}!\n\nВаша запись на ${formatDate(bookingDate)} в ${bookingTime} подтверждена.\n\nМы свяжемся с вами для уточнения деталей.`,
        buttons: [{ type: 'ok' }]
    });
    
    // Отправка данных в Telegram
    tg.sendData(JSON.stringify({
        action: 'booking_created',
        booking: booking
    }));
    
    console.log("📋 Запись создана:", booking);
}

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Сохранение записи
function saveBooking(booking) {
    try {
        const existingBookings = JSON.parse(localStorage.getItem('nailsBookings') || '[]');
        existingBookings.push(booking);
        localStorage.setItem('nailsBookings', JSON.stringify(existingBookings));
        console.log("💾 Запись сохранена в localStorage");
    } catch (error) {
        console.error("❌ Ошибка сохранения записи:", error);
    }
}

// ==================== ОБРАБОТЧИКИ СОБЫТИЙ ====================

// Настройка всех обработчиков событий
function setupEventListeners() {
    console.log("🔧 Настройка обработчиков событий...");
    
    // Кнопка назад из категории
    const backButton = document.getElementById('back-to-categories');
    if (backButton) {
        backButton.addEventListener('click', function() {
            document.getElementById('category-screen').style.display = 'none';
        });
    }
    
    // Закрытие модальных окон
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('service-modal').style.display = 'none';
    });
    
    document.getElementById('close-booking-modal').addEventListener('click', function() {
        document.getElementById('booking-modal').style.display = 'none';
    });
    
    // Кнопки добавления в корзину и подтверждения
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        if (state.selectedService) {
            addToCart(state.selectedService);
            document.getElementById('service-modal').style.display = 'none';
        }
    });
    
    document.getElementById('checkout-btn').addEventListener('click', openBookingModal);
    document.getElementById('confirm-booking-btn').addEventListener('click', confirmBooking);
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(event) {
        const serviceModal = document.getElementById('service-modal');
        const bookingModal = document.getElementById('booking-modal');
        
        if (event.target === serviceModal) {
            serviceModal.style.display = 'none';
        }
        
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });
    
    // Настройка системы отзывов
    setupReviewsSystem();
    
    console.log("✅ Обработчики событий настроены");
}

// ==================== ЗАПУСК ПРИЛОЖЕНИЯ ====================

// Запуск приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log("🏁 DOM загружен, запуск приложения...");
    
    // Инициализация Telegram Web App
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.enableClosingConfirmation();
        
        console.log("📱 Telegram Web App инициализирован");
    } else {
        console.log("🌐 Режим браузера (не Telegram)");
    }
    
    // Запуск приложения
    initApp();
});

// Глобальные функции для обработки ошибок
window.addEventListener('error', function(event) {
    console.error("🚨 Глобальная ошибка:", event.error);
});

console.log("🔧 app.js загружен и готов к работе");