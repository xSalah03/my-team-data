import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import {
  LoadingOutlined,
  PlusOutlined,
  ArrowLeftOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import {
  ClubName,
  CountryName,
  PlayerFoot,
  PlayerGender,
  PlayerName,
  PlayerPost,
} from "../../../interface/Utils";
import {
  clubNom,
  countryNom,
  lateralite,
  playerSexe,
  poste,
} from "../../../utils/ConstData";
import Buttons from "../../../costum/Buttons";
import moment from "moment";

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

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const OnEdit = (props: Props) => {
  console.log(props.UpdateData);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

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

  const dateFormat = "YYYY/MM/DD";

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
              defaultValue={props.UpdateData.nom}
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
              defaultValue={props.UpdateData.prenom}
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
            <DatePickers
              name="date_naissance"
              placeHolder="Date naissance"
              defaultValue={moment(props.UpdateData)}
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleDatapicker={{
                width: "200px",
              }}
            />
            <Selects
              rules={[{ required: true, message: "Entrer le poste!" }]}
              typeSelect="form"
              defaultValue={props.UpdateData.poste}
              name="poste"
              showSearch={false}
              placeholder="Poste"
              styleSelect={{ width: "200px" }}
              options={poste.map((e: PlayerPost) => ({
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
              rules={[{ required: true, message: "Selectionner le sexe!" }]}
              typeSelect="form"
              defaultValue={props.UpdateData.sexe}
              name="sexe"
              showSearch={false}
              placeholder="Sexe"
              styleSelect={{ width: "200px" }}
              options={playerSexe.map((e: PlayerGender) => ({
                value: e.id,
                label: e.label,
              }))}
            />
            <Selects
              rules={[
                { required: true, message: "Selectionner la lateralite!" },
              ]}
              typeSelect="form"
              defaultValue={props.UpdateData.lateralite}
              name="lateralite"
              showSearch={false}
              placeholder="Lateralité"
              styleSelect={{ width: "200px" }}
              options={lateralite.map((e: PlayerFoot) => ({
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
            <Inputs
              typeInput="form"
              type="number"
              defaultValue={props.UpdateData.taille}
              placeholder="Taille"
              name="taille"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "150px",
              }}
            />

            <Inputs
              typeInput="form"
              type="number"
              defaultValue={props.UpdateData.poids}
              placeholder="Poids"
              name="poids"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "150px",
              }}
            />

            <Inputs
              typeInput="form"
              type="number"
              defaultValue={props.UpdateData.numero_dossard}
              placeholder="Numero dossard"
              name="numero_dossard"
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleInput={{
                width: "150px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <Select
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
  </Select> */}
            <Selects
              rules={[{ required: true, message: "Selectionner le pays!" }]}
              typeSelect="form"
              defaultValue={props.UpdateData.pays}
              name="pays"
              placeholder="Pays"
              showSearch
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              filterOption={true}
              filterSort={true}
              options={countryNom.map((e: CountryName) => ({
                value: e.id,
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
                        width: "20px",
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
              defaultValue={props.UpdateData.id_equipe}
              name="equipe"
              placeholder="Equipe"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              filterOption={true}
              filterSort={true}
              options={clubNom.map((e: ClubName) => ({
                value: e.id,
                sort: e.id,
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.label}</p>
                    <img
                      style={{
                        width: "20px",
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
            <Selects
              rules={[
                { required: true, message: "Selectionner la nationalite!" },
              ]}
              typeSelect="form"
              mode="multiple"
              defaultValue={props.UpdateData.nationalite}
              name="nationalite"
              placeholder="Nationalite"
              showSearch
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              filterOption={true}
              filterSort={true}
              options={countryNom.map((e: CountryName) => ({
                value: e.id,
                label: e.nom,
              }))}
            />
            <Selects
              rules={[
                { required: true, message: "Selectionner le national team!" },
              ]}
              typeSelect="form"
              defaultValue={props.UpdateData.national_team}
              name="national team"
              placeholder="National team"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              filterOption={true}
              filterSort={true}
              options={clubNom.map((e: ClubName) => ({
                value: e.id,
                sort: e.id,
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.label}</p>
                    <img
                      style={{
                        width: "20px",
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

            <div
              style={{
                width: "100px",
              }}
            >
              {/* <Upload
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
              </Upload> */}
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

export default OnEdit;
