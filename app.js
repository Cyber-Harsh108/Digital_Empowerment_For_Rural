  const { useState, useEffect } = React;

      /* ===== NAVBAR + UPDATES ===== */

      function Navbar() {
        return (
          <nav className="navbar fade-in">
            <div className="navbar-left">
              <div className="navbar-logo-icon">DE</div>
              <div className="navbar-logo-text">
                <span className="navbar-logo-main">Digital Empowerment</span>
                <span className="navbar-logo-sub">
                  RuralConnect • Internet Access
                </span>
              </div>
            </div>
            <div className="nav-links">
              <a href="#govt-services">Government Services</a>
              <a href="#healthcare">Healthcare</a>
              <a href="#education">Education</a>
              <a href="#faq">FAQs</a>
              <button className="nav-login-btn">Login</button>
            </div>
          </nav>
        );
      }

      function UpdatesBar() {
        return (
          <div className="updates-bar">
            <div className="updates-label">
              <span>🔔</span>
              <span>Updates</span>
            </div>
            <div className="updates-marquee">
              <div className="updates-text">
                • New digital literacy centres opening in 50 villages next month.&nbsp;&nbsp;• Government announces
                subsidies for smartphone purchases for rural households.&nbsp;&nbsp;• Over 500 villages connected to
                high-speed internet this month.
              </div>
            </div>
          </div>
        );
      }

      /* ===== HERO (content from website1) ===== */

      function Hero() {
        const handleCta = (id) => {
          alert("CTA clicked: " + id);
        };

        return (
          <section className="hero">
            <div className="hero-left">
              <span className="hero-eyebrow">Bridging the Digital Divide</span>
              <h1 className="hero-title">
                Empowering Rural India
                <br />
                Through <span>Digital Access</span>
              </h1>
              <p className="hero-tagline">
                Connecting villages to essential services, education, healthcare and
                market information through simplified technology.
              </p>

              <div className="hero-metric-row">
                <div className="hero-metric">
                  <strong>Government services</strong>
                  Aadhaar, PM-Kisan, pension and schemes available without travelling to
                  town again and again.
                </div>
                <div className="hero-metric">
                  <strong>Daily life</strong>
                  Online classes, telemedicine and digital payments become part of normal
                  village routines.
                </div>
              </div>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => handleCta("get-started")}
                >
                  <span className="btn-icon">⚡</span>
                  Get Started →
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => handleCta("learn-more")}
                >
                  <span className="btn-icon">📘</span>
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-right-inner">
                <div className="hero-chip">
                  <span>🌾</span> Community internet snapshot
                </div>
                <p style={{ fontSize: "0.88rem", color: "#064e3b" }}>
                  A strong connection plus basic digital skills can turn a village phone
                  into a classroom, a bank counter and a clinic — all in one.
                </p>
                <div className="hero-visual-box">
                  <div className="hero-visual-title">
                    What changes when a village goes online?
                  </div>
                  <ul className="hero-visual-list">
                    <li>Students join online classes and exam prep groups.</li>
                    <li>Farmers check crop prices and weather before selling.</li>
                    <li>Families pay bills and receive benefits digitally.</li>
                    <li>
                      Health workers consult doctors through telemedicine when needed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      }

      /* ===== CATEGORIES (Education / Govt / Healthcare) ===== */

      function CategoriesSection() {
        const handleCardClick = (anchor) => {
          const el = document.getElementById(anchor);
          if (!el) return;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top: y, behavior: "smooth" });
        };

        return (
          <section className="categories-section">
            <div>
              <h3 className="categories-header-title">Explore by category</h3>
              <p className="categories-header-text">
                Quick links to the most requested services and resources for rural
                users.
              </p>
            </div>

            <div className="category-grid">
              <div
                id="education-card"
                className="category-card"
                onClick={() => handleCardClick("education")}
              >
                <div className="category-icon">📚</div>
                <div>
                  <h4 className="category-title">Education</h4>
                  <p className="category-text">
                    Digital classrooms, scholarship portals and open courses for rural
                    students.
                  </p>
                </div>
              </div>

              <div
                id="govt-services-card"
                className="category-card"
                onClick={() => handleCardClick("govt-services")}
              >
                <div className="category-icon">🏛</div>
                <div>
                  <h4 className="category-title">Government Services</h4>
                  <p className="category-text">
                    Aadhaar, PM-Kisan, pension, ration and other key portals in one
                    organised place.
                  </p>
                </div>
              </div>

              <div
                id="healthcare-card"
                className="category-card"
                onClick={() => handleCardClick("healthcare")}
              >
                <div className="category-icon">🩺</div>
                <div>
                  <h4 className="category-title">Healthcare</h4>
                  <p className="category-text">
                    Telemedicine, Ayushman Bharat links and local health camp
                    schedules.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      }

      /* ===== SIMPLE DETAIL SECTIONS FOR EACH CATEGORY ===== */

      function DetailSections() {
        return (
          <div>
            <section id="education" className="section fade-in">
              <div className="section-header">
                <p className="section-kicker">Education</p>
                <h2 className="section-title">Digital learning for every student</h2>
                <p className="section-subtitle">
                  When internet is available and affordable, even remote schools can
                  give students access to recorded lectures, doubt-clearing sessions
                  and exam preparation content.
                </p>
              </div>
              <div className="card-grid">
                <div className="card">
                  <h3>Online classrooms</h3>
                  <p>
                    Simple low-data classrooms using recorded lessons and live audio
                    sessions scheduled in the evenings when students are free.
                  </p>
                </div>
                <div className="card">
                  <h3>Scholarships &amp; exams</h3>
                  <p>
                    Help desks guide students through online forms for scholarships,
                    competitive exams and college admissions.
                  </p>
                </div>
                <div className="card">
                  <h3>Community study hubs</h3>
                  <p>
                    One Wi-Fi router at a school or community hall can support dozens
                    of students downloading content for offline study.
                  </p>
                </div>
              </div>
            </section>

            <section id="govt-services" className="section fade-in delay-1">
              <div className="section-header">
                <p className="section-kicker">Government services</p>
                <h2 className="section-title">
                  Access to schemes without long travel
                </h2>
                <p className="section-subtitle">
                  Internet plus guidance means villagers can claim the benefits already
                  meant for them — without losing wages in travelling to offices.
                </p>
              </div>
              <div className="card-grid">
                <div className="card">
                  <h3>Aadhaar &amp; ID updates</h3>
                  <p>
                    Basic corrections, downloads and status checks handled at village
                    kiosks with secure logins.
                  </p>
                </div>
                <div className="card">
                  <h3>Farmer schemes</h3>
                  <p>
                    PM-Kisan registration, land record viewing and insurance claims
                    filed digitally with local assistance.
                  </p>
                </div>
                <div className="card">
                  <h3>Social security</h3>
                  <p>
                    Pension, ration and other entitlement checks done on phone instead
                    of multiple counter visits.
                  </p>
                </div>
              </div>
            </section>

            <section id="healthcare" className="section fade-in delay-2">
              <div className="section-header">
                <p className="section-kicker">Healthcare</p>
                <h2 className="section-title">Telemedicine and health support</h2>
                <p className="section-subtitle">
                  Stable internet enables health workers and families to contact
                  doctors quickly and follow reliable advice instead of rumours.
                </p>
              </div>
              <div className="card-grid">
                <div className="card">
                  <h3>Tele-consultation</h3>
                  <p>
                    Village health workers connect patients to doctors over video or
                    audio calls for initial guidance.
                  </p>
                </div>
                <div className="card">
                  <h3>Ayushman Bharat &amp; schemes</h3>
                  <p>
                    People can check eligibility, empanelled hospitals and claim
                    status online without agents.
                  </p>
                </div>
                <div className="card">
                  <h3>Health awareness</h3>
                  <p>
                    Verified videos and infographics shared through village WhatsApp
                    groups in local language.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      }

      /* ===== WHY DIGITAL EMPOWERMENT MATTERS (centered block) ===== */

      function EmpowermentSection() {
        return (
          <section className="section empower-section">
            <h3 className="empower-title">Why Digital Empowerment Matters</h3>
            <p className="empower-text">
              Digital access increases economic opportunity, improves healthcare and
              education, and strengthens community resilience. This platform combines
              stronger internet connections with simple guidance so that every
              villager — not just a few experts — can benefit from online services.
            </p>
          </section>
        );
      }

      /* ===== FAQ & CONTACT (reused from earlier website 2, text adjusted slightly) ===== */

      function FAQItem({ q, a }) {
        const [open, setOpen] = useState(false);
        return (
          <div className="faq-item" onClick={() => setOpen(!open)}>
            <div className="faq-question">
              <h4>{q}</h4>
              <div className="faq-toggle">{open ? "−" : "+"}</div>
            </div>
            {open && <div className="faq-answer">{a}</div>}
          </div>
        );
      }

      function FAQSection() {
        const faqs = [
          {
            q: "Is fast internet the only solution?",
            a: "No. Even with slow networks we can improve access by using offline content, community Wi-Fi hubs and planning downloads during low-traffic hours."
          },
          {
            q: "What can students practically do?",
            a: "Students can survey their village, help elders with smartphones, assist in filling online forms and present these findings as a project to ask for better connectivity."
          },
          {
            q: "Do we always need expensive hardware?",
            a: "Not always. Correct router placement, better antennas, shared connections and low-data apps can create big improvements at low cost."
          },
          {
            q: "How can I show this as a school project?",
            a: "Use this website as your front-end, attach survey data, and propose one pilot idea such as a study hub, farmer kiosk or digital help desk in your village."
          }
        ];

        return (
          <section id="faq" className="section fade-in">
            <div className="section-header">
              <p className="section-kicker">Quick answers</p>
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="section-subtitle">
                These explanations can be used directly in your project file or viva
                when you talk about rural internet and digital empowerment.
              </p>
            </div>

            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </section>
        );
      }

      function ContactSection() {
        const [name, setName] = useState("");
        const [role, setRole] = useState("");
        const [idea, setIdea] = useState("");
        const [submitted, setSubmitted] = useState(false);

        function handleSubmit(e) {
          e.preventDefault();
          setSubmitted(true);
          setName("");
          setRole("");
          setIdea("");
          setTimeout(() => setSubmitted(false), 2600);
        }

        return (
          <section id="contact" className="section fade-in">
            <div className="section-header">
              <p className="section-kicker">Your turn</p>
              <h2 className="section-title">Share one action you can take</h2>
              <p className="section-subtitle">
                Treat this form as your personal pledge. In a real system, these ideas
                could be saved to a server or community dashboard.
              </p>
            </div>

            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>You are a...</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="farmer">Farmer</option>
                    <option value="shopkeeper">Shopkeeper</option>
                    <option value="ngo">NGO / volunteer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    One idea to improve digital access in your area
                  </label>
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Example: Start an evening study hub with shared Wi-Fi at our school..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  <span className="btn-icon">✅</span>
                  Submit pledge (stored locally)
                </button>
              </form>
              {submitted && (
                <div className="success-msg">
                  Your idea has been recorded in this session. Great first step toward
                  bridging the rural digital gap! 🌾
                </div>
              )}
            </div>
          </section>
        );
      }

      /* ===== FOOTER & SCROLL TOP ===== */

      function Footer() {
        return (
          <footer className="footer">
            <div className="footer-inner">
              <span>
                © {new Date().getFullYear()}{" "}
                <span className="footer-highlight">Digital Empowerment · RuralConnect</span
                >. Built as an educational project on low internet access and rural
                digital inclusion.
              </span>
              <span>
                Frontend stack: HTML · CSS · JavaScript · React (CDN) — optimised for
                low-data, mobile-friendly viewing.
              </span>
            </div>
          </footer>
        );
      }

      function ScrollTopButton() {
        const [visible, setVisible] = useState(false);

        useEffect(() => {
          function onScroll() {
            setVisible(window.scrollY > 260);
          }
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
        }, []);

        if (!visible) return null;

        return (
          <div className="scroll-top">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              ↑ Top
            </button>
          </div>
        );
      }

      /* ===== HELP BUTTON + MODAL (emergency contacts) ===== */

      function HelpModal({ open, onClose }) {
        const [copied, setCopied] = useState(false);

        if (!open) return null;

        const text =
          "National Emergency: 112\nPolice: 100\nAmbulance: 102\nFire: 101\nWomen Helpline: 181\nChild Helpline: 1098";

        const handleCopy = async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch (e) {
            alert("Copy not supported. Please copy manually:\n" + text);
          }
        };

        return (
          <div className="help-backdrop" onClick={onClose}>
            <div className="help-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="help-dialog-header">
                <h3 className="help-dialog-title">Emergency Contacts</h3>
                <button className="help-close-btn" onClick={onClose}>
                  ✕
                </button>
              </div>
              <p style={{ margin: "0 0 0.7rem", fontSize: "0.85rem", color: "#64748b" }}>
                Tap a number on mobile to call directly, or copy the list for later use.
              </p>

              <div className="help-dialog-body">
                <ul className="help-list">
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">National Emergency</span>
                      <span className="help-item-sub">
                        All-in-one emergency number
                      </span>
                    </div>
                    <a className="help-item-link" href="tel:112">
                      112
                    </a>
                  </li>
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">Police (State)</span>
                      <span className="help-item-sub">
                        Local police control room
                      </span>
                    </div>
                    <a className="help-item-link" href="tel:100">
                      100
                    </a>
                  </li>
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">Ambulance</span>
                      <span className="help-item-sub">Medical emergency</span>
                    </div>
                    <a className="help-item-link" href="tel:102">
                      102
                    </a>
                  </li>
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">Fire</span>
                      <span className="help-item-sub">Fire brigade</span>
                    </div>
                    <a className="help-item-link" href="tel:101">
                      101
                    </a>
                  </li>
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">Women Helpline</span>
                      <span className="help-item-sub">Support and assistance</span>
                    </div>
                    <a className="help-item-link" href="tel:181">
                      181
                    </a>
                  </li>
                  <li className="help-item">
                    <div>
                      <span className="help-item-title">Child Helpline</span>
                      <span className="help-item-sub">Missing/abuse reports</span>
                    </div>
                    <a className="help-item-link" href="tel:1098">
                      1098
                    </a>
                  </li>
                </ul>
              </div>

              <div className="help-actions">
                <button className="help-copy-btn" onClick={handleCopy}>
                  {copied ? "Copied ✓" : "Copy all"}
                </button>
                <button className="help-close-bottom" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      }

      function HelpFab({ onClick }) {
        return (
          <div className="help-fab" onClick={onClick}>
            <span>📞</span>
            <span>Help</span>
          </div>
        );
      }

      /* ===== ROOT APP ===== */

      function App() {
        const [helpOpen, setHelpOpen] = useState(false);

        return (
          <div>
            <Navbar />
            <UpdatesBar />
            <Hero />
            <CategoriesSection />
            <DetailSections />
            <EmpowermentSection />
            <FAQSection />
            <ContactSection />
            <Footer />
            <ScrollTopButton />
            <HelpFab onClick={() => setHelpOpen(true)} />
            <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
          </div>
        );
      }

      const rootEl = document.getElementById("root");
      const root = ReactDOM.createRoot(rootEl);
      root.render(<App />);