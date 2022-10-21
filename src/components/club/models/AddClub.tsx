import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Buttons from "../../../costum/Buttons";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import {
  lateralite,
  poste,
  playerSexe,
  clubNom,
  countryNom,
  clubSexe,
  clubType,
  clubCompitition,
} from "../../../utils/ConstData";
import {
  ClubCompitition,
  ClubGender,
  ClubName,
  ClubType,
  CountryName,
  PlayerFoot,
  PlayerGender,
  PlayerPost,
} from "../../../interface/Utils";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useAppDispatch } from "../../../redux-store/hooks";
import { addPlayerAction } from "../../../redux-store/reducer/PlayerSlice";
import { Player } from "../../../interface/redux-state/PlayerStateInterface";
import moment from "moment";
import { changeCountry } from "../../../redux-store/reducer/ClubSlice";

type Props = {
  title: string;
  centered: boolean;
  visible: boolean;
  openNotification: any;
  onOk: any;
  onCancel: any;
  loading?: any;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const AddClub = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const dispash = useAppDispatch();
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = (values: Player) => {
    console.log(values);
    dispash(
      addPlayerAction({
        ...values,
        image: "",
        instat_fullname: "",
        category: "",
        id: new Date().getTime(),
        nationalite: String(values.nationalite),
        taille: Number(values.taille),
        poids: Number(values.poids),
        date_naissance: "" + moment(values.date_naissance).format("MM-DD-YYYY"),
      })
    );
  };
  const [form] = Form.useForm();
  useEffect(() => {
    return () => {
      console.log("end");
      props.openNotification({ name: "test" });
    };
  }, []);

  return (
    <div>
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
              name="slug"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "200px",
              }}
              placeholder="Slug"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Selects
              rules={[{ required: true, message: "Selectionner le sexe!" }]}
              typeSelect="form"
              name="type"
              showSearch={false}
              placeholder="Type"
              styleSelect={{ width: "200px" }}
              options={clubType.map((e: ClubType) => ({
                value: e.label,
                label: e.label,
              }))}
            />
            <Selects
              rules={[{ required: true, message: "Entrer la  lateralite!" }]}
              typeSelect="form"
              name="sexe"
              showSearch={false}
              placeholder="Genre"
              styleSelect={{ width: "200px" }}
              options={clubSexe.map((e: ClubGender) => ({
                value: e.id,
                label: e.label,
              }))}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Selects
              rules={[{ required: true, message: "Selectionner le pays!" }]}
              typeSelect="form"
              name="pays"
              showSearch
              onChange={(e:any) => dispash(changeCountry(e))}
              placeholder="Pays"
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
            <Selects
              rules={[{ required: true, message: "Selectionner l'equipe!" }]}
              typeSelect="form"
              name="compitition"
              placeholder="Compitition"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              options={clubCompitition.map((e: ClubCompitition) => ({
                value: e.id,
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
            <div
              style={{
                width: "100px",
              }}
            >
              <Upload
                accept=".png,.jpeg"
                name="avatar"
                listType="picture-card"
                showUploadList={{ showPreviewIcon: false }}
                action="http://localhost:3000/joueurs"
                beforeUpload={beforeUpload}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </div>
          {/* <Button htmlType="button" onClick={props.onCancel} key="back">
  Return
</Button>
,
<Button
type="primary"
htmlType="submit"
key="submit"
loading={props.loading}
onClick={props.onOk}
>
Submit
</Button> */}
        </Form>
      </Modal>
    </div>
  );
};

export default AddClub;
