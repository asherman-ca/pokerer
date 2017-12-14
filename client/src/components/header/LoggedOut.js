import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

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
      <a href="/auth/google">
        <MenuItem primaryText="Sign In" />
      </a>
    </IconMenu>
  </div>
);

export default IconMenuExampleSimple;
