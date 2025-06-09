# How can I use Endpoint Policy Manager Browser router to force people to always use the SAME browser?

First, choose a common page to start each browser on, for example google.com, or a corporate home page.

Then configure each browser to open this page every time it is started. You simply use Netwrix Endpoint Policy Manager (formerly PolicyPak) __Application Settings Manager__ (not Endpoint Policy Manager Browser Router) to set the following values.

Firefox

![48_1_image001](/img/product_docs/policypak/policypak/browserrouter/48_1_image001.png)

Chrome

![48_2_image002](/img/product_docs/policypak/policypak/browserrouter/48_2_image002.png)

![48_3_image003](/img/product_docs/policypak/policypak/browserrouter/48_3_image003.png)

Internet Explorer

![48_4_image004](/img/product_docs/policypak/policypak/browserrouter/48_4_image004.png)

Create a Policy that always opens a specific browser when a specific page is requested, for example, the home page configured above.

![48_5_image005](/img/product_docs/policypak/policypak/browserrouter/48_5_image005.png)

In this example,when Firefox or Internet Explorer is started, Browser Router will immediately close that browser and open Chrome.
