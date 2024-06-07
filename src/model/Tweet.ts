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
    if (this.likes.includes(user)) {
      console.log("Error user already liked");
    } else {
      this.likes.push(user);
    }
  }
  show() {
    console.log(`@${this.user}: ${this.content}`);
    this.showReplies();
  }
  showReplies() {
    for (let reply of this.replies) {
      console.log(` > @${reply.user}: ${reply.content}`);
    }
  }
  showLikes() {}
}

export default Tweet;
