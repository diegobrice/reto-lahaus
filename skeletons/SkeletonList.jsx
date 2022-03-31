import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonList = () => {
  return (
    <>
      <div className="grid">
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="card" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </>
  );
};

export default SkeletonList;
