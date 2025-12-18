import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { CameraStatus, AgentStatus, HardDiskStatus } from '../../types'

interface StatusModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'camera' | 'agent' | 'harddisk'
  data: CameraStatus[] | AgentStatus[] | HardDiskStatus[]
}

const StatusModal = ({ isOpen, onClose, type, data }: StatusModalProps) => {
  const getTitle = () => {
    switch (type) {
      case 'camera':
        return 'Camera Status'
      case 'agent':
        return 'Agent Status'
      case 'harddisk':
        return 'Hard disk Status'
    }
  }

  const getStatusCounts = () => {
    if (type === 'camera') {
      const cameraData = data as CameraStatus[]
      return {
        total: cameraData.length,
        online: cameraData.filter(d => d.status === 'Online').length,
        offline: cameraData.filter(d => d.status === 'Offline').length,
        maintenance: cameraData.filter(d => d.status === 'Under maintenance').length,
      }
    } else if (type === 'agent') {
      const agentData = data as AgentStatus[]
      return {
        total: agentData.length,
        online: agentData.filter(d => d.status === 'Online').length,
        offline: agentData.filter(d => d.status === 'Offline').length,
      }
    } else {
      const diskData = data as HardDiskStatus[]
      return {
        total: diskData.length,
        recording: diskData.filter(d => d.status === 'Recording').length,
        notRecording: diskData.filter(d => d.status === 'Not recording').length,
      }
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online':
      case 'Recording':
        return 'bg-green-100 text-green-700'
      case 'Offline':
      case 'Not recording':
        return 'bg-red-100 text-red-700'
      case 'Under maintenance':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const counts = getStatusCounts()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50 w-full max-w-2xl max-h-[80vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{getTitle()}</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Total {type === 'camera' ? 'Cameras' : type === 'agent' ? 'Agents' : 'Hard disks'}</div>
                  <div className="text-3xl font-bold text-gray-900">{counts.total}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{type === 'harddisk' ? 'Recording' : 'Online'}</div>
                  <div className="text-3xl font-bold text-green-600">{type === 'harddisk' ? counts.recording : counts.online}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">{type === 'harddisk' ? 'Not Recording' : 'Offline'}</div>
                  <div className="text-3xl font-bold text-red-600">{type === 'harddisk' ? counts.notRecording : counts.offline}</div>
                </div>
                {type === 'camera' && (
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Under Maintainance</div>
                    <div className="text-3xl font-bold text-blue-600">{counts.maintenance}</div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Overall Status</h3>
              </div>

              <div className="overflow-y-auto max-h-96">
                <table className="w-full">
                  <thead className="sticky top-0 bg-white border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        {type === 'camera' ? 'Camera ID' : type === 'agent' ? 'Agent ID' : 'Harddisk ID'}
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Branch</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sub-location</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2">
                          Status
                          <ChevronDown size={16} />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 text-sm text-gray-900">{item.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{item.branch}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{item.subLocation}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{item.lastSeen}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default StatusModal
