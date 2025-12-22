<template>
  <div class="featured-games">
    <!-- Header -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="logo">
          <span class="logo-text">NekSoluton</span>
        </div>
        <nav class="nav">
          <a href="#home" @click.prevent="scrollToSection('home')">Home</a>    
          <a href="#games" @click.prevent="scrollToSection('games')">Games</a>
          <a href="#about" @click.prevent="scrollToSection('about')">About</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
        </nav>
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#home" @click.prevent="scrollToSection('home'); closeMobileMenu()">Home</a>
        <a href="#games" @click.prevent="scrollToSection('games'); closeMobileMenu()">Games</a>
        <a href="#about" @click.prevent="scrollToSection('about'); closeMobileMenu()">About</a>
        <a href="#contact" @click.prevent="scrollToSection('contact'); closeMobileMenu()">Contact</a>
      </nav>
    </div>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h2 class="hero-title">Featured Games*</h2>
      </div>
    </section>

    <!-- Games Section -->
    <section id="games" class="games">
      <div class="container">
        <!-- Game 1: Eternal King -->
        <div class="game-card" data-aos="fade-up" data-aos-delay="100">
          <div class="game-content">
            <div class="game-icon">
              <img
                src="https://framerusercontent.com/images/LSvmqqmVIijIQLYiDedXIxrgU.gif"
                alt="Eternal King"
              />
            </div>
            <div class="game-info">
              <h3 class="game-title">Eternal King</h3>
              <ul class="game-features">
                <li>
                  EK is an engaging and community-driven mini-app, that fosters
                  player confidence in the game's longevity and fairness.
                </li>
                <li>
                  Our focus is on incredible <strong>3D gameplay</strong>,
                  strategic conquering of new lands, and empowering you to
                  choose your own journey.
                </li>
                <li>
                  Get ready to experience GameFi as it was always meant to be!
                </li>
              </ul>
              <a
                href="https://t.me/Skybull_ek_bot"
                class="download-btn telegram-btn"
                target="_blank"
              >
                <img
                  src="https://framerusercontent.com/images/BqmpFCjYZ8WEfAx6CpZoHWLdpQ.png"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
          <div class="game-media" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://framerusercontent.com/images/6FajNJp1RxJhyLwsjXiitKexp1w.png"
              alt="Eternal King Gameplay"
              class="game-screenshot"
            />
          </div>
        </div>

        <!-- Game 2: Animal GO -->
        <div class="game-card reverse" data-aos="fade-up" data-aos-delay="100">
          <div class="game-content">
            <div class="game-icon">
              <img
                src="https://framerusercontent.com/images/xrWtJeUswyN57bMUjHtZ3GJ7Gig.gif"
                alt="Animal GO"
              />
            </div>
            <div class="game-info">
              <h3 class="game-title">Animal GO</h3>
              <ul class="game-features">
                <li>
                  Animal Go is a <strong>free-to-play idle RPG</strong> that
                  integrates blockchain technology to empower players with true
                  digital ownership and play-to-earn opportunities.
                </li>
                <li>
                  <strong>Together with TRN Labs</strong>, we're bringing up a
                  stunning, high-quality Web3 game that combines beautiful 3D
                  graphics, seamless gameplay, and blockchain-powered rewards!
                </li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.skybull.animal.go"
                class="download-btn playstore-btn"
                target="_blank"
              >
                <img
                  src="https://framerusercontent.com/images/DeKS4en3cqW9JvVI8x6IFfOLEU.png"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
          <div class="game-media" data-aos="fade-right" data-aos-delay="200">
            <img
              src="https://framerusercontent.com/images/v6UD8V35PAwYQNB66Pvx8IKGAg.png"
              alt="Animal GO Gameplay"
              class="game-screenshot"
            />
          </div>
        </div>

        <!-- Game 3: Immortal Wars -->
        <div class="game-card" data-aos="fade-up" data-aos-delay="100">
          <div class="game-content">
            <div class="game-icon">
              <img
                src="https://framerusercontent.com/images/JWC9MP5HE9Eh65qilHMTe80y0OA.gif"
                alt="Immortal Wars"
              />
            </div>
            <div class="game-info">
              <h3 class="game-title">Immortal Wars: Battler RPG</h3>
              <ul class="game-features">
                <li>
                  "Immortal Wars: Battler RPG" is an Idle RPG fantasy game with
                  epic battles and mythical tales. You can immerse yourself in a
                  post-apocalyptic multiverse, where you'll face demons, robots,
                  and more in a world filled with captivating lore
                </li>
                <li>
                  <strong>Idle RPG Fun:</strong> Blend idle mechanics with rich
                  RPG elements that appeal to casual gamers and hardcore
                  tacticians alike.
                </li>
                <li>
                  <strong>Epic Heroes:</strong> Assemble a team of mighty
                  champions, each with unique powers and lore.
                </li>
              </ul>
              <a href="#" class="download-btn playstore-btn" target="_blank">
                <img
                  src="https://framerusercontent.com/images/DeKS4en3cqW9JvVI8x6IFfOLEU.png"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
          <div class="game-media" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://framerusercontent.com/images/OCM9s2gKl2HBx4WsS5uSjeYGM.jpg"
              alt="Immortal Wars Gameplay"
              class="game-screenshot"
            />
          </div>
        </div>

        <!-- Game 4: Idle Cat Empire -->
        <div class="game-card reverse" data-aos="fade-up" data-aos-delay="100">
          <div class="game-content">
            <div class="game-icon">
              <img
                src="https://framerusercontent.com/images/4x7So8Sv8OHIkuyYtRoa7gVTN0c.gif"
                alt="Idle Cat Empire"
              />
            </div>
            <div class="game-info">
              <h3 class="game-title">Idle Cat Empire: Tycoon Games</h3>
              <ul class="game-features">
                <li>
                  Embark on "Idle Cat Empire: Tycoon Games": A Whisker-twitching
                  Toy Crafting Adventure!
                </li>
                <li>
                  Step into a purr-fect world where the love for catnip and toy
                  meets the playful antics of cats. It's a lively community
                  where the joy of crafting catnip goodies and feline
                  companionship come together in a delightful tycoon and
                  simulator game experience.
                </li>
                <li>
                  <strong
                    >Leap in now and dive into the playful world of adorable
                    cutest furry friends!</strong
                  >
                </li>
              </ul>
              <div class="download-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.Skybull.CatTycoon"
                  class="download-btn playstore-btn"
                  target="_blank"
                >
                  <img
                    src="https://framerusercontent.com/images/DeKS4en3cqW9JvVI8x6IFfOLEU.png"
                    alt="Google Play"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/idle-cat-empire-tycoon-games/id6736680677"
                  class="download-btn appstore-btn"
                  target="_blank"
                >
                  <img
                    src="https://framerusercontent.com/images/DbFqcpaFxwxDXsinEV0Ld9BQJCk.png"
                    alt="App Store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="game-media" data-aos="fade-right" data-aos-delay="200">
            <img
              src="https://framerusercontent.com/images/0wSURRp9Q9FJr3SbCmHUEuxtLuk.png"
              alt="Idle Cat Empire Gameplay"
              class="game-screenshot"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content" data-aos="fade-up">
          <div class="section-badge">WHO WE ARE</div>
          <h2 class="section-title">Welcome to NekSoluton</h2>
          <p class="section-description">
            We are passionate game developers dedicated to creating immersive and
            engaging gaming experiences that bring joy to players worldwide. From
            blockchain-powered adventures to idle RPG masterpieces, we craft games
            that blend cutting-edge technology with captivating gameplay.
          </p>
          <div class="stats-grid">
            <div class="stat-item" data-aos="fade-up" data-aos-delay="100">
              <div class="stat-number">4+</div>
              <div class="stat-label">Games Published</div>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-number">1M+</div>
              <div class="stat-label">Active Players</div>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div class="stat-number">50K+</div>
              <div class="stat-label">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img
              src="https://framerusercontent.com/images/4J0MkVOkaM5LJX6AIbuIMHdBbvs.png"
              alt="Skybull"
            />
            
          </div>
          <div class="footer-links">
            <div class="footer-col">
              <a href="https://t.me/Skybullofficial" target="_blank"
                >Start a conversation</a
              >
              <a href="mailto:support@skybull.studio">Need a support</a>
            </div>
            <div class="footer-col">
              <a href="https://www.facebook.com/skybullvn" target="_blank"
                >Facebook</a
              >
              <a
                href="https://www.linkedin.com/company/skybull-studio"
                target="_blank"
                >Linkedin</a
              >
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>©Copyright Skybull2025. All rights reserved.</p>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>

    <!-- Scroll to top button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="scroll-top"
      data-aos="fade-up"
    >
      ↑
    </button>
  </div>
