import type { CSSProperties, FC } from 'react'
import { memo } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  border: '1px solid gray',
  backgroundColor: 'white',
  padding: '5px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  width: '100%',
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

export interface BoxProps {
  name: string
  type: string
  img: string
  isDropped?: boolean
  cursor: boolean
  onclick?: any
}

export const Box: FC<BoxProps> = memo(function Box({ onclick,name, type, img, isDropped, cursor }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )

  return (
    <div onClick={() => onclick()} ref={drag} style={{ ...{ ...style, opacity }, ...{ cursor: cursor ? "move" : "pointer" } }} data-testid="box">
      <div>
        <div style={{
          width: "50px",
          objectFit: "scale-down",
          borderRadius: "50%",
          overflow: "hidden"
        }}>
          <img src={img} alt="" width={"100%"} />
        </div>
      </div>
      <div>
        {isDropped ? <s>{name}</s> : name}
      </div>
    </div >
  )
})
