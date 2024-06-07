"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Tweet {
    constructor(content, user, type) {
        this.replies = [];
        this.likes = [];
        this.id = (0, uuid_1.v4)();
        this.content = content;
        this.user = user;
        this.type = type;
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
            console.log(`${this.user} follow ${user.username}`);
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
    showLikes() { }
}
exports.default = Tweet;
