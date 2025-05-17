---
sidebar_position: 4200
title: Converting Existing IE Site List XMLs
---

# Converting Existing IE Site List XMLs

**NOTE:** To get an overview on how to convert existing IE site lists, please see: [Internet Explorer to Endpoint Policy Manager Browser Router Site lists](../../Video/BrowserRouter/IESiteLists).

Now let's see how you can take a Microsoft Enterprise Mode Internet Explorer site list and quickly convert it to be used in Endpoint Policy Manager Browser Router. This saves you the time and trouble of converting all of the list information by hand.

First, you need an Enterprise Mode site list. If you don't have an existing site list already, Microsoft has a tool you can use to create these lists that you can download at: . Simply run the tool and add the sites along with their necessary parameters as is shown below.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_31.png)

When this is complete, save the list as an XML file. Once you have a list, create a **From Enterprise Mode Site List** rule using Endpoint Policy Manager Browser Router.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_32.png)

You will then be prompted to point to the created list. Once selected, a pop-up will confirm the number of rules being imported. You can choose to import the rules into the existing collection or a new collection.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_33.png)

The imported rules now appear.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_34.png)

You can review any of the rules to confirm or change their settings.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_35.png)