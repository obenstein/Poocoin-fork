import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AdvertiseHeader from '../Component/AdvertiseHeader';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Banners from './Advertise/Banners';
import UnVetted from './Advertise/UnVetted';
import Vetted from './Advertise/Vetted';
import Telegram from './Advertise/Telegram';
import Audits from './Advertise/Audits';
import './advcss.css';

const useStyles = makeStyles((theme) => ({
    title: {
        color: '',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
    }
}));

export default function Advertise() {
    const classes = useStyles();

    return (
        <div className={'AdvertiseBody'}>
            <h2 className="AdvHeading">
                Promote your token
            </h2>

            <Router>
                <div className='container mx-auto max-w-4xl items-center'>
                <AdvertiseHeader />
                <Switch>
                    <Route path="/promote" exact>
                        <Redirect to="/promote/banners" />
                    </Route>
                    <Route path="/promote/banners" exact component={Banners} />
                    <Route path="/promote/un-vetted" exact component={UnVetted} />
                    <Route path="/promote/vetted" exact component={Vetted} />
                    <Route path="/promote/pricebot" component={Telegram} />
                    <Route path="/promote/audits" component={Audits} />
                </Switch>
                </div>
            </Router>
        </div>
    )
}
