import Link from "next/link";
import { Layers } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#18181b] bg-[#000000] relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Links Column Grid (4-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Column 1: Company */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-5 h-5 rounded bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                <Layers className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-xs tracking-tight text-white">
                RK Dev Studios
              </span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
              RK Dev Studios develops secure software products for healthcare, music, productivity, and subscription management. Our applications are designed around privacy, reliability, and long-term user trust.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/medisave" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  MediSave
                </Link>
              </li>
              <li>
                <Link href="/products/orbit-music" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  Orbit Music
                </Link>
              </li>
              <li>
                <Link href="/products/subscan" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  SubScan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="text-white font-semibold">RK Dev Studios</li>
              <li>Nellore, Andhra Pradesh – 524002</li>
              <li>India</li>
              <li>
                <a href="mailto:rajkumarraju60433@gmail.com" className="font-semibold text-zinc-300 hover:text-white transition-colors block mt-1">
                  rajkumarraju60433@gmail.com
                </a>
              </li>
              <li className="text-zinc-500 pt-1 text-[11px]">
                Response targets: 24–48 hours
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Panel */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-500">
            &copy; {currentYear} RK Dev Studios. All Rights Reserved.
          </p>
          <span className="text-[11px] text-zinc-650">
            Official Developer Organization Portal
          </span>
        </div>

      </div>
    </footer>
  );
}
