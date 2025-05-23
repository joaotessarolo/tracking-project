import { ArrowRightIcon, ArrowUpIcon, DollarSignIcon, TruckIcon, UsersIcon, RouteIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="card-hover">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lucros</CardTitle>
          <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 45.231,89</div>
          <div className="flex items-center space-x-2 text-xs text-success">
            <ArrowUpIcon className="h-3 w-3" />
            <span>+20.1%</span>
            <span className="text-muted-foreground">em relação ao mês anterior</span>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Motoristas</CardTitle>
          <UsersIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <div className="flex items-center space-x-2 text-xs text-success">
            <ArrowUpIcon className="h-3 w-3" />
            <span>+2</span>
            <span className="text-muted-foreground">novos motoristas este mês</span>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Rotas diárias</CardTitle>
          <RouteIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">38</div>
          <div className="flex items-center space-x-2 text-xs text-success">
            <ArrowUpIcon className="h-3 w-3" />
            <span>+12.5%</span>
            <span className="text-muted-foreground">em relação à semana passada</span>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Veículos ativos</CardTitle>
          <TruckIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <div className="flex items-center space-x-2 text-xs">
            <ArrowRightIcon className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">92% da frota em operação</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
