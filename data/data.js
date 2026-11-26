/* ALL SITE CONTENT LIVES IN THIS FILE. Edit here only.
   Works when index.html is opened directly and on GitHub Pages.
   After editing name/title/description/siteUrl, re-run: node scripts/generate-og.js */
window.PORTFOLIO_DATA = {
  /* PLACEHOLDER: replace with your real GitHub Pages address (keep the trailing slash) */
  siteUrl: "https://YOUR-USERNAME.github.io/suman-portfolio/",
  ink: "#111111", paper: "#F5F3EE", accent: "#E4570C",
  contact: { phone: "01712141053", whatsapp: "8801712141053", email: "sumonttc@protonmail.com" },

  /* PLACEHOLDER: paste your profile links into url. Empty ones show greyed out until you add a link. */
  socials: [
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/sumon.rkz" },
    { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@md.sumon.alli15" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/sumonttc.official" },
    { id: "github", label: "GitHub", url: "https://github.com/sumonttc" }
  ],

  /* PLACEHOLDER: Google Maps link of the center, and the Google review link (people tap it to rate you). */
  map: { url: "", reviewUrl: "" },
  /* PLACEHOLDER: "Created by" credit in the footer. Paste your GitHub profile link in url. */
  credit: { name: { bn: "নিহাব আলী", en: "Nihab Ali" }, url: "https://github.com/nihabali" },

  /* PLACEHOLDER: replace images/work-1.jpg ... work-6.jpg with real photos (same file names),
     then change placeholder to false and write a real alt text. */
  gallery: [
    { src: "images/work-1.jpg", placeholder: true, alt: { bn: "ট্রেনিং ক্লাসের ছবি", en: "Training class photo" } },
    { src: "images/work-2.jpg", placeholder: true, alt: { bn: "ওয়েল্ডিং অনুশীলনের ছবি", en: "Welding practice photo" } },
    { src: "images/work-3.jpg", placeholder: true, alt: { bn: "ওয়ার্কশপের ছবি", en: "Workshop photo" } },
    { src: "images/work-4.jpg", placeholder: true, alt: { bn: "শিক্ষার্থীদের কাজের ছবি", en: "Student work photo" } },
    { src: "images/work-5.jpg", placeholder: true, alt: { bn: "সার্টিফিকেট প্রদানের ছবি", en: "Certificate day photo" } },
    { src: "images/work-6.jpg", placeholder: true, alt: { bn: "প্রজেক্টের ছবি", en: "Project photo" } }
  ],

  /* AUTO-WRITTEN by the designer from your answers: taglines, course descriptions, about wording. Review them. */
  en: {
    name: "Suman Ali",
    brand: "Suman Technical Training Center",
    title: "Professional welder and technical trainer",
    tagline: "17 years of field experience in MIG, TIG and arc welding. Now training the next generation of welders in Bheramara, Kushtia.",
    metaDesc: "Welder with 17 years of field experience and founder of Suman Technical Training Center in Bheramara, Kushtia. MIG, TIG and arc welding training with certificate.",
    footNote: "Hands-on welding training in Bheramara, Kushtia.",
    status: "Admissions open",
    location: "Golapnagar Bazar, Bheramara, Kushtia",
    stats: [["17", "Years in the field"], ["500+", "Students trained and certified"], ["95%", "Success rate"], ["3", "Months per course"]],
    about: [
      "I have worked as a welder for 17 years, in Bangladesh and abroad. Four to five of those years were at the Rooppur Nuclear Power Plant.",
      "After Rooppur I wanted to put that experience to use for others. Many young people sit without work, so I started Suman Technical Training Center, my own venture, to teach them welding by hand and give them a way to earn.",
      "Today the center is a training workshop. I teach students full time and do not take outside fabrication jobs."
    ],
    coursesIntro: "Hands-on training in the workshop. Every student who finishes receives the center's certificate.",
    duration: "3 months",
    courses: [
      ["MIG welding", "Wire-feed machine control, settings and clean-joint practice."],
      ["TIG welding", "Precision joints with a tungsten electrode, for thin and fine work."],
      ["Arc welding", "Electrode welding fundamentals and heavy-duty practice."]
    ],
    facts: [["Course length", "3 months"], ["Batch size", "About 20 students"], ["Admission fee", "None"], ["Course cost", "Discussed in person"], ["Certificate", "Issued by the center"]],
    experience: [
      ["Present", "Suman Technical Training Center", "Founder and trainer. Teaching MIG, TIG and arc welding."],
      ["4–5 years", "Rooppur Nuclear Power Plant", "Welder, field work."],
      ["Various years", "Projects in Bangladesh and abroad", "Welder across MIG, TIG and arc work."]
    ],
    contactText: "Admissions are open. Message on WhatsApp, call or email to ask about the next batch.",
    ui: { about: "About", courses: "Courses", experience: "Experience", contact: "Contact", wa: "WhatsApp", call: "Call", mail: "Email",
      aboutTitle: "About me", coursesTitle: "Training courses", experienceTitle: "Work experience", galleryTitle: "Work and training photos", contactTitle: "Get in touch",
      skills: "Welding skills", quick: "Quick links", follow: "Follow", createdBy: "Created by", viewMap: "View on Google Maps", rate: "Rate us on Google", soon: "Link coming soon", placeholder: "Placeholder", otherLang: "বাংলা", switchLabel: "বাংলায় দেখুন" }
  },
  bn: {
    name: "সুমন আলী",
    brand: "সুমন টেকনিক্যাল ট্রেনিং সেন্টার",
    title: "পেশাদার ওয়েল্ডার ও টেকনিক্যাল ট্রেইনার",
    tagline: "MIG, TIG ও আর্ক ওয়েল্ডিংয়ে ১৭ বছরের মাঠপর্যায়ের অভিজ্ঞতা। এখন ভেড়ামারা, কুষ্টিয়ায় নতুন প্রজন্মের ওয়েল্ডার তৈরি করছি।",
    footNote: "ভেড়ামারা, কুষ্টিয়ায় হাতে-কলমে ওয়েল্ডিং প্রশিক্ষণ।",
    status: "ভর্তি চলছে",
    location: "গোলাপনগর বাজার, ভেড়ামারা, কুষ্টিয়া",
    stats: [["১৭", "বছরের অভিজ্ঞতা"], ["৫০০+", "ছাত্র প্রশিক্ষিত ও সার্টিফিকেটপ্রাপ্ত"], ["৯৫%", "সাফল্যের হার"], ["৩", "মাসের কোর্স"]],
    about: [
      "আমি ১৭ বছর ধরে দেশে ও বিদেশে ওয়েল্ডার হিসেবে কাজ করছি। এর মধ্যে প্রায় ৪-৫ বছর কাজ করেছি রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্রে।",
      "রূপপুরের কাজ শেষে ভাবলাম, এই অভিজ্ঞতা অন্যের কাজে লাগাব। অনেক তরুণ বেকার বসে আছেন। তাদের হাতে-কলমে ওয়েল্ডিং শিখিয়ে উপার্জনের পথ করে দিতে গড়ে তুলেছি সুমন টেকনিক্যাল ট্রেনিং সেন্টার, আমার নিজস্ব উদ্যোগ।",
      "বর্তমানে এটি একটি ট্রেনিং ওয়ার্কশপ। আমি পুরো সময় শিক্ষার্থীদের শেখাচ্ছি, বাইরের কোনো ফেব্রিকেশন কাজ নিচ্ছি না।"
    ],
    coursesIntro: "ওয়ার্কশপে হাতে-কলমে ট্রেনিং। কোর্স শেষে প্রত্যেক শিক্ষার্থী সেন্টারের সার্টিফিকেট পান।",
    duration: "৩ মাস",
    courses: [
      ["MIG ওয়েল্ডিং", "ওয়্যার-ফিড মেশিনের নিয়ন্ত্রণ, সেটিং ও পরিচ্ছন্ন জোড়ার অনুশীলন।"],
      ["TIG ওয়েল্ডিং", "টাংস্টেন ইলেকট্রোডে নিখুঁত জোড়া, পাতলা ও সূক্ষ্ম কাজের অনুশীলন।"],
      ["আর্ক ওয়েল্ডিং", "ইলেকট্রোড ওয়েল্ডিংয়ের মৌলিক বিষয় ও ভারী কাজের অনুশীলন।"]
    ],
    facts: [["কোর্সের মেয়াদ", "৩ মাস"], ["ব্যাচের আকার", "প্রায় ২০ জন"], ["ভর্তি ফি", "নেই"], ["কোর্সের খরচ", "আলোচনা সাপেক্ষে"], ["সার্টিফিকেট", "সেন্টার থেকে প্রদান"]],
    experience: [
      ["বর্তমান", "সুমন টেকনিক্যাল ট্রেনিং সেন্টার", "প্রতিষ্ঠাতা ও ট্রেইনার। MIG, TIG ও আর্ক ওয়েল্ডিং শেখাচ্ছি।"],
      ["৪-৫ বছর", "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র", "ওয়েল্ডার, ফিল্ডের কাজ।"],
      ["বিভিন্ন সময়", "দেশ ও বিদেশের বিভিন্ন প্রকল্প", "MIG, TIG ও আর্ক ওয়েল্ডিংয়ে ওয়েল্ডার।"]
    ],
    contactText: "ভর্তি চলছে। পরবর্তী ব্যাচ সম্পর্কে জানতে হোয়াটসঅ্যাপ করুন, কল করুন বা ইমেইল পাঠান।",
    ui: { about: "পরিচিতি", courses: "কোর্স", experience: "অভিজ্ঞতা", contact: "যোগাযোগ", wa: "হোয়াটসঅ্যাপ", call: "কল", mail: "ইমেইল",
      aboutTitle: "আমার সম্পর্কে", coursesTitle: "ট্রেনিং কোর্স", experienceTitle: "কাজের অভিজ্ঞতা", galleryTitle: "কাজ ও ট্রেনিংয়ের ছবি", contactTitle: "যোগাযোগ করুন",
      skills: "ওয়েল্ডিং দক্ষতা", quick: "দ্রুত লিংক", follow: "ফলো করুন", createdBy: "তৈরি করেছেন", viewMap: "গুগল ম্যাপে দেখুন", rate: "গুগলে রেটিং দিন", soon: "লিংক শীঘ্রই যুক্ত হবে", placeholder: "ছবি বসবে", otherLang: "English", switchLabel: "Switch to English" }
  }
};
