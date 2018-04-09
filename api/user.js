export default class User {
    constructor(username, name, blogName, userPostsUrl) {
        if (username instanceof Object) {
            this(...username);
        } else {
            this.username = username;
            this.name = name;
            this.blogName = blogName || this.username;
            this.userPostsUrl = userPostsUrl || `/posts/${this.username}`;
        }
    }
}