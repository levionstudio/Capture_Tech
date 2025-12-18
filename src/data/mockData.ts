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
  { id: 6, location: 'Kavoor', branch: 'Managing Cabin', type: 'Human intrusion', timestamp: '12:33:50', action: 'Assign' },
  { id: 7, location: 'Bejai', branch: 'Managing Cabin', type: 'Service area unidentified', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 8, location: 'Kavoor', branch: 'Managing Cabin', type: 'Manager area unattended', timestamp: '04:33:50', action: 'Assign' },
  { id: 9, location: 'Bejai', branch: 'Managing Cabin', type: 'Late entry', timestamp: '04:33:50', action: 'Assign' },
  { id: 10, location: 'Kavoor', branch: 'Managing Cabin', type: 'Early exit', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 11, location: 'Kavoor', branch: 'Managing Cabin', type: 'Human intrusion', timestamp: '12:33:50', action: 'Assign' },
  { id: 12, location: 'Bejai', branch: 'Managing Cabin', type: 'Service area unidentified', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 13, location: 'Kavoor', branch: 'Managing Cabin', type: 'Manager area unattended', timestamp: '04:33:50', action: 'Assign' },
  { id: 14, location: 'Bejai', branch: 'Managing Cabin', type: 'Late entry', timestamp: '04:33:50', action: 'Assign' },
  { id: 15, location: 'Kavoor', branch: 'Managing Cabin', type: 'Early exit', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 16, location: 'Kavoor', branch: 'Managing Cabin', type: 'Human intrusion', timestamp: '12:33:50', action: 'Assign' },
  { id: 17, location: 'Bejai', branch: 'Managing Cabin', type: 'Service area unidentified', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 18, location: 'Kavoor', branch: 'Managing Cabin', type: 'Manager area unattended', timestamp: '04:33:50', action: 'Assign' },
  { id: 19, location: 'Bejai', branch: 'Managing Cabin', type: 'Late entry', timestamp: '04:33:50', action: 'Assign' },
  { id: 20, location: 'Kavoor', branch: 'Managing Cabin', type: 'Early exit', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 21, location: 'Kavoor', branch: 'Managing Cabin', type: 'Human intrusion', timestamp: '12:33:50', action: 'Assign' },
  { id: 22, location: 'Bejai', branch: 'Managing Cabin', type: 'Service area unidentified', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
  { id: 23, location: 'Kavoor', branch: 'Managing Cabin', type: 'Manager area unattended', timestamp: '04:33:50', action: 'Assign' },
  { id: 24, location: 'Bejai', branch: 'Managing Cabin', type: 'Late entry', timestamp: '04:33:50', action: 'Assign' },
  { id: 25, location: 'Kavoor', branch: 'Managing Cabin', type: 'Early exit', timestamp: '04:33:50', action: 'Assigned', actionStatus: 'completed' },
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
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 90, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 70, color: '#eab308' },
      { type: 'Human intrusion', count: 50, color: '#ef4444' },
      { type: 'Late entry', count: 30, color: '#22c55e' },
      { type: 'Early close', count: 20, color: '#3b82f6' },
      { type: 'Footfall', count: 190, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 70, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 50, color: '#eab308' },
      { type: 'Human intrusion', count: 30, color: '#ef4444' },
      { type: 'Late entry', count: 15, color: '#22c55e' },
      { type: 'Early close', count: 8, color: '#3b82f6' },
      { type: 'Footfall', count: 140, color: '#06b6d4' },
    ],
  },
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 80, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 60, color: '#eab308' },
      { type: 'Human intrusion', count: 40, color: '#ef4444' },
      { type: 'Late entry', count: 20, color: '#22c55e' },
      { type: 'Early close', count: 12, color: '#3b82f6' },
      { type: 'Footfall', count: 170, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 85, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 65, color: '#eab308' },
      { type: 'Human intrusion', count: 45, color: '#ef4444' },
      { type: 'Late entry', count: 25, color: '#22c55e' },
      { type: 'Early close', count: 15, color: '#3b82f6' },
      { type: 'Footfall', count: 160, color: '#06b6d4' },
    ],
  },
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 95, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 75, color: '#eab308' },
      { type: 'Human intrusion', count: 55, color: '#ef4444' },
      { type: 'Late entry', count: 35, color: '#22c55e' },
      { type: 'Early close', count: 25, color: '#3b82f6' },
      { type: 'Footfall', count: 200, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 65, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 45, color: '#eab308' },
      { type: 'Human intrusion', count: 25, color: '#ef4444' },
      { type: 'Late entry', count: 10, color: '#22c55e' },
      { type: 'Early close', count: 5, color: '#3b82f6' },
      { type: 'Footfall', count: 130, color: '#06b6d4' },
    ],
  },
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 88, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 68, color: '#eab308' },
      { type: 'Human intrusion', count: 48, color: '#ef4444' },
      { type: 'Late entry', count: 28, color: '#22c55e' },
      { type: 'Early close', count: 18, color: '#3b82f6' },
      { type: 'Footfall', count: 185, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 72, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 52, color: '#eab308' },
      { type: 'Human intrusion', count: 32, color: '#ef4444' },
      { type: 'Late entry', count: 18, color: '#22c55e' },
      { type: 'Early close', count: 12, color: '#3b82f6' },
      { type: 'Footfall', count: 145, color: '#06b6d4' },
    ],
  },
  {
    location: 'Bejai',
    events: [
      { type: 'Service area unidentified', count: 92, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 72, color: '#eab308' },
      { type: 'Human intrusion', count: 52, color: '#ef4444' },
      { type: 'Late entry', count: 32, color: '#22c55e' },
      { type: 'Early close', count: 22, color: '#3b82f6' },
      { type: 'Footfall', count: 195, color: '#06b6d4' },
    ],
  },
  {
    location: 'Vamanjoor',
    events: [
      { type: 'Service area unidentified', count: 68, color: '#f59e0b' },
      { type: 'Manager area unattended', count: 48, color: '#eab308' },
      { type: 'Human intrusion', count: 28, color: '#ef4444' },
      { type: 'Late entry', count: 12, color: '#22c55e' },
      { type: 'Early close', count: 6, color: '#3b82f6' },
      { type: 'Footfall', count: 135, color: '#06b6d4' },
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
