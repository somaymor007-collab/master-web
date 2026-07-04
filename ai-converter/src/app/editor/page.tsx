"use client";

import { motion } from "framer-motion";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function EditorPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl space-y-6 pb-24">
      {/* Top Toolbar overlay */}
      <div className="glass px-4 py-2 rounded-2xl flex items-center gap-2 mb-4 sticky top-4 z-10 shadow-xl border border-black/10 dark:border-white/10">
         <select className="bg-transparent text-sm outline-none cursor-pointer pr-4 font-medium">
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Normal Text</option>
         </select>
         <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-2" />
         <ToolbarButton icon={<Bold size={16} />} />
         <ToolbarButton icon={<Italic size={16} />} />
         <ToolbarButton icon={<Underline size={16} />} />
         <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-2" />
         <ToolbarButton icon={<AlignLeft size={16} />} />
         <ToolbarButton icon={<AlignCenter size={16} />} />
         <ToolbarButton icon={<AlignRight size={16} />} />
      </div>

      {/* A4 Document Area */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl p-[20mm] mx-auto rounded-sm shrink-0 outline-none"
        contentEditable
        suppressContentEditableWarning
      >
        <h1 className="text-4xl font-bold mb-6 text-center font-serif">AI Generated Document</h1>
        <p className="text-lg leading-relaxed mb-4">
          Start typing here or paste your notes. Our AI will automatically format this into a professional document.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Features like margin adjustment, typography scales, and intelligent layout are already running in the background to ensure this looks perfect when exported to PDF.
        </p>

        <ul className="list-disc pl-8 text-lg leading-relaxed mb-4">
           <li>Intelligent Grammar Correction</li>
           <li>Automatic Table of Contents</li>
           <li>Smart Pagination</li>
        </ul>
      </motion.div>
    </div>
  );
}

function ToolbarButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
      {icon}
    </button>
  );
}
