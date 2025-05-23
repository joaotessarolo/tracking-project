"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MapPin, Clock, Fuel, RotateCw } from "lucide-react"

const MapWithNoSSR = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <RotateCw className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Carregando mapa...</p>
      </div>
    </div>
  ),
})

export function MapView() {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)

  return (
    <div className="grid h-full w-full grid-rows-[auto_1fr] gap-4">
      <Card className="border shadow-sm">
        <CardContent className="flex items-center justify-between p-3">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar veículo por placa ou motorista..." className="w-full pl-9" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            <Tabs defaultValue="todos">
              <TabsList className="grid w-[300px] grid-cols-3">
                <TabsTrigger value="todos">Todos (24)</TabsTrigger>
                <TabsTrigger value="ativos">Ativos (18)</TabsTrigger>
                <TabsTrigger value="parados">Parados (6)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <div className="grid h-full w-full grid-cols-1 gap-4 lg:grid-cols-[1fr_250px]">
        <Card className="h-full w-full overflow-hidden border shadow-sm">
          <CardContent className="p-0 h-full w-full">
            <div className="h-full w-full rounded-md">
              <MapWithNoSSR onSelectVehicle={setSelectedVehicle} />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {selectedVehicle ? (
            <Card className="border shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Detalhes do Veículo</CardTitle>
                  <Badge
                    variant={
                      selectedVehicle.status === "Em trânsito"
                        ? "default"
                        : selectedVehicle.status === "Parado"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {selectedVehicle.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Placa</p>
                      <p className="font-medium">{selectedVehicle.placa}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                      <p className="font-medium">{selectedVehicle.tipo}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Motorista</p>
                    <p className="font-medium">{selectedVehicle.motorista}</p>
                  </div>

                  <div className="rounded-md bg-muted p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Localização atual</p>
                    </div>
                    <p className="text-sm">São Paulo, SP - Brasil</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Atualizado {selectedVehicle.ultimaAtualizacao}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-md bg-muted p-3">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <Fuel className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">Combustível</p>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div className="h-full w-[65%] rounded-full bg-success"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">65% restante</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Velocidade</p>
                      <p className="text-lg font-bold">
                        {selectedVehicle.status === "Em trânsito" ? "72 km/h" : "0 km/h"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="w-full">Ver detalhes</Button>
                    <Button variant="outline" className="w-full">
                      Contatar motorista
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border shadow-sm">
              <CardContent className="flex h-[300px] flex-col items-center justify-center p-6 text-center">
                <MapPin className="mb-2 h-12 w-12 text-muted-foreground" />
                <h3 className="text-lg font-medium">Nenhum veículo selecionado</h3>
                <p className="text-sm text-muted-foreground">
                  Clique em um marcador no mapa para ver os detalhes do veículo
                </p>
              </CardContent>
            </Card>
          )}

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Resumo da Frota</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-success">18</p>
                    <p className="text-xs text-muted-foreground">Em trânsito</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-muted-foreground">4</p>
                    <p className="text-xs text-muted-foreground">Parados</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-warning-foreground">2</p>
                    <p className="text-xs text-muted-foreground">Manutenção</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Total de veículos</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Distância percorrida hoje</span>
                    <span className="font-medium">1.245 km</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Entregas realizadas</span>
                    <span className="font-medium">32</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
