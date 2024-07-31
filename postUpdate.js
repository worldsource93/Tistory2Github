import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1'
    }
});

(async () => {
    const feed = await parser.parseURL('https://seo-se-won.tistory.com/rss');
    for(let i = 0; i < feed.items.length; i++) {
        const {title, link, content, pubDate} = feed.items[i];
        const pubTimeStamp = new Date(pubDate).getTime();
        const currentTimeStamp = new Date().getTime();

        if(pubTimeStamp > currentTimeStamp - 1000 * 60 * 60) {
            console.log('생성될 게시글: ', title);
            writeFileSync(`${title}.md`, content, 'utf8');
        } else {
            console.log('배포시간 벗어난 게시글: ', title);
        }
    }
})();