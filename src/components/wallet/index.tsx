import useFetch from "../../../src/useFetch";
import Card from "../../components/card";
import LoaderContainer from "../../components/shared/LoaderContainer";
import ErrorContainer from "../../components/shared/ErrorContainer";

const Wallet = ({
  setOpenModal,
}: {
  setOpenModal: (arg: boolean) => void;
}) => {
  const [loading, data, errorMsg] = useFetch("/accounts");

  return (
    <>
      <section
        className={
          data && Array.isArray(data) && data.length
            ? "section-with-cards"
            : "section-with-no-cards"
        }
      >
        <h1>Wallets</h1>
        <h3 onClick={() => setOpenModal(true)} style={{ cursor: "pointer" }}>
          + Add new wallet
        </h3>
      </section>
      {loading && <LoaderContainer />}
      {errorMsg && <ErrorContainer />}
      {data && Array.isArray(data) && (
        <div className="cards">
          {data.map((eachCardDetail) => (
            <Card eachCardDetail={eachCardDetail} key={eachCardDetail.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Wallet;
