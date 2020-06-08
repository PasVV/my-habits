import React, { PropsWithChildren } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '../Drawer';
import Logo from '../Logo';
import TemporaryAppBarAppBar from '../TemporaryAppBar';
import MainMenu from '../MainMenu/MainMenu';

interface OtherProps {}

type TemplateProps = PropsWithChildren<OtherProps>;

const Template = ({ children }: TemplateProps) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <TemporaryAppBarAppBar />
      <Drawer>
        <Grid container justify="center">
          <Logo />
        </Grid>
        <Divider />
        <MainMenu />
      </Drawer>
      <main
        style={{
          marginLeft: isXs ? 0 : drawerWidth,
          marginTop: isXs ? theme.spacing(9) : 0,
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Template;
