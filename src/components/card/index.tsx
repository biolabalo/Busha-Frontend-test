import { WalletType } from "../../useFetch";
import CircularSVG from "../shared/CircularBackground"
const Card = ({ eachCardDetail }: { eachCardDetail: WalletType }) => {
  return (
    <div className="card">
      <div className="d-flex">
        <img src={eachCardDetail.imgURL} />{" "}
        <span style={{ color: "#9AA5B1", margin: "10px" }}>{eachCardDetail.name}</span>
      </div>
      <p className="amount">
          <span>{eachCardDetail.type === 'Naira' && '₦'}</span>
          <span>{eachCardDetail.balance}</span>&nbsp;&nbsp;
          <span>{eachCardDetail.type === 'digital' && eachCardDetail.currency}</span>
      </p>
      <CircularSVG />
    </div>
  );
};

export default Card;
