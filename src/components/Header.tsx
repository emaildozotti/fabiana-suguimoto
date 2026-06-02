import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import { SITE } from '../site.config'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const glassOpacity = useTransform(scrollY, [60, 200], [0, 1])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Liquid glass background */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: glassOpacity,
          backdropFilter: 'blur(24px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
          background: 'linear-gradient(135deg, rgba(8,12,18,0.72) 0%, rgba(13,17,23,0.58) 50%, rgba(8,12,18,0.72) 100%)',
          borderBottom: `1px solid color-mix(in srgb, var(--color-secondary) 8%, transparent)`,
        }}
      />

      {/* Refraction highlight */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          opacity: glassOpacity,
          background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--color-secondary) 15%, transparent) 20%, rgba(235,240,247,0.08) 50%, color-mix(in srgb, var(--color-secondary) 15%, transparent) 80%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative container-ultra">
        <motion.div
          className="flex items-center justify-between"
          animate={{ height: scrolled ? '56px' : '64px' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <span
              className="block rounded-full"
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: 'var(--color-secondary)',
                boxShadow: `0 0 8px color-mix(in srgb, var(--color-secondary) 35%, transparent)`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                letterSpacing: '0.01em',
                color: 'var(--color-off-white)',
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
            >
              {SITE.nomeCurto}
            </span>
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: `color-mix(in srgb, var(--color-secondary) 45%, transparent)`,
                fontWeight: 400,
                marginLeft: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              {SITE.especialidadeCurta}
            </span>
          </a>

          {/* CTA pill */}
          <a
            href={SITE.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '8px 3px 8px 3px',
              backgroundColor: `color-mix(in srgb, var(--color-secondary) 10%, transparent)`,
              border: `1px solid color-mix(in srgb, var(--color-secondary) 18%, transparent)`,
              color: `color-mix(in srgb, var(--color-off-white) 85%, transparent)`,
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              cursor: 'pointer',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget
              t.style.backgroundColor = `color-mix(in srgb, var(--color-secondary) 20%, transparent)`
              t.style.borderColor = `color-mix(in srgb, var(--color-secondary) 40%, transparent)`
              t.style.color = 'var(--color-off-white)'
              t.style.boxShadow = `0 0 16px color-mix(in srgb, var(--color-secondary) 10%, transparent)`
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget
              t.style.backgroundColor = `color-mix(in srgb, var(--color-secondary) 10%, transparent)`
              t.style.borderColor = `color-mix(in srgb, var(--color-secondary) 18%, transparent)`
              t.style.color = `color-mix(in srgb, var(--color-off-white) 85%, transparent)`
              t.style.boxShadow = 'none'
            }}
          >
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, color-mix(in srgb, var(--color-bg-warm) 3%, transparent) 0%, transparent 60%)`,
              }}
            />
            <span className="relative" style={{ lineHeight: 1 }}>Agendar</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="relative">
              <path
                d="M2.5 7h8M7.5 3.5 11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}
