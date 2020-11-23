import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)
      </h1>
    </div>
  );
};

export default Header;
