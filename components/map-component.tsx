"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const vehiclesData = [
  {
    id: 1,
    placa: "ABC-1234",
    motorista: "João Silva",
    tipo: "Caminhão",
    status: "Em trânsito",
    ultimaAtualizacao: "10:30",
    position: [-23.5505, -46.6333],
  },
  {
    id: 2,
    placa: "DEF-5678",
    motorista: "Maria Oliveira",
    tipo: "Van",
    status: "Parado",
    ultimaAtualizacao: "09:45",
    position: [-23.5666, -46.65],
  },
  {
    id: 3,
    placa: "GHI-9012",
    motorista: "Carlos Santos",
    tipo: "Caminhão",
    status: "Em entrega",
    ultimaAtualizacao: "11:15",
    position: [-23.58, -46.64],
  },
]

function MapCenter({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.setView(center, 13)
  }, [center, map])
  return null
}

export default function MapComponent({
  onSelectVehicle,
}: {
  onSelectVehicle: (vehicle: any) => void
}) {
  const [center] = useState<[number, number]>([-23.5505, -46.6333])

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  const createCustomIcon = (status: string) => {
    const color = status === "Em trânsito" ? "#22c55e" : status === "Parado" ? "#64748b" : "#f59e0b"

    return L.divIcon({
      className: "custom-marker",
      html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px ${color}40;"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8],
    })
  }

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapCenter center={center} />

      {vehiclesData.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={vehicle.position}
          icon={createCustomIcon(vehicle.status)}
          eventHandlers={{
            click: () => {
              onSelectVehicle(vehicle)
            },
          }}
        >
          <Popup className="custom-popup">
            <div className="p-1">
              <h3 className="font-bold">{vehicle.placa}</h3>
              <p className="text-sm">Motorista: {vehicle.motorista}</p>
              <p className="text-sm">Veículo: {vehicle.tipo}</p>
              <p className="text-sm">Status: {vehicle.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
