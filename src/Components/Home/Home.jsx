import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
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
    cursor: 'pointer',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: '70vh',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalMallIcon className={classes.icon} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.nameShop}
          >
            Akyo Shop
          </Typography>
          <Avatar
            className={classes.icon}
            alt="user"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/120943841_1171129439924797_3019827026839526985_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fQ252lGJuqEAX-GMLse&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8VAEt4Q-Isal8yK4R2IwDSuqlIeFBST0gYB_7byXe53Q&oe=6258F317"
          />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.icon}
          >
            Phuong Nam
          </Typography>
          <FavoriteIcon fontSize="large" className={classes.icon} />
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center">
              Top Sản Phẩm Bán Chạy
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/login">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="/register">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <div className={classes.infoShop}>
            <Typography>Freeship đơn từ 900k HCM</Typography>
            <Typography>Đặt hàng nhanh qua Messenger</Typography>
            <Typography>
              Đổi trả trong 48h nếu có lỗi từ nhà sản xuất
            </Typography>
          </div>

          <div className={classes.titleProduct}>
            <Typography component="h1" variant="h2" align="center" noWrap>
              New Arrivals
            </Typography>
          </div>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://oversizedshop.com.vn/ovs/uploads/2022/02/DSC00524-1151x1536.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      Playsuit 2 dây cột nơ Oversized thêu hoa nhí [ZA10]
                    </Typography>
                    <div className={classes.textPrice}>
                      <Typography>445.000đ</Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      fullWidth="true"
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
