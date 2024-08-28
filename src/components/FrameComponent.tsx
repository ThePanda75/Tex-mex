import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={[styles.premiumPhotoLogoAmericanParent, className].join(" ")}
    >
      <img
        className={styles.premiumPhotoLogoAmerican}
        loading="lazy"
        alt=""
        src="/premium-photo---logo-american-bald-eagle-1@2x.png"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.cullPistolParent}>
          <div className={styles.cullPistolContainer}>
            <span>
              <span>C</span>
            </span>
            <span className={styles.ullPistol}>
              <span>U</span>
              <span className={styles.ll}>LL</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.span1}>{`&`}</span>
              <span className={styles.span}>{` `}</span>
              <span>PIS</span>
              <span className={styles.tol}>TOL</span>
            </span>
          </div>
          <div className={styles.grilladesWrapper}>
            <a className={styles.grillades}>{`Grillades `}</a>
          </div>
        </div>
      </div>
      <div className={styles.designerClothesShoesBagsParent}>
        <img
          className={styles.designerClothesShoesBags}
          loading="lazy"
          alt=""
          src="/designer-clothes-shoes--bags-for-women---ssense-1@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.formulesParent}>
              <a className={styles.formules}>{`Formules `}</a>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
            <a className={styles.aPropos}>{`A propos `}</a>
          </div>
        </div>
      </div>
      <div className={styles.dashboardButton}>
        <div className={styles.emptySpaceWrapper}>
          <div className={styles.emptySpace}>
            <div className={styles.emptySpaceChild} />
            <b className={styles.b}>09 18 45 37 82</b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
