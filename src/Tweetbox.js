import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Shrey",
      username: "shreykoradia",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "" 
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.unsplash.com/photo-1416838375725-e834a83f62b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGFkdWx0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;