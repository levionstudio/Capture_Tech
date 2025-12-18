import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, ChevronDown } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { HourlyFootfall, FootfallData } from '../../types'

interface FootfallModalProps {
  isOpen: boolean
  onClose: () => void
  hourlyData: HourlyFootfall[]
  topFootfalls: FootfallData[]
}

const FootfallModal = ({ isOpen, onClose, hourlyData, topFootfalls }: FootfallModalProps) => {
  const chartData = hourlyData.map(item => ({
    hour: item.hour,
    count: item.count,
  }))

  const totalToday = 1500
  const totalWeek = 6500
  const totalMonth = 54000
  const peakHour = '1.00- 2.00PM'

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl z-50 w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Footfall Analytics</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="text-gray-600 font-medium mb-2">Today</div>
                  <div className="text-4xl font-bold text-blue-600">{totalToday}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium mb-2">This Week</div>
                  <div className="text-4xl font-bold text-green-600">{totalWeek}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium mb-2">This Month</div>
                  <div className="text-4xl font-bold text-orange-600">{totalMonth}</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium mb-2">Peak Hour</div>
                  <div className="text-2xl font-bold text-gray-900">{peakHour}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Hourly Footfall</h3>
                      <div className="flex items-center gap-3">
                        <div className="px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white bg-white">
                          <span className="text-sm text-gray-700">All Branches</span>
                          <ChevronDown size={16} className="inline ml-2 text-gray-600" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white bg-white">
                          <span className="text-sm text-gray-700">06/12/2025</span>
                          <Calendar size={16} className="text-gray-600" />
                        </div>
                      </div>
                    </div>

                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Top Footfalls</h3>
                    <div className="px-3 py-1.5 border border-gray-300 rounded cursor-pointer hover:bg-white bg-white">
                      <span className="text-sm text-gray-700">Today</span>
                      <ChevronDown size={16} className="inline ml-2 text-gray-600" />
                    </div>
                  </div>

                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 text-sm font-semibold text-gray-700">Rank</th>
                        <th className="text-left py-3 text-sm font-semibold text-gray-700">Branch</th>
                        <th className="text-right py-3 text-sm font-semibold text-gray-700">Footfall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topFootfalls.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-200"
                        >
                          <td className="py-4">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                              #{index + 1}
                            </div>
                          </td>
                          <td className="py-4 text-sm text-gray-900 font-medium">{item.branch}</td>
                          <td className="py-4 text-right text-sm font-semibold text-gray-900">{item.footfall}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default FootfallModal
