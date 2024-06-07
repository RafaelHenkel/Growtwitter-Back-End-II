import { v4 as uuid } from "uuid";
import { Tweet } from ".";
import { users } from "../database/Users.db";
import { tweets } from "../database/Tweet.db";
class User {
  private id: string;
  public username: string;
  public email: string;
  private password: string;
  public tweets: Tweet[] = [];
  public followers: User[] = [];

  constructor(username: string, email: string, password: string) {
    this.id = uuid();
    this.username = username;
    this.email = email;
    this.password = password;

    const verifyUser = users.find(
      (user) => user.email === this.email || user.username === this.username
    );
    if (verifyUser) {
      console.log("Error user already register");
    } else {
      users.push(this);
    }
  }
  sendTweet(tweet: Tweet) {
    const newTweet = new Tweet(tweet.content, this.username, "Tweet");
    this.tweets.push(newTweet);
  }
  follow(user: User) {
    if (user.username === this.username) {
      console.log("Error you can't follow yourself");
    } else {
      console.log(`@${this.username} followed @${user.username}`);
      user.followers.push(this);
    }
  }
  showFeed() {
    this.followers.forEach((userFollow) =>
      userFollow.tweets.forEach((tweet) => tweet.show())
    );
  }
  showTweets() {
    const userSearch = tweets.filter((user) => user.user === this.username);
    if (userSearch.length > 0) {
      userSearch.forEach((tweet) => tweet.show());
    } else {
      console.log("Error this user not post tweet");
    }
  }
}

export default User;
