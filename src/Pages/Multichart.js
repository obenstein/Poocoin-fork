/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Tab from '../Component/basic/tab';
import Input from '../Component/basic/input';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Panel from '../Component/multichart/panel';
import rightPoster from '../Images/moonstar3.gif';
import leftPoster from '../Images/leftposter.gif';
import TokenSelect from '../Component/TokenSelect';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DefaultTokens from '../config/default_tokens.json';
import { storeLocalMultichart } from "../PooCoin/util";
import TokenBg from "../Images/searchtkbg.png";

const useStyles = makeStyles((theme) => ({
  root: { 
    '& > *': {
      paddingRight: 10
    },
    backgroundColor: 'transparent',
    color: "black",
    [theme.breakpoints.down("xs")]: {
      '& > *': {
        paddingRight: 0
      },
    },
  },
  input: {
    display: 'none',
  },
  tokenSelect: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "3rem",

  },
  button: {
    margin: theme.spacing(1),
    float: theme.right,
  },
  rightTitle: {
    color: '#ffffff',
    paddingBottom: 10
  },
  inputWidth: {
    width: '100%',
    padding: '20px',
  },
  tabContainer: {
    minHeight: '700px !important'
  },
  leftSide: {
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  leftSideOther: {
    [theme.breakpoints.down("xs")]: {
      '& .MuiGrid-grid-xs-4': {
        flexBasis: '100%',
        maxWidth: '100%'
      },
      width: '100%',
      '& .row > .cell': {
        display: 'none',
      }
    },
  },
  rightSide: {
    backgroundColor: '#303030',
    marginTop: 5,
    padding: '30px 10px 10px 10px',
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      minWidth: '400px',
      position: 'relative',
      marginTop: '30px',
      marginLeft: '15%',
    },
    [theme.breakpoints.down("xs")]: {
      position: 'relative',
      marginTop: '4%',
      marginLeft: '0%',
      width: '100%',
      minWidth: '300px'
    },
  },
  searchInput: {
    paddingLeft: 20,
    marginTop: 10,
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
    },
  },
  iconBtn: {
    backgroundColor: '#fff',
    height: 35,
    top: 10,
    float: 'left',
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  iconBtnRight: {
    padding:'10px',
    backgroundColor: '#fff',
    float: 'left',
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
  iconPadding: {
    float: 'right',
  },
  iconPaddingRight: {
    paddingLeft:'5px',
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
    },
  },
}));

export default function   Multichart() {
  const classes = useStyles();
  const [showMode, setShowMode] = React.useState(1);

  const handleChange = () => {
    setShowMode(!showMode);
  };

  const handleChangeRight = () => {
    setShowMode(!showMode);
  };

  const handleTokenPropsChange = (tokenInfo) => {
    storeLocalMultichart(tokenInfo.address);
    setMultichartData(JSON.parse(localStorage.getItem('multichart')))
  };

  const inputHandle = (tokenAddress) => {
    storeLocalMultichart(tokenAddress);
    setMultichartData(JSON.parse(localStorage.getItem('multichart')))
  };

  const [multichartData, setMultichartData] = useState(JSON.parse(localStorage.getItem('multichart')));

  if (multichartData == null) {
    storeLocalMultichart(DefaultTokens.POOCOIN.address)
  }
  // let multichartData = ;

  const onSymbol = () => {
    setMultichartData(JSON.parse(localStorage.getItem('multichart')))
  }

  let leftContainer = (
    <div className="flex justify-center">
      {/* <div className={'row'}>
        <div className={'cell'}>
          <a href="https://click.a-ads.com/1602418/134863/" rel="nofollow noreferrer" target="_blank">
            <img alt="Alien Doge" height="90" src={leftPoster} width="970" />
          </a>
        </div>
      </div> */}

      {/* <div style={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
        <div className={classes.searchInput}>
          <div style={{ maxWidth: '100%' }}>
            <TokenSelect inputHandle={inputHandle} tokenProps={handleTokenPropsChange} />
          </div>
        </div>
        <div className={classes.iconPadding}>
          <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconBtn} onClick={handleChange}>
            <FileCopyIcon />
          </IconButton>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-4  ">
      
        {multichartData != null &&
          multichartData.address.map((data, index) => (
            <Grid item xs={12} lg={12} style={{ padding: '5px' }} key={index}>
              <Panel tokenAddress={data} index={index} />
            </Grid>
          ))
        }
      
      </div>
    </div>
  );

  let container;

  if (showMode) {
    container = (
      <Grid>
        
          <div>
          {leftContainer}
          </div>
        
        {/* <Grid item xs={12} lg={3} md={4} sm={6} className={classes.rightSide}>
          <div className={classes.iconPaddingRight}>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconBtnRight} onClick={handleChangeRight}>
              <FileCopyIcon />
            </IconButton>
          </div>
          <div className={classes.rightTitle}>Sponsored BSC Project</div>
          <div className={classes.inputWidth} >
            <Input />
          </div>
          <Tab className={classes.tabContainer} onSymbol={onSymbol} />
        </Grid> */}
      </Grid>
    )
  } else {
    container = (
      <Grid container item xs={12}>
        <Grid item xs={12}>
          {leftContainer}
        </Grid>
      </Grid>
    )
  }

  return (
    <div className="container mx-auto max-w-4xl">
    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-16">
    <div
            className=" text-white rounded-xl"
            style={{
              backgroundImage: `url(${TokenBg})`,
              overflow: "hidden",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-3xl pb-5 pt-5 text-left pl-10">Search Token Here</h3>
            <p className="text-xs text-left pl-10">Lorem ipsum is my dummy text  Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text Lorem ipsum is my dummy text </p>
            <div className={classes.tokenSelect} style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px'}}>
              <TokenSelect
                inputHandle={inputHandle}
                tokenProps={handleTokenPropsChange}
                
              />
               <div className={classes.iconPaddingRight}>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconBtnRight} onClick={handleChangeRight}>
              <FileCopyIcon />
            </IconButton>
          </div>
            </div>
          </div>
          <div className="rounded-xl" style={{backgroundColor:"#1c1e31"}}> 
            <div className={classes.inputWidth}>
              <Input />
            </div>
            <div className="grid grid-flow-row text-white">
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4" style={{backgroundColor:"#212743"}}>Wallet</button>
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4 mt-3 mb-3" style={{backgroundColor:"#212743"}}>Starred</button>
            <button className="rounded-full text-left pl-3 pt-2 pb-2 mr-4 ml-4 mb-3 " style={{backgroundColor:"#212743"}}>History</button>
            </div>
          </div>
      </div>
      {container}
    </div>
  );
}