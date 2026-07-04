"use client";

import { PremiumCard } from "@/components/PremiumCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { UploadCloud, File, Video, Music, Archive, Code, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Convert Files</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Drag and drop your files here or click to browse.</p>
      </div>

      {/* Upload Zone */}
      <PremiumCard
        className={`border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-20 text-center cursor-pointer ${
          isDragging
            ? "border-blue-500 bg-blue-500/5"
            : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
        }`}
        onDragOver={(e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); }}
      >
        <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
           <UploadCloud className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Drop files here to convert</h3>
        <p className="text-neutral-500 mb-8 max-w-sm">
          Support for Documents, Images, Videos, Audio, Archives, and Code files up to 2GB.
        </p>
        <AnimatedButton>Browse Files</AnimatedButton>
      </PremiumCard>

      {/* Supported Formats */}
      <div>
        <h3 className="text-xl font-bold mb-6">Supported Formats</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <FormatCategory icon={<File />} title="Documents" formats="PDF, DOCX, TXT..." color="text-blue-500" bg="bg-blue-500/10" />
          <FormatCategory icon={<ImageIcon />} title="Images" formats="PNG, JPG, WEBP..." color="text-fuchsia-500" bg="bg-fuchsia-500/10" />
          <FormatCategory icon={<Video />} title="Videos" formats="MP4, AVI, MOV..." color="text-rose-500" bg="bg-rose-500/10" />
          <FormatCategory icon={<Music />} title="Audio" formats="MP3, WAV, OGG..." color="text-violet-500" bg="bg-violet-500/10" />
          <FormatCategory icon={<Archive />} title="Archives" formats="ZIP, RAR, 7Z..." color="text-amber-500" bg="bg-amber-500/10" />
          <FormatCategory icon={<Code />} title="Code" formats="JSON, XML, CSV..." color="text-emerald-500" bg="bg-emerald-500/10" />
        </div>
      </div>
    </div>
  );
}

function FormatCategory({ icon, title, formats, color, bg }: { icon: React.ReactNode, title: string, formats: string, color: string, bg: string }) {
  return (
    <div className="glass-card p-4 rounded-2xl flex flex-col items-start gap-3 hover:scale-105 transition-transform cursor-default">
      <div className={`p-2 rounded-lg ${bg} ${color}`}>
        <div className="w-5 h-5">{icon}</div>
      </div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-neutral-500">{formats}</p>
      </div>
    </div>
  );
}
