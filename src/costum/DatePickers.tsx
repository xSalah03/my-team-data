import { DatePicker, Form } from "antd";
import { Rule } from "antd/lib/form";
import React, { CSSProperties } from "react";

type Props = {
  placement?: any;
  styleDatapicker?: CSSProperties | undefined;
  placeHolder: string;
  style?: CSSProperties | undefined;
  label?: string;
  name: string;
  rules: Rule[] | undefined;
};

const DatePickers = React.memo((props: Props) => {
  return (
    <>
      <Form.Item
        style={props.style} label={props.label} name={props.name} rules={props.rules}>
        <DatePicker
          placeholder={props.placeHolder}
          placement={props.placement}
          style={props.styleDatapicker}
        />
      </Form.Item>
    </>
  );
});

export default DatePickers;
