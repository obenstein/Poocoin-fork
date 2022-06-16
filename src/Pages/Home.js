import React from "react";
import Tab from "../Component/basic/hometab";
import Input from "../Component/basic/input";
import TokenSelect from "../Component/TokenSelect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import TokenBg from "../Images/searchtkbg.png";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "black",
  },
  content: {},
  title: {
    fontSize: "2.5em",
    fontWeight: 700,
  },
  tokenSelect: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "3rem",
  },
  centerText: {
    fontSize: 30,
    marginTop: 10,
  },
  bottomText: {
    fontSize: "20px !important",
    marginTop: 10,
  },
  inputWidth: {
    width: "100%",
    padding: "1em 1em 1em 1em",
    borderRadius:"20px"
  },
  tabContainer: {
    minHeight: "700px !important",
  },
  rightSide: {
    margin: "17px auto 20px auto",
    backgroundColor: "#303030",
    maxWidth: 800,
    minWidth: 300,
    borderRadius: "8px",
    padding: "10px",
  },
  topSide: {
    marginLeft: "19%",
    marginTop: 20,
    color: "white",
  },
  pageHeader: {
    backgroundColor: "#ffc107",
    height: "auto",
    padding: "20px",
    color: "black",
  },
  tLink: {
    color: "blue",
    fontSize: "1.5rem",
    textDecoration: "underline",
    flexWrap: "break-wrap",
    cursor: "pointer",
  },
});

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const inputHandle = (tokenAddress) => {
    history.push(`/tokens/${tokenAddress}`);
    dispatch({ type: "SET_TOKENADDRESS", payload: tokenAddress });
  };

  const handleTokenPropsChange = (tokenInfo) => {
    const tokenAddress = tokenInfo.address;
    history.push(`/tokens/${tokenAddress}`);
    dispatch({ type: "SET_TOKENADDRESS", payload: tokenAddress });
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.pageHeader}>
        <h1 className={classes.title}>BSC Charts</h1>
        <div className={classes.centerText}>
          View price charts for any token in your wallet (binance smart chain)
        </div>
        <div className={classes.bottomText}>
          Telegram public chat: &nbsp;
          <a href="https://t.me/poocointokenchat" className={classes.tLink} target="_blank">
            http://t.me/poocointokenchat
          </a>
        </div>
      </div> */}

      {/* CUSTOM OBI WORK -------------------------------------------------------------------------- */}
      <div className="container mx-auto max-w-4xl">
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center mb-10 gap-16">
          <div className="text-white text-left mt-20">
            <h2 className="font-[100] text-5xl">
              Digital Currency Is Our Expertise
            </h2>
            <p className="pt-10 pb-10 text-xs">
              Lorem epsum Dummy Text Lorem epsum Dummy TextLorem epsum Dummy
              TextLorem epsum Dummy TextLorem epsum Dummy TextLorem epsum Dummy
              TextLorem epsum Dummy TextLorem epsum Dummy Text
            </p>
            <button
              className="pr-24 pt-1 pb-1 pl-24 text-black font-semibold rounded-full"
              style={{
                background: "linear-gradient(to right , #12cb90,#076aac)",
                width: "100%",
              }}
            >
              Connect Your Wallet
            </button>
          </div>
          <div
            className=" text-white rounded-xl"
            style={{
              backgroundImage: `url(${TokenBg})`,
              overflow: "hidden",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-3xl pb-5 pt-5">Search Token Here</h3>
            <div className={classes.tokenSelect}>
              <TokenSelect
                inputHandle={inputHandle}
                tokenProps={handleTokenPropsChange}
              />
            </div>
          </div>
        </div>

        {/* The wallet starred history  */}
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-16 pb-10">
          <div className="container grid grid-cols-3 border-2 self-center rounded-lg  text-white">
            <button className="bg-transparent border-t-0 border-l-0 border-2 p-4">
              Reliability
            </button>
            <button className="bg-transparent border-t-0 border-l-0 border-2 p-4">
              Security
            </button>
            <button className="bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-4">
              Etherium
            </button>
            <button className="bg-transparent border-t-0 border-l-0 border-2 p-4 border-b-0">
              Web 3.0
            </button>
            <button className="bg-transparent border-t-0 border-l-0 border-2 p-4 border-b-0">
              Low Fees
            </button>
            <button className="bg-transparent border-t-0 border-l-0 border-r-0 border-b-0 border-2 p-4">
              Block Chain
            </button>
          </div>

          {/* WALLET DIVS */}
          <div className="rounded-xl" style={{backgroundColor:"#1c1e31"}}> 
            <div className={classes.inputWidth}>
              <Input />
            </div>
            <div className="grid grid-flow-row text-white">
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4" style={{backgroundColor:"#212743"}}>Wallet</button>
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4 mt-3 mb-3" style={{backgroundColor:"#212743"}}>Starred</button>
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4 mb-3 " style={{backgroundColor:"#212743"}}>History</button>
            </div>
            {/* <div>
              <div >
                <Tab  />
              </div>
            </div> */}
          </div>
                    {/* WALLET DIVS */}

        </div>
      </div>

      {/* CUSTOM OBI WORK -------------------------------------------------------------------------- */}
    </div>
  );
}
