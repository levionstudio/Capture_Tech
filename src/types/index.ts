export interface StatusCardData {
  title: string
  total: number
  icon: string
  statuses: StatusBreakdown[]
}

export interface StatusBreakdown {
  label: string
  count: number
  color: string
}

export interface CameraStatus {
  id: string
  branch: string
  subLocation: string
  status: 'Online' | 'Offline' | 'Under maintenance'
  lastSeen: string
}

export interface AgentStatus {
  id: string
  branch: string
  subLocation: string
  status: 'Online' | 'Offline'
  lastSeen: string
}

export interface HardDiskStatus {
  id: string
  branch: string
  subLocation: string
  status: 'Recording' | 'Not recording'
  lastSeen: string
}

export interface Event {
  id: number
  location: string
  branch: string
  type: string
  timestamp: string
  action: string
  actionStatus?: 'completed' | 'pending'
}

export interface EventTypeData {
  name: string
  count: number
  color: string
}

export interface LocationEventData {
  location: string
  events: {
    type: string
    count: number
    color: string
  }[]
}

export interface BranchPerformance {
  branch: string
  totalFootfall: number
  serviceAreaUnidentified: number
  managerAreaUnattended: number
}

export interface FootfallData {
  branch: string
  footfall: number
}

export interface HourlyFootfall {
  hour: string
  count: number
}

export type ModalType = 'camera' | 'agent' | 'harddisk' | 'footfall' | null
