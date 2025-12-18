import { motion } from 'framer-motion'
import { Event } from '../../types'
import { Calendar, Filter, ChevronDown, Check } from 'lucide-react'

interface RecentEventsTableProps {
  events: Event[]
}

const RecentEventsTable = ({ events }: RecentEventsTableProps) => {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Human intrusion':
        return 'bg-red-100 text-red-700'
      case 'Service area unidentified':
        return 'bg-orange-100 text-orange-700'
      case 'Manager area unattended':
        return 'bg-yellow-100 text-yellow-700'
      case 'Late entry':
        return 'bg-green-100 text-green-700'
      case 'Early exit':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-lg shadow-md p-4 flex flex-col"
      style={{ height: 'calc(100vh - 220px)' }}
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900 mb-3">Recent Events</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-2 py-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-xs text-gray-700">Event type</span>
            <ChevronDown size={14} className="text-gray-600" />
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-xs text-gray-700">Priority</span>
            <ChevronDown size={14} className="text-gray-600" />
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-xs text-gray-700">06/12/2025</span>
            <Calendar size={14} className="text-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-700">Sr. No</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-700">Location</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-700">Event type</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-700">Time stamp</th>
              <th className="text-left py-3 px-2 text-xs font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <motion.tr
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-2 px-2 text-xs text-gray-900">{event.id}</td>
                <td className="py-2 px-2">
                  <div className="text-xs font-medium text-gray-900">{event.location}</div>
                  <div className="text-xs text-gray-500">{event.branch}</div>
                </td>
                <td className="py-2 px-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </td>
                <td className="py-2 px-2 text-xs text-gray-900">{event.timestamp}</td>
                <td className="py-2 px-2">
                  {event.actionStatus === 'completed' ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <span className="text-xs font-medium">{event.action}</span>
                      <Check size={14} />
                    </div>
                  ) : (
                    <button className="px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      {event.action}
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t">
        <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-600 text-white font-medium text-xs hover:bg-blue-700">
          1
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-xs">
          2
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-xs">
          3
        </button>
      </div>
    </motion.div>
  )
}

export default RecentEventsTable
