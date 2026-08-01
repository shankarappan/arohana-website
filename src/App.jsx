import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  List,
  Pause,
  Play,
  SpeakerHigh,
  Waveform,
  X,
} from "@phosphor-icons/react";
import { buildBookingMailto } from "./booking-email.js";

const navItems = [
  ["Story", "story"],
  ["Music", "music"],
  ["Live", "live"],
  ["Artists", "artists"],
  ["Contact", "contact"],
];

const tracks = [
  {
    title: "Rasika - Arohana Original",
    src: "/audio/rasika-arohana-original.mp3",
    duration: 636,
  },
  {
    title: "Madras Mail - Arohana Original",
    src: "/audio/madras-mail-arohana-original.mp3",
    duration: 516,
  },
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}

const movements = [
  {
    number: "01",
    visual: "rooted",
    title: "Rooted",
    text: "The depth, discipline and melodic nuance of Carnatic tradition form our foundation.",
  },
  {
    number: "02",
    visual: "improvised",
    title: "Improvised",
    text: "We listen, respond and reshape the music together—alive to every turn in the moment.",
  },
  {
    number: "03",
    visual: "unbound",
    title: "Unbound",
    text: "Raga, harmony, rhythm and silence converge, then take flight beyond familiar borders.",
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function MovementVisual({ type }) {
  if (type === "rooted") {
    return (
      <div className="movement-visual swara-visual" aria-hidden="true">
        {['Sa', 'Ri', 'Ga', 'Ma', 'Pa'].map((swara) => <span key={swara}>{swara}</span>)}
        <i />
      </div>
    );
  }

  if (type === "improvised") {
    return (
      <div className="movement-visual waveform-visual" aria-hidden="true">
        {[3, 6, 9, 5, 11, 7, 4, 8, 2].map((height, index) => (
          <i key={`${height}-${index}`} style={{ '--bar': height }} />
        ))}
      </div>
    );
  }

  return (
    <div className="movement-visual orbit-visual" aria-hidden="true">
      <i />
      <i />
      <i />
      <span />
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(tracks[0].duration);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? window.scrollY / height : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[0].src;
    audio.load();
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const openBooking = () => {
    setMenuOpen(false);
    setBookingOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    window.location.href = buildBookingMailto({
      name: form.get("name")?.toString(),
      email: form.get("email")?.toString(),
      message: form.get("message")?.toString(),
    });
  };

  const toggleTrack = async (index) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (index !== activeTrackIndex) {
      setActiveTrackIndex(index);
      setCurrentTime(0);
      setDuration(tracks[index].duration);
      audio.src = tracks[index].src;
      audio.load();
    }

    if (index === activeTrackIndex && !audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const seekTrack = (event) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(event.target.value);
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className="site-shell">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <header className="site-header">
        <button className="brand-button" onClick={() => scrollToId("top")} aria-label="Back to top">
          <span className="brand-crop brand-crop--header-logo">
            <img src="/assets/arohana-logo-transparent.png" alt="" />
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => handleNav(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="header-booking" onClick={openBooking}>
          Book Arohana <ArrowRight weight="light" />
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X /> : <List />}
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navItems.map(([label, id], index) => (
          <button key={id} onClick={() => handleNav(id)}>
            <span>0{index + 1}</span>
            {label}
          </button>
        ))}
        <button className="mobile-booking" onClick={openBooking}>
          Book Arohana <ArrowRight />
        </button>
      </div>

      <main aria-hidden={menuOpen || bookingOpen ? true : undefined}>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-rail" aria-hidden="true">
            <span>01</span>
            <i />
            <span>05</span>
          </div>

          <div className="hero-content">
            <img
              className="hero-title-image"
              src="/assets/arohana-title-transparent.png"
              alt="Arohana — Jazz Carnatic Fusion"
            />
            <h1 id="hero-heading">
              Ancient form.
              <br />
              Fearless improvisation.
            </h1>
            <p>
              Intricate ragas, open harmony and spontaneous rhythm—rooted in tradition,
              alive in the moment.
            </p>
            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollToId("music")}>
                <Waveform weight="light" />
                Listen
              </button>
              <button className="text-action" onClick={openBooking}>
                Book Arohana <ArrowRight weight="light" />
              </button>
            </div>
          </div>

          <button className="scroll-cue" onClick={() => scrollToId("story")}>
            Scroll to discover <ArrowDown weight="light" />
          </button>

          <div className="audio-deck" id="music" aria-label="Listen to Arohana originals">
            <div className="audio-intro">
              <Waveform weight="thin" aria-hidden="true" />
              <div>
                <span>Featured listening</span>
                <strong>Two Arohana originals</strong>
              </div>
            </div>

            <div className="audio-track-list">
              {tracks.map((track, index) => {
                const active = activeTrackIndex === index;
                const playing = active && isPlaying;
                return (
                  <button
                    className={`audio-track ${active ? "is-active" : ""}`}
                    key={track.src}
                    onClick={() => toggleTrack(index)}
                    aria-pressed={playing}
                    aria-label={`${playing ? "Pause" : "Play"} ${track.title}`}
                  >
                    <span className="track-play-icon" aria-hidden="true">
                      {playing ? <Pause weight="fill" /> : <Play weight="fill" />}
                    </span>
                    <span className="track-title">{track.title}</span>
                    <small>{formatTime(track.duration)}</small>
                  </button>
                );
              })}
            </div>

            <div className="audio-transport">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || tracks[activeTrackIndex].duration}
                step="0.1"
                value={Math.min(currentTime, duration || tracks[activeTrackIndex].duration)}
                onChange={seekTrack}
                aria-label={`Seek ${tracks[activeTrackIndex].title}`}
              />
              <span>{formatTime(duration || tracks[activeTrackIndex].duration)}</span>
              <SpeakerHigh weight="light" aria-hidden="true" />
            </div>

            <audio
              ref={audioRef}
              preload="metadata"
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false);
                setCurrentTime(0);
              }}
            />
          </div>
        </section>

        <section className="story-section" id="story" aria-labelledby="story-heading">
          <div className="section-index">02 / 05</div>
          <div className="story-grid">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 id="story-heading">
                Where <em>raga</em> meets the open horizon of jazz.
              </h2>
            </div>
            <div className="story-copy">
              <p>
                Arohana is where the ancient soul of Carnatic music meets the limitless
                spirit of jazz. We blend intricate melodic language, expressive
                improvisation and dynamic rhythmic interplay into one living conversation.
              </p>
              <p>
                Emerging from Aotearoa New Zealand’s vibrant cultural tapestry, our music
                crosses borders without losing its roots—curious, generous and constantly
                evolving.
              </p>
              <button className="text-action" onClick={() => scrollToId("live")}>
                Follow the journey <ArrowRight weight="light" />
              </button>
            </div>
          </div>
        </section>

        <section className="movement-section" aria-labelledby="movement-heading">
          <div className="section-heading-row">
            <span className="eyebrow">Three ways we move</span>
            <h2 id="movement-heading">One sound, always becoming.</h2>
          </div>
          <div className="movement-grid">
            {movements.map((movement) => (
              <article key={movement.title}>
                <MovementVisual type={movement.visual} />
                <span>{movement.number}</span>
                <h3>{movement.title}</h3>
                <p>{movement.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="history-section" id="live" aria-labelledby="history-heading">
          <div className="history-content">
            <span className="eyebrow">First chapter · 2023</span>
            <h2 id="history-heading">Harmonizing Cultures</h2>
            <p>
              Arohana made its debut in a Creative New Zealand-funded concert series,
              introducing audiences to the rich textures and spontaneous energy of
              Jazz–Carnatic fusion.
            </p>
            <button className="text-action" onClick={() => scrollToId("artists")}>
              Meet the ensemble <ArrowRight weight="light" />
            </button>
          </div>
        </section>

        <section className="artists-section" id="artists" aria-labelledby="artists-heading">
          <span className="section-index">04 / 05</span>
          <div>
            <span className="eyebrow">The ensemble</span>
            <h2 id="artists-heading">Individual voices. A shared musical instinct.</h2>
          </div>
          <p>
            Each Arohana performance is shaped by musicians fluent in both disciplined
            tradition and the art of letting go. Artist portraits and individual profiles
            will join this chapter in the next content release.
          </p>
        </section>

        <section className="instrument-section" aria-labelledby="instrument-heading">
          <img
            src="/assets/jazz-ensemble-banner-v2.jpg"
            alt="Grand piano, saxophone, jazz drum kit, bass guitar, violin and Miruthangam arranged on a dark stage"
          />
          <div className="instrument-copy">
            <span className="eyebrow">The full musical palette</span>
            <h2 id="instrument-heading">Many traditions. One conversation.</h2>
            <p>
              Grand piano, saxophone, jazz drums and bass guitar meet violin and
              Miruthangam—each voice distinct, every phrase shaped together.
            </p>
          </div>
          <ul className="instrument-list" aria-label="Featured instruments">
            <li>Grand piano</li>
            <li>Saxophone</li>
            <li>Jazz drum kit</li>
            <li>Bass guitar</li>
            <li>Violin</li>
            <li>Miruthangam</li>
          </ul>
        </section>

        <section className="booking-section" id="contact" aria-labelledby="booking-heading">
          <div>
            <span className="eyebrow">Festivals · venues · presenters</span>
            <h2 id="booking-heading">
              Bring Arohana
              <br />
              to your stage.
            </h2>
            <p>
              Let’s create an unforgettable musical journey for your audience.
            </p>
            <a
              className="booking-email"
              href="mailto:info@arohana.nz?subject=Arohana%20booking%20enquiry"
            >
              <span>Booking enquiries</span>
              info@arohana.nz
            </a>
            <button className="primary-action" onClick={openBooking}>
              Start a conversation <ArrowRight weight="light" />
            </button>
          </div>
          <div className="booking-mark">
            <img src="/assets/arohana-logo.png" alt="Arohana instrument monogram" />
          </div>
        </section>
      </main>

      <footer aria-hidden={menuOpen || bookingOpen ? true : undefined}>
        <span>© Arohana 2026</span>
        <span>Jazz–Carnatic fusion from Aotearoa New Zealand</span>
        <button onClick={openBooking}>Booking enquiries</button>
      </footer>

      {bookingOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setBookingOpen(false)}>
          <section
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking enquiry"
            >
              <X />
            </button>
            <span className="eyebrow">Booking enquiry</span>
            <h2 id="booking-modal-title">Let’s make something resonate.</h2>
            <p>
              Tell us a little about your festival, venue or collaboration.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                Your name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Event or idea
                <textarea name="message" rows="4" required />
              </label>
              <p className="booking-delivery-note">
                Your email app will open with this enquiry addressed to info@arohana.nz.
                Review it, then press Send to deliver it to Arohana.
              </p>
              <button className="primary-action" type="submit">
                Open email to send <ArrowRight weight="light" />
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
