import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  faFileImport,
  faPenToSquare,
  faPlus,
  faTrash,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { display } from "@mui/system";
import { Button, Modal, notification, Space, Switch, Table } from "antd";
import { NotificationPlacement } from "antd/es/notification";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { SaisonStateInterface } from "../../interface/redux-state/SaisonStateInterface";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import {
  deleteSaisonAction,
  getAllSaisonSuccessAction,
  status,
  updateSwitch,
} from "../../redux-store/reducer/SaisionSlice";
import AddSaison from "./models/AddSaison";
import UpdateSaison from "./models/UpdateSaison";

interface Item {
  key: number;
  saison: Date;
  status: boolean;
  changestatus: boolean;
  operation: any;
}

const { confirm } = Modal;
const Context = React.createContext({ name: "Default" });

type Props = {};

const Saison = (props: Props) => {
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
      ["saison"].includes(key) && console.log(`${e[key][0]}-03-23`);
      newData[key] = ["saison"].includes(key)
        ? [moment(`${e[key][0]}-03-23`), moment(`${e[key][1]}-03-23`)]
        : e[key];
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
            {({ name }) => "La saison a etait ajouter"}
          </Context.Consumer>
        ),
        placement,
      });
    },
    []
  );

  const saisonSlice: SaisonStateInterface = useAppSelector(
    (state) => state.allSaison
  );

  const dispash = useAppDispatch();

  useEffect(() => {
    dispash(getAllSaisonSuccessAction([]));
  }, []);

  useEffect(() => {
    if (saisonSlice.isValid) {
      setModal3Open(false);
      setModal2Open(false);
    }
  }, [saisonSlice.isValid]);

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer la competition</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        onOk() {
          dispash(deleteSaisonAction(id));
        },
        onCancel() {},
      });
    });
  };

  const columns = [
    {
      title: "Saison",
      dataIndex: "saison",
      width: "35%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "25%",
    },
    {
      title: "Change status",
      dataIndex: "changestatus",
      width: "25%",
    },
    {
      title: "operation",
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
        <h2>Saison</h2>
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
          dataSource={saisonSlice.saisons.map((e, i) => {
            return {
              key: e.id,
              saison: e.saison.join("-"),
              status: (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#00b33c",
                  }}
                >
                  {e.active === 1 ? (
                    <>
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{
                          marginRight: "10px",
                          marginBottom: "5px",
                          color: "#00b33c",
                        }}
                      />
                      <h4 style={{ color: "#00b33c" }}>active</h4>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        style={{
                          marginRight: "10px",
                          marginBottom: "5px",
                          color: "gray",
                        }}
                      />
                      <h4 style={{ color: "gray" }}>inactive</h4>
                    </>
                  )}
                </span>
              ),
              changestatus: (
                <>
                  {" "}
                  <Switch
                    checked={e.active === 1 ? true : false}
                    onClick={(checked: boolean) =>
                      checked ? dispash(updateSwitch(e.id)) : false
                    }
                  />
                </>
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
                    icon={faPenToSquare}
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
          <UpdateSaison
            UpdateData={updateData}
            title="Modifier la saison"
            centered={true}
            visible={modal3Open}
            loading={loading}
            openNotification={openNotification}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {modal2Open && (
          <AddSaison
            title="Ajouter la saison"
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

export default Saison;
