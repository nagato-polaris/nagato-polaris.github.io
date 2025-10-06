// ハンバーガーメニューの動作
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ナビゲーションリンクをクリックしたときにメニューを閉じる
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// スクロール時のヘッダーの背景変更
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を設定
document.addEventListener('DOMContentLoaded', () => {
    // セクションヘッダー
    document.querySelectorAll('.section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // メニューアイテム
    document.querySelectorAll('.menu-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // 料金テーブル
    document.querySelectorAll('.price-table').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // フィーチャーカード
    document.querySelectorAll('.feature-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(el);
    });
    
    // About テキスト
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateY(30px)';
        aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(aboutText);
    }
    
    // アクセス情報
    const accessInfo = document.querySelector('.access-info');
    if (accessInfo) {
        accessInfo.style.opacity = '0';
        accessInfo.style.transform = 'translateX(-30px)';
        accessInfo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(accessInfo);
    }
    
    const accessMap = document.querySelector('.access-map');
    if (accessMap) {
        accessMap.style.opacity = '0';
        accessMap.style.transform = 'translateX(30px)';
        accessMap.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
        observer.observe(accessMap);
    }
});

// スムーズスクロール（ブラウザ互換性のため）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 電話番号リンクのモバイル対応確認
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // モバイルデバイスの場合、電話番号リンクはそのまま機能
    console.log('モバイルデバイスが検出されました');
} else {
    // PCの場合、電話番号をクリックしたときの動作を調整
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth > 768) {
                e.preventDefault();
                alert('お電話でのお問い合わせ: ' + link.textContent);
            }
        });
    });
}

// ページロード時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// パララックス効果（ヒーローセクション）
let heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        if (scrollPosition < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrollPosition / window.innerHeight);
            }
        }
    });
}

// メニューカードのホバーエフェクト強化
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 料金テーブルのアニメーション
document.querySelectorAll('.price-table').forEach((table, index) => {
    table.style.animationDelay = `${index * 0.1}s`;
});

// スクロール進捗インジケーター
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--secondary-color));
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// カウントアップアニメーション（料金表示）
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = '¥' + Math.floor(current).toLocaleString();
    }, 16);
}

// 価格のカウントアップアニメーション
const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const priceText = entry.target.textContent;
            const priceValue = parseInt(priceText.replace(/[¥,]/g, ''));
            if (!isNaN(priceValue)) {
                entry.target.dataset.animated = 'true';
                animateValue(entry.target, 0, priceValue, 1000);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.price-amount, .course-price').forEach(price => {
    priceObserver.observe(price);
});

// スムーズなカラートランジション
let colorIndex = 0;
const colors = [
    'rgba(212, 165, 116, 0.1)',
    'rgba(139, 115, 85, 0.1)',
    'rgba(44, 62, 80, 0.05)'
];

// CTAボタンのリップルエフェクト
document.querySelectorAll('.cta-button, .reserve-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// リップルアニメーションのスタイル追加
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .cta-button, .reserve-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// コースオプションのホバーエフェクト
document.querySelectorAll('.course-option').forEach(option => {
    option.addEventListener('mouseenter', function() {
        const price = this.querySelector('.course-price');
        if (price) {
            price.style.transform = 'scale(1.1)';
            price.style.transition = 'transform 0.3s ease';
        }
    });
    
    option.addEventListener('mouseleave', function() {
        const price = this.querySelector('.course-price');
        if (price) {
            price.style.transform = 'scale(1)';
        }
    });
});

// セクションが表示されたときのアニメーション
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// 流れ星エフェクト
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // ビューポート全体のランダムな位置から開始（右側から）
    const startX = Math.random() * (window.innerWidth * 0.3) + window.innerWidth * 0.6;
    const startY = Math.random() * (window.innerHeight * 0.7); // 画面の上70%の範囲
    
    star.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: 4px;
        height: 4px;
        background: rgba(255, 223, 186, 1);
        border-radius: 50%;
        box-shadow: 
            0 0 6px 2px rgba(255, 223, 186, 0.8),
            0 0 12px 3px rgba(255, 200, 150, 0.6),
            0 0 18px 4px rgba(255, 180, 120, 0.4);
        z-index: 99999;
        pointer-events: none;
    `;
    
    // 尾を追加
    const tail = document.createElement('div');
    tail.style.cssText = `
        position: absolute;
        top: 1px;
        right: 2px;
        width: 120px;
        height: 2px;
        background: linear-gradient(90deg, 
            rgba(255, 223, 186, 0) 0%, 
            rgba(255, 223, 186, 0.4) 20%,
            rgba(255, 223, 186, 0.7) 50%, 
            rgba(255, 223, 186, 0.9) 75%,
            rgba(255, 223, 186, 1) 100%);
        box-shadow: 0 0 8px rgba(255, 223, 186, 0.6);
        transform-origin: right;
    `;
    star.appendChild(tail);
    
    document.body.appendChild(star);
    
    // アニメーション
    let pos = 0;
    const speed = 4.5;
    const maxDistance = 400;
    
    const animate = () => {
        pos += speed;
        star.style.transform = `translate(-${pos}px, ${pos}px) rotate(-45deg)`;
        star.style.opacity = Math.max(0, 1 - (pos / maxDistance));
        
        if (pos < maxDistance) {
            requestAnimationFrame(animate);
        } else {
            star.remove();
        }
    };
    
    requestAnimationFrame(animate);
}

// ランダムな間隔で流れ星を生成
function startShootingStars() {
    // 最初の流れ星をすぐに生成
    setTimeout(() => createShootingStar(), 500);
    
    // 定期的に流れ星を生成
    setInterval(() => {
        // ランダムで流れ星を生成（確率をやや上げる）
        if (Math.random() < 0.7) {
            createShootingStar();
        }
    }, 5000); // 5秒ごとにチェック
    
    // さらに追加の流れ星をランダムタイミングで
    setInterval(() => {
        if (Math.random() < 0.4) {
            createShootingStar();
        }
    }, 8000);
}

// ページロード後に流れ星を開始
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(startShootingStars, 800);
    });
} else {
    setTimeout(startShootingStars, 800);
}
