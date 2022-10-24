import { Button, Col, Modal, notification, Row, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  deleteCompetitionAction,
  getAllCompetitionSuccessAction,
  status,
} from "../../redux-store/reducer/CompetitionSlice";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks";
import {
  faFileImport,
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CompetitionStateInterface } from "../../interface/redux-state/CompetitionStateInterface";
import moment from "moment";
import { NotificationPlacement } from "antd/es/notification";
import AddCompetition from "./models/AddCompetition";
import UpdateCompetition from "./models/UpdateCompetition";

interface Item {
  key: string;
  label: any;
  dateDebut: Date;
  dateFin: Date;
  location: string;
  paysOrg: string;
}

const { confirm } = Modal;

const Context = React.createContext({ name: "Default" });

function Competition() {
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleCancel = () => {
    setModal2Open(false);
    setModal3Open(false);
  };

  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(false);

  const UpdateData = (e: any) => {
    let newData = Object.create({});
    Object.keys(e).forEach((key: any) => {
      newData[key] = ["pays_org"].includes(key)
        ? e[key].split(",")
        : ["date_debut", "date_fin"].includes(key)
        ? moment(e[key])
        : e[key];
    });
    setUpdateData(newData);
    setModal3Open(true);
    dispash(status(false));
  };

  const handleOk = () => {
    {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    }
  };

  const openNotification = React.useCallback(
    (placement: NotificationPlacement) => {
      console.log(2);
      api.info({
        message: "Notification",
        description: (
          <Context.Consumer>
            {({ name }) => "La competition a etait ajouter"}
          </Context.Consumer>
        ),
        placement,
      });
    },
    []
  );

  const competitionSlices: CompetitionStateInterface = useAppSelector(
    (state) => state.allCompetitions
  );

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer la competition</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        onOk() {
          dispash(deleteCompetitionAction(id));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    });
  };

  const dispash = useAppDispatch();

  useEffect(() => {
    
    dispash(getAllCompetitionSuccessAction([]));
  }, []);
  useEffect(() => {
    console.log("in")
   if(competitionSlices.isValid) setModal3Open(false);
  }, [competitionSlices.isValid]);

  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      width: "20%",
    },
    {
      title: "Date debut",
      dataIndex: "dateDebut",
      width: "15%",
    },
    {
      title: "Date fin",
      dataIndex: "dateFin",
      width: "15%",
    },
    {
      title: "Location",
      dataIndex: "location",
      width: "15%",
    },
    {
      title: "Pays Organictrice",
      dataIndex: "paysOrg",
      width: "15%",
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
  console.log(competitionSlices.competitions);
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
            onClick={() => setModal2Open(true)}
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
          dataSource={competitionSlices.competitions.map((e, i) => {
            return {
              key: e.id.toString(),
              label: <h4>{e.label}</h4>,
              dateDebut: new Date(e.date_debut).toLocaleDateString(),
              dateFin: new Date(e.date_fin).toLocaleDateString(),
              location: e.location,
              paysOrg: e.pays_org,
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
        {modal3Open  && (
          <UpdateCompetition
            
            UpdateData={updateData}
            title="Modifier la competition"
            centered={true}
            visible={modal3Open}
            loading={loading}
            // onOk={() => setModal2Open(false)}
            openNotification={openNotification}
            // onCancel={() => setModal2Open(false)}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {modal2Open && (
          <AddCompetition
            title="Ajouter la competition"
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
}

export default Competition;
