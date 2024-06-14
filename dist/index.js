"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const user1 = new model_1.User("RafaelHenkelUser1", "rafael@gmail.com", "1234567a");
const user2 = new model_1.User("RafaelUser2", "rafael234@gmail.com", "1234567a123");
const user3 = new model_1.User("User3", "rafaellll234@gmail.com", "1234567a123ll");
const tweet1 = new model_1.Tweet("tweet de rafaelHenkel", user1.username, "Tweet");
const tweet2 = new model_1.Tweet("tweet de rafael", user1.username, "Tweet");
const tweet3 = new model_1.Tweet("ola!", user2.username, "Tweet");
//enviar os tweets do usuario
user1.sendTweet(tweet1);
user1.sendTweet(tweet2);
user2.sendTweet(tweet3);
//seguir outros usuarios
user2.follow(user2);
user2.follow(user1);
user3.follow(user1);
//postar tweets no banco de dados
tweet1.tweetPost();
tweet2.tweetPost();
tweet3.tweetPost();
//replyes de tweets
tweet1.reply("reply show de bola", user1.username);
tweet3.reply("reply show de bola2", user2.username);
//curtir tweets
tweet1.like(user2.username);
tweet1.like(user1.username);
tweet3.like(user3.username);
// user1.showTweets()
user1.showFeed();
