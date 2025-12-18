import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './layout/Sidebar'
import StatusCard from './cards/StatusCard'
import EventsBarChart from './charts/EventsBarChart'
import DonutChart from './charts/DonutChart'
import LocationEventsChart from './charts/LocationEventsChart'
import FootfallPerBranchChart from './charts/FootfallPerBranchChart'
import RecentEventsTable from './tables/RecentEventsTable'
import StatusModal from './modals/StatusModal'
import FootfallModal from './modals/FootfallModal'
import { ModalType } from '../types'
import {
  cameraStatuses,
  agentStatuses,
  hardDiskStatuses,
  recentEvents,
  eventTypeData,
  locationEventData,
  branchPerformanceData,
  footfallPerBranch,
  hourlyFootfallData,
  topFootfalls,
} from '../data/mockData'

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const cameraStatusData = {
    title: 'Camera status',
    total: 32,
    type: 'camera' as const,
    statuses: [
      { label: 'Online', count: 28, color: '#22c55e' },
      { label: 'Offline', count: 2, color: '#ef4444' },
      { label: 'Under maintainance', count: 2, color: '#3b82f6' },
    ],
  }

  const agentStatusData = {
    title: 'Agent status',
    total: 32,
    type: 'agent' as const,
    statuses: [
      { label: 'Online', count: 28, color: '#22c55e' },
      { label: 'Offline', count: 2, color: '#ef4444' },
    ],
  }

  const hardDiskStatusData = {
    title: 'Hard disk status',
    total: 32,
    type: 'harddisk' as const,
    statuses: [
      { label: 'Recording', count: 28, color: '#22c55e' },
      { label: 'Not recording', count: 2, color: '#ef4444' },
    ],
  }

  const footfallStatusData = {
    title: 'Footfall',
    total: 1132,
    type: 'footfall' as const,
    statuses: [{ label: 'Total footfall of all the branches', count: 1132, color: '#3b82f6' }],
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-4 gap-6 mb-8"
          >
            <StatusCard {...cameraStatusData} onClick={() => setActiveModal('camera')} />
            <StatusCard {...agentStatusData} onClick={() => setActiveModal('agent')} />
            <StatusCard {...hardDiskStatusData} onClick={() => setActiveModal('harddisk')} />
            <StatusCard {...footfallStatusData} onClick={() => setActiveModal('footfall')} />
          </motion.div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="col-span-2 space-y-6">
              <EventsBarChart data={eventTypeData} />
              <LocationEventsChart data={locationEventData} />
            </div>
            <div className="col-span-1">
              <RecentEventsTable events={recentEvents} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <DonutChart data={branchPerformanceData} />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <FootfallPerBranchChart data={footfallPerBranch} />
          </div>
        </div>
      </div>

      <StatusModal
        isOpen={activeModal === 'camera'}
        onClose={() => setActiveModal(null)}
        type="camera"
        data={cameraStatuses}
      />

      <StatusModal
        isOpen={activeModal === 'agent'}
        onClose={() => setActiveModal(null)}
        type="agent"
        data={agentStatuses}
      />

      <StatusModal
        isOpen={activeModal === 'harddisk'}
        onClose={() => setActiveModal(null)}
        type="harddisk"
        data={hardDiskStatuses}
      />

      <FootfallModal
        isOpen={activeModal === 'footfall'}
        onClose={() => setActiveModal(null)}
        hourlyData={hourlyFootfallData}
        topFootfalls={topFootfalls}
      />
    </div>
  )
}

export default Dashboard
