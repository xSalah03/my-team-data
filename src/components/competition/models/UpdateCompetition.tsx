import { Form, Modal } from "antd";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux-store/hooks";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { updateCompetitionAction } from "../../../redux-store/reducer/CompetitionSlice";
import { Competition } from "../../../interface/redux-state/CompetitionStateInterface";
import moment from "moment";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import { countryNom } from "../../../utils/ConstData";
import { CountryName } from "../../../interface/Utils";
import Buttons from "../../../costum/Buttons";

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

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const UpdateCompetition = (props: Props) => {
  console.log(props.UpdateData);
  
  const dispash = useAppDispatch();

  const onFinish = (values: Competition) => {
    dispash(
      updateCompetitionAction({
        ...values,
        id: props.UpdateData.id,
        pays_org: String(values.pays_org),
        date_debut: "" + moment(values.date_debut).format("MM-DD-YYYY"),
        date_fin: "" + moment(values.date_fin).format("MM-DD-YYYY"),
      })
    );
  };
  const [form] = Form.useForm();
  useEffect(() => {
    return () => {
      console.log("end",props.onCancel);
      props.openNotification({ name: "test" });
    };
  }, []);

  return (
    <>
      <Modal
        footer={[]}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Inputs
              typeInput="form"
              name="label"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Label"
            />
            <Inputs
              typeInput="form"
              name="location"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Location"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DatePickers
              name="date_debut"
              placeHolder="Date debut"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleDatapicker={{
                width: "200px",
              }}
            />
            <DatePickers
              name="date_fin"
              placeHolder="Date fin"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleDatapicker={{
                width: "200px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Selects
              rules={[
                { required: true, message: "Selectionner la nationalite!" },
              ]}
              typeSelect="form"
              name="pays_org"
              showSearch
              placeholder="Pays organictrice"
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              options={countryNom.map((e: CountryName) => ({
                value: e.nom,
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.nom}</p>
                    <img
                      style={{
                        marginBottom: "12px",
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
              flexDirection: "row-reverse",
              justifyContent: "start",
              alignItems: "end",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <Buttons
                style={{
                  margin: "15px",
                }}
                htmlType="button"
                type="default"
                size="large"
                loading={false}
                shape="round"
                label="Cancel"
                icon={<ArrowLeftOutlined />}
                onClick={props.onCancel}
                key="back"
              />
              <Buttons
                style={{
                  margin: "15px",
                }}
                htmlType="submit"
                type="primary"
                size="large"
                loading={props.loading}
                shape="round"
                label="Submit"
                icon={<DownloadOutlined />}
                onClick={props.onOk}
                key="submit"
              />
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateCompetition;
