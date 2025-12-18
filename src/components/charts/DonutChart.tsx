import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { BranchPerformance } from '../../types'
import { Calendar, MoreVertical } from 'lucide-react'

interface DonutChartProps {
  data: BranchPerformance[]
}

const DonutChart = ({ data }: DonutChartProps) => {
  const colors = ['#3b82f6', '#f59e0b', '#a855f7']

  const totalFootfall = data.reduce((sum, item) => sum + item.totalFootfall, 0)

  const chartData = data.map(item => ({
    name: item.branch,
    value: item.totalFootfall,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Underperforming Branches</h3>
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

      <div className="flex items-center gap-8">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-gray-600">Total</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-semibold text-gray-700">Branch</th>
                <th className="text-right py-2 font-semibold text-gray-700">Total footfall</th>
                <th className="text-right py-2 font-semibold text-gray-700">Service area unidentified</th>
                <th className="text-right py-2 font-semibold text-gray-700">Manager area unattended</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-2 text-gray-900">{item.branch}</td>
                  <td className="text-right text-gray-900">{item.totalFootfall}</td>
                  <td className="text-right text-gray-900">{item.serviceAreaUnidentified}</td>
                  <td className="text-right text-gray-900">{item.managerAreaUnattended}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-600">Footfall</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-gray-600">Service area unidentified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-600">Manager area unattended</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DonutChart
