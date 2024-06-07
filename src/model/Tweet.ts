import { v4 as uuid } from "uuid";
import { User } from ".";

class Tweet {
  private id: string;
  public content: string;
  public user: string;
  protected type?: "Tweet" | "Reply";
  public replies: Tweet[] = [];
  public likes: User[] = [];

  constructor(content: string, user: string, type: "Tweet" | "Reply") {
    this.id = uuid();
    this.content = content;
    this.user = user;
    this.type = type;
  }
  reply(content: string, user: string) {
    const reply = new Tweet(content, user, "Reply");
    this.replies.push(reply);
  }
  like(user: User) {
    //PRECISA ARRUMAR!
    if (this.likes.includes(user)) {
      console.log("Error user already liked");
    } else {
      this.likes.push(user);
    }
  }
  show() {
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
    if (this.likes.length === 1) {
      console.log(`[@${this.likes[0].username} liked]`);
    } else if (this.likes.length === 1) {
      console.log(`[@${this.likes[0].username} more 1 user liked]`);
    } else {
      console.log(
        `[@${this.likes[0].username} more ${this.likes.length - 1} users liked]`
      );
    }
  }
}

export default Tweet;
