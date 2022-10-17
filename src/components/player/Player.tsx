import {
  faFileImport,
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Modal,
  Col,
  Form,
  Row,
  Select,
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
import Modals from "../../costum/Modals";
import type { NotificationPlacement } from "antd/es/notification";
import Selects from "../../costum/Selects";
import { clubNom, countryNom } from "../../utils/ConstData";
import { ClubName, CountryName } from "../../interface/Utils";

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
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = React.useCallback(
    (placement: NotificationPlacement) => {
      console.log(2);
      api.info({
        message: `Notification ${placement}`,
        description: (
          <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
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
  };

  const dispash = useAppDispatch();
  const [modal2Open, setModal2Open] = useState(false);

  const playerSlices: PlayerStateInterface = useAppSelector(
    (state) => state.allPlayers
  );
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record: Item) => record.key === editingKey;
  useEffect(() => {
    dispash(getAllPlayerSuccessAction([]));
  }, []);
  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer le joueur</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        onOk() {
          dispash(deletePlayerAction(id));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    });
  };

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      photo: "",
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

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
      title: "operation",
      dataIndex: "operation",
      // render: (_: any, record: Item) => {
      //   const editable = isEditing(record);
      //   return editable ? (
      //     <span>
      //       <Typography.Link
      //         onClick={() => save(record.key)}
      //         style={{ marginRight: 8 }}
      //       >
      //         Save
      //       </Typography.Link>
      //       <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
      //         <a>Cancel</a>
      //       </Popconfirm>
      //     </span>
      //   ) : (
      //     <Typography.Link
      //       disabled={editingKey !== ""}
      //       onClick={() => edit(record)}
      //     >
      //       Edit
      //     </Typography.Link>
      //   );
      // },
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

  const { Option } = Select;

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
        <h2>Joueur</h2>
        <div>
          <Button
            onClick={() => setModal2Open(true)}
            type="primary"
            style={{
              borderColor: "#13c2c2",
              borderRadius: "10px",
              backgroundColor: "#13c2c2",
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
            onClick={() => setModal2Open(true)}
            type="primary"
            style={{
              borderRadius: "10px",
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
              placeholder="Pays"
              style={{
                width: "180px",
              }}
              options={countryNom.map((e: CountryName) => ({
                value: "",
                label: (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.nom}</p>
                    <img src={e.logo} />
                  </div>
                ),
              }))}
            />
          </Col>
          <Col span={4}>
            <Selects
              typeSelect=""
              placeholder="Equipes"
              style={{
                width: "150px",
              }}
              options={clubNom.map((e: ClubName) => ({
                value: e.id,
                label: e.label,
              }))}
            />
          </Col>
        </Row>

        <Table
          pagination={{ pageSize: 5 }}
          components={{
            body: {
              // cell: EditableCell,
            },
          }}
          dataSource={playerSlices.players.map((e) => {
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
                      color: "#38F281",
                    }}
                    icon={faPenToSquare}
                    onClick={() => setModal2Open(true)}
                  />
                  <FontAwesomeIcon
                    style={{
                      cursor: "pointer",
                      color: "crimson",
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
        {modal2Open && (
          <Modals
            title="Ajouter le joueur"
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

export default Player;
