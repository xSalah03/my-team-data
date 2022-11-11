import { Form, Modal } from "antd";
import { useEffect } from "react";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import {
  ClubName,
  CountryName,
  PlayerFoot,
  PlayerGender,
  PlayerPost,
} from "../../../interface/Utils";
import {
  countryNom,
  lateralite,
  playerSexe,
  poste,
} from "../../../utils/ConstData";
import Buttons from "../../../costum/Buttons";
import moment from "moment";
import { updatePlayerAction } from "../../../redux-store/reducer/PlayerSlice";
import { Player } from "../../../interface/redux-state/PlayerStateInterface";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { ClubStateInterface } from "../../../interface/redux-state/ClubStateInterface";

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

const UpdatePlayer = (props: Props) => {
  const clubSlice: ClubStateInterface = useAppSelector((state) => {
    return state.allClubs;
  });
  console.log(props.UpdateData);

  const dispash = useAppDispatch();

  const onFinish = (values: Player) => {
    dispash(
      updatePlayerAction({
        ...values,
        image: "",
        instat_fullname: "",
        category: "",
        id: props.UpdateData.id,
        nationalite: String(values.nationalite),
        taille: Number(values.taille),
        poids: Number(values.poids),
        numero_dossard: Number(values.numero_dossard),
        date_naissance: "" + moment(values.date_naissance).format("MM-DD-YYYY"),
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
              rules={[
                { required: true, message: "Veuillez remplie le champ." },
              ]}
              styleDatapicker={{
                width: "200px",
              }}
            />
            <Selects
              rules={[{ required: true, message: "Selectionner le poste!" }]}
              typeSelect="form"
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
            <Selects
              rules={[{ required: true, message: "Selectionner le pays!" }]}
              typeSelect="form"
              name="country"
              showSearch
              placeholder="Pays"
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
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
              name="id_equipe"
              showSearch
              placeholder="Equipe"
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              options={clubSlice.clubs.map((e: ClubName) => ({
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
              mode="multiple"
              name="nationalite"
              showSearch
              placeholder="Nationalite"
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              options={countryNom.map((e: CountryName) => ({
                value: e.nom,
                label: e.nom,
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

export default UpdatePlayer;
