import { Form, Modal } from "antd";
import { useEffect } from "react";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Inputs from "../../../costum/Inputs";
import { Stade } from "../../../interface/redux-state/StadeStateInterface";
import { useAppDispatch } from "../../../redux-store/hooks";
import { addStadeAction } from "../../../redux-store/reducer/StadeSlice";
import Buttons from "../../../costum/Buttons";

type Props = {
  title: string;
  centered: boolean;
  visible: boolean;
  openNotification: any;
  onOk: any;
  onCancel: any;
  loading?: any;
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const AddStade = (props: Props) => {
  const dispash = useAppDispatch();

  const onFinish = (values: Stade) => {
    console.log(values);

    dispash(
      addStadeAction({
        ...values,
        maps: "",
        id: new Date().getTime(),
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
          initialValues={{ remember: true }}
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

export default AddStade;
