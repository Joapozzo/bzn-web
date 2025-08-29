import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Building, Car, Trees, Shield, Clock, FileText, Users, Phone, Mail, Instagram, Facebook, MessageCircle, ChevronDown, ChevronRight, Award, ArrowRight } from 'lucide-react';


const WissenDFLanding: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTipologia, setSelectedTipologia] = useState<number | null>(null);
    const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

    // Colores del proyecto
    const colors = {
        red: '#99192B',
        redLight: '#EB484E',
        black: '#1A1919',
        blackLight: '#272525',
        blackMid: '#524e4e',
        blackFaded: '#868181',
        white: '#FFFFFF'
    };

    const whatsappMessage = "Hola, me interesa WISSEN DF. ¿Podrían contactarme?";
    const whatsappNumber = "543517516450";

    const sendWhatsApp = (message: string = whatsappMessage) => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    // Datos del proyecto
    const projectImages = [
        "/imgs/wissen/1.jpg",
        "/imgs/wissen/3.jpg",
        "/imgs/wissen/5.jpg",
        "/imgs/wissen/7.jpg"
    ];

    const tipologias = [
        { tipo: "A", supPropia: 42.69, supBalcon: 1.25, supComun: 5.15, supTotal: 49.09, dormitorios: 1, banos: 1, disponibles: 4, imagen: "/imgs/wissen/tipologias/A.png" },
        { tipo: "B", supPropia: 40.77, supBalcon: 1.25, supComun: 4.54, supTotal: 46.56, dormitorios: 1, banos: 1, disponibles: 8, imagen: "/imgs/wissen/tipologias/B.png" },
        { tipo: "baja", supPropia: 42.73, supBalcon: 0, supComun: 5.52, supTotal: 48.25, dormitorios: 1, banos: 1, disponibles: 6, imagen: "/imgs/wissen/tipologias/baja.png" },
        { tipo: "D", supPropia: 40.15, supBalcon: 0, supComun: 4.80, supTotal: 44.95, dormitorios: 1, banos: 1, disponibles: 5, imagen: "/imgs/wissen/tipologias/D.png" },
        { tipo: "E", supPropia: 43.11, supBalcon: 1.25, supComun: 5.19, supTotal: 49.55, dormitorios: 1, banos: 1, disponibles: 3, imagen: "/imgs/wissen/tipologias/E.png" },
        { tipo: "F", supPropia: 40.87, supBalcon: 1.25, supComun: 4.93, supTotal: 47.05, dormitorios: 1, banos: 1, disponibles: 6, imagen: "/imgs/wissen/tipologias/F.png" },
        { tipo: "Patio", supPropia: 44.00, supBalcon: 1.25, supComun: 5.70, supTotal: 50.95, dormitorios: 3, banos: 2, disponibles: 1, imagen: "/imgs/wissen/tipologias/Patio.png" }
    ];

    // Animaciones con Intersection Observer
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elementId = entry.target.getAttribute('data-animate-id');
                    if (elementId) {
                        setAnimatedElements(prev => new Set([...prev, elementId]));
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('[data-animate-id]').forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const getAnimationStyle = (elementId: string, delay: number = 0) => {
        const isAnimated = animatedElements.has(elementId);
        return {
            opacity: isAnimated ? 1 : 0,
            transform: isAnimated ? 'translateY(0px)' : 'translateY(30px)',
            transition: `all 0.8s ease ${delay}s`
        };
    };

    return (
        <div style={{ fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>
            {/* NAVBAR */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: `${colors.black}ee`,
                backdropFilter: 'blur(10px)',
                padding: '1rem 0',
                borderBottom: `1px solid ${colors.blackLight}`
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: colors.white, fontSize: '1.5rem', fontWeight: '900' }}>
                            WISSEN <span style={{ color: colors.redLight }}>DF</span>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: colors.red, fontWeight: '500' }}>por BZN Urban Making</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ display: 'none', gap: '2rem' }} className="hidden lg:flex">
                            {[
                                { name: 'Ubicación', href: '#ubicacion' },
                                { name: 'Proyecto', href: '#caracteristicas' },
                                { name: 'Tipologías', href: '#tipologias' },
                                { name: 'Contacto', href: '#contacto' },
                                { name: 'Web Empresa', href: '/', external: true }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                    style={{
                                        color: colors.white,
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: '500',
                                        padding: '0.5rem 0',
                                        borderBottom: '2px solid transparent',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedTipologia !== idx) {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                                        }
                                    }}>

                                    {/* Badge disponibilidad */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        backgroundColor: tipologia.disponibles > 3 ? '#10b981' : tipologia.disponibles > 1 ? '#f59e0b' : '#ef4444',
                                        color: colors.white,
                                        padding: '0.5rem 0.75rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        zIndex: 10
                                    }}>
                                        {tipologia.disponibles} disponibles
                                    </div>

                                    {/* Imagen del plano */}
                                    <div style={{
                                        height: '280px',
                                        backgroundColor: '#f8f9fa',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={tipologia.imagen}
                                            alt={`Plano tipología ${tipologia.tipo}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                padding: '1rem',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />

                                        {/* Header superpuesto */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            background: `linear-gradient(to bottom, ${tipologia.dormitorios === 3 ? colors.red : colors.black}ee, transparent)`,
                                            padding: '3rem 1.5rem 2rem',
                                            color: colors.white
                                        }}>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', margin: 0 }}>
                                                TIPO {tipologia.tipo.toUpperCase()}
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', opacity: 0.9 }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <Building size={14} /> {tipologia.dormitorios} {tipologia.dormitorios === 1 ? 'Dorm.' : 'Dorms.'}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                    <MapPin size={14} /> {tipologia.banos} Baño{tipologia.banos > 1 ? 's' : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Superficie propia</span>
                                                <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supPropia} m²</span>
                                            </div>

                                            {tipologia.supBalcon > 0 && (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Balcón</span>
                                                    <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supBalcon} m²</span>
                                                </div>
                                            )}

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Superficie común</span>
                                                <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supComun} m²</span>
                                            </div>

                                            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontWeight: '700', color: colors.black, fontSize: '1.125rem' }}>TOTAL</span>
                                                <span style={{ fontSize: '1.75rem', fontWeight: '900', color: colors.red }}>{tipologia.supTotal} m²</span>
                                            </div>
                                        </div>

                                        {/* Botón expandido */}
                                        <div style={{
                                            maxHeight: selectedTipologia === idx ? '80px' : '0',
                                            opacity: selectedTipologia === idx ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            marginTop: selectedTipologia === idx ? '1rem' : '0'
                                        }}>
                                            <Button
                                                text="CONSULTAR PRECIO"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    sendWhatsApp(`Hola, me interesa la tipología ${tipologia.tipo} de WISSEN DF. ¿Podrían contactarme?`);
                                                }}
                                                icon={<MessageCircle size={16} />}
                                            />
                                        </div>
                                    </div>

                                    {/* Indicador de expansión */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '1rem',
                                        right: '1rem',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        backgroundColor: colors.red,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: colors.white,
                                        transform: selectedTipologia === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Bottom tipologías */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '3rem',
                                backgroundColor: colors.blackLight,
                                borderRadius: '20px',
                                maxWidth: '600px'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.white }}>
                                        ¿Necesitás más información?
                                    </h3>
                                    <p style={{ color: colors.blackFaded, margin: 0, fontSize: '1.125rem' }}>
                                        Nuestro equipo te ayudará a elegir la tipología perfecta para vos
                                    </p>
                                </div>
                                <Button
                                    text="CONTACTAR ASESOR"
                                    onClick={() => sendWhatsApp()}
                                    icon={<Phone size={16} />}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINANCIAMIENTO */}
                <section id="financiamiento" style={{ padding: '5rem 0', backgroundColor: colors.blackLight }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '900',
                                color: colors.white,
                                marginBottom: '1rem'
                            }}>
                                FINANCIAMIENTO <span style={{ color: colors.redLight }}>FLEXIBLE</span>
                            </h2>
                            <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
                            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.blackFaded }}>
                                Elegí el plan que mejor se adapte a tu situación. Tenemos opciones para todos los perfiles.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            {[
                                {
                                    title: "Plan Tradicional",
                                    subtitle: "Entrega + Cuotas",
                                    features: ["30% de entrega inicial", "Cuotas fijas en pesos", "Financiación hasta 24 meses", "Sin interés por pago adelantado"],
                                    highlight: "Más elegido",
                                    color: colors.red,
                                    icon: <Users size={32} />
                                },
                                {
                                    title: "Plan Inversor",
                                    subtitle: "100% Financiado",
                                    features: ["Sin entrega inicial", "Financiación extendida", "Ideal para inversión", "Rentabilidad garantizada"],
                                    highlight: "Oportunidad",
                                    color: colors.black,
                                    icon: <Building size={32} />
                                },
                                {
                                    title: "Plan Contado",
                                    subtitle: "Pago Único",
                                    features: ["Descuento por pago contado", "Máximo ahorro total", "Escrituración inmediata", "Sin trámites de financiación"],
                                    highlight: "Mayor descuento",
                                    color: colors.redLight,
                                    icon: <Award size={32} />
                                }
                            ].map((plan, idx) => (
                                <div key={idx} style={{
                                    position: 'relative',
                                    backgroundColor: colors.white,
                                    border: '2px solid #e5e7eb',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = plan.color;
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#e5e7eb';
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>

                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        backgroundColor: plan.color,
                                        color: colors.white,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        zIndex: 10
                                    }}>
                                        {plan.highlight}
                                    </div>

                                    <div style={{
                                        backgroundColor: plan.color,
                                        color: colors.white,
                                        padding: '3rem 2rem',
                                        textAlign: 'center',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%)`,
                                            backgroundSize: '20px 20px'
                                        }}></div>

                                        <div style={{ position: 'relative', zIndex: 1 }}>
                                            <div style={{
                                                width: '80px',
                                                height: '80px',
                                                margin: '0 auto 1.5rem',
                                                backgroundColor: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: colors.white
                                            }}>
                                                {plan.icon}
                                            </div>
                                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>{plan.title}</h3>
                                            <p style={{ fontSize: '1.125rem', fontWeight: '300', opacity: 0.9, margin: 0 }}>{plan.subtitle}</p>
                                        </div>
                                    </div>

                                    <div style={{ padding: '2rem' }}>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {plan.features.map((feature, featureIdx) => (
                                                <li key={featureIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                                    <div style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        backgroundColor: plan.color,
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: colors.white,
                                                        fontSize: '0.75rem',
                                                        flexShrink: 0,
                                                        marginTop: '0.125rem'
                                                    }}>
                                                        ✓
                                                    </div>
                                                    <span style={{ fontSize: '0.875rem', color: colors.black, lineHeight: 1.5 }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            text="CONSULTAR"
                                            color={plan.color}
                                            onClick={() => sendWhatsApp(`Hola, me interesa el ${plan.title} para WISSEN DF. ¿Podrían contactarme?`)}
                                            icon={<MessageCircle size={16} />}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Principal financiamiento */}
                        <div style={{
                            textAlign: 'center',
                            padding: '3rem',
                            backgroundColor: colors.black,
                            borderRadius: '24px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.red} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${colors.red} 2px, transparent 2px)`,
                                backgroundSize: '100px 100px',
                                opacity: 0.05
                            }}></div>

                            <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
                                <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '1rem', color: colors.white }}>
                                    ¿Necesitás un plan <span style={{ color: colors.redLight }}>personalizado</span>?
                                </h3>
                                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: colors.blackFaded, lineHeight: 1.6 }}>
                                    Nuestros asesores te ayudarán a encontrar la mejor opción según tu perfil. ¡Consultá sin compromiso!
                                </p>

                                <Button
                                    text="SOLICITAR PLAN PERSONALIZADO"
                                    onClick={() => sendWhatsApp("Hola, me interesa un plan personalizado para WISSEN DF. ¿Podrían contactarme?")}
                                    icon={<Phone size={16} />}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contacto" style={{ padding: '5rem 0', backgroundColor: colors.white }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: '900',
                                color: colors.black,
                                marginBottom: '1rem'
                            }}>
                                CONTACTO <span style={{ color: colors.red }}>DIRECTO</span>
                            </h2>
                            <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
                            <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.blackMid }}>
                                Elegí el canal que prefieras para contactarte con nosotros
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            {[
                                {
                                    icon: <MessageCircle size={24} />,
                                    title: 'WhatsApp',
                                    desc: 'Respuesta inmediata',
                                    value: '+54 351 751-6450',
                                    color: '#25D366',
                                    action: () => sendWhatsApp()
                                },
                                {
                                    icon: <Phone size={24} />,
                                    title: 'Teléfono',
                                    desc: 'Llamanos directamente',
                                    value: '+54 351 751-6450',
                                    color: colors.red,
                                    action: () => window.open('tel:543517516450')
                                },
                                {
                                    icon: <Mail size={24} />,
                                    title: 'Email',
                                    desc: 'Consultas por correo',
                                    value: 'info@bznurbanmaking.com.ar',
                                    color: colors.black,
                                    action: () => window.open('mailto:info@bznurbanmaking.com.ar?subject=Consulta WISSEN DF')
                                },
                                {
                                    icon: <MapPin size={24} />,
                                    title: 'Oficina',
                                    desc: 'Visitanos en persona',
                                    value: 'Dean Funes 1928, Córdoba',
                                    color: colors.redLight,
                                    action: () => window.open('https://maps.google.com/?q=Dean+Funes+1928+Cordoba')
                                }
                            ].map((method, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    padding: '2rem',
                                    backgroundColor: colors.blackLight,
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                                    onClick={method.action}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = `${method.color}20`;
                                        e.currentTarget.style.borderColor = method.color;
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.blackLight;
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: method.color,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: colors.white,
                                        flexShrink: 0
                                    }}>
                                        {method.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontWeight: '700', color: colors.white, marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                                            {method.title}
                                        </h4>
                                        <p style={{ fontSize: '0.875rem', color: colors.blackFaded, marginBottom: '0.5rem' }}>
                                            {method.desc}
                                        </p>
                                        <p style={{ fontSize: '0.875rem', fontWeight: '500', color: method.color, margin: 0 }}>
                                            {method.value}
                                        </p>
                                    </div>
                                    <ArrowRight size={20} style={{ color: colors.white, opacity: 0.7 }} />
                                </div>
                            ))}
                        </div>

                        {/* CTA WhatsApp destacado */}
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '3rem',
                                backgroundColor: '#25D366',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                maxWidth: '500px'
                            }}
                                onClick={() => sendWhatsApp()}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <MessageCircle size={48} color={colors.white} style={{ marginBottom: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.white, marginBottom: '0.75rem' }}>
                                        Consulta Rápida por WhatsApp
                                    </h3>
                                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                                        Te respondemos al instante
                                    </p>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: colors.white, fontWeight: '600' }}>
                                        <span>Iniciar chat</span>
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer style={{ backgroundColor: colors.black, color: colors.white, padding: '4rem 0 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                                    WISSEN <span style={{ color: colors.redLight }}>DF</span>
                                </h2>
                                <p style={{ fontSize: '1.125rem', fontWeight: '500', color: colors.red, marginBottom: '1.5rem' }}>
                                    Por BZN Urban Making
                                </p>
                                <p style={{ fontSize: '1rem', color: colors.blackFaded, marginBottom: '2rem', lineHeight: 1.6 }}>
                                    Un nuevo concepto de vivienda en el corazón de Córdoba.
                                    Departamentos de 1 y 3 dormitorios con terminaciones de primera calidad.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <MapPin size={20} color={colors.red} />
                                        <span style={{ fontSize: '0.875rem' }}>Dean Funes 1928, Barrio Alberdi, Córdoba</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Building size={20} color={colors.red} />
                                        <span style={{ fontSize: '0.875rem' }}>33 Departamentos • 8 Cocheras • Plaza Interior</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Phone size={20} color={colors.red} />
                                        <span style={{ fontSize: '0.875rem' }}>+54 351 751-6450</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Conectate con nosotros</h3>

                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                    {[
                                        { name: 'Instagram', url: 'https://instagram.com/grupo.bzn', color: '#E4405F', icon: <Instagram size={20} /> },
                                        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61569261744008', color: '#1877F2', icon: <Facebook size={20} /> },
                                        { name: 'WhatsApp', url: 'https://wa.me/3517516450', color: '#25D366', icon: <MessageCircle size={20} /> }
                                    ].map((social, idx) => (
                                        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                                            width: '56px',
                                            height: '56px',
                                            backgroundColor: colors.blackLight,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            color: colors.white
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = social.color;
                                                e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = colors.blackLight;
                                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                            }}>
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>

                                <div style={{ padding: '1.5rem', backgroundColor: colors.blackLight, borderRadius: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                        <Building size={24} color={colors.red} />
                                        <span style={{ fontWeight: '700', color: colors.white }}>BZN Urban Making</span>
                                    </div>
                                    <p style={{ fontSize: '0.875rem', color: colors.blackFaded, margin: 0, lineHeight: 1.5 }}>
                                        40 años de experiencia en desarrollos inmobiliarios.
                                        Más de 100.000 m² ejecutados en Córdoba.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderTop: `1px solid ${colors.blackLight}`, paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <p style={{ fontSize: '0.875rem', color: colors.blackFaded, textAlign: 'center', margin: 0 }}>
                                © 2025 BZN Urban Making. Todos los derechos reservados. WISSEN DF - Un proyecto de calidad y confianza.
                            </p>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                backgroundColor: colors.red,
                                color: colors.white,
                                padding: '0.75rem 1.5rem',
                                borderRadius: '9999px',
                                fontSize: '0.875rem',
                                fontWeight: '600'
                            }}>
                                <Award size={16} />
                                <span>Desarrollista de Confianza</span>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* CSS Animations */}
                <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        .hidden { display: none; }
        @media (min-width: 1024px) {
          .lg\\:flex { display: flex; }
        }
      `}</style>
        </div>
    );
};

export default WissenDFLanding; Enter = {(e) => {
    e.currentTarget.style.color = colors.redLight;
    e.currentTarget.style.borderBottomColor = colors.redLight;
}}
onMouseLeave = {(e) => {
    e.currentTarget.style.color = colors.white;
    e.currentTarget.style.borderBottomColor = 'transparent';
}}
                >
    { item.name }
                </a >
              ))}
            </div >
    <Button
        text="CONTACTAR"
        onClick={() => sendWhatsApp()}
        icon={<MessageCircle size={16} />}
    />
          </div >
        </div >
      </nav >

    {/* HERO SECTION */ }
    < section style = {{
    height: '100vh',
        background: `linear-gradient(rgba(26, 25, 25, 0.7), rgba(153, 25, 43, 0.3)), url('${projectImages[0]}')`,
            backgroundSize: 'cover',
                backgroundPosition: 'center',
                    display: 'flex',
                        alignItems: 'center',
                            justifyContent: 'center',
                                color: colors.white,
                                    position: 'relative'
}}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: `${colors.red}33`,
            border: `1px solid ${colors.red}66`,
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: colors.red, borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            PROYECTO ACTUAL
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: '900', 
            marginBottom: '2rem',
            lineHeight: 0.9
          }}>
            WISSEN
            <span style={{ display: 'block', color: colors.redLight }}>DF</span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
            fontWeight: '300', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Un nuevo concepto de vivienda en el corazón de{' '}
            <span style={{ fontWeight: '600', color: colors.redLight }}>Córdoba</span>
          </p>

          <Button 
            text="QUIERO MÁS INFORMACIÓN" 
            onClick={() => sendWhatsApp()}
            icon={<ArrowRight size={20} />}
          />
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: colors.white,
          animation: 'bounce 2s infinite'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Descubre más</span>
          <ChevronDown size={20} />
        </div>
      </section >

    {/* UBICACIÓN */ }
    < section id = "ubicacion" style = {{ padding: '5rem 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: colors.black,
                    marginBottom: '1rem'
                }}>
                    UBICACIÓN <span style={{ color: colors.red }}>PRIVILEGIADA</span>
                </h2>
                <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
                <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.blackMid }}>
                    En el corazón de Alberdi, cerca de todo lo que necesitás para tu día a día
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.567!2d-64.200!3d-31.417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985c4b8e7a23%3A0x9e8f8e8e8e8e8e8e!2sDean%20Funes%201928%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1634567890123!5m2!1ses!2sar"
                        style={{ width: '100%', height: '400px', border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        right: '1rem',
                        backgroundColor: `${colors.white}f5`,
                        backdropFilter: 'blur(4px)',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <MapPin size={24} color={colors.red} />
                            <div>
                                <h3 style={{ fontWeight: '700', fontSize: '1.125rem', color: colors.black, margin: 0 }}>Dean Funes 1928</h3>
                                <p style={{ fontSize: '0.875rem', color: colors.blackMid, margin: 0 }}>Barrio Alberdi, Córdoba Capital</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.black }}>
                        Todo lo que necesitás cerca de casa
                    </h3>
                    <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: colors.blackMid, lineHeight: 1.6 }}>
                        WISSEN DF se encuentra estratégicamente ubicado en Alberdi,
                        cerca de Av. Colón y Av. Duarte Quirós.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: <Building size={24} />, title: 'Centros Comerciales', desc: 'Shopping y locales a metros' },
                            { icon: <MapPin size={24} />, title: 'Centros de Salud', desc: 'Clínicas y hospitales cercanos' },
                            { icon: <Trees size={24} />, title: 'Espacios Verdes', desc: 'Plaza Dr. Roberto Cisneros' },
                            { icon: <Car size={24} />, title: 'Transporte', desc: 'Excelente conectividad' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '1.5rem',
                                backgroundColor: colors.white,
                                border: `1px solid #e5e7eb`,
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = colors.redLight;
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '3rem',
                                        height: '3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: colors.red,
                                        borderRadius: '8px',
                                        color: colors.white
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', color: colors.black, fontSize: '1rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.875rem', color: colors.blackMid, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section >

    {/* CARACTERÍSTICAS */ }
    < section id = "caracteristicas" style = {{ padding: '5rem 0', backgroundColor: colors.blackLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: colors.white,
                    marginBottom: '1rem'
                }}>
                    CARACTERÍSTICAS <span style={{ color: colors.redLight }}>ÚNICAS</span>
                </h2>
                <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
            </div>

            {/* Stats principales */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                {[
                    { number: '5', label: 'Pisos', icon: <Building size={32} /> },
                    { number: '33', label: 'Departamentos', icon: <MapPin size={32} /> },
                    { number: '8', label: 'Cocheras', icon: <Car size={32} /> },
                    { number: '1', label: 'Plaza Interior', icon: <Trees size={32} /> }
                ].map((stat, idx) => (
                    <div key={idx} style={{
                        textAlign: 'center',
                        padding: '2rem',
                        backgroundColor: colors.black,
                        borderRadius: '16px',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <div style={{ color: colors.red, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            {stat.icon}
                        </div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: colors.redLight, marginBottom: '0.5rem' }}>
                            {stat.number}
                        </div>
                        <div style={{ color: colors.white, fontWeight: '500', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección visual con imágenes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                {/* Galería de características visuales */}
                <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: colors.white }}>
                        Diseño y calidad premium
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { img: '/imgs/wissen/2.jpg', title: 'Terminaciones de lujo' },
                            { img: '/imgs/wissen/4.jpg', title: 'Cocinas equipadas' },
                            { img: '/imgs/wissen/6.jpg', title: 'Espacios amplios' },
                            { img: '/imgs/wissen/8.jpg', title: 'Baños modernos' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                position: 'relative',
                                height: '150px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '1rem'
                                }}>
                                    <span style={{ color: colors.white, fontWeight: '600', fontSize: '0.875rem' }}>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Características organizadas */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: colors.white }}>
                        Comodidades incluidas
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { icon: <Shield size={20} />, title: 'Seguridad 24/7', desc: 'Guardia, CCTV y control de acceso' },
                            { icon: <Building size={20} />, title: 'Ascensor Premium', desc: 'Última generación en acero inoxidable' },
                            { icon: <Trees size={20} />, title: 'Plaza Parquizada', desc: 'Espacios verdes de uso común' },
                            { icon: <Car size={20} />, title: 'Cocheras Techadas', desc: 'Con portón levadizo automático' },
                            { icon: <Shield size={20} />, title: 'Sistema Contra Incendios', desc: 'Detección y presurización completa' },
                            { icon: <Building size={20} />, title: 'Materiales Premium', desc: 'Ladrillo visto y hormigón arquitectónico' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                padding: '1rem',
                                backgroundColor: colors.black,
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.red;
                                    e.currentTarget.style.transform = 'translateX(8px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.black;
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}>
                                <div style={{ color: colors.redLight, marginTop: '0.125rem' }}>
                                    {item.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ color: colors.white, fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ color: colors.blackFaded, fontSize: '0.75rem', margin: 0, lineHeight: 1.4 }}>
                                        {item.desc}
                                    </p>
                                </div>
                                <ChevronRight size={16} style={{ color: colors.white, opacity: 0.7 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section >

    {/* TIPOLOGÍAS */ }
    < section id = "tipologias" style = {{ padding: '5rem 0', backgroundColor: colors.white }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: colors.black,
                    marginBottom: '1rem'
                }}>
                    TIPOLOGÍAS <span style={{ color: colors.red }}>DISPONIBLES</span>
                </h2>
                <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
                <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.blackMid }}>
                    Departamentos de 1 y 3 dormitorios diseñados para maximizar confort y funcionalidad
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {tipologias.map((tipologia, idx) => (
                    <div key={idx} style={{
                        position: 'relative',
                        backgroundColor: colors.white,
                        border: `2px solid ${selectedTipologia === idx ? colors.red : '#e5e7eb'}`,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        transform: selectedTipologia === idx ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: selectedTipologia === idx ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        height: 'fit-content'
                    }}
                        onClick={() => setSelectedTipologia(selectedTipologia === idx ? null : idx)}
                        onMouseEnter={(e) => {
                            if (selectedTipologia !== idx) {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (selectedTipologia !== idx) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                            }
                        }}>

                        {/* Badge disponibilidad */}
                        <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            backgroundColor: tipologia.disponibles > 3 ? '#10b981' : tipologia.disponibles > 1 ? '#f59e0b' : '#ef4444',
                            color: colors.white,
                            padding: '0.5rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            zIndex: 10
                        }}>
                            {tipologia.disponibles} disponibles
                        </div>

                        {/* Imagen del plano */}
                        <div style={{
                            height: '280px',
                            backgroundColor: '#f8f9fa',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src={tipologia.imagen}
                                alt={`Plano tipología ${tipologia.tipo}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    padding: '1rem',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />

                            {/* Header superpuesto */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                background: `linear-gradient(to bottom, ${tipologia.dormitorios === 3 ? colors.red : colors.black}ee, transparent)`,
                                padding: '3rem 1.5rem 2rem',
                                color: colors.white
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem', margin: 0 }}>
                                    TIPO {tipologia.tipo.toUpperCase()}
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', opacity: 0.9 }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Building size={14} /> {tipologia.dormitorios} {tipologia.dormitorios === 1 ? 'Dorm.' : 'Dorms.'}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <MapPin size={14} /> {tipologia.banos} Baño{tipologia.banos > 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Superficie propia</span>
                                    <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supPropia} m²</span>
                                </div>

                                {tipologia.supBalcon > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Balcón</span>
                                        <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supBalcon} m²</span>
                                    </div>
                                )}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: colors.blackMid }}>Superficie común</span>
                                    <span style={{ fontWeight: '700', color: colors.black }}>{tipologia.supComun} m²</span>
                                </div>

                                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '700', color: colors.black, fontSize: '1.125rem' }}>TOTAL</span>
                                    <span style={{ fontSize: '1.75rem', fontWeight: '900', color: colors.red }}>{tipologia.supTotal} m²</span>
                                </div>
                            </div>

                            {/* Botón expandido */}
                            <div style={{
                                maxHeight: selectedTipologia === idx ? '80px' : '0',
                                opacity: selectedTipologia === idx ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                marginTop: selectedTipologia === idx ? '1rem' : '0'
                            }}>
                                <Button
                                    text="CONSULTAR PRECIO"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        sendWhatsApp(`Hola, me interesa la tipología ${tipologia.tipo} de WISSEN DF. ¿Podrían contactarme?`);
                                    }}
                                    icon={<MessageCircle size={16} />}
                                />
                            </div>
                        </div>

                        {/* Indicador de expansión */}
                        <div style={{
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: colors.red,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.white,
                            transform: selectedTipologia === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Bottom tipologías */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '3rem',
                    backgroundColor: colors.blackLight,
                    borderRadius: '20px',
                    maxWidth: '600px'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.75rem', color: colors.white }}>
                            ¿Necesitás más información?
                        </h3>
                        <p style={{ color: colors.blackFaded, margin: 0, fontSize: '1.125rem' }}>
                            Nuestro equipo te ayudará a elegir la tipología perfecta para vos
                        </p>
                    </div>
                    <Button
                        text="CONTACTAR ASESOR"
                        onClick={() => sendWhatsApp()}
                        icon={<Phone size={16} />}
                    />
                </div>
            </div>
        </div>
</section >

    {/* CONTACTO */ }
    < section id = "contacto" style = {{ padding: '5rem 0', backgroundColor: colors.blackLight }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: colors.white,
                    marginBottom: '1rem'
                }}>
                    CONTACTO <span style={{ color: colors.redLight }}>DIRECTO</span>
                </h2>
                <div style={{ width: '96px', height: '4px', backgroundColor: colors.red, margin: '0 auto 2rem', borderRadius: '2px' }}></div>
                <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: colors.blackFaded }}>
                    Elegí el canal que prefieras para contactarte con nosotros
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                {[
                    {
                        icon: <MessageCircle size={24} />,
                        title: 'WhatsApp',
                        desc: 'Respuesta inmediata',
                        value: '+54 351 751-6450',
                        color: '#25D366',
                        action: () => sendWhatsApp()
                    },
                    {
                        icon: <Phone size={24} />,
                        title: 'Teléfono',
                        desc: 'Llamanos directamente',
                        value: '+54 351 751-6450',
                        color: colors.red,
                        action: () => window.open('tel:543517516450')
                    },
                    {
                        icon: <Mail size={24} />,
                        title: 'Email',
                        desc: 'Consultas por correo',
                        value: 'info@bznurbanmaking.com.ar',
                        color: colors.black,
                        action: () => window.open('mailto:info@bznurbanmaking.com.ar?subject=Consulta WISSEN DF')
                    },
                    {
                        icon: <MapPin size={24} />,
                        title: 'Oficina',
                        desc: 'Visitanos en persona',
                        value: 'Dean Funes 1928, Córdoba',
                        color: colors.redLight,
                        action: () => window.open('https://maps.google.com/?q=Dean+Funes+1928+Cordoba')
                    }
                ].map((method, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        padding: '2rem',
                        backgroundColor: colors.black,
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        border: '2px solid transparent'
                    }}
                        onClick={method.action}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${method.color}20`;
                            e.currentTarget.style.borderColor = method.color;
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.black;
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: method.color,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: colors.white,
                            flexShrink: 0
                        }}>
                            {method.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontWeight: '700', color: colors.white, marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                                {method.title}
                            </h4>
                            <p style={{ fontSize: '0.875rem', color: colors.blackFaded, marginBottom: '0.5rem' }}>
                                {method.desc}
                            </p>
                            <p style={{ fontSize: '0.875rem', fontWeight: '500', color: method.color, margin: 0 }}>
                                {method.value}
                            </p>
                        </div>
                        <ArrowRight size={20} style={{ color: colors.white, opacity: 0.7 }} />
                    </div>
                ))}
            </div>

            {/* CTA WhatsApp destacado */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '3rem',
                    backgroundColor: '#25D366',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    maxWidth: '500px'
                }}
                    onClick={() => sendWhatsApp()}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <MessageCircle size={48} color={colors.white} style={{ marginBottom: '1.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: colors.white, marginBottom: '0.75rem' }}>
                        Consulta Rápida por WhatsApp
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                        Te respondemos al instante
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: colors.white, fontWeight: '600' }}>
                        <span>Iniciar chat</span>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>
        </div>
</section >

    {/* FOOTER */ }
    < footer style = {{ backgroundColor: colors.black, color: colors.white, padding: '4rem 0 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                        WISSEN <span style={{ color: colors.redLight }}>DF</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', fontWeight: '500', color: colors.red, marginBottom: '1.5rem' }}>
                        Por BZN Urban Making
                    </p>
                    <p style={{ fontSize: '1rem', color: colors.blackFaded, marginBottom: '2rem', lineHeight: 1.6 }}>
                        Un nuevo concepto de vivienda en el corazón de Córdoba.
                        Departamentos de 1 y 3 dormitorios con terminaciones de primera calidad.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <MapPin size={20} color={colors.red} />
                            <span style={{ fontSize: '0.875rem' }}>Dean Funes 1928, Barrio Alberdi, Córdoba</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Building size={20} color={colors.red} />
                            <span style={{ fontSize: '0.875rem' }}>33 Departamentos • 8 Cocheras • Plaza Interior</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Phone size={20} color={colors.red} />
                            <span style={{ fontSize: '0.875rem' }}>+54 351 751-6450</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Conectate con nosotros</h3>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                        {[
                            { name: 'Instagram', url: 'https://instagram.com/grupo.bzn', color: '#E4405F', icon: <Instagram size={20} /> },
                            { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61569261744008', color: '#1877F2', icon: <Facebook size={20} /> },
                            { name: 'WhatsApp', url: 'https://wa.me/3517516450', color: '#25D366', icon: <MessageCircle size={20} /> }
                        ].map((social, idx) => (
                            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: colors.blackLight,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                color: colors.white
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = social.color;
                                    e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.blackLight;
                                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                }}>
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div style={{ padding: '1.5rem', backgroundColor: colors.blackLight, borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Building size={24} color={colors.red} />
                            <span style={{ fontWeight: '700', color: colors.white }}>BZN Urban Making</span>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: colors.blackFaded, margin: 0, lineHeight: 1.5 }}>
                            40 años de experiencia en desarrollos inmobiliarios.
                            Más de 100.000 m² ejecutados en Córdoba.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: `1px solid ${colors.blackLight}`, paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', color: colors.blackFaded, textAlign: 'center', margin: 0 }}>
                    © 2025 BZN Urban Making. Todos los derechos reservados. WISSEN DF - Un proyecto de calidad y confianza.
                </p>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: colors.red,
                    color: colors.white,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                }}>
                    <Award size={16} />
                    <span>Desarrollista de Confianza</span>
                </div>
            </div>
        </div>
</footer >

    {/* CSS Animations */ }
    < style jsx > {`
@keyframes pulse {
 0%, 100% { opacity: 1; }
 50% { opacity: 0.5; }
}
@keyframes bounce {
 0%, 100% { transform: translateX(-50%) translateY(0); }
 50% { transform: translateX(-50%) translateY(-10px); }
}
.hidden { display: none; }
@media (min-width: 1024px) {
 .lg\\:flex { display: flex; }
}
`}</style >
</div >
);
};

export default WissenDFLanding;