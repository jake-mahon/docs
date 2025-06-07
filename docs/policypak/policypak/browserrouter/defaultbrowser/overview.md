# Understanding Default Browser Policies

In the previous example, you used the __New Default Browser__ policy to set the default browser to Internet Explorer. In this way, Internet Explorer only would be used when users click on an external link (e.g., from an email) and there is no other rule routing to a specific browser. Any of the browsers can be the default, but only one can be chosen as the default. Additionally, there is a special browser called __User Selectable__. Below you can see how to select the default browser.

__NOTE:__ For an overview of the User Selectable option, see [Endpoint Policy Manager Browser Router User-Selected Default](/docs/product_docs/policypak/policypak/video/browserrouter/userselecteddefault.md).

![about_policypak_browser_router_11](/static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/about_policypak_browser_router_11.png)

The __User Selectable__ option enables the user to specify their desired default browser as Internet Explorer, Edge, Chrome, or Firefox. The Endpoint Policy Manager engine "learns" this setting at the next Group Policy background update (or if GPupdate is manually invoked). This means there could be a situation where the user changes their default browser, but then logs off before Group Policy re-applies to capture their desired setting. If this is the case, Endpoint Policy Manager cannot "learn" the user's desired defaults until the user changes the setting and Group Policy re-applies it in the background.

You might also want to specify a default browser one time and then drift. In other words, the user is assigned a default browser the first time they open a URL but can then change the default browser to one of their own choosing. In this case, we select the same settings as last time except we choose to apply the rule only one time, as sown below

![about_policypak_browser_router_12](/static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/about_policypak_browser_router_12.png)

Users can then change the default browser to their own liking, even though their settings show that the web browser is managed by their organization.

![about_policypak_browser_router_13](/static/img/product_docs/policypak/policypak/browserrouter/defaultbrowser/about_policypak_browser_router_13.png)
