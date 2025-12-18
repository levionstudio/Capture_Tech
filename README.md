# Capture Tech Dashboard

A modern, responsive dashboard built with React, TypeScript, Tailwind CSS, and Framer Motion for monitoring camera systems, agents, hard disks, and footfall analytics.

## Features

- Real-time status monitoring for cameras, agents, and hard disks
- Interactive charts and graphs using Recharts
- Footfall analytics with hourly trends
- Location-wise event tracking
- Smooth animations with Framer Motion
- Fully responsive design
- Clean component architecture

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Vite** - Build tool
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Sidebar)
│   ├── cards/           # Status cards
│   ├── charts/          # Chart components
│   ├── modals/          # Modal dialogs
│   ├── tables/          # Data tables
│   └── Dashboard.tsx    # Main dashboard
├── data/                # Mock data
├── types/               # TypeScript types
└── styles/              # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Component Overview

### Status Cards
- Camera status monitoring
- Agent status tracking
- Hard disk status
- Footfall metrics

### Charts
- Overall events bar chart
- Location-wise events visualization
- Branch performance donut chart
- Footfall per branch bar chart
- Hourly footfall trends

### Modals
- Detailed camera status view
- Agent status details
- Hard disk status information
- Footfall analytics dashboard

### Tables
- Recent events table with filtering
- Pagination support
- Action tracking

## License

MIT
