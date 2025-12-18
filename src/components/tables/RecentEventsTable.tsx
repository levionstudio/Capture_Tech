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
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">Event type</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">Priority</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">06/12/2025</span>
            <Calendar size={16} className="text-gray-600" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded">
            <Filter size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sr. No</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Event type</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time stamp</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <motion.tr
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4 text-sm text-gray-900">{event.id}</td>
                <td className="py-3 px-4">
                  <div className="text-sm font-medium text-gray-900">{event.location}</div>
                  <div className="text-xs text-gray-500">{event.branch}</div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">{event.timestamp}</td>
                <td className="py-3 px-4">
                  {event.actionStatus === 'completed' ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <span className="text-sm font-medium">{event.action}</span>
                      <Check size={16} />
                    </div>
                  ) : (
                    <button className="px-4 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded transition-colors">
                      {event.action}
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white font-medium text-sm hover:bg-blue-700">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm">
          3
        </button>
      </div>
    </motion.div>
  )
}

export default RecentEventsTable
