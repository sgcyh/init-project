const EnvTest = () => {
  return (
    <div>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.name}</p>
    </div>
  );
};

export default EnvTest;
