import { motion } from 'framer-motion'
import { LocationEventData } from '../../types'
import { Calendar, MoreVertical } from 'lucide-react'

interface LocationEventsChartProps {
  data: LocationEventData[]
}

const LocationEventsChart = ({ data }: LocationEventsChartProps) => {
  const maxValue = Math.max(...data.flatMap(location => location.events.map(e => e.count)))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Location-wise Events</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">06/12/2025</span>
            <Calendar size={16} className="text-gray-600" />
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <MoreVertical size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {data.map((location, locIndex) => (
          <div key={locIndex} className="flex items-center gap-4">
            <div className="w-24 text-sm text-gray-700 font-medium">{location.location}</div>
            <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden flex">
              {location.events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ width: 0 }}
                  animate={{ width: `${(event.count / maxValue) * 100}%` }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="h-full"
                  style={{ backgroundColor: event.color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 flex-wrap text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-gray-600">Service area unidentified</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-gray-600">Manager area unattended</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-gray-600">Human intrusion</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-600">Late entry</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-600">Early close</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <span className="text-gray-600">Footfall</span>
        </div>
      </div>
    </motion.div>
  )
}

export default LocationEventsChart
