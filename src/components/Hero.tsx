import { motion } from 'motion/react'
import { useState } from 'react'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 1 Hero)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  callout: 'MULHER QUE CARREGA TODO MUNDO',
  h1: 'Sua dor não é frescura.',
  h1Em: 'É um corpo que aguentou demais por tempo demais.',
  subtitle: 'Ansiedade, burnout e esgotamento em mulher sobrecarregada não desaparecem com remédio sozinho.',
  ctaPrimary: 'Quero agendar minha sessão',
  ctaSecondary: 'ou conheça meu trabalho',
}
// ════════════════════════════════════════════════════════════════════

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollToDores = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('dores')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 7%, transparent) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '520px',
            height: '520px',
            background: 'color-mix(in srgb, var(--color-primary) 25%, transparent)',
            top: '-10%',
            right: '5%',
            animation: 'aurora-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '400px',
            height: '400px',
            background: 'color-mix(in srgb, var(--color-secondary) 22%, transparent)',
            bottom: '10%',
            left: '10%',
            animation: 'aurora-2 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: '300px',
            height: '300px',
            background: 'color-mix(in srgb, var(--color-bg-warm) 13%, transparent)',
            top: '40%',
            left: '35%',
            animation: 'aurora-3 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Vertical editorial line */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
        style={{
          width: '2px',
          height: '180px',
          backgroundColor: 'var(--color-secondary)',
          opacity: 0.7,
        }}
      />

      <div className="container-ultra relative z-10 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center min-h-screen md:min-h-0 md:py-32">

          {/* Copy — left (mobile: first) */}
          <div className="flex flex-col gap-6">
            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0, ease }}
            >
              <span
                className="eyebrow-ultra"
                style={{ color: 'var(--color-secondary)', letterSpacing: '0.25em' }}
              >
                {COPY.callout}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease }}
              className="text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-off-white)',
                fontWeight: 400,
              }}
            >
              {COPY.h1}{' '}
              <em style={{ color: 'var(--color-secondary)' }}>{COPY.h1Em}</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.30, ease }}
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                maxWidth: '420px',
              }}
            >
              {COPY.subtitle}
            </motion.p>

            {/* CTAs — Primario: WhatsApp (agendamento) / Secundario: scroll para saber mais */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href={SITE.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary-dark)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                {COPY.ctaPrimary}
              </a>
              <button
                onClick={scrollToDores}
                className="flex items-center justify-center gap-2 text-sm cursor-pointer"
                style={{
                  color: 'var(--color-bg-warm)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  opacity: 0.7,
                  padding: '1.25rem 1rem',
                  background: 'none',
                  border: 'none',
                }}
              >
                {COPY.ctaSecondary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            {/* Credentials */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
              className="eyebrow-ultra"
              style={{ color: 'var(--color-secondary)', opacity: 0.6 }}
            >
              {SITE.credenciais}
            </motion.p>
          </div>

          {/* Photo — right (mobile: second) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease }}
            className="flex justify-center md:justify-end px-4 md:px-0"
          >
            <div className="relative w-full md:w-auto">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 opacity-20"
                style={{
                  border: `1px solid var(--color-secondary)`,
                  borderRadius: '20px 6px 20px 6px',
                }}
                aria-hidden="true"
              />
              {!imgError ? (
                <img
                  src={SITE.fotoHero}
                  alt={`${SITE.nomeCompleto}, ${SITE.especialidadeCurta}`}
                  onError={() => setImgError(true)}
                  className="relative z-10 object-cover w-full md:w-[380px]"
                  style={{
                    aspectRatio: '3 / 4',
                    borderRadius: '16px 4px 16px 4px',
                  }}
                />
              ) : (
                <div
                  className="relative z-10 flex items-center justify-center w-full md:w-[380px]"
                  style={{
                    aspectRatio: '3 / 4',
                    borderRadius: '16px 4px 16px 4px',
                    background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`,
                    border: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                  }}
                >
                  <div className="text-center" style={{ color: 'var(--color-secondary)', opacity: 0.5 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3rem',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {SITE.iniciais}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {SITE.nomeCurto}
                    </div>
                  </div>
                </div>
              )}

              {/* Accent dot */}
              <div
                className="absolute -bottom-4 -right-4"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 30%, transparent) 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-secondary)', opacity: 0.4 }}
          >
            role para baixo
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" opacity="0.4" style={{ stroke: 'var(--color-secondary)' }}>
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
