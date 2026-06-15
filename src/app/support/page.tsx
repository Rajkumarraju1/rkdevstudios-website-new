"use client";

import { useState } from "react";
import { LifeBuoy, Mail, MessageSquare } from "lucide-react";

export default function Support() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("medisave");
  const [issue, setIssue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && issue && subject) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
        setSubject("");
        setIssue("");
      }, 5000);
    }
  };

  const faqs = [
    {
      q: "How does caregiver monitoring sync in MediSave?",
      a: "Caregivers invite members by generating a unique connection link or QR code. Once linked, any log adjustments (Taken, Missed, or Skipped) trigger automatic Firebase updates, notifying caregivers immediately."
    },
    {
      q: "Does MediSave work without an active internet connection?",
      a: "Yes, MediSave caches schedules locally inside an Android Room Database. When connectivity is restored, outstanding logs sync to Firestore automatically."
    },
    {
      q: "How do I request account deletion or data deletion?",
      a: "You can request account deletion inside the app settings, or by emailing beatbounce80@gmail.com. We purge all cloud sync and database records within 7 business days."
    }
  ];

  return (
    <div className="bg-[#09090b] text-zinc-350 min-h-screen py-24 px-6 flex flex-col items-center">
      <title>Support Center | RK Dev Studios</title>
      <div className="w-full max-w-4xl space-y-16">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-850 bg-zinc-950 text-zinc-400 text-xs font-semibold">
            <LifeBuoy className="w-3.5 h-3.5 text-zinc-400" />
            Support Center
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            How can we help?
          </h1>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Get technical assistance, submit bug reports, or request account deletions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Support Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-[#18181b] bg-zinc-950/40 space-y-3.5">
              <Mail className="w-5 h-5 text-zinc-400" />
              <h3 className="font-bold text-white text-xs uppercase tracking-wider">Contact Information</h3>
              <div className="text-xs text-zinc-400 leading-relaxed space-y-1">
                <p className="font-bold text-white">RK Dev Studios</p>
                <p>Nellore, Andhra Pradesh – 524002</p>
                <p>India</p>
                <p className="pt-1.5">
                  Email: <a href="mailto:beatbounce80@gmail.com" className="font-semibold text-blue-400 hover:underline">
                    beatbounce80@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-[10px] text-zinc-550 pt-1 border-t border-zinc-900">Response target: 24–48 hours</p>
            </div>

            <div className="p-6 rounded-xl border border-[#18181b] bg-zinc-950/40 space-y-3">
              <MessageSquare className="w-5 h-5 text-zinc-400" />
              <h3 className="font-bold text-white text-xs uppercase tracking-wider">Common Topics</h3>
              <ul className="text-[11px] text-zinc-550 space-y-1.5 list-disc pl-4">
                <li>Medication reminders & schedules</li>
                <li>Caregiver sync logs</li>
                <li>Account connection links</li>
                <li>Data deletion request checks</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 p-8 rounded-xl border border-[#18181b] bg-zinc-950/20">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Submit Support Ticket</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs rounded border border-zinc-800 bg-[#000000] text-white focus:outline-none focus:border-zinc-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs rounded border border-zinc-800 bg-[#000000] text-white focus:outline-none focus:border-zinc-700"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">
                  Product Category
                </label>
                <select
                  id="category"
                  value={category}
                  className="w-full px-3 py-2 text-xs rounded border border-zinc-800 bg-[#000000] text-white focus:outline-none focus:border-zinc-700"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="medisave">MediSave Medication reminder</option>
                  <option value="orbit">Orbit Music streaming</option>
                  <option value="subscan">SubScan subscription manager</option>
                  <option value="general">General organizational query</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">
                  Subject Summary
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full px-3 py-2 text-xs rounded border border-zinc-800 bg-[#000000] text-white focus:outline-none focus:border-zinc-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  id="issue"
                  rows={4}
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="How can we assist you?"
                  className="w-full px-3 py-2 text-xs rounded border border-[#18181b] bg-[#000000] text-white focus:outline-none focus:border-zinc-700 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded bg-white hover:bg-zinc-200 text-xs font-bold text-black transition-colors"
              >
                Submit Ticket
              </button>

              {isSubmitted && (
                <p className="text-xs text-center text-emerald-400 font-semibold mt-2">
                  ✓ Ticket submitted. We will follow up at {email}.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* FAQs */}
        <div className="pt-12 border-t border-zinc-900">
          <h3 className="text-[10px] font-bold text-white mb-6 uppercase tracking-wider text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl border border-[#18181b] bg-zinc-950/40 space-y-2">
                <h4 className="font-bold text-white text-xs">{faq.q}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
