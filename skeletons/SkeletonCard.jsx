import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonCard = () => {
  return (
    <>
      <div className="grid">
        <SkeletonElement type="card" />
        <SkeletonElement type="card" />
        <SkeletonElement type="card" />
        <SkeletonElement type="card" />
        <SkeletonElement type="card" />
        <SkeletonElement type="card" />
      </div>
      <Shimmer />
    </>
  );
};

export default SkeletonCard;
