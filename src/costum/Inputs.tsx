import { Input, Form } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/lib/form";
import React from "react";

type Props = {
  placeholder?: any;
  type?: any;
  typeInput: string;
  defaultValue?: any;
  size?: SizeType;
  style?: React.CSSProperties | undefined;
  styleInput?: React.CSSProperties | undefined;
  label?: string;
  name: string;
  rules: Rule[] | undefined;
};

const Inputs = React.memo((props: Props) => {
  return (
    <>
      {props.typeInput == "form" ? (
        <Form.Item
          style={props.style}
          label={props.label}
          name={props.name}
          rules={props.rules}
          >
          <Input
            size={props.size}
            placeholder={props.placeholder}
            type={props.type}
            style={props.styleInput}
          />
        </Form.Item>
      ) : (
        <Input
          size={props.size}
          placeholder={props.placeholder}
          type={props.type}
          style={props.style}
        />
      )}
    </>
  );
});

export default Inputs;
