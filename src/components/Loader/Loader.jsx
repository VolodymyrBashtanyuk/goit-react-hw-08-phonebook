import { ThreeCircles, Puff, RotatingLines } from 'react-loader-spinner';

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
      wrapperClass="loading"
      visible={true}
    />
  );
};

export const LoaderPage = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};
