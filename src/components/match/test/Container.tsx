import update from "immutability-helper";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import "./css/composition.css"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Box } from "./Box";
import { getNumberOfPlayerOnTerrain } from "./composition";
import { Dustbin } from "./Dustbin";
import { getPlayer } from "./ItemTypes";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { PlayerStateInterface } from "../../../interface/redux-state/PlayerStateInterface";
import { getAllPlayerSuccessAction } from "../../../redux-store/reducer/PlayerSlice";
import logo from "../../../assets/steps/terrain.png"
interface DustbinState {
  accepts: string[];
  lastDroppedItem: any;
}

interface BoxState {
  img: string;
  name: string;
  type: string;
}

export interface DustbinSpec {
  accepts: number[];
  lastDroppedItem: any;
}
export interface BoxSpec {
  name: string;
  type: string;
  img: string;
}
export interface ContainerState {
  droppedBoxNames: string[];
  dustbins: DustbinSpec[];
  boxes: BoxSpec[];
}

export const Container = () => {
  const playerSlices: PlayerStateInterface = useAppSelector(
    (state) => state.allPlayers
  )

  const dispash = useAppDispatch();

  useEffect(() => {
    dispash(getAllPlayerSuccessAction([]));
    setBoxes(playerSlices.players.map((e: any, i) => {
      return { name: e.nom + " " + e.prenom, type: `${i}`, img: e.image };
    }))
  }, []);

  const [select, setSelect] = useState(11);
  const [selectFormation, setSelectFormation] = useState("");
  const [style, setStyle] = useState([]);


  const [dustbins, setDustbins] = useState<DustbinState[]>(

    [
      { accepts: ["0"], lastDroppedItem: null },
      ...Array(select - 1).fill(null).map(e => {
        return {
          accepts: Array(select - 1).fill(null).map((_, i) => `${i}`),
          lastDroppedItem: null,
        }
      }),
    ]
  );

  useEffect(() => {
    getCurrentPosition()
  }, [])


  useEffect(() => {
    setDustbins([
      { accepts: ["0"], lastDroppedItem: null },
      ...Array(select - 1).fill(null).map(e => {
        return {
          accepts: Array(select - 1).fill(null).map((_, i) => `${i}`),
          lastDroppedItem: null,
        }
      })
    ])
    getCurrentPosition(select)
  }, [select])

  useEffect(() => {
    getCurrentPosition(select)
  }, [select, selectFormation])


  const getCurrentPosition = (_select: number = 11) => {
    let get1 = getNumberOfPlayerOnTerrain.filter((e) => e.nbr == _select)
    if (get1.length > 0) {
      let positions = [];
      if (selectFormation == "") {
        positions = get1.map((e) => e.system_play)[0].find((_, i) => i == 0)?.position;
      } else {
        positions = get1.map((e) => e.system_play)[0].find((e: any) => e.id == selectFormation)?.position;
      }
      if (positions != undefined) setStyle(positions)
    }
  }


  const [boxes, setBoxes] = useState<BoxState[]>([]);

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  return (

    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          padding: "20px",
          borderRadius: "0 0 10px 10px",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", overflow: "scroll", overflowX: "hidden", clear: "both", marginTop: "10px", height: "500px" }}>
            {boxes.map((e, index) => (
              <Box
                cursor={true}
                name={e.name}
                type={e.type}
                img={e.img}
                isDropped={isDropped(e.name)}
                key={index}
              />
            ))}
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }} >
            <form
              action=""
              style={{
                width: "200px", display: "flex", justifyContent: "space-between", height: "30px"
              }}>
              <select
                style={{
                  width: "70px"
                }}
                name="formation"
                onChange={(e: any) => setSelect(e.target.value)}>
                {getNumberOfPlayerOnTerrain.map((e: getPlayer) => (
                  <option value={e.nbr}>{e.nbr}</option>
                ))}
              </select>
              <select style={{
                width: "70px"
              }}
                name="formation"
                onChange={(e: any) => setSelectFormation(e.target.value)} >
                {getNumberOfPlayerOnTerrain.find(e => e.nbr == select)?.system_play.map((e: any) => (
                  <option value={e.id}>{e.label}</option>
                ))}
              </select>
            </form>
            <div style={{
              position: "relative",
              width: "500px"
            }}>
              <img width="500px" src={logo} />
              {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                <Dustbin
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => handleDrop(index, item)}
                  key={index}
                  class_={style[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider >

  );
};
