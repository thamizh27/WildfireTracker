import spinner from "./components/img/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Fetching Data, Please wait.....</h1>
    </div>
  );
};

export default Loader;
