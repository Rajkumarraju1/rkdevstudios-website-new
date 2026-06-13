"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { 
  ArrowLeft, 
  Shield, 
  Database, 
  Users, 
  Heart, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Info
} from "lucide-react";

const screenshots = [
  { src: "/medisave-screenshot-dashboard.jpg", title: "Dashboard", desc: "Weekly adherence and daily checklists tracker." },
  { src: "/medisave-screenshot-reminder.jpg", title: "Reminder Screen", desc: "Configurable dosage time settings with custom repeat schedules." },
  { src: "/medisave-screenshot-map.jpg", title: "Pharmacy Map", desc: "Location visualizer mapping nearby clinical facilities." },
  { src: "/medisave-screenshot-profile.jpg", title: "Caregiver Monitoring", desc: "Setup connection code to link trusted family accounts." },
  { src: "/medisave-screenshot-alerts.jpg", title: "Analytics & Alerts Panel", desc: "Urgent notifications panel summarizing missed and taken schedules." }
];

export default function MediSaveProduct() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const navigatePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? 0 : prev === 0 ? screenshots.length - 1 : prev - 1));
    }
  }, [lightboxIndex]);

  const navigateNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? 0 : prev === screenshots.length - 1 ? 0 : prev + 1));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigatePrev();
      if (e.key === "ArrowRight") navigateNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, navigatePrev, navigateNext]);

  return (
    <div className="bg-[#09090b] text-zinc-300 min-h-screen pt-24 pb-16 flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* 1. Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">MediSave</h1>
            <span className="w-fit inline-flex items-center px-2.5 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              In Development
            </span>
          </div>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            A secure, offline-first medication manager designed to maximize adherence. Configures dosage timelines safely, schedules alarm manager warnings locally, and relays synchronization status reports to selected family caregivers.
          </p>
        </div>

        {/* Hero mockup slot */}
        <div className="w-full border border-[#1f1f27] bg-[#0c0c10] rounded-2xl p-6 sm:p-12 flex justify-center items-center overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none" />
          <div className="relative w-[260px] h-[520px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#0d0d12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10 transition-transform duration-550 hover:scale-[1.01]">
            <div className="absolute inset-0.5 border border-zinc-850 rounded-[22px] pointer-events-none z-20" />
            <Image 
              src="/medisave-screenshot-dashboard.jpg" 
              alt="MediSave Hero Dashboard" 
              fill 
              sizes="260px"
              priority
              className="object-cover z-10" 
            />
          </div>
        </div>

        {/* 2. Product Overview & Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-amber-400" /> Product Overview
            </h2>
            <div className="text-sm text-zinc-400 space-y-4 leading-relaxed">
              <p>
                MediSave acts as a personal health schedule auditor, facilitating active tracking of prescription checklists. It utilizes direct device-level execution patterns to trigger audio alerts exactly when medications are due.
              </p>
              <p>
                To provide support and safety loops without compromising patient privacy, individuals can choose to link accounts through secure authentication codes, enabling caregivers to track weekly compliance schedules dynamically.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Feature Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2.5">
                <Users className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Caregiver Connections</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">Encrypted sync triggers that automatically relay dosage compliance updates to trusted family profiles.</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2.5">
                <Database className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Room Caching</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">Local-first database layer ensuring that schedule triggers, compliance stats, and configurations operate without active internet.</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2.5">
                <Heart className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Adherence Statistics</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">Calculates percentage-based weekly index scores to help track recovery benchmarks safely over time.</p>
              </div>

              <div className="p-5 rounded-xl border border-[#1f1f27] bg-[#101014] space-y-2.5">
                <Shield className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Strict Isolation</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">No tracking analytics. MediSave is built strictly to serve medication management schedules with explicit credentials security.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Screenshot Gallery */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">Screenshot Gallery</h2>
            <p className="text-xs text-zinc-500">Click any interface preview below to display high-resolution visual layouts.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {screenshots.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group flex flex-col items-center gap-3 p-3.5 rounded-xl border border-[#1f1f27] bg-[#0c0c10] transition-all duration-300 hover:border-zinc-700 hover:bg-[#101014]"
              >
                <div className="relative w-full aspect-[9/19] rounded-lg overflow-hidden border border-zinc-850 bg-black">
                  <Image 
                    src={s.src} 
                    alt={s.title} 
                    fill 
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" 
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-[11px] font-bold text-white group-hover:text-amber-400 transition-colors">{s.title}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 4. Technical Specifications */}
        <div className="space-y-6 pt-4 border-t border-[#1f1f27]/40">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">Technical Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Language</span>
              <p className="font-semibold text-white">Kotlin</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Framework</span>
              <p className="font-semibold text-white">Jetpack Compose</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Local Cache</span>
              <p className="font-semibold text-white">SQLite via Room DB</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Cloud Sync</span>
              <p className="font-semibold text-white">Firebase Suite</p>
            </div>
          </div>
        </div>

        {/* 5. CTA Section */}
        <div className="w-full bg-gradient-to-r from-[#101014] to-[#15151e] border border-[#1f1f27] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/5 filter blur-[60px] pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Interested in early health builds?</h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              MediSave is undergoing early sandboxed evaluation. As soon as internal alpha builds compile for Play Console verification, we will release test group invitations.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#1f1f27] bg-[#0c0c10] hover:bg-[#121217] text-xs font-bold text-zinc-300 transition-colors">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal overlay */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav arrows */}
          <button 
            onClick={navigatePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={navigateNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Active Image container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="flex flex-col items-center max-w-[90vw] max-h-[80vh] space-y-4"
          >
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-2xl overflow-hidden border border-zinc-850 bg-black shadow-2xl">
              <Image 
                src={screenshots[lightboxIndex].src} 
                alt={screenshots[lightboxIndex].title} 
                fill 
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover" 
              />
            </div>
            
            {/* Title & Caption */}
            <div className="text-center max-w-md">
              <h3 className="text-sm font-bold text-white">{screenshots[lightboxIndex].title}</h3>
              <p className="text-[11px] text-zinc-400 mt-1">{screenshots[lightboxIndex].desc}</p>
              <span className="text-[9px] text-zinc-550 block mt-2">
                Image {lightboxIndex + 1} of {screenshots.length}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
