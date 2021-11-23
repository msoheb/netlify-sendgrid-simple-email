## Netlify Sendgrid Simple Email (Netlify Functions)

**There is no front-end code for this repo, however, one can use this with javascript frameworks or simple html :disappointed_relieved:**

**Important Links**

[Netlify Functions](https://docs.netlify.com/functions/overview/)
[Sendgrid](https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication)

_:warning: You should know how Sendgrid work_

**:exclamation: You can use this code for reference but you can only initialized it inside site directory or \`netlify link\`**

---

[NETLIFY CLI](https://docs.netlify.com/cli/get-started/) - You can install netlify cli globally on your system. It will help to run functions locally on your system.

[ENV VARIABLES](https://docs.netlify.com/configure-builds/environment-variables/) - can be mentioned while deploying, we do not have to use dotenv package. You can install dotenv as dev dependency for testing locally.

If you are using custom functions directory, mention it [netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/) or in the Netlify web interface Site settings. Default is **netlify/functions** in the project root directory.

Sendgrid API KEY will only work if [Single Sender Verification](https://docs.sendgrid.com/ui/sending-email/sender-verification#third-pane) is verified

If you are not using custom fucntions directory, deploying functions is easy and you do not have to do any extra work, Netlify takes care of it :smiley:

We can also send template email using Netlify functions and Sendgrid which are more dynamic. Need help contact me.
