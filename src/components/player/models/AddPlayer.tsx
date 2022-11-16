import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Buttons from "../../../costum/Buttons";
import Inputs from "../../../costum/Inputs";
import DatePickers from "../../../costum/DatePickers";
import Selects from "../../../costum/Selects";
import {
  lateralite,
  poste,
  playerSexe,
  countryNom,
} from "../../../utils/ConstData";
import {
  ClubName,
  CountryName,
  PlayerFoot,
  PlayerGender,
  PlayerPost,
} from "../../../interface/Utils";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { addPlayerAction } from "../../../redux-store/reducer/PlayerSlice";
import { Player } from "../../../interface/redux-state/PlayerStateInterface";
import moment from "moment";
import { changeCountry } from "../../../redux-store/reducer/ClubSlice";
import { ClubStateInterface } from "../../../interface/redux-state/ClubStateInterface";

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

const AddPlayer = (props: Props) => {
  const clubSlice: ClubStateInterface = useAppSelector((state) => {
    return state.allClubs;
  });

  const [loading, setLoading] = useState(false);
  const dispash = useAppDispatch();

  const onFinish = (values: Player) => {
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
              rules={[{ required: true, message: "Entrer le poste!" }]}
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
              rules={[{ required: true, message: "Entrer la  lateralite!" }]}
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
                marginTop: "20px",
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
                marginTop: "20px",
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
                marginTop: "20px",
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
              name="pays"
              showSearch
              onChange={(value: any) => dispash(changeCountry(value))}
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
              name="id_equipe"
              placeholder="Equipe"
              showSearch
              styleSelect={{
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
              optionFilterProp="children"
              options={clubSlice.clubs.map((e: ClubName) => ({
                id: e.id,
                label: (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{e.nom}</p>
                    <img
                      style={{
                        marginTop: "5px",
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

export default AddPlayer;
