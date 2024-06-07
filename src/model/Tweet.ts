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
  reply(content: Tweet) {}
  like(user: User) {}
  show() {}
  showReplies() {}
  showLikes() {}
}

export default Tweet;
