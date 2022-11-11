import { Form, Modal } from "antd";
import { useEffect } from "react";
import Buttons from "../../../costum/Buttons";
import Inputs from "../../../costum/Inputs";
import { Stade } from "../../../interface/redux-state/StadeStateInterface";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../redux-store/hooks";
import { updateStadeAction } from "../../../redux-store/reducer/StadeSlice";

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

const UpdateStade = (props: Props) => {
  const dispash = useAppDispatch();

  const onFinish = (values: Stade) => {
    dispash(
      updateStadeAction({
        ...values,
        maps: "",
        id: props.UpdateData.id,
      })
    );
  };

  const [form] = Form.useForm();
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Inputs
              typeInput="form"
              name="nom"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Nom"
            />
            <Inputs
              typeInput="form"
              name="adresse"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
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
              }}
              htmlType="button"
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
              }}              htmlType="submit"
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

export default UpdateStade;
