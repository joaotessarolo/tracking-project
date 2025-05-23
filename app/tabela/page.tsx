import { DriversTable } from "@/components/drivers-table"

export default function TablePage() {
  return (
    <div className="h-full w-full space-y-4 animate-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Motoristas</h2>
        <p className="text-muted-foreground">Gerencie e monitore todos os motoristas da frota</p>
      </div>
      <div className="h-[calc(100%-3.5rem)] w-full">
        <DriversTable />
      </div>
    </div>
  )
}
