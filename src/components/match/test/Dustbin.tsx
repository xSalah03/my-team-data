import { CFormSelect } from "@coreui/react";
import { Modal } from "antd";
import { CSSProperties, FC, useEffect, useState } from "react";
import { memo } from "react";
import { useDrop } from "react-dnd";
import logo from "../../../assets/steps/jersey.png"
import { PlayerStateInterface } from "../../../interface/redux-state/PlayerStateInterface";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { getAllPlayerSuccessAction } from "../../../redux-store/reducer/PlayerSlice";
import { Box } from "./Box";

const style: CSSProperties = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
  borderRadius: "50%",
};

export interface DustbinProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
  class_: string;
}

interface BoxState {
  img: string;
  name: string;
  type: string;
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

  const dispash = useAppDispatch();

  const playerSlices: PlayerStateInterface = useAppSelector(
    (state) => state.allPlayers
  )

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);
  const [boxes, setBoxes] = useState<BoxState[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispash(getAllPlayerSuccessAction([]));
    setBoxes(playerSlices.players.map((e: any, i) => {
      return { name: e.nom + " " + e.prenom, type: `${i}`, img: e.image };
    }))
  }, []);

  const handler = (e: any) => {
    console.log(e);
  }

  return (
    <div ref={drop} className={`player ${class_}`} style={{ ...style }} data-testid="dustbin" >
      <Modal
        title="Players"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <div style={{
          display: "flex",
          height: "300px",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            clear: "both",
            marginTop: "10px",
            height: "300px",
            width: "90%"
          }}>
            {boxes.map((e, index) => (
              <Box
                onclick={() => (handler(e), setOpen(false))}
                cursor={false}
                name={e.name}
                type={e.type}
                img={e.img}
                key={index}
              />
            ))}
          </div>
        </div>
      </Modal>
      <div style={{
        position: "relative",
      }}>
        <img onClick={() => setOpen(true)} width={"30px"} src={logo} />
        <span style={{
          position: "absolute",
          left: "35px",
          textAlign: "center",
          backgroundColor: "gray",
          color: "white",
          borderRadius: "50px",
          width: "20px",
        }}>-</span>
      </div>

      {lastDroppedItem && (
        <>
          <img className="player-img" width="40px" src="http://apidata.myteam.ma/uploads/image-1657297487820.jpeg" />
        </>
      )}
    </div>
  );
});
