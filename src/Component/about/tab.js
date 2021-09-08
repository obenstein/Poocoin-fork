import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import List from "./list";
import { getTotalSupply } from "../../PooCoin";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@material-ui/core/Button";
// import { useState } from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabTitle: {
    padding: 0,
    backgroundColor: "#303030 !important",
  },
  tabTitlePan: {
    backgroundColor: "#565e64 !important",
    minWidth: "0px !important",
    textTransform: "inherit !important",
    minHeight: "0px",
    top: 10,
  },
  tabpanel: {
    backgroundColor: "#303030",
    color: "#fff",
    float: "left !important",
    width: "100% !important",
  },
  item: {
    marginTop: 20,
    fontSize: 15,
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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function CenteredTabs(props) {
  const { lpdata, name } = props;
  // const [lpdatastate, setLpdataState] = useState(lpdata);
  // const [sname, setSName] = useState(name);

  const [totalSupply, setTotal] = useState([]);

  const setTotalSupply = (data) => {
    setTotal(data);
  };

  useEffect(() => {
    getTotalSupply(setTotalSupply);
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className={classes.tabTitle}
      >
        <Tab label="Token" className={classes.tabTitlePan} />
        <Tab label="News" className={classes.tabTitlePan} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <div className={classes.item}>
          Total Supply:
          <br /> {totalSupply.totalSupply}
        </div>
        <List data={lpdata} />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Paper>
  );
}