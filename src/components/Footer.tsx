import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 Footer/CTA Final)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'próximo passo',
  heading: 'Você não precisa virar outra pessoa. Você precisa',
  headingEm: 'reencontrar a mulher que ficou pelo caminho.',
  subtitle: 'A conversa inicial é gratuita e sem compromisso.',
  ctaText: 'Falar com Fabiana no WhatsApp',
}
// ════════════════════════════════════════════════════════════════════

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 7%, transparent) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Final CTA section */}
      <section className="section-padding-lg">
        <div className="container-ultra">
          <div className="flex flex-col items-center text-center gap-8">

            {/* Aurora accent */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 6%, transparent) 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            <FadeIn>
              <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
                {COPY.eyebrow}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-off-white)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  maxWidth: '700px',
                }}
              >
                {COPY.heading}{' '}
                <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="text-sm md:text-base"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-bg-warm)',
                  fontWeight: 300,
                  opacity: 0.6,
                  maxWidth: '420px',
                }}
              >
                {COPY.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
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
                {COPY.ctaText}
              </a>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Info bar */}
      <div
        style={{
          borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 8%, transparent)`,
          padding: '1.25rem 0',
        }}
      >
        <div className="container-ultra flex flex-col items-center text-center gap-3">
          <p
            className="text-xs md:text-sm"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-bg-warm)',
              opacity: 0.4,
              fontWeight: 300,
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            Horario de Suporte e Agendamento: {SITE.horario}
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-bg-warm)',
              opacity: 0.3,
              fontWeight: 300,
              maxWidth: '600px',
              lineHeight: 1.6,
            }}
          >
            {SITE.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 10%, transparent)`,
          padding: '1.5rem 0',
          backgroundColor: 'color-mix(in srgb, var(--color-dark) 85%, var(--color-secondary))',
        }}
      >
        <div className="container-ultra flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-bg-warm)', opacity: 0.25 }}
          >
            {SITE.nomeCompleto}
          </span>
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-bg-warm)', opacity: 0.25 }}
          >
            {SITE.especialidadeCurta} | {SITE.crp}
          </span>
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-bg-warm)', opacity: 0.25 }}
          >
            {new Date().getFullYear()} Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
