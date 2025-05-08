const slider = document.querySelector('.book-slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const cardWidth = 280; // card width + gap

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
       });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3; // 4 is the number of books
        updateSlider();
    }

    // Auto scroll every 5 seconds
    setInterval(nextSlide, 5000);

    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });



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


// Add this to your existing script section
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle function
themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Show feedback message
    const themeMessage = newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled';
    showFeedbackMessage(themeMessage);
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

// Language selector functionality
const translations = {
    en: {
        home: "Home",
        books: "Books",
        aboutUs: "About Us",
        searchPlaceholder: "Search for books, authors...",
        exploreWorld: "Explore the World of Books",
        discoverText: "Discover thousands of books that will inspire, educate, and entertain you. Your next favorite story is just a click away.",
        discoverMore: "Discover More",
        trendingBooks: "Trending Books",
        trendingSubtitle: "Discover what others are reading right now",
        comingSoon: "Coming Soon",
        bestsellingAuthor: "Bestselling Author",
        releaseDate: "Release Date",
        aboutUsTitle: "About Us",
        email: "Email",
        contactUs: "Contact Us",
        address: "Address",
        by: "By",
        readNow: "Read Now",
        recentMessages: "Recent Messages"
    },
    my: {
        home: "Laman Utama",
        books: "Buku",
        aboutUs: "Tentang Kami",
        searchPlaceholder: "Cari buku, penulis...",
        exploreWorld: "Jelajahi Dunia Buku",
        discoverText: "Temui ribuan buku yang akan memberi inspirasi, mendidik, dan menghiburkan anda. Cerita kegemaran anda seterusnya hanya satu klik sahaja.",
        discoverMore: "Terokai Lagi",
        trendingBooks: "Buku Trending",
        trendingSubtitle: "Temui apa yang orang lain sedang baca sekarang",
        comingSoon: "Akan Datang",
        bestsellingAuthor: "Penulis Terlaris",
        releaseDate: "Tarikh Keluar",
        aboutUsTitle: "Tentang Kami",
        email: "Emel",
        contactUs: "Hubungi Kami",
        address: "Alamat",
        by: "Oleh",
        readNow: "Baca Sekarang",
        recentMessages: "Mesej Terkini"
    },
    zh: {
        home: "主页",
        books: "图书",
        aboutUs: "关于我们",
        searchPlaceholder: "搜索书籍、作者...",
        exploreWorld: "探索书籍世界",
        discoverText: "发现数千本能启发、教育和娱乐您的书籍。您的下一个最爱故事就在一键之遥。",
        discoverMore: "发现更多",
        trendingBooks: "热门书籍",
        trendingSubtitle: "发现他人正在阅读的内容",
        comingSoon: "即将推出",
        bestsellingAuthor: "畅销作家",
        releaseDate: "发布日期",
        aboutUsTitle: "关于我们",
        email: "电子邮件",
        contactUs: "联系我们",
        address: "地址",
        by: "作者",
        readNow: "立即阅读",
        recentMessages: "最近消息"
    }
};

// Language selector elements
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

// Function to show feedback messages
function showFeedbackMessage(message) {
    try {
        // Create feedback element if it doesn't exist
        let feedbackEl = document.getElementById('feedback-message');
        if (!feedbackEl) {
            feedbackEl = document.createElement('div');
            feedbackEl.id = 'feedback-message';
            feedbackEl.style.position = 'fixed';
            feedbackEl.style.bottom = '20px';
            feedbackEl.style.right = '20px';
            feedbackEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            feedbackEl.style.color = 'white';
            feedbackEl.style.padding = '10px 20px';
            feedbackEl.style.borderRadius = '5px';
            feedbackEl.style.zIndex = '9999';
            feedbackEl.style.transition = 'opacity 0.3s';
            document.body.appendChild(feedbackEl);
        }

        // Set message and show
        feedbackEl.textContent = message;
        feedbackEl.style.opacity = '1';

        // Hide after 3 seconds
        setTimeout(() => {
            feedbackEl.style.opacity = '0';
        }, 3000);
    } catch (e) {
        console.log('Error showing feedback message:', e);
    }
}

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
    
    // Update slogan section
    const sloganText = document.querySelector('.slogan-text');
    if (sloganText) sloganText.textContent = translations[lang].exploreWorld;
    
    const sloganSubtext = document.querySelector('.slogan-subtext');
    if (sloganSubtext) sloganSubtext.textContent = translations[lang].discoverText;
    
    const discoverButton = document.querySelector('.discover-button');
    if (discoverButton) discoverButton.textContent = translations[lang].discoverMore;
    
    // Update trending section
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.textContent = translations[lang].trendingBooks;
    
    const sectionSubtitle = document.querySelector('.section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = translations[lang].trendingSubtitle;
    
    // Update book categories
    const bookCategories = document.querySelectorAll('.book-category');
    if (bookCategories.length > 0) {
        bookCategories.forEach(el => {
            el.textContent = translations[lang].comingSoon;
        });
    }
    
    // Update author titles
    const authorTitles = document.querySelectorAll('.author-title');
    if (authorTitles.length > 0) {
        authorTitles.forEach(el => {
            el.textContent = translations[lang].bestsellingAuthor;
        });
    }

    // Update book authors with "By" translation
    const bookAuthors = document.querySelectorAll('.book-author');
    if (bookAuthors.length > 0) {
        bookAuthors.forEach(el => {
            if (el.textContent.includes('By')) {
                const authorName = el.textContent.split('By ')[1];
                el.textContent = `${translations[lang].by} ${authorName}`;
            }
        });
    }
    
    // Update about section
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutUsTitle;
    
    const emailHeader = document.querySelector('.contact-item:nth-child(1) .info h3');
    if (emailHeader) emailHeader.textContent = translations[lang].email;
    
    const contactHeader = document.querySelector('.contact-item:nth-child(2) .info h3');
    if (contactHeader) contactHeader.textContent = translations[lang].contactUs;
    
    const addressHeader = document.querySelector('.contact-item:nth-child(3) .info h3');
    if (addressHeader) addressHeader.textContent = translations[lang].address;
    
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

    // Show feedback message
    const langNames = {
        en: 'English',
        my: 'Malay',
        zh: 'Chinese'
    };
    showFeedbackMessage(`Language changed to ${langNames[lang]}`);
}

// Add click event listeners to language options
languageOptions.forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
        languageDropdown.classList.remove('show');
    });
});

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
});

// Function to navigate to homepage
function goToHomePage() {
    window.location.href = 'Home_Page.html';
}



function goToRegister() {
    window.location.href = 'Register.html';
}
