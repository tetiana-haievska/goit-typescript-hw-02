import styles from "./ImageCard.module.css";

interface Image {
    id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={styles.image}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;