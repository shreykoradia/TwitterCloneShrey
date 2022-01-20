import React from 'react'
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
    return (
        <div className="widgets">
            
            <div className="widgets__input">
            <SearchIcon className="widget__searchicon" />
            <input placeholder="Search on the twitter" type ="text"  />
            </div>
            <div className="widgets__widgetsContainer">
                <h3>What's Happening</h3>

                <TwitterTweetEmbed tweetId={1337702383300694019} />

<TwitterTimelineEmbed
  sourceType="profile"
  screenName="shreykoradia"
    options={{ height: 400 }}
/>

<TwitterShareButton
  url={"https://www.instagram.com/s.h.r.ey/"}
  options={{ text: "#reactjs is awesome", via: "shreykoradia" }}
/>

            </div>
        </div>
    )
}

export default Widgets
