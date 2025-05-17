---
sidebar_position: 3131
title: Getting to Know Browser Router
---

# Getting to Know Browser Router

Endpoint Policy Manager Browser Router editor is located in the Endpoint Policy Manager node. Endpoint Policy Manager Browser Router enables you to create a new Endpoint Policy Manager Browser Router policy or collection.

**NOTE:** The Browser Router node is only visible with the latest Admin Console MSI installed on your management station.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router.png)

All Endpoint Policy Manager Browser Router policies must always reside within collections. There are two steps for this.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_1.png)

**Step 1 –** Create and name a collection.

**Step 2 –** Put Browser Router policies (or other collections) inside the collection.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_2.png)

You can create collections and policies within collections on either the User or Computer side (or both). Endpoint Policy Manager Browser Router has a precedence order if you decide to have multiple policies, collections, or GPOs, or when you choose to use a "on-Group Policy method to deliver settings.

For more in formation on this, please see the section on [Understanding Processing Order and Precedence](ProcessOrderPrecedence "Understanding Processing Order and Precedence").

To complete the Quickstart examples, we recommend creating a collection on the User side. Next,, create a new Browser Router policy, similar to the one shown below. In this example, we are routing all requests for www.microsoft.com to Internet Explorer.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_3.png)

Once you click **OK**, you'll get an entry such as the one shown below.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_4.png)

If you'd like to follow along, create two more Browser Router policies in the same collection. In the next example, we will route www.GPanswers.com to Firefox.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_5.png)

Click OK to save the entry.

Create another policy to route \*.policypak.com to Edge.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_6.png)

Last, create an entry for **New Default Browser**.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_7.png)

After you do this, a dialog box with limited options appear. You can only choose a default browser, which will be Chrome.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_8.png)

When you've finished these actions, your entries will resemble these.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_9.png)

Below is an explanation of each column in the editor:

* Setting - This is the name you gave the policy. The default browser is always named Default Browser.
* Enabled (True/False) - A policy entry can be enabled, which means it will go to work. If you need to temporarily stop a policy entry from applying, you can disable it (set it to False).
* Scope - This is either User or Computer, depending on what side of the GPO you are on.
* Item-Level Targeting (No/Yes) - See the section on "Using Item-Level Targeting with Collections and Policies"for mre information on this.
* Browser - This column lists what browser a particular entry will route to.
* Pattern - Explains what type of pattern (rules) we are following. The types are URL, Wildcard, RegEx, and Internet Security Zone.

On the endpoint, log on as a user who gets the GPO (or run GPupdate if the user is already logged on). Make sure that Internet Explorer, Firefox, and Chrome are all installed. You will be ready to go if you followed along with the Endpoint Policy Manager Browser Router Quickstart, created a new Wordpad document, and typed in each URL (www.microsoft.com, www.gpanswers.com, [www.policypak.com](https://technet.microsoft.com/en-us/library/dn321432.aspx)). Next, type in a URL that is unrelated to anything, such as www.abc.com. Based on the rules, the correct browser is opened for each URL.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_10.png)

Notice that since there was no rule for www.abc.com, the overriding Default Browser rule took effect and launched Internet Explorer.