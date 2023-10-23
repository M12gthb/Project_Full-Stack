import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { BuyerContext } from "../../providers/BuyerProvider";
import burguerMenu from "../../assets/burger-menu-svgrepo-com.svg";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export const Buyer = () => {
  const [burguer, setBurguer] = useState(false);
  const { getUserInfo, user, anouncement } = useContext(BuyerContext);

  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("motors:anouncementUserId");

    if (id) {
      getUserInfo(id);
      console.log(user);
      console.log(anouncement);
    }
  }, []);

  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  const renderName = () => {
    if (name.length > 0) {
      return (
        <span className={spanColor[indexSpanColor]}>
          {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
        </span>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Header />
      <div>
        {renderName()}
        <p>{user?.name}</p>
      </div>
      <img src={burguerMenu} alt="" onClick={() => setBurguer(!burguer)} />
      {burguer && (
        <div>
          {renderName()}
          <p>{user?.name}</p>
        </div>
      )}
      <div>
        {renderName()}
        <p>{user?.name}</p>
      </div>

      <Footer />
    </>
  );
};
