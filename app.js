const { useState, useEffect } = React;

/* ===== TRANSLATIONS (Villager Persona) ===== */
const translations = {
  en: {
    title: "My Digital Village",
    subtitle: "My Connection to the World",
    govt: "My Benefits",
    health: "My Health",
    edu: "My Education",
    login: "My Login",
    updates: "Village News",
    hero_eyebrow: "No More Barriers",
    hero_title: "I access the world from my village home.",
    hero_tagline:
      "I don't need to travel to the city anymore. With this portal, I manage my farm, my children's schooling, and my family's health right from here.",
    explore: "Services I Use Daily",
    explore_sub:
      "Quick links to the things that matter most to me and my neighbors.",
    why_matters: "How This Changed My Life",
    pledge: "How I Will Help My Neighbors",
    submit: "I Promise to Help",
  },
  hi: {
    title: "मेरा डिजिटल गाँव",
    subtitle: "दुनिया से मेरा जुड़ाव",
    govt: "मेरे लाभ",
    health: "मेरा स्वास्थ्य",
    edu: "मेरी शिक्षा",
    login: "लॉग इन",
    updates: "गाँव की खबरें",
    hero_eyebrow: "अब कोई बाधा नहीं",
    hero_title: "मैं अपने गाँव के घर से दुनिया तक पहुँचता हूँ।",
    hero_tagline:
      "अब मुझे शहर जाने की जरूरत नहीं है। इस पोर्टल के साथ, मैं अपनी खेती, बच्चों की पढ़ाई और परिवार के स्वास्थ्य का ध्यान यहीं से रख सकता हूँ।",
    explore: "सेवाएँ जो मैं रोज उपयोग करता हूँ",
    explore_sub:
      "उन चीजों के त्वरित लिंक जो मेरे और मेरे पड़ोसियों के लिए सबसे महत्वपूर्ण हैं।",
    why_matters: "इसने मेरा जीवन कैसे बदला",
    pledge: "मैं अपने पड़ोसियों की मदद कैसे करूँगा",
    submit: "मैं मदद करने का वादा करता हूँ",
  },
  ta: {
    title: "எனது டிஜிட்டல் கிராமம்",
    subtitle: "உலகத்துடனான எனது இணைப்பு",
    govt: "எனது நன்மைகள்",
    health: "எனது சுகாதாரம்",
    edu: "எனது கல்வி",
    login: "உள்நுழைய",
    updates: "கிராம செய்திகள்",
    hero_eyebrow: "இனி தடைகள் இல்லை",
    hero_title: "எனது கிராம வீட்டில் இருந்தே உலகத்தை அணுகுகிறேன்.",
    hero_tagline:
      "இனி நான் நகரத்திற்குச் செல்ல வேண்டியதில்லை. இந்த இணையதளம் மூலம், எனது விவசாயம், குழந்தைகளின் கல்வி மற்றும் குடும்ப நலனை இங்கிருந்தே கவனித்துக்கொள்கிறேன்.",
    explore: "நான் தினமும் பயன்படுத்தும் சேவைகள்",
    explore_sub:
      "எனக்கும் எனது அண்டை வீட்டாருக்கும் முக்கியமான சேவைகளுக்கான இணைப்புகள்.",
    why_matters: "இது என் வாழ்க்கையை எப்படி மாற்றியது",
    pledge: "எனது அண்டை வீட்டாருக்கு நான் எப்படி உதவுவேன்",
    submit: "உதவுவதாக உறுதியளிக்கிறேன்",
  },
  te: {
    title: "నా డిజిటల్ గ్రామం",
    subtitle: "ప్రపంచంతో నా అనుసంధానం",
    govt: "నా ప్రయోజనాలు",
    health: "నా ఆరోగ్యం",
    edu: "నా చదువు",
    login: "లాగిన్",
    updates: "గ్రామ వార్తలు",
    hero_eyebrow: "ఇక అడ్డంకులు లేవు",
    hero_title: "నా గ్రామం నుండే ప్రపంచాన్ని పొందుతున్నాను.",
    hero_tagline:
      "నేను ఇక నగరానికి వెళ్లాల్సిన అవసరం లేదు. ఈ పోర్టల్ ద్వారా, నా వ్యవసాయం, పిల్లల చదువులు మరియు కుటుంబ ఆరోగ్యాన్ని ఇక్కడి నుండే చూసుకుంటాను.",
    explore: "నేను రోజువారీ ఉపయోగించే సేవలు",
    explore_sub:
      "నాకు మరియు నా ఇరుగుపొరుగు వారికి ముఖ్యమైన సేవలకు లింకులు.",
    why_matters: "ఇది నా జీవితాన్ని ఎలా మార్చింది",
    pledge: "నా ఇరుగుపొరుగు వారికి నేను ఎలా సహాయం చేస్తాను",
    submit: "సహాయం చేస్తానని మాటిస్తున్నాను",
  },
};

