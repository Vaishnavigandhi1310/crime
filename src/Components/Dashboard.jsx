import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([
    { id: "CR-1025", type: "Theft", date: "2023-10-15", status: "Resolved", ipc: "IPC 379", priority: "High" },
    { id: "CR-1024", type: "Assault", date: "2023-10-14", status: "Under Review", ipc: "IPC 351", priority: "Medium" },
    { id: "CR-1023", type: "Fraud", date: "2023-10-12", status: "Resolved", ipc: "IPC 420", priority: "Low" },
    { id: "CR-1022", type: "Burglary", date: "2023-10-11", status: "Investigation", ipc: "IPC 454", priority: "High" },
    { id: "CR-1021", type: "Cyber Crime", date: "2023-10-10", status: "Evidence Collection", ipc: "IPC 66C", priority: "Critical" },
  ]);

  const [stats, setStats] = useState({ reports: 0, pending: 0, resolved: 0, urgent: 0 });

  // Animate counters
  useEffect(() => {
    let counts = { reports: 24, pending: 8, resolved: 16, urgent: 5 };
    let i = 0;
    const interval = setInterval(() => {
      setStats((prev) => ({
        reports: Math.min(prev.reports + 1, counts.reports),
        pending: Math.min(prev.pending + 1, counts.pending),
        resolved: Math.min(prev.resolved + 1, counts.resolved),
        urgent: Math.min(prev.urgent + 1, counts.urgent),
      }));
      i++;
      if (i > 24) clearInterval(interval);
    }, 50);
  }, []);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-gray-950">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-black to-purple-900"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,_#60a5fa_1px,_transparent_0)] bg-[length:22px_22px] animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.5
            }}
            animate={{
              y: [null, (Math.random() * 100) - 50],
              x: [null, (Math.random() * 100) - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 text-white">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8 p-4 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Police Dashboard
            </h1>
            <p className="text-gray-400 text-sm">Monitor and manage cases efficiently</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="font-medium">Officer Singh</p>
              <p className="text-xs text-gray-400">Delhi Police Department</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <span className="font-bold">JS</span>
            </motion.div>
          </div>
        </motion.header>

        {/* Animated Stats */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
        >
          {[
            { value: stats.reports, label: "Total Reports", color: "blue", icon: "📊" },
            { value: stats.pending, label: "Pending Review", color: "purple", icon: "⏳" },
            { value: stats.resolved, label: "Resolved Cases", color: "green", icon: "✅" },
            { value: stats.urgent, label: "Urgent Cases", color: "red", icon: "🚨" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className={`bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 rounded-2xl shadow-lg border-l-4 border-${stat.color}-500 relative overflow-hidden`}
            >
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10">
                {stat.icon}
              </div>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{stat.icon}</span>
                <h2 className={`text-3xl md:text-4xl font-extrabold text-${stat.color}-300 drop-shadow-md`}>
                  {stat.value}
                </h2>
              </div>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Complaint Form & AI Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Complaint Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl shadow-xl p-5 md:p-6 border border-gray-700/30"
          >
            <div className="flex items-center mb-5 pb-3 border-b border-gray-700/50">
              <div className="p-2 rounded-lg bg-blue-500/20 mr-3">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="font-semibold text-xl">File a New Complaint</h3>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Complaint Type</label>
                  <motion.select whileFocus={{ scale: 1.02 }}
                    className="w-full border border-gray-700 bg-black/40 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition">
                    <option>Select complaint type</option>
                    <option>Theft</option>
                    <option>Assault</option>
                    <option>Fraud</option>
                    <option>Burglary</option>
                    <option>Cyber Crime</option>
                  </motion.select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Incident Date & Time</label>
                  <motion.input whileFocus={{ scale: 1.02 }}
                    type="datetime-local"
                    className="w-full border border-gray-700 bg-black/40 text-white p-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Location</label>
                <motion.input whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Enter location"
                  className="w-full border border-gray-700 bg-black/40 text-white p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Complaint Details</label>
                <motion.textarea whileFocus={{ scale: 1.02 }}
                  className="w-full border border-gray-700 bg-black/40 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  rows="4"
                  placeholder="Please provide detailed information..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">🚀</span> Submit Complaint
              </motion.button>
            </form>
          </motion.div>

          {/* AI Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl shadow-lg p-5 md:p-6 border border-gray-700/30"
          >
            <div className="flex items-center mb-5 pb-3 border-b border-gray-700/50">
              <div className="p-2 rounded-lg bg-purple-500/20 mr-3">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg">AI Assistant</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 mb-4">
                <div className="flex items-start">
                  <div className="bg-blue-600/20 p-2 rounded-lg mr-3">
                    <span className="text-blue-300">🔍</span>
                  </div>
                  <p className="text-blue-300 text-sm">AI will analyze complaint details and suggest relevant IPC sections</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(96, 165, 250, 0.4)" }}
                className="w-full border border-blue-500/50 text-blue-300 font-medium px-4 py-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition flex items-center justify-center"
              >
                <span className="mr-2">🧠</span> Analyze Text
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)" }}
                className="w-full border border-purple-500/50 text-purple-300 font-medium px-4 py-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition flex items-center justify-center"
              >
                <span className="mr-2">📋</span> Generate Report
              </motion.button>
              
              <div className="pt-4 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 text-center">AI Assistant v2.3 • Updated today</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Complaints */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 md:p-6 border border-gray-700/30"
        >
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-700/50">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-500/20 mr-3">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="font-semibold text-lg">Recent Complaints</h3>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-gray-700/50 hover:bg-gray-700/70 px-3 py-1 rounded-lg transition"
            >
              View All
            </motion.button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-gray-200">
              <thead>
                <tr className="bg-black/30 text-gray-300">
                  <th className="p-3 font-medium">Case ID</th>
                  <th className="p-3 font-medium">Type</th>
                  <th className="p-3 font-medium">Date</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">IPC Section</th>
                  <th className="p-3 font-medium">Priority</th>
                  <th className="p-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((c) => (
                  <motion.tr
                    key={c.id}
                    whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="border-t border-gray-800/50 even:bg-gray-900/20"
                  >
                    <td className="p-3 font-mono">{c.id}</td>
                    <td className="p-3">{c.type}</td>
                    <td className="p-3">{c.date}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-xs rounded-full flex w-fit items-center ${
                        c.status === "Resolved"
                          ? "bg-green-600/30 text-green-300"
                          : c.status === "Under Review"
                          ? "bg-yellow-600/30 text-yellow-300"
                          : c.status === "Investigation"
                          ? "bg-blue-600/30 text-blue-300"
                          : "bg-purple-600/30 text-purple-300"
                      }`}>
                        {c.status === "Resolved" && "✓ "}
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="bg-blue-600/30 text-blue-300 text-xs px-2 py-1 rounded-full font-mono">
                        {c.ipc}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-xs rounded-full flex w-fit items-center ${
                        c.priority === "High" || c.priority === "Critical"
                          ? "bg-red-600/30 text-red-300"
                          : c.priority === "Medium"
                          ? "bg-orange-600/30 text-orange-300"
                          : "bg-gray-600/30 text-gray-300"
                      }`}>
                        {c.priority === "Critical" && "⚠ "}
                        {c.priority}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2 justify-center">
                        <motion.button 
                          whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" }} 
                          className="border border-blue-500/50 px-2 py-1 rounded-lg text-blue-300 hover:bg-blue-500/20 text-xs flex items-center"
                        >
                          <span className="mr-1">👁️</span> View
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)" }} 
                          className="border border-red-500/50 px-2 py-1 rounded-lg text-red-300 hover:bg-red-500/20 text-xs flex items-center"
                        >
                          <span className="mr-1">❌</span> Close
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="pt-4 mt-4 border-t border-gray-700/50 flex justify-between items-center">
            <p className="text-xs text-gray-500">Showing 5 of 24 complaints</p>
            <div className="flex space-x-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-gray-700/50 hover:bg-gray-700/70 px-2 py-1 rounded transition"
              >
                ← Previous
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-gray-700/50 hover:bg-gray-700/70 px-2 py-1 rounded transition"
              >
                Next →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-xs mt-8 pb-4"
        >
          <p>Police Dashboard v1.2 • Secure Access Authorized</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Dashboard;