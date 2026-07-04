import { FloatingBackground } from "@/components/FloatingBackground";
import { Navbar } from "@/components/ui/Navbar";
import {
  FileBox,
  History,
  Settings,
  Star,
  UploadCloud,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex font-sans">
      <FloatingBackground />
      <Navbar />

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 pt-24 pb-6 px-4 glass border-r border-white/20 dark:border-white/10 hidden md:flex flex-col">
        <div className="flex-1 space-y-2">
          <SidebarLink href="/dashboard" icon={<LayoutDashboard />} label="Dashboard" active />
          <SidebarLink href="/dashboard/upload" icon={<UploadCloud />} label="Convert Files" />
          <SidebarLink href="/dashboard/recent" icon={<History />} label="Recent Files" />
          <SidebarLink href="/dashboard/favorites" icon={<Star />} label="Favorites" />
          <SidebarLink href="/editor" icon={<FileBox />} label="AI Editor" />
        </div>

        <div className="mt-auto">
          <SidebarLink href="/dashboard/settings" icon={<Settings />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-24 p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function SidebarLink({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active
        ? "bg-white/50 dark:bg-black/50 font-medium shadow-sm"
        : "hover:bg-white/30 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
    }`}>
      <span className="w-5 h-5">{icon}</span>
      {label}
    </Link>
  );
}
