const { useState, useEffect } = React;

/* ===========================
   TRANSLATIONS (EN / HI / TA / TE)
   All visible text keys live here.
   Do NOT change CSS class names anywhere.
   =========================== */
const translations = {
  en: {
    // general
    title: "Gram Sathi",
    subtitle: "My Dashboard",
    login: "My Login",
    updates: "Village News",
    daily_services: "Daily Services",
    market: "My Village Market",
    payment: "Payments",
    explore: "Services I Use Daily",
    explore_sub: "Quick links to the things that matter most to me and my neighbors.",
    why_matters: "How This Changed My Life",
    pledge: "How I Will Help My Neighbors",
    submit: "I Promise to Help",
    footer_line1: "Simple technology for a better village life.",
    // hero
    hero_eyebrow: "No More Barriers",
    hero_title: "I access the world from my village home.",
    hero_tagline: "I don't need to travel to the city anymore. With this portal, I manage my farm, my children's schooling, and my family's health right from here.",
    hero_start: "Start Using Now →",
    hero_howto: "How to Use",
    // categories / cards
    edu: "My Education",
    govt: "My Benefits",
    health: "My Health",
    cat_text_edu: "Tap to see websites for free courses and scholarships.",
    cat_text_govt: "Tap to see websites for Aadhaar, ration and Kisan money.",
    cat_text_health: "Tap to see websites for Aadhaar, ration and Kisan money.",
    cat_text_mar: "Tap to see websites for online doctor and health schemes.",
    market_card_title: "Market Websites",
    market_card_desc: "Tap to see e-NAM, WhatsApp and Maps links I use for my crops.",
    payment_card_title: "Payment Apps & Banks",
    payment_card_desc: "Tap to see PhonePe, BHIM and SBI Netbanking links.",
    // navbar
    nav_market: "Market",
    nav_payment: "Payment",
    // modals / buttons
    open_website: "Open Website ↗",
    close: "Close",
    copy_list: "Copy List",
    copied_check: "Copied ✓",
    more_arrow: "More ↗",
    got_it: "Got it",
    // services dashboard
    services_dashboard_title: "Services Dashboard",
    services_dashboard_help: "Choose a service to open quick links or learn more.",
    // how to use
    howto_step1_title: "Step 1 — Create Your Profile:",
    howto_step1_text: "Enter name, village & mobile number to save your settings.",
    howto_step2_title: "Step 2 — Pick a Service:",
    howto_step2_text: 'Tap "Start Using Now" and choose Education, Benefits or Health.',
    howto_step3_title: "Step 3 — Use Tools:",
    howto_step3_text: "Open the quick links to apply, consult, or download documents.",
    howto_step4_title: "Step 4 — Get Notifications:",
    howto_step4_text: "Turn on SMS/phone alerts to know when money or schemes arrive.",
    // help / emergency
    emergency_title: "Emergency Numbers",
    emergency_intro: "Tap to call instantly. Save these for emergencies.",
    emergency_all_title: "Emergency (All)",
    emergency_all_sub: "For any big trouble",
    emergency_police_title: "Police",
    emergency_police_sub: "For safety help",
    emergency_ambulance_title: "Ambulance",
    emergency_fire_title: "Fire",
    emergency_women_title: "Women Helpline",
    emergency_child_title: "Child Helpline",
    // contact / pledge
    contact_kicker: "My Promise",
    contact_title: "How I Will Help My Neighbors",
    contact_sub: "I know how to use this phone. I promise to help at least one person in my village who cannot read or write to use these services today.",
    contact_label_name: "My Name",
    contact_placeholder_name: "Ramesh Kumar",
    contact_label_role: "I am a...",
    contact_option_student: "Student",
    contact_option_teacher: "Teacher",
    contact_option_farmer: "Farmer",
    contact_option_shopkeeper: "Shopkeeper",
    contact_option_ngo: "Volunteer",
    contact_option_other: "Villager",
    contact_label_idea: "How I will help someone today",
    contact_placeholder_idea: "Example: I will help my neighbor check his pension status...",
    contact_success: "Thank you! Your promise makes our village stronger. 🌾",
    // login modal
    login_title_signed: "Namaste, Villager!",
    login_title_signed_sub: "Your login has been recorded in the village system.",
    login_title: "My Village Login",
    login_mobile_label: "Mobile Number",
    login_mobile_placeholder: "98765xxxxx",
    login_pin_label: "PIN",
    login_btn: "Enter My Dashboard",
    login_saving: "Saving...",
    // footer
    footer_copyright: "Made for us, by us.",
    // scroll top
    scroll_top: "↑ Top",
    // updates / ticker (these lines are content, translated)
    updates_msg_1: "Panchayat meeting about new water pump tomorrow at 10 AM.",
    updates_msg_2: "New seeds available at the co-op society.",
    updates_msg_3: "Free eye checkup camp at the primary school this Sunday.",
    // category modal extra
    modal_description_prefix: "Websites:",
    snapshot_title: "My Village Snapshot",
    snapshot_story: "Since I learned to use this on my phone, I save Rs. 200 every month that I used to spend on bus tickets to the town.",
    snapshot_change_title: "How my life changed:",
    snapshot_point1: "My daughter prepares for exams online.",
    snapshot_point2: "I check mandi prices before harvesting my crop.",
    snapshot_point3: "We receive our government money directly in the bank.",
    snapshot_point4: "The city doctor speaks to us on video call.",
    help: "Help",

  },

  hi: {
    // general
    title: "Gram Sathi",
    subtitle: "मेरा डैशबोर्ड",
    login: "लॉग इन",
    updates: "गाँव की खबरें",
    daily_services: "दैनिक सेवाएँ",
    market: "मेरा गाँव बाज़ार",
    payment: "भुगतान",
    explore: "सेवाएँ जो मैं रोज उपयोग करता हूँ",
    explore_sub: "उन चीज़ों के त्वरित लिंक जो मेरे और मेरे पड़ोसियों के लिए सबसे महत्वपूर्ण हैं।",
    why_matters: "इसने मेरा जीवन कैसे बदला",
    pledge: "मैं अपने पड़ोसियों की मदद कैसे करूँगा",
    submit: "मैं मदद करने का वादा करता हूँ",
    footer_line1: "बेहतर गाँव जीवन के लिए सरल तकनीक।",
    // hero
    hero_eyebrow: "अब कोई बाधा नहीं",
    hero_title: "मैं अपने गाँव के घर से दुनिया तक पहुँचता हूँ।",
    hero_tagline: "अब मुझे शहर जाने की जरूरत नहीं है। इस पोर्टल के साथ, मैं अपनी खेती, बच्चों की पढ़ाई और परिवार के स्वास्थ्य का ध्यान यहीं से रख सकता हूँ।",
    hero_start: "अब उपयोग करें →",
    hero_howto: "कैसे उपयोग करें",
    // categories / cards
    edu: "मेरी शिक्षा",
    govt: "मेरे लाभ",
    health: "मेरा स्वास्थ्य",
    cat_text_edu: "फ्री कोर्स और छात्रवृत्ति की वेबसाइटें देखने के लिए टैप करें।",
    cat_text_govt: "आधार, राशन और किसान पैसे की वेबसाइटें देखने के लिए टैप करें।",
    cat_text_health: "आधार, राशन और किसान पैसे की वेबसाइटें देखने के लिए टैप करें।",
    cat_text_mar: "ऑनलाइन डॉक्टर और स्वास्थ्य योजनाओं की वेबसाइटें देखने के लिए टैप करें।",
    market_card_title: "बाज़ार की वेबसाइटें",
    market_card_desc: "ई-नाम, व्हाट्सऐप और मैप्स की लिंक देखने के लिए टैप करें।",
    payment_card_title: "भुगतान ऐप और बैंक",
    payment_card_desc: "PhonePe, BHIM और SBI नेटबैंकिंग लिंक देखने के लिए टैप करें।",
    // navbar
    nav_market: "बाज़ार",
    nav_payment: "भुगतान",
    // modals / buttons
    open_website: "वेबसाइट खोलें ↗",
    close: "बंद करें",
    copy_list: "सूची कॉपी करें",
    copied_check: "कॉपी हुआ ✓",
    more_arrow: "और ↗",
    got_it: "ठीक है",
    // services dashboard
    services_dashboard_title: "सर्विसेस डैशबोर्ड",
    services_dashboard_help: "क्विक लिंक खोलने या अधिक जानने के लिए एक सेवा चुनें।",
    // how to use
    howto_step1_title: "चरण 1 — अपनी प्रोफ़ाइल बनाएं:",
    howto_step1_text: "अपना नाम, गाँव और मोबाइल नंबर दर्ज करके अपनी सेटिंग्स सुरक्षित करें।",
    howto_step2_title: "चरण 2 — एक सेवा चुनें:",
    howto_step2_text: '"अब उपयोग करें" पर टैप करें और शिक्षा, लाभ या स्वास्थ्य चुनें।',
    howto_step3_title: "चरण 3 — टूल्स उपयोग करें:",
    howto_step3_text: "आवेदन करने, परामर्श करने, या दस्तावेज़ डाउनलोड करने के लिए क्विक लिंक खोलें।",
    howto_step4_title: "चरण 4 — सूचनाएँ प्राप्त करें:",
    howto_step4_text: "SMS/फोन अलर्ट चालू करें ताकि पैसे या योजनाओं के बारे में पता चल सके।",
    // help / emergency
    emergency_title: "आपातकालीन नंबर",
    emergency_intro: "फौरन कॉल करने के लिए टैप करें। इन्हें आपातकाल के लिए सेव् करें।",
    emergency_all_title: "आपातकाल (सभी)",
    emergency_all_sub: "किसी भी बड़ी समस्या के लिए",
    emergency_police_title: "पुलिस",
    emergency_police_sub: "सुरक्षा मदद के लिए",
    emergency_ambulance_title: "एम्बुलेंस",
    emergency_fire_title: "आग",
    emergency_women_title: "महिला हेल्पलाइन",
    emergency_child_title: "बाल हेल्पलाइन",
    // contact / pledge
    contact_kicker: "मेरा वादा",
    contact_title: "मैं अपने पड़ोसियों की मदद कैसे करूँगा",
    contact_sub: "मैं इस फोन का उपयोग करना जानता हूँ। मैं वादा करता हूँ कि आज अपने कम पढ़ने-लिखने वाले कम से कम एक व्यक्ति की मदद करूँगा।",
    contact_label_name: "मेरा नाम",
    contact_placeholder_name: "रामेश कुमार",
    contact_label_role: "मैं एक...",
    contact_option_student: "छात्र",
    contact_option_teacher: "शिक्षक",
    contact_option_farmer: "किसान",
    contact_option_shopkeeper: "दुकानदार",
    contact_option_ngo: "स्वयंसेवक",
    contact_option_other: "गाँववासी",
    contact_label_idea: "आज मैं किसी की कैसे मदद करूँगा",
    contact_placeholder_idea: "उदाहरण: मैं अपने पड़ोसी को पेंशन स्थिति देखना सिखाऊँगा...",
    contact_success: "धन्यवाद! आपका वादा हमारे गाँव को मजबूत बनाता है। 🌾",
    // login modal
    login_title_signed: "नमस्ते, गाँववासी!",
    login_title_signed_sub: "आपका लॉगिन गाँव सिस्टम में रिकॉर्ड हो गया है।",
    login_title: "मेरा गाँव लॉगिन",
    login_mobile_label: "मोबाइल नंबर",
    login_mobile_placeholder: "98765xxxxx",
    login_pin_label: "PIN",
    login_btn: "मेरे डैशबोर्ड में प्रवेश करें",
    login_saving: "सुरक्षित किया जा रहा है...",
    // footer
    footer_copyright: "हमारे लिए बनाया गया, हमारे द्वारा।",
    // scroll top
    scroll_top: "↑ ऊपर",
    // updates content
    updates_msg_1: "पंचायत की बैठक — नया जल पंप: कल सुबह 10 बजे।",
    updates_msg_2: "को-ऑप सोसाइटी में नए बीज उपलब्ध।",
    updates_msg_3: "प्राथमिक विद्यालय में रविवार को नि:शुल्क नेत्र जांच शिविर।",
    // category modal extra
    modal_description_prefix: "वेबसाइट:",
    snapshot_title: "मेरा गाँव स्नैपशॉट",
    snapshot_story: "जबसे मैंने यह फोन इस्तेमाल करना सीखा है, मैं हर महीने 200 रुपये बचाता हूँ जो पहले बस का किराया देने में जाता था।",
    snapshot_change_title: "मेरी ज़िंदगी कैसे बदली:",
    snapshot_point1: "मेरी बेटी ऑनलाइन परीक्षा की तैयारी करती है।",
    snapshot_point2: "मैं फसल काटने से पहले मंडी के भाव देख लेता हूँ।",
    snapshot_point3: "सरकारी पैसा सीधे बैंक में आ जाता है।",
    snapshot_point4: "शहर का डॉक्टर वीडियो कॉल पर बात करता है।",
    help: "मदद",

  },

  ta: {
    // general
    title: "Gram Sathi",
    subtitle: "எனது டாஷ்போர்ட்",
    login: "உள்நுழைய",
    updates: "கிராம செய்திகள்",
    daily_services: "தினசரி சேவைகள்",
    market: "எனது கிராம சந்தை",
    payment: "பரிவர்த்தனை",
    explore: "நான் தினமும் பயன்படுத்தும் சேவைகள்",
    explore_sub: "எனக்கும் என் அண்டை வீட்டாருக்கும் முக்கியமான சேவைகளுக்கான விரைவு இணைப்புகள்.",
    why_matters: "இது என் வாழ்க்கையை எப்படி மாற்றியது",
    pledge: "நான் என் அண்டை வீட்டாருக்கு எப்படி உதவுவேன்",
    submit: "நான் உதவுவதாக உறுதிசெய்கிறேன்",
    footer_line1: "முன்னேற்றமான கிராம வாழ்க்கைக்கான எளிய தொழில்நுட்பம்.",
    // hero
    hero_eyebrow: "இனி தடைகள் இல்லை",
    hero_title: "என் கிராம வீட்டிலிருந்தே உலகத்தை அணுகுகிறேன்.",
    hero_tagline: "நகரத்திற்குச் செல்ல வேண்டியதில்லை. இந்த தளத்தின் மூலம் விவசாயம், குழந்தைகளின் கல்வி மற்றும் குடும்ப நலன் இங்கிருந்தே கவனிக்கிறேன்.",
    hero_start: "தொடங்கு →",
    hero_howto: "எப்படிப்படுு",
    // categories / cards
    edu: "எனது கல்வி",
    govt: "எனது நன்மைகள்",
    health: "எனது சுகாதாரம்",
    cat_text_edu: "இலவச பாடங்கள் மற்றும் உதவித்தொகை தளங்களை பார்க்க டாப் செய்யவும்.",
    cat_text_govt: "ஆதார், ரேஷன் மற்றும் கிசான் பணத்தைப் பார்க்க டாப் செய்யவும்.",
    cat_text_health: "ஆன்லைன் மருத்துவர் மற்றும் சுகாதார திட்ட தளங்களை பார்க்க டாப் செய்யவும்.",
    cat_text_mar: "ஆன்லைன் டாக்டர் மற்றும் சுகாதார திட்ட தளங்களை பார்க்க டாப் செய்யவும்.",
    market_card_title: "சந்தை இணையதளங்கள்",
    market_card_desc: "e-NAM, WhatsApp மற்றும் Maps இணைப்புகளை பார்க்க டாப் செய்யவும்.",
    payment_card_title: "கடன்/பணம் பயன்பாட்டுகள் மற்றும் வங்கு",
    payment_card_desc: "PhonePe, BHIM மற்றும் SBI Netbanking இணைப்புகளை பார்க்க டாப் செய்யவும்.",
    // navbar
    nav_market: "சந்தை",
    nav_payment: "பணம்",
    // modals / buttons
    open_website: "இணையதளம் திறக்க ↗",
    close: "மூடு",
    copy_list: "பட்டியலை நகலெடுக்க",
    copied_check: "நகலெடுக்கப்பட்டது ✓",
    more_arrow: "மேலும் ↗",
    got_it: "புரிந்துகொண்டேன்",
    // services dashboard
    services_dashboard_title: "சேவைகள் டாஷ்போர்டு",
    services_dashboard_help: "விரைவு இணைப்புகளை திறக்க அல்லது மேலும் அறிய ஒரு சேவையை தேர்வுசெய்க.",
    // how to use
    howto_step1_title: "படி 1 — உங்கள் پروபைல் உருவாக்குக:",
    howto_step1_text: "உங்கள் பெயர், கிராமம் & மொபைல் எண்ணை உள்ளிடவும்.",
    howto_step2_title: "படி 2 — ஒரு சேவையை தேர்ந்தெடுக்கவும்:",
    howto_step2_text: '"Start Using Now" ஐ அழுத்தி Education, Benefits அல்லது Health ஐ தேர்ந்தெடுக்கவும்.',
    howto_step3_title: "படி 3 — கருவிகளைக் கையாளுங்கள்:",
    howto_step3_text: "விண்ணப்பிக்க அல்லது ஆலோசனைக்காக அல்லது ஆவணங்களைப் பதிவிறக்க விரைவு இணைப்புகளை திறக்கவும்.",
    howto_step4_title: "படி 4 — அறிவிப்புகளைப் பெறுங்கள்:",
    howto_step4_text: "பணம் அல்லது திட்டங்கள் வந்தால் SMS/கால் எச்சரிப்புகளை ON செய்யவும்.",
    // help / emergency
    emergency_title: "நெருக்கடி எண்கள்",
    emergency_intro: "இவை அவசரமாவதற்கு சேமிக்கவும். உடனுக்குடன் அழைக்க தொட்டு அழைக்கவும்.",
    emergency_all_title: "நெருக்கடி (அனைத்தும்)",
    emergency_all_sub: "எந்த பெரிய பிரச்சினைக்கும்",
    emergency_police_title: "போலிஸ்",
    emergency_police_sub: "பாதுகாப்பு உதவிக்கு",
    emergency_ambulance_title: "ஆம்புலன்ஸ்",
    emergency_fire_title: "தீ",
    emergency_women_title: "பெண்கள் ஹெல்ப்லைன்",
    emergency_child_title: "குழந்தைகள் ஹெல்ப்லைன்",
    // contact / pledge
    contact_kicker: "என் வாக்கு",
    contact_title: "நான் என் அண்டை வீட்டாருக்கு எப்படி உதவுவேன்",
    contact_sub: "நான் இந்த போனைக் பயன்படுத்த வல்லவன். இன்று எழுத முடியாத ஒருவருக்கு உதவுவேன் என்று நான் வாக்களிக்கிறேன்.",
    contact_label_name: "என் பெயர்",
    contact_placeholder_name: "ரமேஷ் குமார்",
    contact_label_role: "நான் ஒரு ...",
    contact_option_student: "மாணவர்",
    contact_option_teacher: "ஆசிரியர்",
    contact_option_farmer: "அகவாரி",
    contact_option_shopkeeper: "கடைதாரர்",
    contact_option_ngo: "என் செய்பவர்",
    contact_option_other: "கிராமவாசி",
    contact_label_idea: "இன்று நான் எப்படி உதவுவேன்",
    contact_placeholder_idea: "உதாரணம்: நான் என் அயலார் பஞ்சாயத்து கையொப்பத்தை பார்க்க உதவுவேன்...",
    contact_success: "நன்றி! உங்கள் வாக்கு எங்கள் கிராமத்தை பலமாக்குகிறது. 🌾",
    // login modal
    login_title_signed: "வணக்கம், கிராமநாயகர்!",
    login_title_signed_sub: "உங்கள் लॉகின் கிராம முறைமையில் பதிவு செய்யப்பட்டது.",
    login_title: "என் கிராமம் உள்நுழைவு",
    login_mobile_label: "மொபைல் எண்",
    login_mobile_placeholder: "98765xxxxx",
    login_pin_label: "PIN",
    login_btn: "எனது டாஷ்போர்டை திறக்கவும்",
    login_saving: "சேமிக்கப்படுகிறது...",
    // footer
    footer_copyright: "எங்களுக்காக, எங்களால் உருவாக்கப்பட்டது.",
    // scroll top
    scroll_top: "↑ மேலே",
    // updates
    updates_msg_1: "பஞ்சாயத்து கூட்டம் — புதிய நீர் ஓட்டம்: காலை 10 மணிக்கு நாளை.",
    updates_msg_2: "கோ-ஆப் அமைப்பில் புதிய விதைகள் கிடைக்கின்றன.",
    updates_msg_3: "முதன்மை பள்ளியில் ஞாயிற்றுக்கிழமை கண் சோதனை முகாம்.",
    // category modal extra
    modal_description_prefix: "இணையதளங்கள்:",
    snapshot_title: "என் கிராம ஸ்னாப்ஷாட்",
    snapshot_story: "இதை மொபைலில் பயன்படுத்த கற்றபிறகு, மாதம் ரூ.200 பஸ் கட்டணத்தை சேமிக்கிறேன்.",
    snapshot_change_title: "என் வாழ்க்கை எப்படி மாறியது:",
    snapshot_point1: "என் மகள் ஆன்லைனில் தேர்வுக்கு படிக்கிறாள்.",
    snapshot_point2: "நான் அறுவடை செய்வதற்கு முன் சந்தை விலையை பார்க்கிறேன்.",
    snapshot_point3: "அரசு பணம் நேராக என் வங்கி கணக்கில் வருகிறது.",
    snapshot_point4: "நகர மருத்துவர் வீடியோ கால் மூலம் பேசுகிறார்.",
    help: "உதவி",


  },

  te: {
    // general
    title: "Gram Sathi",
    subtitle: "నా డాష్‌బోర్డ్",
    login: "లాగిన్",
    updates: "గ్రామ వార్తలు",
    daily_services: "దైనందిన సేవలు",
    market: "నా గ్రామ మార్కెట్",
    payment: "చెల్లింపులు",
    explore: "నేను రోజూ ఉపయోగించే సేవలు",
    explore_sub: "నాకు మరియు నా ఇరుగుపొరుగు వారికి ముఖ్యమైన సేవలకు లింకులు.",
    why_matters: "ఇది నా జీవితాన్ని ఎలా మార్చింది",
    pledge: "నేను నా పక్కింటివారికి ఎలా సహాయం చేస్తాను",
    submit: "సహాయం చేస్తానని మాటిస్తున్నాను",
    footer_line1: "ఉత్తమ గ్రామ జీవనానికి సరళమైన టెక్నాలజీ.",
    // hero
    hero_eyebrow: "ఇక అడ్డంకులు లేవు",
    hero_title: "నా గ్రామం నుండి ప్రపంచాన్ని పొందుతున్నాను.",
    hero_tagline: "ఇంకో నానికి నగరానికి వెళ్లాల్సిన అవసరం లేదు. ఈ పోర్టల్ ద్వారా నేను వ్యవసాయం, పిల్లల చదువు, కుటుంబ ఆరోగ్యాన్ని ఇక్కడినుండి నిర్వహిస్తాను.",
    hero_start: "ప్రారంభించు →",
    hero_howto: "ఎలా ఉపయోగించాలి",
    // categories / cards
    edu: "నా చదువు",
    govt: "నా ప్రయోజనాలు",
    health: "నా ఆరోగ్యం",
    cat_text_edu: "ఉచిత కోర్సులు, స్కాలర్‌షిప్ వెబ్‌సైట్లు చూడటానికి ట్యాప్ చేయండి.",
    cat_text_govt: "ఆధార్, రేషన్ మరియు కిసాన్ నిధుల వెబ్‌సైట్లు చూడటానికి ట్యాప్ చేయండి.",
    cat_text_health: "ఆన్లైన్ డాక్టర్లు మరియు ఆరోగ్య పథక వెబ్‌సైట్లు చూడటానికి ట్యాప్ చేయండి.",
    cat_text_mar: "ఆన్‌లైన్ డాక్టర్ మరియు ఆరోగ్య పథకాల వెబ్‌సైట్లను చూడటానికి టాప్ చేయండి.",
    market_card_title: "మార్కెట్ వెబ్‌సైట్లు",
    market_card_desc: "e-NAM, WhatsApp మరియు Maps లింక్‌లను చూడటానికి టాప్ చేయండి.",
    payment_card_title: "పేమెంట్ అప్స్ & బ్యాంకులు",
    payment_card_desc: "PhonePe, BHIM & SBI నెట్‌బ్యాంకింగ్ లింక్‌లు చూడటానికి ట్యాప్ చేయండి.",
    // navbar
    nav_market: "మార్కెట్",
    nav_payment: "చెల్లింపు",
    // modals / buttons
    open_website: "వెబ్‌సైట్ తెరవండి ↗",
    close: "మూసివేయి",
    copy_list: "లిస్ట్ కాపీ చేయండి",
    copied_check: "కాపీ అయింది ✓",
    more_arrow: "మరింత ↗",
    got_it: "బాగా ఉంది",
    // services dashboard
    services_dashboard_title: "సర్వీస్ డ్యాష్‌బోర్డ్",
    services_dashboard_help: "స్రవంతి లింక్‌లను తెరవడానికి లేదా మరింత తెలుసుకోవడానికి ఒక సేవను ఎంచుకోండి.",
    // how to use
    howto_step1_title: "దశ 1 — మీ ప్రొఫైల్ సృష్టించండి:",
    howto_step1_text: "పేరు, గ్రామం & మొబైల్ నంబర్ నమోదు చేసి సెట్టింగ్స్ సేవ్ చేయండి.",
    howto_step2_title: "దశ 2 — ఒక సేవ ఎంచుకోండి:",
    howto_step2_text: '"Start Using Now" ను తట్టండి మరియు Education, Benefits లేదా Health ఎంచుకోండి.',
    howto_step3_title: "దశ 3 — టూల్స్ వినియోగించండి:",
    howto_step3_text: "ప్రయోజనాలకు లేదా డాక్యుమెంట్లను డౌన్లోడ్ చేసుకునేందుకు క్విక్ లింక్స్ తెరవండి.",
    howto_step4_title: "దశ 4 — నోటిఫికేషన్స్ పొందండి:",
    howto_step4_text: "డబ్బులు లేదా పథకాలు వచ్చినప్పుడు SMS/ఫోన్ అలర్ట్స్ ఆన్ చేయండి.",
    // help / emergency
    emergency_title: "ఆపద సంఖ్యలు",
    emergency_intro: "తక్షణ కాల్ చేయడానికి ట్యాప్ చేయండి. అవార్డ్స్ కోసం సేవ్ చేయండి.",
    emergency_all_title: "అప emergency (అన్ని)",
    emergency_all_sub: "ఏ పెద్ద సమస్యకు",
    emergency_police_title: "పోలీస్",
    emergency_police_sub: "సురక్షిత సహాయం కోసం",
    emergency_ambulance_title: "అంబులెన్సు",
    emergency_fire_title: "ఫైర్",
    emergency_women_title: "మహిళల హెల్ప్‌లైన్",
    emergency_child_title: "చైల్డ్ హెల్ప్‌లైన్",
    // contact / pledge
    contact_kicker: "నా హామీ",
    contact_title: "నేను నా పక్కింటివారికి ఎలా సహాయం చేస్తాను",
    contact_sub: "నేను ఈ ఫోన్ ఉపయోగించడం తెలుసు. నేడు చదవలేని ఒకరికి సహాయం చేస్తాను అని వాగ్దానం చేస్తున్నాను.",
    contact_label_name: "నా పేరు",
    contact_placeholder_name: "రమేష్ కుమార్",
    contact_label_role: "నేను ఒక...",
    contact_option_student: "విద్యార్థి",
    contact_option_teacher: "ఉపాధ్యాయుడు",
    contact_option_farmer: "రైతు",
    contact_option_shopkeeper: "దుకాణదారుడు",
    contact_option_ngo: "సేవకుడు",
    contact_option_other: "గ్రామవాసి",
    contact_label_idea: "నేను నేడు ఎలా సహాయం చేస్తాను",
    contact_placeholder_idea: "ఉదాహరణ: నేను నా పొరుగువానికి పింఛన్గా స్థితి చూపిస్తాను...",
    contact_success: "ధన్యవాదాలు! మీ హామీ మా గ్రామాన్ని బలంగా చేస్తుంది. 🌾",
    // login modal
    login_title_signed: "నమస్తే, గ్రామ gebruiker!",
    login_title_signed_sub: "మీ లాగిన్ గ్రామ సిస్టంలో నమోదు చేయబడింది.",
    login_title: "నా గ్రామ లాగిన్",
    login_mobile_label: "మొబైల్ నంబర్",
    login_mobile_placeholder: "98765xxxxx",
    login_pin_label: "PIN",
    login_btn: "నా డాష్‌బోర్డ్ ప్రవేశించండి",
    login_saving: "సేవ్ చేయబడుతోంది...",
    // footer
    footer_copyright: "మన కోసం తయారయినది, మనకే.",
    // scroll top
    scroll_top: "↑ పైకి",
    // updates
    updates_msg_1: "పంచాయితీ సమావేశం — కొత్త వాటర్ పంప్: రేపు ఉదయం 10 గంటలకు.",
    updates_msg_2: "కో-ఆప్ సొసైటీ వద్ద కొత్త విత్తనాలు లభ్యమవుతున్నాయి.",
    updates_msg_3: "ప్రాథమిక పాఠశాలలో ఈ ఆదివారం ఉచిత కన్ను పరీక్ష క్యాంప్.",
    // category modal extra
    modal_description_prefix: "వెబ్‌సైట్ల:",
    snapshot_title: "నా గ్రామ స్నాప్షాట్",
    snapshot_story: "ఈ ఫోన్ వాడటం నేర్చుకున్న తర్వాత, ప్రతి నెలా బస్సు కిరాయిలో ఖర్చయ్యే రూ.200 నేను సేవ్ చేస్తున్నాను.",
    snapshot_change_title: "నా జీవితం ఇలా మారింది:",
    snapshot_point1: "నా కూతురు పరీక్షలకు ఆన్‌లైన్‌లో సిద్ధమవుతుంది.",
    snapshot_point2: "పంట కోయడానికి ముందు మార్కెట్ రేట్లు నేను చూస్తాను.",
    snapshot_point3: "సర్కారు డబ్బు నేరుగా బ్యాంకులో వస్తుంది.",
    snapshot_point4: "నగర డాక్టర్ వీడియో కాల్‌లో మాట్లాడ్తాడు.",
    help: "సహాయం",

      
  },
};

