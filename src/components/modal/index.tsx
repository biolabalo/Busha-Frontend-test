import Modal from "../shared/Modal";
import Loader from "../shared/LoaderContainer";
import useFetch from "../../../src/useFetch";
import ErrorContainer from "../../components/shared/ErrorContainer";
import NetworkErrorIcon from "./NetworkErrorIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";

const WalletModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
}) => {
  const [loading, data, errorMsg, fetchWallets] = useFetch("/wallets");
  const [currency, setSelectedCurrency] = useState("");
  const [error, setErrorMsg] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  const addWallet = async () => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currency }),
    };
    try {
      const fetchResponse = await fetch(`/accounts`, config);
      const data = await fetchResponse.json();
      setOpenModal(false)
      // @ts-ignore
      fetchWallets()
      return data;
    } catch (error) {
      error instanceof Error && setErrorMsg(error.message);
      return error;
    }
  };

  let isDisabled = currency.length > 0;

  return (
    <Modal isOpen={openModal}>
      {" "}
      {loading && <Loader />}
      {errorMsg && <ErrorContainer />}
      <section className="modal-section">
        <div className="top d-flex">
          <h4>Add new wallet</h4>
          <CloseIcon setOpenModal={setOpenModal} />
        </div>
        <p className="crp-text">
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </p>

        <label>Select wallet</label>
        <div className="custom-select">
          <select onChange={handleChange}>
            <option value="" disabled>
              {" "}
              Select Wallet{" "}
            </option>
            {data &&
              Array.isArray(data) &&
              data.length &&
              data.map((each) => (
                <option key={each.id} value={each.currency}>
                  {each.name}
                </option>
              ))}
          </select>
        </div>

        <button
          style={isDisabled ? { cursor: "pointer" } : { cursor: "not-allowed" }}
          className="try-again create-wallet"
          onClick={() => {
            if (!currency) return;
            addWallet();
          }}
        >
          Create wallet
        </button>

        {error && (
          <div
           className=" alert-danger"
          >
            <div><NetworkErrorIcon /> <span>Network Error</span>{" "}</div>  
            <CloseIcon setOpenModal={setOpenModal} />
          </div>
        )}
      </section>
    </Modal>
  );
};

export default WalletModal;
