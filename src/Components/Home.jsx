import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="image de fundo" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Desperte a Beleza com Presentes Encantadores!
          </h1>
          <p className="primary-text">
            Bem-vindo à Chic Mimo, onde a beleza se encontra com o encanto.
            Explore nossa seleção exclusiva de presentes de cosméticos que não
            apenas realçam a sua beleza, mas também celebram a arte dos cuidados
            pessoais. Descubra o presente perfeito para quem você ama ou para se
            presentear. Deixe-nos ajudar você a brilhar!
          </p>

          <button className="sencondary-button">Faça seu Pedido <FiArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
