"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Heart, 
  ArrowRight,
  Shield,
  Smartphone,
  CheckCircle2,
  Users,
  Database,
  Lock,
  Sparkles
} from "lucide-react";

// Count Up component for stats
function CountUp({ end, duration = 1.5, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  const [orbitScreen, setOrbitScreen] = useState("solar");
  const [medisaveScreen, setMedisaveScreen] = useState("dashboard");
  const [subscanScreen, setSubscanScreen] = useState("welcome");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#09090b] text-zinc-300">
      
      {/* 1. Hero Section */}
      <section className="w-full pt-24 pb-16 md:pt-32 md:pb-20 flex flex-col items-center relative border-b border-[#1f1f27] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-8 relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Software Dev Studio
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl text-white"
          >
            Engineering secure software products for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">healthcare, productivity, and digital experiences.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed"
          >
            We design utility and healthcare applications prioritizing offline independence, sandboxed security layers, and transparent compliance schemas.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#medisave"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-550 text-xs font-bold text-white transition-all shadow-md shadow-blue-550/10 active:scale-[0.98]"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
            <Link
              href="/support"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1f1f27] bg-[#101014] hover:bg-[#15151c] text-xs font-bold text-zinc-300 transition-colors active:scale-[0.98]"
            >
              Contact Support
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl pt-16 grid grid-cols-3 gap-6 border-t border-[#1f1f27]/40 mt-12"
          >
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                <CountUp end={2026} duration={1} />
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Founded</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                <CountUp end={3} duration={0.8} suffix=" Products" />
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">In Lifecycle</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                <CountUp end={24} duration={0.8} />–48h
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">SLA Response Support</p>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 2. Flagship Showcase: MediSave */}
      <section id="medisave" className="w-full py-16 border-b border-[#1f1f27] bg-[#0c0c10] flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Text description (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                Flagship Platform &bull; In Development
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-zinc-850 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src="/medisave-icon.png" alt="MediSave Icon" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  MediSave
                </h2>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A highly secure, offline-first medication manager designed to maximize healthcare adherence. Built to handle scheduling parameters safely and synchronize state updates with selected caregivers.
              </p>
              
              {/* Product Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Medication Reminders</h4>
                    <p className="text-[11px] text-zinc-500">Predictable local alarm manager notification triggers.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Users className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Caregiver Monitoring</h4>
                    <p className="text-[11px] text-zinc-500">Immediate, encrypted update relays to trusted contacts.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Heart className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Adherence Tracking</h4>
                    <p className="text-[11px] text-zinc-500">Weekly compliance index metrics and logging calendars.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Database className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-white">Privacy-First Design</h4>
                    <p className="text-[11px] text-zinc-500">Data lives in local Room db. Transmitted only with explicit authorization.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/products/medisave"
                  className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  View MediSave Specifications
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* MediSave screenshots phone mockup (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center gap-4 w-full">
              <div className="screenshot-container w-[260px] h-[520px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#0d0d12] flex items-center justify-center relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                {/* Thin Bezel Bevel Accent */}
                <div className="absolute inset-0.5 border border-zinc-850 rounded-[22px] pointer-events-none z-20" />
                
                {medisaveScreen === "dashboard" && <img src="/medisave-screenshot-dashboard.jpg" alt="MediSave Dashboard" className="w-full h-full object-cover z-10" />}
                {medisaveScreen === "reminder" && <img src="/medisave-screenshot-reminder.jpg" alt="MediSave Add Reminder" className="w-full h-full object-cover z-10" />}
                {medisaveScreen === "map" && <img src="/medisave-screenshot-map.jpg" alt="MediSave Map" className="w-full h-full object-cover z-10" />}
                {medisaveScreen === "profile" && <img src="/medisave-screenshot-profile.jpg" alt="MediSave Profile Connections" className="w-full h-full object-cover z-10" />}
                {medisaveScreen === "alerts" && <img src="/medisave-screenshot-alerts.jpg" alt="MediSave Caregiver Alerts" className="w-full h-full object-cover z-10" />}
              </div>
              
              {/* Interactive Screen Selector Tabs */}
              <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-lg bg-[#101014] border border-zinc-850 text-[9px] font-bold">
                {[
                  { id: "dashboard", label: "Dashboard" },
                  { id: "reminder", label: "Add Alarm" },
                  { id: "map", label: "Pharmacy Map" },
                  { id: "profile", label: "Caregivers" },
                  { id: "alerts", label: "Alerts Panel" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setMedisaveScreen(tab.id)}
                    type="button"
                    className={`px-3 py-1 rounded transition-colors ${medisaveScreen === tab.id ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. Available Now: Orbit Music */}
      <section id="orbit" className="w-full py-16 border-b border-[#1f1f27] bg-[#09090b] flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Text description (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:order-last">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                Available Now &bull; Live on Google Play Store
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-zinc-850 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src="/orbit-music-icon.jpg" alt="Orbit Music Icon" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Orbit Music
                </h2>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our currently available consumer platform. A high-performance local playback engine and media streaming utility designed for lossless audio formats, curated playlists, and device-level audio curation.
              </p>

              {/* Status List */}
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Live on Google Play Store
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  Available Today for Android Users
                </li>
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.pralayakaveri.orbitmusic"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border border-zinc-800 bg-[#121217] hover:bg-[#181822] text-xs font-bold text-white transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  Download on Google Play
                </a>
                <Link
                  href="/products/orbit-music"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Orbit Details
                </Link>
              </div>
            </div>

            {/* Orbit screenshots phone mockup (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center gap-4 w-full">
              <div className="screenshot-container w-[260px] h-[520px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#0d0d12] flex items-center justify-center relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                {/* Thin Bezel Bevel Accent */}
                <div className="absolute inset-0.5 border border-zinc-850 rounded-[22px] pointer-events-none z-20" />
                
                {orbitScreen === "library" && <img src="/orbit-screenshot-library.png" alt="Orbit Library" className="w-full h-full object-cover z-10" />}
                {orbitScreen === "playlists" && <img src="/orbit-screenshot-playlists.png" alt="Orbit Playlists" className="w-full h-full object-cover z-10" />}
                {orbitScreen === "albums" && <img src="/orbit-screenshot-albums.png" alt="Orbit Albums" className="w-full h-full object-cover z-10" />}
                {orbitScreen === "solar" && <img src="/orbit-screenshot-solar.png" alt="Orbit Visual Queue" className="w-full h-full object-cover z-10" />}
              </div>
              
              {/* Interactive Screen Selector Tabs */}
              <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-lg bg-[#101014] border border-zinc-850 text-[9px] font-bold">
                {[
                  { id: "solar", label: "Queue Map" },
                  { id: "library", label: "Songs" },
                  { id: "playlists", label: "Playlists" },
                  { id: "albums", label: "Albums" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setOrbitScreen(tab.id)}
                    type="button"
                    className={`px-3 py-1 rounded transition-colors ${orbitScreen === tab.id ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 4. Beta Testing: SubScan */}
      <section id="subscan" className="w-full py-16 border-b border-[#1f1f27] bg-[#0c0c10]/20 flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Text description (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                Beta Testing &bull; Closed Early Access
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-zinc-850 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src="/subscan-icon.png" alt="SubScan Icon" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  SubScan
                </h2>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A clean, utility subscription auditor designed to map digital expenditure cycles. Integrates visual charts, renewal timers, and category breakdown rules to secure your device finance records locally.
              </p>

              {/* Beta Features List */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Beta Focus Areas:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Subscription Analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Expense Tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Renewal Alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Local Data Isolation
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg border border-[#1f1f27] bg-[#101014] text-[11px] text-zinc-500">
                  <span className="font-bold text-blue-400 uppercase tracking-wider block mb-1">Upcoming Roadmap:</span>
                  Push Notifications, Automated Expense warnings, and custom categories.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/products/subscan"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Beta Information
                </Link>
              </div>
            </div>            {/* SubScan screenshots phone mockup (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center gap-4 w-full">
              <div className="screenshot-container w-[260px] h-[520px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#0d0d12] flex items-center justify-center relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                {/* Thin Bezel Bevel Accent */}
                <div className="absolute inset-0.5 border border-zinc-850 rounded-[22px] pointer-events-none z-20" />
                
                {subscanScreen === "welcome" && <img src="/subscan-screenshot-welcome.png" alt="SubScan Get Started" className="w-full h-full object-cover z-10" />}
                {subscanScreen === "empty" && <img src="/subscan-screenshot-empty.png" alt="SubScan No Subscriptions" className="w-full h-full object-cover z-10" />}
                {subscanScreen === "dashboard" && <img src="/subscan-screenshot-dashboard.png" alt="SubScan Dashboard" className="w-full h-full object-cover z-10" />}
                {subscanScreen === "assistant" && <img src="/subscan-screenshot-assistant.png" alt="SubScan Smart Assistant" className="w-full h-full object-cover z-10" />}
              </div>
              
              {/* Interactive Screen Selector Tabs */}
              <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-lg bg-[#101014] border border-zinc-850 text-[9px] font-bold">
                {[
                  { id: "welcome", label: "Get Started" },
                  { id: "empty", label: "Scan Inbox" },
                  { id: "dashboard", label: "Dashboard" },
                  { id: "assistant", label: "Smart Assistant" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSubscanScreen(tab.id)}
                    type="button"
                    className={`px-3 py-1 rounded transition-colors ${subscanScreen === tab.id ? "bg-blue-600 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 5. Company Story & Tech / Philosophy */}
      <section className="w-full py-16 border-b border-[#1f1f27] bg-[#0c0c10]/40 flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Our Foundation</h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">Corporate Story</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Founded in 2026, RK Dev Studios designs, operates, and secures digital applications. We avoid templates and generic web structures, opting instead to build production-ready mobile and web architectures.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 group"
                >
                  Read Our Company Profile
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#101014] border border-[#1f1f27] rounded-xl p-8 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Development Philosophy</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-blue-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white">Strict Data Boundaries</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      We store user credentials and database schedules locally inside standard android sandboxes, preventing telemetry leaks and network dependency issues.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-blue-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white">Explicit Permissions & Cryptography</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      We never solicit arbitrary system integrations. All sync paths and shared data targets require secure user-initiated configuration triggers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Premium CTA Section */}
      <section className="w-full py-16 flex flex-col items-center bg-[#09090b]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-gradient-to-r from-[#101014] to-[#15151e] border border-[#1f1f27] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 filter blur-[60px] pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Building software products that prioritize privacy, reliability, and user trust.
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#medisave"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-550 text-xs font-bold text-white transition-all shadow-md shadow-blue-550/10 active:scale-[0.98]"
                >
                  View Products
                </a>
                <Link
                  href="/support"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1f1f27] bg-[#101014] hover:bg-[#15151c] text-xs font-bold text-zinc-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
