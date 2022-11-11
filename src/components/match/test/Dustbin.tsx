import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrop } from "react-dnd";

const style: CSSProperties = {
  width: "50px",
  height: "50px"
};

export interface DustbinProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
  class_: string;
}

export const Dustbin: FC<DustbinProps> = memo(function Dustbin({
  accept,
  lastDroppedItem,
  onDrop,
  class_
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = isOver && canDrop;

  return (
    <div ref={drop} className={`player ${class_}`} style={{ ...style }} data-testid="dustbin">
      {isActive ? "Release to drop" : ""}

    </div>
  );
});