</template>

<script>
export default {
  name: "FeaturedGames",
  data() {
    return {
      isScrolled: false,
      showScrollTop: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    if (!process.client) return;

    // Enable smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    const AOS = require("aos");
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
      delay: 50,
    });

    // GSAP ScrollTrigger for smooth parallax effects
    const gsap = this.$gsap;
    const ScrollTrigger = this.$ScrollTrigger;

    if (gsap && ScrollTrigger) {
      // Wait for next tick to ensure DOM is ready
      this.$nextTick(() => {
        // Smooth parallax for hero background
        gsap.to(".hero-bg", {
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
          y: "50%",
          scale: 1.1,
          ease: "none",
        });

        // Parallax for hero title
        gsap.to(".hero-title", {
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
          y: "-60%",
          scale: 0.9,
          ease: "none",
        });

        

        // Smooth reveal for games section
        gsap.from(".games", {
          scrollTrigger: {
            trigger: ".games",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
          opacity: 0.8,
          y: 50,
        });
      });
    }

    // HEADER OBSERVER
    const headerTrigger = document.createElement("div");
    headerTrigger.style.position = "absolute";
    headerTrigger.style.top = "80px";
    headerTrigger.style.height = "1px";
    document.body.prepend(headerTrigger);

    this.headerObserver = new IntersectionObserver(
      ([entry]) => {
        this.isScrolled = !entry.isIntersecting;
      },
      { threshold: 0 }
    );

    this.headerObserver.observe(headerTrigger);

    // SCROLL TOP OBSERVER
    const scrollTopTrigger = document.createElement("div");
    scrollTopTrigger.style.position = "absolute";
    scrollTopTrigger.style.top = "600px";
    scrollTopTrigger.style.height = "1px";
    document.body.appendChild(scrollTopTrigger);

    this.scrollTopObserver = new IntersectionObserver(
      ([entry]) => {
        this.showScrollTop = !entry.isIntersecting;
      },
      { threshold: 0 }
    );

    this.scrollTopObserver.observe(scrollTopTrigger);
  },

  beforeDestroy() {
    this.headerObserver?.disconnect();
    this.scrollTopObserver?.disconnect();
    if (this.$ScrollTrigger) {
      this.$ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
    document.body.style.overflow = '';
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (!element) return;
      
      const offsetTop = sectionId === 'home' ? 0 : element.offsetTop - 80;
      
      if (this.$gsap) {
        this.$gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: offsetTop, autoKill: true },
          ease: "power3.inOut",
        });
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    },
    scrollToTop() {
      if (this.$gsap) {
        this.$gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: 0, autoKill: true },
          ease: "power3.inOut",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'BoldenVan', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.featured-games {
  background: #0a0a0f;
  color: #fff;
  overflow-x: hidden;
  padding-top: 100vh;
  font-family: 'BoldenVan', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  will-change: background-color;
}

.header.scrolled {
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid rgba(102, 126, 234, 0.4);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.logo-text:hover {
  color: #667eea;
  text-shadow: 0 0 20px rgba(102, 126, 234, 0.8), 0 2px 8px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.nav a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.nav a:hover {
  color: #667eea;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1002;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 400px;
  height: 100vh;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1001;
  transition: right 0.3s ease;
  padding-top: 100px;
}

.mobile-menu.active {
  right: 0;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.mobile-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav a:hover {
  color: #667eea;
  padding-left: 1rem;
}

/* Hero Section */
.hero {
  position: fixed;
  inset: 0;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: fixed;
  inset: 0;
  z-index: 1;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.hero-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("https://framerusercontent.com/images/82JjW8hoFmNvEPVkDw9PBHxJ4c.png")
    center / cover no-repeat;
}

.hero-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 15, 0.1) 0%,
    rgba(10, 10, 15, 0.4) 100%
  );
  z-index: 1;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  pointer-events: none;
  width: 100%;
  padding: 0 2rem;
}

.hero-year {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4),
               0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  will-change: transform;
  margin: 0;
  opacity: 0.95;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.company-name {
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 1.5rem 0;
  letter-spacing: 4px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3),
               0 4px 16px rgba(0, 0, 0, 0.2),
               0 1px 2px rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  will-change: transform;
}

