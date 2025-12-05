import { useState } from 'react';
import {
  IconBellRinging,
  IconFingerprint,
  IconLogout,
  IconReceipt2,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from '../NavBar.module.css';

const data = [
  { link: '/', label: 'Home', icon: IconBellRinging },
  { link: '', label: 'Create a Crewmate', icon: IconReceipt2 },
  { link: '', label: 'Crewmate Gallery', icon: IconFingerprint }
];

function NavBar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
      </div>
    </nav>
  );
}

export default NavBar;