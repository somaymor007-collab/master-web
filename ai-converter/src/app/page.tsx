import { FloatingBackground } from "@/components/FloatingBackground";
import { PremiumCard } from "@/components/PremiumCard";
import { Navbar } from "@/components/ui/Navbar";
import { AnimatedButton } from "@/components/AnimatedButton";
import Link from "next/link";
import { FileUp, FileType, Wand2, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      <FloatingBackground />
      <Navbar />

      <main className="flex-1 flex flex-col items-center pt-32 pb-16 px-6">

        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center mt-12 mb-32 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neutral-200 dark:border-neutral-800 text-sm font-medium animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            AI-Powered Document Conversion is Here
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl animate-fade-in-up animation-delay-100">
            Convert Files with <br/>
            <span className="text-gradient-primary">Apple-level Simplicity.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            The premium, modern file converter that feels like magic. Fast, secure, and powered by artificial intelligence. Experience Figma-like fluidity for your documents.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
            <Link href="/dashboard">
              <AnimatedButton size="lg" className="w-full sm:w-auto">
                Start Converting <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
            </Link>
            <Link href="/editor">
               <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto">
                 Try AI Editor
               </AnimatedButton>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 pt-12 opacity-60 text-sm font-medium text-neutral-600 dark:text-neutral-400 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> 120 FPS Animations</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Secure & Private</div>
            <div className="flex items-center gap-2"><Wand2 className="w-4 h-4" /> AI Powered</div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full max-w-7xl mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Premium Features</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">Designed for speed, crafted for elegance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <FileUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast Uploads</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Experience instant file processing with our edge network. Drag and drop any file format with zero latency.
              </p>
            </PremiumCard>

            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-6">
                <FileType className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Universal Formats</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Support for over 500+ file formats. PDF, DOCX, JPG, MP4, and more. If it exists, we can convert it.
              </p>
            </PremiumCard>

            <PremiumCard>
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-500 flex items-center justify-center mb-6">
                <Wand2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Document Editor</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Paste your notes and watch AI automatically generate beautiful A4 documents, resumes, and reports.
              </p>
            </PremiumCard>
          </div>
        </section>
      </main>
    </div>
  );
}
