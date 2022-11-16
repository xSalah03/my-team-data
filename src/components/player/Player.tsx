import {
  faFileImport,
  faPlus,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Modal,
  Col,
  Row,
  Table,
  Space,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";
import { PlayerStateInterface } from "../../interface/redux-state/PlayerStateInterface";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  getAllPlayerSuccessAction,
  deletePlayerAction,
} from "../../redux-store/reducer/PlayerSlice";
import AddPlayer from "./models/AddPlayer";
import type { NotificationPlacement } from "antd/es/notification";
import Selects from "../../costum/Selects";
import { countryNom } from "../../utils/ConstData";
import { ClubName, CountryName } from "../../interface/Utils";
import UpdatePlayer from "./models/UpdatePlayer";
import moment from "moment";
import { status } from "../../redux-store/reducer/CompetitionSlice";
import { ClubStateInterface } from "../../interface/redux-state/ClubStateInterface";
import { getAllClubSuccessAction } from "../../redux-store/reducer/ClubSlice";

interface Item {
  key: string;
  photo: any;
  name: string;
  birth: Date;
  nat: string;
  team: string;
  post: string;
  foot: string;
  num: number;
  operation: any;
}

const { confirm } = Modal;

const Context = React.createContext({ name: "Default" });

const Player = () => {
  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const clubSlice: ClubStateInterface = useAppSelector((state) => {
    return state.allClubs;
  });

  const UpdateData = (e: any) => {
    let newData = Object.create({});
    Object.keys(e).forEach((key: any) => {
      newData[key] = ["nationalite"].includes(key)
        ? e[key].split(",")
        : ["date_naissance"].includes(key)
          ? moment(e[key])
          : e[key];
    });
    setUpdateData(newData);
    setModal3Open(true);
    dispash(status(false));
  };
  const openNotification = React.useCallback(
    (placement: NotificationPlacement) => {
      console.log(2);
      api.info({
        message: "Notification",
        description: (
          <Context.Consumer>
            {({ name }) => "Le joueur a etait ajouter"}
          </Context.Consumer>
        ),
        placement,
      });
    },
    []
  );

  const handleOk = () => {
    {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    }
  };

  const handleCancel = () => {
    setModal2Open(false);
    setModal3Open(false);
  };

  const playerSlices: PlayerStateInterface = useAppSelector(
    (state) => state.allPlayers
  );

  const dispash = useAppDispatch();

  useEffect(() => {
    dispash(getAllPlayerSuccessAction([]));
    dispash(getAllClubSuccessAction([]));
  }, []);

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer le joueur</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        okText: 'Oui',
        okType: 'danger',
        onOk() {
          dispash(deletePlayerAction(id));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    });
  };

  useEffect(() => {
    if (playerSlices.isValid) {
      setModal3Open(false);
      setModal2Open(false);
    }
  }, [playerSlices.isValid]);

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      width: "5%",
      editable: false,
    },
    {
      title: "Nom complet",
      dataIndex: "name",
      width: "15%",
      editable: true,
    },
    {
      title: "Date naissance",
      dataIndex: "birth",
      width: "20%",
      editable: true,
    },
    {
      title: "Nationalite",
      dataIndex: "nat",
      width: "15%",
      editable: true,
    },
    {
      title: "Equipe",
      dataIndex: "team",
      width: "10%",
      editable: true,
    },
    {
      title: "Poste",
      dataIndex: "post",
      width: "5%",
      editable: true,
    },
    {
      title: "Pied",
      dataIndex: "foot",
      width: "5%",
      editable: true,
    },
    {
      title: "N°",
      dataIndex: "num",
      width: "5%",
      editable: true,
    },
    {
      title: "Operation",
      dataIndex: "operation",
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
    };
  });

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Joueur</h2>
        <div>
          <Button
            onClick={() => setModal2Open(true)}
            type="primary"
            style={{
              borderColor: "#ddccff",
              borderRadius: "10px",
              backgroundColor: "#9966ff",
              marginRight: "10px",
            }}
          >
            <h4
              style={{
                marginRight: "10px",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={faFileImport}
                style={{
                  marginRight: "10px",
                }}
              />
              Importer
            </h4>
          </Button>
          <Button
            onClick={() => {
              setModal2Open(true);
              dispash(status(false));
            }}
            type="primary"
            style={{
              borderColor: "#b3d1ff",
              borderRadius: "10px",
              backgroundColor: "#4da6ff",
            }}
          >
            <h4
              style={{
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{
                  marginRight: "10px",
                }}
              />
              Ajouter
            </h4>
          </Button>
        </div>
      </div>
      <div
        className="table"
        style={{
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Row
          justify="start"
          style={{
            marginBottom: "20px",
          }}
        >
          <Col span={4}>
            <Selects
              typeSelect=""
              showSearch
              placeholder="Pays"
              style={{
                width: "180px",
              }}
              options={countryNom.map((e: CountryName) => ({
                value: e.nom,
                label: (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.nom}</p>
                    <img
                      style={{
                        marginTop: "5px",
                        width: "20px",
                        height: "20px",
                      }}
                      src={e.logo}
                    />
                  </div>
                ),
              }))}
            />
          </Col>
          <Col span={4}>
            <Selects
              typeSelect=""
              showSearch
              placeholder="Equipes"
              style={{
                width: "200px",
              }}
              options={clubSlice.clubs.map((e: ClubName) => ({
                value: e.id,
                label: (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.nom}</p>
                    <img
                      style={{
                        marginTop: "5px",
                        width: "20px",
                        height: "20px",
                      }}
                      src={e.logo}
                    />
                  </div>
                ),
              }))}
            />
          </Col>
        </Row>

        <Table
          pagination={{ pageSize: 5 }}
          components={{
            body: {},
          }}
          dataSource={playerSlices.players.map((e, i) => {
            return {
              key: e.id.toString(),
              photo: (
                <Avatar
                  size="large"
                  icon={<img src={e.image} alt={"photo"} />}
                />
              ),
              name: (
                <h4>
                  {e.nom} {e.prenom}
                </h4>
              ),
              birth: e.date_naissance,
              nat: e.nationalite,
              team: e.id_equipe,
              post: e.poste,
              foot: e.lateralite,
              num: e.numero_dossard,
              operation: (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      cursor: "pointer",
                      color: "#00b33c",
                    }}
                    icon={faPen}
                    onClick={() => UpdateData(e)}
                  />
                  <FontAwesomeIcon
                    style={{
                      cursor: "pointer",
                      color: "#b30000",
                    }}
                    icon={faTrash}
                    onClick={() => showConfirm(e.id)}
                  />
                </span>
              ),
            };
          })}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </div>
      <>
        {modal3Open && (
          <UpdatePlayer
            UpdateData={updateData}
            title="Modifier le joueur"
            centered={true}
            visible={modal3Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {modal2Open && (
          <AddPlayer
            title="Ajouter le joueur"
            centered={true}
            visible={modal2Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}
      </>
      <Context.Provider value={{ name: "Ant Design" }}>
        {contextHolder}
        <Space></Space>
      </Context.Provider>
    </>
  );
};

export default Player;
