import "antd/dist/antd.css";
import { Outlet } from "react-router-dom";

type Props = {};

function Content({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Content;
