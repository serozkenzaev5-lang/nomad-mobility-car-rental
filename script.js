
// ========== ДАННЫЕ МАШИН ==========
const carsData = [
    {
        id: 1,
        brand: "Cadillac",
        model: "Escalade",
        fullName: "Cadillac Escalade 2024",
        year: 2024,
        price: 30000,
        formattedPrice: "30,000 AED",
        dailyPrice: Math.round(30000 / 30),
        mileage: "0 km",
        transmission: "Automatic",
        engine: "6.2L, 426 HP (V8) / 3.0L, 277 HP (Turbo-Diesel)",
        fuel: "Gasoline / Diesel",
        color: "Black",
        image: "images/photo_2026-02-02_18-45-13.jpg",
        features: ["Four-wheel drive", "OLED Intelligent Dashboard", "Noise Cancellation System", "Panoramic Sunroof", "Premium AKG Audio System", "Vertical LED Headlights"],
        description: "Brand new flagship full-size SUV in an aggressive black color. Combines cutting-edge technology, exceptional comfort, and a powerful engine. The perfect status vehicle.",
        availableForRent: true
    },
    {
        id: 2,
        brand: "Mercedes-Benz",
        model: "E-Class",
        fullName: "Mercedes-Benz E-Class (W214) E 350",
        year: 2025,
        price: 18000,
        formattedPrice: "18,000 AED",
        dailyPrice: Math.round(18000 / 30),
        mileage: "0 km",
        transmission: "Automatic (9G-TRONIC)",
        engine: "2.0L, 258 HP + Mild Hybrid System (ISG)",
        fuel: "Gasoline, Mild Hybrid",
        color: "White (Alpine White / Polar White)",
        image: "images/photo_2026-02-03_22-03-34.jpg",
        features: ["New Superscreen with MBUX", "Digital Light Headlights", "AIRMATIC Air Suspension", "Panoramic Sunroof", "Semi-Autonomous Driving System", "Heated Leather Seats", "Keyless Entry & Start"],
        description: "A completely new business-class sedan in pristine white. The fifth generation E-Class (W214) offers revolutionary design, advanced hybrid technology, and a next-level interior with futuristic screens. The car combines elegance, innovation, and exceptional comfort.",
        availableForRent: true
    },
    {
        id: 3,
        brand: "Mercedes-Benz",
        model: "E-Class",
        fullName: "Mercedes-Benz E-Class 2023",
        year: 2023,
        price: 12000,
        formattedPrice: "12,000 AED",
        dailyPrice: Math.round(12000 / 30),
        mileage: "15,000 km",
        transmission: "Automatic (9G-TRONIC)",
        engine: "2.0L, 299 HP + Mild Hybrid System (EQ Boost)",
        fuel: "Gasoline, Mild Hybrid",
        color: "White Metallic (Polar White)",
        image: "images/photo_2026-02-02_18-46-34.jpg",
        features: ["Dual MBUX Display", "Digital Instrument Cluster", "Heated Memory Seats", "Panoramic Sunroof", "Semi-Autonomous Driving System", "LED Multibeam Headlights", "Keyless Go"],
        description: "Impeccably maintained business sedan in elegant white. The 2023 model is the updated W213 generation with modern technology, including the EQ Boost hybrid system for extra power and efficiency. Condition like new with minimal mileage.",
        availableForRent: true
    },
    {
        id: 4,
        brand: "Hyundai",
        model: "Sonata",
        fullName: "Hyundai Sonata 2023",
        year: 2023,
        price: 6000,
        formattedPrice: "6,000 AED",
        dailyPrice: Math.round(6000 / 30),
        mileage: "25,000 km",
        transmission: "Automatic",
        engine: "2.5L, 180 HP",
        fuel: "Gasoline",
        color: "Black (Ebony Black)",
        image: "images/photo_2026-02-02_18-45-20.jpg",
        features: ["Full Panoramic Sunroof", "12.3\" Digital Cluster", "10.25\" Multimedia Screen", "Adaptive Cruise Control", "Leather Interior", "Heated & Ventilated Seats", "LED Lighting"],
        description: "A stylish and tech-savvy business sedan in aggressive black. The 2023 model stands out with its futuristic design, including full-width LED lighting. It offers a spacious cabin, rich equipment, and excellent value for money.",

availableForRent: true
    },
    {
        id: 5,
        brand: "Kia",
        model: "Sportage",
        fullName: "Kia Sportage 2025",
        year: 2025,
        price: 6000,
        formattedPrice: "6,000 AED",
        dailyPrice: Math.round(6000 / 30),
        mileage: "0 km",
        transmission: "Automatic",
        engine: "1.6L Turbo, 150/180 HP / Hybrid (HEV)",
        fuel: "Gasoline / Hybrid",
        color: "Black (Obsidian Black)",
        image: "images/photo_2026-02-02_18-45-25.jpg",
        features: ["All-Wheel Drive", "Curved Dual Display", "Panoramic Sunroof", "Digital Keys", "Ventilated Front Seats", "Kia Drive Wise Semi-Autonomous System", "LED Headlights with 'Tiger Nose' DRLs"],
        description: "A brand new, bold, and technological crossover in stunning black. The fifth-generation Sportage features an ultra-modern futuristic design, a cabin built around curved screens, and an expanded range of powertrains, including hybrid versions. The car is ready for modern digital technologies.",
        availableForRent: true
    },
    {
        id: 6,
        brand: "Nissan",
        model: "Kicks",
        fullName: "Nissan Kicks 2025",
        year: 2025,
        price: 4500,
        formattedPrice: "4,500 AED",
        dailyPrice: Math.round(4500 / 30),
        mileage: "0 km",
        transmission: "CVT X-Tronic",
        engine: "1.6L, 122 HP",
        fuel: "Gasoline",
        color: "Gray Metallic (Magnetic Gray)",
        image: "images/photo_2026-02-02_18-45-28.jpg",
        features: ["Intelligent Emergency Braking", "Cruise Control", "Apple CarPlay / Android Auto", "360° Camera", "LED Headlights", "Traction Control System", "Air Conditioning"],
        description: "A modern, economical, and practical compact crossover in popular gray. The 2025 model offers eye-catching design, enhanced safety with Nissan Intelligent Mobility systems, excellent visibility, and compact city-friendly dimensions. An ideal choice for daily commuting.",
        availableForRent: true
    }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let favorites = [];
let currentView = 'grid';
let currentLanguage = 'en'; // Английский по умолчанию

// ========== МОДАЛЬНЫЕ ОКНА ==========
const consultationModal = document.getElementById('consultationModal');
const telegramModal = document.getElementById('telegramModal');
const rentModal = document.getElementById('rentModal');
const consultationFormModal = document.getElementById('consultationFormModal');
const rentFormModal = document.getElementById('rentFormModal');
const totalPriceElement = document.getElementById('totalPrice');
const priceNoteElement = document.getElementById('priceNote');
const consultationCatalogBtn = document.getElementById('consultationCatalogBtn');
const rentCatalogBtn = document.getElementById('rentCatalogBtn');
const telegramBtn = document.getElementById('telegramBtn');
const contactForm = document.getElementById('contactForm');

// ========== ЦЕНЫ АРЕНДЫ ==========
const rentPrices = {
    '1_day': 1,
    '3_days': 3,
    '1_week': 7,
    '2_weeks': 14,
    '1_month': 30
};

const extraOptions = {
    'insurance': 50,
    'delivery': 100,
    'child_seat': 10,
    'gps': 15
};

let currentCarPrice = 0;
let currentCarName = '';

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚗 NOMAD MOBILITY loaded');
    
    loadFavorites();
    renderCars();
    renderFavorites();
    setupAllEventListeners();
    initPhoneMask();
    initRentForm();
    
    loadPreferredLanguage();
    
    setTimeout(() => {
        showNotification(getTranslation('welcome'));
    }, 1000);
});

// ========== ЗАГРУЗКА ИЗБРАННОГО ==========
function loadFavorites() {
    try {
        const saved = localStorage.getItem('carFavorites');
        favorites = saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.log('Error loading favorites:', e);
        favorites = [];
    }
    updateFavoritesCount();
}

// ========== ОТОБРАЖЕНИЕ МАШИН С АРЕНДОЙ ==========
function renderCars() {
    const container = document.getElementById('carsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    carsData.forEach(function(car, index) {
        const card = createCarCard(car);
        card.style.animationDelay = (index * 0.1) + 's';
        container.appendChild(card);
    });
    
    updateResultsCount();
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.dataset.id = car.id;
    
    const isFavorite = favorites.includes(car.id);
    
    let featuresHTML = '';
    for (let i = 0; i < Math.min(3, car.features.length); i++) {
        featuresHTML += '<span class="feature-tag">' + car.features[i] + '</span>';
    }
    
    // Бейдж аренды
    let html = '<div class="rent-badge">' + getTranslation('rentBadge') + '</div>';
    html += '<div class="car-badge">' + car.year + '</div>';
    html += '<div class="car-actions">';
    html += '<button class="fav-btn' + (isFavorite ? ' active' : '') + '" title="' + (isFavorite ? getTranslation('removeFromFavorites') : getTranslation('addToFavorites')) + '">';
    html += '<i class="' + (isFavorite ? 'fas' : 'far') + ' fa-heart"></i>';
    html += '</button>';
    html += '</div>';
    html += '<img src="' + car.image + '" alt="' + car.fullName + '" class="car-image">';
    html += '<div class="car-info">';
    html += '<div class="car-header">';
    html += '<div>';
    html += '<h3 class="car-title">' + car.fullName + '</h3>';
    html += '<div class="car-details">';
    html += '<span><i class="fas fa-calendar"></i> ' + car.year + '</span>';
    html += '<span><i class="fas fa-tachometer-alt"></i> ' + car.mileage + '</span>';
    html += '<span><i class="fas fa-cog"></i> ' + car.transmission + '</span>';
    html += '<span><i class="fas fa-gas-pump"></i> ' + car.engine + '</span>';
    html += '</div>';
    html += '</div>';
    html += '<div class="car-price">' + car.formattedPrice + '<br><small style="font-size:12px;color:#aaa;">(' + getTranslation('fromPerDay').replace('{price}', Math.round(car.dailyPrice).toLocaleString()) + ')</small></div>';
    html += '</div>';
    html += '<div class="car-features">' + featuresHTML + '</div>';
    html += '<p style="opacity:0.8;margin:15px 0;line-height:1.5;">' + car.description + '</p>';
    
    // Кнопки: Консультация и Аренда
    html += '<div class="car-actions-bottom">';
    html += '<button class="detail-btn consult-car-btn" data-car-name="' + car.fullName + '">';
    html += '<i class="fas fa-info-circle"></i> ' + getTranslation('details');
    html += '</button>';
    html += '<button class="contact-btn rent-car-btn" data-car-name="' + car.fullName + '" data-car-price="' + car.dailyPrice + '" data-car-id="' + car.id + '">';
    html += '<i class="fas fa-calendar-alt"></i> ' + getTranslation('rentButton');
    html += '</button>';
    html += '</div>';
    html += '</div>';
    
    card.innerHTML = html;
    
    // Обработчики кнопок
    const favBtn = card.querySelector('.fav-btn');
    const consultBtn = card.querySelector('.consult-car-btn');
    const rentBtn = card.querySelector('.rent-car-btn');
    
    favBtn.addEventListener('click', function() {
        toggleFavorite(car.id, this);
    });
    
    consultBtn.addEventListener('click', function() {
        showCarDetails(car.id);
    });
    
    rentBtn.addEventListener('click', function() {
        const carName = this.getAttribute('data-car-name');
        const carPrice = parseFloat(this.getAttribute('data-car-price'));
        const carId = this.getAttribute('data-car-id');
        
        // Вариант 1: Отправляем в WhatsApp
        const phone = "971502571234"; // Ваш номер
        const message = `Hello from NOMAD MOBILITY!\n\n🚗 Car: ${carName}\n💰 Price: ${carPrice} AED/day\n📅 I want to rent this car. Please contact me for details.`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Вариант 2: ИЛИ открываем модальное окно аренды
        // if (rentModal) {
        //     openRentModal(carName, carPrice, carId);
        // }
    });
    return card;
}

