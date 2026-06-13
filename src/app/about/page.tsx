import { Sparkles, Calendar, ShieldCheck, Cpu } from "lucide-react";

export default function About() {
  const stack = [
    { title: "Mobile Architecture", items: ["Android Platform Development", "Kotlin Coroutines & Flow", "Jetpack Compose UI Framework", "Room Sandboxed Local Database", "WorkManager System Schedulers"] },
    { title: "Web Interfaces", items: ["React 19 Core Framework", "Next.js 15 Server-Side Router", "TypeScript Strict Mode", "Tailwind CSS Utility Style Engine", "Framer Motion Animation Library"] },
    { title: "Cloud Integration", items: ["Firebase Authenticator", "Cloud Firestore Databases", "Cloud Functions Compute Nodes", "Firestore Security Transmission Rules"] }
  ];

  const values = [
    { 
      title: "Data Sovereignty", 
      desc: "User information should remain on their own device. We design offline-first application cores with local sandboxed database structures.", 
      icon: ShieldCheck 
    },
    { 
      title: "Clean Room Craftsmanship", 
      desc: "We build reliable, maintainable code architectures with strict design patterns rather than standard web templates or swift MVPs.", 
      icon: Cpu 
    },
    { 
      title: "Reliable Automation", 
      desc: "Utilizing deep integration with native operating system alarms to trigger schedules and alarms predictably even in low-power modes.", 
      icon: Calendar 
    }
  ];

  const timeline = [
    { 
      year: "2026 Q1", 
      title: "Studio Inception",
      event: "RK Dev Studios founded to build utility and medical companion architectures focused on sandboxed security." 
    },
    { 
      year: "2026 Q2", 
      title: "Orbit Music Public Launch",
      event: "Released Orbit Music on the Google Play Store as our premier high-performance audio engine." 
    },
    { 
      year: "2026 Q3", 
      title: "SubScan Beta Lifecycle",
      event: "Initiated private closed testing for SubScan, mapping expenditures, expense thresholds, and renewal timers." 
    },
    { 
      year: "2026 Q4 (Planned)", 
      title: "MediSave Core Implementation",
      event: "Finalize offline-first Room synchronization schemas for MediSave, our flagship digital health coordinator." 
    }
  ];

  return (
    <div className="bg-[#09090b] text-zinc-300 min-h-screen py-20 px-6 sm:px-8 lg:px-12 flex flex-col items-center">
      <div className="w-full max-w-[1440px] space-y-24">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Company Profile
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl">
            About RK Dev Studios
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Founded in 2026. A structured engineering team building sandboxed local utilities and consumer platforms.
          </p>
        </div>

        {/* Narrative Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#1f1f27]/40 pt-16">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-500">Corporate Mission</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Software constructed to prioritize user privacy and mechanical reliability.
            </h3>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-400 leading-relaxed">
            <p>
              At RK Dev Studios, we believe digital applications should operate as utilities rather than vectors for unsolicited telemetries. Whether it is tracking medication intervals in <strong>MediSave</strong>, curating audio files in <strong>Orbit Music</strong>, or cataloging monthly billing schedules in <strong>SubScan</strong>, we build with local data isolation at the core.
            </p>
            <p>
              By utilizing native system tools (such as Android’s AlarmManager, Jetpack Room, and local background synchronization tasks), we guarantee applications run optimally with minimal resource overhead and absolute data privacy. Cloud integrations are strictly opt-in and validated with end-to-end access rules.
            </p>
          </div>
        </div>

        {/* Dynamic Timeline Grid */}
        <div className="border-t border-[#1f1f27]/40 pt-16 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-white">Development Timeline</h3>
            <p className="text-xs text-zinc-500">Key milestones in our product lifecycles and studio roadmap.</p>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 border-l border-zinc-800 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">{item.year}</span>
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="border-t border-[#1f1f27]/40 pt-16 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-white">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-[#101014] border border-[#1f1f27] rounded-xl p-8 space-y-4 hover:border-zinc-700 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#0d0d12] border border-zinc-800 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">{v.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="border-t border-[#1f1f27]/40 pt-16 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-white">Technology Stack</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stack.map((group, idx) => (
              <div key={idx} className="bg-[#101014] border border-[#1f1f27] rounded-xl p-8 space-y-6">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-zinc-800 pb-3">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Development Philosophy & Core Registry Card */}
        <div className="border-t border-[#1f1f27]/40 pt-16">
          <div className="bg-[#101014] border border-[#1f1f27] rounded-2xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-extrabold text-white">Corporate Identity</h3>
              <p className="text-xs text-zinc-550">Official registry parameters for organization compliance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed border-t border-zinc-900 pt-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Legal Entity</span>
                  <span className="text-white font-bold">RK Dev Studios</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Primary Web Domain</span>
                  <span className="text-white font-mono">rkdevstudios.mywebutils.online</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Founded Year</span>
                  <span className="text-white font-bold">2026</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Corporate Contact</span>
                  <a href="mailto:beatbounce80@gmail.com" className="text-blue-400 hover:text-blue-300 font-bold font-mono">beatbounce80@gmail.com</a>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Support Response SLAs</span>
                  <span className="text-white font-bold">24–48 Hours SLA</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-550">Technical Specialization</span>
                  <span className="text-white font-bold">Offline-First Schedulers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
