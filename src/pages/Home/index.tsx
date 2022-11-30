import { useState } from "react";
import SideMenu from "../../components/sidemenu";
import Wallet from "../../components/wallet";
import WalletModal from "../../components/modal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <main className="container">
        <div className="col-lg-4">
          <SideMenu />
        </div>
        <div className="col-lg-8">
          <Wallet setOpenModal={setOpenModal} />
        </div>
        <WalletModal openModal={openModal} setOpenModal={setOpenModal} />
      </main>
    </>
  );
}

export default Home;
