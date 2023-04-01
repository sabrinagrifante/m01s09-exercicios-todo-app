import Avatar from "../components/Avatar";
import Bio from "../components/Bio";
import { Usuario } from "../components/Usuario";

const redes = [
  {
    icone: "bi-linkedin",
    link: "https://www.linkedin.com/in/sabrinagrifante/",
  },
  {
    icone: "bi-instagram text-danger",
    link: "https://www.instagram.com/sabrinagrifante/",
  },
  {
    icone: "bi-github text-light-emphasis",
    link: "https://github.com/sabrinagrifante",
  },
];

export const QuemSou = () => {
  return (
    <div className="">
      <div className="row border-bottom py-2">
        <div className="col-3">
          <Avatar
            src="https://avatars.githubusercontent.com/u/125320588?v=4"
            alt="Foto de perfil - Sabrina Grifante"
          />
        </div>
        <div className="col">
          <Usuario nome="Sabrina Grifante" cargo="Estudante - DEV FullStack" redes={redes} />
        </div>
      </div>
      <div className="row mt-4">
        <Bio>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            aperiam quidem dolore officiis? Neque, ullam, eius quisquam cum
            magnam est aperiam perferendis obcaecati suscipit dolor laborum? Eos
            provident hic velit?
          </p>
          </Bio>
      </div>
    </div>
  );
};
