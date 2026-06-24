
const projectViewer = {
    el: document.getElementById('projectViewer'),
    currentIndex: 0,
    currentSlide: 0,

    
    
    init() {
        document.querySelectorAll('.project-open').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(parseInt(btn.dataset.project));
            });
        });

        this.el.querySelector('.pv-close').addEventListener('click', () => this.close());
        this.el.addEventListener('click', (e) => { if(e.target === this.el) this.close(); });
        
        document.addEventListener('keydown', (e) => {
            if(!this.el.classList.contains('is-open')) return;
            if(e.key === 'Escape') this.close();
            if(e.key === 'ArrowLeft') this.changeSlide(-1);
            if(e.key === 'ArrowRight') this.changeSlide(1);
        });

        this.el.querySelector('.pv-prev').addEventListener('click', () => this.changeSlide(-1));
        this.el.querySelector('.pv-next').addEventListener('click', () => this.changeSlide(1));
    },

    open(index) {
        this.currentIndex = index;
        this.currentSlide = 0;
        this.render();
        this.el.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.el.classList.remove('is-open');
        document.body.style.overflow = '';
        this.stopVideo();
    },

    render() {
        const p = projects[this.currentIndex];
        const s = p.slides[this.currentSlide];

        // Update Info
        document.getElementById('pvTitle').textContent = p.title;
        document.getElementById('pvRole').textContent = p.role;
        document.getElementById('pvDescription').textContent = p.description;
        
        const techEl = document.getElementById('pvTech');
        techEl.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');


        // Update Media
        const img = document.getElementById('pvImage');
        const vid = document.getElementById('pvVideo');
        this.stopVideo();

        if (s.type === 'image') {
            img.src = s.src;
            img.style.display = 'block';
            vid.style.display = 'none';
        } else {
            vid.src = s.src;
            img.style.display = 'none';
            vid.style.display = 'block';
        }

        // Render Dots
        const dotsEl = document.getElementById('pvDots');
        dotsEl.innerHTML = p.slides.map((_, i) => 
            `<div class="pv-dot ${i === this.currentSlide ? 'active' : ''}" onclick="projectViewer.goToSlide(${i})"></div>`
        ).join('');
    },

    changeSlide(dir) {
        const slides = projects[this.currentIndex].slides;
        this.currentSlide = (this.currentSlide + dir + slides.length) % slides.length;
        this.render();
    },

    goToSlide(i) {
        this.currentSlide = i;
        this.render();
    },

    navigateProject(dir) {

    this.currentIndex += dir;

    if (this.currentIndex < 0) {

        this.currentIndex = projects.length - 1;

    }

    if (this.currentIndex >= projects.length) {

        this.currentIndex = 0;

    }

    this.currentSlide = 0;

    this.render();

},

    stopVideo() {
        const vid = document.getElementById('pvVideo');
        vid.pause();
        vid.currentTime = 0;
    }
};

document.addEventListener('DOMContentLoaded', () => projectViewer.init());