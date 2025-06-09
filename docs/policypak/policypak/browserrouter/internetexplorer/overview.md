# Understanding Browser Router and Internet Explorer

Endpoint Policy Manager Browser Router has special functions for managing Internet Explorer. First, you can set Internet Explorer 11's Enterprise Mode and Document Modes for an individual website. Second, there are also two overriding policies that help route many websites to Internet Explorer, which is something that IT departments often want to do.

## Setting Internet Explorer Enterprise Modes and Document Modes

Internet Explorer 11, when patched to certain levels, will embrace Enterprise Mode (EM) and Document Modes (DM). Internet Explorer 11 EM and DM enable you to tell Internet Explorer 11 how to render certain websites for a more compatible view.

__NOTE:__ To get an overview of Endpoint Policy Manager Browser Router and Internet Explorer 11's Enterprise and Document Modes, please see [http://www.policypak.com/video/policypak-browser-router-enterprise-and-document-modes.html](http://www.policypak.com/video/policypak-browser-router-block-web-sites-from-opening-in-all-browsers.html).

__NOTE:__ To learn more about Internet Explorer 11 Enterprise and Document Modes, see the following Microsoft websites: Enterprise Mode is at: [Internet Explorer to Endpoint Policy Manager Browser Router Site lists](/docs/policypak/policypak/video/browserrouter/iesitelists.md) and Document Modes is at: [https://technet.microsoft.com/en-us/library/dn321432.aspx](http://www.policypak.com/video/policypak-using-pp-browser-router-on-citrix-or-rds-servers-with-published-browser-applications.html).

__CAUTION:__ This Endpoint Policy Manager Browser Router method is meant to replace the Microsoft method of creating Enterprise Mode site lists. Do not try to use Microsoft's list (explained in the Microsoft URL above) along with Endpoint Policy Manager Browser Router's function. Only use Endpoint Policy Manager Browser Router to perform this function.

Using Endpoint Policy Manager Browser Router, you can require particular websites to use a specific Internet Explorer Enterprise Mode or Document Mode.

![about_policypak_browser_router_25](/img/product_docs/policypak/policypak/browserrouter/internetexplorer/about_policypak_browser_router_25.png)

Internet Explorer 11's Enterprise Mode has two specifications: v1 and v2. Endpoint Policy Manager Browser Router automatically detectsthe version of Internet Explorer installed on your endpoint machines and write the Enterprise site list based on the correct specification. Note that __PORT__ is not supported in the Internet Explorer EM v1 specification, and as such, is ignored when v1 site lists must be used.

__NOTE:__ Site lists for v2 are automatically created and used when Windows 10 and Internet Explorer 11 (version 11.0.10586.\*) are detected. Site lists for v1 are used in all other circumstances.

Note the checkbox labeled __Don't make a route__. If the user is already using Firefox or Chrome and goes to this website, Internet Explorer will always open when __Don't make a route__ is unchecked. When it is checked, the user is free to use Firefox or Chrome on this website, and they will only see the Internet Explorer Document Mode set when they specifically select Internet Explorer. This gives you the ability to use Endpoint Policy Manager Browser Router to manage the Internet Explorer Enterprise Mode site list without having to force users to specifically use Internet Explorer and impose a route.

You can easily see if Endpoint Policy Manager Browser Router and the Internet Explorer 11 Enterprise Mode are working. There's an Internet Explorer 11 EM icon in the title bar next to the address bar that demonstrates that EM is active.

![about_policypak_browser_router_26](/img/product_docs/policypak/policypak/browserrouter/internetexplorer/about_policypak_browser_router_26.png)

If you've chosen to use one of the Internet Explorer Document Modes, you might have a hard time locating them if they are applying correctly since they are difficult to see. For instance, here we've set a page to display in IE5 Document Mode using Endpoint Policy Manager Browser Router.

![about_policypak_browser_router_27](/img/product_docs/policypak/policypak/browserrouter/internetexplorer/about_policypak_browser_router_27.png)

When users visit the website at this point, Endpoint Policy Manager Browser Router correctly sets the IE Document Mode accordingly. To see the DM, you need to press F12 within Internet Explorer 11 for __Developer Tools__, and then click the Emulation tab.

![about_policypak_browser_router_28](/img/product_docs/policypak/policypak/browserrouter/internetexplorer/about_policypak_browser_router_28.png)

In this way, you can easily create routes for all webpages that need special rendering modes using Endpoint Policy Manager Browser Router.
