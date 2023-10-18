import { useMemo } from "react";
import styles from "./Property1filledIcon.module.css";

const Property1filledIcon = ({ dimensionCode, propTop }) => {
  const property1filledIconStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <img
      className={styles.property1filledIcon}
      alt=""
      src={dimensionCode}
      style={property1filledIconStyle}
    />
  );
};

export default Property1filledIcon;
