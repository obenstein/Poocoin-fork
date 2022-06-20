import React, { Component } from "react";
import "../../css/advertise.css";
import InLineLink from "../../Component/InLineLink";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import bannerpreview from "../../Images/preview.png";
import TelegramIcon from "@material-ui/icons/Telegram";
import Email from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  iconBtnRight: {
    padding: "8px",
    margin: "8px",
    backgroundColor: "#11c193",
    float: "left",
    borderRadius: "20%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
    },
  },
}));

class Banners extends Component {
  render() {
    return (
      <div className="mb-10">
        <Card className={"MainCard"}>
          <CardHeader title="A-ads Ad Spot(s)" style={{ color: "#00ff42" }} />
          <hr />
          <CardContent>
            <h3 className="advDesc">
              The Pricing And Purchasing Of Banner Ads Is Here:
            </h3>
            <InLineLink
              url="https://a-ads.com/campaigns/new?selected_site_id=489659&selected_source_type=site&partner=1602418"
              text="https://a-ads.com/campaigns/new?selected_site_id=489659&selected_source_type=site&partner=1602418"
              fontSize="1.05rem"
            />
            <p className="advDesc">
              Ads that target poocoin website now require KYC.
            </p>
            <hr />
            <p className="advDesc">
              The banner ads are purchased through an ad provider a-ads.com
              <InLineLink
                url="https://a-ads.com/campaigns/new?selected_site_id=489659&selected_source_type=site&partner=1602418"
                text=" a-ads.com"
                fontSize="1rem"
              />
            </p>
            <p className="advDesc">
              You can also purchase them by hovering on the icon in the
              top-right and clicking the "your ad here" link.
            </p>
            <hr />

            <div className="flex justify-center items-center gap-3  ">
              <img
                src={bannerpreview}
                width="302"
                height="86"
                className={"img-fluid border rounded"}
              />
              <br />
              <div className="text-left">
                <h2 className="PreviewHeading">Preview</h2>
                <p className="text-sm leading-6">
                  If your project is an un-released fair launch, or a presale
                  that has no available presale url on your website, the ad will
                  be limited to only appearing in the bottom left spot marked as
                  "presale ads". It will appear in a-ads as being marked as
                  "shady".
                </p>
                <br />
                <p className="text-sm leading-6">
                  This limitation is removed after your token is launched or
                  after you provide a presale url for unicrypt or dxsale.
                </p>
                <br />

                <p className="text-sm leading-6">
                  Ads for any launched token that has less than $10k worth of
                  BNB or stablecoin in the liquidity pool will be rejected.
                </p>
              </div>
            </div>

            <hr />
            <p className="ContactHeading">Poocoin admin contact info:</p>
            <FooterContent />
          </CardContent>
        </Card>
      </div>
    );
  }
}

function FooterContent() {
  const classes = useStyles();

  return (
    <div
      className="flex justify-around items-center rounded-xl mainFooter"
      style={{ background: "#0f0e13" }}
    >
      <div className="p-5">
        <div className="flex justify-left items-center">
          <IconButton
        color="inherit"
        aria-label="upload picture"
        component="span"
        className="TelegramBtn"
          >
            <Email />{" "}
          </IconButton>
          <p>Email:</p>
        </div>
        <InLineLink
          url="mailto://promotions@poocoin.app"
          text=" promotions@poocoin.app"
          fontSize="1rem"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-left items-center  ">
          <IconButton
         color="inherit"
         aria-label="upload picture"
         component="span"
         className="TelegramBtn"
          >
            <TelegramIcon />{" "}
          </IconButton>
          <p>Telegram Admin User:</p>
        </div>
        <InLineLink
          url="mailto://promotions@poocoin.app"
          text="@foma11"
          fontSize="1rem"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-left items-center">
          <IconButton
            color="inherit"
            aria-label="upload picture"
            component="span"
            className="TelegramBtn"
          >
            <TelegramIcon />{" "}
          </IconButton>
          <p>Telegram Public Chat:</p>
        </div>
        <InLineLink
          url="https://t.me/poocointokenchat"
          text=" https://t.me/poocointokenchat"
          fontSize="1rem"
        />
      </div>
    </div>
  );
}

export default Banners;
