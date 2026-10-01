"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Pause,
  Play,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { marketplaceBanners } from "@/lib/data";

/* ============================================================
   CONFIGURAÇÕES
============================================================ */

const AUTOPLAY_INTERVAL = 5000;

/* ============================================================
   COMPONENTE
============================================================ */

export default function MarketplaceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const carouselRef = useRef<HTMLElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  const totalSlides = marketplaceBanners.length;

  /* ==========================================================
     PROTEÇÃO
  ========================================================== */

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;

    setActiveSlide((current) =>
      current >= totalSlides - 1
        ? 0
        : current + 1
    );
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    if (totalSlides <= 1) return;

    setActiveSlide((current) =>
      current <= 0
        ? totalSlides - 1
        : current - 1
    );
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index: number) => {
      if (
        index < 0 ||
        index >= totalSlides
      ) {
        return;
      }

      setActiveSlide(index);
    },
    [totalSlides]
  );

  /* ==========================================================
     REDUCED MOTION
  ========================================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  /* ==========================================================
     VISIBILIDADE DA PÁGINA
  ========================================================== */

  useEffect(() => {
    const handleVisibility = () => {
      setIsPageVisible(
        document.visibilityState === "visible"
      );
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  /* ==========================================================
     AUTOPLAY
  ========================================================== */

  useEffect(() => {
    if (
      totalSlides <= 1 ||
      isPaused ||
      !isPageVisible ||
      isReducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    totalSlides,
    isPaused,
    isPageVisible,
    isReducedMotion,
    nextSlide,
  ]);

  /* ==========================================================
     TECLADO
  ========================================================== */

  useEffect(() => {
    const handleKeyboard = (
      event: KeyboardEvent
    ) => {
      if (
        !carouselRef.current?.matches(
          ":focus-within"
        )
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousSlide();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [
    previousSlide,
    nextSlide,
    goToSlide,
    totalSlides,
  ]);

  /* ==========================================================
     TOUCH / SWIPE
  ========================================================== */

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    touchCurrentX.current =
      touchStartX.current;
  };

  const handleTouchMove = (
    event: React.TouchEvent
  ) => {
    touchCurrentX.current =
      event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchCurrentX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current -
      touchCurrentX.current;

    const minimumSwipe = 50;

    if (
      Math.abs(distance) >= minimumSwipe
    ) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  /* ==========================================================
     PAUSA
  ========================================================== */

  const togglePause = () => {
    setIsPaused((current) => !current);
  };

  /* ==========================================================
     PROTEÇÃO
  ========================================================== */

  if (!totalSlides) {
    return null;
  }

  const slideNumber = String(
    activeSlide + 1
  ).padStart(2, "0");

  const totalNumber = String(
    totalSlides
  ).padStart(2, "0");

  return (
    <section
      ref={carouselRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Destaques da IS Solar"
      onMouseEnter={() =>
        setIsPaused(true)
      }
      onMouseLeave={() =>
        setIsPaused(false)
      }
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="
        group relative min-w-0
        overflow-hidden rounded-md
        border border-gray-200
        bg-black
        shadow-[0_5px_20px_rgba(0,0,0,.08)]
        outline-none
        focus-visible:ring-2
        focus-visible:ring-[#ffbf00]
      "
    >

      {/* ======================================================
          ÁREA PRINCIPAL
      ======================================================= */}

      <div
        className="
          relative
          aspect-[16/7]
          min-h-[300px]
          w-full
          overflow-hidden
          sm:min-h-[340px]
          lg:min-h-[400px]
        "
      >

        {/* ====================================================
            SLIDES
        ==================================================== */}

        {marketplaceBanners.map(
          (banner, index) => {
            const active =
              index === activeSlide;

            return (
              <article
                key={`${banner.image}-${index}`}
                aria-hidden={!active}
                aria-roledescription="slide"
                aria-label={`Slide ${
                  index + 1
                } de ${totalSlides}`}
                className={`
                  absolute inset-0
                  ${
                    isReducedMotion
                      ? ""
                      : "transition-all duration-700 ease-out"
                  }
                  ${
                    active
                      ? "z-10 translate-x-0 opacity-100"
                      : "pointer-events-none z-0 translate-x-3 opacity-0"
                  }
                `}
              >

                {/* ==================================================
                    IMAGEM
                ================================================== */}

                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`
                    object-cover
                    ${
                      isReducedMotion
                        ? ""
                        : "transition-transform duration-[6000ms] ease-out"
                    }
                    ${
                      active
                        ? "scale-100"
                        : "scale-105"
                    }
                  `}
                />

                {/* ==================================================
                    OVERLAY HORIZONTAL
                ================================================== */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-black/80
                    via-black/35
                    to-transparent
                  "
                />

                {/* ==================================================
                    OVERLAY VERTICAL
                ================================================== */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/10
                    to-black/10
                  "
                />

                {/* ==================================================
                    CONTEÚDO
                ================================================== */}

                <div className="absolute inset-x-0 bottom-0 z-20">

                  <div
                    className="
                      max-w-[680px]
                      p-5
                      pb-8
                      text-white
                      sm:p-7
                      sm:pb-9
                      lg:p-9
                      lg:pb-10
                    "
                  >

                    {/* LABEL */}

                    <div
                      className="
                        mb-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >

                      <span className="relative flex h-2 w-2">

                        <span
                          className="
                            absolute
                            inline-flex
                            h-full
                            w-full
                            animate-ping
                            rounded-full
                            bg-[#ffbf00]
                            opacity-70
                          "
                        />

                        <span
                          className="
                            relative
                            inline-flex
                            h-2
                            w-2
                            rounded-full
                            bg-[#ffbf00]
                          "
                        />

                      </span>

                      <span
                        className="
                          text-[8px]
                          font-black
                          uppercase
                          tracking-[0.14em]
                          sm:text-[9px]
                        "
                      >
                        IS Solar · Moçambique
                      </span>

                    </div>

                    {/* TÍTULO */}

                    <h1
                      className="
                        max-w-[600px]
                        text-2xl
                        font-black
                        leading-[1.05]
                        tracking-tight
                        sm:text-3xl
                        lg:text-[40px]
                      "
                    >
                      {banner.title}
                    </h1>

                    {/* DESCRIÇÃO */}

                    <p
                      className="
                        mt-2
                        max-w-[540px]
                        text-[11px]
                        leading-5
                        text-white/75
                        sm:text-xs
                        lg:text-sm
                      "
                    >
                      {banner.sub}
                    </p>

                    {/* BOTÕES */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      <Link
                        href="/produtos"
                        className="
                          group
                          inline-flex
                          min-h-[40px]
                          items-center
                          gap-2
                          rounded
                          bg-[#ffbf00]
                          px-4
                          text-[9px]
                          font-black
                          text-[#171717]
                          shadow-lg
                          transition-all
                          hover:bg-[#ffd04a]
                          hover:shadow-xl
                          sm:px-5
                          sm:text-[10px]
                        "
                      >
                        Explorar produtos

                        <ArrowRight
                          size={14}
                          className="
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />
                      </Link>

                      <Link
                        href="/cotacao"
                        className="
                          group
                          inline-flex
                          min-h-[40px]
                          items-center
                          gap-2
                          rounded
                          border
                          border-white/30
                          bg-white/10
                          px-4
                          text-[9px]
                          font-black
                          text-white
                          backdrop-blur-sm
                          transition-all
                          hover:bg-white/20
                          sm:px-5
                          sm:text-[10px]
                        "
                      >
                        <FileText size={14} />
                        Pedir orçamento
                      </Link>

                    </div>

                  </div>

                </div>

              </article>
            );
          }
        )}

        {/* ====================================================
            NAVEGAÇÃO ESQUERDA
        ==================================================== */}

        {totalSlides > 1 && (
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Banner anterior"
            className="
              absolute
              left-3
              top-1/2
              z-30
              grid
              h-10
              w-10
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              opacity-80
              backdrop-blur-md
              transition-all
              hover:scale-110
              hover:bg-black/60
              hover:opacity-100
              focus:outline-none
              focus:ring-2
              focus:ring-[#ffbf00]
              sm:left-4
            "
          >
            <ChevronLeft size={19} />
          </button>
        )}

        {/* ====================================================
            NAVEGAÇÃO DIREITA
        ==================================================== */}

        {totalSlides > 1 && (
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próximo banner"
            className="
              absolute
              right-3
              top-1/2
              z-30
              grid
              h-10
              w-10
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              opacity-80
              backdrop-blur-md
              transition-all
              hover:scale-110
              hover:bg-black/60
              hover:opacity-100
              focus:outline-none
              focus:ring-2
              focus:ring-[#ffbf00]
              sm:right-4
            "
          >
            <ChevronRight size={19} />
          </button>
        )}

        {/* ====================================================
            PLAY / PAUSE
        ==================================================== */}

        {totalSlides > 1 && (
          <button
            type="button"
            onClick={togglePause}
            aria-label={
              isPaused
                ? "Continuar carousel"
                : "Pausar carousel"
            }
            className="
              absolute
              right-4
              top-4
              z-30
              grid
              h-8
              w-8
              place-items-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              hover:scale-105
              hover:bg-black/60
              focus:outline-none
              focus:ring-2
              focus:ring-[#ffbf00]
            "
          >
            {isPaused ? (
              <Play
                size={13}
                fill="currentColor"
              />
            ) : (
              <Pause size={13} />
            )}
          </button>
        )}

        {/* ====================================================
            CONTADOR
        ==================================================== */}

        {totalSlides > 1 && (
          <div
            className="
              absolute
              left-4
              top-4
              z-30
              rounded-full
              border
              border-white/20
              bg-black/30
              px-3
              py-1.5
              text-[9px]
              font-black
              text-white
              backdrop-blur-md
            "
          >
            <span className="text-[#ffbf00]">
              {slideNumber}
            </span>

            <span className="mx-1 text-white/30">
              /
            </span>

            <span className="text-white/60">
              {totalNumber}
            </span>
          </div>
        )}

        {/* ====================================================
            INDICADORES
        ==================================================== */}

        {totalSlides > 1 && (
          <div
            className="
              absolute
              bottom-4
              right-5
              z-30
              flex
              items-center
              gap-1.5
            "
          >
            {marketplaceBanners.map(
              (banner, index) => {
                const active =
                  index === activeSlide;

                return (
                  <button
                    key={`${banner.image}-indicator`}
                    type="button"
                    onClick={() =>
                      goToSlide(index)
                    }
                    aria-label={`Ir para slide ${
                      index + 1
                    }`}
                    aria-current={
                      active
                        ? "true"
                        : undefined
                    }
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ffbf00]
                      ${
                        active
                          ? "w-9 bg-[#ffbf00]"
                          : "w-1.5 bg-white/50 hover:bg-white"
                      }
                    `}
                  />
                );
              }
            )}
          </div>
        )}

        {/* ====================================================
            BARRA DE PROGRESSO
        ==================================================== */}

        {!isPaused &&
          isPageVisible &&
          !isReducedMotion &&
          totalSlides > 1 && (
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                h-[2px]
                bg-white/10
              "
            >
              <div
                key={activeSlide}
                className="
                  h-full
                  origin-left
                  bg-[#ffbf00]
                  animate-[carouselProgress_5s_linear]
                "
              />
            </div>
          )}

      </div>

    </section>
  );
}