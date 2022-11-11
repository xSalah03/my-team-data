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
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification";
import Selects from "../../costum/Selects";
import { countryNom } from "../../utils/ConstData";
import { ClubName, CountryName } from "../../interface/Utils";
import AddClub from "./models/AddClub";
import { ClubStateInterface } from "../../interface/redux-state/ClubStateInterface";
import {
  deleteClubAction,
  getAllClubSuccessAction,
  status,
} from "../../redux-store/reducer/ClubSlice";
import UpdateClub from "./models/UpdateClub";
import { getAllCompetitionSuccessAction } from "../../redux-store/reducer/CompetitionSlice";

interface Item {
  key: string;
  photo: any;
  name: string;
  slug: string;
  type: string;
  pays: string;
  sexe: string;
  operation: any;
}

const { confirm } = Modal;

const Context = React.createContext({ name: "Default" });

const Club = () => {
  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const UpdateData = (e: any) => {
    let newData = Object.create({});
    Object.keys(e).forEach((key: any) => {
      newData[key] = ["competitions"].includes(key) ? Number(e[key]) : e[key];
    });
    setUpdateData(newData);
    setModal3Open(true);
    dispash(status(false));
  };
  const openNotification = React.useCallback(
    (placement: NotificationPlacement) => {
      api.info({
        message: "Notification",
        description: (
          <Context.Consumer>
            {({ name }) => "Le club a etait ajouter"}
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

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer le club</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        onOk() {
          dispash(deleteClubAction(id));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    });
  };

  const handleCancel = () => {
    setModal2Open(false);
    setModal3Open(false);
  };

  const dispash = useAppDispatch();
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const clubSlices: ClubStateInterface = useAppSelector(
    (state) => state.allClubs
  );

  useEffect(() => {
    dispash(getAllClubSuccessAction([]));
    dispash(getAllCompetitionSuccessAction([]));
  }, []);

  useEffect(() => {
    if (clubSlices.isValid) {
      setModal3Open(false);
      setModal2Open(false);
    }
  }, [clubSlices.isValid]);

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
      width: "20%",
      editable: true,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      width: "20%",
      editable: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "20%",
      editable: true,
    },
    {
      title: "Pays",
      dataIndex: "pays",
      width: "10%",
      editable: true,
    },
    {
      title: "Genre",
      dataIndex: "sexe",
      width: "10%",
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
    <div>
      <div
        style={{
          marginTop: "20px",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Equipe</h2>
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
              options={clubSlices.clubs.map((e: ClubName) => ({
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
          dataSource={clubSlices.clubs.map((e, i) => {
            return {
              key: e.id.toString(),
              photo: <img style={{width: "50px"}} src={e.logo} alt={"photo"} />,
              name: <h4>{e.nom}</h4>,
              slug: e.slug,
              type: e.type,
              pays: e.country,
              sexe: e.sexe,
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
          <UpdateClub
            UpdateData={updateData}
            title="Modifier le club"
            centered={true}
            visible={modal3Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}
        {modal2Open && (
          <AddClub
            title="Ajouter le club"
            centered={true}
            visible={modal2Open}
            loading={loading}
            // onOk={() => setModal2Open(false)}
            openNotification={openNotification}
            // onCancel={() => setModal2Open(false)}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}
        {/* {
            title,centered,visible,onOk,onCancel
          }  */}
      </>
      <Context.Provider value={{ name: "Ant Design" }}>
        {contextHolder}
        <Space></Space>
      </Context.Provider>
    </div>
  );
};

export default Club;
