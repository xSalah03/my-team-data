import {Form, Select } from "antd";
import  { Rule } from "antd/lib/form";
import React, { CSSProperties } from "react";

type Props = {
  showSearch?: boolean;
  placement?: any;
  styleSelect?: CSSProperties | undefined;
  placeholder: string;
  optionFilterProp?: any;
  filterOption?: any;
  filterSort?: any;
  options: any;
  label?: string;
  rules?: Rule[] | undefined;
  style?: CSSProperties | undefined;
  name?: string;
  typeSelect: string;
};

interface Options {
  value: string | number | undefined;
  label: string;
}

const { Option } = Select;

const Selects = React.memo((props: Props) => {
  return (
    <>
      {props.typeSelect == "form" ? (
        <Form.Item
          style={props.style}
          label={props.label}
          name={props.name}
          rules={props.rules}
        >
          <Select
            showSearch={props.showSearch}
            style={props.styleSelect}
            placeholder={props.placeholder}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).includes(input)
            }
          >
            {props.options.map((e: Options) => {
              return <Option value={e.value}> {e.label} </Option>;
            })}
          </Select>
        </Form.Item>
      ) : (
        <Select
          showSearch={props.showSearch}
          style={props.style}
          placeholder={props.placeholder}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
        >
          {props.options.map((e: Options) => {
            return <Option value={e.value}> {e.label} </Option>;
          })}
        </Select>
      )}
    </>
  );
});

export default Selects;
