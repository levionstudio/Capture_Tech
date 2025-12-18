import { motion } from 'framer-motion'
import { BarChart3, Calendar, Video, Laptop, MessageSquare, LogOut, GitBranch } from 'lucide-react'

interface NavItem {
  icon: React.ReactNode
  label: string
  active?: boolean
}

const Sidebar = () => {
  const navItems: NavItem[] = [
    { icon: <BarChart3 size={20} />, label: 'Insights', active: true },
    { icon: <Calendar size={20} />, label: 'View events' },
    { icon: <Video size={20} />, label: 'Live view' },
    { icon: <GitBranch size={20} />, label: 'Branches' },
    { icon: <Laptop size={20} />, label: 'Devices' },
    { icon: <MessageSquare size={20} />, label: 'Ask' },
  ]

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-36 bg-navy-900 h-screen flex flex-col justify-between py-6"
    >
      <div>
        <div className="px-4 mb-12">
          <h1 className="text-white text-xl font-bold">EALERT</h1>
        </div>

        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all ${
                item.active
                  ? 'bg-blue-600 border-l-4 border-white text-white'
                  : 'text-gray-400 hover:text-white hover:bg-navy-800'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="px-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white cursor-pointer"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="bg-navy-800 px-3 py-2 rounded text-center">
            <div className="text-xs text-gray-400 mb-1">CAPTURE TEC</div>
            <div className="text-white text-sm font-semibold">Odiyoor Bank</div>
            <div className="text-xs text-gray-400 mt-1">Powered by Capture Tech</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
