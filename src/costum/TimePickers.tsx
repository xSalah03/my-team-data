import { Form, TimePicker } from "antd";
import { Rule } from "antd/lib/form";
import React, { CSSProperties } from "react";

type Props = {
  placement?: any;
  styleTimepicker?: CSSProperties | undefined;
  placeHolder: string;
  style?: CSSProperties | undefined;
  label?: string;
  name: string;
  onChange: any;
  format: string;
  defaultValue?: any;
  rules: Rule[] | undefined;
};

const TimePickers = React.memo((props: Props) => {
  return (
    <>
      <Form.Item
        style={props.style}
        label={props.label}
        name={props.name}
        rules={props.rules}
      >
        <TimePicker
          style={props.styleTimepicker}
          format={props.format}
          onChange={props.onChange}
          placeholder={props.placeHolder}
          placement={props.placement}
        />
      </Form.Item>
    </>
  );
});

export default TimePickers;
