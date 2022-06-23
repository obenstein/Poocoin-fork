/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Modal } from "@material-ui/core";
import BSC from "../../Images/bscscan.png";
import LpInfoItem from "./LpInfoItem";
import { tokenBalance, getAmountsOut } from "../../PooCoin";
import { numberWithCommas } from "../../PooCoin/util";
import { useSelector } from 'react-redux';
import DefaultTokens from '../../config/default_tokens.json'
import Error from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#17151d",
    fontSize: "12px !important",
  },
  SubList: {
    maxHeight: "200px !important",
    overflow: "auto",
    textAlign: "left",
    marginLeft: 8,
  },
  marketValue: {
    color: "#28a745",
    textAlign: "left",
    marginLeft: 8,
    marginTop: 0,
  },
  value: {
    color: "#28a745",
  },
  market: {
    textAlign: "left",
    marginLeft: 8,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 1,
  },
  list: {
    marginBottom: 15,
  },
  link: {
    fontSize: 12,
  },
  tokenTransaction: {
    textAlign: 'left',
    padding: '10px 10px',
    fontSize: '15px',
    '& a:hover': {
      color: 'white'
    },
    '& img': {
      marginTop: '-5px',
      marginRight: '5px',
    }
  },
  bscIcon: {
    width: '20px',
  },
  bitqueryIcon: {
    width: '80px',
  },
  modalLeft: {
    textAlign: 'left',
    color: '#3eb8ff !important',
    cursor: 'pointer',
  },
  modalRight: {
    textAlign: 'right',
    cursor: 'pointer',
    color: '#3eb8ff !important'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#262626',
  },
  paper: {
    backgroundColor: 'white',
    border: 'none',
    padding: '40px 30px 30px 30px',
    display: 'grid',
    borderRadius: '8px',
    textAlign: 'center',
    width: '40%',
    position: 'relative',
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      padding: '10px',
      margin: '10px',
    }
  },
  presaleAd: {
    textAlign: 'left',
    margin: '20px 0px 20px 20px',
    fontSize: '15px',
  },
  presaleAdIcon: {
    color: '#f7b500!important',
    fontWeight: 900,
    fontSize: '1.25rem',
    margin: '-2px 0px 0px 2px',
    cursor: 'pointer',
  },
  closebtn: {
    backgroundColor: 'white',
    float: 'right',
    fontSize: '3px',
    border: 0,
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    top: 5,
    right: 5,
  },
}));

const SimpleList = ({ lpdata, totalSupply, currentTokenInfo, priceRateData }) => {

  // let marketCap = totalSupply * ratePrice;
  const [burnBalance, setBurnBalance] = useState(0);
  // const [priceRateData, setPriceRateData] = useState(0);
  const currentTokenAddress = useSelector((state) => state.tokenAddress);
  const classes = useStyles();
  const [open, setModalOpen] = useState(false);
  const modalOpen = () => {
    setModalOpen(true);
  }
  const modalClose = () => {
    setModalOpen(false);
  };
  const setBurnData = (data) => {
    setBurnBalance(data);
  }

  useEffect(() => {
    if (currentTokenAddress !== undefined) {
      tokenBalance(DefaultTokens.BURNADDRESS.address, currentTokenAddress, setBurnData)
      // getAmountsOut(1, currentTokenAddress, DefaultTokens.USDT.address, setPriceRateData)
    }
  }, [currentTokenAddress])

  if (totalSupply === undefined) {
    totalSupply = 0;
  }
  const realMarketCap = (parseFloat(totalSupply) - burnBalance) * parseFloat(priceRateData);
  const pureMarketCap = numberWithCommas(parseInt(realMarketCap));
  return (
    <div className={classes.root}>
      <div>
        <p className={classes.market}>
          Market Cap: (Includes locked, excludes burned)
        </p>
        <p className={classes.marketValue}>${pureMarketCap}</p>
      </div>
        <div className={classes.SubList}>
        <div className={classes.list}>
          {lpdata != null &&
            lpdata.map((row, index) =>
              <LpInfoItem lpInfo={row} currentTokenInfo={currentTokenInfo} key={index} />
            )}
          {/* <LpInfoItem lpInfo={lpdata} /> */}
        </div>
      </div>
      <div style={{backgroundColor:"#191d30"}} className="pt-4 pb-4">
      <div className={classes.tokenTransaction}>
          <div style={{backgroundColor:"#212743"}}  className="rounded-full bg-black p-2 ">
        <a  target="_blank" href={`https://bscscan.com/token/${currentTokenAddress}`}>
          {currentTokenInfo.symbol}
          &nbsp;Our Transactions
        </a>
        </div>
      
      </div>
      <div className={classes.tokenTransaction}>
      <div style={{backgroundColor:"#212743"}}  className="rounded-full bg-black p-2 ">

        <a target="_blank" href={`https://bscscan.com/address/${currentTokenAddress}#code`}>
          {currentTokenInfo.symbol}
          &nbsp;Our Contract
        </a>
        </div>

      </div>
      <div className={classes.tokenTransaction} >
      <div style={{backgroundColor:"#212743"}}  className="rounded-full bg-black p-2 ">

        <a target="_blank" href={`https://bscscan.com/token/${currentTokenAddress}#balances`}>
          {currentTokenInfo.symbol}
          &nbsp;Coin Holders
        </a>
</div>
      </div>
      </div>
      <div className={classes.tokenTransaction}>
        <a target="_blank" href={`https://explorer.bitquery.io/bsc/token/${currentTokenAddress}`}>
          &nbsp;Bitquery Explorer
        </a>
      </div>
      <Divider />
      <div className={classes.presaleAd}>
        <span className="flex items-center">PooCoin Visit Charts <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></span>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={modalClose}
      >
        <div className={classes.paper}>
          <button onClick={modalClose} className={classes.closebtn}>
            <CloseIcon />
          </button>
          <p>
            The ads in this spot may contain high-risk presales, some with whitelist applications required before the presale link has been revealed.
          </p>
          <p>
            There is no reliable way to know the intentions of the devs in these presales. Poocoin does not know what the outcome will be or if it is a scam.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SimpleList;
