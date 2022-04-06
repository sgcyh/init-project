const EnvTest = () => {
  return (
    <div>
      <p>환경 변수 테스트</p>
      <p>process.env.NODE_ENV: {process.env.NODE_ENV}</p>
      <p>process.env.name: {process.env.name}</p>
    </div>
  );
};

export default EnvTest;
