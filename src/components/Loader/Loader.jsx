import { ThreeCircles, Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="200"
      width="200"
      color="#1cdb9e"
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
