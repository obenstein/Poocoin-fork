import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import List from "./list";
import News from "./news";
import { getTotalSupply } from "../../PooCoin/index.js";
import { numberWithCommas } from '../../PooCoin/util';
import { useSelector } from 'react-redux'
import './Tabs.css'

// import { useState } from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:"#17151d",
  },
  tabTitle: {
    backgroundColor: "#17151d !important",
  },
  tabTitlePan1: {
    backgroundColor: "black !important",
    minWidth: "0px !important",
    textTransform: "inherit !important",
    minHeight: "0px",
    border:"1px solid white",
    borderRadius:"20px 0px 0px 20px",
    top:5
    
    // "&:focus": {
    //   backgroundColor:"white",
    //   color:"#11be94",
    //   borderRadius: '20px!important',

    // },
  },
  tabTitlePan2: {
    backgroundColor: "black !important",
    minWidth: "0px !important",
    textTransform: "inherit !important",
    minHeight: "0px",
    borderRadius:"0px 20px 20px 0px",
    border:"1px solid white",
    top:5


  },
  
  tabTitlePan3: {
    backgroundColor: "black !important",
    minWidth: "0px !important",
    textTransform: "inherit !important",
    minHeight: "0px",
    borderRadius:"20px",
    border:"1px solid white",
    marginLeft:"10px",
    top:5


  },
  tabpanel: {
    backgroundColor: "#17151d",
    color: "#fff",
    float: "left !important",
    width: "100% !important",
  },
  item: {
    marginTop: 20,
    fontSize: 20,
    broderTop: "1px solid #141414",
    textAlign: "left",
    paddingLeft: 10,
  },
  infoBtn: {
    backgroundColor: "#fff !important",
    float: "right",
    left: "20%",
    top: 10,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function CenteredTabs(props) {
  const { lpdata, currentTokenInfo, priceRateData } = props;
  const classes = useStyles();
  const [totalSupply, setTotal] = useState();
  const currentTokenAddress = useSelector((state) => state.tokenAddress)

  useEffect(() => {
    setTotalSupply()
  }, [currentTokenAddress]);

  const setTotalSupply = async () => {
    if (currentTokenAddress !== undefined) {
      let totalSupplyData = await getTotalSupply(currentTokenAddress)
      setTotal(parseInt(totalSupplyData));
    }
  }
  const [value, setValue] = React.useState(0);
  const L = <span className="flex items-center">Info<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></span>
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <div className="pt-10">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className={classes.tabTitle}
      >
        <Tab label="Token" className={classes.tabTitlePan1} />
        <Tab label="News" className={classes.tabTitlePan2} />
        <Tab label={L} className={classes.tabTitlePan3} />
      

      </Tabs>
      </div>
      {/* <Divider className={'mb-3 mt-3'} /> */}
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <div className={classes.item}>
          Total Supply:
          <br />{numberWithCommas(totalSupply)}
        </div>
        <List lpdata={lpdata} totalSupply={totalSupply} currentTokenInfo={currentTokenInfo} priceRateData={priceRateData} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <div className={classes.item}>
          <News />
        </div>
      </TabPanel>
    </Paper>
  );
}
