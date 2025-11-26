"use client";

import React from "react";
import { useDrag } from "react-dnd";
import { SidebarItem } from "@/src/types/builder";

interface Props {
  data: SidebarItem;
}

const DraggableItem: React.FC<Props> = ({ data }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "BUILDER_ELEMENT",
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef as unknown as React.Ref<HTMLDivElement>}
      className={`
        p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm cursor-grab 
        hover:border-blue-500 hover:shadow-md transition-all duration-200
        ${isDragging ? "opacity-50 ring-2 ring-blue-400" : "opacity-100"}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-xs font-bold text-gray-500">
          {data.label.charAt(0)}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700">{data.label}</h4>
          <p className="text-xs text-gray-400">
            {typeof data.defaultWidth === "number"
              ? `${data.defaultWidth}px`
              : data.defaultWidth}{" "}
            x {data.defaultHeight}px
          </p>
        </div>
      </div>
    </div>
  );
};

export default DraggableItem;
