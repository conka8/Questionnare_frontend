import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ISkeletonProps {
  baseColor?: string;
  highlightColor?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  count?: number;
  className?: string;
  styles?: any;
}

const SkeletonLoader: React.FC<ISkeletonProps> = ({
  baseColor = "#000",
  highlightColor = "rgb(13, 22, 32)",
  width,
  height,
  borderRadius,
  className,
  count,
  styles,
}) => {
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton
        borderRadius={borderRadius}
        width={width}
        height={height}
        className={className}
        count={count}
        style={styles}
      />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
