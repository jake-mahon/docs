# What is meant by "Default Browser" within Endpoint Policy Manager Browser router?

Pretend for a second you didn't have Netwrix Endpoint Policy Manager (formerly PolicyPak) and Endpoint Policy Manager Browser Router installed.

A user on Windows 10 can then set his __Default Browser__ from either within a browser, like Firefox, like this:

![218_1_ppbr-faq-3-pic-1](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_1_ppbr-faq-3-pic-1.webp)

Or, they can go directly into Windows __Default apps__ and set the Web Browser like this…

![218_2_ppbr-faq-3-pic-2](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_2_ppbr-faq-3-pic-2.webp)

But as soon as you have Endpoint Policy Manager Browser Router licensed and with ANY Endpoint Policy Manager Browser Router rules enabled,you will see Endpoint Policy Manager Browser Router Agent as the __Web Browser__ inside Windows 10.

![218_3_ppbr-faq-3-pic-3](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_3_ppbr-faq-3-pic-3.webp)

Then, using Endpoint Policy Manager Browser Router, you can set what the __Default Browser__ policies. Below are two examples on how to do find that.

![218_4_ppbr-faq-3-pic-4](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_4_ppbr-faq-3-pic-4.jpg)

![218_5_ppbr-faq-3-pic-5](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_5_ppbr-faq-3-pic-5.jpg)

When you set the __Default Browser__ using Endpoint Policy Manager to IE, Edge, Chrome, or Firefox, the operating system will still showEndpoint Policy Manager __Browser Router Agent__ as the __Web Browser__.

![218_6_ppbr-faq-3-pic-6](../../../../../static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/218_3_ppbr-faq-3-pic-3.webp)

But the user's perception of their Default Browser will be what you set here.

So, when a user clicks on any URL which does not have a route, the default browser, as defined from Endpoint Policy Manager Browser Router, will open up.

__NOTE:__  there is a special Default Browser option available, called __User Selectable__ [Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift](../../video/browserrouter/defaultwindows10.md).

You can get more information on theUser Selectable in the Endpoint Policy Manager Browser Router manual. But in essence the steps are as follows:

__Step 1 –__ After __User Selectable__ is set, the user can choose their desired browser, for example, from within Firefox or via the OS selector.

__Step 2 –__ The new setting is enacted with a GPupdate

__Step 3 –__ Endpoint Policy Manager __Browser Router Agent__ is then replaced back in the OS again as the default.

__Step 4 –__ The user will believe that their default browser is actually what has been set here.