/* ===========================
   CATEGORY DATA (links stay the same)
   =========================== */
const categoryData = {
  education: {
    title: "Education for My Kids",
    icon: "📚",
    description: "Giving our village children the same chances as city kids.",
    options: [
      { title: "SWAYAM (Free Courses)", desc: "My son learns computers for free here.", url: "https://swayam.gov.in/" },
      { title: "National Scholarship Portal", desc: "I applied for my daughter's scholarship easily.", url: "https://scholarships.gov.in/" },
      { title: "PM e-VIDYA / DIKSHA", desc: "School books are now on my phone.", url: "https://diksha.gov.in/" }
    ]
  },

  "govt-services": {
    title: "My Rights & Schemes",
    icon: "🏛",
    description: "Getting my benefits without paying agents or traveling far.",
    options: [
      { title: "UIDAI (Aadhaar)", desc: "I updated my address without going to the district office.", url: "https://uidai.gov.in/" },
      { title: "PM-Kisan Portal", desc: "I check if my farming installment has arrived.", url: "https://pmkisan.gov.in/" },
      { title: "UMANG / DigiLocker", desc: "All my important papers are safe here.", url: "https://web.umang.gov.in/" }
    ]
  },

  healthcare: {
    title: "Health for My Family",
    icon: "🩺",
    description: "Talking to big doctors without leaving the village.",
    options: [
      { title: "eSanjeevani OPD", desc: "The doctor saw my mother on video call.", url: "https://esanjeevaniopd.in/" },
      { title: "Ayushman Bharat (PMJAY)", desc: "I checked if my family is covered for free treatment.", url: "https://pmjay.gov.in/" },
      { title: "Co-WIN / Health ID", desc: "I keep my vaccination records here.", url: "https://healthid.ndhm.gov.in/" }
    ]
  },

  market: {
    title: "My Village Market Websites",
    icon: "🧺",
    description: "Websites I use to check prices and find buyers for my crops.",
    options: [
      { title: "e-NAM (Online Mandi)", desc: "I see mandi prices for my crops before I decide to sell.", url: "https://enam.gov.in/web/" },
      { title: "WhatsApp Web", desc: "I join local buyer and farmer groups for offers.", url: "https://www.whatsapp.com/" },
      { title: "Nearby Shops on Google Maps", desc: "I find fertilizer, seed and tool shops near my village.", url: "https://maps.google.com/" }
    ]
  },

  payment: {
    title: "My Digital Payment Apps",
    icon: "📲",
    description: "UPI and bank tools I use to send and receive money.",
    options: [
      { title: "PhonePe", desc: "I pay at shops and send money to family using PhonePe.", url: "https://www.phonepe.com/" },
      { title: "BHIM UPI", desc: "I use BHIM app to send money directly from my bank account.", url: "https://www.bhimupi.org.in/" },
      { title: "SBI Net Banking", desc: "I check balance and manage money using SBI Internet banking.", url: "https://onlinesbi.sbi.bank.in/" }
    ]
  }
};

