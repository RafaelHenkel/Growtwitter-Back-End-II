import { v4 as uuid } from "uuid";
import { Tweet } from ".";
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
    //PRECISA FAZER VERIFICACAO SE JA EXISTE O USUARIO!
  }
  sendTweet(tweet: Tweet) {
    const newTweet = new Tweet("novo tweet", this.username, "Tweet");
    this.tweets.push(newTweet);
  }
  follow(user: User) {
    if (user.username === this.username) {
      console.log("Error you can't follow yourself");
    } else {
      console.log(`@${this.username} followed @${user.username}`);
      this.followers.push(user);
    }
  }
  showFeed() {}
  showTweets() {}
}

export default User;
