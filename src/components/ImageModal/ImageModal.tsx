import Modal from "react-modal";
import styles from "./ImageModal.module.css";

interface Image {
  urls: {
    regular: string;
  };
  description?: string;
  user?: {
    name?: string;
  };
  likes?: number;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.content}>
        <img
          src={image?.urls?.regular}
          alt={image?.description || "Selected image"}
        />
        <p>{image?.description || "No description available"}</p>
        <p>Author: {image?.user?.name || "Unknown"}</p>
        <p>Likes: {image?.likes || 0}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;