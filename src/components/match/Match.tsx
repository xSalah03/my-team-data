import { Button, notification, Space, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import { deleteMatchAction, status } from '../../redux-store/reducer/MatchSlice';
import { MatchStateInterface } from '../../interface/redux-state/MatchStateInterface';
import AddMatch from './models/AddMatch';
import { NotificationPlacement } from 'antd/es/notification';
import { getAllCompetitionSuccessAction } from '../../redux-store/reducer/CompetitionSlice';
import { getAllClubSuccessAction } from '../../redux-store/reducer/ClubSlice';
import { getAllStadeSuccessAction } from '../../redux-store/reducer/StadeSlice';
import moment from 'moment';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import UpdateMatch from './models/UpdateMatch';
import { Outlet, useNavigate } from 'react-router-dom';


type Props = {}

const Match = (props: Props) => {


  const dispash = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [composition, setComposition] = useState(false);
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [updateData, setUpdateData] = useState({});
  const Context = React.createContext({ name: "Default" });
  const { confirm } = Modal
  const navigate = useNavigate()

  const matchSlices: MatchStateInterface = useAppSelector(
    (state) => state.allMatchs
  );

  const showConfirm = (id: number) => {
    setTimeout(() => {
      confirm({
        title: <h4>Supprimer le joueur</h4>,
        icon: <ExclamationCircleOutlined />,
        content: <p>Voullez vous supprimer ce ligne?</p>,
        okText: 'Yes',
        okType: 'danger',
        onOk() {
          dispash(deleteMatchAction(id));
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    });
  };

  useEffect(() => {
    dispash(getAllClubSuccessAction([]));
    dispash(getAllCompetitionSuccessAction([]));
    dispash(getAllStadeSuccessAction([]));
    console.log(matchSlices)
  }, []);

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

  const UpdateData = (e: any) => {
    let newData = Object.create({});
    Object.keys(e).forEach((key: any) => {
      newData[key] = ["date_match", "time_match"].includes(key)
        ? ["time_match"].includes(key) ? moment(moment().format("YYYY-MM-DD") + " " + e[key]) : moment(e[key])
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

  useEffect(() => {
    if (matchSlices.isValid) {
      setModal2Open(false);
      setModal3Open(false);
    }
  }, [matchSlices.isValid]);

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
        <h2>Match</h2>
        <div>
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
      {matchSlices.matchs.map((e, i) => {
        return (
          <div
            key={e.id}
            style={{
              display: "flex",
              marginBottom: "15px"
            }}
            onClick={() => navigate(`/matchs/one/${e.id}`, {
              state: {
                e
              }
            })}
          >
            <div
              style={{
                backgroundColor: "#e6e7eb",
                borderRadius: "10px",
                width: "95%"
              }}>
              <h3 style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center"
              }}>
                {moment(e.date_match).format("DD-MM-YYYY")}
              </h3>
              <span style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={e.equipe}
                  />
                  <h3>
                    {e.equipe}
                  </h3>
                </div>
                <h3>
                  {e.time_match}
                </h3>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={e.equipe_adverse}
                  />
                  <h3>
                    {e.equipe_adverse}
                  </h3>
                </div>
              </span>
              <h3 style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center"
              }}>
                {e.competitions}
              </h3>
            </div>
            <div style={{
              width: "5%",
            }}>
              <span
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon
                  className='pen'
                  style={{
                    padding: "10px",
                    backgroundColor: "#e6e7eb",
                    cursor: "pointer",
                    color: "#00b33c",
                    borderRadius: "50px",
                    transition: "transform 250ms"
                  }}
                  icon={faPen}
                  onClick={() => UpdateData(e)}
                />
                <FontAwesomeIcon
                  className='pen'
                  style={{
                    padding: "10px",
                    backgroundColor: "#e6e7eb",
                    cursor: "pointer",
                    color: "#b30000",
                    borderRadius: "50px",
                  }}
                  icon={faTrash}
                  onClick={() => showConfirm(e.id)}
                />
              </span>
            </div>
          </div>
        )
      })}
      <>
        {modal3Open && (
          <UpdateMatch
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
          <AddMatch
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
      <Outlet></Outlet>
    </>
  )
}


export default Match