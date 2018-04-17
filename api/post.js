export default class Post {
    constructor(title, date, content) {
        if (title instanceof Object) {
            this(...title);
        } else {
            this.title = title;
            this.date = new Date(date);
            this.content = content;
        }
    }
}