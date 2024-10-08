"use client"

import Image from "next/image"
import { Bell, MoonIcon, Search, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function NavbarComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full flex items-center overflow-x-hidden justify-between p-4 dark:bg-gray-900">
      <div className="relative flex-grow max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-3 h-5 text-muted-foreground" />
        </div>
        <input
          type="search"
          className="w-full p-2 pl-10 dark:text-white text-sm text-foreground border border-input rounded-lg dark:bg-gray-900 focus:ring-primary focus:border-primary"
          placeholder="Search for news and funds..."
          required
        />
      </div>
      <div className="flex items-center space-x-4 ml-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <div className="relative">
          <Image src="/Group 279.png" alt="bell" width={39} height={39} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-destructive">
            <span className="sr-only">Notifications</span>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/elips.png"
            alt="Profile picture"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-Poppins font-medium text-foreground hidden sm:inline-block">
            Rayford Chenail
            <p className="text-xs text-muted-foreground font-extralight">
              rayfordchenail@mail.com
            </p>
          </span>
        </div>
      </div>
    </nav>
  )
}