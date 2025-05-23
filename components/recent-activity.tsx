import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const activities = [
  {
    user: {
      name: "João Silva",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    action: "iniciou uma nova rota",
    target: "São Paulo → Rio de Janeiro",
    time: "há 10 minutos",
  },
  {
    user: {
      name: "Maria Oliveira",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MO",
    },
    action: "completou a entrega",
    target: "Pedido #45678",
    time: "há 25 minutos",
  },
  {
    user: {
      name: "Carlos Santos",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CS",
    },
    action: "reportou um problema",
    target: "Veículo STU-5678",
    time: "há 1 hora",
  },
  {
    user: {
      name: "Ana Pereira",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AP",
    },
    action: "atualizou o status",
    target: "Rota #789",
    time: "há 2 horas",
  },
  {
    user: {
      name: "Roberto Almeida",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RA",
    },
    action: "adicionou combustível",
    target: "Caminhão MNO-7890",
    time: "há 3 horas",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-4 rounded-lg p-2 transition-colors",
            index === 0 ? "bg-muted/50" : "hover:bg-muted/50",
          )}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span> {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">{activity.target}</p>
          </div>
          <div className="whitespace-nowrap text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
