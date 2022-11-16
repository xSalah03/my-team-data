import { Avatar, Button, Modal, notification, Space, Table } from "antd";
import { NotificationPlacement } from "antd/es/notification";
import React, { useEffect, useState } from "react";
import { ArbitreStateInterface } from "../../interface/redux-state/ArbitreStateInterface";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import {
  deleteArbitreAction,
  getAllArbitreSuccessAction,
  status,
} from "../../redux-store/reducer/ArbitreSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import UpdateArbitre from "./models/UpdateArbitre";
import AddArbitre from "./models/AddArbitre";

interface Item {
  key: number;
  name: string;
  fname: string;
  role: string;
  nat: string;
  photo: any;
  operation: any;
}

type Props = {};

const { confirm } = Modal;
const Context = React.createContext({ name: "Default" });

const Arbitre = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  console.log(modal2Open);
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

  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(false);

  const UpdateData = (e: any) => {
    let newData = Object.create({});
    Object.keys(e).forEach((key: any) => {
      newData[key] = e[key];
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
            {({ name }) => "L'arbitre a etait ajouter"}
          </Context.Consumer>
        ),
        placement,
      });
    },
    []
  );

  const arbitreSlice: ArbitreStateInterface = useAppSelector(
    (state) => state.allArbitres
  );

  const dispash = useAppDispatch();

  useEffect(() => {
    dispash(getAllArbitreSuccessAction([]));
  }, []);

  useEffect(() => {
    if (arbitreSlice.isValid) {
      setModal3Open(false);
      setModal2Open(false);
    }
  }, [arbitreSlice.isValid]);

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer la competition</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        okText: 'Oui',
        okType: 'danger',
        onOk() {
          dispash(deleteArbitreAction(id));
        },
        onCancel() { },
      });
    });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      width: "10%",
    },
    {
      title: "Nom",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Prenom",
      dataIndex: "fname",
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "20%",
    },
    {
      title: "Nationalite",
      dataIndex: "nat",
      width: "20%",
    },
    {
      title: "Operation",
      dataIndex: "operation",
    },
  ];

  const mergedColumns = columns.map((col) => {
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
        <h2>Competition</h2>
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
        <Table
          pagination={{ pageSize: 5 }}
          components={{
            body: {},
          }}
          dataSource={arbitreSlice.arbitres.map((e, i) => {
            return {
              key: e.id,
              name: <h4>{e.nom}</h4>,
              fname: <h4>{e.prenom}</h4>,
              role: e.role,
              nat: e.nationalite,
              photo: (
                <Avatar
                  size="large"
                  icon={<img src={e.photo} alt={"photo"} />}
                />
              ),
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
          <UpdateArbitre
            UpdateData={updateData}
            title="Modifier l'arbitre"
            centered={true}
            visible={modal3Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {modal2Open && (
          <AddArbitre
            title="Ajouter l'arbitre"
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

export default Arbitre;
