import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../../Components/Footer/Footer';
import Hero from './Hero/Hero';
import About from './About/About';
import ListProduct from './ListProduct/ListProduct';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage:
      'url(https://oversizedshop.com.vn/ovs/uploads/2022/02/15.2-1-2048x907.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(8, 0, 6),
    color: 'white',
    height: '300px',

    '& h1': {
      backgroundColor: 'rgba(0,0,0, 0.3)',
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
    height: '70vh',
  },
  cardContent: {
    flexGrow: 1,

    '& p': {
      cursor: 'pointer',
    },

    '& div': {
      '& p': {
        cursor: 'default',
      },
    },
  },
  textPrice: {
    textAlign: 'center',
    color: '#808080',
  },
  nameShop: {
    flexGrow: 1,
  },
  titleProduct: {
    textAlign: 'center',

    '& h1': {
      display: 'inline-block',
      borderBottom: '5px solid #3f51b5',
      marginBottom: '2rem',
    },
  },
  infoShop: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '2rem',
  },
}));

export default function Home() {
  const classes = useStyles();
  const productHome = useSelector((state) => state.home.productHome);

  return (
    <React.Fragment>
      <main>
        <Hero classes={classes} />
        <Container className={classes.cardGrid} maxWidth="md">
          <About classes={classes} />
          <ListProduct dataProduct={productHome} classes={classes} />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
