import { Form, Select } from "antd";
import { Rule } from "antd/lib/form";
import React, { CSSProperties, useEffect, useState } from "react";

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
  defaultValue?: string;
  onChange?: any;
  mode?: "multiple" | "tags" | undefined;
};

interface Options {
  value: string | number | undefined;
  label: string;
  logo: string;
}

const { Option } = Select;

const Selects = React.memo((props: Props) => {
  const [defaultOption, setDefaultOption] = useState([]);
  useEffect(() => {
    setDefaultOption(props.options);
    // console.log(props.options)
  }, []);

  const filterOption = () => {
    return [defaultOption[0]];
    props.options = defaultOption.filter((input: any, option: any) => {
      return (option.search as unknown as string).includes(input);
    });
    console.log(filterOption);
  };
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
            onChange={props.onChange}
            mode={props.mode}
            showSearch={props.showSearch}
            style={props.styleSelect}
            placeholder={props.placeholder}
            optionFilterProp="children"

            // filterSort={(optionA:any, optionB:any) =>
            //   (optionA!.sort as unknown as string)
            //   .toLowerCase()
            //   .localeCompare((optionB!.sort as unknown as string).toLowerCase())
            // }
          >
            {props.options.map((e: Options, i: number) => {
              return (
                <Option key={i} value={e.value}>
                  {e.label}
                </Option>
              );
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
          {props.options.map((e: Options, i: number) => {
            return (
              <Option key={i} value={e.value}>
                {" "}
                {e.label}{" "}
              </Option>
            );
          })}
        </Select>
      )}
    </>
  );
});

export default Selects;
