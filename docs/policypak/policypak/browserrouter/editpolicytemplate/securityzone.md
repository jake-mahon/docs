# Is it possible to prevent all Internet websites, but allow just a few? (Blacklist websites, whitelist some?)

This is possible, using the Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router.

__Step 1 –__ Set up a rule (route as seen in this example. Specify that the Internet Security Zone is set to BLOCK.

![170_1_image001](/img/product_docs/policypak/policypak/browserrouter/editpolicytemplate/170_1_image001.png)

__Step 2 –__ Then, make other rules which route to the websites you want. Finally, ensure your blocking policy is last in the list, so all whitelisted items will process before the blockitem.

![170_2_image002](/img/product_docs/policypak/policypak/browserrouter/editpolicytemplate/170_2_image002.png)
