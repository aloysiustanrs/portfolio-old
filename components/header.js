import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import utilStyles from "../styles/utils.module.css";
const Header = () => {
  return (
    <div className="d-flex flex-row">
      <div>
        <h1>Hello ! I'm Aloysius </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lorem
          ut velit cursus maximus ut quis ipsum. Curabitur sodales ultricies
          magna. In aliquam gravida est et tempor. Ut ac elit maximus, convallis
          elit quis, ultricies augue. Nullam lorem orci, vestibulum iaculis
          augue quis, dignissim fermentum enim. Praesent id quam.
        </p>
      </div>

      <Image
        priority
        src="/images/profile.jpg"
        className={`shadow ${utilStyles.borderCircle}`}
        height={200}
        width={300}
        alt="Aloysius Tan"
      />
    </div>
  );
};

export default Header;
