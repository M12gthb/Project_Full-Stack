import { useContext, useEffect } from "react";
import { AdvertiserContext } from "../../providers/AdvertiserProvider";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AdvertiseCard } from "../../components/Cards/AdvertiseCard";

export const Advertiser = () => {
  const { anouncements, getUser, user } = useContext(AdvertiserContext);

  const name = user?.name.split(" ") || [];
  const spanColor = ["blue", "rose", "brown", "green"];
  const indexSpanColor = Math.floor(Math.random() * spanColor.length);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* <Header user={user} /> */}
      <div>
        {user && (
          <span className={spanColor[indexSpanColor]}>
            {name[0][0].toUpperCase()} {name[1] ? name[1][0].toUpperCase() : ""}
          </span>
        )}
        <h1>{name.join(" ")}</h1>
        <span>{user?.type}</span>
        <p>{user?.description}</p>
        <button>Criar anuncio</button>
      </div>
      <AdvertiseCard cards={anouncements} user={user} />
      <Footer />
    </>
  );
};
