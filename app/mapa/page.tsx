import { MapView } from "@/components/map-view"

export default function MapPage() {
  return (
    <div className="h-full w-full animate-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Mapa de Rastreamento</h2>
          <p className="text-muted-foreground">Visualize a localização em tempo real dos veículos</p>
        </div>
      </div>
      <div className="h-[calc(100%-3.5rem)] w-full">
        <MapView />
      </div>
    </div>
  )
}
