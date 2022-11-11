import { Form, Modal } from "antd";
import Buttons from "../../../costum/Buttons";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import Inputs from "../../../costum/Inputs";
import Selects from "../../../costum/Selects";
import {
  ClubCompetition,
  ClubGender,
  ClubType,
  CountryName,
} from "../../../interface/Utils";
import {
  changeCountry,
  updateClubAction,
} from "../../../redux-store/reducer/ClubSlice";
import { clubSexe, clubType, countryNom } from "../../../utils/ConstData";
import { Club } from "../../../interface/redux-state/ClubStateInterface";
import { useAppDispatch, useAppSelector } from "../../../redux-store/hooks";
import { useEffect } from "react";
import { CompetitionStateInterface } from "../../../interface/redux-state/CompetitionStateInterface";

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

const UpdateClub = (props: Props) => {
  const competitionSlice: CompetitionStateInterface = useAppSelector(
    (state) => {
      return state.allCompetitions;
    }
  );
  console.log(props.UpdateData);
  const dispash = useAppDispatch();

  const onFinish = (values: Club) => {
    dispash(
      updateClubAction({
        ...values,
        logo: "",
        categories: "",
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
              name="country"
              showSearch={false}
              onChange={(e: any) => dispash(changeCountry(e))}
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
              rules={[
                { required: true, message: "Selectionner les competitions!" },
              ]}
              typeSelect="form"
              mode="multiple"
              name="competitions"
              showSearch
              placeholder="Compititions"
              styleSelect={{ width: "200px" }}
              optionFilterProp="children"
              options={competitionSlice.competitions.map(
                (e: ClubCompetition) => ({
                  value: e.id,
                  label: e.label,
                })
              )}
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

export default UpdateClub;
