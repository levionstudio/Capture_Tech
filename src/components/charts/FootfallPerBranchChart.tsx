import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FootfallData } from '../../types'
import { Calendar, ChevronRight, MoreVertical } from 'lucide-react'

interface FootfallPerBranchChartProps {
  data: FootfallData[]
}

const FootfallPerBranchChart = ({ data }: FootfallPerBranchChartProps) => {
  const chartData = data.map(item => ({
    branch: item.branch,
    footfall: item.footfall,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Footfall per Branch</h3>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">Sort by</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-700">06/12/2025</span>
            <Calendar size={16} className="text-gray-600" />
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <MoreVertical size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="branch" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="footfall" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-50">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    </motion.div>
  )
}

export default FootfallPerBranchChart
