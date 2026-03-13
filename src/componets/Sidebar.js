// src/components/Sidebar.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // முக்கியம்: Link-ஐ இம்போர்ட் செய்ய வேண்டும்
import { 
  LayoutDashboard, Users, Eye, Clock, FileText, 
  Heart, Zap, Calendar, Sparkles, Binary, 
  UserCog, Database, Menu, X, ChevronDown, ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (title) => {
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // 1. Menu Config - இப்போது ஒவ்வொரு submenu-வும் ஒரு Object (name, path)
  const menuConfig = [
    {
      title: "DASHBOARD",
      icon: <LayoutDashboard size={20} />,
      submenu: [
        { name: "Quick Chart", path: "/dashboard" },
        { name: "Recent Horoscopes", path: "/dashboard" }
      ]
    },
    {
      title: "HOROSCOPE MGMT",
      icon: <Users size={20} />,
      submenu: [
        { name: "Create New Chart", path: "/dashboard/horoscope" },
       { name: "Browse Horoscopes", path: "/dashboard/horoscope/browse" }
      ]
    },
    {
      title: "DASHA SYSTEMS",
      icon: <Clock size={20} />,
      submenu: [
        { name: "Vimshottari Dasha", path: "/dashboard/dasa" } // இதுதான் முக்கியம்!
      ]
    },
    // மற்ற மெனுக்கள்... (தேவைப்பட்டால் இதே பாணியில் மாற்றவும்)
    {
      title: "PREDICTIONS",
      icon: <FileText size={20} />,
      submenu: [
        { name: "Life Reports", path: "#" },
        { name: "Ashtakavarga", path: "#" }
      ]
    },
{
      title: "SHADBALA",
      icon: <Users size={20} />,
      submenu: [
        { name: "Create Shadbala", path: "/dashboard/shadbala/" },
       
      ]
    },

    {
      title: "BIODATA",
      icon: <Users size={20} />,
      submenu: [
        { name: "Create New Biodata", path: "/dashboard/biodata" },
        { name: "Create New Display", path: "/dashboard/displayhoroscope" },
      ]
    },
    // ... மீதமுள்ளவற்றை string ஆக வைத்திருந்தால், அவற்றை Object ஆக மாற்ற வேண்டும்
    // அல்லது கீழே உள்ள render logic-ல் string-ஐயும் கையாள வேண்டும்.
  ];

  return (
    <div className={`flex flex-col h-screen bg-[#0f172a] text-slate-300 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'} border-r border-slate-800 shadow-2xl`}>
      
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-800">
        {!isCollapsed && <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">ASTRO PRO</span>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 hover:bg-slate-800 rounded-lg text-amber-500">
          {isCollapsed ? <Menu size={24} /> : <X size={24} />}
        </button>
      </div>

      {/* Menu Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar py-4 px-3">
        {menuConfig.map((menu, index) => (
          <div key={index} className="mb-2">
            <button 
              onClick={() => toggleSubmenu(menu.title)}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group 
                ${expandedMenus[menu.title] ? 'bg-slate-800 text-white' : 'hover:bg-slate-800/50'}`}
            >
              <div className="text-amber-500 group-hover:scale-110 transition-transform">{menu.icon}</div>
              {!isCollapsed && (
                <>
                  <span className="ml-4 flex-1 text-sm font-semibold text-left">{menu.title}</span>
                  {expandedMenus[menu.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </>
              )}
            </button>

            {/* Submenu Display - இங்குதான் பிழை இருந்தது */}
            {!isCollapsed && expandedMenus[menu.title] && (
              <div className="ml-9 mt-2 space-y-1 border-l-2 border-slate-700">
                {menu.submenu.map((sub, sIdx) => {
                  // சப்-மெனு String ஆக இருந்தால் (பழையது), அல்லது Object ஆக இருந்தால் (புதியது) கையாளுதல்
                  const name = typeof sub === 'string' ? sub : sub.name;
                  const path = typeof sub === 'string' ? '#' : sub.path;

                  return (
                    <Link 
                      key={sIdx} 
                      href={path}
                      className="block w-full text-left p-2 pl-6 text-xs hover:text-amber-400 transition-colors"
                    >
                      {name} {/* முன்பு இங்கு {sub} என்று இருந்தது, அதுதான் பிழை */}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Profile */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-slate-800 p-2 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">JD</div>
          {!isCollapsed && (
            <div>
              <p className="text-sm font-medium">ஜோதிட வல்லுநர்</p>
              <p className="text-xs text-slate-500">Support/Help</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;