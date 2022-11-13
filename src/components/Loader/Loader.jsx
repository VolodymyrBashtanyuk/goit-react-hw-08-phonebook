import { ThreeCircles, Puff, ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="200"
      width="200"
      color="#239bd2"
      wrapperStyle={{}}
      wrapperClass="loading"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

export const Loading = () => {
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#0e1dbd"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass="load"
      visible={true}
    />
  );
};

export const LoaderPage = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3450a6"
      wrapperStyle={{}}
      wrapperClassName="div"
      ariaLabel="three-dots-loading"
    />
  );
};
