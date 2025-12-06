import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconBellRinging,
  IconFingerprint,
  IconReceipt2,
} from '@tabler/icons-react';
import { Group } from '@mantine/core';
import classes from '../NavBar.module.css';

const data = [
  { link: '/', label: 'Home', icon: IconBellRinging },
  { link: '/CreateCrewMember', label: 'Create a Crewmate', icon: IconReceipt2 },
  { link: '/ReadCrewMember', label: 'Crewmate Gallery', icon: IconFingerprint }
];

function NavBar() {
  const location = useLocation();

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={location.pathname === item.link || undefined}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
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