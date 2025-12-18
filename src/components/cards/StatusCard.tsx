import { motion } from 'framer-motion'
import { Camera, Users, HardDrive, TrendingUp } from 'lucide-react'

interface StatusCardProps {
  title: string
  total: number
  type: 'camera' | 'agent' | 'harddisk' | 'footfall'
  statuses: { label: string; count: number; color: string }[]
  onClick?: () => void
}

const StatusCard = ({ title, total, type, statuses, onClick }: StatusCardProps) => {
  const getIcon = () => {
    switch (type) {
      case 'camera':
        return <Camera size={20} />
      case 'agent':
        return <Users size={20} />
      case 'harddisk':
        return <HardDrive size={20} />
      case 'footfall':
        return <TrendingUp size={20} />
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-3 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-700 text-xs font-medium">{title}</h3>
        <div className="text-gray-600">{getIcon()}</div>
      </div>

      <div className="text-2xl font-bold text-gray-900 mb-2">{total}</div>

      <div className="flex gap-1.5 flex-wrap">
        {statuses.map((status, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: status.color, color: '#fff' }}
          >
            {status.label}: {status.count}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default StatusCard
