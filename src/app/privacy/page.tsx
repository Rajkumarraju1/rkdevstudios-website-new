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
            Last Updated: June 2026
          </p>
        </div>

        {/* Article Layout */}
        <article className="prose prose-zinc prose-invert max-w-none text-xs sm:text-sm text-zinc-400 space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">1. Overview</h2>
            <p>
              RK Dev Studios develops secure software products for healthcare, music, productivity, and subscription management. Our applications are designed around privacy, reliability, and long-term user trust. This Privacy Policy details how we handle, persist, and protect your information across our digital software platforms, including <strong>MediSave</strong>, <strong>Orbit Music</strong>, and <strong>SubScan</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">2. Information We Collect</h2>
            <p>
              Depending on the product and services used, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Account Information:</strong> Name, email address, and authentication details when users create or sign into an account.
              </li>
              <li>
                <strong>Device Information:</strong> Device model, operating system version, language preferences, and app version.
              </li>
              <li>
                <strong>Application Preferences:</strong> Settings, personalization options, and locally stored preferences.
              </li>
              <li>
                <strong>Diagnostic Information:</strong> Crash reports and technical logs used to improve stability and performance.
              </li>
              <li>
                <strong>Product-Specific Data:</strong> Information required to provide application functionality, such as medication schedules, music library preferences, or subscription tracking data.
              </li>
            </ul>
          </section>

          <section className="space-y-4 border-l border-zinc-800 pl-4 ml-1">
            <h2 className="text-base font-bold text-white tracking-tight uppercase tracking-wider text-[11px] text-zinc-400">3. Product Specific Details</h2>
            
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">MediSave (In Development)</h3>
              <p>
                The MediSave application helps users track medication schedules and log adherence statuses. To comply with healthcare classification standards, we enforce the following rules:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Offline-First Room Vaults:</strong> All personal medication descriptions, times, dosages, and compliance statuses are stored exclusively on your device inside an Android Room Database.</li>
                <li><strong>Caregiver Connections (Optional):</strong> If you choose to invite a caregiver, your Taken or Missed check-in logs synchronize with Firebase Cloud Firestore using secure TLS encryption.</li>
                <li><strong>No Medical Diagnostics:</strong> The app acts purely as a schedule organizer. We do not provide clinical diagnostics, medical advice, or treatment decisions.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Orbit Music (Live on Google Play Store)</h3>
              <p>
                Orbit Music is built to scan, index, and play your local music files. Data processing adheres strictly to the following parameters:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Local Cache:</strong> Playlists, favorites, playback preferences, recently played items, and cached music metadata are stored locally on the user&apos;s device to improve performance and user experience.</li>
                <li><strong>Audio Frequency Processing (RECORD_AUDIO):</strong> Used exclusively for the real-time music visualizer to translate audio frequencies into visual animations. All processing is done in volatile memory on-device; Orbit Music does not record, save, or upload any audio.</li>
                <li><strong>Storage Access (Media Library):</strong> Used strictly to scan, index, and play your local music files.</li>
                <li><strong>Data Protection:</strong> Orbit Music does not sell personal information to third parties. Any optional cloud synchronization features are protected using authenticated access controls and encrypted communications.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">SubScan (Beta Testing)</h3>
              <p>
                SubScan helps users monitor recurring subscriptions and digital service expenses.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>SMS Message Scanning:</strong> The App reads financial SMS messages locally on the user&apos;s device to detect recurring subscription payments (such as Netflix, Spotify, utilities, or other digital services).</li>
                <li><strong>Local Analysis:</strong> All analysis of your SMS messages and financial data happens locally on your device. Subscription-related information is processed solely to provide tracking, reminders, analytics, and budgeting features.</li>
                <li><strong>Data Sharing:</strong> Financial information is never sold to advertisers, marketing platforms, or unrelated third parties.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">4. Security</h2>
            <p>
              RK Dev Studios uses industry-standard security practices to protect user information. These measures may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Encrypted network communication (HTTPS/TLS)</li>
              <li>Secure authentication systems</li>
              <li>Cloud access controls and permission validation</li>
              <li>Local device storage protections</li>
              <li>Continuous monitoring of application stability and reliability</li>
            </ul>
            <p>
              While no system can guarantee absolute security, we continuously improve our security practices to protect user data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">5. Data Sharing & Advertising</h2>
            <p>
              RK Dev Studios does not utilize Advertising ID (AD_ID) permissions, AdMob tracking, or third-party marketing brokers. Your health, financial, and personal parameters are never shared or sold.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">6. Account Deletion Rights</h2>
            <p>
              You have the right to request deletion of all account credentials and remote caregiver logs at any time. Submit your request to <a href="mailto:beatbounce80@gmail.com" className="text-blue-400 hover:underline">beatbounce80@gmail.com</a>, and we will purge your remote records within 7 business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-white tracking-tight">7. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, data handling practices, or account deletion requests, please contact us:
            </p>
            <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2 text-xs font-mono text-zinc-400 leading-relaxed">
              <p className="font-bold text-white text-xs font-sans mb-1">RK Dev Studios</p>
              <p>Email: <a href="mailto:beatbounce80@gmail.com" className="text-blue-400 hover:underline">beatbounce80@gmail.com</a></p>
              <p>Website: <a href="https://rkdevstudios.mywebutils.online" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://rkdevstudios.mywebutils.online</a></p>
              <p>Support: <a href="https://rkdevstudios.mywebutils.online/support" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://rkdevstudios.mywebutils.online/support</a></p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
}
