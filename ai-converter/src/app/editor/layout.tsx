import { FloatingBackground } from "@/components/FloatingBackground";
import { Navbar } from "@/components/ui/Navbar";
import {
  Settings2,
  Type,
  LayoutTemplate,
  Wand2,
  Download,
  Share2
} from "lucide-react";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-neutral-100 dark:bg-neutral-950">
      <FloatingBackground />
      <Navbar />

      <div className="flex-1 flex pt-24 max-w-[1600px] w-full mx-auto">
        {/* Left Toolbar */}
        <aside className="w-16 md:w-64 border-r border-black/10 dark:border-white/10 glass hidden sm:flex flex-col h-[calc(100vh-6rem)] sticky top-24">
          <div className="p-4 border-b border-black/10 dark:border-white/10">
            <h2 className="font-semibold text-sm hidden md:block">AI Document</h2>
          </div>
          <div className="p-2 space-y-2 flex-1 overflow-y-auto">
            <ToolButton icon={<Wand2 />} label="Generate AI" primary />
            <ToolButton icon={<LayoutTemplate />} label="Templates" />
            <ToolButton icon={<Type />} label="Text Tools" />
            <ToolButton icon={<Settings2 />} label="Page Setup" />
          </div>
        </aside>

        {/* Main Editor Area */}
        <main className="flex-1 h-[calc(100vh-6rem)] overflow-y-auto p-4 md:p-8 flex justify-center">
          {children}
        </main>

        {/* Right Sidebar (Properties) */}
        <aside className="w-72 border-l border-black/10 dark:border-white/10 glass hidden lg:flex flex-col h-[calc(100vh-6rem)] sticky top-24">
           <div className="p-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Properties</h2>
          </div>
          <div className="p-4 space-y-6 flex-1 overflow-y-auto">
             <div>
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Export Options</h3>
                <div className="grid grid-cols-2 gap-2">
                   <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors">
                      <Download size={14} /> PDF
                   </button>
                   <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors">
                      <Download size={14} /> DOCX
                   </button>
                </div>
             </div>

             <div>
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Share</h3>
                <button className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors">
                   <Share2 size={14} /> Share Link
                </button>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ToolButton({ icon, label, primary }: { icon: React.ReactNode; label: string, primary?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group ${
      primary
        ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
        : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
    }`}>
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span className="hidden md:block text-sm font-medium">{label}</span>
    </button>
  );
}
