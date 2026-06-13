import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#09090b] text-zinc-350 min-h-screen py-24 px-6 flex flex-col items-center">
      <title>Privacy Policy | RK Dev Studios</title>
      <div className="w-full max-w-3xl space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-zinc-455 text-[10px] font-bold tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            Privacy Standards
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-555">
            Effective Date: June 13, 2026
          </p>
        </div>

        {/* Article Layout */}
        <article className="prose prose-zinc prose-invert max-w-none text-xs sm:text-sm text-zinc-400 space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">1. Overview</h2>
            <p>
              This Privacy Policy explains how <strong>RK Dev Studios</strong> collects, uses, and safeguards information across our digital software platforms, including <strong>MediSave</strong>, <strong>Orbit Music</strong>, and <strong>SubScan</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">2. Medication Management Compliance (MediSave)</h2>
            <p>
              The **MediSave** application helps users track medication schedules and log adherence statuses. To comply with healthcare classification standards, we enforce the following rules:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Offline-First Room Vaults:</strong> All personal medication descriptions, times, dosages, and compliance statuses are stored exclusively on your device inside an Android Room Database.
              </li>
              <li>
                <strong>Caregiver Connections (Optional):</strong> If you choose to invite a caregiver, your Taken or Missed check-in logs synchronize with Firebase Cloud Firestore using secure TLS encryption.
              </li>
              <li>
                <strong>No Clinical Decisions:</strong> The app acts purely as a schedule organizer. We do not provide clinical diagnostics or medical recommendations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">3. Data Sharing & Advertising</h2>
            <p>
              RK Dev Studios does not utilize Advertising ID (AD_ID) permissions, AdMob tracking, or third-party marketing brokers. Your health and personal parameters are never shared or sold.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">4. Account Deletion Rights</h2>
            <p>
              You have the right to request deletion of all account credentials and remote caregiver logs at any time. Submit your request to <a href="mailto:beatbounce80@gmail.com" className="text-blue-400 hover:underline">beatbounce80@gmail.com</a>, and we will purge your remote records within 7 business days.
            </p>
          </section>

        </article>

      </div>
    </div>
  );
}
