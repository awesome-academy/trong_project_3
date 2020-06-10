import React from 'react';
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import message from './message';
const Nav = React.forwardRef((props,ref) => {
  return (
    <nav id="toggleNav" ref = {ref}>
      <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" >
              <FormattedMessage {...message.Home} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/1" activeClassName="active">
              <FormattedMessage {...message.BuyTicket} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/2" activeClassName="active">
              <FormattedMessage {...message.BuyTicket} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/2" activeClassName="active">
              <FormattedMessage {...message.BuyTicket} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/3" activeClassName="active">
              <FormattedMessage {...message.BuyTicket} />
            </NavLink>
          </li>
        </ul>
    </nav>
  );
});

export default React.memo(Nav);