/* About Section */
.about-section {
  position: relative;
  z-index: 10;
  background: #0a0a0f;
  padding-top: 2rem;
  padding-bottom: 8rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.about-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  color: #667eea;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fff 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Games Section */
.games {
  position: relative;
  transform: translateZ(0);
  backface-visibility: hidden;
  z-index: 10;
  background: linear-gradient(180deg, rgba(10, 10, 15, 0.95), #0a0a0f);
  padding: 6rem 0;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.game-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 8rem;
  align-items: center;
}

.game-card.reverse {
  grid-template-columns: 1fr 1fr;
}

.game-card.reverse .game-content {
  order: 2;
}

.game-card.reverse .game-media {
  order: 1;
}

.game-content {
  display: flex;
  gap: 2rem;
}

.game-icon {
  flex-shrink: 0;
}

.game-icon img {
  width: 120px;
  height: 120px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;
}

.game-icon img:hover {
  transform: scale(1.05) rotate(3deg);
}

.game-info {
  flex: 1;
}

.game-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-features {
  list-style: none;
  margin-bottom: 2rem;
}

.game-features li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.game-features li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-block;
  transition: transform 0.3s ease;
}

.download-btn img {
  height: 50px;
  filter: brightness(0.9);
}

.download-btn:hover {
  transform: translateY(-5px);
}

.download-btn:hover img {
  filter: brightness(1.1);
}

.game-media {
  position: relative;
}

.game-screenshot {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
}

.game-screenshot:hover {
  transform: scale(1.02) translateZ(0);
}

/* Footer */
.footer {
  position: relative;
  z-index: 10;
  background: rgba(10, 10, 15, 0.95);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-logo {
  text-align: center;
}

.footer-logo img {
  height: 60px;
  margin-bottom: 1rem;
}

.footer-logo h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-col a:hover {
  color: #667eea;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #667eea;
}

/* Scroll to top button */
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  font-size: 1.5rem;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.scroll-top:hover {
  transform: translateY(-5px) translateZ(0);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
}

.scroll-top:hover {
  transform: translateY(-5px);
}

/* Responsive */
@media (max-width: 1024px) {
  .game-card,
  .game-card.reverse {
    grid-template-columns: 1fr;
  }

  .game-card.reverse .game-content,
  .game-card.reverse .game-media {
    order: initial;
  }

  .hero-title {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .hero-title {
    font-size: 2rem;
  }

  .game-content {
    flex-direction: column;
    text-align: center;
  }

  .game-title {
    font-size: 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>