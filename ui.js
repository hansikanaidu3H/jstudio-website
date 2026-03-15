import { servicesData, reviewsData, galleryImages } from './data.js';

export function renderUI() {
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(service => `
            <div class="service-card bg-studio-surface border border-white/5 p-8 flex flex-col items-center text-center gsap-fade-up">
                <div class="w-16 h-16 rounded-full border border-studio-gold/20 flex items-center justify-center mb-6">
                    <i data-lucide="${service.icon}" class="service-icon w-8 h-8 text-studio-gold transition-all duration-300"></i>
                </div>
                <h3 class="font-serif text-2xl mb-3">${service.title}</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">${service.desc}</p>
            </div>
        `).join('');
    }

    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = galleryImages.map(img => `
            <div class="gallery-item aspect-[4/5] gsap-fade-up">
                <img src="${img}" alt="Gallery" class="w-full h-full object-cover">
                <div class="gallery-overlay absolute inset-0 flex items-center justify-center">
                    <i data-lucide="instagram" class="w-8 h-8 text-white"></i>
                </div>
            </div>
        `).join('');
    }

    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = reviewsData.map(review => `
            <div class="bg-studio-dark p-8 border border-white/5 gsap-fade-up">
                <i data-lucide="quote" class="w-8 h-8 text-studio-gold/30 mb-6"></i>
                <p class="text-gray-300 font-light italic leading-relaxed mb-6">"${review.text}"</p>
                <div>
                    <h4 class="font-serif text-xl">${review.name}</h4>
                    <p class="text-xs tracking-widest uppercase text-studio-gold mt-1">${review.service}</p>
                </div>
            </div>
        `).join('');
    }

    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        servicesData.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = service.title;
            serviceSelect.appendChild(option);
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
}
