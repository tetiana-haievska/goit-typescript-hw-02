import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <ClipLoader color="#00BFFF" size={50} />
    </div>
  );
};

export default Loader;
