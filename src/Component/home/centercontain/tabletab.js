import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Wallet from './wallet';
import Token from './token';
import Buyers from './buyers';
import Sellers from './sellers';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    padding:"20px 0",
  },
  tabTilteLength: {
    minWidth: '0px !important',
    padding: "5px 25px",
    textTransform: 'none',
    borderRight:"solid 2px white"
    
    // color: '#fff',
  },
  tabTilteLength1: {
    minWidth: '0px !important',
    padding: "5px 25px",
    textTransform: 'none',
    
    // color: '#fff',
  },
  tabpanel: {
    padding: '0px !important',
  },
  tabName: {
    float: 'left'
  }
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
        <div className='border-2 rounded-full flex justify-center mt-10 mb-10 max-w-md p-0'>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        
      >
        {/* <button>Token Tx</button>
        <button>Wallet Tx</button>
        <button>Buyers</button>
        <button>Sellers</button> */}

        <Tab label="Token tx" className={classes.tabTilteLength} />
        <Tab label="Wallet tx" className={classes.tabTilteLength} />
        <Tab label="Buyers" className={classes.tabTilteLength} />
        <Tab label="Sellers" className={classes.tabTilteLength1} />
      </Tabs>
      </div>

      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <Token tokenPrice={props.tokenPrice} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Wallet />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Buyers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Sellers />
      </TabPanel>
    </div>
  );
}