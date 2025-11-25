
    const { useState, useEffect } = React;

    const SOLUTION_DETAILS = {
      infra: {
        title: "1. Improve Community Infrastructure",
        points: [
          "Set up a shared Wi-Fi hotspot at the panchayat office, school, or community hall.",
          "Use long-range Wi-Fi antennas to cover nearby hamlets and houses.",
          "Install routers with battery backup or small solar panels to handle power cuts.",
          "Support local entrepreneurs to run low-cost internet kiosks."
        ]
      },
      software: {
        title: "2. Use Offline-First Apps and Content",
        points: [
          "Download videos and notes for classes when the signal is strong (night or early morning).",
          "Use apps that work even without full-time internet — note-taking, offline maps, SMS-based services.",
          "Schools can store e-books and lectures on a local server inside the campus, no external internet needed."
        ]
      },
      govt: {
        title: "3. Make Use of Government Programs",
        points: [
          "Leverage schemes for rural broadband, CSCs and public Wi-Fi at schools or gram panchayat buildings.",
          "Villagers can collectively request better connectivity from local officials using written applications.",
          "Organise digital training camps under government or NGO support."
        ]
      },
      community: {
        title: "4. Build Local Digital Champions",
        points: [
          "Train a few students or youth as “Digital Champions” who help others with online forms, UPI and telemedicine.",
          "Create small community groups to share data packs or Wi-Fi costs fairly.",
          "Run a weekly “Digital Help Desk” at school or the community hall."
        ]
      }
    };

    /* ===== Components ===== */

    function Navbar() {
      return (
        <nav className="navbar fade-in">
          <div className="navbar-left">
            <div className="navbar-logo-icon">RC</div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-main">RuralConnect</span>
              <span className="navbar-logo-sub">Internet for every village</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#causes">Causes</a>
            <a href="#solutions">Solutions</a>
            <a href="#cases">Stories</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Action</a>
          </div>
        </nav>
      );
    }

    function Hero() {
      return (
        <section className="hero">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Rural Digital Inclusion Project
            </div>
            <h1 className="hero-title">
              Bridging the <span>Internet Gap</span> in Rural Areas
            </h1>
            <p className="hero-tagline">
              Slow or no internet keeps villages away from opportunities. RuralConnect
              explains the problem in simple language and shows practical, low-cost ways
              for students, teachers and local leaders to improve access.
            </p>

            <div className="hero-metric-row">
              <div className="hero-metric">
                <strong>Education</strong>
                Online classes, scholarship forms and exams need stable internet.
              </div>
              <div className="hero-metric">
                <strong>Livelihood</strong>
                Farmers and shopkeepers rely on digital payments and market prices.
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#solutions">
                <button className="btn-primary">
                  <span className="btn-icon">🌱</span>
                  Explore Solutions
                </button>
              </a>
              <a href="#problem">
                <button className="btn-ghost">
                  <span className="btn-icon">📊</span>
                  Understand the Gap
                </button>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-inner">
              <div className="hero-chip">
                <span>🛰</span> Snapshot of rural connectivity
              </div>
              <p style={{ fontSize: "0.88rem", color: "#064e3b" }}>
                Internet is a basic utility now: it connects villagers to teachers, doctors,
                jobs and government schemes — but networks are weakest where people need
                support the most.
              </p>

              <div className="hero-stats">
                <div className="hero-stat-card">
                  <div className="hero-stat-label">Key challenge</div>
                  <div className="hero-stat-value">Unstable signal</div>
                  <div className="hero-stat-foot">
                    Calls drop, videos buffer and apps time-out during form filling.
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-label">Main impact</div>
                  <div className="hero-stat-value">Lost chances</div>
                  <div className="hero-stat-foot">
                    Students, farmers and small shops miss digital opportunities.
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-label">Our focus</div>
                  <div className="hero-stat-value">Affordable access</div>
                  <div className="hero-stat-foot">
                    Community Wi-Fi, offline content &amp; shared infrastructure.
                  </div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-label">Approach</div>
                  <div className="hero-stat-value">Step-by-step</div>
                  <div className="hero-stat-foot">
                    Start small, learn from feedback, then expand.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function ProblemSection() {
      return (
        <section id="problem" className="section fade-in delay-1">
          <div className="section-header">
            <p className="section-kicker">Why this problem matters</p>
            <h2 className="section-title">
              The digital divide between cities and villages
            </h2>
            <p className="section-subtitle">
              Rural families often pay a lot for mobile data but still cannot join online
              classes or use government services comfortably. The result is a silent
              disadvantage in education, health and income.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>1. Limited Network Infrastructure</h3>
              <p>
                Many villages have very few towers and no fibre cables. Signals become weak
                as distance increases, so people are stuck with 2G or unstable 4G
                connections.
              </p>
            </div>
            <div className="card">
              <h3>2. High Cost for Low Speed</h3>
              <p>
                Even when mobile data is available, the cost per GB is high compared to
                rural income levels — and the speed is too low for video classes, online
                exams or digital payments.
              </p>
            </div>
            <div className="card">
              <h3>3. Power Cuts &amp; Outages</h3>
              <p>
                Routers and towers need reliable electricity. In many villages, power cuts
                are frequent, so even existing networks become unreliable exactly when they
                are needed.
              </p>
            </div>
            <div className="card">
              <h3>4. Lack of Digital Confidence</h3>
              <p>
                Some people feel shy or afraid to use smartphones and online services
                because they never received proper training. Low usage then reduces company
                interest in investing locally.
              </p>
            </div>
          </div>
        </section>
      );
    }

    function CausesSection() {
      return (
        <section id="causes" className="section fade-in delay-2">
          <div className="section-header">
            <p className="section-kicker">Digging deeper</p>
            <h2 className="section-title">Root causes of poor connectivity</h2>
            <p className="section-subtitle">
              Understanding why the problem exists helps us design solutions that are
              realistic for villages with limited money and tough geography.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Geographical Challenges</h3>
              <p>
                Hilly regions, rivers and scattered houses make it costly to lay cables or
                install enough towers. Heavy rain and storms also damage equipment.
              </p>
              <div className="tag-list">
                <span className="tag">Hills</span>
                <span className="tag">Forests</span>
                <span className="tag">Remote hamlets</span>
              </div>
            </div>
            <div className="card">
              <h3>Low Profit for Companies</h3>
              <p>
                Telecom companies earn more from cities than from villages. With fewer users
                and lower average recharge values, rural areas are not given first priority
                for upgrades.
              </p>
              <div className="tag-list">
                <span className="tag">Low ARPU</span>
                <span className="tag">High cost per user</span>
              </div>
            </div>
            <div className="card">
              <h3>Outdated Devices</h3>
              <p>
                Many people still use older phones that do not support good 4G/5G bands or
                Wi-Fi calling. Cheap routers and damaged cables further reduce speed.
              </p>
              <div className="tag-list">
                <span className="tag">Old handsets</span>
                <span className="tag">Weak routers</span>
              </div>
            </div>
            <div className="card">
              <h3>Limited Local Support</h3>
              <p>
                When something breaks, there is often no trained technician in the village.
                Repairs take days, so people lose trust in online services and stay offline.
              </p>
              <div className="tag-list">
                <span className="tag">No local technician</span>
                <span className="tag">Slow repair</span>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function SolutionsSection() {
      const [activeTab, setActiveTab] = useState("infra");
      const current = SOLUTION_DETAILS[activeTab];

      return (
        <section id="solutions" className="section fade-in">
          <div className="section-header">
            <p className="section-kicker">From problem to action</p>
            <h2 className="section-title">
              Practical solutions that villages can start today
            </h2>
            <p className="section-subtitle">
              These ideas focus on what is possible with limited budgets—using community
              effort, simple technology and existing schemes instead of waiting forever for
              big projects.
            </p>
          </div>

          <div className="tabs">
            <button
              className={"tab-btn " + (activeTab === "infra" ? "active" : "")}
              onClick={() => setActiveTab("infra")}
            >
              Community Wi-Fi
            </button>
            <button
              className={"tab-btn " + (activeTab === "software" ? "active" : "")}
              onClick={() => setActiveTab("software")}
            >
              Offline-first apps
            </button>
            <button
              className={"tab-btn " + (activeTab === "govt" ? "active" : "")}
              onClick={() => setActiveTab("govt")}
            >
              Government support
            </button>
            <button
              className={"tab-btn " + (activeTab === "community" ? "active" : "")}
              onClick={() => setActiveTab("community")}
            >
              Community training
            </button>
          </div>

          <div className="card">
            <h3>{current.title}</h3>
            <ul style={{ marginTop: "0.6rem", paddingLeft: "1.1rem" }}>
              {current.points.map((p, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "0.3rem",
                    color: "#4b5563"
                  }}
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="steps">
              <div className="step">
                <div className="step-title">Step 1 – Listen to the village</div>
                <div className="step-body">
                  Talk to students, teachers, farmers and shopkeepers. Note when they need
                  internet most — evenings for study, morning for crop prices, etc.
                </div>
              </div>
              <div className="step">
                <div className="step-title">Step 2 – Map existing strengths</div>
                <div className="step-body">
                  Identify houses with the best signal, stable electricity, and people
                  willing to host routers or common devices.
                </div>
              </div>
              <div className="step">
                <div className="step-title">Step 3 – Start small &amp; improve</div>
                <div className="step-body">
                  Begin with one hotspot or digital help desk. Collect feedback, measure
                  savings in travel and time, and expand based on real experience.
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    function CaseStudiesSection() {
      return (
        <section id="cases" className="section fade-in delay-1">
          <div className="section-header">
            <p className="section-kicker">Stories from the field</p>
            <h2 className="section-title">
              Simple case studies that can be copied anywhere
            </h2>
            <p className="section-subtitle">
              These are realistic models that schools or youth groups can adapt for their
              own village, even as a science fair or community project.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Village Study Hub</h3>
              <p>
                The government school sets up one strong 4G router with an external antenna.
                In the evenings, students living nearby connect for online classes and to
                download notes.
              </p>
              <ul
                style={{ paddingLeft: "1.1rem", marginTop: "0.4rem", fontSize: "0.85rem" }}
              >
                <li>Cost shared by school, alumni and a local NGO</li>
                <li>Router runs on UPS so small power cuts don&apos;t interrupt classes</li>
                <li>Time slots are set for each class to use the hub fairly</li>
              </ul>
            </div>
            <div className="card">
              <h3>Farmer Information Kiosk</h3>
              <p>
                A shop owner in the village market sets up a simple PC with internet. Farmers
                visit to check crop prices, weather forecasts and government schemes.
              </p>
              <ul
                style={{ paddingLeft: "1.1rem", marginTop: "0.4rem", fontSize: "0.85rem" }}
              >
                <li>Local youth helps fill online forms and print receipts</li>
                <li>Shop earns a small service fee, farmers save travel and time</li>
              </ul>
            </div>
            <div className="card">
              <h3>Offline Learning Server</h3>
              <p>
                A teacher stores videos, PDFs and quizzes on a tiny local server (for example
                a Raspberry Pi). Students connect to its Wi-Fi and learn without using
                mobile data.
              </p>
              <ul
                style={{ paddingLeft: "1.1rem", marginTop: "0.4rem", fontSize: "0.85rem" }}
              >
                <li>Content updated once a week using any available data</li>
                <li>Works even when mobile network is down</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

    function ResourcesSection() {
      return (
        <section id="resources" className="section fade-in">
          <div className="section-header">
            <p className="section-kicker">Ideas you can reuse</p>
            <h2 className="section-title">Helpful resources for projects &amp; pilots</h2>
            <p className="section-subtitle">
              Use these points directly in your project file, viva, hackathon pitch or as a
              checklist for real implementation.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Technical Ideas</h3>
              <ul className="resource-list">
                <li>Use long-range Wi-Fi routers or mesh systems to cover more houses.</li>
                <li>Add signal booster antennas in low-coverage zones.</li>
                <li>Prefer light-weight websites and apps that use less data.</li>
                <li>Use “save page for offline” and download-for-offline features.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Social &amp; Educational Ideas</h3>
              <ul className="resource-list">
                <li>Run basic smartphone and internet training in local language.</li>
                <li>Teach people how to avoid scams, OTP fraud and fake news.</li>
                <li>Ask teachers to give digital work that can be done offline.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Project &amp; Hackathon Ideas</h3>
              <ul className="resource-list">
                <li>
                  Build a low-data website like this one that works even in weak networks.
                </li>
                <li>Design an SMS-based information system for farmers or students.</li>
                <li>
                  Create a “Digital Help Desk” web app listing nearby services and kiosk
                  timings.
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

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
          a: "No. Even with slow internet, we can improve access by using offline content, shared Wi-Fi hubs and by planning when to download important files."
        },
        {
          q: "What can students practically do?",
          a: "Students can survey their village, teach elders to use smartphones, help with online forms and present these findings as a project to demand better connectivity."
        },
        {
          q: "Do we always need expensive hardware?",
          a: "Not always. Many improvements are low-cost: correct placement of the router, better antennas, sharing one strong connection and using low-data apps."
        },
        {
          q: "How can this website fit in my school project?",
          a: "You can show this as your front-end, attach a survey report and propose one pilot idea—like a study hub or kiosk—for your own village."
        }
      ];

      return (
        <section className="section fade-in delay-2">
          <div className="section-header">
            <p className="section-kicker">Quick answers</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-subtitle">
              Tap on any question to see a simple explanation that you can also reuse in
              your project viva.
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
              Treat this form as your personal pledge. In a real deployment, these ideas
              would be sent to a server or a community dashboard.
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
                <label>One idea to improve internet access in your area</label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Example: Start an evening study hub with shared Wi-Fi in our school..."
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
                bridging the rural internet gap! 🌾
              </div>
            )}
          </div>
        </section>
      );
    }

    function Footer() {
      return (
        <footer className="footer">
          <div className="footer-inner">
            <span>
              © {new Date().getFullYear()} <span className="footer-highlight">RuralConnect</span>.
              Built as an educational project to explain the problem of low internet access
              in rural areas and ways to solve it.
            </span>
            <span>
              Frontend stack: HTML · CSS · JavaScript · React (CDN) — optimised for low-data,
              mobile-friendly viewing.
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

    function App() {
      return (
        <div>
          <Navbar />
          <Hero />
          <ProblemSection />
          <CausesSection />
          <SolutionsSection />
          <CaseStudiesSection />
          <ResourcesSection />
          <FAQSection />
          <ContactSection />
          <Footer />
          <ScrollTopButton />
        </div>
      );
    }


    const rootEl = document.getElementById("root");
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);