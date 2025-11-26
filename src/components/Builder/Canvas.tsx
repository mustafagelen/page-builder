"use client";
import { useDrop } from "react-dnd";
import { SidebarItem } from "@/src/types/builder";

const Canvas = () => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "BUILDER_ELEMENT",
    drop: (item: SidebarItem, monitor) => {
      const delta = monitor.getClientOffset();
      
      console.log('Bırakılan Öğe:', item);
      console.log('Koordinatlar:', delta);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="flex-1 h-full bg-slate-100 p-8 overflow-auto flex justify-center">
      <div
        ref={dropRef as unknown as React.Ref<HTMLDivElement>}
        className={`
          relative w-5xl min-h-[800px] bg-white shadow-xl transition-colors duration-200
          ${
            isOver
              ? "bg-blue-50 border-2 border-blue-400 border-dashed"
              : "border border-slate-200"
          }
        `}
        style={{
          backgroundSize: "20px 20px",
        }}
      >
        {!isOver && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-slate-300 text-lg font-medium">
              Elementleri buraya sürükleyin
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas;
