import { Scale } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="bg-[#09090b] text-zinc-350 min-h-screen py-24 px-6 flex flex-col items-center">
      <title>Terms of Service | RK Dev Studios</title>
      <div className="w-full max-w-3xl space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 text-zinc-455 text-[10px] font-bold tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5 text-zinc-400" />
            Terms of Service
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-555">
            Effective Date: June 13, 2026
          </p>
        </div>

        {/* Article Layout */}
        <article className="prose prose-zinc prose-invert max-w-none text-xs sm:text-sm text-zinc-400 space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing, installing, or interacting with any software services and mobile applications published by <strong>RK Dev Studios</strong> (including <strong>MediSave</strong>, <strong>Orbit Music</strong>, and <strong>SubScan</strong>), you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight text-amber-450 pl-3 border-l border-amber-900/60">
              2. Medical Disclaimer (MediSave)
            </h2>
            <p>
              RK Dev Studios provides **MediSave** as an informational, schedule-organization utility.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>RK Dev Studios is not a licensed healthcare provider, medical professional, or clinical decision support system.</li>
              <li>Our software is not a substitute for professional medical diagnostics, advice, or treatment routines.</li>
              <li>You assume sole responsibility for verifying schedule logs and dosages with qualified professionals.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">3. Account Integrity</h2>
            <p>
              Users are responsible for safeguarding any generated caregiver connection keys. RK Dev Studios will not be liable for unauthorized access resulting from shared keys.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">4. Limitations of Liability</h2>
            <p>
              RK Dev Studios and its engineering partners shall not be held liable for any damages resulting from application unavailability, sync delays, or device clock variations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">5. Contact Us</h2>
            <p>
              If you have questions regarding these Terms of Service, please contact us:
            </p>
            <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2 text-xs text-zinc-400 leading-relaxed">
              <p className="font-bold text-white text-xs mb-1">RK Dev Studios</p>
              <p>Nellore, Andhra Pradesh – 524002</p>
              <p>India</p>
              <p className="pt-1">Email: <a href="mailto:beatbounce80@gmail.com" className="text-blue-400 hover:underline">beatbounce80@gmail.com</a></p>
              <p>Website: <a href="https://rkdevstudios.mywebutils.online" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://rkdevstudios.mywebutils.online</a></p>
              <p>Support: <a href="https://rkdevstudios.mywebutils.online/support" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://rkdevstudios.mywebutils.online/support</a></p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
}
