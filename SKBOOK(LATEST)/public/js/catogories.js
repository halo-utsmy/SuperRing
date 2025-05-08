/*----------------------------------------------------------------------------------------------------------------  */
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
                    // User is logged in, redirect to profile page
                    window.location.href = 'Profile.html';
                } else {
                    // User is not logged in, redirect to registration page
                    window.location.href = 'Register.html';
                }
            });
        });

        // Logout function
        function logout() {
            localStorage.removeItem('userToken');
            localStorage.removeItem('userData');
            document.querySelector('.profile-btn').textContent = 'P';
            window.location.href = 'register.html';
        }

        // Translations object
        const translations = {
            en: {
                home: "Home",
                books: "Books",
                aboutUs: "About Us",
                searchPlaceholder: "Search for books, authors...",
                actionAdventure: "Action & Adventure",
                romance: "Romance",
                mystery: "Mystery",
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
                actionAdventure: "Aksi & Pengembaraan",
                romance: "Romantik",
                mystery: "Misteri",
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
                actionAdventure: "动作冒险",
                romance: "爱情",
                mystery: "悬疑",
                aboutUsTitle: "关于我们",
                email: "电子邮件",
                contactUs: "联系我们",
                address: "地址",
                by: "作者",
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
            
            // Update category titles
            const categoryTitles = document.querySelectorAll('.category-title');
            if (categoryTitles.length > 0) {
                categoryTitles.forEach((el, index) => {
                    if (index === 0) el.textContent = translations[lang].actionAdventure;
                    if (index === 1) el.textContent = translations[lang].romance;
                    if (index === 2) el.textContent = translations[lang].mystery;
                });
            }
            
            // Update book authors
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
            
            // Add Read Now translation for book links
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

        // Function to navigate to homepage
        function goToHomePage() {
            window.location.href = 'Home_Page.html';
        }

        // Set initial language from localStorage or default to English
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        changeLanguage(savedLanguage);

        function goToRegister() {
            window.location.href = 'Register.html';
        }
