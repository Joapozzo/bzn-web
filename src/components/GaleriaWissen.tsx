// src/components/GaleriaWissen.tsx
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GaleriaWissen = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeCategory, setActiveCategory] = useState("renders");

    // Imágenes organizadas por categorías
    const galleryImages = {
        renders: [
            { src: "/imgs/wissen/1.jpg", alt: "Fachada principal WISSEN DF" },
            { src: "/imgs/wissen/3.jpg", alt: "Vista nocturna del edificio" },
            { src: "/imgs/wissen/5.jpg", alt: "Acceso principal" },
            { src: "/imgs/wissen/7.jpg", alt: "Plaza interior" },
            { src: "/imgs/wissen/9.jpg", alt: "Vista aérea del proyecto" },
            { src: "/imgs/wissen/11.jpg", alt: "Detalle arquitectónico" }
        ],
        interiores: [
            { src: "/imgs/wissen/2.jpg", alt: "Living comedor" },
            { src: "/imgs/wissen/4.jpg", alt: "Cocina equipada" },
            { src: "/imgs/wissen/6.jpg", alt: "Dormitorio principal" },
            { src: "/imgs/wissen/8.jpg", alt: "Baño completo" },
            { src: "/imgs/wissen/10.jpg", alt: "Balcón con vista" },
            { src: "/imgs/wissen/12.jpg", alt: "Detalles de terminaciones" }
        ],
        obra: [
            { src: "/imgs/wissen/obras/1.jpg", alt: "Avance de obra - Estructura" },
            { src: "/imgs/wissen/obras/5.jpg", alt: "Avance de obra - Fachada" },
            { src: "/imgs/wissen/obras/10.jpg", alt: "Avance de obra - Interiores" },
            { src: "/imgs/wissen/obras/15.jpg", alt: "Avance de obra - Detalles" },
            { src: "/imgs/wissen/obras/20.jpg", alt: "Avance de obra - Cocheras" },
            { src: "/imgs/wissen/obras/25.jpg", alt: "Avance de obra - Plaza" }
        ]
    };

    const categories = [
        { key: "renders", label: "Renders", icon: "fas fa-eye" },
        { key: "interiores", label: "Interiores", icon: "fas fa-home" },
        { key: "obra", label: "Avance de Obra", icon: "fas fa-hard-hat" }
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            })
                .from(galleryRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.4");
        }
    }, []);

    const currentImages = galleryImages[activeCategory as keyof typeof galleryImages];

    return (
        <section
            ref={sectionRef}
            id="galeria"
            className="py-20"
            style={{ backgroundColor: 'var(--black)' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        GALERÍA
                        <span style={{ color: 'var(--red-200)' }}> VISUAL</span>
                    </h2>
                    <div
                        className="w-24 h-1 mx-auto rounded-full mb-6"
                        style={{ backgroundColor: 'var(--red)' }}
                    ></div>
                    <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--black-400)' }}>
                        Descubrí cada detalle de WISSEN DF a través de renders, imágenes de interiores
                        y el avance de obra en tiempo real.
                    </p>
                </div>

                {/* Filtros de categoría */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                            className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.key
                                    ? 'text-white shadow-lg transform scale-105'
                                    : 'text-var(--black-400) hover:text-white'
                                }`}
                            style={{
                                backgroundColor: activeCategory === category.key ? 'var(--red)' : 'var(--black-200)',
                            }}
                        >
                            <i className={`${category.icon} text-lg`}></i>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Galería principal */}
                <div ref={galleryRef} className="space-y-6">
                    {/* Swiper principal */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Thumbs]}
                            spaceBetween={10}
                            navigation={{
                                nextEl: '.gallery-next',
                                prevEl: '.gallery-prev'
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet gallery-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active gallery-bullet-active'
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="main-gallery rounded-2xl overflow-hidden"
                            style={{ height: '500px' }}
                        >
                            {currentImages.map((image, index) => (
                                <SwiperSlide key={index} className="relative group">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Overlay con información */}
                                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                                        <p className="text-sm" style={{ color: 'var(--black-400)' }}>
                                            {categories.find(cat => cat.key === activeCategory)?.label}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Botones de navegación personalizados */}
                        <button
                            className="gallery-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: 'var(--red)' }}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <button
                            className="gallery-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: 'var(--red)' }}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    {/* Swiper de thumbnails */}
                    <div className="px-4">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[FreeMode, Thumbs]}
                            spaceBetween={10}
                            slidesPerView="auto"
                            freeMode={true}
                            watchSlidesProgress={true}
                            className="thumbs-gallery"
                            breakpoints={{
                                320: { slidesPerView: 3 },
                                640: { slidesPerView: 4 },
                                768: { slidesPerView: 5 },
                                1024: { slidesPerView: 6 },
                                1280: { slidesPerView: 8 }
                            }}
                        >
                            {currentImages.map((image, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer group">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-var(--red) rounded-lg transition-colors duration-300"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Información adicional */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--black-200)' }}>
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white"
                            style={{ backgroundColor: 'var(--red)' }}
                        >
                            <i className="fas fa-camera"></i>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-white mb-1">Galería completa</h3>
                            <p className="text-sm" style={{ color: 'var(--black-400)' }}>
                                Más de 50 imágenes del proyecto disponibles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GaleriaWissen;