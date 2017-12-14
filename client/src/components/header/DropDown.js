import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <Menu color={'white'} />
        </IconButton>
      }
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <a href="/api/logout">
        <MenuItem primaryText="Sign out" />
      </a>
      <Link to={'/records/form'}>
        <MenuItem primaryText="Forms" />
      </Link>
    </IconMenu>
  </div>
);

export default IconMenuExampleSimple;
