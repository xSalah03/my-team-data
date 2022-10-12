import { DatePicker, Form, Input, Modal, Select, Button } from "antd";
import { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  centered: boolean;
  visible: boolean;
  openNotification: any;
  onOk: any;
  onCancel: any;
  loading: any;
};

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Modals = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const [form] = Form.useForm();
  useEffect(() => {
    return () => {
      console.log("end");
      props.openNotification({ name: "test" });
    };
  }, []);

  const onReset = () => {
    form.resetFields();
  };

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Veuillez selectionner la date.",
      },
    ],
  };

  return (
    <div>
      <Modal
        footer={[
          <Form.Item {...tailLayout}>
            <Button htmlType="button" 
            onClick={props.onCancel} key="back">
              Return
            </Button>
            ,
            <Button
              type="primary"
              htmlType="submit"
              key="submit"
              loading={props.loading}
              onClick={props.openNotification}
            >
              Submit
            </Button>
          </Form.Item>,
        ]}
        title={props.title}
        centered
        open={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
        >
        <Form
          form={form}
          name="difo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Form.Item
              name="nom"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Nom"
              />
            </Form.Item>
            <Form.Item
              name="prenom"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Prenom"
              />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Form.Item name="date-picker" label="" {...config}>
              <DatePicker
                style={{
                  width: "200px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="poste"
                noStyle
                rules={[
                  { required: true, message: "Veuillez remplie le champ." },
                ]}
              >
                <Select
                  style={{
                    width: "200px",
                  }}
                  placeholder="Poste"
                >
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
              </Form.Item>
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Form.Item>
              <Form.Item
                name="sexe"
                noStyle
                rules={[
                  { required: true, message: "Veuillez remplie le champ." },
                ]}
              >
                <Select
                  style={{
                    width: "200px",
                  }}
                  placeholder="Sexe"
                >
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="lateralite"
                noStyle
                rules={[
                  { required: true, message: "Veuillez remplie le champ." },
                ]}
              >
                <Select
                  style={{
                    width: "200px",
                  }}
                  placeholder="Lateralite"
                >
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
              </Form.Item>
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Form.Item
              style={{
                width: "150px",
                marginTop: "20px",
              }}
              name="taille"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <Input
                type={"number"}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Taille"
              />
            </Form.Item>
            <Form.Item
              style={{
                width: "150px",
                marginTop: "20px",
              }}
              name="poids"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <Input
                type={"number"}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Poids"
              />
            </Form.Item>
            <Form.Item
              style={{
                width: "150px",
                marginTop: "20px",
              }}
              name="nmr"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
            >
              <Input
                type={"number"}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Numero dossard"
              />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Modals;
