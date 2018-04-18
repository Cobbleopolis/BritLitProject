export default class Post {
    constructor(title, content) {
        if (title instanceof Object) {
            this(...title);
        } else {
            this.title = title;
            this.content = content;
        }
    }
}