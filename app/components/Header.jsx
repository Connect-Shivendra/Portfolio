'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, animate, stagger } from 'motion/react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { ArrowRight, Download } from 'lucide-react';

// Particle canvas — gold dust floating in the background
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const GOLD = ['rgba(201,168,76,', 'rgba(224,192,112,', 'rgba(168,135,58,'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: GOLD[Math.floor(Math.random() * GOLD.length)],
        alpha: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.pulse += p.pulseSpeed;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + a + ')';
        ctx.fill();

        // Draw connection lines between nearby particles
        particles.forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201,168,76,${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}

// Word-by-word animated text
function AnimatedWords({ text, className, delay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Animated counter for stats
function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setLoaded(true);
    const handleMouse = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 40);
      mouseY.set((e.clientY - window.innerHeight / 2) / 40);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const stats = [
    { value: 14, suffix: '+', label: 'Years experience' },
    { value: 6, suffix: '', label: 'Enterprise organisations' },
    { value: 50, suffix: '+', label: 'Data professionals led' },
  ];

  return (
    <>
      <ParticleField />

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden">

        {/* Radial glow behind profile */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Profile photo with parallax + float + ring */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative mb-8"
        >
          {/* Rotating gold ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, rgba(201,168,76,0.6) 25%, transparent 50%, rgba(201,168,76,0.3) 75%, transparent 100%)',
            }}
          />
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-1 rounded-full border border-[var(--accent-color)]/40"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <Image
              src={assets.profile_img}
              alt="Shivendra Singh — Head of Data, Information & AI"
              width={160}
              height={160}
              className="rounded-full w-36 md:w-44 relative z-10 border-2 border-[var(--accent-color)]/30"
              priority
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute -right-4 -bottom-2 bg-[var(--accent-color)] text-xs font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap z-20"
            style={{ color: 'var(--on-accent)' }}
          >
            Sydney, Australia 🇦🇺
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-[var(--accent-color)] font-semibold tracking-widest text-sm uppercase mb-3 flex items-center gap-2"
        >
          <span>Hello, I&apos;m Shivendra Singh</span>
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ delay: 1.5, duration: 0.8, repeat: 3, repeatDelay: 4 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.p>

        {/* Main headline — word by word */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-Sora font-bold text-center text-[var(--text-primary)] max-w-4xl leading-tight mb-6">
          {loaded && (
            <AnimatedWords
              text="Executive Data & AI Leader"
              delay={0.7}
            />
          )}
        </h1>

        {/* Gold animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-0.5 w-48 mb-6 origin-left"
          style={{ background: 'linear-gradient(90deg, var(--accent-color), var(--accent-light), var(--accent-color))' }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="max-w-2xl text-center text-lg text-[var(--text-secondary)] leading-relaxed mb-10"
        >
          Head of Information &amp; BI Services at Camden Council. Building enterprise data strategies,
          cloud-native platforms, and data-driven cultures across Australia&apos;s largest organisations for 13+ years.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative px-10 py-3.5 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2"
            style={{ background: 'var(--accent-color)', color: 'var(--on-accent)' }}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
            />
            <span className="relative flex items-center gap-2">
              Say Hello
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </a>

          <a
            href="/Shivendra-Singh-HoData-CV.pdf"
            download
            className="px-10 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2"
            style={{
              borderColor: 'var(--accent-color)',
              color: 'var(--text-primary)',
              background: 'transparent',
            }}
          >
            Download CV
            <Download size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Animated stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold font-Sora"
                style={{ color: 'var(--accent-color)' }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--accent-color), transparent)' }}
          />
        </motion.div>
      </section>
    </>
  );
}
