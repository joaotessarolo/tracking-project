"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Map, Table, Truck } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserNav } from "@/components/user-nav"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: BarChart3,
  },
  {
    name: "Mapa",
    href: "/mapa",
    icon: Map,
  },
  {
    name: "Tabela",
    href: "/tabela",
    icon: Table,
  },
]

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar variant="inset">
          <SidebarHeader className="flex h-16 items-center border-b px-4">
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Truck className="h-5 w-5" />
              </div>
              {/* <span className="text-lg font-bold tracking-tight">RastreaTruck</span> */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className={cn("transition-all duration-200", pathname === item.href ? "font-medium" : "")}
                  >
                    <Link href={item.href}>
                      <item.icon
                        className={cn("h-5 w-5 transition-all", pathname === item.href ? "text-primary" : "")}
                      />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            {/* <div className="text-xs text-muted-foreground">© 2025 RastreaTruck</div> */}
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset className="flex flex-col w-full">
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h1 className="text-xl font-semibold tracking-tight">
              {navigation.find((item) => item.href === pathname)?.name || "Dashboard"}
            </h1>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 w-full h-[calc(100vh-4rem)] overflow-auto p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
