import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../css/advertise.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
const useStyles = makeStyles((theme) => ({
    HeaderBtn: {
        marginLeft: '.25rem!important',
        backgroundColor: 'transparent',
        borderRadius: '20px!important',
        lineHeight: 1,
        border:'solid 1px #11be94',
        textTransform: 'none',
        padding: '0px',
        color:"white",
        "&:hover": {
            backgroundColor:"white",
            color:"#11be94",
          },
     
          
    },
    aTag: {
        padding: '11px',
        '@media (max-width: 400px)': {
            fontSize:"0.7rem"

          },
          "&:focus": {
            backgroundColor:"white",
            color:"#11be94",
        borderRadius: '20px!important',

          },
    }
}));
export default function AdvertiseHeader() {
    const classes = useStyles();
    let location = useLocation();
    const [alignment, setAlignment] = useState();
    if (alignment === undefined) {
        if (location.pathname === '/promote/banners') {
            setAlignment('1');
        } else if (location.pathname === "/promote/un-vetted") {
            setAlignment('2');
        } else if (location.pathname === '/promote/vetted') {
            setAlignment('3');
        } else if (location.pathname === '/promote/pricebot/poocoin') {
            setAlignment('4');
        } else if (location.pathname === '/promote/pricebot/achtools') {
            setAlignment('4');
        } else if (location.pathname === '/promote/audits/shield-network') {
            setAlignment('5');
        } else if (location.pathname === '/promote/audits/ctdsec') {
            setAlignment('5');
        }
    }
    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    return (
        <div>
    <Card className={'Card'} style={{ textAlign: 'left', color: 'white', borderRadius:"0px" }}>
                <ToggleButtonGroup
                    exclusive
                    value={alignment}
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <div className='advNavContainer'>
                    <ToggleButton className={classes.HeaderBtn} value="4" aria-label="right aligned">
                        <Link className={classes.aTag} to="/promote/pricebot">Telegram Price Bot</Link>
                    </ToggleButton>
                    <ToggleButton className={classes.HeaderBtn} value="1" aria-label="left aligned">
                        <Link className={classes.aTag} to="/promote/banners">Banner Ads</Link>
                    </ToggleButton>
                  
                    <ToggleButton className={classes.HeaderBtn} value="5" aria-label="right aligned">
                        <Link className={classes.aTag} to="/promote/audits">Promotion List (Discontinued)</Link>
                    </ToggleButton>
                    </div>
                </ToggleButtonGroup>
            </Card>
        </div >
    )
}
