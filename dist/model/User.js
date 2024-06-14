"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Users_db_1 = require("../database/Users.db");
const Tweet_db_1 = require("../database/Tweet.db");
class User {
    constructor(username, email, password) {
        this.tweets = [];
        this.followers = [];
        this.following = [];
        this.id = (0, uuid_1.v4)();
        this.username = username;
        this.email = email;
        this.password = password;
        const verifyUser = Users_db_1.users.find((user) => user.email === this.email || user.username === this.username);
        if (verifyUser) {
            console.log("Error user already register");
        }
        else {
            Users_db_1.users.push(this);
        }
    }
    sendTweet(tweet) {
        this.tweets.push(tweet);
    }
    follow(user) {
        if (user.username === this.username) {
            console.log("Error you can't follow yourself");
        }
        else {
            console.log(`@${this.username} followed @${user.username}`);
            user.followers.push(this);
            this.following.push(user);
        }
    }
    showFeed() {
        // tweets.forEach((tweet) => tweet.show())
        const myTweets = Tweet_db_1.tweets.filter((tweetUser) => tweetUser.user === this.username);
        if (myTweets.length > 0) {
            console.log("------------------------------------");
            console.log("my tweets");
            myTweets.forEach((tweet) => tweet.show());
        }
        else {
            console.log("------------------------------------");
            console.log("User tweets not found!");
        }
        console.log("------------------------------------");
        if (this.following.length < 0) {
            console.log("following feed");
            this.following.forEach((user) => user.tweets.forEach((tweet) => tweet.show()));
        }
        else {
            console.log("This user does not follow anyone");
        }
    }
    showTweets() {
        const userSearch = Tweet_db_1.tweets.filter((user) => user.user === this.username);
        if (userSearch.length > 0) {
            userSearch.forEach((tweet) => tweet.show());
        }
        else {
            console.log("Error this user not post tweet");
        }
    }
}
exports.default = User;