// ========== ФУНКЦИИ АРЕНДЫ ==========

function openRentModal(carName, carPrice, carId) {
    if (!rentModal) return;
    
    const rentCarNameInput = document.getElementById('rentCarName');
    const rentCarPriceInput = document.getElementById('rentCarPrice');
    const rentCarIdInput = document.getElementById('rentCarId');
    
    if (rentCarNameInput) rentCarNameInput.value = carName;
    if (rentCarPriceInput) rentCarPriceInput.value = carPrice;
    if (rentCarIdInput) rentCarIdInput.value = carId;
    
    currentCarPrice = carPrice;
    currentCarName = carName;
    
    // Сброс формы
    if (rentFormModal) {
        rentFormModal.reset();
        totalPriceElement.textContent = '$0';
        priceNoteElement.textContent = '';
        
        // Сбрасываем даты
        const startDateInput = rentFormModal.querySelector('input[name="start_date"]');
        const endDateInput = rentFormModal.querySelector('input[name="end_date"]');
        if (startDateInput) startDateInput.value = '';
        if (endDateInput) endDateInput.value = '';
        
        // Сбрасываем выбранный период
        const periodSelect = rentFormModal.querySelector('select[name="rent_period"]');
        if (periodSelect) periodSelect.value = '1_day';
    }
    
    // Установка минимальной даты
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const startDateInput = rentFormModal.querySelector('input[name="start_date"]');
    const endDateInput = rentFormModal.querySelector('input[name="end_date"]');
    
    if (startDateInput) {
        startDateInput.min = tomorrow.toISOString().split('T')[0];
        startDateInput.value = '';
    }
    if (endDateInput) {
        endDateInput.min = tomorrow.toISOString().split('T')[0];
        endDateInput.value = '';
    }
    
    rentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Обновляем расчет
    updateRentCalculation();
}

function initRentForm() {
    if (!rentFormModal) return;
    
    // Обработчик изменения периода аренды
    const periodSelect = rentFormModal.querySelector('select[name="rent_period"]');
    const startDateInput = rentFormModal.querySelector('input[name="start_date"]');
    const endDateInput = rentFormModal.querySelector('input[name="end_date"]');
    const customDatesGroup = rentFormModal.querySelector('.custom-dates-group');
    
    if (periodSelect) {
        periodSelect.addEventListener('change', function() {
            if (this.value === 'custom') {
                if (customDatesGroup) customDatesGroup.style.display = 'block';
                if (startDateInput) startDateInput.required = true;
                if (endDateInput) endDateInput.required = true;
            } else {
                if (customDatesGroup) customDatesGroup.style.display = 'none';
                if (startDateInput) startDateInput.required = false;
                if (endDateInput) endDateInput.required = false;
                
                // Очищаем даты при выборе предустановленного периода
                if (startDateInput) startDateInput.value = '';
                if (endDateInput) endDateInput.value = '';
            }
            updateRentCalculation();
        });
    }
    
    // Обработчики для дат
    if (startDateInput) {
        startDateInput.addEventListener('change', function() {
            if (this.value) {
                const startDate = new Date(this.value);
                const minEndDate = new Date(startDate);
                minEndDate.setDate(minEndDate.getDate() + 1);
                
                if (endDateInput) {
                    endDateInput.min = minEndDate.toISOString().split('T')[0];
                    
                    // Если дата окончания раньше минимальной, сбрасываем ее

if (endDateInput.value && new Date(endDateInput.value) < minEndDate) {
                        endDateInput.value = '';
                    }
                }
            }
            updateRentCalculation();
        });
    }
    
    if (endDateInput) {
        endDateInput.addEventListener('change', updateRentCalculation);
    }
    
    // Обработчики для чекбоксов опций
    const optionCheckboxes = rentFormModal.querySelectorAll('input[type="checkbox"]');
    optionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateRentCalculation);
    });
}

function calculateRentTotal() {
    if (!rentFormModal || !currentCarPrice) return { total: 0, days: 1 };
    
    const formData = new FormData(rentFormModal);
    let total = 0;
    let days = 1;
    
    const period = formData.get('rent_period');
    const startDate = formData.get('start_date');
    const endDate = formData.get('end_date');
    
    if (period === 'custom' && startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        if (days < 1) days = 1;
    } else if (period && rentPrices[period]) {
        days = rentPrices[period];
    }
    
    total = currentCarPrice * days;
    
    const options = ['insurance', 'delivery', 'child_seat', 'gps'];
    options.forEach(option => {
        if (formData.get(option)) {
            if (option === 'delivery') {
                total += extraOptions[option];
            } else {
                total += extraOptions[option] * days;
            }
        }
    });
    
    return { total: Math.round(total), days };
}

function updateRentCalculation() {
    if (!totalPriceElement || !priceNoteElement) return;
    
    const result = calculateRentTotal();
    totalPriceElement.textContent = '$' + result.total.toLocaleString();
    
    if (result.days > 0 && result.total > 0) {
        const dailyPrice = Math.round(result.total / result.days);
        const dayWord = getDayWord(result.days);
        priceNoteElement.textContent = `≈ $${dailyPrice} ${getTranslation('perDayFor').replace('{days}', result.days).replace('{dayWord}', dayWord)};`
    } else {
        priceNoteElement.textContent = '';
    }
}

function getDayWord(days) {
    if (days === 1) return getTranslation('day');
    return getTranslation('days');
}

