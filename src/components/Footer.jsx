import { Fragment } from "react";

const Footer = ({ quotes }) => {
  return (
    <Fragment>
      <div className="bg-gray">
        <div className="footer">
          <div className="container">
            <p>{quotes}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