/* ===========================
   COMPONENTS
   (Do not change CSS class names)
   =========================== */

/* NAVBAR with smooth scroll */
function Navbar({ lang, setLang, onLogin }) {
  const t = translations[lang] || translations["en"];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="navbar fade-in">
      <div className="navbar-left">
        <div className="navbar-logo-icon">GS</div>
        <div className="navbar-logo-text">
          <span className="navbar-logo-main">{t.title}</span>
          <span className="navbar-logo-sub">{t.subtitle}</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#categories" onClick={(e) => { e.preventDefault(); scrollToId("categories"); }}>{t.daily_services}</a>
        <a href="#market" onClick={(e) => { e.preventDefault(); scrollToId("market"); }}>{t.nav_market}</a>
        <a href="#payment" onClick={(e) => { e.preventDefault(); scrollToId("payment"); }}>{t.nav_payment}</a>

        <select className="nav-select" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="te">తెలుగు (Telugu)</option>
        </select>

        <button className="nav-login-btn" onClick={onLogin}>{t.login}</button>
      </div>
    </nav>
  );
}

/* Updates / marquee */
function UpdatesBar({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <div className="updates-bar">
      <div className="updates-label">
        <span>🔔</span>
        <span style={{ marginLeft: 6, fontWeight: 700, color: "#065f46" }}>{t.updates}</span>
      </div>
      <div className="updates-marquee">
        <div className="updates-text">
          • {t.updates_msg_1} &nbsp;&nbsp;• {t.updates_msg_2} &nbsp;&nbsp;• {t.updates_msg_3}
        </div>
      </div>
    </div>
  );
}

