export const ItemTypes = {
  G: "Gardien",
  D: "Défenseur",
  AD: "Arrière droit",
  DC: "Défenseur central",
  AG: "Arrière gauche",
  M: "Milieu",
  MDR: "Milieu droit",
  MA: "Milieu axial",
  MG: "Milieu gauche",
  MO: "Milieu offensif",
  MDF: "Milieu défensif",
  A: "Attaquant",
  ALD: "Ailier droit",
  AA: "Attaquant axial",
  ALG: "Ailier gauche",
};

export interface getPlayer {
  nbr: number;
  system_play: any[];
}
