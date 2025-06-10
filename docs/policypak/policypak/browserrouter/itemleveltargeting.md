# Using Item-Level Targeting with Collections and Policies

Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Endpoint Policy Manager to target or filter where specific items will apply. With Endpoint Policy Manager Browser Router, Item-Level Targeting can be used with collections as well as Browser Router policies within collections.

To do this, right-click __Collection__ and select __Change Item Level Targeting__

![about_policypak_browser_router_37](/img/product_docs/policypak/policypak/browserrouter/about_policypak_browser_router_37.webp)

Alternatively, within a Browser Router policy, you can dictate when a policy will apply by clicking __Item Level Targeting__.

![about_policypak_browser_router_38](/img/product_docs/policypak/policypak/browserrouter/about_policypak_browser_router_38.webp)

The __Edit Item Level Targeting__ menu item brings up the __Targeting Editor__. You can select any combination of characteristics you want to test for. Administrators familiar with Group Policy Preferences' Item-Level Targeting will be at home in this interface as it is functionally equivalent.

You can apply one or more targeting items to a policy, which enables targeting items to be joined logically. You can also add targeting collections, which group together targeting items in much the same way parentheses are used in an equation. In this way, you can create a complex determination about where a policy will be applied. Collections may be set to __And__, __Or__, __Is__, or __Is Not__.

![about_policypak_browser_router_39](/img/product_docs/policypak/policypak/browserrouter/about_policypak_browser_router_39.webp)

In this example, the Pak would only apply to Windows 10 machines when the machine is portable and the user is in the FABRIKAM\Traveling Sales Users group.

Below are some real-world examples of how you can use Item-Level Targeting.

- Software prerequisites - If you want to configure an application's settings, first make sure the application is installed on the user's computer before configuring it. You can use __File Match__ or __Registry Match__ targeting items (or both) to verify a specific version of a file or a registry entry is present. For an example of this, look in the Uninstall registry key.
- Mobile computers - If you want to deploy settings exclusively for users on mobile PCs, filter the rule to apply only to mobile PCs by using the __Portable Computer__ targeting item.
- Operating system version - You can specify different settings for applications based on the operating system version. To do this, create one rule for each operating system, then filter each rule using the __Operating System__ targeting item.
- Group membership - You can link the __Group Policy Object__ (GPO) to the whole domain or organizational unit (OU), but only members within a specific group will pick up and process the rule settings.
- IP range - You can specify different settings for various IP ranges, like different settings for the home office and each field office.

Close the editor when done. You canl see that the collection's icon has changed to orange, which shows that it now has Item-Level Targeting on the whole collection. In other words, none of the items in the collection will apply unless the Item-Level Targeting on the collection evaluates to __True__.

![about_policypak_browser_router_40](/img/product_docs/policypak/policypak/browserrouter/about_policypak_browser_router_40.webp)

Within the collection, if you set Item-Level Targeting within any policy, you'll see the icon turn orange, and the Item-Level Targeting column will indicate if Item-Level Targeting is on __Yes__ or off __No__.

![about_policypak_browser_router_41](/img/product_docs/policypak/policypak/browserrouter/about_policypak_browser_router_41.webp)

This feature allows you toadd very granular filters. First, filter with Item-Level Targeting in a collection, and then filter on any specific rule if any Item-Level Targeting is applied there.
