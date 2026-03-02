import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { Search, Moon, Sun, Monitor, Download, Mail, User, Briefcase, FileText } from "lucide-react";
import { useSound } from "./SoundContext";
import { toast } from "sonner";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const { playPop, playClick } = useSound();

    // Toggle the menu when ⌘K or Ctrl+K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => {
                    if (!open) playPop();
                    return !open;
                });
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [playPop]);

    const runCommand = useCallback((command: () => unknown) => {
        playClick();
        setOpen(false);
        command();
    }, [playClick]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
            <div
                className="fixed inset-0 bg-zinc-950/20 dark:bg-zinc-950/60 backdrop-blur-sm transition-opacity"
                onClick={() => setOpen(false)}
            />

            <Command
                className="relative z-[201] w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col"
                shouldFilter={true}
            >
                <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
                    <Search className="w-5 h-5 text-zinc-400 mr-2" />
                    <Command.Input
                        autoFocus
                        className="w-full bg-transparent p-4 outline-none text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500"
                        placeholder="Type a command or search..."
                    />
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-none">
                    <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                        No results found.
                    </Command.Empty>

                    <Command.Group heading="Navigation" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2 py-3">
                        <Command.Item
                            onSelect={() => runCommand(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }))}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <User className="w-4 h-4" /> About
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Briefcase className="w-4 h-4" /> Projects
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Mail className="w-4 h-4" /> Contact
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Actions" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2 py-3">
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                navigator.clipboard.writeText("diogo@example.com");
                                toast.success("Email copied to clipboard!");
                            })}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Mail className="w-4 h-4" /> Copy Email
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                // Dummy resume link
                                window.open("#", "_blank");
                                toast.success("Downloading Resume...");
                            })}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Download className="w-4 h-4" /> Download Resume
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Theme" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 px-2 py-3">
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                document.documentElement.classList.remove('dark');
                                localStorage.theme = 'light';
                                toast.success("Light theme activated");
                            })}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Sun className="w-4 h-4" /> Light
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                document.documentElement.classList.add('dark');
                                localStorage.theme = 'dark';
                                toast.success("Dark theme activated");
                            })}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Moon className="w-4 h-4" /> Dark
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                localStorage.removeItem('theme');
                                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                                toast.success("System theme activated");
                            })}
                            className="flex items-center gap-2 px-3 py-3 mt-1 text-sm text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer data-[selected=true]:bg-zinc-100 dark:data-[selected=true]:bg-zinc-800"
                        >
                            <Monitor className="w-4 h-4" /> System
                        </Command.Item>
                    </Command.Group>
                </Command.List>

                <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span>Use</span>
                        <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-sans font-medium text-[10px]">↑</kbd>
                        <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-sans font-medium text-[10px]">↓</kbd>
                        <span>to navigate</span>
                        <span className="mx-2 text-zinc-300 dark:text-zinc-700">•</span>
                        <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-sans font-medium text-[10px]">Enter</kbd>
                        <span>to select</span>
                        <span className="mx-2 text-zinc-300 dark:text-zinc-700">•</span>
                        <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-sans font-medium text-[10px]">Esc</kbd>
                        <span>to close</span>
                    </div>
                </div>
            </Command>
        </div>
    );
}
