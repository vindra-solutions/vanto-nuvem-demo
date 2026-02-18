# Demo BI en Español (RYSE)

Demo web estática con 4 dashboards:

- Dashboard Ejecutivo
- Dashboard Comercial
- Dashboard Logística
- Dashboard Recursos Humanos

Incluye:

- Sidebar estilo enterprise con usuario en esquina inferior izquierda.
- Filtros por dashboard.
- Scorecards, gráficas y tablas con semáforo.
- Datos dummy coherentes (ventas, órdenes, AOV, margen, inventario, OTD/OTIF, RH).

## Stack

- HTML + CSS + JavaScript (vanilla)
- [Apache ECharts](https://echarts.apache.org/en/index.html) por CDN

## Ejecutar

Opción 1 (rápido):

- Abrir `index.html` en el navegador.

Opción 2 (recomendado):

```bash
python3 -m http.server 5173
```

Luego abrir: `http://localhost:5173`

## Notas

- Requiere internet para cargar ECharts desde CDN.
- Diseño optimizado para desktop y responsive en tablet/móvil.
