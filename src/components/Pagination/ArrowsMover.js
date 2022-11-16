import { Link } from "react-router-dom";
import IconArrowDoubleRight from "../Icons/IconArrowDoubleRight";
import IconArrowRight from "../Icons/IconArrowRight";
import { ArrowsMoverStyled } from "./ArrowsMover.style";

const ArrowsMover = ({ position }) => {
  if (position === "left") {
    return (
      <ArrowsMoverStyled className="flip">
        <Link to="#" className="icon arrow-double">
          <IconArrowDoubleRight />
        </Link>
        <Link to="#" className="icon arrow-single">
          <IconArrowRight />
        </Link>
      </ArrowsMoverStyled>
    );
  } else {
    return (
      <ArrowsMoverStyled>
        <Link to="#" className="icon arrow-single">
          <IconArrowRight />
        </Link>
        <Link to="#" className="icon arrow-double">
          <IconArrowDoubleRight />
        </Link>
      </ArrowsMoverStyled>
    );
  }
};

export default ArrowsMover;
