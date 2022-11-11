import { DatePicker, Form, Modal } from "antd";
import moment from "moment";
import { useEffect } from "react";
import Buttons from "../../../costum/Buttons";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { Saison } from "../../../interface/redux-state/SaisonStateInterface";
import { useAppDispatch } from "../../../redux-store/hooks";
import { addSaisonAction } from "../../../redux-store/reducer/SaisionSlice";

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

const { RangePicker } = DatePicker;

const AddSaison = (props: Props) => {
  const dispash = useAppDispatch();

  const onFinish = (values: Saison) => {
    dispash(
      addSaisonAction({
        ...values,
        active: 0,
        id: new Date().getTime(),
        saison: [
          Number(moment(values.saison[0]).format("YYYY")),
          Number(moment(values.saison[1]).format("YYYY")),
        ],
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
          initialValues={{ remember: true }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <Form.Item
              label="DatePicker"
              name="saison"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <RangePicker picker="year" bordered />
            </Form.Item>
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
              }}              htmlType="button"
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

export default AddSaison;
