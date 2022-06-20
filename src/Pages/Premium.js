import React from 'react';

import Link from '@material-ui/core/Link';
import InLineLink from '../Component/InLineLink';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import useMediaQuery from "@material-ui/core/useMediaQuery";


import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/styles";
import WalletTrack1 from '../Images/wallettrack1.png';
import WalletTrack2 from '../Images/wallettrack2.png';
import WalletTrack3 from '../Images/wallettrack3.png';
import BuySell from '../Images/buysell.png';
import TradingPreview from '../Images/trending-preview.png';
import './Premium.css'


const useStyles = makeStyles(theme => ({
  root: {
    textAlign: '-webkit-center',
  },
  manual: {
    padding: '20px',
    backgroundColor: 'purple',
    color: '#262626',
    fontWeight: 600,
  },
  link: {
    color: '#04d1c0',
    fontWeight: 500,
  },
  title: {
    color: 'white',
  },
  yellowText: {
    color: '#E8AB03'
  },
  yellowText: {
    color: 'blue'
  },
  normalText: {
    color: 'white',
  },
  greenText: {
    color: '#28843D',
  },
  whiteText: {
    color: 'white',
    padding:'10px 0px'
  },
  card1: {
    marginTop: '10px',
    maxWidth: '1116px',
    backgroundColor: 'transparent',
    borderRadius:'20px',
    padding: '20px',
    boxShadow:'none',
    [theme.breakpoints.down("lg")]: {
      maxWidth: '1116px'
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: '936px'
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '696px'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: '516px'
    },
  },
  card2: {
    maxWidth: '1116px',
    backgroundColor: '#0f0e13',
    padding: '20px',
    marginTop: '10px',
    borderRadius:'12px',
    boxShadow:'none',

    [theme.breakpoints.down("lg")]: {
      maxWidth: '1116px'
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: '936px'
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '696px'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: '516px'
    },
  },
  card3: {
    maxWidth: '1116px',
    backgroundColor: 'transparent',
    padding: '20px',
    margin: '60px 0px',
    borderRadius:'12px',
    boxShadow:'none',

    [theme.breakpoints.down("lg")]: {
      maxWidth: '1116px'
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: '936px'
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '696px'
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: '516px'
    },
  },
  //checkbox css

  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  disabledLabel: {
    color: '#8E8F90'
  },
}));

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function Tools() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root} >
      <div className='text-white'>
        <h1 className='PremiumHeading'>Premium</h1>
        <div className='pr-5 pl-5'>
        <p className='PremiumText'>
          The 8% transaction fee will apply to the POOCOIN used to create LP and again on removal of LP.
        </p>
        <p className='text-white'>
          Unlock premium tier 1 by holding <span className='dollars'>$100</span> worth of &nbsp;
          <a target="_blank" href="https://exchange.pancakeswap.finance/#/add/BNB/0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            POOCOIN/BNB LP
          </a>
          <br></br>
          (approximately <strong>0.000010 POOCOIN/BNB LP</strong> created from 22.6297 &nbsp;
          <a target="_blank" href="https://poocoin.app/swap?outputCurrency=0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            POOCOIN &nbsp;
          </a>
          and 0.1652 BNB)<br></br>
          tokens in your wallet.
        </p>
        <p>
          Unlock premium tier 2 by holding <span className='dollars'>$300</span> worth of &nbsp;
          <a target="_blank" href="https://exchange.pancakeswap.finance/#/add/BNB/0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            POOCOIN/BNB LP
          </a>
          <br></br>
          (approximately <strong>0.000031 POOCOIN/BNB LP</strong> created from 66.9802
          <a target="_blank" href="https://poocoin.app/swap?outputCurrency=0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            &nbsp;POOCOIN&nbsp;
          </a>
          and 0.4879 BNB)<br></br>
          tokens in your wallet.
        </p>
        <p>
          Unlock premium tier 3 by holding <span className='dollars'>$2000</span> worth of &nbsp;
          <a target="_blank" href="https://exchange.pancakeswap.finance/#/add/BNB/0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            POOCOIN/BNB LP
          </a>
          <br></br>
          (approximately <strong>0.000204 POOCOIN/BNB LP</strong> created from 447.3085
          <a target="_blank" href="https://poocoin.app/swap?outputCurrency=0xB27ADAfFB9fEa1801459a1a81B17218288c097cc" className={classes.link}>
            &nbsp;POOCOIN&nbsp;
          </a>
          and 3.2544 BNB)<br></br>
          tokens in your wallet.
        </p>
        </div>
        <h2 className='FeatureHeadings mt-10 mb-5'>Premium features</h2>
        <p className='PremiumText mb-10'>The current premium features are:</p>
      </div>

      <div className="CardContainer container mx-auto max-w-4xl pb-10" >
      <Card className={classes.card1}>
        <CardContent>
          <h3 className='text-white text-4xl font-bold mt-10'>Tier 1: Track other wallets</h3>
          <div className='md:flex flex-row justify-around items-center max-w-2xl mt-10 mb-10'>
          <img src={WalletTrack1}></img>
          <p className='text-white'>Click "Track" on a transaction to track the trader's wallet.</p>
          
          </div>
          <div className='md:flex flex-row justify-around items-center mb-10 max-w-3xl'>

          <img src={WalletTrack2} className='w-72 mt-5 mb-5'></img>

          <p className='text-white'>This will change the wallet token list to show their wallet instead of your own.</p>
          </div>
          <div className='md:flex flex-row justify-around items-center mb-10 max-w-3xl'>
          <img src={WalletTrack3} className='w-72 mt-5 mb-5'></img>
          <div>
          <p className='text-white'>Click the "Clear" button to go back to your own wallet.</p>
          <p className='text-white'>You can also track a wallet by entering the wallet address into the input field and clicking "Go"</p>
          </div>
</div>

        </CardContent>
      </Card>
      <Card className={classes.card2}>
        <CardContent>
          <h3 className='text-white text-4xl font-bold mt-10'>Tier 1: Disable ads</h3>
          <p className={classes.whiteText}>Disable ads by checking the box.</p>

          <StyledCheckbox disabled /> <span className={classes.disabledLabel}>Disable ads (premium feature)</span>

        </CardContent>
      </Card>
      <Card className={classes.card3}>
        <CardContent>
          <div className='md:flex flex-row justify-center items-center '>
            <div className='max-w-sm md:pr-10 mb-5'>
          <h3 className='text-white text-4xl font-bold mt-10 text-left pb-5'>Tier 2: Show trades of tracked wallets</h3>
          <p className='text-white text-left text-sm'>Show the trades of tracked wallets plotted on the chart, and enable the "Wallet tx" tab for them.</p>
          </div>
          <img src={BuySell} style={{ width: '146px' }}></img>
          </div>  
        </CardContent>
      </Card>
      <Card className={classes.card2}>
        <CardContent>
          <h3 className='text-white text-4xl font-bold mt-10 pb-5'>Tier 3: View more trending websites/tokens.</h3>
          <p className='text-white text-sm pb-10'>Unlock the ability to view trending websites/tokens in more timescales, as well as listing the top 100 instead of 10.</p>
          <img src={TradingPreview} style={{ maxWidth: '90%' }}></img>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}