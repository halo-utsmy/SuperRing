// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle function
themeToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update icon based on theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Profile button functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.querySelector('.profile-btn');
    const authToken = localStorage.getItem('userToken');
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Update profile button text if user is logged in
    if (authToken && userData.username) {
        profileBtn.textContent = userData.username.charAt(0).toUpperCase();
    } else {
        profileBtn.textContent = 'P';
    }

    // Add click event listener to profile button
    profileBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (authToken && userData) {
            window.location.href = 'Profile.html';
        } else {
            window.location.href = 'Register.html';
        }
    });
});

// Translations object
const translations = {
    en: {
        home: "Home",
        books: "Books",
        aboutUs: "About Us",
        searchPlaceholder: "Search for books, authors...",
        aboutUsTitle: "About Us",
        aboutUsContent: "Welcome to E-Book Library, your ultimate digital learning hub! Our platform is designed to provide easy access to a vast collection of eBooks, empowering readers, students, and professionals to explore knowledge anytime, anywhere.",
        ourMission: "Our Mission",
        missionContent: "Our mission is to promote digital literacy and make knowledge accessible to everyone. Whether you are a student, researcher, or casual reader, E-Book Library is here to support your learning journey.",
        companyInfo: "Company Information",
        email: "Email:",
        contact: "Contact number:",
        address: "Address:",
        readNow: "Read Now",
        recentMessages: "Recent Messages"
    },
    my: {
        home: "Laman Utama",
        books: "Buku",
        aboutUs: "Tentang Kami",
        searchPlaceholder: "Cari buku, penulis...",
        aboutUsTitle: "Tentang Kami",
        aboutUsContent: "Selamat datang ke E-Book Library, hab pembelajaran digital utama anda! Platform kami direka untuk memberikan akses mudah kepada koleksi e-buku yang luas, memperkasakan pembaca, pelajar, dan profesional untuk meneroka ilmu pada bila-bila masa, di mana sahaja.",
        ourMission: "Misi Kami",
        missionContent: "Misi kami adalah untuk menggalakkan literasi digital dan menjadikan ilmu mudah diakses oleh semua. Sama ada anda seorang pelajar, penyelidik, atau pembaca kasual, E-Book Library ada di sini untuk menyokong perjalanan pembelajaran anda.",
        companyInfo: "Maklumat Syarikat",
        email: "Emel:",
        contact: "Nombor telefon:",
        address: "Alamat:",
        readNow: "Baca Sekarang",
        recentMessages: "Mesej Terkini"
    },
    zh: {
        home: "主页",
        books: "图书",
        aboutUs: "关于我们",
        searchPlaceholder: "搜索书籍、作者...",
        aboutUsTitle: "关于我们",
        aboutUsContent: "欢迎来到E-Book Library，您的终极数字学习中心！我们的平台旨在提供便捷的电子书访问，使读者、学生和专业人士能够随时随地探索知识。",
        ourMission: "我们的使命",
        missionContent: "我们的使命是促进数字素养，让知识触手可及。无论您是学生、研究人员还是休闲读者，E-Book Library都将支持您的学习之旅。",
        companyInfo: "公司信息",
        email: "电子邮件：",
        contact: "联系电话：",
        address: "地址：",
        readNow: "立即阅读",
        recentMessages: "最近消息"
    }
};

// Language toggle functionality
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-option');

// Toggle dropdown
languageToggle.addEventListener('click', function() {
    languageDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.language-btn') && !e.target.matches('.fa-globe')) {
        if (languageDropdown.classList.contains('show')) {
            languageDropdown.classList.remove('show');
        }
    }
});

// Change language function
function changeLanguage(lang) {
    // Store the selected language
    localStorage.setItem('selectedLanguage', lang);
    
    // Clear any existing class-based selector and directly target the specific nav links
    const homeLink = document.querySelector('a.nav-link[href="../Main/Home_Page.html"]');
    if (homeLink) homeLink.textContent = translations[lang].home;
    
    const booksLink = document.querySelector('a.nav-link[href="../Main/Categories.html"]');
    if (booksLink) booksLink.textContent = translations[lang].books;
    
    const aboutLink = document.querySelector('a.nav-link[href="../Main/About_Us.html"]');
    if (aboutLink) aboutLink.textContent = translations[lang].aboutUs;
    
    // Fallback for when absolute paths aren't working
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent.trim() === 'Home') {
            link.textContent = translations[lang].home;
        } else if (link.textContent.trim() === 'Books') {
            link.textContent = translations[lang].books;
        } else if (link.textContent.trim() === 'About Us') {
            link.textContent = translations[lang].aboutUs;
        }
    });
    
    // Update search placeholder
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) searchBar.placeholder = translations[lang].searchPlaceholder;
    
    // Update About Us section
    const aboutHeading = document.querySelector('.about-section h1');
    if (aboutHeading) aboutHeading.textContent = translations[lang].aboutUsTitle;
    
    const aboutContent = document.querySelector('.about-section p');
    if (aboutContent) aboutContent.textContent = translations[lang].aboutUsContent;
    
    // Update Mission section
    const missionHeading = document.querySelector('.mission-section h1');
    if (missionHeading) missionHeading.textContent = translations[lang].ourMission;
    
    const missionContent = document.querySelector('.mission-section p');
    if (missionContent) missionContent.textContent = translations[lang].missionContent;
    
    // Update Company Information section
    const companyInfoHeading = document.querySelector('.contact-details h2');
    if (companyInfoHeading) companyInfoHeading.textContent = translations[lang].companyInfo;
    
    const emailInfo = document.querySelector('.contact-details p:nth-child(2)');
    if (emailInfo) emailInfo.innerHTML = `<strong>${translations[lang].email}</strong> Book@gmail.com`;
    
    const contactInfo = document.querySelector('.contact-details p:nth-child(3)');
    if (contactInfo) contactInfo.innerHTML = `<strong>${translations[lang].contact}</strong> +60 015-5858-5848`;
    
    const addressInfo = document.querySelector('.contact-details p:nth-child(4)');
    if (addressInfo) addressInfo.innerHTML = `<strong>${translations[lang].address}</strong> 96100 Jalan Street Sibu, Sarawak, Malaysia`;
    
    // Add notification header translation
    const notificationHeader = document.querySelector('.notification-header h3');
    if (notificationHeader) {
        notificationHeader.textContent = translations[lang].recentMessages;
    }
    
    // Add Read Now translation for book links if they exist
    document.querySelectorAll('.book-info a').forEach(link => {
        if (link.textContent.includes('Read Now') || 
            link.textContent.includes('Baca Sekarang') || 
            link.textContent.includes('立即阅读')) {
            link.textContent = translations[lang].readNow;
        }
    });
}

// Add click event listeners to language options
languageOptions.forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
        languageDropdown.classList.remove('show');
    });
});

// Set initial language from localStorage or default to English
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
changeLanguage(savedLanguage);

// Update the logout function
function logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    document.querySelector('.profile-btn').textContent = 'P';
    window.location.href = 'register.html';
}

// Function to navigate to homepage
function goToHomePage() {
    window.location.href = 'Home_Page.html';
}


function goToRegister() {
    window.location.href = 'Register.html';
}