import { Form, Modal } from "antd";
import { useEffect } from "react";
import Buttons from "../../../costum/Buttons";
import Inputs from "../../../costum/Inputs";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Selects from "../../../costum/Selects";
import { Arbitre } from "../../../interface/redux-state/ArbitreStateInterface";
import { ArbitreRole, CountryName } from "../../../interface/Utils";
import { useAppDispatch } from "../../../redux-store/hooks";
import { addArbitreAction } from "../../../redux-store/reducer/ArbitreSlice";
import { changeCountry } from "../../../redux-store/reducer/ClubSlice";
import { arbitreRole, countryNom } from "../../../utils/ConstData";

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

const AddArbitre = (props: Props) => {
  const dispash = useAppDispatch();

  const onFinish = (values: Arbitre) => {
    console.log(values);

    dispash(
      addArbitreAction({
        ...values,
        photo: "",
        id: new Date().getTime(),
        nationalite: String(values.nationalite),
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
              name="prenom"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Prenom"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Selects
              rules={[{ required: true, message: "Entrer le poste!" }]}
              typeSelect="form"
              name="role"
              showSearch={false}
              placeholder="Role"
              styleSelect={{ width: "200px" }}
              options={arbitreRole.map((e: ArbitreRole) => ({
                value: e.label,
                label: e.label,
              }))}
            />
            <Selects
              rules={[{ required: true, message: "Selectionner le pays!" }]}
              typeSelect="form"
              name="nationalite"
              showSearch
              onChange={(value: any) => dispash(changeCountry(value))}
              placeholder="Nationalite"
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              options={countryNom.map((e: CountryName) => ({
                value: e.nom,
                sort: e.id,
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

export default AddArbitre;
