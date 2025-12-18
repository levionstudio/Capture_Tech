import { CameraStatus, AgentStatus, HardDiskStatus, Event, EventTypeData, LocationEventData, BranchPerformance, HourlyFootfall, FootfallData } from '../types'

export const cameraStatuses: CameraStatus[] = [
  { id: 'CAM-001', branch: 'Kavoor', subLocation: "Manager's cabin", status: 'Offline', lastSeen: '2 mins ago' },
  { id: 'CAM-002', branch: 'Bejai', subLocation: 'Office cabin', status: 'Offline', lastSeen: '6 hours ago' },
  { id: 'CAM-003', branch: 'Bejai', subLocation: 'Office cabin', status: 'Under maintenance', lastSeen: '18 hours ago' },
  { id: 'CAM-004', branch: 'Bejai', subLocation: 'Office cabin', status: 'Under maintenance', lastSeen: '18 hours ago' },
  { id: 'CAM-005', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
  { id: 'CAM-006', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
]

export const agentStatuses: AgentStatus[] = [
  { id: 'AGT-001', branch: 'Kavoor', subLocation: "Manager's cabin", status: 'Offline', lastSeen: '2 mins ago' },
  { id: 'AGT-002', branch: 'Bejai', subLocation: 'Office cabin', status: 'Offline', lastSeen: '6 hours ago' },
  { id: 'AGT-003', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
  { id: 'AGT-004', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
  { id: 'AGT-005', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
  { id: 'AGT-006', branch: 'Bejai', subLocation: 'Office cabin', status: 'Online', lastSeen: '18 hours ago' },
]

export const hardDiskStatuses: HardDiskStatus[] = [
  { id: 'HD-001', branch: 'Kavoor', subLocation: "Manager's cabin", status: 'Not recording', lastSeen: '2 mins ago' },
  { id: 'HD-002', branch: 'Bejai', subLocation: 'Office cabin', status: 'Not recording', lastSeen: '6 hours ago' },
  { id: 'HD-003', branch: 'Bejai', subLocation: 'Office cabin', status: 'Recording', lastSeen: '18 hours ago' },
  { id: 'HD-004', branch: 'Bejai', subLocation: 'Office cabin', status: 'Recording', lastSeen: '18 hours ago' },
  { id: 'HD-005', branch: 'Bejai', subLocation: 'Office cabin', status: 'Recording', lastSeen: '18 hours ago' },
  { id: 'HD-006', branch: 'Bejai', subLocation: 'Office cabin', status: 'Recording', lastSeen: '18 hours ago' },
]

export const recentEvents: Event[] = [
  { id: 1, location: 'Kavoor', branch: 'Managing Cabin', type: 'Human intrusion', timestamp: '12:33:50', action: 'Assign' },
  { id: 2, location: 'Bejai', branch: 'Managing Cabin', type: 'Service area unidentified', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 3, location: 'Kavoor', branch: 'Managing Cabin', type: 'Manager area unattended', timestamp: '04:33:50', action: 'Assign' },
  { id: 4, location: 'Bejai', branch: 'Managing Cabin', type: 'Late entry', timestamp: '04:33:50', action: 'Assign' },
  { id: 5, location: 'Kavoor', branch: 'Managing Cabin', type: 'Early exit', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
]

export const eventTypeData: EventTypeData[] = [
  { name: 'Service area unidentified', count: 385, color: '#f59e0b' },
  { name: 'Manager area unattended', count: 320, color: '#eab308' },
  { name: 'Human intrusion', count: 280, color: '#ef4444' },
  { name: 'Late entry', count: 120, color: '#22c55e' },
  { name: 'Early close', count: 45, color: '#3b82f6' },
]

export const locationEventData: LocationEventData[] = [
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 85, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 65, color: '#eab308' },
      { type: 'Human intrusion', count: 45, color: '#ef4444' },
      { type: 'Late entry', count: 25, color: '#22c55e' },
      { type: 'Early close', count: 15, color: '#3b82f6' },
      { type: 'Footfall', count: 180, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 75, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 55, color: '#eab308' },
      { type: 'Human intrusion', count: 35, color: '#ef4444' },
      { type: 'Late entry', count: 20, color: '#22c55e' },
      { type: 'Early close', count: 10, color: '#3b82f6' },
      { type: 'Footfall', count: 150, color: '#06b6d4' },
    ],
  },
]

export const branchPerformanceData: BranchPerformance[] = [
  { branch: 'Kavoor', totalFootfall: 239, serviceAreaUnidentified: 12, managerAreaUnattended: 13 },
  { branch: 'Ullal', totalFootfall: 244, serviceAreaUnidentified: 13, managerAreaUnattended: 15 },
  { branch: 'Bejai', totalFootfall: 244, serviceAreaUnidentified: 13, managerAreaUnattended: 15 },
  { branch: 'Urwa', totalFootfall: 244, serviceAreaUnidentified: 13, managerAreaUnattended: 15 },
  { branch: 'Bejai', totalFootfall: 255, serviceAreaUnidentified: 18, managerAreaUnattended: 16 },
]

export const footfallPerBranch: FootfallData[] = [
  { branch: 'Bejai', footfall: 120 },
  { branch: 'Mallikatte', footfall: 160 },
  { branch: 'Ullal', footfall: 210 },
  { branch: 'Kadri', footfall: 95 },
  { branch: 'Urwa', footfall: 210 },
  { branch: 'Falnir', footfall: 75 },
  { branch: 'Kankanady', footfall: 195 },
  { branch: 'Padil', footfall: 165 },
  { branch: 'Bajpe', footfall: 175 },
  { branch: 'Kavoor', footfall: 190 },
  { branch: 'Attavara', footfall: 215 },
  { branch: 'Balmatta', footfall: 215 },
]

export const hourlyFootfallData: HourlyFootfall[] = [
  { hour: '9AM', count: 110 },
  { hour: '10AM', count: 205 },
  { hour: '11AM', count: 160 },
  { hour: '12AM', count: 90 },
  { hour: '1PM', count: 195 },
  { hour: '2PM', count: 65 },
  { hour: '3PM', count: 215 },
  { hour: '4PM', count: 170 },
  { hour: '5PM', count: 185 },
  { hour: '6PM', count: 210 },
  { hour: '7PM', count: 165 },
]

export const topFootfalls: FootfallData[] = [
  { branch: 'Kavoor', footfall: 1870 },
  { branch: 'Bejai', footfall: 1500 },
  { branch: 'Mallikatte', footfall: 1378 },
  { branch: 'Attavara', footfall: 1200 },
  { branch: 'Padil', footfall: 1178 },
]
