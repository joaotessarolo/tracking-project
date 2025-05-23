"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MapPin, Clock, Truck, MoreHorizontal, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const data: Driver[] = [
  {
    id: "1",
    nome: "João Silva",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    tempoTrabalho: "3 anos",
    veiculo: "Caminhão - ABC-1234",
    localizacao: "São Paulo, SP",
    status: "ativo",
    ultimaAtualizacao: "10 minutos atrás",
  },
  {
    id: "2",
    nome: "Maria Oliveira",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MO",
    tempoTrabalho: "5 anos",
    veiculo: "Van - DEF-5678",
    localizacao: "Rio de Janeiro, RJ",
    status: "ativo",
    ultimaAtualizacao: "25 minutos atrás",
  },
  {
    id: "3",
    nome: "Carlos Santos",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "CS",
    tempoTrabalho: "2 anos",
    veiculo: "Caminhão - GHI-9012",
    localizacao: "Belo Horizonte, MG",
    status: "ativo",
    ultimaAtualizacao: "1 hora atrás",
  },
  {
    id: "4",
    nome: "Ana Pereira",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AP",
    tempoTrabalho: "1 ano",
    veiculo: "Van - JKL-3456",
    localizacao: "Curitiba, PR",
    status: "inativo",
    ultimaAtualizacao: "2 horas atrás",
  },
  {
    id: "5",
    nome: "Roberto Almeida",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RA",
    tempoTrabalho: "4 anos",
    veiculo: "Caminhão - MNO-7890",
    localizacao: "Salvador, BA",
    status: "ativo",
    ultimaAtualizacao: "30 minutos atrás",
  },
  {
    id: "6",
    nome: "Fernanda Lima",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "FL",
    tempoTrabalho: "2 anos",
    veiculo: "Van - PQR-1234",
    localizacao: "Fortaleza, CE",
    status: "ativo",
    ultimaAtualizacao: "45 minutos atrás",
  },
  {
    id: "7",
    nome: "Ricardo Souza",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RS",
    tempoTrabalho: "6 anos",
    veiculo: "Caminhão - STU-5678",
    localizacao: "Recife, PE",
    status: "ativo",
    ultimaAtualizacao: "15 minutos atrás",
  },
  {
    id: "8",
    nome: "Juliana Costa",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JC",
    tempoTrabalho: "3 anos",
    veiculo: "Van - VWX-9012",
    localizacao: "Brasília, DF",
    status: "inativo",
    ultimaAtualizacao: "3 horas atrás",
  },
  {
    id: "9",
    nome: "Marcelo Dias",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MD",
    tempoTrabalho: "1 ano",
    veiculo: "Caminhão - YZA-3456",
    localizacao: "Porto Alegre, RS",
    status: "ativo",
    ultimaAtualizacao: "50 minutos atrás",
  },
  {
    id: "10",
    nome: "Patrícia Gomes",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PG",
    tempoTrabalho: "4 anos",
    veiculo: "Van - BCD-7890",
    localizacao: "Manaus, AM",
    status: "ativo",
    ultimaAtualizacao: "1 hora atrás",
  },
]

type Driver = {
  id: string
  nome: string
  avatar: string
  initials: string
  tempoTrabalho: string
  veiculo: string
  localizacao: string
  status: "ativo" | "inativo"
  ultimaAtualizacao: string
}

const columns: ColumnDef<Driver>[] = [
  {
    accessorKey: "nome",
    header: "Motorista",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.original.avatar || "/placeholder.svg"} alt={row.original.nome} />
          <AvatarFallback>{row.original.initials}</AvatarFallback>
        </Avatar>
        <div className="font-medium">{row.getValue("nome")}</div>
      </div>
    ),
  },
  {
    accessorKey: "tempoTrabalho",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Tempo de trabalho
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span>{row.getValue("tempoTrabalho")}</span>
      </div>
    ),
  },
  {
    accessorKey: "veiculo",
    header: "Veículo",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Truck className="h-4 w-4 text-muted-foreground" />
        <span>{row.getValue("veiculo")}</span>
      </div>
    ),
  },
  {
    accessorKey: "localizacao",
    header: "Localização",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span>{row.getValue("localizacao")}</span>
      </div>
    ),
  },
  {
    accessorKey: "ultimaAtualizacao",
    header: "Última atualização",
    cell: ({ row }) => <div className="text-sm text-muted-foreground">{row.getValue("ultimaAtualizacao")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "ativo" ? "outline" : "secondary"}
          className={status === "ativo" ? "bg-success/10 text-success border-success/20" : ""}
        >
          <span className={`status-dot ${status === "ativo" ? "active" : "inactive"}`}></span>
          {status === "ativo" ? "Ativo" : "Inativo"}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const driver = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar motorista</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver histórico de rotas</DropdownMenuItem>
            <DropdownMenuItem>Contatar motorista</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DriversTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="flex flex-col h-full w-full space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="relative w-full max-w-sm">
              <Input
                placeholder="Filtrar motoristas..."
                value={(table.getColumn("nome")?.getFilterValue() as string) ?? ""}
                onChange={(event) => table.getColumn("nome")?.setFilterValue(event.target.value)}
                className="w-full pl-9"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="flex items-center gap-2 self-end">
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Filter className="h-4 w-4" />
                    Filtros
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={table.getColumn("status")?.getFilterValue() === "ativo"}
                    onCheckedChange={() => {
                      if (table.getColumn("status")?.getFilterValue() === "ativo") {
                        table.getColumn("status")?.setFilterValue(null)
                      } else {
                        table.getColumn("status")?.setFilterValue("ativo")
                      }
                    }}
                  >
                    Apenas ativos
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={table.getColumn("status")?.getFilterValue() === "inativo"}
                    onCheckedChange={() => {
                      if (table.getColumn("status")?.getFilterValue() === "inativo") {
                        table.getColumn("status")?.setFilterValue(null)
                      } else {
                        table.getColumn("status")?.setFilterValue("inativo")
                      }
                    }}
                  >
                    Apenas inativos
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    Colunas
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                          {column.id === "nome"
                            ? "Motorista"
                            : column.id === "tempoTrabalho"
                              ? "Tempo de trabalho"
                              : column.id === "veiculo"
                                ? "Veículo"
                                : column.id === "localizacao"
                                  ? "Localização"
                                  : column.id === "ultimaAtualizacao"
                                    ? "Última atualização"
                                    : column.id === "status"
                                      ? "Status"
                                      : column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-md border shadow-sm flex-1 overflow-hidden flex flex-col">
        <div className="overflow-auto flex-1">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-sm text-muted-foreground">
            Mostrando {table.getFilteredRowModel().rows.length} de {data.length} motoristas
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Próximo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
