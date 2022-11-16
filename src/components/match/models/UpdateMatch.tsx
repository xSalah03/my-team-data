import { Form, Modal } from "antd";
import { useEffect } from "react";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import {
  ClubCompetition,
  ClubName,
} from "../../../interface/Utils";
import Buttons from "../../../costum/Buttons";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { ClubStateInterface } from "../../../interface/redux-state/ClubStateInterface";
import { CompetitionStateInterface } from "../../../interface/redux-state/CompetitionStateInterface";
import TimePickers from "../../../costum/TimePickers";
import { Stade, StadeStateInterface } from "../../../interface/redux-state/StadeStateInterface";
import { Match } from "../../../interface/redux-state/MatchStateInterface";
import { addMatchAction } from "../../../redux-store/reducer/MatchSlice";

type Props = {
  title: string;
  centered: boolean;
  visible: boolean;
  openNotification: any;
  onOk: any;
  onCancel: any;
  loading?: any;
  UpdateData?: any;
};

const UpdateMatch = (props: Props) => {

  const dispash = useAppDispatch();
  console.log(props.UpdateData);
  const [form] = Form.useForm();

  const onChangeTime = (time: any, timeString: any) => {
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: Match) => {
    console.log(values)
    dispash(
      addMatchAction({
        ...values,
        id: new Date().getTime(),
        date_match: "" + moment(values.date_match).format("MM DD YYYY"),
        time_match: "" + moment(values.time_match).format("HH:mm"),
      })
    );
  };

  const clubSlice: ClubStateInterface = useAppSelector((state) => {
    return state.allClubs;
  });

  const competitionSlice: CompetitionStateInterface = useAppSelector(
    (state) => {
      return state.allCompetitions;
    }
  );

  const stadeSlice: StadeStateInterface = useAppSelector(
    (state) => {
      return state.allStades;
    }
  );

  useEffect(() => {
    return () => {
      props.openNotification({ name: "test" });
    };
  }, []);

  return (
    <>
      <Modal
        footer={false}
        title={props.title}
        centered
        open={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          className="login-form"
          initialValues={props.UpdateData}
        >
          <div>
            <Selects
              rules={[{ required: true, message: "Entrer la competition!" }]}
              typeSelect="form"
              name="competitions"
              showSearch={false}
              placeholder="Competition"
              styleSelect={{ width: "473px" }}
              options={competitionSlice.competitions.map(
                (e: ClubCompetition) => ({
                  value: e.id,
                  label: e.label,
                })
              )}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Selects
              rules={[{ required: true, message: "Selectionner l'equipe!" }]}
              typeSelect="form"
              name="equipe"
              placeholder="Equipe"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              options={clubSlice.clubs.map((e: ClubName) => ({
                id: e.id,
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
            <Selects
              rules={[{ required: true, message: "Selectionner l'equipe adverse!" }]}
              typeSelect="form"
              name="equipe_adverse"
              placeholder="Equipe adverse"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              options={clubSlice.clubs.map((e: ClubName) => ({
                id: e.id,
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DatePickers
              name="date_match"
              placeHolder="Date match"
              rules={[
                { required: true, message: "Entrer la date." },
              ]}
              styleDatapicker={{
                width: "200px",
              }}
            />
            <TimePickers
              placeHolder="Temp match"
              name="time_match"
              styleTimepicker={{
                height: "32px",
                width: "200px",
              }}
              rules={[
                { required: true, message: "Entrer le temps." },
              ]}
              onChange={onChangeTime}
              format={"HH:mm"}
              defaultValue={moment('00:00:00', 'HH:mm')} />

          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Selects
              rules={[{ required: true, message: "Entrer le stade." }]}
              typeSelect="form"
              name="stade"
              showSearch={false}
              placeholder="Stade"
              styleSelect={{ width: "200px" }}
              options={stadeSlice.stades.map(
                (e: Stade) => ({
                  value: e.id,
                  label: e.nom,
                })
              )}
            />
            <Inputs
              typeInput="form"
              name="adresse"
              rules={[
                { required: true, message: "Entrer l'adresse." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Adresse"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Buttons
              style={{
                borderRadius: "4px",
                padding: "5px 10px",
                fontSize: "14px",
                margin: "0 12px",
                textTransform: "capitalize",
              }} htmlType="button"
              type="default"
              size="large"
              loading={false}
              label="Cancel"
              icon={<ArrowLeftOutlined />}
              onClick={props.onCancel}
              key="back"
            />
            <Buttons
              style={{
                borderRadius: "4px",
                padding: "5px 10px",
                fontSize: "14px",
                margin: "0 12px",
                textTransform: "capitalize",
              }} htmlType="submit"
              type="primary"
              size="large"
              loading={props.loading}
              label="Submit"
              icon={<DownloadOutlined />}
              onClick={props.onOk}
              key="submit"
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateMatch;
