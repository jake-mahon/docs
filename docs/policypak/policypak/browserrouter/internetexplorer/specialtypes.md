# Using Special Policy Types for Internet Explorer

There are two special policies that may be used only once per collection (see Figure 37 for reference). These policies manage how the Windows 10 Edge browser functions alongside Internet Explorer 11.

__NOTE:__ To get an overview of Endpoint Policy Manager Browser Router's special policies for Microsoft Edge, please see [Endpoint Policy Manager and Edge ‘Special' policies](/docs/product_docs/policypak/policypak/video/browserrouter/edgespecial.md).

The policies are __All intranet to IE__ policy and __All Enterprise from Edge to IE__ policy.

![about_policypak_browser_router_36](/static/img/product_docs/policypak/policypak/browserrouter/internetexplorer/about_policypak_browser_router_36.png)

The __All intranet to IE__ policy takes all websites that are already defined in the Intranet zone and ensure that those sites open in Internet Explorer 11 if the user tries to use Microsoft Edge. In other words, once this policy is applied, if a user opens an Intranet site using Edge, it will automatically be routed to Internet Explorer 11.

__All Enterprise from Edge to IE__ policy takes all websites that are already defined in the IE Enterprise site list and routes those to Internet Explorer. In other words, once this policy is applied, if a user opens any website within Edge that you've set to Enterprise Mode, it will automatically be routed to Internet Explorer 11.
