# Troubleshooting routing between browsers.

This guide will help you troubleshoot problems routing from browser to browser. For instance, if you are inside Internet Explorer and expect Firefox or Chrome to automatically be opened, but it doesn't, then this is the guide for you.

__NOTE:__  Firefox version must be Firefox ESR and not Firefox RR (rapid release). For more details, [https://www.policypak.com/pp-blog/policypak-will-soon-only-support-firefox-esr](https://www.policypak.com/pp-blog/policypak-will-soon-only-support-firefox-esr).

__Step 1 –__ This troubleshooting guide assumes you have already performed the steps in this initial troubleshooting guide: Browser Router > [Knowledge Base](/docs/policypak/policypak/browserrouter/overview/knowledgebase.md). This will demonstrate that you are:

- Getting the GPOs involved in Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router and
- Licensing is working for Endpoint Policy Manager Browser Router
- Endpoint Policy Manager Browser Router is set as the OS Default Browser for HTTP and HTTPS
- Routes are being created in ```ppBRResults.xml``` file in the user's AppData.

If you haven't pre-confirmed ALL of these aforementioned steps, then STOP.

ONLY continue if you see ```ppBRResults.xml``` and are sure Endpoint Policy Manager Browser Router is correctly licensed.

__Step 2 –__  First, test the Endpoint Policy Manager Browser Router is routing "natural" links. Use WORDPAD (not notepad!) to create a simple document which will open up the browser based upon your rules (routes.)

![267_1_img1](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_1_img1.png)

Does clicking on each link open the correct expected browser?

YES: Continue onward.

No: Stop, and update your GPO / routes / rules until you get the expected result.

__Step 3 –__  Browser Router installs extensions inside of:

- Internet Explorer
- Firefox
- Chrome
- Edge

Those helper applications will only install when:

- The browser has already been opened before (this creates a profile for the browser inside the user's profile)
- The user has logged in after this or ```GPupdate``` has run

Therefore, if you have a brand new user profile, and FF, IE and Chrome have never ever been launched before, then Endpoint Policy Manager Browser Router will not work immediately.

Again, the browser needs to be:

- Launched and its first-time wizard complete
- Closed
- THEN running``` GPupdate``` (or logoff and back on)

…will install the Endpoint Policy Manager Browser Router helper applications inside each browser on the endpoint.

So, some examples where Endpoint Policy Manager Browser Router will not work instantly:

![267_2_img2](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_2_img2.png)

![267_3_img3](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_3_img3.png)

To ensure each browser is ready to route BETWEEN BROWSERS, you are looking for the following.

Inside IE: (Gear | Manage Add-ons)

![267_4_img4-1024x325](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_4_img4-1024x325.png)

FF: The Firefox plugin for Endpoint Policy Manager Browser Router will ONLY install into Firefox ESR. When using Firefox ESR, you can then see this after you launch Firefox ESR and then press Ctrl+Shift+J . Then look for the text the following entry:

![267_5_pp-ff-img-01](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_5_pp-ff-img-01.png)

If you are ATTEMPTING to use Firefox RR, then it will not work and you will get the following (expected) error.

![267_6_image_1000x626](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_6_image_1000x626.png)

Chrome: (Gear | Extensions)

Chrome's helper app is automatically installed over the Internet. So if routing from Chrome TO Another Browser is not functioning, you need to ensure you have Internet connectivity (at least one time) to get the Endpoint Policy Manager Browser Router Chrome Extension automatically downloaded and installed on your machine.

![267_7_img6](/img/product_docs/policypak/policypak/troubleshooting/browserrouter/267_7_img6.png)

If you don't see the Extension listed, try:

__Step 1 –__ Closing Chrome.

__Step 2 –__ Verifying Internet connectivity.

__Step 3 –__ Try installing any Chrome extension manually (not ours, just one .. any one .. thru the webstore): [https://chrome.google.com/webstore/category/extensions?hl=en-US](https://chrome.google.com/webstore/category/extensions?hl=en-US)

__Step 4 –__ Again; make sure you have SOME Endpoint Policy Manager Browser Router policies.

__Step 5 –__ Run GPupdate /force

__Step 6 –__ Did our Chrome extension appear?

__Step 7 –__ Related.. If you see ONLY Chrome, and not any FORCED extensions, [Endpoint Policy Manager Browser Router removes other Chrome ‘force installed' extensions. How can I work around this?](/docs/policypak/policypak/troubleshooting/browserrouter/chrome/forceinstall.md)
