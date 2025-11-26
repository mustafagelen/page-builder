import { BUILDER_ITEMS } from '@/src/constans/builder-item';
import DraggableSidebarItem from './DraggableItem';

const Sidebar = () => {
  return (
    <aside className="w-80 h-full bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-5 border-b border-slate-200 bg-white">
        <h1 className="font-bold text-lg text-slate-800">Page Builder</h1>
        <p className="text-xs text-slate-500 mt-1">New Page</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
          Components
        </h3>
        
        <div className="flex flex-col">
          {BUILDER_ITEMS.map((item) => (
            <DraggableSidebarItem key={item.type} data={item} />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-slate-200 text-center text-xs text-slate-400">
        v1.0.0
      </div>
    </aside>
  );
};

export default Sidebar;