/* ===== CATEGORY DATA WITH REAL LINKS (Villager Persona) ===== */
const categoryData = {
  education: {
    title: "Education for My Kids",
    icon: "📚",
    description: "Giving our village children the same chances as city kids.",
    options: [
      {
        title: "SWAYAM (Free Courses)",
        desc: "My son learns computers for free here.",
        url: "https://swayam.gov.in/",
      },
      {
        title: "National Scholarship Portal",
        desc: "I applied for my daughter's scholarship easily.",
        url: "https://scholarships.gov.in/",
      },
      {
        title: "PM e-VIDYA / DIKSHA",
        desc: "School books are now on my phone.",
        url: "https://diksha.gov.in/",
      },
    ],
  },
  "govt-services": {
    title: "My Rights & Schemes",
    icon: "🏛",
    description: "Getting my benefits without paying agents or traveling far.",
    options: [
      {
        title: "UIDAI (Aadhaar)",
        desc: "I updated my address without going to the district office.",
        url: "https://uidai.gov.in/",
      },
      {
        title: "PM-Kisan Portal",
        desc: "I check if my farming installment has arrived.",
        url: "https://pmkisan.gov.in/",
      },
      {
        title: "UMANG / DigiLocker",
        desc: "All my important papers are safe here.",
        url: "https://web.umang.gov.in/",
      },
    ],
  },
  healthcare: {
    title: "Health for My Family",
    icon: "🩺",
    description: "Talking to big doctors without leaving the village.",
    options: [
      {
        title: "eSanjeevani OPD",
        desc: "The doctor saw my mother on video call.",
        url: "https://esanjeevaniopd.in/",
      },
      {
        title: "Ayushman Bharat (PMJAY)",
        desc: "I checked if my family is covered for free treatment.",
        url: "https://pmjay.gov.in/",
      },
      {
        title: "Co-WIN / Health ID",
        desc: "I keep my vaccination records here.",
        url: "https://healthid.ndhm.gov.in/",
      },
    ],
  },
};

/* ===== COMPONENTS ===== */

/* ==== NAVBAR WITH SMOOTH SCROLL TO SECTIONS ==== */
function Navbar({ lang, setLang, onLogin }) {
  const t = translations[lang] || translations["en"];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar fade-in">
      <div className="navbar-left">
        <div className="navbar-logo-icon">DV</div>
        <div className="navbar-logo-text">
          <span className="navbar-logo-main">{t.title}</span>
          <span className="navbar-logo-sub">{t.subtitle}</span>
        </div>
      </div>
      <div className="nav-links">
        {/* Education / Health / Services → categories section */}
        <a
          href="#education"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("categories");
          }}
        >
          Education
        </a>
        <a
          href="#health"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("categories");
          }}
        >
          Health
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("categories");
          }}
        >
          Services
        </a>

        {/* New sections */}
        <a
          href="#market"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("market");
          }}
        >
          Market
        </a>
        <a
          href="#payment"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("payment");
          }}
        >
          Payment
        </a>

        <select
          className="nav-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="te">తెలుగు (Telugu)</option>
        </select>
        <button className="nav-login-btn" onClick={onLogin}>
          {t.login}
        </button>
      </div>
    </nav>
  );
}

