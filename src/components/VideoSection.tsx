import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 3 Video)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'Antes de você agendar comigo,',
  headingEm: 'eu gravei esse vídeo.',
  preText: 'Eu te conto rapidinho como o meu acompanhamento funciona e o que você pode esperar do primeiro encontro.',
  postText: 'Você acabou de ouvir como eu trabalho. Agora deixa eu te mostrar como a gente começa juntas.',
}
// ════════════════════════════════════════════════════════════════════

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 7%, transparent) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container-ultra">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          <FadeIn>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight text-center"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-off-white)',
                fontWeight: 400,
              }}
            >
              {COPY.heading}{' '}
              <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
            </h2>
          </FadeIn>

          <FadeIn>
            <p
              className="text-base md:text-lg leading-relaxed text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              &ldquo;{COPY.preText}&rdquo;
            </p>
          </FadeIn>

          {/* Video container — 9:16 vertical com thumbnail premium */}
          <FadeIn delay={0.15}>
            <div
              className="relative cursor-pointer group"
              style={{
                width: '300px',
                height: '533px',
                borderRadius: '16px 4px 16px 4px',
                overflow: 'hidden',
              }}
              onClick={() => !playing && setPlaying(true)}
            >
              <AnimatePresence mode="wait">
                {!playing ? (
                  <motion.div
                    key="poster"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      background: `linear-gradient(160deg, var(--color-dark) 0%, color-mix(in srgb, var(--color-primary) 40%, var(--color-dark)) 50%, var(--color-dark) 100%)`,
                    }}
                  >
                    {/* Subtle aurora glow */}
                    <div
                      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                      style={{
                        background: 'color-mix(in srgb, var(--color-secondary) 15%, transparent)',
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl"
                      style={{
                        background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Dot pattern overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 10%, transparent) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                        opacity: 0.5,
                      }}
                      aria-hidden="true"
                    />

                    {/* Decorative line top */}
                    <div
                      className="absolute top-8 left-1/2 -translate-x-1/2"
                      style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor: 'var(--color-secondary)',
                        opacity: 0.3,
                      }}
                      aria-hidden="true"
                    />

                    {/* Initials watermark */}
                    <div
                      className="absolute"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '8rem',
                        lineHeight: 1,
                        color: 'var(--color-off-white)',
                        opacity: 0.03,
                        userSelect: 'none',
                        pointerEvents: 'none',
                      }}
                      aria-hidden="true"
                    >
                      {SITE.iniciais}
                    </div>

                    {/* Play button */}
                    <motion.div
                      className="relative z-10 flex items-center justify-center"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: 'color-mix(in srgb, var(--color-secondary) 15%, transparent)',
                        border: `1px solid color-mix(in srgb, var(--color-secondary) 30%, transparent)`,
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: `0 0 40px color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ marginLeft: '3px' }}
                      >
                        <path
                          d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z"
                          fill="var(--color-secondary)"
                          opacity="0.9"
                        />
                      </svg>
                    </motion.div>

                    {/* Label below play */}
                    <p
                      className="relative z-10 mt-5 eyebrow-ultra"
                      style={{
                        color: 'var(--color-secondary)',
                        opacity: 0.5,
                      }}
                    >
                      assistir video
                    </p>

                    {/* Name at bottom */}
                    <div
                      className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1"
                      style={{ zIndex: 10 }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '1px',
                          backgroundColor: 'var(--color-secondary)',
                          opacity: 0.3,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        className="eyebrow-ultra"
                        style={{
                          color: 'var(--color-off-white)',
                          opacity: 0.25,
                          fontSize: '8px',
                        }}
                      >
                        {SITE.nomeCurto}
                      </span>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at center, color-mix(in srgb, var(--color-secondary) 5%, transparent) 0%, transparent 70%)`,
                      }}
                      aria-hidden="true"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="player"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <iframe
                      src={`${SITE.videoUrl}?autoplay=1&rel=0&modestbranding=1&playsinline=1&vq=hd1080`}
                      title={`${SITE.nomeCurto} — video de apresentacao`}
                      width="100%"
                      height="100%"
                      style={{ border: 'none', display: 'block' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Border glow underneath */}
              <div
                className="absolute -inset-1 -z-10 rounded-[20px_6px_20px_6px]"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 20%, transparent), color-mix(in srgb, var(--color-secondary) 15%, transparent))`,
                  filter: 'blur(12px)',
                }}
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="text-sm md:text-base text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                opacity: 0.7,
                maxWidth: '440px',
                margin: '0 auto',
              }}
            >
              {COPY.postText}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
