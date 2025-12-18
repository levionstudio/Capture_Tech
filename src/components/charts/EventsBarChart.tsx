import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { EventTypeData } from '../../types'
import { Calendar, MoreVertical } from 'lucide-react'

interface EventsBarChartProps {
  data: EventTypeData[]
}

const EventsBarChart = ({ data }: EventsBarChartProps) => {
  const chartData = data.map(item => ({
    name: item.name,
    value: item.count,
    fill: item.color,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Overall Events Count</h3>
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

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={150} />
          <Tooltip />
          <Bar dataKey="value" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default EventsBarChart