// ========== ИЗБРАННОЕ ==========
function toggleFavorite(carId, button) {
    const icon = button.querySelector('i');
    const index = favorites.indexOf(carId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        icon.className = 'far fa-heart';
        button.classList.remove('active');
        button.title = getTranslation('addToFavorites');
        showNotification(getTranslation('removedFromFavorites'));
    } else {
        favorites.push(carId);
        icon.className = 'fas fa-heart';
        button.classList.add('active');
        button.title = getTranslation('removeFromFavorites');
        showNotification(getTranslation('addedToFavorites'));
    }
    
    localStorage.setItem('carFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderFavorites();
}

function updateFavoritesCount() {
    const favCount = document.getElementById('favCount');
    if (favCount) {
        favCount.textContent = favorites.length;
    }
}

// ========== РАЗДЕЛ ИЗБРАННОГО ==========
function renderFavorites() {
    const container = document.getElementById('favoritesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-favorites">
                <i class="far fa-heart"></i>
                <h3>${getTranslation('noFavorites')}</h3>

Sheroz Kenzaev, [03.02.2026 23:39]
<p>${getTranslation('addFavorites')}</p>
            </div>
        `;
        return;
    }
    
    const favoriteCars = carsData.filter(car => favorites.includes(car.id));
    
    favoriteCars.forEach(function(car, index) {
        const card = createCarCard(car);
        card.style.animationDelay = (index * 0.1) + 's';
        container.appendChild(card);
    });
}

// ========== ОБНОВЛЕНИЕ СЧЕТЧИКОВ ==========
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = carsData.length;
    }
}

// ========== ФИЛЬТРАЦИЯ И СОРТИРОВКА ==========
function filterAndSortCars() {
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const rentFilter = document.getElementById('rentFilter');
    
    if (!searchInput || !sortSelect) return;
    
    const searchText = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const rentOnly = rentFilter ? rentFilter.checked : false;
    
    let filteredCars = carsData.filter(function(car) {
        // Фильтр по поиску
        if (searchText && !car.fullName.toLowerCase().includes(searchText) && 
            !car.brand.toLowerCase().includes(searchText) &&
            !car.model.toLowerCase().includes(searchText)) {
            return false;
        }
        
        // Фильтр "Только для аренды"
        if (rentOnly && !car.availableForRent) {
            return false;
        }
        
        return true;
    });
    
    // Сортировка
    if (sortValue === 'price_asc') {
        filteredCars.sort(function(a, b) { return a.price - b.price; });
    } else if (sortValue === 'price_desc') {
        filteredCars.sort(function(a, b) { return b.price - a.price; });
    } else if (sortValue === 'year_asc') {
        filteredCars.sort(function(a, b) { return a.year - b.year; });
    } else if (sortValue === 'year_desc') {
        filteredCars.sort(function(a, b) { return b.year - a.year; });
    }
    
    const container = document.getElementById('carsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    filteredCars.forEach(function(car, index) {
        const card = createCarCard(car);
        card.style.animationDelay = (index * 0.1) + 's';
        container.appendChild(card);
    });
    
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = filteredCars.length;
    }
}

// ========== ПРОСМОТР ДЕТАЛЕЙ ==========
function showCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    let message = getTranslation('car') + ': ' + car.fullName + '\n\n';
    message += getTranslation('year') + ': ' + car.year + '\n';
    message += getTranslation('mileage') + ': ' + car.mileage + '\n';
    message += getTranslation('transmission') + ': ' + car.transmission + '\n';
    message += getTranslation('engine') + ': ' + car.engine + '\n';
    message += getTranslation('fuel') + ': ' + car.fuel + '\n';
    message += getTranslation('color') + ': ' + car.color + '\n\n';
    message += getTranslation('price') + ': ' + car.formattedPrice + '\n';
    message += getTranslation('rentPrice') + ': ' + getTranslation('fromPerDay').replace('{price}', Math.round(car.dailyPrice).toLocaleString()) + '\n\n';
    message += car.description + '\n\n';
    message += getTranslation('features') + ':\n';
    car.features.forEach(feature => {
        message += '• ' + feature + '\n';
    });
    
    alert(message);
}

// ========== КОНТАКТ ПО МАШИНЕ ==========
function contactAboutCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;

if (consultationModal && consultationFormModal) {
        consultationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const messageField = consultationFormModal.querySelector('textarea[name="message"]');
        if (messageField) {
            messageField.value = getTranslation('interestedInCar') + ': ' + car.fullName + '\n\n';
        }
    }
}

// ========== ПЕРЕКЛЮЧЕНИЕ ВИДА ==========
function toggleView(view) {
    currentView = view;
    const container = document.getElementById('carsContainer');
    if (!container) return;
    
    container.className = 'cars-container ' + view + '-view';
    
    document.querySelectorAll('.view-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
}

// ========== ПАНЕЛЬ ПОИСКА ==========
function toggleSearchPanel() {
    const panel = document.getElementById('searchPanel');
    if (!panel) return;
    
    panel.classList.toggle('hidden');
    
    if (!panel.classList.contains('hidden')) {
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) globalSearch.focus();
    }
}

// ========== ТЕМА ==========
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
        showNotification(getTranslation('lightThemeOn'));
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-moon';
        showNotification(getTranslation('darkThemeOn'));
    }
    
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// ========== УВЕДОМЛЕНИЯ ==========
function showNotification(message) {
    document.querySelectorAll('.notification').forEach(n => {
        n.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i><span>' + message + '</span>';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ========== ПОЛУЧЕНИЕ ПЕРЕВОДА ==========
function getTranslation(key) {
    const translations = {
        en: {
            // Basic
            welcome: 'Welcome to NOMAD MOBILITY!',
            home: 'Home',
            catalog: 'Catalog',
            favorites: 'Favorites',
            contacts: 'Contacts',
            
            // Favorites
            addToFavorites: 'Add to favorites',
            removeFromFavorites: 'Remove from favorites',
            addedToFavorites: 'Added to favorites',
            removedFromFavorites: 'Removed from favorites',
            noFavorites: 'No favorite cars',
            addFavorites: 'Add cars to favorites',
            favoriteBadge: 'FAVORITE',
            
            // Buttons
            details: 'Details',
            consultation: 'Consultation',
            rentButton: 'Rent',
            bookNow: 'Book Now',
            requestCall: 'Request Call',
            
            // Rent
            rentBadge: 'FOR RENT',
            rentPrice: 'Rental price',
            fromPerDay: 'from {price} AED/day',
            perDayFor: 'per day for {days} {dayWord}',
            day: 'day',
            days: 'days',
            rentPeriod: 'Rental period',
            customDates: 'Select dates',
            startDate: 'Start date',
            endDate: 'End date',
            extraOptions: 'Extra options',

insurance: 'Insurance',
            delivery: 'Delivery',
            childSeat: 'Child seat',
            gps: 'GPS navigator',
            totalPrice: 'Total price',
            
            // Car details
            car: 'Car',
            year: 'Year',
            mileage: 'Mileage',
            transmission: 'Transmission',
            engine: 'Engine',
            fuel: 'Fuel',
            color: 'Color',
            price: 'Price',
            features: 'Features',
            interestedInCar: 'Interested in car',
            
            // Themes
            lightThemeOn: 'Light theme enabled',
            darkThemeOn: 'Dark theme enabled',
            
            // Languages
            languageChanged: 'Language changed to English',
            
            // Forms
            applicationSent: 'Application sent! We will contact you within 15 minutes.',
            rentRequestSent: 'Rental request sent! We will contact you for confirmation.',
            requestAccepted: 'Request accepted! We will call you back within 15 minutes.',
            pleaseEnterValidPhone: 'Please enter a valid phone number',
            pleaseSelectDates: 'Please select rental dates',
            endDateMustBeLater: 'End date must be later than start date',
            sending: 'Sending',
            sendingError: 'Sending error. Please try again.',
            selectCarForRent: 'To rent, select a car in the catalog and click "Rent"',
            
            // Search and filters
            searchPlaceholder: 'Search cars...',
            onlyRent: 'For rent only',
            sortDefault: 'Default',
            priceAsc: 'Price ascending',
            priceDesc: 'Price descending',
            yearAsc: 'Year ascending',
            yearDesc: 'Year descending'
        },
        ar: {
            // Arabic translations
            welcome: 'مرحبًا بك في NOMAD MOBILITY!',
            home: 'الرئيسية',
            catalog: 'الكاتالوج',
            favorites: 'المفضلة',
            contacts: 'جهات الاتصال',
            
            // Favorites
            addToFavorites: 'إضافة إلى المفضلة',
            removeFromFavorites: 'إزالة من المفضلة',
            addedToFavorites: 'تمت الإضافة إلى المفضلة',
            removedFromFavorites: 'تم الحذف من المفضلة',
            noFavorites: 'لا توجد سيارات مفضلة',
            addFavorites: 'أضف سيارات إلى المفضلة',
            favoriteBadge: 'المفضلة',
            
            // Buttons
            details: 'تفاصيل',
            consultation: 'استشارة',
            rentButton: 'استئجار',
            bookNow: 'احجز الآن',
            requestCall: 'طلب اتصال',
            
            // Rent
            rentBadge: 'للإيجار',
            rentPrice: 'سعر الإيجار',
            fromPerDay: 'من {price} روبل/يوم',
            perDayFor: 'في اليوم لمدة {days} {dayWord}',
            day: 'يوم',
            days: 'أيام',
            rentPeriod: 'فترة الإيجار',
            customDates: 'اختر التواريخ',
            startDate: 'تاريخ البدء',
            endDate: 'تاريخ الانتهاء',
            extraOptions: 'خيارات إضافية',
            insurance: 'تأمين',
            delivery: 'توصيل',
            childSeat: 'مقعد أطفال',
            gps: 'ملاح GPS',
            totalPrice: 'السعر الإجمالي',
            
            // Car details
            car: 'سيارة',
            year: 'السنة',
            mileage: 'المسافة المقطوعة',
            transmission: 'ناقل الحركة',
            engine: 'المحرك',
            fuel: 'الوقود',
            color: 'اللون',
            price: 'السعر',
            features: 'المميزات',
            interestedInCar: 'مهتم بالسيارة',
            
            // Themes
            lightThemeOn: 'تم تفعيل السمة الفاتحة',
            darkThemeOn: 'تم تفعيل السمة الداكنة',

// Languages
            languageChanged: 'تم تغيير اللغة إلى العربية',
            
            // Forms
            applicationSent: 'تم إرسال الطلب! سنتصل بك خلال 15 دقيقة.',
            rentRequestSent: 'تم إرسال طلب الإيجار! سنتصل بك للتأكيد.',
            requestAccepted: 'تم قبول الطلب! سنتصل بك خلال 15 دقيقة.',
            pleaseEnterValidPhone: 'يرجى إدخال رقم هاتف صحيح',
            pleaseSelectDates: 'يرجى تحديد تواريخ الإيجار',
            endDateMustBeLater: 'يجب أن يكون تاريخ الانتهاء بعد تاريخ البدء',
            sending: 'جارٍ الإرسال',
            sendingError: 'خطأ في الإرسال. يرجى المحاولة مرة أخرى.',
            selectCarForRent: 'للإيجار، حدد سيارة في الكتالوج وانقر على "استئجار"',
            
            // Search and filters
            searchPlaceholder: 'ابحث عن سيارات...',
            onlyRent: 'للإيجار فقط',
            sortDefault: 'افتراضي',
            priceAsc: 'السعر تصاعديًا',
            priceDesc: 'السعر تنازليًا',
            yearAsc: 'السنة تصاعديًا',
            yearDesc: 'السنة تنازليًا'
        }
    };
    
    // Получаем переводы для текущего языка (английский по умолчанию)
    const langTranslations = translations[currentLanguage] || translations.en;
    
    // Получаем конкретный перевод
    let translation = langTranslations[key];
    
    // Если нет перевода для ключа, используем английский
    if (!translation) {
        translation = translations.en[key] || key;
        
        // Предупреждение в консоль
        if (translation === key && console && console.warn) {
            console.warn('⚠️ No translation for key:', key, 'Language:', currentLanguage);
        }
    }
    
    return translation;
}

// ========== МАСКА ДЛЯ ТЕЛЕФОНА (международный формат) ==========
function initPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        // Для международных номеров используем простую валидацию
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                // Форматируем как международный номер
                if (value.length <= 3) {
                    this.value = '+' + value;
                } else if (value.length <= 6) {
                    this.value = '+' + value.substring(0, 3) + ' ' + value.substring(3);
                } else if (value.length <= 9) {
                    this.value = '+' + value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6);
                } else {
                    this.value = '+' + value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6, 9) + ' ' + value.substring(9, 12);
                }
            }
        });
        
        // Устанавливаем placeholder
        if (!input.value && !input.placeholder.includes('+')) {
            input.placeholder = '+971 50 123 4567';
        }
    });
}

// ========== ОБРАБОТКА ФОРМ ==========
if (consultationFormModal) {
    consultationFormModal.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        const phone = formData.get('phone');
        if (!phone || phone.replace(/\D/g, '').length < 8) {
            alert(getTranslation('pleaseEnterValidPhone'));
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + getTranslation('sending') + '...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const successDiv = document.createElement('div');

successDiv.className = 'success-message';
            successDiv.innerHTML = '<i class="fas fa-check-circle"></i><p>' + getTranslation('applicationSent') + '</p>';
            this.appendChild(successDiv);
            
            this.reset();
            
            setTimeout(() => {
                if (consultationModal) {
                    consultationModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }, 3000);
            
        } catch (error) {
            alert(getTranslation('sendingError'));
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

if (rentFormModal) {
    rentFormModal.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Валидация телефона
        const phone = formData.get('phone');
        if (!phone || phone.replace(/\D/g, '').length < 8) {
            alert(getTranslation('pleaseEnterValidPhone'));
            return;
        }
        
        // Валидация дат для кастомного периода
        const period = formData.get('rent_period');
        const startDate = formData.get('start_date');
        const endDate = formData.get('end_date');
        
        if (period === 'custom') {
            if (!startDate || !endDate) {
                alert(getTranslation('pleaseSelectDates'));
                return;
            }
            
            const start = new Date(startDate);
            const end = new Date(endDate);
            
            if (end <= start) {
                alert(getTranslation('endDateMustBeLater'));
                return;
            }
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + getTranslation('sending') + '...';
        submitBtn.disabled = true;
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>${getTranslation('rentRequestSent')}</p>
                <p style="font-size: 14px; margin-top: 10px;">${currentCarName}</p>
            `;
            this.appendChild(successDiv);
            
            this.reset();
            
            setTimeout(() => {
                if (rentModal) {
                    rentModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }, 3000);
            
        } catch (error) {
            alert(getTranslation('sendingError'));
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Валидация
        if (!name || name.trim().length < 2) {
            alert('Please enter your name');
            return;
        }
        
        if (!phone || phone.replace(/\D/g, '').length < 8) {
            alert(getTranslation('pleaseEnterValidPhone'));
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + getTranslation('sending') + '...';
        submitBtn.disabled = true;
        
        try {
            // 1. Отправляем в WhatsApp
            const businessPhone = "971502571234"; // Ваш номер WhatsApp
            const message = `📞 *NEW CALL REQUEST - NOMAD MOBILITY*\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n⏰ Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}\n📍 Dubai, UAE\n\nPlease call back as soon as possible!`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
            
            // 2. Сохраняем в localStorage
            const requests = JSON.parse(localStorage.getItem('nomad_call_requests') || '[]');
            requests.push({
                name: name,
                phone: phone,
                date: new Date().toISOString(),
                status: 'pending'
            });
            localStorage.setItem('nomad_call_requests', JSON.stringify(requests));
            
            // 3. Показываем успешное сообщение
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>${getTranslation('requestAccepted')}</p>
                <p style="font-size: 14px; opacity: 0.9; margin-top: 10px;">
                    WhatsApp has been opened. We will call you within 15 minutes!
                </p>
            `;
            
            // Удаляем старые сообщения
            const oldMessages = this.querySelectorAll('.success-message');
            oldMessages.forEach(msg => msg.remove());
            
            // Добавляем новое сообщение
            this.appendChild(successDiv);
            
            // 4. Сбрасываем форму
            this.reset();
            
            // 5. Обновляем счетчик
            updateCallRequestsCount();
            
            // 6. Автоматически скрываем через 5 секунд
            setTimeout(() => {
                if (successDiv.parentElement) {
                    successDiv.style.opacity = '0';
                    successDiv.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        if (successDiv.parentElement) {
                            successDiv.remove();
                        }
                    }, 500);
                }
            }, 5000);
            
        } catch (error) {
            console.error('Error sending request:', error);
            alert(getTranslation('sendingError') + '\nPlease call us directly: +971 50 257 1234');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Функция для подсчета заявок
function updateCallRequestsCount() {
    try {
        const requests = JSON.parse(localStorage.getItem('nomad_call_requests') || '[]');
        const pendingRequests = requests.filter(req => req.status === 'pending').length;

// Показываем в консоли для информации
        if (pendingRequests > 0) {
            console.log(`📊 You have ${pendingRequests} pending call requests`);
        }
        
        // Можно добавить бейдж на кнопку телефона в навигации
        const phoneIcons = document.querySelectorAll('.fa-phone, .fa-phone-alt');
        phoneIcons.forEach(icon => {
            const parent = icon.closest('button, .nav-action-btn, a');
            if (parent && pendingRequests > 0) {
                let badge = parent.querySelector('.call-badge');
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'call-badge';
                    badge.style.cssText = `
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        background: #ff4757;
                        color: white;
                        font-size: 10px;
                        padding: 2px 6px;
                        border-radius: 50%;
                        min-width: 18px;
                        height: 18px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                    `;
                    parent.style.position = 'relative';
                    parent.appendChild(badge);
                }
                badge.textContent = pendingRequests;
                badge.style.display = 'flex';
            }
        });
        
    } catch (e) {
        console.error('Error updating requests count:', e);
    }
}

// Загружаем счетчик при старте
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateCallRequestsCount, 1000);
});

// Также обновляем счетчик при отправке других форм
if (consultationFormModal) {
    consultationFormModal.addEventListener('submit', function() {
        setTimeout(updateCallRequestsCount, 2000);
    });
}

if (rentFormModal) {
    rentFormModal.addEventListener('submit', function() {
        setTimeout(updateCallRequestsCount, 2000);
    });
}

// ========== ОБРАБОТЧИКИ СОБЫТИЙ ==========
function setupAllEventListeners() {
    // 1. Кнопка темы
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 2. Кнопка избранного
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', function() {
            const favoritesSection = document.getElementById('favoritesSection');
            if (favoritesSection) {
                favoritesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // 3. Кнопка поиска
    const searchToggle = document.getElementById('searchToggle');
    const searchClose = document.getElementById('searchClose');
    if (searchToggle) searchToggle.addEventListener('click', toggleSearchPanel);
    if (searchClose) searchClose.addEventListener('click', toggleSearchPanel);
    
    // 4. Поиск и сортировка
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const rentFilter = document.getElementById('rentFilter');
    
    if (searchInput) searchInput.addEventListener('input', filterAndSortCars);
    if (sortSelect) sortSelect.addEventListener('change', filterAndSortCars);
    if (rentFilter) rentFilter.addEventListener('change', filterAndSortCars);
    
    // 5. Кнопки вида
    document.querySelectorAll('.view-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            toggleView(this.dataset.view);
        });
    });
    
    // 6. Глобальный поиск
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', function() {
            const searchText = this.value.toLowerCase();
            document.querySelectorAll('.car-card').forEach(function(car) {
                const title = car.querySelector('.car-title');
                if (title) {
                    const titleText = title.textContent.toLowerCase();
                    if (titleText.includes(searchText) || searchText === '') {
                        car.style.display = 'block';
                    } else {
                        car.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // 7. Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const menu = document.querySelector('.nav-menu');
            if (menu) {
                menu.classList.toggle('active');
            }
        });
    }
    
    // 8. Кнопки в каталоге
    if (consultationCatalogBtn) {
        consultationCatalogBtn.addEventListener('click', () => {
            if (consultationModal) {
                consultationModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    if (rentCatalogBtn) {
        rentCatalogBtn.addEventListener('click', () => {
            showNotification(getTranslation('selectCarForRent'));
        });
    }
    
    // 9. Кнопка Telegram
    const telegramBtn = document.getElementById('telegramBtn');

if (telegramBtn) {
        telegramBtn.addEventListener('click', () => {
            // ⭐⭐⭐ REPLACE WITH YOUR TELEGRAM USERNAME ⭐⭐⭐
            window.open('https://t.me/sherozkenzaev', '_blank');
        });
    }
    
    // 10. Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                if (window.innerWidth <= 768) {
                    const menu = document.querySelector('.nav-menu');
                    if (menu) menu.classList.remove('active');
                }
            }
        });
    });
    
    // 11. Кнопка "View Catalog"
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const catalog = document.getElementById('catalog');
            if (catalog) {
                catalog.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // 12. Кнопка "Scroll to Top"
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove('hidden');
            } else {
                scrollBtn.classList.add('hidden');
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // 13. Загружаем тему
    loadTheme();
    
    // 14. Кнопка языка (оставляем только английский и арабский)
    setupLanguageSwitcher();
    
    // 15. Закрытие модальных окон
    setupModalCloseHandlers();
}

// ========== ВЫБОР ЯЗЫКА (только EN и AR) ==========
function setupLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const languageModal = document.getElementById('languageModal');
    
    if (!languageBtn || !languageModal) return;
    
    // Скрываем русский, китайский и хинди варианты
    document.querySelectorAll('.language-option[data-lang="ru"], .language-option[data-lang="zh"], .language-option[data-lang="hi"]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Открытие модального окна
    languageBtn.addEventListener('click', function() {
        languageModal.classList.remove('hidden');
    });
    
    // Закрытие модального окна
    const modalClose = languageModal.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            languageModal.classList.add('hidden');
        });
    }
    
    // Закрытие по клику вне окна
    languageModal.addEventListener('click', function(e) {
        if (e.target === languageModal) {
            languageModal.classList.add('hidden');
        }
    });
    
    // Выбор языка
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
            languageModal.classList.add('hidden');
            
            // Обновляем текущий язык в кнопке
            const currentLangSpan = document.querySelector('.current-lang');
            if (currentLangSpan) {
                currentLangSpan.textContent = lang.toUpperCase();
            }
            
            // Показываем уведомление
            showNotification(getTranslation('languageChanged'));
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Обновляем кнопку языка
    const currentLangSpan = document.querySelector('.current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // Перерисовываем страницу
    renderCars();
    renderFavorites();
    
    showNotification(getTranslation('languageChanged'));
}

function loadPreferredLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
        changeLanguage(savedLang);
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = savedLang.toUpperCase();
        }
    }
}

// ========== ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН ==========
function setupModalCloseHandlers() {
    // Закрытие кнопкой X
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });
    
    // Закрытие при клике вне окна
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Закрытие при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal);
            });
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========== ЗАГРУЗКА ТЕМЫ ==========
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        const themeIcon = document.querySelector('#themeToggle i');
        
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-theme');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-mode');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
        }
    } catch (e) {
        console.log('Error loading theme');
    }
}

// ========== ДОПОЛНИТЕЛЬНЫЙ ФИКС ДЛЯ КНОПОК ==========
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('button, .btn').forEach(btn => {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.display = 'flex';
            btn.style.position = 'relative';
            btn.style.zIndex = '100';
        });
    }, 100);
});

// ===== FIX GET CONSULTATION BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const consultationBtn = document.getElementById('consultationCatalogBtn');
    
    if (consultationBtn) {
        // Удаляем старый обработчик (если есть)
        consultationBtn.replaceWith(consultationBtn.cloneNode(true));
        
        // Добавляем новый обработчик
        const newConsultationBtn = document.getElementById('consultationCatalogBtn');
        newConsultationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const businessPhone = "971502571234";
            const message = `💬 *CONSULTATION REQUEST - NOMAD MOBILITY*\n\nI need a consultation about luxury car rental in Dubai.\n\nPlease contact me with:\n• Available premium cars\n• Best rental prices\n• Insurance options\n• Requirements & documents\n• Delivery service\n\n⏰ Time: ${new Date().toLocaleString()}\n📍 Dubai, UAE`;
            
            window.open(`https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`, '_blank');
            
            showNotification('Consultation request sent to WhatsApp');
        });
    }
});







// // ========== ДАННЫЕ МАШИН ==========
// const carsData = [
//     {
//         id: 1,
//         brand: "Mercedes-Benz",
//         model: "S-Class",
//         fullName: "Mercedes-Benz S-Class",
//         year: 2021,
//         price: 8900000,
//         formattedPrice: "8 900 000 ₽",
//         mileage: "25 000 км",
//         transmission: "Автомат",
//         engine: "3.0 л, 367 л.с.",
//         fuel: "Бензин",
//         color: "Черный металлик",
//         image: "images/BMWG90.jpg",
//         features: ["Панорамная крыша", "Кожаный салон", "Массажные кресла"],
//         description: "Премиальный седан в идеальном состоянии."
//     },
//     {
//         id: 2,
//         brand: "BMW",
//         model: "X6 M Competition",
//         fullName: "BMW X6 M Competition",
//         year: 2022,
//         price: 12500000,
//         formattedPrice: "12 500 000 ₽",
//         mileage: "15 000 км",
//         transmission: "Автомат",
//         engine: "4.4 л, 625 л.с.",
//         fuel: "Бензин",
//         color: "Синий металлик",
//         image: "https://avatars.mds.yandex.net/i?id=54ca75fc035f5f365f26ae3f02de7162cb1c5968-4303023-images-thumbs&n=13",
//         features: ["Пакет M Competition", "Керамические тормоза", "Карбоновые вставки"],
//         description: "Экстремальный внедорожник в максимальной комплектации."
//     }
// ];

// // ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
// let favorites = [];
// let currentView = 'grid';

// // ========== ИНИЦИАЛИЗАЦИЯ ==========
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('🚗 AutoLux Premium загружен');
    
//     loadFavorites();
//     renderCars();
//     renderFavorites();
//     setupAllEventListeners();
    
//     // Загружаем сохраненный язык
//     loadPreferredLanguage();
    
//     setTimeout(() => {
//         showNotification('Добро пожаловать в AutoLux Premium!');
//     }, 1000);
// });

// // ========== ЗАГРУЗКА ИЗБРАННОГО ==========
// function loadFavorites() {
//     try {
//         const saved = localStorage.getItem('carFavorites');
//         favorites = saved ? JSON.parse(saved) : [];
//     } catch (e) {
//         console.log('Ошибка загрузки избранного:', e);
//         favorites = [];
//     }
//     updateFavoritesCount();
// }

// // ========== ОТОБРАЖЕНИЕ МАШИН ==========
// function renderCars() {
//     const container = document.getElementById('carsContainer');
//     if (!container) return;
    
//     container.innerHTML = '';
    
//     carsData.forEach(function(car, index) {
//         const card = createCarCard(car);
//         card.style.animationDelay = (index * 0.1) + 's';
//         container.appendChild(card);
//     });
    
//     updateResultsCount();
// }

// function createCarCard(car) {
//     const card = document.createElement('div');
//     card.className = 'car-card';
//     card.dataset.id = car.id;
    
//     const isFavorite = favorites.includes(car.id);
    
//     let featuresHTML = '';
//     for (let i = 0; i < Math.min(3, car.features.length); i++) {
//         featuresHTML += '<span class="feature-tag">' + car.features[i] + '</span>';
//     }
    
//     let html = '';
//     html += '<div class="car-badge">' + car.year + '</div>';
//     html += '<div class="car-actions">';
//     html += '<button class="fav-btn' + (isFavorite ? ' active' : '') + '" title="' + (isFavorite ? 'Удалить из избранного' : 'Добавить в избранное') + '">';
//     html += '<i class="' + (isFavorite ? 'fas' : 'far') + ' fa-heart"></i>';
//     html += '</button>';
//     html += '</div>';
//     html += '<img src="' + car.image + '" alt="' + car.fullName + '" class="car-image">';
//     html += '<div class="car-info">';
//     html += '<div class="car-header">';
//     html += '<div>';
//     html += '<h3 class="car-title">' + car.fullName + '</h3>';
//     html += '<div class="car-details">';
//     html += '<span><i class="fas fa-calendar"></i> ' + car.year + ' г.</span>';
//     html += '<span><i class="fas fa-tachometer-alt"></i> ' + car.mileage + '</span>';
//     html += '<span><i class="fas fa-cog"></i> ' + car.transmission + '</span>';

// html += '<span><i class="fas fa-gas-pump"></i> ' + car.engine + '</span>';
//     html += '</div>';
//     html += '</div>';
//     html += '<div class="car-price">' + car.formattedPrice + '</div>';
//     html += '</div>';
//     html += '<div class="car-features">' + featuresHTML + '</div>';
//     html += '<p style="opacity:0.8;margin:15px 0;line-height:1.5;">' + car.description + '</p>';
//     html += '<div class="car-actions-bottom">';
//     html += '<button class="detail-btn">';
//     html += '<i class="fas fa-info-circle"></i> Подробнее';
//     html += '</button>';
//     html += '<button class="contact-btn">';
//     html += '<i class="fas fa-phone"></i> Консультация';
//     html += '</button>';
//     html += '</div>';
//     html += '</div>';
    
//     card.innerHTML = html;
    
//     const favBtn = card.querySelector('.fav-btn');
//     const detailBtn = card.querySelector('.detail-btn');
//     const contactBtn = card.querySelector('.contact-btn');
    
//     favBtn.addEventListener('click', function() {
//         toggleFavorite(car.id, this);
//     });
    
//     detailBtn.addEventListener('click', function() {
//         showCarDetails(car.id);
//     });
    
//     contactBtn.addEventListener('click', function() {
//         contactAboutCar(car.id);
//     });
    
//     return card;
// }

// // ========== ИЗБРАННОЕ ==========
// function toggleFavorite(carId, button) {
//     const icon = button.querySelector('i');
//     const index = favorites.indexOf(carId);
    
//     if (index > -1) {
//         favorites.splice(index, 1);
//         icon.className = 'far fa-heart';
//         button.classList.remove('active');
//         button.title = 'Добавить в избранное';
//         showNotification('Удалено из избранного');
//     } else {
//         favorites.push(carId);
//         icon.className = 'fas fa-heart';
//         button.classList.add('active');
//         button.title = 'Удалить из избранного';
//         showNotification('Добавлено в избранное');
//     }
    
//     localStorage.setItem('carFavorites', JSON.stringify(favorites));
//     updateFavoritesCount();
//     renderFavorites();
// }

// function updateFavoritesCount() {
//     const favCount = document.getElementById('favCount');
//     if (favCount) {
//         favCount.textContent = favorites.length;
//     }
// }

// // ========== РАЗДЕЛ ИЗБРАННОГО ==========
// function renderFavorites() {
//     const container = document.getElementById('favoritesContainer');
//     if (!container) return;
    
//     container.innerHTML = '';
    
//     if (favorites.length === 0) {
//         container.innerHTML = '<div class="empty-favorites"><i class="far fa-heart"></i><h3>Нет избранных автомобилей</h3><p>Добавьте автомобили в избранное, нажав на сердечко</p></div>';
//         return;
//     }
    
//     const favoriteCars = carsData.filter(car => favorites.includes(car.id));
    
//     favoriteCars.forEach(function(car, index) {
//         const card = createFavoriteCard(car);
//         card.style.animationDelay = (index * 0.1) + 's';
//         container.appendChild(card);
//     });
// }

// function createFavoriteCard(car) {
//     const card = document.createElement('div');
//     card.className = 'car-card';
    
//     let featuresHTML = '';
//     for (let i = 0; i < Math.min(3, car.features.length); i++) {
//         featuresHTML += '<span class="feature-tag">' + car.features[i] + '</span>';
//     }
    
//     let html = '';
//     html += '<div class="car-badge" style="background:linear-gradient(45deg, #e74c3c, #ff7979)">ИЗБРАННОЕ</div>';
//     html += '<div class="car-actions">';
//     html += '<button class="fav-btn active" title="Удалить из избранного">';
//     html += '<i class="fas fa-heart"></i>';
//     html += '</button>';
//     html += '</div>';
//     html += '<img src="' + car.image + '" alt="' + car.fullName + '" class="car-image">';
//     html += '<div class="car-info">';
//     html += '<div class="car-header">';
//     html += '<div>';
//     html += '<h3 class="car-title">' + car.fullName + '</h3>';

// html += '<div class="car-details">';
//     html += '<span><i class="fas fa-calendar"></i> ' + car.year + ' г.</span>';
//     html += '<span><i class="fas fa-tachometer-alt"></i> ' + car.mileage + '</span>';
//     html += '<span><i class="fas fa-cog"></i> ' + car.transmission + '</span>';
//     html += '<span><i class="fas fa-gas-pump"></i> ' + car.engine + '</span>';
//     html += '</div>';
//     html += '</div>';
//     html += '<div class="car-price">' + car.formattedPrice + '</div>';
//     html += '</div>';
//     html += '<div class="car-features">' + featuresHTML + '</div>';
//     html += '<p style="opacity:0.8;margin:15px 0;line-height:1.5;">' + car.description + '</p>';
//     html += '<div class="car-actions-bottom">';
//     html += '<button class="detail-btn">';
//     html += '<i class="fas fa-info-circle"></i> Подробнее';
//     html += '</button>';
//     html += '<button class="contact-btn">';
//     html += '<i class="fas fa-phone"></i> Консультация';
//     html += '</button>';
//     html += '</div>';
//     html += '</div>';
    
//     card.innerHTML = html;
    
//     const favBtn = card.querySelector('.fav-btn');
//     const detailBtn = card.querySelector('.detail-btn');
//     const contactBtn = card.querySelector('.contact-btn');
    
//     favBtn.addEventListener('click', function() {
//         toggleFavorite(car.id, this);
//     });
    
//     detailBtn.addEventListener('click', function() {
//         showCarDetails(car.id);
//     });
    
//     contactBtn.addEventListener('click', function() {
//         contactAboutCar(car.id);
//     });
    
//     return card;
// }

// // ========== ОБНОВЛЕНИЕ СЧЕТЧИКОВ ==========
// function updateResultsCount() {
//     const resultsCount = document.getElementById('resultsCount');
//     if (resultsCount) {
//         resultsCount.textContent = carsData.length;
//     }
// }

// // ========== ФИЛЬТРАЦИЯ И СОРТИРОВКА ==========
// function filterAndSortCars() {
//     const searchInput = document.getElementById('searchInput');
//     const sortSelect = document.getElementById('sortSelect');
    
//     if (!searchInput || !sortSelect) return;
    
//     const searchText = searchInput.value.toLowerCase();
//     const sortValue = sortSelect.value;
    
//     let filteredCars = carsData.filter(function(car) {
//         if (searchText === '') return true;
//         return car.fullName.toLowerCase().includes(searchText) 
//                || car.brand.toLowerCase().includes(searchText)
//                || car.model.toLowerCase().includes(searchText);
//     });
    
//     if (sortValue === 'price_asc') {
//         filteredCars.sort(function(a, b) { return a.price - b.price; });
//     } else if (sortValue === 'price_desc') {
//         filteredCars.sort(function(a, b) { return b.price - a.price; });
//     } else if (sortValue === 'year_asc') {
//         filteredCars.sort(function(a, b) { return a.year - b.year; });
//     } else if (sortValue === 'year_desc') {
//         filteredCars.sort(function(a, b) { return b.year - a.year; });
//     }
    
//     const container = document.getElementById('carsContainer');
//     if (!container) return;
    
//     container.innerHTML = '';
    
//     filteredCars.forEach(function(car, index) {
//         const card = createCarCard(car);
//         card.style.animationDelay = (index * 0.1) + 's';
//         container.appendChild(card);
//     });
    
//     const resultsCount = document.getElementById('resultsCount');
//     if (resultsCount) {
//         resultsCount.textContent = filteredCars.length;
//     }
// }

// // ========== ПРОСМОТР ДЕТАЛЕЙ ==========
// function showCarDetails(carId) {
//     const car = carsData.find(c => c.id === carId);
//     if (!car) return;
    
//     let message = 'Автомобиль: ' + car.fullName + '\n\n';
//     message += 'Год выпуска: ' + car.year + '\n';
//     message += 'Пробег: ' + car.mileage + '\n';
//     message += 'КПП: ' + car.transmission + '\n';
//     message += 'Двигатель: ' + car.engine + '\n';

// message += 'Топливо: ' + car.fuel + '\n';
//     message += 'Цвет: ' + car.color + '\n\n';
//     message += 'Цена: ' + car.formattedPrice + '\n\n';
//     message += car.description + '\n\n';
//     message += 'Особенности:\n';
//     car.features.forEach(feature => {
//         message += '• ' + feature + '\n';
//     });
    
//     alert(message);
// }

// // ========== КОНТАКТ ПО МАШИНЕ ==========
// function contactAboutCar(carId) {
//     const car = carsData.find(c => c.id === carId);
//     if (!car) return;
    
//     const phone = prompt('Хотите позвонить по поводу ' + car.fullName + '?\n\nВведите ваш номер телефона:', '+7');
//     if (phone && phone.length > 5) {
//         showNotification('Заявка принята! Мы перезвоним вам в течение 15 минут.');
//     }
// }

// // ========== ПЕРЕКЛЮЧЕНИЕ ВИДА ==========
// function toggleView(view) {
//     currentView = view;
//     const container = document.getElementById('carsContainer');
//     if (!container) return;
    
//     container.className = 'cars-container ' + view + '-view';
    
//     document.querySelectorAll('.view-btn').forEach(function(btn) {
//         btn.classList.remove('active');
//         if (btn.dataset.view === view) {
//             btn.classList.add('active');
//         }
//     });
// }

// // ========== ПАНЕЛЬ ПОИСКА ==========
// function toggleSearchPanel() {
//     const panel = document.getElementById('searchPanel');
//     if (!panel) return;
    
//     panel.classList.toggle('hidden');
    
//     if (!panel.classList.contains('hidden')) {
//         const globalSearch = document.getElementById('globalSearch');
//         if (globalSearch) globalSearch.focus();
//     }
// }

// // ========== ТЕМА ==========
// function toggleTheme() {
//     const body = document.body;
//     const themeIcon = document.querySelector('#themeToggle i');
    
//     if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-theme');
//         themeIcon.className = 'fas fa-sun';
//         showNotification('Включена светлая тема');
//     } else {
//         body.classList.remove('light-theme');
//         body.classList.add('dark-mode');
//         themeIcon.className = 'fas fa-moon';
//         showNotification('Включена темная тема');
//     }
    
//     localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
// }

// // ========== УВЕДОМЛЕНИЯ ==========
// function showNotification(message) {
//     document.querySelectorAll('.notification').forEach(n => {
//         n.remove();
//     });
    
//     const notification = document.createElement('div');
//     notification.className = 'notification';
//     notification.innerHTML = '<i class="fas fa-check-circle"></i><span>' + message + '</span>';
//     document.body.appendChild(notification);
    
//     setTimeout(() => {
//         notification.remove();
//     }, 3000);
// }

// // ========== НАСТРОЙКА ВСЕХ ОБРАБОТЧИКОВ ==========
// function setupAllEventListeners() {
//     // 1. Кнопка темы
//     const themeToggle = document.getElementById('themeToggle');
//     if (themeToggle) {
//         themeToggle.addEventListener('click', toggleTheme);
//     }
    
//     // 2. Кнопка избранного
//     const favoritesBtn = document.getElementById('favoritesBtn');
//     if (favoritesBtn) {
//         favoritesBtn.addEventListener('click', function() {
//             const favoritesSection = document.getElementById('favoritesSection');
//             if (favoritesSection) {
//                 favoritesSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     }
    
//     // 3. Кнопка поиска
//     const searchToggle = document.getElementById('searchToggle');
//     const searchClose = document.getElementById('searchClose');
//     if (searchToggle) searchToggle.addEventListener('click', toggleSearchPanel);
//     if (searchClose) searchClose.addEventListener('click', toggleSearchPanel);
    
//     // 4. Поиск и сортировка
//     const searchInput = document.getElementById('searchInput');

// const sortSelect = document.getElementById('sortSelect');
//     if (searchInput) searchInput.addEventListener('input', filterAndSortCars);
//     if (sortSelect) sortSelect.addEventListener('change', filterAndSortCars);
    
//     // 5. Кнопки вида
//     document.querySelectorAll('.view-btn').forEach(function(btn) {
//         btn.addEventListener('click', function() {
//             toggleView(this.dataset.view);
//         });
//     });
    
//     // 6. Глобальный поиск
//     const globalSearch = document.getElementById('globalSearch');
//     if (globalSearch) {
//         globalSearch.addEventListener('input', function() {
//             const searchText = this.value.toLowerCase();
//             document.querySelectorAll('.car-card').forEach(function(car) {
//                 const title = car.querySelector('.car-title');
//                 if (title) {
//                     const titleText = title.textContent.toLowerCase();
//                     if (titleText.includes(searchText) || searchText === '') {
//                         car.style.display = 'block';
//                     } else {
//                         car.style.display = 'none';
//                     }
//                 }
//             });
//         });
//     }
    
//     // 7. Мобильное меню
//     const menuToggle = document.querySelector('.menu-toggle');
//     if (menuToggle) {
//         menuToggle.addEventListener('click', function() {
//             const menu = document.querySelector('.nav-menu');
//             if (menu) {
//                 menu.classList.toggle('active');
//             }
//         });
//     }
    
//     // 8. Контактная форма
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             showNotification('Заявка отправлена! Мы свяжемся с вами в течение 15 минут.');
//             this.reset();
//         });
//     }
    
//     // 9. Плавная прокрутка
//     document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
//         anchor.addEventListener('click', function(e) {
//             const href = this.getAttribute('href');
//             if (href === '#') return;
            
//             const target = document.querySelector(href);
//             if (target) {
//                 e.preventDefault();
//                 target.scrollIntoView({ behavior: 'smooth' });
                
//                 document.querySelectorAll('.nav-link').forEach(function(link) {
//                     link.classList.remove('active');
//                 });
//                 this.classList.add('active');
                
//                 if (window.innerWidth <= 768) {
//                     const menu = document.querySelector('.nav-menu');
//                     if (menu) menu.classList.remove('active');
//                 }
//             }
//         });
//     });
    
//     // 10. Кнопка "Смотреть каталог"
//     const heroBtn = document.querySelector('.hero-btn');
//     if (heroBtn) {
//         heroBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const catalog = document.getElementById('catalog');
//             if (catalog) {
//                 catalog.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     }
    
//     // 11. Кнопка "Наверх"
//     const scrollBtn = document.getElementById('scrollTop');
//     if (scrollBtn) {
//         window.addEventListener('scroll', function() {
//             if (window.scrollY > 300) {
//                 scrollBtn.classList.remove('hidden');
//             } else {
//                 scrollBtn.classList.add('hidden');
//             }
//         });
        
//         scrollBtn.addEventListener('click', function() {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });
//     }
    
//     // 12. Кнопка Telegram
//     const telegramBtn = document.querySelector('.telegram-widget');
//     if (telegramBtn) {
//         telegramBtn.addEventListener('click', function() {
//             // ЗАМЕНИ НА СВОЙ ТЕЛЕГРАМ!
//             window.open('https://t.me/ВАШ_НИК', '_blank');
//         });
//     }
    
//     // 13. Загружаем тему
//     loadTheme();
    
//     // 14. КНОПКА ЯЗЫКА
//     setupLanguageSwitcher();
// }

// // ========== ВЫБОР ЯЗЫКА ==========
// function setupLanguageSwitcher() {
//     const languageBtn = document.getElementById('languageBtn');
//     const languageModal = document.getElementById('languageModal');
//     const modalClose = document.querySelector('.modal-close');
    
//     if (!languageBtn || !languageModal) return;
    
//     // Открытие модального окна
//     languageBtn.addEventListener('click', function() {
//         languageModal.classList.remove('hidden');
//     });
    
//     // Закрытие модального окна
//     modalClose.addEventListener('click', function() {
//         languageModal.classList.add('hidden');
//     });
    
//     // Закрытие по клику вне окна
//     languageModal.addEventListener('click', function(e) {
//         if (e.target === languageModal) {
//             languageModal.classList.add('hidden');
//         }
//     });
    
//     // Выбор языка
//     document.querySelectorAll('.language-option').forEach(option => {
//         option.addEventListener('click', function() {
//             const lang = this.dataset.lang;
//             changeLanguage(lang);
//             languageModal.classList.add('hidden');
            
//             // Обновляем текущий язык в кнопке
//             const currentLangSpan = document.querySelector('.current-lang');
//             if (currentLangSpan) {
//                 currentLangSpan.textContent = lang.toUpperCase();
//             }
            
//             showNotification('Язык изменен на ' + this.querySelector('.lang-name').textContent);
//         });
//     });
// }


// function changeLanguage(lang) {
//     const texts = {
//         ru: {
//             home: "Главная",
//             catalog: "Каталог",
//             contacts: "Контакты",
//             heroTitle: "Твои премиальные автомобили",
//             heroSubtitle: "Mercedes-Benz S-Class и BMW X6 M Competition",
//             heroBtn: "Смотреть каталог",
//             stat1: "Эксклюзивных авто",
//             stat2: "Средний рейтинг",
//             stat3: "Гарантия качества",
//             catalogTitle: "Наш каталог",
//             catalogSubtitle: "Два эксклюзивных автомобиля в наличии",
//             searchLabel: "Поиск:",
//             searchPlaceholder: "Введите название...",
//             sortLabel: "Сортировка:",
//             sortDefault: "По умолчанию",
//             priceAsc: "Цена ↑",
//             priceDesc: "Цена ↓",
//             yearAsc: "Год ↑",
//             yearDesc: "Год ↓",
//             gridView: "Сетка",
//             listView: "Список",
//             found: "Найдено:",
//             cars: "автомобилей",
//             favoritesTitle: "Избранное",
//             favoritesSubtitle: "Выбранные вами автомобили",
//             noFavorites: "Нет избранных автомобилей",
//             addFavorites: "Добавьте автомобили в избранное, нажав на сердечко",
//             contactsTitle: "Контакты",
//             contactsSubtitle: "Свяжитесь с нами",
//             address: "Адрес",
//             addressText: "г. Дубай",
//             phone: "Телефон",
//             phoneText: "+971 50 257 1234",
//             hours: "Часы работы",
//             hoursText: "24/7",
//             callFormTitle: "Заказать звонок",
//             namePlaceholder: "Ваше имя",
//             phonePlaceholder: "Телефон",
//             callBtn: "Заказать звонок",
//             footerText: "Продажа твоих эксклюзивных автомобилей",
//             copyright: "© 2024 NOMAD MOBILITY CAR RENTAL L.L.C Premium. Только твои автомобили.",
            
//             // ДОБАВЛЕНЫ ПЕРЕВОДЫ ДЛЯ МАШИН
//             mercTitle: "Mercedes-Benz S-Class",
//             mercDescription: "Премиальный седан в идеальном состоянии.",
//             mercFeatures: ["Панорамная крыша", "Кожаный салон", "Массажные кресла"],
//             bmwTitle: "BMW X6 M Competition",
//             bmwDescription: "Экстремальный внедорожник в максимальной комплектации.",
//             bmwFeatures: ["Пакет M Competition", "Керамические тормоза", "Карбоновые вставки"],
//             mileage: "пробег",
//             transmission: "КПП",
//             engine: "двигатель",
//             year: "год",
//             fuel: "топливо",
//             color: "цвет"
//         },
//         en: {
//             home: "Home",
//             catalog: "Catalog",
//             contacts: "Contacts",
//             heroTitle: "Only Your Premium Cars",
//             heroSubtitle: "Mercedes-Benz S-Class and BMW X6 M Competition",
//             heroBtn: "View Catalog",
//             stat1: "Exclusive cars",
//             stat2: "Average rating",
//             stat3: "Quality guarantee",
//             catalogTitle: "Our Catalog",
//             catalogSubtitle: "Two exclusive cars available",
//             searchLabel: "Search:",
//             searchPlaceholder: "Enter name...",
//             sortLabel: "Sort:",
//             sortDefault: "Default",
//             priceAsc: "Price ↑",
//             priceDesc: "Price ↓",
//             yearAsc: "Year ↑",
//             yearDesc: "Year ↓",
//             gridView: "Grid",
//             listView: "List",
//             found: "Found:",
//             cars: "cars",
//             favoritesTitle: "Favorites",
//             favoritesSubtitle: "Your selected cars",
//             noFavorites: "No favorite cars",
//             addFavorites: "Add cars to favorites by clicking the heart",
//             contactsTitle: "Contacts",
//             contactsSubtitle: "Contact us",
//             address: "Address",
//             addressText: "Dubai, UAE",
//             phone: "Phone",


// phoneText: "+971 50 257 1234",
//             hours: "Working Hours",
//             hoursText: "24/7",
//             callFormTitle: "Request a Call",
//             namePlaceholder: "Your Name",
//             phonePlaceholder: "Phone",
//             callBtn: "Request Call",
//             footerText: "Selling your exclusive cars",
//             copyright: "© 2024 NOMAD MOBILITY CAR RENTAL L.L.C Premium. Only your cars.",
            
//             // ДОБАВЛЕНЫ ПЕРЕВОДЫ ДЛЯ МАШИН
//             mercTitle: "Mercedes-Benz S-Class",
//             mercDescription: "Premium sedan in perfect condition.",
//             mercFeatures: ["Panoramic roof", "Leather interior", "Massage seats"],
//             bmwTitle: "BMW X6 M Competition",
//             bmwDescription: "Extreme SUV in maximum configuration.",
//             bmwFeatures: ["M Competition package", "Ceramic brakes", "Carbon inserts"],
//             mileage: "mileage",
//             transmission: "transmission",
//             engine: "engine",
//             year: "year",
//             fuel: "fuel",
//             color: "color"
//         },
//         ar: {
//             home: "الرئيسية",
//             catalog: "الكاتالوج",
//             contacts: "جهات الاتصال",
//             heroTitle: "فقط سياراتك الفاخرة",
//             heroSubtitle: "مرسيدس بنز فئة S و بي إم دبليو X6 M Competition",
//             heroBtn: "عرض الكاتالوج",
//             stat1: "سيارات حصرية",
//             stat2: "متوسط التقييم",
//             stat3: "ضمان الجودة",
//             catalogTitle: "كتالوجنا",
//             catalogSubtitle: "سيارتان حصريتان متاحتان",
//             searchLabel: "بحث:",
//             searchPlaceholder: "أدخل الاسم...",
//             sortLabel: "ترتيب:",
//             sortDefault: "افتراضي",
//             priceAsc: "السعر ↑",
//             priceDesc: "السعر ↓",
//             yearAsc: "السنة ↑",
//             yearDesc: "السنة ↓",
//             gridView: "شبكة",
//             listView: "قائمة",
//             found: "تم العثور على:",
//             cars: "سيارات",
//             favoritesTitle: "المفضلة",
//             favoritesSubtitle: "السيارات التي اخترتها",
//             noFavorites: "لا توجد سيارات مفضلة",
//             addFavorites: "أضف سيارات إلى المفضلة بالنقر على القلب",
//             contactsTitle: "جهات الاتصال",
//             contactsSubtitle: "اتصل بنا",
//             address: "العنوان",
//             addressText: "دبي، الإمارات",
//             phone: "الهاتف",
//             phoneText: "+971 50 257 1234",
//             hours: "ساعات العمل",
//             hoursText: "24/7",
//             callFormTitle: "طلب اتصال",
//             namePlaceholder: "اسمك",
//             phonePlaceholder: "الهاتف",
//             callBtn: "طلب اتصال",
//             footerText: "بيع سياراتك الحصرية",
//             copyright: "© 2024 نوماد موبيليتي لتأجير السيارات. فقط سياراتك.",
            
//             // ДОБАВЛЕНЫ ПЕРЕВОДЫ ДЛЯ МАШИН
//             mercTitle: "مرسيدس بنز فئة S",
//             mercDescription: "سيارة سيدان فاخرة بحالة مثالية.",
//             mercFeatures: ["سقف بانورامي", "داخلية جلدية", "مقاعد تدليك"],
//             bmwTitle: "بي إم دبليو X6 M Competition",
//             bmwDescription: "سيارة دفع رباعي متطرفة بأقصى تجهيز.",
//             bmwFeatures: ["حزمة M Competition", "فرامل سيراميك", "إدراجات كربون"],
//             mileage: "المسافة المقطوعة",
//             transmission: "ناقل الحركة",
//             engine: "المحرك",
//             year: "سنة",
//             fuel: "الوقود",
//             color: "اللون"
//         },
//         zh: {
//             home: "首页",
//             catalog: "目录",
//             contacts: "联系方式",
//             heroTitle: "只为您提供豪华汽车",
//             heroSubtitle: "梅赛德斯-奔驰S级和宝马X6 M竞赛版",
//             heroBtn: "查看目录",
//             stat1: "独家汽车",
//             stat2: "平均评分",
//             stat3: "质量保证",
//             catalogTitle: "我们的目录",
//             catalogSubtitle: "两款独家汽车可供选择",
//             searchLabel: "搜索:",
//             searchPlaceholder: "输入名称...",


// sortLabel: "排序:",
//             sortDefault: "默认",
//             priceAsc: "价格 ↑",
//             priceDesc: "价格 ↓",
//             yearAsc: "年份 ↑",
//             yearDesc: "年份 ↓",
//             gridView: "网格",
//             listView: "列表",
//             found: "找到:",
//             cars: "汽车",
//             favoritesTitle: "收藏夹",
//             favoritesSubtitle: "您选择的汽车",
//             noFavorites: "没有收藏的汽车",
//             addFavorites: "点击心形图标添加收藏",
//             contactsTitle: "联系方式",
//             contactsSubtitle: "联系我们",
//             address: "地址",
//             addressText: "阿联酋迪拜",
//             phone: "电话",
//             phoneText: "+971 50 257 1234",
//             hours: "工作时间",
//             hoursText: "24/7",
//             callFormTitle: "请求回电",
//             namePlaceholder: "您的姓名",
//             phonePlaceholder: "电话",
//             callBtn: "请求回电",
//             footerText: "销售您的独家汽车",
//             copyright: "© 2024 NOMAD MOBILITY CAR RENTAL L.L.C Premium. 只为您服务。",
            
//             // ДОБАВЛЕНЫ ПЕРЕВОДЫ ДЛЯ МАШИН
//             mercTitle: "梅赛德斯-奔驰S级",
//             mercDescription: "完美状态的豪华轿车。",
//             mercFeatures: ["全景天窗", "真皮内饰", "按摩座椅"],
//             bmwTitle: "宝马X6 M竞赛版",
//             bmwDescription: "极致配置的SUV。",
//             bmwFeatures: ["M竞赛套件", "陶瓷刹车", "碳纤维装饰"],
//             mileage: "里程",
//             transmission: "变速箱",
//             engine: "发动机",
//             year: "年份",
//             fuel: "燃料",
//             color: "颜色"
//         },
//         hi: {
//             home: "होम",
//             catalog: "कैटलॉग",
//             contacts: "संपर्क",
//             heroTitle: "केवल आपकी प्रीमियम कारें",
//             heroSubtitle: "मर्सिडीज-बेंज एस-क्लास और बीएमडब्ल्यू एक्स6 एम कॉम्पिटिशन",
//             heroBtn: "कैटलॉग देखें",
//             stat1: "विशेष कारें",
//             stat2: "औसत रेटिंग",
//             stat3: "गुणवत्ता गारंटी",
//             catalogTitle: "हमारा कैटलॉग",
//             catalogSubtitle: "दो विशेष कारें उपलब्ध",
//             searchLabel: "खोज:",
//             searchPlaceholder: "नाम दर्ज करें...",
//             sortLabel: "क्रमबद्ध करें:",
//             sortDefault: "डिफ़ॉल्ट",
//             priceAsc: "कीमत ↑",
//             priceDesc: "कीमत ↓",
//             yearAsc: "वर्ष ↑",
//             yearDesc: "वर्ष ↓",
//             gridView: "ग्रिड",
//             listView: "सूची",
//             found: "मिली:",
//             cars: "कारें",
//             favoritesTitle: "पसंदीदा",
//             favoritesSubtitle: "आपकी चयनित कारें",
//             noFavorites: "कोई पसंदीदा कार नहीं",
//             addFavorites: "दिल पर क्लिक करके कारें पसंदीदा में जोड़ें",
//             contactsTitle: "संपर्क",
//             contactsSubtitle: "हमसे संपर्क करें",
//             address: "पता",
//             addressText: "दुबई, यूएई",
//             phone: "फोन",
//             phoneText: "+971 50 257 1234",
//             hours: "कार्य समय",
//             hoursText: "24/7",
//             callFormTitle: "कॉल का अनुरोध करें",
//             namePlaceholder: "आपका नाम",
//             phonePlaceholder: "फोन",
//             callBtn: "कॉल अनुरोध",
//             footerText: "आपकी विशेष कारों की बिक्री",
//             copyright: "© 2024 नोमाड मोबिलिटी कार रेंटल एल.एल.सी प्रीमियम। केवल आपकी कारें।",
            
//             // ДОБАВЛЕНЫ ПЕРЕВОДЫ ДЛЯ МАШИН
//             mercTitle: "मर्सिडीज-बेंज एस-क्लास",
//             mercDescription: "बिल्कुल सही स्थिति में प्रीमियम सेडान।",
//             mercFeatures: ["पैनोरमिक छत", "चमड़े का इंटीरियर", "मसाज सीटें"],
//             bmwTitle: "बीएमडब्ल्यू एक्स6 एम कॉम्पिटिशन",
//             bmwDescription: "अधिकतम कॉन्फ़िगरेशन में एक्सट्रीम एसयूवी।",
//             bmwFeatures: ["एम कॉम्पिटिशन पैकेज", "सिरेमिक ब्रेक", "कार्बन इन्सर्ट"],
//             mileage: "माइलेज",
//             transmission: "ट्रांसमिशन",
//             engine: "इंजन",
//             year: "साल",
//             fuel: "ईंधन",
//             color: "रंग"
//         }
//     };


// const langTexts = texts[lang] || texts.ru;
    
//     // 1. Навигация
//     document.querySelectorAll('.nav-link').forEach((link, index) => {
//         const textNode = Array.from(link.childNodes).find(node => node.nodeType === 3 && node.textContent.trim());
//         if (textNode) {
//             if (index === 0 && langTexts.home) textNode.textContent = ' ' + langTexts.home;
//             if (index === 1 && langTexts.catalog) textNode.textContent = ' ' + langTexts.catalog;
//             if (index === 2 && langTexts.contacts) textNode.textContent = ' ' + langTexts.contacts;
//         }
//     });
    
//     // 2. Герой-секция
//     if (langTexts.heroTitle) {
//         const heroTitle = document.querySelector('.hero-title');
//         if (heroTitle) heroTitle.textContent = langTexts.heroTitle;
//     }
    
//     if (langTexts.heroSubtitle) {
//         const heroSubtitle = document.querySelector('.hero-subtitle');
//         if (heroSubtitle) heroSubtitle.textContent = langTexts.heroSubtitle;
//     }
    
//     if (langTexts.heroBtn) {
//         const heroBtn = document.querySelector('.hero-btn');
//         if (heroBtn) heroBtn.textContent = langTexts.heroBtn;
//     }
    
//     // 3. Статистика
//     const statTexts = document.querySelectorAll('.stat-item p');
//     if (statTexts.length >= 3 && langTexts.stat1 && langTexts.stat2 && langTexts.stat3) {
//         statTexts[0].textContent = langTexts.stat1;
//         statTexts[1].textContent = langTexts.stat2;
//         statTexts[2].textContent = langTexts.stat3;
//     }
    
//     // 4. Заголовки секций
//     const sectionHeaders = document.querySelectorAll('.section-header h2 span, .section-header h2');
//     const sectionSubtitles = document.querySelectorAll('.section-header p');
    
//     // Каталог
//     if (sectionHeaders[0] && langTexts.catalogTitle) {
//         sectionHeaders[0].textContent = langTexts.catalogTitle;
//     }
//     if (sectionSubtitles[0] && langTexts.catalogSubtitle) {
//         sectionSubtitles[0].textContent = langTexts.catalogSubtitle;
//     }
    
//     // Избранное
//     if (sectionHeaders[1] && langTexts.favoritesTitle) {
//         sectionHeaders[1].textContent = langTexts.favoritesTitle;
//     }
//     if (sectionSubtitles[1] && langTexts.favoritesSubtitle) {
//         sectionSubtitles[1].textContent = langTexts.favoritesSubtitle;
//     }
    
//     // Контакты
//     if (sectionHeaders[2] && langTexts.contactsTitle) {
//         sectionHeaders[2].textContent = langTexts.contactsTitle;
//     }
//     if (sectionSubtitles[2] && langTexts.contactsSubtitle) {
//         sectionSubtitles[2].textContent = langTexts.contactsSubtitle;
//     }
    
//     // 5. Фильтры каталога
//     const filterLabels = document.querySelectorAll('.filter-item label');
//     if (filterLabels[0] && langTexts.searchLabel) {
//         filterLabels[0].innerHTML = '<i class="fas fa-search"></i> ' + langTexts.searchLabel;
//     }
//     if (filterLabels[1] && langTexts.sortLabel) {
//         filterLabels[1].innerHTML = '<i class="fas fa-sort-amount-down"></i> ' + langTexts.sortLabel;
//     }
    
//     const searchInput = document.getElementById('searchInput');
//     if (searchInput && langTexts.searchPlaceholder) {
//         searchInput.placeholder = langTexts.searchPlaceholder;
//     }
    
//     const sortSelect = document.getElementById('sortSelect');
//     if (sortSelect && langTexts.sortDefault) {
//         sortSelect.options[0].textContent = langTexts.sortDefault;
//         if (langTexts.priceAsc) sortSelect.options[1].textContent = langTexts.priceAsc;
//         if (langTexts.priceDesc) sortSelect.options[2].textContent = langTexts.priceDesc;
//         if (langTexts.yearAsc) sortSelect.options[3].textContent = langTexts.yearAsc;
//         if (langTexts.yearDesc) sortSelect.options[4].textContent = langTexts.yearDesc;
//     }
    
//     // 6. Кнопки вида
//     const viewButtons = document.querySelectorAll('.view-btn');
//     if (viewButtons[0] && langTexts.gridView) {


// viewButtons[0].innerHTML = '<i class="fas fa-th-large"></i> ' + langTexts.gridView;
//     }
//     if (viewButtons[1] && langTexts.listView) {
//         viewButtons[1].innerHTML = '<i class="fas fa-list"></i> ' + langTexts.listView;
//     }
    
//     // 7. Результаты поиска
//     const resultsCount = document.querySelector('.results-count span');
//     if (resultsCount && langTexts.found && langTexts.cars) {
//         const count = document.getElementById('resultsCount').textContent;
//         resultsCount.innerHTML = langTexts.found + ': <strong id="resultsCount">' + count + '</strong> ' + langTexts.cars;
//     }
    
//     // 8. Контактная информация
//     const contactHeaders = document.querySelectorAll('.contact-item h4');
//     const contactTexts = document.querySelectorAll('.contact-item p');
    
//     if (contactHeaders[0] && langTexts.address) contactHeaders[0].textContent = langTexts.address;
//     if (contactTexts[0] && langTexts.addressText) contactTexts[0].textContent = langTexts.addressText;
    
//     if (contactHeaders[1] && langTexts.phone) contactHeaders[1].textContent = langTexts.phone;
//     if (contactTexts[1] && langTexts.phoneText) contactTexts[1].textContent = langTexts.phoneText;
    
//     if (contactHeaders[2] && langTexts.hours) contactHeaders[2].textContent = langTexts.hours;
//     if (contactTexts[2] && langTexts.hoursText) contactTexts[2].textContent = langTexts.hoursText;
    
//     // 9. Форма
//     const formTitle = document.querySelector('.contact-form h3');
//     if (formTitle && langTexts.callFormTitle) formTitle.textContent = langTexts.callFormTitle;
    
//     const formInputs = document.querySelectorAll('.form-group input');
//     if (formInputs[0] && langTexts.namePlaceholder) formInputs[0].placeholder = langTexts.namePlaceholder;
//     if (formInputs[1] && langTexts.phonePlaceholder) formInputs[1].placeholder = langTexts.phonePlaceholder;
    
//     const submitBtn = document.querySelector('.submit-btn');
//     if (submitBtn && langTexts.callBtn) {
//         submitBtn.innerHTML = '<i class="fas fa-phone"></i> ' + langTexts.callBtn;
//     }
    
//     // 10. Подвал
//     const footerText = document.querySelector('.footer-section p');
//     if (footerText && langTexts.footerText) footerText.textContent = langTexts.footerText;
    
//     const copyright = document.querySelector('.footer-bottom p');
//     if (copyright && langTexts.copyright) copyright.textContent = langTexts.copyright;
    
//     // 11. Обновляем карточки машин (НОВАЯ ЧАСТЬ!)
//     document.querySelectorAll('.car-card').forEach((card, index) => {
//         // Mercedes (первая карточка)
//         if (index === 0 && langTexts.mercTitle) {
//             const title = card.querySelector('.car-title');
//             if (title) title.textContent = langTexts.mercTitle;
            
//             const description = card.querySelector('.car-info p');
//             if (description && langTexts.mercDescription) description.textContent = langTexts.mercDescription;
            
//             // Обновляем особенности
//             const features = card.querySelectorAll('.feature-tag');
//             if (langTexts.mercFeatures && features.length >= 3) {
//                 features[0].textContent = langTexts.mercFeatures[0];
//                 features[1].textContent = langTexts.mercFeatures[1];
//                 features[2].textContent = langTexts.mercFeatures[2];
//             }
//         }
        
//         // BMW (вторая карточка)
//         if (index === 1 && langTexts.bmwTitle) {
//             const title = card.querySelector('.car-title');
//             if (title) title.textContent = langTexts.bmwTitle;
            
//             const description = card.querySelector('.car-info p');
//             if (description && langTexts.bmwDescription) description.textContent = langTexts.bmwDescription;
            
//             // Обновляем особенности


// const features = card.querySelectorAll('.feature-tag');
//             if (langTexts.bmwFeatures && features.length >= 3) {
//                 features[0].textContent = langTexts.bmwFeatures[0];
//                 features[1].textContent = langTexts.bmwFeatures[1];
//                 features[2].textContent = langTexts.bmwFeatures[2];
//             }
//         }
        
//         // Обновляем детали (год, пробег и т.д.)
//         const details = card.querySelectorAll('.car-details span');
//         if (details.length >= 4 && langTexts.year) {
//             details[0].innerHTML = '<i class="fas fa-calendar"></i> ' + langTexts.year;
//         }
//         if (details.length >= 4 && langTexts.mileage) {
//             details[1].innerHTML = '<i class="fas fa-tachometer-alt"></i> ' + langTexts.mileage;
//         }
//         if (details.length >= 4 && langTexts.transmission) {
//             details[2].innerHTML = '<i class="fas fa-cog"></i> ' + langTexts.transmission;
//         }
//         if (details.length >= 4 && langTexts.engine) {
//             details[3].innerHTML = '<i class="fas fa-gas-pump"></i> ' + langTexts.engine;
//         }
//     });
    
//     // 12. Обновляем избранное
//     const emptyFavorites = document.querySelector('.empty-favorites');
//     if (emptyFavorites) {
//         const h3 = emptyFavorites.querySelector('h3');
//         const p = emptyFavorites.querySelector('p');
//         if (h3 && langTexts.noFavorites) h3.textContent = langTexts.noFavorites;
//         if (p && langTexts.addFavorites) p.textContent = langTexts.addFavorites;
//     }
    
//     // Сохраняем выбор языка
//     localStorage.setItem('preferredLanguage', lang);
// }

// function loadPreferredLanguage() {
//     const savedLang = localStorage.getItem('preferredLanguage');
//     if (savedLang) {
//         changeLanguage(savedLang);
//         const currentLangSpan = document.querySelector('.current-lang');
//         if (currentLangSpan) {
//             currentLangSpan.textContent = savedLang.toUpperCase();
//         }
//     }
// }

// // ========== ЗАГРУЗКА ТЕМЫ ==========
// function loadTheme() {
//     try {
//         const savedTheme = localStorage.getItem('theme');
//         const themeIcon = document.querySelector('#themeToggle i');
        
//         if (savedTheme === 'light') {
//             document.body.classList.remove('dark-mode');
//             document.body.classList.add('light-theme');
//             if (themeIcon) themeIcon.className = 'fas fa-sun';
//         } else {
//             document.body.classList.remove('light-theme');
//             document.body.classList.add('dark-mode');
//             if (themeIcon) themeIcon.className = 'fas fa-moon';
//         }
//     } catch (e) {
//         console.log('Ошибка загрузки темы');
//     }
// }

// // ========== ДОПОЛНИТЕЛЬНЫЙ ФИКС ДЛЯ КНОПОК ==========
// // Гарантируем что кнопки не исчезнут
// document.addEventListener('DOMContentLoaded', function() {
//     // Фиксим все кнопки на странице
//     setTimeout(function() {
//         document.querySelectorAll('button, .btn').forEach(btn => {
//             btn.style.opacity = '1';
//             btn.style.visibility = 'visible';
//             btn.style.display = 'flex';
//             btn.style.position = 'relative';
//             btn.style.zIndex = '100';
//         });
//     }, 100);
// });

// // ========== ФИКС ДЛЯ КРУТЫХ АНИМАЦИЙ ==========
// function setupCoolAnimations() {
//     // Просто гарантируем что все кнопки видны
//     document.querySelectorAll('button, .btn').forEach(btn => {
//         btn.style.opacity = '1';
//         btn.style.visibility = 'visible';
//         btn.style.display = 'flex';
//     });
// }

// // Запускаем
// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(setupCoolAnimations, 500);
// });
