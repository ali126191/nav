/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import { Link } from "gatsby";
import SvgIcon from '@material-ui/core/SvgIcon';
import './style.css'

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
 
  return (
    <footer className="footer">
          <Link to={"/login-page"} className="col" activeClassName="active">
            <span>
              <AccessAlarmIcon/>
            </span>
            <p id="text">Docs</p>
          </Link>
          <Link to={"/login-page"} className="col" activeClassName="active">
            <span>
              <AccessAlarmIcon/>
            </span>
            <p id="text">Docs</p>
          </Link>
          <Link to={"/landing-page"} className="col" activeClassName="active">
            <span>
             <AccessAlarmIcon/>
            </span>            
            <p>Tutorial</p>
          </Link>
          <Link to={"/profile-page"} className="col" activeClassName="active">
            <span>
              <AccessAlarmIcon/>
            </span>
            <p>plugins</p>
          </Link>
          <Link to={"/new"} className="col" activeClassName="active">
            <span>
              <AccessAlarmIcon/>
            </span>           
            <p>Blog</p>
          </Link>
          <Link to={"/new1"} className="col" activeClassName="active">
            <span>
              <AccessAlarmIcon/>
            </span>
            <p>Showcase</p>
          </Link>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
