/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Tab from "../Component/basic/hometab";
import Lefttab from "../Component/about/tab";
import Input from "../Component/basic/input";
import { makeStyles } from "@material-ui/core/styles";
import rightPoster from "../Images/moonstar3.gif";
import Button from "@material-ui/core/Button";
import logo from "../Images/TokenIcons/logo2.png";
import Buttonicon from "../Images/bscscan.png";
import LanguageIcon from "@material-ui/icons/Language";
import Switch from "../Component/multichart/switch";
import Chart2 from "../Component/basic/chart";
import TableTab from "../Component/home/centercontain/tabletab";
import TokenSelect from "../Component/TokenSelect";
import Select from "react-select";
import { getAmountsOut } from "../PooCoin";
import { useHistory, useParams } from "react-router";
import { getLpinfo } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import DefaultTokens from "../config/default_tokens.json";
import PoocoinIcon from "../Images/poocoin512.png";
import "./About.css";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import HdrWeakIcon from "@material-ui/icons/HdrWeak";
import TokenBg from "../Images/searchtkbg.png";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { FaStar } from "react-icons/fa";
import { Rating } from "@material-ui/lab";




const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      padding: "0px 30px 0px 0px",
      color: "black",
    },
    backgroundColor: "transparent",
    textAlign: "-webkit-center",
    [theme.breakpoints.down("xs")]: {
      "& > *": {
        padding: "0px 00px 0px 0px",
      },
    },
  },
  headerContent: {
    backgroundColor: "#ffc107",
    color: "#262626",
    padding: "20px",
  },
  input: {
    display: "none",
  },
  inputField: {
    width: "100%",
    marginTop: "20px",
  },
  tabContainer: {
    minHeight: "700px !important",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  abourTop: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    background: "-webkit-linear-gradient(#eee, #333)",
  },
  buttongrid: {
    textAlign: "-webkit-right",
  },
  iconBtnRight: {
    padding: "10px",
    margin:"10px",
    backgroundColor: "#fff",
    float: "left",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  button: {
    backgroundColor: "#5e4e7b",
    border: "1px solid white",
    color: "#f8f9fa !important",
    height: 30,
    marginLeft: 3,
    fontSize: "0.8rem",
    fontWeight: 400,
    borderRadius:'30px',
    textTransform:'capitalize',
    boxShadow:"inset 0 1px 0 hsl(0deg 0% 100% / 15%), 0 1px 1px rgb(0 0 0 / 8%)",
  },
  selectBox: {
    // backgroundColor:"red !important",
    color: "red",
    fontSize: 12,
    width: 180,
    marginLeft: 7,
    zIndex: 999,
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  selecttool: {
    marginTop: 15,
    flexFlow: "row",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "wrap",
    },
  },
  tokenSelect: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  headerContainer: {
    height: "auto",
  },
  chartPan: {
    display: "inline-block",
    width: "100%",
  },
  centerContainer: {
    paddingTop: "20px",
    maxWidth: "1140px",
  },
  title: {
    // color: '#fff',
    fontSize: "2.5rem",
    fontWeight: 700,
    fontFamily: '"Lato",sans-serif',
    // marginTop: '20px'
  },
  buyBtn: {
    marginLeft: "48px",
    backgroundColor: "#28a745",
    fontSize: "20px",
  },
  subDesc: {
    // color: '#f8f9fa',
    fontSize: "1.5rem",
    marginBottom: "8px",
    textAlign: "-webkit-center",
  },
  border: {
    border: "2px solid #f8f9fa",
    borderRadius: "999px",
    // boxShadow: '0.5rem 1rem rgba(0,0,0,.15)!important',
    marginBottom: "10px",
    width: "30%",
    minWidth: 310,
    textAlign: "-webkit-center",
    fontFamily: '"Lato",sans-serif',
  },
  poocoinImg: {
    padding: 5,
  },
  value: {
    fontSize: "2rem",
    marginLeft: "1rem",
    marginRight: "1.5rem",
    padding: "35px 0",
  },
  link: {
    marginTop: "10px",
    "& a": {
      color: "blue !important",
      fontSize: "20px !important",
      marginBottom: "8px !important",
      fontWeight: 500,
      fontFamily: "Lato, Sans-serif",
    },
  },
  desc: {
    // color: '#f8f9fa',
    fontSize: "1.5rem",
    lineHeight: 1.2,
    fontWeight: 500,
    fontFamily: '"Lato",sans-serif',
    marginBottom: "8px",
  },
  leftSide: {
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const { tokenAddress } = props;
  const [showMode, setShowMode] = useState(1);
  const [priceRateData, setPriceRateData] = useState(0);
  const history = useHistory();
  const [lpDatas, setLpDatas] = useState([]);
  const [currentTokenInfo, setCurrentTokenInfo] = useState({});
  const [selectData, setSelectData] = useState([]);
  const [coinAddress, setCoinAddress] = useState(DefaultTokens.WBNB.address);
  const [priceData, setPriceData] = useState([]);

  // const tokenAddress = useSelector((state) => state.tokenAddress)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_TOKENADDRESS", payload: props.tokenAddress });
    //Get all info about current token from lpaddress and token table
    getLpinfo(tokenAddress).then((data) => {
      const tokens = [];
      const selectOptionData = [];
      for (var idx in data.lpInfos) {
        if (data.lpInfos[idx].token0 == tokenAddress) {
          let combined_json = {};
          combined_json["label"] = data.lpInfos[idx].tokenName1;
          //0: other token address, 1: other token symbolName 2: lp address 3: token order
          let addrLpInfo = [
            data.lpInfos[idx].token1,
            data.lpInfos[idx].tokenSymbol1,
            data.lpInfos[idx].lp_address,
            0,
          ];
          combined_json["value"] = addrLpInfo;
          tokens.push(combined_json);

          let selectdata_json = {};
          selectdata_json["label"] =
            "Pc v2 " +
            data.lpInfos[idx].tokenSymbol0 +
            "/" +
            data.lpInfos[idx].tokenSymbol1;
          selectdata_json["value"] = data.lpInfos[idx].token1;
          selectOptionData.push(selectdata_json);
        } else {
          let combined_json = {};
          combined_json["label"] = data.lpInfos[idx].tokenName0;
          let addrLpInfo = [
            data.lpInfos[idx].token0,
            data.lpInfos[idx].tokenSymbol0,
            data.lpInfos[idx].lp_address,
            1,
          ];
          combined_json["value"] = addrLpInfo;
          tokens.push(combined_json);

          let selectdata_json = {};
          selectdata_json["label"] =
            "Pc v2 " +
            data.lpInfos[idx].tokenSymbol1 +
            "/" +
            data.lpInfos[idx].tokenSymbol0;
          selectdata_json["value"] = data.lpInfos[idx].token0;
          selectOptionData.push(selectdata_json);
        }
      }
      setLpDatas(tokens);
      setSelectData(selectOptionData);
      setCurrentTokenInfo(data.tokenInfos);
    });
    //Get Lpaddress from current token address and BUSD token address
    getAmountsOut(
      1,
      tokenAddress,
      DefaultTokens.USDT.address,
      setPriceRateData
    );
  }, [tokenAddress]);

  const handleTokenPropsChange = (tokenInfo) => {
    const tokenAddress = tokenInfo.address;
    history.push(`/tokens/${tokenAddress}`);
    dispatch({ type: "SET_TOKENADDRESS", payload: tokenAddress });
  };

  const inputHandle = (tokenAddress) => {
    history.push(`/tokens/${tokenAddress}`);
    dispatch({ type: "SET_TOKENADDRESS", payload: tokenAddress });
  };

  const tokenSelect = (event) => {
    setCoinAddress(event.value);
  };
  let centerContainer = (
    <div> 
      <div className="p-4 mt-2 rounded-lg" style={{backgroundImage: `url(${TokenBg})`,overflow:"hidden",backgroundSize:'cover'
}}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={6} xl={6} item>
            <p
              style={{
                display: "flex",
                color: "white",
                textAlign: "left",
                margin: 0,
                float: "left",
                justifyContent:"center",
                alignItems:"center"
              }}
            >
              <span>
                {currentTokenInfo.name} ({currentTokenInfo.name}/BNB) 
                <br />
                <span className={"pricing"}>
                  ${parseFloat(priceRateData).toFixed(14)}
                </span>
              </span>
            </p>
            <Rating max={1}/>

            <div style={{ float: "left",display:'flex',justifyContent:'center',alignItems:'center' }}>
              <TokenSelect
                inputHandle={inputHandle}
                tokenProps={handleTokenPropsChange}
              />
     <IconButton color="white" aria-label="upload picture" component="span" className='FileCopyBtn'>
              <FileCopyIcon />
            </IconButton>

            </div>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={6}
            xl={6}
            item
            className={classes.buttongrid}
          >
          </Grid>
        </Grid>
        <Grid item container spacing={2} xs={12} className={classes.selecttool}>
          <Button className={classes.button}>Reload</Button>
          <div className={classes.selectBox}>
            <Select
            style={{color:"black"}}
            
              options={selectData}
              // input={false}
              onChange={tokenSelect}
              // onInputChange={tokenInputChange}
            ></Select>
          </div>
          <Switch />
        </Grid>
      </div>
      <Grid xs={12} style={{ marginTop: 20, padding: 5 }} item>
        <div className={classes.chartPan}>
          <Chart2
            tokenAddress={tokenAddress}
            coinAddress={coinAddress}
            height="500px"
          />
        </div>
        <br />
        <TableTab tokenPrice={priceRateData} />
      </Grid>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* <div className={classes.headerContent}>
        <div className={classes.title}>
          PooCoin
          <Button variant="contained" className={classes.buyBtn} href="/swap?outputCurrency=0xB27ADAfFB9fEa1801459a1a81B17218288c097cc">Buy</Button>
        </div>
        <div className={classes.subDesc}>Set slippage to 9% on pancakeswap.</div>
        <div className={classes.subDesc}>

          <div className={classes.border} container>
            <Grid container>
              <span style={{ borderRadius: '999px', backgroundColor: 'white', margin: '20px 10px 20px 10px' }}>
                <img src={PoocoinIcon} height="70" className={classes.poocoinImg} />
              </span>
              <span className={classes.value}> ${priceData}</span>
            </Grid>
          </div>

        </div>
        <div className={classes.desc}>Reflect token on the Binance Smart Chain.</div>
        <div className={classes.desc}>A 8% fee is charged on each transaction. 4% is distributed to other token holders and 4% is burned.</div>
        <div className={classes.desc}>Initial supply: 10,000,000. No more than 100,000 can be traded in 1 transaction.</div>
        <div className={classes.link}><a target="_blank" href="https://poocoin.medium.com/" className={classes.linkName}>Medium</a></div>
        <div className={classes.link}><a target="_blank" href="https://twitter.com/poocoin_token" className={classes.linkName}>Twitter</a></div>
        <div className={classes.link}><a target="_blank" href="https://t.me/poocointokenchat" className={classes.linkName}>Telegram</a></div>
        <div className={classes.link}><a target="_blank" href="https://www.reddit.com/r/PooCoin/" className={classes.linkName}>Reddit</a></div>
        <div className={classes.link}><a target="_blank" href="https://discord.gg/8NhHZNWhVf" className={classes.linkName}>Discord</a></div>
      </div> */}
      <Topings />
      <div className="container mx-auto max-w-4xl">
        <Grid container item xs={12}>
          <Grid item xs={12} md={4} sm={4} xl={4} className={classes.leftSide}>
            
            <Lefttab
              lpdata={lpDatas}
              currentTokenInfo={currentTokenInfo}
              priceRateData={priceRateData}
            />
            
          </Grid>
          <Grid item xs={12} md={8} sm={8} xl={8}>
            {centerContainer}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
function Topings() {
  const classes = useStyles();

  return (
    <div className="container mx-auto max-w-4xl mt-14 mb-10 ">
      <h2 className="ToppingText">Reflect Token</h2>
      <p className="text-white text-xl p-10">
        on the Binance Smart Chain. A 8% fee is charged on each transaction. 4%
        is distributed to other token holders & 4% is burned. Initial supply:
        10,000,000.No more than 100,000 can be traded in 1 transaction.
      </p>
      <div className="flex items-center justify-center mt-5">
        <IconButton
          color="inherit"
          aria-label="upload picture"
          component="span"
          className={classes.iconBtnRight}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="upload picture"
          component="span"
          className={classes.iconBtnRight}
        >
          <RedditIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="upload picture"
          component="span"
          className={classes.iconBtnRight}
        >
          <TelegramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="upload picture"
          component="span"
          className={classes.iconBtnRight}
        >
          <HdrWeakIcon />
        </IconButton>
      </div>
    </div>
  );
}
