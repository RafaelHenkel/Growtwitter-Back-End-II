import { v4 as uuid } from "uuid";
import { User } from ".";
import { tweets } from "../database/Tweet.db";

class Tweet {
  private id: string;
  public content: string;
  public user: string;
  protected type?: "Tweet" | "Reply";
  public replies: Tweet[] = [];
  public likes: string[] = [];

  constructor(content: string, user: string, type: "Tweet" | "Reply") {
    this.id = uuid();
    this.content = content;
    this.user = user;
    this.type = type;
  }

  tweetPost() {
    tweets.push(this);
  }
  reply(content: string, user: string) {
    const reply = new Tweet(content, user, "Reply");
    this.replies.push(reply);
  }
  like(user: string) {
    //PRECISA ARRUMAR!
    if (this.likes.includes(user)) {
      console.log("Error user already liked");
    } else {
      this.likes.push(user);
    }
  }
  show() {
    console.log("------------------------------------");
    console.log(`@${this.user}: ${this.content}`);
    this.showLikes();
    this.showReplies();
  }
  showReplies() {
    for (let reply of this.replies) {
      console.log(` > @${reply.user}: ${reply.content}`);
    }
  }
  showLikes() {
    if (this.likes.length === 0) {
      console.log(`[0 liked]`);
    } else if (this.likes.length === 1) {
      console.log(`[@${this.likes[0]} liked]`);
    } else if (this.likes.length === 1) {
      console.log(`[@${this.likes[0]} more 1 user liked]`);
    } else {
      console.log(
        `[@${this.likes[0]} more ${this.likes.length - 1} users liked]`
      );
    }
  }
}

export default Tweet;