/* HERO */
function Hero({ lang, onStartUsing, onHowTo }) {
  const t = translations[lang] || translations["en"];
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-eyebrow">{t.hero_eyebrow}</span>
        <h1 className="hero-title">{t.hero_title}</h1>
        <p className="hero-tagline">{t.hero_tagline}</p>

        <div className="hero-metric-row">
          <div className="hero-metric"><strong>{t.govt}</strong> I check my pension and land records instantly. No more waiting in lines.</div>
          <div className="hero-metric"><strong>{t.edu}</strong> My children attend extra classes online and learn English.</div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={onStartUsing}><span className="btn-icon">⚡</span> {t.hero_start}</button>
          <button className="btn-ghost" onClick={onHowTo}><span className="btn-icon">📘</span> {t.hero_howto}</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-inner">
          <div className="hero-chip"><span>🌾</span>{t.snapshot_title}</div>
          <p style={{ fontSize: "0.88rem", color: "#064e3b" }}>
            {t.snapshot_story}
          </p>
          <div className="hero-visual-box">
            <div className="hero-visual-title">{t.snapshot_change_title}</div>
            <ul className="hero-visual-list">
              <li>{t.snapshot_point1}</li>
              <li>{t.snapshot_point2}</li>
              <li>{t.snapshot_point3}</li>
              <li>{t.snapshot_point4}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CATEGORIES (education / govt / health) */
function CategoriesSection({ lang, onCategorySelect }) {
  const t = translations[lang] || translations["en"];

  return (
    <section id="categories" className="categories-section">
      <div>
        <h3 className="categories-header-title">{t.explore}</h3>
        <p className="categories-header-text">{t.explore_sub}</p>
      </div>

      <div className="category-grid">
        <div className="category-card" onClick={() => onCategorySelect("education")}>
          <div className="category-icon">📚</div>
          <div>
            <h4 className="category-title">{t.edu}</h4>
            <p className="category-text">{t.cat_text_edu}</p>
          </div>
        </div>

        <div className="category-card" onClick={() => onCategorySelect("govt-services")}>
          <div className="category-icon">🏛</div>
          <div>
            <h4 className="category-title">{t.govt}</h4>
            <p className="category-text">{t.cat_text_govt}</p>
          </div>
        </div>

        <div className="category-card" onClick={() => onCategorySelect("healthcare")}>
          <div className="category-icon">🩺</div>
          <div>
            <h4 className="category-title">{t.health}</h4>
            <p className="category-text">{t.cat_text_health}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* MARKET SECTION */
function MarketSection({ lang, onCategorySelect }) {
  const t = translations[lang] || translations["en"];

  return (
    <section id="market" className="categories-section">
      <div>
        <h3 className="categories-header-title">{t.market}</h3>
        <p className="categories-header-text">{t.cat_text_mar}</p>
      </div>

      <div className="category-grid">
        <div className="category-card" onClick={() => onCategorySelect("market")}>
          <div className="category-icon">🧺</div>
          <div>
            <h4 className="category-title">{t.market_card_title}</h4>
            <p className="category-text">{t.market_card_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* PAYMENT SECTION */
function PaymentSection({ lang, onCategorySelect }) {
  const t = translations[lang] || translations["en"];

  return (
    <section id="payment" className="categories-section">
      <div>
        <h3 className="categories-header-title">{t.payment}</h3>
        <p className="categories-header-text">{t.payment_card_desc}</p>
      </div>

      <div className="category-grid">
        <div className="category-card" onClick={() => onCategorySelect("payment")}>
          <div className="category-icon">📲</div>
          <div>
            <h4 className="category-title">{t.payment_card_title}</h4>
            <p className="category-text">{t.payment_card_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CATEGORY MODAL (reused for all categories) */
function CategoryModal({ category, lang, onClose }) {
  if (!category) return null;
  const data = categoryData[category];
  if (!data) return null;

  const t = translations[lang] || translations["en"];

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div className="help-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="help-dialog-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.5rem" }}>{data.icon}</span>
            <div>
              <h3 className="help-dialog-title" style={{ fontSize: "1.2rem" }}>{data.title}</h3>
              <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{data.description}</span>
            </div>
          </div>
          <button className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="help-dialog-body">
          <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
            {data.options.map((opt, idx) => (
              <div key={idx} className="card" style={{ padding: "0.9rem", border: "1px solid #e2e8f0", boxShadow: "none", background: "#f8fafc" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.3rem", color: "#047857" }}>{opt.title}</h4>
                <p style={{ fontSize: "0.85rem" }}>{opt.desc}</p>
                <a href={opt.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: "0.8rem", padding: "0.4rem 0.8rem", fontSize: "0.8rem", textDecoration: "none", display: "inline-block" }}>
                  {t.open_website}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* LOGIN MODAL */
function LoginModal({ open, onClose, lang }) {
  // hooks first
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const t = translations[lang] || translations["en"];

  if (!open) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      // try save to API (if available)
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, pin })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setStatus(data.message || "Login failed. Try again.");
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);
      setStatus(t.login_title_signed_sub || "Login saved.");
      setLoading(false);
      setMobile("");
      setPin("");
    } catch (err) {
      console.error(err);
      setStatus("Server error. Is backend running?");
      setLoading(false);
    }
  };

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div className="help-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "420px" }}>
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">{isLoggedIn ? t.login_title_signed : t.login_title}</h3>
          <button className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="help-dialog-body">
          {isLoggedIn ? (
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🙏</div>
              <p>{t.login_title_signed_sub}</p>
              <button className="btn-ghost" style={{ marginTop: "1rem", width: "100%" }} onClick={() => setIsLoggedIn(false)}>Login Again</button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>{t.login_title}</p>
              <div className="form-group">
                <label>{t.login_mobile_label}</label>
                <input type="text" placeholder={t.login_mobile_placeholder} required value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.login_pin_label}</label>
                <input type="password" placeholder="****" required value={pin} onChange={(e) => setPin(e.target.value)} />
              </div>

              {status && <div style={{ fontSize: "0.85rem", marginBottom: "0.5rem", color: status.includes("failed") ? "#b91c1c" : "#047857" }}>{status}</div>}

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? t.login_saving : t.login_btn}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* SERVICES DASHBOARD MODAL */
function ServicesDashboardModal({ open, onClose, onSelectCategory, lang }) {
  if (!open) return null;
  const t = translations[lang] || translations["en"];
  const cats = [
    { key: "education", label: t.edu, icon: "📚" },
    { key: "govt-services", label: t.govt, icon: "🏛" },
    { key: "healthcare", label: t.health, icon: "🩺" }
  ];

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div className="help-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">{t.services_dashboard_title}</h3>
          <button className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="help-dialog-body">
          <p style={{ color: "#64748b", marginTop: 0 }}>{t.services_dashboard_help}</p>
          <div className="card-grid" style={{ marginTop: "0.6rem" }}>
            {cats.map(c => {
              const data = categoryData[c.key];
              return (
                <div key={c.key} className="card" style={{ cursor: "pointer" }} onClick={() => { onSelectCategory(c.key); onClose(); }}>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                    <div style={{ fontSize: "1.4rem" }}>{c.icon}</div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#047857", fontSize: "0.98rem" }}>{data.title}</div>
                      <div style={{ color: "#64748b", fontSize: "0.88rem" }}>{data.description}</div>
                      <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                        {data.options.slice(0,2).map((o,i) => (
                          <a key={i} href={o.url} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textDecoration: "none", padding: "0.36rem 0.6rem", fontSize: "0.8rem" }} onClick={(e) => e.stopPropagation()}>{o.title}</a>
                        ))}
                        <button className="btn-ghost" style={{ padding: "0.36rem 0.6rem", fontSize: "0.8rem" }} onClick={(e) => { e.stopPropagation(); onSelectCategory(c.key); onClose(); }}>{t.more_arrow}</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* HOW TO USE MODAL */
function HowToUseModal({ open, onClose, lang }) {
  if (!open) return null;
  const t = translations[lang] || translations["en"];

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div className="help-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">{t.hero_howto}</h3>
          <button className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="help-dialog-body">
          <ol style={{ paddingLeft: "1rem", color: "#64748b" }}>
            <li style={{ marginBottom: "0.6rem" }}><strong>{t.howto_step1_title}</strong> {t.howto_step1_text}</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>{t.howto_step2_title}</strong> {t.howto_step2_text}</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>{t.howto_step3_title}</strong> {t.howto_step3_text}</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>{t.howto_step4_title}</strong> {t.howto_step4_text}</li>
          </ol>
          <div style={{ marginTop: "0.8rem", color: "#64748b" }}>{t.services_dashboard_help}</div>
        </div>

        <div className="help-actions">
          <button className="help-close-bottom" onClick={onClose}>{t.got_it}</button>
        </div>
      </div>
    </div>
  );
}

/* HELP / EMERGENCY MODAL */
function HelpModal({ open, onClose, lang }) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;
  const t = translations[lang] || translations["en"];

  const text = `${t.emergency_title}\n${t.emergency_all_title}: 112\n${t.emergency_police_title}: 100\n${t.emergency_ambulance_title}: 102\n${t.emergency_fire_title}: 101\n${t.emergency_women_title}: 181\n${t.emergency_child_title}: 1098`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      alert((t.copy_list || "Copy not supported.") + "\n" + text);
    }
  };

  return (
    <div className="help-backdrop" onClick={onClose}>
      <div className="help-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="help-dialog-header">
          <h3 className="help-dialog-title">{t.emergency_title}</h3>
          <button className="help-close-btn" onClick={onClose}>✕</button>
        </div>

        <p style={{ margin: "0 0 0.7rem", fontSize: "0.85rem", color: "#64748b" }}>{t.emergency_intro}</p>

        <div className="help-dialog-body">
          <ul className="help-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_all_title}</span>
                <span className="help-item-sub">{t.emergency_all_sub}</span>
              </div>
              <a className="help-item-link" href="tel:112">112</a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_police_title}</span>
                <span className="help-item-sub">{t.emergency_police_sub}</span>
              </div>
              <a className="help-item-link" href="tel:100">100</a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_ambulance_title}</span>
                <span className="help-item-sub">For medical help</span>
              </div>
              <a className="help-item-link" href="tel:102">102</a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_fire_title}</span>
                <span className="help-item-sub">For fire</span>
              </div>
              <a className="help-item-link" href="tel:101">101</a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_women_title}</span>
                <span className="help-item-sub">For sisters/mothers</span>
              </div>
              <a className="help-item-link" href="tel:181">181</a>
            </li>
            <li className="help-item">
              <div>
                <span className="help-item-title">{t.emergency_child_title}</span>
                <span className="help-item-sub">For children</span>
              </div>
              <a className="help-item-link" href="tel:1098">1098</a>
            </li>
          </ul>
        </div>

        <div className="help-actions">
          <button className="help-copy-btn" onClick={handleCopy}>{copied ? t.copied_check : t.copy_list}</button>
          <button className="help-close-bottom" onClick={onClose}>{t.close}</button>
        </div>
      </div>
    </div>
  );
}

/* FLOATING HELP BUTTON */
function HelpFab({ onClick, lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <div className="help-fab" onClick={onClick}>
      <span>
        <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.67.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.67 1 1 0 01-.24 1.01l-2.23 2.11z" />
        </svg>
      </span>
      <span>{(translations[lang] && translations[lang].help) || "Help"}</span>
    </div>
  );
}

/* EMPOWERMENT SECTION */
function EmpowermentSection({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <section className="section empower-section">
      <h3 className="empower-title">{t.why_matters}</h3>
      <p className="empower-text">
        "Before this website, I had to travel 50km to the district headquarters just to get a signature or check a form status. I would lose a day's wage and spend money on the bus. Now, I do it all from my smartphone sitting under the village banyan tree. My children have the same study materials as city kids. We are no longer left behind. This is our power."
      </p>
    </section>
  );
}

/* CONTACT / PLEDGE */
function ContactSection({ lang }) {
  const t = translations[lang] || translations["en"];
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setName(""); setRole(""); setIdea("");
    setTimeout(() => setSubmitted(false), 2600);
  }

  return (
    <section id="contact" className="section fade-in">
      <div className="section-header">
        <p className="section-kicker">{t.contact_kicker}</p>
        <h2 className="section-title">{t.contact_title}</h2>
        <p className="section-subtitle">{t.contact_sub}</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.contact_label_name}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.contact_placeholder_name} required />
          </div>

          <div className="form-group">
            <label>{t.contact_label_role}</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">{t.contact_label_role}</option>
              <option value="student">{t.contact_option_student}</option>
              <option value="teacher">{t.contact_option_teacher}</option>
              <option value="farmer">{t.contact_option_farmer}</option>
              <option value="shopkeeper">{t.contact_option_shopkeeper}</option>
              <option value="ngo">{t.contact_option_ngo}</option>
              <option value="other">{t.contact_option_other}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{t.contact_label_idea}</label>
            <textarea value={idea} onChange={(e) => setIdea(e.target.value)} placeholder={t.contact_placeholder_idea} required />
          </div>

          <button type="submit" className="btn-primary"><span className="btn-icon">🤝</span> {t.submit}</button>
        </form>

        {submitted && <div className="success-msg">{t.contact_success}</div>}
      </div>
    </section>
  );
}

/* FOOTER */
function Footer({ lang }) {
  const t = translations[lang] || translations["en"];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} <span className="footer-highlight">{t.title}</span>. {t.footer_copyright}</span>
        <span>{t.footer_line1}</span>
      </div>
    </footer>
  );
}

