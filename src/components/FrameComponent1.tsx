import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pcVersionInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.orderHistoryWrapper}>
          <div className={styles.orderHistory}>
            <div className={styles.explorezLesUsaWrapper}>
              <b className={styles.explorezLesUsa}>EXPLOREZ LES USA</b>
            </div>
            <h1
              className={styles.spcialitsTexMex}
            >{`Spécialités Tex-Mex   `}</h1>
          </div>
        </div>
        <div className={styles.produits}>
          <div className={styles.produitsChild} />
          <div
            className={styles.grilladesViandes}
          >{`GRILLADES . VIANDES SECHEES  . HARICOTS FRITS . FAJITAS . NACHOS ... `}</div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
