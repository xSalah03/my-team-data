import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import React from "react";

type Props = {
  htmlType: "button" | "submit" | "reset" | undefined;
  label: string;
  type:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  style?: React.CSSProperties | undefined;
  size: SizeType;
  shape?: any;
  icon?: any;
  loading?: boolean;
  onClick?: any;
  key: string;
};

const Buttons = React.memo((props: Props) => {
  return (
    <>
      <Button
        style={props.style}
        htmlType={props.htmlType}
        type={props.type}
        size={props.size}
        icon={props.icon}
        shape={props.shape}
        loading={props.loading}
        onClick={props.onClick}
        key={props.key}
      >
        {props.label}
      </Button>
    </>
  );
});
export default Buttons;
