import update from "immutability-helper";
import { FC, useEffect } from "react";
import { memo, useCallback, useState } from "react";
import "./css/composition.css"
import { Box } from "./Box";
import { getNumberOfPlayerOnTerrain } from "./composition";
import { Dustbin } from "./Dustbin";
import { getPlayer, ItemTypes } from "./ItemTypes";
import { MatchStateInterface } from "../../../interface/redux-state/MatchStateInterface";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { PlayerStateInterface } from "../../../interface/redux-state/PlayerStateInterface";
import { getAllPlayerSuccessAction } from "../../../redux-store/reducer/MatchSlice";

interface DustbinState {
  accepts: string[];
  lastDroppedItem: any;
}

interface BoxState {
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
}
export interface ContainerState {
  droppedBoxNames: string[];
  dustbins: DustbinSpec[];
  boxes: BoxSpec[];
}

export const Container = () => {
  const matchSlices: MatchStateInterface = useAppSelector(
    (state) => state.allMatchs
  )


  const dispash = useAppDispatch();


  useEffect(() => {
    setBoxes(matchSlices.matchs.map((e: any, i) => {
      return { name: `Player ${i}`, type: `${0}` };
    }))

  }, []);
  
  useEffect(() => {    
    dispash(getAllPlayerSuccessAction([]));
  }, []);

  console.log()

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
  }, [selectFormation])


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
    <div>
      <form action="">
        <select name="formation" onChange={(e: any) => setSelect(e.target.value)}>
          {getNumberOfPlayerOnTerrain.map((e: getPlayer) => (
            <option value={e.nbr}>{e.nbr}</option>
          ))}
        </select>
        <select name="formation" onChange={(e: any) => setSelectFormation(e.target.value)} >
          {getNumberOfPlayerOnTerrain.find(e => e.nbr == select)?.system_play.map((e: any) => (
            <option value={e.id}>{e.label}</option>
          ))}
        </select>
      </form>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden", clear: "both" }}>
          {boxes.map(({ name, type }, index) => (
            <Box
              name={name}
              type={type}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
        </div>
        <div style={{
          position: "relative"
        }}>
          <img src="http://www.i2clipart.com/cliparts/9/0/4/9/clipart-campo-da-calcio-senza-scritte-512x512-9049.png" />
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
    </div >
  );
};
