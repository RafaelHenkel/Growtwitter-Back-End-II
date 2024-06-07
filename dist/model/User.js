"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const _1 = require(".");
class User {
    constructor(username, email, password) {
        this.tweets = [];
        this.followers = [];
        this.id = (0, uuid_1.v4)();
        this.username = username;
        this.email = email;
        this.password = password;
        //PRECISA FAZER VERIFICACAO SE JA EXISTE O USUARIO!
    }
    sendTweet(tweet) {
        const newTweet = new _1.Tweet("novo tweet", this.username, "Tweet");
        this.tweets.push(newTweet);
    }
    follow(user) { }
    showFeed() { }
    showTweets() { }
}
exports.default = User;
