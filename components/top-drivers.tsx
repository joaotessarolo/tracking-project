import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const drivers = [
  {
    name: "João Silva",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    performance: 98,
    routes: 145,
    status: "ativo",
  },
  {
    name: "Maria Oliveira",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MO",
    performance: 96,
    routes: 132,
    status: "ativo",
  },
  {
    name: "Ricardo Souza",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RS",
    performance: 95,
    routes: 128,
    status: "ativo",
  },
  {
    name: "Fernanda Lima",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "FL",
    performance: 93,
    routes: 120,
    status: "ativo",
  },
]

export function TopDrivers() {
  return (
    <div className="space-y-4">
      {drivers.map((driver, index) => (
        <div key={index} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
              {index + 1}
            </div>
            <Avatar className="h-9 w-9">
              <AvatarImage src={driver.avatar || "/placeholder.svg"} alt={driver.name} />
              <AvatarFallback>{driver.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{driver.name}</p>
              <p className="text-xs text-muted-foreground">{driver.routes} rotas</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-success/10 text-success">
              {driver.performance}%
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