function UpdatesBar({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <div className="updates-bar">
      <div className="updates-label">
        <span>🔔</span>
        <span>{t.updates}</span>
      </div>
      <div className="updates-marquee">
        <div className="updates-text">
          • Panchayat meeting about new water pump tomorrow at 10 AM.&nbsp;&nbsp;• New
          seeds available at the co-op society.&nbsp;&nbsp;• Free eye checkup camp at
          the primary school this Sunday.
        </div>
      </div>
    </div>
  );
}

function Hero({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-eyebrow">{t.hero_eyebrow}</span>
        <h1 className="hero-title">{t.hero_title}</h1>
        <p className="hero-tagline">{t.hero_tagline}</p>

        <div className="hero-metric-row">
          <div className="hero-metric">
            <strong>{t.govt}</strong>
            I check my pension and land records instantly. No more waiting in lines.
          </div>
          <div className="hero-metric">
            <strong>{t.edu}</strong>
            My children attend extra classes online and learn English.
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary">
            <span className="btn-icon">⚡</span>
            Start Using Now →
          </button>
          <button className="btn-ghost">
            <span className="btn-icon">📘</span>
            How to Use
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-inner">
          <div className="hero-chip">
            <span>🌾</span> My Village Snapshot
          </div>
          <p style={{ fontSize: "0.88rem", color: "#064e3b" }}>
            "Since I learned to use this on my phone, I save Rs. 200 every month that I
            used to spend on bus tickets to the town."
          </p>
          <div className="hero-visual-box">
            <div className="hero-visual-title">How my life changed:</div>
            <ul className="hero-visual-list">
              <li>My daughter prepares for exams online.</li>
              <li>I check mandi prices before harvesting my crop.</li>
              <li>We receive our government money directly in the bank.</li>
              <li>The city doctor speaks to us on video call.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Original Categories (Education / Govt / Health) ===== */
function CategoriesSection({ lang, onCategorySelect }) {
  const t = translations[lang] || translations["en"];

  return (
    <section id="categories" className="categories-section">
      <div>
        <h3 className="categories-header-title">{t.explore}</h3>
        <p className="categories-header-text">{t.explore_sub}</p>
      </div>

      <div className="category-grid">
        <div
          className="category-card"
          onClick={() => onCategorySelect("education")}
        >
          <div className="category-icon">📚</div>
          <div>
            <h4 className="category-title">{t.edu}</h4>
            <p className="category-text">
              Scholarships, books, and classes for our kids.
            </p>
          </div>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("govt-services")}
        >
          <div className="category-icon">🏛</div>
          <div>
            <h4 className="category-title">{t.govt}</h4>
            <p className="category-text">
              Aadhaar, Ration, and Kisan money status.
            </p>
          </div>
        </div>

        <div
          className="category-card"
          onClick={() => onCategorySelect("healthcare")}
        >
          <div className="category-icon">🩺</div>
          <div>
            <h4 className="category-title">{t.health}</h4>
            <p className="category-text">
              Doctor consultation and Ayushman cards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== NEW: Market Section (same layout as categories) ===== */
function MarketSection() {
  return (
    <section id="market" className="categories-section">
      <div>
        <h3 className="categories-header-title">My Village Market</h3>
        <p className="categories-header-text">
          Places where I check prices and find buyers for my crops and products.
        </p>
      </div>

      <div className="category-grid">
        <div className="category-card">
          <div className="category-icon">🧺</div>
          <div>
            <h4 className="category-title">e-NAM (Online Mandi)</h4>
            <p className="category-text">
              I see mandi prices for my crops before I decide to sell.
            </p>
          </div>
        </div>

        <div className="category-card">
          <div className="category-icon">📱</div>
          <div>
            <h4 className="category-title">WhatsApp Buyer Groups</h4>
            <p className="category-text">
              I join local groups where traders and farmers share offers.
            </p>
          </div>
        </div>

        <div className="category-card">
          <div className="category-icon">🛒</div>
          <div>
            <h4 className="category-title">Nearby Shops & Co-ops</h4>
            <p className="category-text">
              I compare prices of seeds, fertilizer and tools in nearby markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== NEW: Payment Section (same layout, uses PhonePe) ===== */
function PaymentSection() {
  return (
    <section id="payment" className="categories-section">
      <div>
        <h3 className="categories-header-title">My Digital Payments</h3>
        <p className="categories-header-text">
          Simple ways I send and receive money without going to the bank.
        </p>
      </div>

      <div className="category-grid">
        <div className="category-card">
          <div className="category-icon">📲</div>
          <div>
            <h4 className="category-title">PhonePe (UPI Payments)</h4>
            <p className="category-text">
              I pay at shops and send money to family using PhonePe on my phone.
            </p>
          </div>
        </div>

        <div className="category-card">
          <div className="category-icon">💸</div>
          <div>
            <h4 className="category-title">BHIM / Other UPI Apps</h4>
            <p className="category-text">
              I use UPI ID or QR code to pay instantly from my bank account.
            </p>
          </div>
        </div>

        <div className="category-card">
          <div className="category-icon">🏦</div>
          <div>
            <h4 className="category-title">Bank Passbook & ATM</h4>
            <p className="category-text">
              I still keep some cash and check my balance at the bank or ATM
              when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Category Modal ===== */
function CategoryModal({ category, onClose }) {
  if (!category) return null;
  const data = categoryData[category];

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div
        className="help-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="help-dialog-header">
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span style={{ fontSize: "1.5rem" }}>{data.icon}</span>
            <div>
              <h3
                className="help-dialog-title"
                style={{ fontSize: "1.2rem" }}
              >
                {data.title}
              </h3>
              <span
                style={{ fontSize: "0.8rem", color: "#64748b" }}
              >
                {data.description}
              </span>
            </div>
          </div>
          <button className="help-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="help-dialog-body">
          <div
            className="card-grid"
            style={{ gridTemplateColumns: "1fr" }}
          >
            {data.options.map((opt, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "0.9rem",
                  border: "1px solid #e2e8f0",
                  boxShadow: "none",
                  background: "#f8fafc",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.3rem",
                    color: "#047857",
                  }}
                >
                  {opt.title}
                </h4>
                <p style={{ fontSize: "0.85rem" }}>{opt.desc}</p>
                <a
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    marginTop: "0.8rem",
                    padding: "0.4rem 0.8rem",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Open Website ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Login Modal ===== */
function LoginModal({ open, onClose }) {
  if (!open) return null;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div
        className="help-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "400px" }}
      >
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">
            {isLoggedIn ? "Namaste, Villager!" : "My Village Login"}
          </h3>
          <button className="help-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="help-dialog-body">
          {isLoggedIn ? (
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div
                style={{ fontSize: "3rem", marginBottom: "1rem" }}
              >
                🙏
              </div>
              <p>
                Welcome back, <strong>Ramesh Kumar</strong>.
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  marginTop: "0.5rem",
                }}
              >
                Village: Rampur | District: Varanasi
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "#f0fdf4",
                  borderRadius: "0.5rem",
                }}
              >
                <strong>My Updates:</strong>
                <br />
                <span style={{ fontSize: "0.85rem" }}>
                  • PM-Kisan Installment: Received
                </span>
                <br />
                <span style={{ fontSize: "0.85rem" }}>
                  • Ration Card: Active
                </span>
              </div>
              <button
                className="btn-ghost"
                style={{ marginTop: "1.5rem", width: "100%" }}
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                  marginBottom: "1rem",
                }}
              >
                Enter your phone number to access your village services.
              </p>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="98765xxxxx" required />
              </div>
              <div className="form-group">
                <label>PIN</label>
                <input type="password" placeholder="****" required />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Enter My Dashboard
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== Empowerment Section ===== */
function EmpowermentSection({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <section className="section empower-section">
      <h3 className="empower-title">{t.why_matters}</h3>
      <p className="empower-text">
        "Before this website, I had to travel 50km to the district
        headquarters just to get a signature or check a form status. I would
        lose a day's wage and spend money on the bus. Now, I do it all from my
        smartphone sitting under the village banyan tree. My children have the
        same study materials as city kids. We are no longer left behind. This
        is our power."
      </p>
    </section>
  );
}

/* ===== Contact / Pledge Section ===== */
function ContactSection({ lang }) {
  const t = translations[lang] || translations["en"];
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
        <p className="section-kicker">My Promise</p>
        <h2 className="section-title">{t.pledge}</h2>
        <p className="section-subtitle">
          "I know how to use this phone. I promise to help at least one person
          in my village who cannot read or write to use these services today."
        </p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>My Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ramesh Kumar"
              required
            />
          </div>
          <div className="form-group">
            <label>I am a...</label>
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
              <option value="ngo">Volunteer</option>
              <option value="other">Villager</option>
            </select>
          </div>
          <div className="form-group">
            <label>How I will help someone today</label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: I will help my neighbor check his pension status..."
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            <span className="btn-icon">🤝</span>
            {t.submit}
          </button>
        </form>
        {submitted && (
          <div className="success-msg">
            Thank you! Your promise makes our village stronger. 🌾
          </div>
        )}
      </div>
    </section>
  );
}

/* ===== Footer ===== */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="footer-highlight">My Digital Village</span>. Made
          for us, by us.
        </span>
        <span>Simple technology for a better village life.</span>
      </div>
    </footer>
  );
}

/* ===== Scroll To Top Button ===== */
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
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑ Top
      </button>
    </div>
  );
}

/* ===== Help Modal ===== */
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
      <div
        className="help-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">Emergency Numbers</h3>
          <button className="help-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <p
          style={{
            margin: "0 0 0.7rem",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          Tap to call instantly. Save these for emergencies.
        </p>

        <div className="help-dialog-body">
          <ul className="help-list">
            <li className="help-item">
              <div>
                <span className="help-item-title">
                  Emergency (All)
                </span>
                <span className="help-item-sub">
                  For any big trouble
                </span>
              </div>
              <a className="help-item-link" href="tel:112">
                112
              </a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">Police</span>
                <span className="help-item-sub">
                  For safety help
                </span>
              </div>
              <a className="help-item-link" href="tel:100">
                100
              </a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">Ambulance</span>
                <span className="help-item-sub">
                  For medical help
                </span>
              </div>
              <a className="help-item-link" href="tel:102">
                102
              </a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">Fire</span>
                <span className="help-item-sub">For fire</span>
              </div>
              <a className="help-item-link" href="tel:101">
                101
              </a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">
                  Women Helpline
                </span>
                <span className="help-item-sub">
                  For sisters/mothers
                </span>
              </div>
              <a className="help-item-link" href="tel:181">
                181
              </a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">
                  Child Helpline
                </span>
                <span className="help-item-sub">
                  For children
                </span>
              </div>
              <a className="help-item-link" href="tel:1098">
                1098
              </a>
            </li>
          </ul>
        </div>

        <div className="help-actions">
          <button className="help-copy-btn" onClick={handleCopy}>
            {copied ? "Copied ✓" : "Copy List"}
          </button>
          <button
            className="help-close-bottom"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== Floating Help Button ===== */
function HelpFab({ onClick }) {
  return (
    <div className="help-fab" onClick={onClick}>
    <span>
      <svg
        width="20"
        height="20"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.67.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.67 1 1 0 01-.24 1.01l-2.23 2.11z" />
      </svg>
    </span>
      <span>Help</span>
    </div>
  );
}

/* ===== ROOT APP ===== */
function App() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      <Navbar
        lang={lang}
        setLang={setLang}
        onLogin={() => setLoginOpen(true)}
      />
      <UpdatesBar lang={lang} />
      <Hero lang={lang} />

      {/* Education / Govt / Health cards */}
      <CategoriesSection
        lang={lang}
        onCategorySelect={setSelectedCategory}
      />

      {/* New Market & Payment sections */}
      <MarketSection />
      <PaymentSection />

      <EmpowermentSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer />
      <ScrollTopButton />
      <HelpFab onClick={() => setHelpOpen(true)} />

      <HelpModal
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
      />
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </div>
  );
}

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
