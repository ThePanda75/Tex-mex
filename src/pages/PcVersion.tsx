import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./PcVersion.module.css";

const PcVersion: FunctionComponent = () => {
  return (
    <div className={styles.pcVersion}>
      <img className={styles.section1Icon} alt="" src="/section-1.svg" />
      <FrameComponent />
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default PcVersion;
