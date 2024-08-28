import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pcVersionInner, className].join(" ")}>
      <div className={styles.notificationParent}>
        <div className={styles.notification}>
          <div className={styles.buttons}>
            <div className={styles.reservationButton}>
              <div className={styles.reservationButtonChild} />
              <b className={styles.reservationEnLigne}>RESERVATION EN LIGNE</b>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.cullpistolWrapper}>
              <b className={styles.cullpistol}>
                <span>C</span>
                <span className={styles.ullpistol}>{`ULL&PISTOL`}</span>
              </b>
            </div>
            <div className={styles.avenueLincoln17000}>
              24, avenue LINCOLN 17000 La Rochelle
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.aEmporterButton}>
              <div className={styles.aEmporterButtonChild} />
              <b className={styles.reservationEnLigne}>VENTE A EMPORTER</b>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.duLundiAuSamediDe18h01Parent}>
            <b className={styles.duLundiAu}>Du Lundi au Samedi de 18h à 01 h</b>
            <div className={styles.soireesAThemeEvenementsWrapper}>
              <div className={styles.soireesATheme}>
                SOIREES A THEME / EVENEMENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
