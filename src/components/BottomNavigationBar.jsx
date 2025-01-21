import { NavLink } from "react-router";
import { RiAiGenerateText } from "react-icons/ri";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineSafety } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const NAVIGATION = {
  SAFE: "/safe",
  CONFIG: "/config",
  GENERATOR_PASSWORDS: "/passwords-generator",
};

const BottomNavigationBar = () => {
  const router = useLocation();
  const path = router.pathname;

  const isActive = (pathName) => path === pathName;

  return (
    <div className="btm-nav fixed bottom-0">
      <NavLink className="link link-primary" to={NAVIGATION.SAFE} end>
        <button
          data-isactive={isActive(NAVIGATION.SAFE)}
          className="text-primary data-[isActive=true]:active"
        >
          <AiOutlineSafety />
        </button>
      </NavLink>
      <NavLink
        className="link link-primary"
        to={NAVIGATION.GENERATOR_PASSWORDS}
        end
      >
        <button
          data-isactive={isActive(NAVIGATION.GENERATOR_PASSWORDS)}
          className="text-primary data-[isActive=true]:active"
        >
          <RiAiGenerateText />
        </button>
      </NavLink>

      <NavLink className="link link-primary" to={NAVIGATION.CONFIG} end>
        <button
          data-isactive={isActive(NAVIGATION.CONFIG)}
          className="text-primary data-[isActive=true]:active"
        >
          <GrConfigure />
        </button>
      </NavLink>
    </div>
  );
};

export default BottomNavigationBar;
