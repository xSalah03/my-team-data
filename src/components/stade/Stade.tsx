import { Button, Modal, notification, Space, Table } from "antd";
import { NotificationPlacement } from "antd/es/notification";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { StadeStateInterface } from "../../interface/redux-state/StadeStateInterface";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import {
  deleteStadeAction,
  getAllStadeSuccessAction,
  status,
} from "../../redux-store/reducer/StadeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AddStade from "./models/AddStade";
import UpdateStade from "./models/UpdateStade";

interface Item {
  key: number;
  name: string;
  adresse: string;
  operation: any;
}

type Props = {};

const { confirm } = Modal;
const Context = React.createContext({ name: "Default" });

const Stade = (props: Props) => {
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
            {({ name }) => "Le stade a etait ajouter"}
          </Context.Consumer>
        ),
        placement,
      });
    },
    []
  );

  const stadeSlice: StadeStateInterface = useAppSelector(
    (state) => state.allStades
  );

  const dispash = useAppDispatch();

  useEffect(() => {
    dispash(getAllStadeSuccessAction([]));
  }, []);

  useEffect(() => {
    if (stadeSlice.isValid) {
      setModal3Open(false);
      setModal2Open(false);
    }
  }, [stadeSlice.isValid]);

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer le stade</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        onOk() {
          dispash(deleteStadeAction(id));
        },
        onCancel() {},
      });
    });
  };

  const columns = [
    {
      title: "Nom",
      dataIndex: "name",
      width: "45%",
    },
    {
      title: "Adresse",
      dataIndex: "adresse",
      width: "40%",
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
        <h2>Stade</h2>
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
          dataSource={stadeSlice.stades.map((e, i) => {
            return {
              key: e.id,
              name: <h4>{e.nom}</h4>,
              adresse: <h4>{e.adresse}</h4>,
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
          <UpdateStade
            UpdateData={updateData}
            title="Modifier le stade"
            centered={true}
            visible={modal3Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {modal2Open && (
          <AddStade
            title="Ajouter le stade"
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

export default Stade;
