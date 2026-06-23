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
// Foto usada como thumbnail do vídeo: foto dedicada (fotoVideo), distinta da bio/about.
// Fallback pra fotoAbout se o cliente só tiver 2 fotos. Fallback final no gradiente.
const VIDEO_THUMB = (SITE as Record<string, string>).fotoVideo || SITE.fotoAbout
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

          {/* Video container — 9:16 vertical com thumbnail premium (foto da cliente) */}
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
                    {/* Foto da cliente (cobre o card) */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${VIDEO_THUMB}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 20%',
                        transformOrigin: 'center',
                      }}
                      aria-hidden="true"
                    />

                    {/* Overlay premium — escurece topo/base, mantém rosto visível e dá legibilidade */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, color-mix(in srgb, var(--color-dark) 92%, transparent) 0%, color-mix(in srgb, var(--color-dark) 18%, transparent) 38%, color-mix(in srgb, var(--color-dark) 10%, transparent) 62%, color-mix(in srgb, var(--color-dark) 55%, transparent) 100%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Vinheta radial central pra destacar o botão */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at center 46%, color-mix(in srgb, var(--color-dark) 35%, transparent) 0%, transparent 55%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Linha decorativa topo */}
                    <div
                      className="absolute top-8 left-1/2 -translate-x-1/2"
                      style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor: 'var(--color-off-white)',
                        opacity: 0.35,
                      }}
                      aria-hidden="true"
                    />

                    {/* Botão de play — anéis pulsantes + glow que respira */}
                    <div className="relative z-10 flex items-center justify-center" style={{ width: '88px', height: '88px' }}>
                      {/* Anel pulsante 1 */}
                      <motion.span
                        className="absolute rounded-full"
                        style={{
                          width: '84px',
                          height: '84px',
                          border: '1.5px solid color-mix(in srgb, var(--color-secondary) 70%, transparent)',
                        }}
                        animate={{ scale: [1, 1.9], opacity: [0.55, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
                        aria-hidden="true"
                      />
                      {/* Anel pulsante 2 (defasado) */}
                      <motion.span
                        className="absolute rounded-full"
                        style={{
                          width: '84px',
                          height: '84px',
                          border: '1.5px solid color-mix(in srgb, var(--color-secondary) 70%, transparent)',
                        }}
                        animate={{ scale: [1, 1.9], opacity: [0.55, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: 1.3 }}
                        aria-hidden="true"
                      />

                      {/* Botão */}
                      <motion.div
                        className="relative flex items-center justify-center"
                        style={{
                          width: '78px',
                          height: '78px',
                          borderRadius: '50%',
                          backgroundColor: 'color-mix(in srgb, var(--color-secondary) 88%, var(--color-dark))',
                          border: '1px solid color-mix(in srgb, var(--color-off-white) 35%, transparent)',
                        }}
                        animate={{
                          scale: [1, 1.06, 1],
                          boxShadow: [
                            '0 0 0 0 color-mix(in srgb, var(--color-secondary) 0%, transparent), 0 10px 30px color-mix(in srgb, var(--color-dark) 60%, transparent)',
                            '0 0 46px 6px color-mix(in srgb, var(--color-secondary) 45%, transparent), 0 10px 30px color-mix(in srgb, var(--color-dark) 60%, transparent)',
                            '0 0 0 0 color-mix(in srgb, var(--color-secondary) 0%, transparent), 0 10px 30px color-mix(in srgb, var(--color-dark) 60%, transparent)',
                          ],
                        }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                          <path
                            d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z"
                            fill="var(--color-dark)"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Label abaixo do play */}
                    <p
                      className="relative z-10 mt-6 eyebrow-ultra"
                      style={{
                        color: 'var(--color-off-white)',
                        opacity: 0.85,
                      }}
                    >
                      assistir video
                    </p>

                    {/* Nome no rodapé */}
                    <div
                      className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1.5"
                      style={{ zIndex: 10 }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '1px',
                          backgroundColor: 'var(--color-secondary)',
                          opacity: 0.6,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        className="eyebrow-ultra"
                        style={{
                          color: 'var(--color-off-white)',
                          opacity: 0.7,
                          fontSize: '9px',
                        }}
                      >
                        {SITE.nomeCurto}
                      </span>
                    </div>
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
