const { App, HTTPResponseAck } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// Listens to incoming messages that contain "hello"
app.command('/news', async ({ command, ack, say }) => {

    await ack()
    // say() sends a message to the channel where the event was triggered
    var url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=dcd8f6cdbfa344d7baa998e7ad19d61c'

    const json_response = await fetch(url).then((response) => {
        return response.json();
    }).catch((err) => {
        console.log('rejected', err);
    });

    var articles_array = []

    for (let i = 0; i < 5; i++) {
        var link_block = {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `<${json_response.articles[i].url}|${json_response.articles[i].title}>`
            }
        }
        articles_array.push(link_block);

        if (json_response.articles[i].urlToImage != null) {
            var image_block = {
                "type": "image",
                "image_url": `${json_response.articles[i].urlToImage}`,
                "alt_text": "Article Image"
            }

            articles_array.push(image_block);
        }

        articles_array.push({ "type": "divider" })
    }

    await say({
        blocks: articles_array
    });
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();



