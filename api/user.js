export default class User {
    constructor(username, name, blogName) {
        if (username instanceof Object) {
            this(...username);
        } else {
            this.username = username;
            this.name = name;
            this.blogName = blogName || this.username;
        }
    }
}