"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Tweet_db_1 = require("../database/Tweet.db");
class Tweet {
    constructor(content, user, type) {
        this.replies = [];
        this.likes = [];
        this.id = (0, uuid_1.v4)();
        this.content = content;
        this.user = user;
        this.type = type;
    }
    tweetPost() {
        Tweet_db_1.tweets.push(this);
    }
    reply(content, user) {
        const reply = new Tweet(content, user, "Reply");
        this.replies.push(reply);
    }
    like(user) {
        //PRECISA ARRUMAR!
        if (this.likes.includes(user)) {
            console.log("Error user already liked");
        }
        else {
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
        }
        else if (this.likes.length === 1) {
            console.log(`[@${this.likes[0]} liked]`);
        }
        else if (this.likes.length === 1) {
            console.log(`[@${this.likes[0]} more 1 user liked]`);
        }
        else {
            console.log(`[@${this.likes[0]} more ${this.likes.length - 1} users liked]`);
        }
    }
}
exports.default = Tweet;
