import {
  ClubGender,
  ClubName,
  CountryName,
  PlayerFoot,
  PlayerGender,
  PlayerName,
  PlayerPost,
  SliderList,
} from "../interface/Utils";
import {
  faBuildingColumns,
  faCalendarDays,
  faHeadSideCough,
  faPersonRunning,
  faRankingStar,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
export const items: SliderList[] = [
  {
    key: 1,
    href: "equipes",
    icon: faUsers,
    label: "EQUIPES",
  },
  {
    key: 2,
    href: "joueurs",
    icon: faPersonRunning,
    label: "JOUEURS",
  },
  {
    key: 3,
    href: "matchs",
    icon: faTrophy,
    label: "MATCHS",
  },
  {
    key: 4,
    href: "statistiques",
    icon: faRankingStar,
    label: "STATISTIQUES",
  },
  {
    key: 5,
    href: "competition",
    icon: faTrophy,
    label: "COMPETITION",
  },
  {
    key: 6,
    href: "stade",
    icon: faBuildingColumns,
    label: "STADE",
  },
  {
    key: 7,
    href: "arbitre",
    icon: faHeadSideCough,
    label: "ARBITRE",
  },
  {
    key: 8,
    href: "saison",
    icon: faCalendarDays,
    label: "SAISON SPORTIF",
  },
];

export const poste: PlayerPost[] = [
  {
    id: "G",
    label: "Gardien",
  },
  {
    id: "DC",
    label: "Défanseur central",
  },
  {
    id: "D",
    label: "Arriére droit",
  },
  {
    id: "M",
    label: "Arriére gauche",
  },
  {
    id: "MG",
    label: "Milieu central",
  },
  {
    id: "MO",
    label: "Milieu droit",
  },
  {
    id: "A",
    label: "Milieu gauche",
  },
];

export const lateralite: PlayerFoot[] = [
  {
    id: "droit",
    label: "Droite",
  },
  {
    id: "gauche",
    label: "Gauche",
  },
  {
    id: "ambidextre",
    label: "Ambidextre",
  },
];

export const playerSexe: PlayerGender[] = [
  {
    id: "m",
    label: "Masculin",
  },
  {
    id: "f",
    label: "Féminin",
  },
];

export const clubNom: ClubName[] = [
  {
    id: 1815,
    label: "Morocco",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Morocco31.png",
  },
  {
    id: 1816,
    label: "Renaissance Berkane",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Renaissance Berkane962.png",
  },
  {
    id: 1817,
    label: "Chabab RIF Hoceima",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Chabab RIF Hoceima963.png",
  },
  {
    id: 1818,
    label: "Difaa EL Jadida",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Difaa EL Jadida964.png",
  },
  {
    id: 1819,
    label: "Moghreb Tetouan",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Moghreb Tetouan965.png",
  },
  {
    id: 1820,
    label: "Racing de Casablanca",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Racing de Casablanca966.png",
  },
  {
    id: 1821,
    label: "Rapide Oued ZEM",
    logo: "http://apidata.myteam.ma/uploads/image-1657299471595.png",
  },
  {
    id: 1822,
    label: "Wydad AC",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Wydad AC968.png",
  },
  {
    id: 1823,
    label: "FAR Rabat",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/FAR Rabat969.png",
  },
  {
    id: 1824,
    label: "Chabab Atl. Khenifra",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Chabab Atl. Khenifra970.png",
  },
  {
    id: 1825,
    label: "Kawkab Marrakech",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Kawkab Marrakech971.png",
  },
  {
    id: 1826,
    label: "Olympique Khouribga",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Olympique Khouribga972.png",
  },
  {
    id: 1827,
    label: "Hassania Agadir",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Hassania Agadir973.png",
  },
  {
    id: 1828,
    label: "Ittihad Tanger",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Ittihad Tanger974.png",
  },
  {
    id: 1829,
    label: "Olympique Safi",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Olympique Safi975.png",
  },
  {
    id: 1830,
    label: "Raja Casablanca",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Raja Casablanca976.png",
  },
  {
    id: 1831,
    label: "FUS Rabat",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/FUS Rabat977.png",
  },
  {
    id: 1832,
    label: "Kasba Tadla",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Kasba Tadla978.png",
  },
  {
    id: 1833,
    label: "KAC Kenitra",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/KAC Kenitra979.png",
  },
  {
    id: 1834,
    label: "Youssoufia Berrechid",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Youssoufia Berrechid1074.png",
  },
  {
    id: 1835,
    label: "Mouloudia Oujda",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Mouloudia Oujda1075.png",
  },
  {
    id: 1836,
    label: "AS Salé",
    logo: "http://apidata.myteam.ma/uploads/image-1657293549050.png",
  },
  {
    id: 1837,
    label: "CR Khemis Zemamra",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/CR Khemis Zemamra3449.png",
  },
  {
    id: 1838,
    label: "Chabab Ben Guerir",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Chabab Ben Guerir3450.png",
  },
  {
    id: 1839,
    label: "El Massira",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/El Massira3451.png",
  },
  {
    id: 1840,
    label: "Ittihad Khemisset",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Ittihad Khemisset3452.png",
  },
  {
    id: 1841,
    label: "Maghreb Fès",
    logo: "http://apidata.myteam.ma/uploads/image-1657293568715.png",
  },
  {
    id: 1842,
    label: "Olympique Dcheïra",
    logo: "http://apidata.myteam.ma/uploads/image-1657293589689.png",
  },
  {
    id: 1843,
    label: "Raja Beni Mellal",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Raja Beni Mellal3455.png",
  },
  {
    id: 1844,
    label: "Riadi Salmi",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Riadi Salmi3456.png",
  },
  {
    id: 1845,
    label: "Sidi Kacem",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Sidi Kacem3457.png",
  },
  {
    id: 1846,
    label: "Widad Témara",
    logo: "http://apidata.myteam.ma/uploads/image-1657293614149.png",
  },
  {
    id: 1847,
    label: "Wydad Fès",
    logo: "http://apidata.myteam.ma/uploads/image-1657293636603.png",
  },
  {
    id: 1848,
    label: "Chabab Mohammédia",
    logo: "http://apidata.myteam.ma/uploads/image-1657293684938.png",
  },
  {
    id: 1849,
    label: "Tihad Casablanca",
    logo: "http://apidata.myteam.ma/uploads/image-1657293656948.png",
  },
  {
    id: 1850,
    label: "Morocco U23",
    logo: "http://apidata.myteam.ma/uploads/image-1657299377730.png",
  },
  {
    id: 1851,
    label: "Morocco U20",
    logo: "http://apidata.myteam.ma/uploads/image-1657299394791.png",
  },
  {
    id: 1852,
    label: "Morocco Women",
    logo: "http://apidata.myteam.ma/uploads/image-1657299354574.png",
  },
  {
    id: 1853,
    label: "UTS Rabat",
    logo: "http://apidata.myteam.ma/uploads/image-1657298080954.png",
  },
  {
    id: 1854,
    label: "Stade Marocain",
    logo: "http://apidata.myteam.ma/uploads/image-1657298109059.png",
  },
  {
    id: 1855,
    label: "Difâa Hamrya Khénifra",
    logo: "http://apidata.myteam.ma/uploads/image-1657297712395.png",
  },
  {
    id: 1856,
    label: "Ittifaq Marrakech",
    logo: "http://apidata.myteam.ma/uploads/image-1657297992064.png",
  },
  {
    id: 1857,
    label: "Mouloudia Dakhla",
    logo: "http://apidata.myteam.ma/uploads/image-1657297448950.png",
  },
  {
    id: 1858,
    label: "Olympique Youssoufia",
    logo: "http://apidata.myteam.ma/uploads/image-1657298166597.png",
  },
  {
    id: 1859,
    label: "Rachad Bernoussi",
    logo: "http://apidata.myteam.ma/uploads/image-1657298237602.png",
  },
  {
    id: 1860,
    label: "Wydad Serghini",
    logo: "http://apidata.myteam.ma/uploads/image-1657298259536.png",
  },
  {
    id: 1861,
    label: "USM Oujda",
    logo: "http://apidata.myteam.ma/uploads/image-1657298328974.png",
  },
  {
    id: 1862,
    label: "AS Mansouria",
    logo: "http://apidata.myteam.ma/uploads/image-1657298365908.png",
  },
  {
    id: 1863,
    label: "Amal Tiznit",
    logo: "http://apidata.myteam.ma/uploads/image-1657298574159.jpeg",
  },
  {
    id: 1864,
    label: "Fath Casablanca",
    logo: "http://apidata.myteam.ma/uploads/image-1657298483024.png",
  },
  {
    id: 16436,
    label: "Chabab M'rirt",
    logo: "http://apidata.myteam.ma/uploads/image-1657299620641.png",
  },
  {
    id: 16437,
    label: "Fath Nador",
    logo: "http://apidata.myteam.ma/uploads/image-1657299669002.png",
  },
  {
    id: 16438,
    label: "Union Temara",
    logo: "http://apidata.myteam.ma/uploads/image-1657299724660.png",
  },
];

export const clubSexe: ClubGender[] = [
  {
    id: "M",
    label: "Masculin",
  },
  {
    id: "F",
    label: "Féminin",
  },
];

export const countryNom: CountryName[] = [
  {
    nom: "Afghanistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/afghanistan/Afghanistan1553.png",
    id: 0,
  },
  {
    nom: "Albania",
    logo: "http://apidata.myteam.ma/uploads/Europe/albania/FK Kukesi577.png",
    id: 1,
  },
  {
    nom: "Algeria",
    logo: "http://apidata.myteam.ma/uploads/afrique/algeria/CR Belouizdad904.png",
    id: 2,
  },
  {
    nom: "Andorra",
    logo: "http://apidata.myteam.ma/uploads/Europe/andorra/FC Santa Coloma591.png",
    id: 3,
  },
  {
    nom: "Angola",
    logo: "http://apidata.myteam.ma/uploads/afrique/angola/Angola1529.png",
    id: 4,
  },
  {
    nom: "Argentina",
    logo: "http://apidata.myteam.ma/uploads/Amerique/argentina/Argentina26.png",
    id: 5,
  },
  {
    nom: "Armenia",
    logo: "http://apidata.myteam.ma/uploads/Asia/armenia/Alashkert582.png",
    id: 6,
  },
  {
    nom: "Austria",
    logo: "http://apidata.myteam.ma/uploads/Europe/austria/Red Bull Salzburg571.png",
    id: 7,
  },
  {
    nom: "Bahamas",
    logo: "http://apidata.myteam.ma/uploads/Amerique/bahamas/Bahamas5157.png",
    id: 8,
  },
  {
    nom: "Bahrain",
    logo: "http://apidata.myteam.ma/uploads/Asia/bahrain/Bahrain1547.png",
    id: 9,
  },
  {
    nom: "Bangladesh",
    logo: "http://apidata.myteam.ma/uploads/Asia/bangladesh/Bangladesh1560.png",
    id: 10,
  },
  {
    nom: "Barbados",
    logo: "http://apidata.myteam.ma/uploads/Amerique/barbados/Barbados5527.png",
    id: 11,
  },
  {
    nom: "Belarus",
    logo: "http://apidata.myteam.ma/uploads/Europe/belarus/FC Slutsk379.png",
    id: 12,
  },
  {
    nom: "Belgium",
    logo: "http://apidata.myteam.ma/uploads/Europe/belgium/Belgium1.png",
    id: 13,
  },
  {
    nom: "Belize",
    logo: "http://apidata.myteam.ma/uploads/Amerique/belize/San Pedro5469.png",
    id: 14,
  },
  {
    nom: "Benin",
    logo: "http://apidata.myteam.ma/uploads/afrique/benin/Benin1516.png",
    id: 15,
  },
  {
    nom: "Bhutan",
    logo: "http://apidata.myteam.ma/uploads/Asia/bhutan/Bhutan1540.png",
    id: 16,
  },
  {
    nom: "Bolivia",
    logo: "http://apidata.myteam.ma/uploads/Amerique/bolivia/Bolivia2381.png",
    id: 17,
  },
  {
    nom: "Bosnia",
    logo: "http://apidata.myteam.ma/uploads/Europe/bosnia/Zrinjski588.png",
    id: 18,
  },
  {
    nom: "Botswana",
    logo: "http://apidata.myteam.ma/uploads/afrique/botswana/Botswana1520.png",
    id: 19,
  },
  {
    nom: "Brazil",
    logo: "http://apidata.myteam.ma/uploads/Amerique/brazil/Brazil6.png",
    id: 20,
  },
  {
    nom: "Bulgaria",
    logo: "http://apidata.myteam.ma/uploads/Europe/bulgaria/Ludogorets566.png",
    id: 21,
  },
  {
    nom: "Burkina-Faso",
    logo: "http://apidata.myteam.ma/uploads/afrique/burkina-faso/Burkina Faso1502.png",
    id: 22,
  },
  {
    nom: "Burundi",
    logo: "http://apidata.myteam.ma/uploads/afrique/burundi/Burundi1528.png",
    id: 23,
  },
  {
    nom: "Cambodia",
    logo: "http://apidata.myteam.ma/uploads/Asia/cambodia/Cambodia1543.png",
    id: 24,
  },
  {
    nom: "Cameroon",
    logo: "http://apidata.myteam.ma/uploads/afrique/cameroon/Cameroon1530.png",
    id: 25,
  },
  {
    nom: "Canada",
    logo: "http://apidata.myteam.ma/uploads/Amerique/canada/Toronto FC1601.png",
    id: 26,
  },
  {
    nom: "Chile",
    logo: "http://apidata.myteam.ma/uploads/Amerique/chile/Chile W1977.png",
    id: 27,
  },
  {
    nom: "China",
    logo: "http://apidata.myteam.ma/uploads/Asia/china/Beijing Guoan830.png",
    id: 28,
  },
  {
    nom: "Colombia",
    logo: "http://apidata.myteam.ma/uploads/Amerique/colombia/Colombia8.png",
    id: 29,
  },
  {
    nom: "Comoros",
    logo: "http://apidata.myteam.ma/uploads/afrique/comoros/Comoros1524.png",
    id: 30,
  },
  {
    nom: "Congo",
    logo: "http://apidata.myteam.ma/uploads/afrique/congo/Congo1517.png",
    id: 31,
  },
  {
    nom: "Costa-Rica",
    logo: "http://apidata.myteam.ma/uploads/Amerique/costa-rica/Costa Rica29.png",
    id: 32,
  },
  {
    nom: "Croatia",
    logo: "http://apidata.myteam.ma/uploads/Europe/croatia/Croatia3.png",
    id: 33,
  },
  {
    nom: "Cuba",
    logo: "http://apidata.myteam.ma/uploads/Amerique/cuba/Cuba2388.png",
    id: 34,
  },
  {
    nom: "Cyprus",
    logo: "http://apidata.myteam.ma/uploads/Asia/cyprus/Apollon Limassol602.png",
    id: 35,
  },
  {
    nom: "Czech-Republic",
    logo: "http://apidata.myteam.ma/uploads/Europe/czech-republic/Slavia Praha560.png",
    id: 36,
  },
  {
    nom: "Denmark",
    logo: "http://apidata.myteam.ma/uploads/Europe/denmark/Denmark21.png",
    id: 37,
  },
  {
    nom: "Djibouti",
    logo: "http://apidata.myteam.ma/uploads/afrique/djibouti/Djibouti1535.png",
    id: 38,
  },
  {
    nom: "Dominican-Republic",
    logo: "http://apidata.myteam.ma/uploads/Amerique/dominican-republic/Dominican Republic5532.png",
    id: 39,
  },
  {
    nom: "Ecuador",
    logo: "http://apidata.myteam.ma/uploads/Amerique/ecuador/Emelec1148.png",
    id: 40,
  },
  {
    nom: "Egypt",
    logo: "http://apidata.myteam.ma/uploads/afrique/egypt/Egypt32.png",
    id: 41,
  },
  {
    nom: "El-Salvador",
    logo: "http://apidata.myteam.ma/uploads/Amerique/el-salvador/Alianza4299.png",
    id: 42,
  },
  {
    nom: "Eritrea",
    logo: "http://apidata.myteam.ma/uploads/afrique/eritrea/Eritrea1498.png",
    id: 43,
  },
  {
    nom: "Estonia",
    logo: "http://apidata.myteam.ma/uploads/Europe/estonia/Kalju Nomme662.png",
    id: 44,
  },
  {
    nom: "Eswatini",
    logo: "http://apidata.myteam.ma/uploads/afrique/eswatini/Eswatini2995.png",
    id: 45,
  },
  {
    nom: "Ethiopia",
    logo: "http://apidata.myteam.ma/uploads/afrique/ethiopia/Ethiopia1506.png",
    id: 46,
  },
  {
    nom: "Finland",
    logo: "http://apidata.myteam.ma/uploads/Europe/finland/IFK Mariehamn587.png",
    id: 47,
  },
  {
    nom: "France",
    logo: "http://apidata.myteam.ma/uploads/Europe/france/France2.png",
    id: 48,
  },
  {
    nom: "Gabon",
    logo: "http://apidata.myteam.ma/uploads/afrique/gabon/Gabon1503.png",
    id: 49,
  },
  {
    nom: "Gambia",
    logo: "http://apidata.myteam.ma/uploads/afrique/gambia/Gambia1492.png",
    id: 50,
  },
  {
    nom: "Georgia",
    logo: "http://apidata.myteam.ma/uploads/Asia/georgia/Samtredia581.png",
    id: 51,
  },
  {
    nom: "Germany",
    logo: "http://apidata.myteam.ma/uploads/Europe/germany/Germany25.png",
    id: 52,
  },
  {
    nom: "Ghana",
    logo: "http://apidata.myteam.ma/uploads/afrique/ghana/Ghana1504.png",
    id: 53,
  },
  {
    nom: "Greece",
    logo: "http://apidata.myteam.ma/uploads/Europe/greece/Olympiakos Piraeus553.png",
    id: 54,
  },
  {
    nom: "Grenada",
    logo: "http://apidata.myteam.ma/uploads/Amerique/grenada/Grenada5533.png",
    id: 55,
  },
  {
    nom: "Guatemala",
    logo: "http://apidata.myteam.ma/uploads/Amerique/guatemala/Achuapa3636.png",
    id: 56,
  },
  {
    nom: "Guinea",
    logo: "http://apidata.myteam.ma/uploads/afrique/guinea/Guinea1509.png",
    id: 57,
  },
  {
    nom: "Guinea-Bissau",
    logo: "http://apidata.myteam.ma/uploads/afrique/guinea-bissau/Guinea-Bissau1513.png",
    id: 58,
  },
  {
    nom: "Guyana",
    logo: "http://apidata.myteam.ma/uploads/Amerique/guyana/Guyana5162.png",
    id: 59,
  },
  {
    nom: "Haiti",
    logo: "http://apidata.myteam.ma/uploads/Amerique/haiti/Haiti2386.png",
    id: 60,
  },
  {
    nom: "Honduras",
    logo: "http://apidata.myteam.ma/uploads/Amerique/honduras/CD Marathon1050.png",
    id: 61,
  },
  {
    nom: "Hungary",
    logo: "http://apidata.myteam.ma/uploads/Europe/hungary/Budapest Honved576.png",
    id: 62,
  },
  {
    nom: "Iceland",
    logo: "http://apidata.myteam.ma/uploads/Europe/iceland/Iceland18.png",
    id: 63,
  },
  {
    nom: "India",
    logo: "http://apidata.myteam.ma/uploads/Asia/india/India1537.png",
    id: 64,
  },
  {
    nom: "Indonesia",
    logo: "http://apidata.myteam.ma/uploads/Asia/indonesia/Indonesia1571.png",
    id: 65,
  },
  {
    nom: "Iran",
    logo: "http://apidata.myteam.ma/uploads/Asia/iran/Iran22.png",
    id: 66,
  },
  {
    nom: "Iraq",
    logo: "http://apidata.myteam.ma/uploads/Asia/iraq/Iraq1567.png",
    id: 67,
  },
  {
    nom: "Ireland",
    logo: "http://apidata.myteam.ma/uploads/Europe/ireland/Dundalk584.png",
    id: 68,
  },
  {
    nom: "Israel",
    logo: "http://apidata.myteam.ma/uploads/Asia/israel/Hapoel Beer Sheva563.png",
    id: 69,
  },
  {
    nom: "Italy",
    logo: "http://apidata.myteam.ma/uploads/Europe/italy/Lazio487.png",
    id: 70,
  },
  {
    nom: "Ivory-Coast",
    logo: "http://apidata.myteam.ma/uploads/afrique/ivory-coast/AFAD4511.png",
    id: 71,
  },
  {
    nom: "Jamaica",
    logo: "http://apidata.myteam.ma/uploads/Amerique/jamaica/Jamaica W1785.png",
    id: 72,
  },
  {
    nom: "Japan",
    logo: "http://apidata.myteam.ma/uploads/Asia/japan/Japan12.png",
    id: 73,
  },
  {
    nom: "Jordan",
    logo: "http://apidata.myteam.ma/uploads/Asia/jordan/Jordan1548.png",
    id: 74,
  },
  {
    nom: "Kazakhstan",
    logo: "http://apidata.myteam.ma/uploads/Asia/kazakhstan/FC Astana562.png",
    id: 75,
  },
  {
    nom: "Kenya",
    logo: "http://apidata.myteam.ma/uploads/afrique/kenya/Kenya1511.png",
    id: 76,
  },
  {
    nom: "Kuwait",
    logo: "http://apidata.myteam.ma/uploads/Asia/kuwait/Kuwait1570.png",
    id: 77,
  },
  {
    nom: "Kyrgyzstan",
    logo: "http://apidata.myteam.ma/uploads/Asia/kyrgyzstan/Kyrgyzstan1554.png",
    id: 78,
  },
  {
    nom: "Laos",
    logo: "http://apidata.myteam.ma/uploads/Asia/laos/Laos1558.png",
    id: 79,
  },
  {
    nom: "Latvia",
    logo: "http://apidata.myteam.ma/uploads/Europe/latvia/Spartaks Jurmala589.png",
    id: 80,
  },
  {
    nom: "Lebanon",
    logo: "http://apidata.myteam.ma/uploads/Asia/lebanon/Lebanon1551.png",
    id: 81,
  },
  {
    nom: "Lesotho",
    logo: "http://apidata.myteam.ma/uploads/afrique/lesotho/Lesotho1518.png",
    id: 82,
  },
  {
    nom: "Liberia",
    logo: "http://apidata.myteam.ma/uploads/afrique/liberia/Liberia1525.png",
    id: 83,
  },
  {
    nom: "Libya",
    logo: "http://apidata.myteam.ma/uploads/afrique/libya/Libya1526.png",
    id: 84,
  },
  {
    nom: "Liechtenstein",
    logo: "http://apidata.myteam.ma/uploads/Europe/liechtenstein/FC Vaduz660.png",
    id: 85,
  },
  {
    nom: "Lithuania",
    logo: "http://apidata.myteam.ma/uploads/Europe/lithuania/FK Zalgiris Vilnius586.png",
    id: 86,
  },
  {
    nom: "Luxembourg",
    logo: "http://apidata.myteam.ma/uploads/Europe/luxembourg/F91 Dudelange578.png",
    id: 87,
  },
  {
    nom: "Macedonia",
    logo: "http://apidata.myteam.ma/uploads/Europe/macedonia/Vardar Skopje574.png",
    id: 88,
  },
  {
    nom: "Madagascar",
    logo: "http://apidata.myteam.ma/uploads/afrique/madagascar/Madagascar1490.png",
    id: 89,
  },
  {
    nom: "Malawi",
    logo: "http://apidata.myteam.ma/uploads/afrique/malawi/Malawi1495.png",
    id: 90,
  },
  {
    nom: "Malaysia",
    logo: "http://apidata.myteam.ma/uploads/Asia/malaysia/Malaysia1538.png",
    id: 91,
  },
  {
    nom: "Maldives",
    logo: "http://apidata.myteam.ma/uploads/Asia/maldives/Maldives1549.png",
    id: 92,
  },
  {
    nom: "Mali",
    logo: "http://apidata.myteam.ma/uploads/afrique/mali/Mali1500.png",
    id: 93,
  },
  {
    nom: "Malta",
    logo: "http://apidata.myteam.ma/uploads/Europe/malta/Valletta FC659.png",
    id: 94,
  },
  {
    nom: "Mauritania",
    logo: "http://apidata.myteam.ma/uploads/afrique/mauritania/Mauritania1491.png",
    id: 95,
  },
  {
    nom: "Mauritius",
    logo: "http://apidata.myteam.ma/uploads/afrique/mauritius/Mauritius1497.png",
    id: 96,
  },
  {
    nom: "Mexico",
    logo: "http://apidata.myteam.ma/uploads/Amerique/mexico/Mexico16.png",
    id: 97,
  },
  {
    nom: "Moldova",
    logo: "http://apidata.myteam.ma/uploads/Europe/moldova/Sheriff Tiraspol568.png",
    id: 98,
  },
  {
    nom: "Mongolia",
    logo: "http://apidata.myteam.ma/uploads/Asia/mongolia/Mongolia5534.png",
    id: 99,
  },
  {
    nom: "Montenegro",
    logo: "http://apidata.myteam.ma/uploads/Europe/montenegro/Buducnost Podgorica579.png",
    id: 100,
  },
  {
    nom: "Morocco",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Morocco31.png",
    id: 101,
  },
  {
    nom: "Mozambique",
    logo: "http://apidata.myteam.ma/uploads/afrique/mozambique/Mozambique1512.png",
    id: 102,
  },
  {
    nom: "Myanmar",
    logo: "http://apidata.myteam.ma/uploads/Asia/myanmar/Myanmar1556.png",
    id: 103,
  },
  {
    nom: "Namibia",
    logo: "http://apidata.myteam.ma/uploads/afrique/namibia/Namibia1493.png",
    id: 104,
  },
  {
    nom: "Nepal",
    logo: "http://apidata.myteam.ma/uploads/Asia/nepal/Nepal1545.png",
    id: 105,
  },
  {
    nom: "Netherlands",
    logo: "http://apidata.myteam.ma/uploads/Europe/netherlands/PEC Zwolle193.png",
    id: 106,
  },
  {
    nom: "Nicaragua",
    logo: "http://apidata.myteam.ma/uploads/Amerique/nicaragua/Chinandega4639.png",
    id: 107,
  },
  {
    nom: "Niger",
    logo: "http://apidata.myteam.ma/uploads/afrique/niger/Niger1505.png",
    id: 108,
  },
  {
    nom: "Nigeria",
    logo: "http://apidata.myteam.ma/uploads/afrique/nigeria/Nigeria19.png",
    id: 109,
  },
  {
    nom: "North-Korea",
    logo: "http://apidata.myteam.ma/uploads/Asia/north-korea/North Korea1561.png",
    id: 110,
  },
  {
    nom: "Norway",
    logo: "http://apidata.myteam.ma/uploads/Europe/norway/Brann319.png",
    id: 111,
  },
  {
    nom: "Oman",
    logo: "http://apidata.myteam.ma/uploads/Asia/oman/Oman1552.png",
    id: 112,
  },
  {
    nom: "Pakistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/pakistan/Pakistan5535.png",
    id: 113,
  },
  {
    nom: "Palestine",
    logo: "http://apidata.myteam.ma/uploads/Asia/palestine/Palestine1562.png",
    id: 114,
  },
  {
    nom: "Panama",
    logo: "http://apidata.myteam.ma/uploads/Amerique/panama/Panama11.png",
    id: 115,
  },
  {
    nom: "Paraguay",
    logo: "http://apidata.myteam.ma/uploads/Amerique/paraguay/Club Guarani1174.png",
    id: 116,
  },
  {
    nom: "Peru",
    logo: "http://apidata.myteam.ma/uploads/Amerique/peru/Peru30.png",
    id: 117,
  },
  {
    nom: "Philippines",
    logo: "http://apidata.myteam.ma/uploads/Asia/philippines/Philippines1555.png",
    id: 118,
  },
  {
    nom: "Poland",
    logo: "http://apidata.myteam.ma/uploads/Europe/poland/Poland24.png",
    id: 119,
  },
  {
    nom: "Portugal",
    logo: "http://apidata.myteam.ma/uploads/Europe/portugal/Portugal27.png",
    id: 120,
  },
  {
    nom: "Qatar",
    logo: "http://apidata.myteam.ma/uploads/Asia/qatar/Qatar1569.png",
    id: 121,
  },
  {
    nom: "Romania",
    logo: "http://apidata.myteam.ma/uploads/Europe/romania/FCSB559.png",
    id: 122,
  },
  {
    nom: "Russia",
    logo: "http://apidata.myteam.ma/uploads/Europe/russia/Russia4.png",
    id: 123,
  },
  {
    nom: "Rwanda",
    logo: "http://apidata.myteam.ma/uploads/afrique/rwanda/Rwanda1514.png",
    id: 124,
  },
  {
    nom: "San-Marino",
    logo: "http://apidata.myteam.ma/uploads/Europe/san-marino/Folgore672.png",
    id: 125,
  },
  {
    nom: "Saudi-Arabia",
    logo: "http://apidata.myteam.ma/uploads/Asia/saudi-arabia/Saudi Arabia23.png",
    id: 126,
  },
  {
    nom: "Serbia",
    logo: "http://apidata.myteam.ma/uploads/Europe/serbia/Serbia14.png",
    id: 127,
  },
  {
    nom: "Seychelles",
    logo: "http://apidata.myteam.ma/uploads/afrique/seychelles/Seychelles1515.png",
    id: 128,
  },
  {
    nom: "Singapore",
    logo: "http://apidata.myteam.ma/uploads/Asia/singapore/Singapore1546.png",
    id: 129,
  },
  {
    nom: "Slovakia",
    logo: "http://apidata.myteam.ma/uploads/Europe/slovakia/AS Trencin655.png",
    id: 130,
  },
  {
    nom: "Slovenia",
    logo: "http://apidata.myteam.ma/uploads/Europe/slovenia/Maribor552.png",
    id: 131,
  },
  {
    nom: "South-Africa",
    logo: "http://apidata.myteam.ma/uploads/afrique/south-africa/South Africa1531.png",
    id: 132,
  },
  {
    nom: "South-Korea",
    logo: "http://apidata.myteam.ma/uploads/Asia/south-korea/South Korea17.png",
    id: 133,
  },
  {
    nom: "South-Sudan",
    logo: "http://apidata.myteam.ma/uploads/afrique/south-sudan/Atlabara6412.png",
    id: 134,
  },
  {
    nom: "Spain",
    logo: "http://apidata.myteam.ma/uploads/Europe/spain/Spain9.png",
    id: 135,
  },
  {
    nom: "Sudan",
    logo: "http://apidata.myteam.ma/uploads/afrique/sudan/South Sudan1496.png",
    id: 136,
  },
  {
    nom: "Sweden",
    logo: "http://apidata.myteam.ma/uploads/Europe/sweden/Sweden5.png",
    id: 137,
  },
  {
    nom: "Switzerland",
    logo: "http://apidata.myteam.ma/uploads/Europe/switzerland/Switzerland15.png",
    id: 138,
  },
  {
    nom: "Syria",
    logo: "http://apidata.myteam.ma/uploads/Asia/syria/Syria1565.png",
    id: 139,
  },
  {
    nom: "Tajikistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/tajikistan/Tajikistan1536.png",
    id: 140,
  },
  {
    nom: "Tanzania",
    logo: "http://apidata.myteam.ma/uploads/afrique/tanzania/Tanzania1489.png",
    id: 141,
  },
  {
    nom: "Thailand",
    logo: "http://apidata.myteam.ma/uploads/Asia/thailand/Thailand1564.png",
    id: 142,
  },
  {
    nom: "Togo",
    logo: "http://apidata.myteam.ma/uploads/afrique/togo/Togo1534.png",
    id: 143,
  },
  {
    nom: "Tunisia",
    logo: "http://apidata.myteam.ma/uploads/afrique/tunisia/Tunisia28.png",
    id: 144,
  },
  {
    nom: "Turkey",
    logo: "http://apidata.myteam.ma/uploads/Asia/turkey/Besiktas549.png",
    id: 145,
  },
  {
    nom: "Turkmenistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/turkmenistan/Turkmenistan1539.png",
    id: 146,
  },
  {
    nom: "USA",
    logo: "http://apidata.myteam.ma/uploads/Amerique/usa/Seattle Sounders1595.png",
    id: 147,
  },
  {
    nom: "Uganda",
    logo: "http://apidata.myteam.ma/uploads/afrique/uganda/Uganda1519.png",
    id: 148,
  },
  {
    nom: "Ukraine",
    logo: "http://apidata.myteam.ma/uploads/Europe/ukraine/Shakhtar Donetsk550.png",
    id: 149,
  },
  {
    nom: "United-Arab-Emirates",
    logo: "http://apidata.myteam.ma/uploads/Asia/united-arab-emirates/United Arab Emirates1563.png",
    id: 150,
  },
  {
    nom: "Uruguay",
    logo: "http://apidata.myteam.ma/uploads/Amerique/uruguay/Uruguay7.png",
    id: 151,
  },
  {
    nom: "Uzbekistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/uzbekistan/Uzbekistan1568.png",
    id: 152,
  },
  {
    nom: "Venezuela",
    logo: "http://apidata.myteam.ma/uploads/Amerique/venezuela/Venezuela2379.png",
    id: 153,
  },
  {
    nom: "Vietnam",
    logo: "http://apidata.myteam.ma/uploads/Asia/vietnam/Vietnam1542.png",
    id: 154,
  },
  {
    nom: "Yemen",
    logo: "http://apidata.myteam.ma/uploads/Asia/yemen/Yemen1550.png",
    id: 155,
  },
  {
    nom: "Zambia",
    logo: "http://apidata.myteam.ma/uploads/afrique/zambia/Zambia1507.png",
    id: 156,
  },
];