/* SCROLL TOP */
function ScrollTopButton({ lang }) {
  const [visible, setVisible] = useState(false);
  const t = translations[lang] || translations["en"];

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 260); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <div className="scroll-top">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t.scroll_top}</button>
    </div>
  );
}

/* ===========================
   ROOT APP
   =========================== */
function App() {
  const [helpOpen, setHelpOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [howToOpen, setHowToOpen] = useState(false);

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} onLogin={() => setLoginOpen(true)} />
      <UpdatesBar lang={lang} />
      <Hero lang={lang} onStartUsing={() => setDashboardOpen(true)} onHowTo={() => setHowToOpen(true)} />

      <CategoriesSection lang={lang} onCategorySelect={setSelectedCategory} />
      <MarketSection lang={lang} onCategorySelect={setSelectedCategory} />
      <PaymentSection lang={lang} onCategorySelect={setSelectedCategory} />

      <EmpowermentSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <ScrollTopButton lang={lang} />
      <HelpFab lang={lang} onClick={() => setHelpOpen(true)} />

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} lang={lang} />
      <CategoryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} lang={lang} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} lang={lang} />

      <ServicesDashboardModal open={dashboardOpen} onClose={() => setDashboardOpen(false)} onSelectCategory={(cat) => setSelectedCategory(cat)} lang={lang} />
      <HowToUseModal open={howToOpen} onClose={() => setHowToOpen(false)} lang={lang} />
    </div>
  );
}

/* mount */
const rootEl = document.getElementById("root");
if (!rootEl) {
  const r = document.createElement("div"); r.id = "root"; document.body.appendChild(r);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);