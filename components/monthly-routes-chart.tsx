"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  { name: "Jan", rotas: 120 },
  { name: "Fev", rotas: 145 },
  { name: "Mar", rotas: 162 },
  { name: "Abr", rotas: 158 },
  { name: "Mai", rotas: 175 },
  { name: "Jun", rotas: 190 },
  { name: "Jul", rotas: 210 },
  { name: "Ago", rotas: 205 },
  { name: "Set", rotas: 220 },
  { name: "Out", rotas: 240 },
  { name: "Nov", rotas: 235 },
  { name: "Dez", rotas: 260 },
]

export function MonthlyRoutesChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <defs>
          <linearGradient id="colorRoutes" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          dy={10}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
          dx={-10}
        />
        <Tooltip
          cursor={{ fill: "hsl(var(--muted)/0.1)" }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-3 shadow-md">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Mês</span>
                      <span className="font-bold text-foreground">{payload[0].payload.name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Rotas</span>
                      <span className="font-bold text-primary">{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="rotas" fill="url(#colorRoutes)" radius={[4, 4, 0, 0]} maxBarSize={60} animationDuration={1500} />
      </BarChart>
    </ResponsiveContainer>
  )
}
