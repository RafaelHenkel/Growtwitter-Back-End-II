import { Tweet, User } from "./model";

const user1 = new User("RafaelHenkel", "rafael@gmail.com", "1234567a");

const tweet1 = new Tweet("tweet de rafael", "RafaelHenkel", "Tweet");

user1.sendTweet(tweet1);

tweet1.reply("reply show de bola", "RafaelHenkel");

tweet1.show();
