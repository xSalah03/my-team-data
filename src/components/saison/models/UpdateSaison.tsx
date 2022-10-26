import { DatePicker, Form, Modal } from "antd";
import React, { useEffect } from "react";
import Buttons from "../../../costum/Buttons";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../../redux-store/hooks";
import { Saison } from "../../../interface/redux-state/SaisonStateInterface";
import { updateSaisonAction } from "../../../redux-store/reducer/SaisionSlice";
import moment from "moment";

type Props = {
  title: string;
  centered: boolean;
  visible: boolean;
  openNotification: any;
  onOk: any;
  onCancel: any;
  UpdateData?: any;
  loading?: any;
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const { RangePicker } = DatePicker;

const UpdateSaison = (props: Props) => {
  const dispash = useAppDispatch();

  const onFinish = (values: Saison) => {
    dispash(
      updateSaisonAction({
        ...values,
        id: props.UpdateData.id,
         saison: [Number(moment(values.saison[0]).format("YYYY")),Number(moment(values.saison[1]).format("YYYY"))],
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
          initialValues={props.UpdateData}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
             <Form.Item label="DatePicker" name="saison"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
             >

            <RangePicker
              picker="year"
              bordered
            />
            </Form.Item>
            {/* <DatePicker.RangePicker status="error" style={{ width: "100%" }} /> */}
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

export default UpdateSaison;
