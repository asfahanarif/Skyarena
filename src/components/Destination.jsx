import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {

  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame </p>

      <DestinationData
        className="first-des"

        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id maiores molestiae alias accusantium dignissimos esse voluptatem nemo laborum dicta? Similique esse quia atque eius dolorum vero animi, aperiam officia nemo. Fuga, sint. Repellendus amet laborum sint quos similique repudiandae quaerat! Sit natus maxime fugit facere ipsa tenetur magni pariatur asperiores quaerat, sequi aperiam sint earum magnam sunt officia accusantium temporibus nobis quo animi assumenda placeat, repellat possimus minus autem. Laudantium harum ipsum repudiandae alias quo tenetur odit, in magnam placeat tempora deleniti rerum quaerat porro eveniet soluta minima accusantium sint recusandae nemo ab velit, asperiores dolorem, ex sequi. A?"

        img1={Mountain1}
        img2={Mountain2}


      />

      <DestinationData
        className="first-des-reverse"

        heading="Mt.Dauldul, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id maiores molestiae alias accusantium dignissimos esse voluptatem nemo laborum dicta? Similique esse quia atque eius dolorum vero animi, aperiam officia nemo. Fuga, sint. Repellendus amet laborum sint quos similique repudiandae quaerat! Sit natus maxime fugit facere ipsa tenetur magni pariatur asperiores quaerat, sequi aperiam sint earum magnam sunt officia accusantium temporibus nobis quo animi assumenda placeat, repellat possimus minus autem. Laudantium harum ipsum repudiandae alias quo tenetur odit, in magnam placeat tempora deleniti rerum quaerat porro eveniet soluta minima accusantium sint recusandae nemo ab velit, asperiores dolorem, ex sequi. A?"

        img1={Mountain3}
        img2={Mountain4}


      />
    </div >
  );
};

export default Destination;