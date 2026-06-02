import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 2 Pain Points)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'As 4 dores que essa mulher',
  headingEm: 'carrega em silêncio.',
  pains: [
    'A exaustão que não passa com sono. Você dorme, mas acorda como se não tivesse dormido. Não é preguiça. É um sistema nervoso que aguentou demais.',
    'Carregar o mundo nas costas sem ter com quem contar. Todos contam com você. Mas quem segura você quando o dia acaba?',
    'Sintomas físicos que o exame não acha. Dor de cabeça crônica, taquicardia sem motivo, gastrite, tensão na nuca. Você foi ao médico e ouviu que está tudo bem, mas você sente que não está.',
    'O pensamento que você esconde de todo mundo. Olhar para os seus filhos dormindo, amar eles com tudo, e ainda passar pela cabeça o desejo de sumir por uma semana. Você não é uma mãe horrível. Você é uma mulher no limite.',
  ],
  transition: 'Essa exaustão tem nome. E tem caminho de saída clínico, sério e humano.',
}
// ════════════════════════════════════════════════════════════════════

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {COPY.pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex gap-5 p-6 md:p-8 group transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-bg-warm)',
                  borderRadius: '12px 4px 12px 4px',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 40%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'
                }}
              >
                <span
                  className="shrink-0 eyebrow-ultra"
                  style={{
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    paddingTop: '2px',
                    opacity: 0.6,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                  }}
                >
                  {pain}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <div
              style={{
                width: '2px',
                height: '60px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.transition}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
