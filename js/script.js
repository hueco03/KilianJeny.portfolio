document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    const body = document.body;

    // Check saved preference or default to FR
    const savedLang = localStorage.getItem('lang') || 'fr';
    setLanguage(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-select');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        // Update body class
        body.classList.remove('lang-fr', 'lang-en');
        body.classList.add(`lang-${lang}`);

        // Update buttons active state
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang-select') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save preference
        localStorage.setItem('lang', lang);
    }

    // PDF Modal
    const modal = document.getElementById('pdfModal');
    const modalViewer = document.getElementById('pdfViewer');
    const closeBtn = document.querySelector('.close-modal');
    const openPdfBtns = document.querySelectorAll('.open-pdf-btn');

    openPdfBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = btn.getAttribute('href');
            if (pdfUrl && pdfUrl !== '#') {
                modalViewer.src = pdfUrl;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.style.display = 'none';
        modalViewer.src = '';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
});
