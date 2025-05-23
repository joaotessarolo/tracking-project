import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthlyRoutesChart } from "@/components/monthly-routes-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { RecentActivity } from "@/components/recent-activity"
import { TopDrivers } from "@/components/top-drivers"

export default function Dashboard() {
  return (
    <div className="h-full w-full space-y-6 animate-in">
      <DashboardMetrics />

      <Tabs defaultValue="overview" className="space-y-4 w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="analytics">Análise</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-4 w-full">
          <div className="grid gap-4 md:grid-cols-7 w-full">
            <Card className="col-span-4 card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>Rotas mensais</CardTitle>
                  <CardDescription>Número total de rotas por mês</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="h-[350px] pt-4">
                <MonthlyRoutesChart />
              </CardContent>
            </Card>

            <Card className="col-span-3 card-hover">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Últimas 5 atividades registradas</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 w-full">
            <Card className="col-span-4 card-hover">
              <CardHeader>
                <CardTitle>Melhores Motoristas</CardTitle>
                <CardDescription>Baseado em desempenho e eficiência</CardDescription>
              </CardHeader>
              <CardContent>
                <TopDrivers />
              </CardContent>
            </Card>

            <Card className="col-span-3 card-hover">
              <CardHeader>
                <CardTitle>Status da Frota</CardTitle>
                <CardDescription>Visão geral dos veículos</CardDescription>
              </CardHeader>
              <CardContent className="h-[220px]">
                <div className="flex h-full flex-col justify-center">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-success">18</div>
                      <div className="text-sm text-muted-foreground">Ativos</div>
                    </div>
                    <div className="h-16 w-px bg-border"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-muted-foreground">2</div>
                      <div className="text-sm text-muted-foreground">Inativos</div>
                    </div>
                    <div className="h-16 w-px bg-border"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-warning-foreground">4</div>
                      <div className="text-sm text-muted-foreground">Manutenção</div>
                    </div>
                  </div>
                  <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-[75%] rounded-full bg-success"></div>
                  </div>
                  <div className="mt-2 text-center text-sm text-muted-foreground">75% da frota em operação</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="h-[600px] rounded-md border w-full">
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">Conteúdo de análise em desenvolvimento</p>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="h-[600px] rounded-md border w-full">
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">Conteúdo de relatórios em desenvolvimento</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
