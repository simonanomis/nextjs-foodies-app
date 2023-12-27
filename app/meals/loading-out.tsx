import classes from "./loading-out.module.css";
import { Spin } from "antd";

export default async function LoadingPage() {
  return (
    <>
      <p className={classes.loading}>
        <Spin />
        Fetching meals...
      </p>
    </>
  );
}
