import {
  ClubGender,
  ClubName,
  CountryName,
  PlayerFoot,
  PlayerGender,
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
    id: "D",
    label: "Droite",
  },
  {
    id: "G",
    label: "Gauche",
  },
];

export const playerSexe: PlayerGender[] = [
  {
    id: "M",
    label: "Masculin",
  },
  {
    id: "F",
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
  },
  {
    nom: "Albania",
    logo: "http://apidata.myteam.ma/uploads/Europe/albania/FK Kukesi577.png",
  },
  {
    nom: "Algeria",
    logo: "http://apidata.myteam.ma/uploads/afrique/algeria/CR Belouizdad904.png",
  },
  {
    nom: "Andorra",
    logo: "http://apidata.myteam.ma/uploads/Europe/andorra/FC Santa Coloma591.png",
  },
  {
    nom: "Angola",
    logo: "http://apidata.myteam.ma/uploads/afrique/angola/Angola1529.png",
  },
  {
    nom: "Argentina",
    logo: "http://apidata.myteam.ma/uploads/Amerique/argentina/Argentina26.png",
  },
  {
    nom: "Armenia",
    logo: "http://apidata.myteam.ma/uploads/Asia/armenia/Alashkert582.png",
  },
  {
    nom: "Austria",
    logo: "http://apidata.myteam.ma/uploads/Europe/austria/Red Bull Salzburg571.png",
  },
  {
    nom: "Bahamas",
    logo: "http://apidata.myteam.ma/uploads/Amerique/bahamas/Bahamas5157.png",
  },
  {
    nom: "Bahrain",
    logo: "http://apidata.myteam.ma/uploads/Asia/bahrain/Bahrain1547.png",
  },
  {
    nom: "Bangladesh",
    logo: "http://apidata.myteam.ma/uploads/Asia/bangladesh/Bangladesh1560.png",
  },
  {
    nom: "Barbados",
    logo: "http://apidata.myteam.ma/uploads/Amerique/barbados/Barbados5527.png",
  },
  {
    nom: "Belarus",
    logo: "http://apidata.myteam.ma/uploads/Europe/belarus/FC Slutsk379.png",
  },
  {
    nom: "Belgium",
    logo: "http://apidata.myteam.ma/uploads/Europe/belgium/Belgium1.png",
  },
  {
    nom: "Belize",
    logo: "http://apidata.myteam.ma/uploads/Amerique/belize/San Pedro5469.png",
  },
  {
    nom: "Benin",
    logo: "http://apidata.myteam.ma/uploads/afrique/benin/Benin1516.png",
  },
  {
    nom: "Bhutan",
    logo: "http://apidata.myteam.ma/uploads/Asia/bhutan/Bhutan1540.png",
  },
  {
    nom: "Bolivia",
    logo: "http://apidata.myteam.ma/uploads/Amerique/bolivia/Bolivia2381.png",
  },
  {
    nom: "Bosnia",
    logo: "http://apidata.myteam.ma/uploads/Europe/bosnia/Zrinjski588.png",
  },
  {
    nom: "Botswana",
    logo: "http://apidata.myteam.ma/uploads/afrique/botswana/Botswana1520.png",
  },
  {
    nom: "Brazil",
    logo: "http://apidata.myteam.ma/uploads/Amerique/brazil/Brazil6.png",
  },
  {
    nom: "Bulgaria",
    logo: "http://apidata.myteam.ma/uploads/Europe/bulgaria/Ludogorets566.png",
  },
  {
    nom: "Burkina-Faso",
    logo: "http://apidata.myteam.ma/uploads/afrique/burkina-faso/Burkina Faso1502.png",
  },
  {
    nom: "Burundi",
    logo: "http://apidata.myteam.ma/uploads/afrique/burundi/Burundi1528.png",
  },
  {
    nom: "Cambodia",
    logo: "http://apidata.myteam.ma/uploads/Asia/cambodia/Cambodia1543.png",
  },
  {
    nom: "Cameroon",
    logo: "http://apidata.myteam.ma/uploads/afrique/cameroon/Cameroon1530.png",
  },
  {
    nom: "Canada",
    logo: "http://apidata.myteam.ma/uploads/Amerique/canada/Toronto FC1601.png",
  },
  {
    nom: "Chile",
    logo: "http://apidata.myteam.ma/uploads/Amerique/chile/Chile W1977.png",
  },
  {
    nom: "China",
    logo: "http://apidata.myteam.ma/uploads/Asia/china/Beijing Guoan830.png",
  },
  {
    nom: "Colombia",
    logo: "http://apidata.myteam.ma/uploads/Amerique/colombia/Colombia8.png",
  },
  {
    nom: "Comoros",
    logo: "http://apidata.myteam.ma/uploads/afrique/comoros/Comoros1524.png",
  },
  {
    nom: "Congo",
    logo: "http://apidata.myteam.ma/uploads/afrique/congo/Congo1517.png",
  },
  {
    nom: "Costa-Rica",
    logo: "http://apidata.myteam.ma/uploads/Amerique/costa-rica/Costa Rica29.png",
  },
  {
    nom: "Croatia",
    logo: "http://apidata.myteam.ma/uploads/Europe/croatia/Croatia3.png",
  },
  {
    nom: "Cuba",
    logo: "http://apidata.myteam.ma/uploads/Amerique/cuba/Cuba2388.png",
  },
  {
    nom: "Cyprus",
    logo: "http://apidata.myteam.ma/uploads/Asia/cyprus/Apollon Limassol602.png",
  },
  {
    nom: "Czech-Republic",
    logo: "http://apidata.myteam.ma/uploads/Europe/czech-republic/Slavia Praha560.png",
  },
  {
    nom: "Denmark",
    logo: "http://apidata.myteam.ma/uploads/Europe/denmark/Denmark21.png",
  },
  {
    nom: "Djibouti",
    logo: "http://apidata.myteam.ma/uploads/afrique/djibouti/Djibouti1535.png",
  },
  {
    nom: "Dominican-Republic",
    logo: "http://apidata.myteam.ma/uploads/Amerique/dominican-republic/Dominican Republic5532.png",
  },
  {
    nom: "Ecuador",
    logo: "http://apidata.myteam.ma/uploads/Amerique/ecuador/Emelec1148.png",
  },
  {
    nom: "Egypt",
    logo: "http://apidata.myteam.ma/uploads/afrique/egypt/Egypt32.png",
  },
  {
    nom: "El-Salvador",
    logo: "http://apidata.myteam.ma/uploads/Amerique/el-salvador/Alianza4299.png",
  },
  {
    nom: "Eritrea",
    logo: "http://apidata.myteam.ma/uploads/afrique/eritrea/Eritrea1498.png",
  },
  {
    nom: "Estonia",
    logo: "http://apidata.myteam.ma/uploads/Europe/estonia/Kalju Nomme662.png",
  },
  {
    nom: "Eswatini",
    logo: "http://apidata.myteam.ma/uploads/afrique/eswatini/Eswatini2995.png",
  },
  {
    nom: "Ethiopia",
    logo: "http://apidata.myteam.ma/uploads/afrique/ethiopia/Ethiopia1506.png",
  },
  {
    nom: "Finland",
    logo: "http://apidata.myteam.ma/uploads/Europe/finland/IFK Mariehamn587.png",
  },
  {
    nom: "France",
    logo: "http://apidata.myteam.ma/uploads/Europe/france/France2.png",
  },
  {
    nom: "Gabon",
    logo: "http://apidata.myteam.ma/uploads/afrique/gabon/Gabon1503.png",
  },
  {
    nom: "Gambia",
    logo: "http://apidata.myteam.ma/uploads/afrique/gambia/Gambia1492.png",
  },
  {
    nom: "Georgia",
    logo: "http://apidata.myteam.ma/uploads/Asia/georgia/Samtredia581.png",
  },
  {
    nom: "Germany",
    logo: "http://apidata.myteam.ma/uploads/Europe/germany/Germany25.png",
  },
  {
    nom: "Ghana",
    logo: "http://apidata.myteam.ma/uploads/afrique/ghana/Ghana1504.png",
  },
  {
    nom: "Greece",
    logo: "http://apidata.myteam.ma/uploads/Europe/greece/Olympiakos Piraeus553.png",
  },
  {
    nom: "Grenada",
    logo: "http://apidata.myteam.ma/uploads/Amerique/grenada/Grenada5533.png",
  },
  {
    nom: "Guatemala",
    logo: "http://apidata.myteam.ma/uploads/Amerique/guatemala/Achuapa3636.png",
  },
  {
    nom: "Guinea",
    logo: "http://apidata.myteam.ma/uploads/afrique/guinea/Guinea1509.png",
  },
  {
    nom: "Guinea-Bissau",
    logo: "http://apidata.myteam.ma/uploads/afrique/guinea-bissau/Guinea-Bissau1513.png",
  },
  {
    nom: "Guyana",
    logo: "http://apidata.myteam.ma/uploads/Amerique/guyana/Guyana5162.png",
  },
  {
    nom: "Haiti",
    logo: "http://apidata.myteam.ma/uploads/Amerique/haiti/Haiti2386.png",
  },
  {
    nom: "Honduras",
    logo: "http://apidata.myteam.ma/uploads/Amerique/honduras/CD Marathon1050.png",
  },
  {
    nom: "Hungary",
    logo: "http://apidata.myteam.ma/uploads/Europe/hungary/Budapest Honved576.png",
  },
  {
    nom: "Iceland",
    logo: "http://apidata.myteam.ma/uploads/Europe/iceland/Iceland18.png",
  },
  {
    nom: "India",
    logo: "http://apidata.myteam.ma/uploads/Asia/india/India1537.png",
  },
  {
    nom: "Indonesia",
    logo: "http://apidata.myteam.ma/uploads/Asia/indonesia/Indonesia1571.png",
  },
  {
    nom: "Iran",
    logo: "http://apidata.myteam.ma/uploads/Asia/iran/Iran22.png",
  },
  {
    nom: "Iraq",
    logo: "http://apidata.myteam.ma/uploads/Asia/iraq/Iraq1567.png",
  },
  {
    nom: "Ireland",
    logo: "http://apidata.myteam.ma/uploads/Europe/ireland/Dundalk584.png",
  },
  {
    nom: "Israel",
    logo: "http://apidata.myteam.ma/uploads/Asia/israel/Hapoel Beer Sheva563.png",
  },
  {
    nom: "Italy",
    logo: "http://apidata.myteam.ma/uploads/Europe/italy/Lazio487.png",
  },
  {
    nom: "Ivory-Coast",
    logo: "http://apidata.myteam.ma/uploads/afrique/ivory-coast/AFAD4511.png",
  },
  {
    nom: "Jamaica",
    logo: "http://apidata.myteam.ma/uploads/Amerique/jamaica/Jamaica W1785.png",
  },
  {
    nom: "Japan",
    logo: "http://apidata.myteam.ma/uploads/Asia/japan/Japan12.png",
  },
  {
    nom: "Jordan",
    logo: "http://apidata.myteam.ma/uploads/Asia/jordan/Jordan1548.png",
  },
  {
    nom: "Kazakhstan",
    logo: "http://apidata.myteam.ma/uploads/Asia/kazakhstan/FC Astana562.png",
  },
  {
    nom: "Kenya",
    logo: "http://apidata.myteam.ma/uploads/afrique/kenya/Kenya1511.png",
  },
  {
    nom: "Kuwait",
    logo: "http://apidata.myteam.ma/uploads/Asia/kuwait/Kuwait1570.png",
  },
  {
    nom: "Kyrgyzstan",
    logo: "http://apidata.myteam.ma/uploads/Asia/kyrgyzstan/Kyrgyzstan1554.png",
  },
  {
    nom: "Laos",
    logo: "http://apidata.myteam.ma/uploads/Asia/laos/Laos1558.png",
  },
  {
    nom: "Latvia",
    logo: "http://apidata.myteam.ma/uploads/Europe/latvia/Spartaks Jurmala589.png",
  },
  {
    nom: "Lebanon",
    logo: "http://apidata.myteam.ma/uploads/Asia/lebanon/Lebanon1551.png",
  },
  {
    nom: "Lesotho",
    logo: "http://apidata.myteam.ma/uploads/afrique/lesotho/Lesotho1518.png",
  },
  {
    nom: "Liberia",
    logo: "http://apidata.myteam.ma/uploads/afrique/liberia/Liberia1525.png",
  },
  {
    nom: "Libya",
    logo: "http://apidata.myteam.ma/uploads/afrique/libya/Libya1526.png",
  },
  {
    nom: "Liechtenstein",
    logo: "http://apidata.myteam.ma/uploads/Europe/liechtenstein/FC Vaduz660.png",
  },
  {
    nom: "Lithuania",
    logo: "http://apidata.myteam.ma/uploads/Europe/lithuania/FK Zalgiris Vilnius586.png",
  },
  {
    nom: "Luxembourg",
    logo: "http://apidata.myteam.ma/uploads/Europe/luxembourg/F91 Dudelange578.png",
  },
  {
    nom: "Macedonia",
    logo: "http://apidata.myteam.ma/uploads/Europe/macedonia/Vardar Skopje574.png",
  },
  {
    nom: "Madagascar",
    logo: "http://apidata.myteam.ma/uploads/afrique/madagascar/Madagascar1490.png",
  },
  {
    nom: "Malawi",
    logo: "http://apidata.myteam.ma/uploads/afrique/malawi/Malawi1495.png",
  },
  {
    nom: "Malaysia",
    logo: "http://apidata.myteam.ma/uploads/Asia/malaysia/Malaysia1538.png",
  },
  {
    nom: "Maldives",
    logo: "http://apidata.myteam.ma/uploads/Asia/maldives/Maldives1549.png",
  },
  {
    nom: "Mali",
    logo: "http://apidata.myteam.ma/uploads/afrique/mali/Mali1500.png",
  },
  {
    nom: "Malta",
    logo: "http://apidata.myteam.ma/uploads/Europe/malta/Valletta FC659.png",
  },
  {
    nom: "Mauritania",
    logo: "http://apidata.myteam.ma/uploads/afrique/mauritania/Mauritania1491.png",
  },
  {
    nom: "Mauritius",
    logo: "http://apidata.myteam.ma/uploads/afrique/mauritius/Mauritius1497.png",
  },
  {
    nom: "Mexico",
    logo: "http://apidata.myteam.ma/uploads/Amerique/mexico/Mexico16.png",
  },
  {
    nom: "Moldova",
    logo: "http://apidata.myteam.ma/uploads/Europe/moldova/Sheriff Tiraspol568.png",
  },
  {
    nom: "Mongolia",
    logo: "http://apidata.myteam.ma/uploads/Asia/mongolia/Mongolia5534.png",
  },
  {
    nom: "Montenegro",
    logo: "http://apidata.myteam.ma/uploads/Europe/montenegro/Buducnost Podgorica579.png",
  },
  {
    nom: "Morocco",
    logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Morocco31.png",
  },
  {
    nom: "Mozambique",
    logo: "http://apidata.myteam.ma/uploads/afrique/mozambique/Mozambique1512.png",
  },
  {
    nom: "Myanmar",
    logo: "http://apidata.myteam.ma/uploads/Asia/myanmar/Myanmar1556.png",
  },
  {
    nom: "Namibia",
    logo: "http://apidata.myteam.ma/uploads/afrique/namibia/Namibia1493.png",
  },
  {
    nom: "Nepal",
    logo: "http://apidata.myteam.ma/uploads/Asia/nepal/Nepal1545.png",
  },
  {
    nom: "Netherlands",
    logo: "http://apidata.myteam.ma/uploads/Europe/netherlands/PEC Zwolle193.png",
  },
  {
    nom: "Nicaragua",
    logo: "http://apidata.myteam.ma/uploads/Amerique/nicaragua/Chinandega4639.png",
  },
  {
    nom: "Niger",
    logo: "http://apidata.myteam.ma/uploads/afrique/niger/Niger1505.png",
  },
  {
    nom: "Nigeria",
    logo: "http://apidata.myteam.ma/uploads/afrique/nigeria/Nigeria19.png",
  },
  {
    nom: "North-Korea",
    logo: "http://apidata.myteam.ma/uploads/Asia/north-korea/North Korea1561.png",
  },
  {
    nom: "Norway",
    logo: "http://apidata.myteam.ma/uploads/Europe/norway/Brann319.png",
  },
  {
    nom: "Oman",
    logo: "http://apidata.myteam.ma/uploads/Asia/oman/Oman1552.png",
  },
  {
    nom: "Pakistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/pakistan/Pakistan5535.png",
  },
  {
    nom: "Palestine",
    logo: "http://apidata.myteam.ma/uploads/Asia/palestine/Palestine1562.png",
  },
  {
    nom: "Panama",
    logo: "http://apidata.myteam.ma/uploads/Amerique/panama/Panama11.png",
  },
  {
    nom: "Paraguay",
    logo: "http://apidata.myteam.ma/uploads/Amerique/paraguay/Club Guarani1174.png",
  },
  {
    nom: "Peru",
    logo: "http://apidata.myteam.ma/uploads/Amerique/peru/Peru30.png",
  },
  {
    nom: "Philippines",
    logo: "http://apidata.myteam.ma/uploads/Asia/philippines/Philippines1555.png",
  },
  {
    nom: "Poland",
    logo: "http://apidata.myteam.ma/uploads/Europe/poland/Poland24.png",
  },
  {
    nom: "Portugal",
    logo: "http://apidata.myteam.ma/uploads/Europe/portugal/Portugal27.png",
  },
  {
    nom: "Qatar",
    logo: "http://apidata.myteam.ma/uploads/Asia/qatar/Qatar1569.png",
  },
  {
    nom: "Romania",
    logo: "http://apidata.myteam.ma/uploads/Europe/romania/FCSB559.png",
  },
  {
    nom: "Russia",
    logo: "http://apidata.myteam.ma/uploads/Europe/russia/Russia4.png",
  },
  {
    nom: "Rwanda",
    logo: "http://apidata.myteam.ma/uploads/afrique/rwanda/Rwanda1514.png",
  },
  {
    nom: "San-Marino",
    logo: "http://apidata.myteam.ma/uploads/Europe/san-marino/Folgore672.png",
  },
  {
    nom: "Saudi-Arabia",
    logo: "http://apidata.myteam.ma/uploads/Asia/saudi-arabia/Saudi Arabia23.png",
  },
  {
    nom: "Serbia",
    logo: "http://apidata.myteam.ma/uploads/Europe/serbia/Serbia14.png",
  },
  {
    nom: "Seychelles",
    logo: "http://apidata.myteam.ma/uploads/afrique/seychelles/Seychelles1515.png",
  },
  {
    nom: "Singapore",
    logo: "http://apidata.myteam.ma/uploads/Asia/singapore/Singapore1546.png",
  },
  {
    nom: "Slovakia",
    logo: "http://apidata.myteam.ma/uploads/Europe/slovakia/AS Trencin655.png",
  },
  {
    nom: "Slovenia",
    logo: "http://apidata.myteam.ma/uploads/Europe/slovenia/Maribor552.png",
  },
  {
    nom: "South-Africa",
    logo: "http://apidata.myteam.ma/uploads/afrique/south-africa/South Africa1531.png",
  },
  {
    nom: "South-Korea",
    logo: "http://apidata.myteam.ma/uploads/Asia/south-korea/South Korea17.png",
  },
  {
    nom: "South-Sudan",
    logo: "http://apidata.myteam.ma/uploads/afrique/south-sudan/Atlabara6412.png",
  },
  {
    nom: "Spain",
    logo: "http://apidata.myteam.ma/uploads/Europe/spain/Spain9.png",
  },
  {
    nom: "Sudan",
    logo: "http://apidata.myteam.ma/uploads/afrique/sudan/South Sudan1496.png",
  },
  {
    nom: "Sweden",
    logo: "http://apidata.myteam.ma/uploads/Europe/sweden/Sweden5.png",
  },
  {
    nom: "Switzerland",
    logo: "http://apidata.myteam.ma/uploads/Europe/switzerland/Switzerland15.png",
  },
  {
    nom: "Syria",
    logo: "http://apidata.myteam.ma/uploads/Asia/syria/Syria1565.png",
  },
  {
    nom: "Tajikistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/tajikistan/Tajikistan1536.png",
  },
  {
    nom: "Tanzania",
    logo: "http://apidata.myteam.ma/uploads/afrique/tanzania/Tanzania1489.png",
  },
  {
    nom: "Thailand",
    logo: "http://apidata.myteam.ma/uploads/Asia/thailand/Thailand1564.png",
  },
  {
    nom: "Togo",
    logo: "http://apidata.myteam.ma/uploads/afrique/togo/Togo1534.png",
  },
  {
    nom: "Tunisia",
    logo: "http://apidata.myteam.ma/uploads/afrique/tunisia/Tunisia28.png",
  },
  {
    nom: "Turkey",
    logo: "http://apidata.myteam.ma/uploads/Asia/turkey/Besiktas549.png",
  },
  {
    nom: "Turkmenistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/turkmenistan/Turkmenistan1539.png",
  },
  {
    nom: "USA",
    logo: "http://apidata.myteam.ma/uploads/Amerique/usa/Seattle Sounders1595.png",
  },
  {
    nom: "Uganda",
    logo: "http://apidata.myteam.ma/uploads/afrique/uganda/Uganda1519.png",
  },
  {
    nom: "Ukraine",
    logo: "http://apidata.myteam.ma/uploads/Europe/ukraine/Shakhtar Donetsk550.png",
  },
  {
    nom: "United-Arab-Emirates",
    logo: "http://apidata.myteam.ma/uploads/Asia/united-arab-emirates/United Arab Emirates1563.png",
  },
  {
    nom: "Uruguay",
    logo: "http://apidata.myteam.ma/uploads/Amerique/uruguay/Uruguay7.png",
  },
  {
    nom: "Uzbekistan",
    logo: "http://apidata.myteam.ma/uploads/Asia/uzbekistan/Uzbekistan1568.png",
  },
  {
    nom: "Venezuela",
    logo: "http://apidata.myteam.ma/uploads/Amerique/venezuela/Venezuela2379.png",
  },
  {
    nom: "Vietnam",
    logo: "http://apidata.myteam.ma/uploads/Asia/vietnam/Vietnam1542.png",
  },
  {
    nom: "Yemen",
    logo: "http://apidata.myteam.ma/uploads/Asia/yemen/Yemen1550.png",
  },
  {
    nom: "Zambia",
    logo: "http://apidata.myteam.ma/uploads/afrique/zambia/Zambia1507.png",
  },
];
