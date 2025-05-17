---
sidebar_position: 3669
title: Discovering IDs for Firefox Add-Ons
---

# Discovering IDs for Firefox Add-Ons

**Step 1 –** Finding add-on IDs requires a little bit of work. To discover them, you need to click on "Add-ons" in Firefox on an example computer, as shown in Figure 18.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons.png)

Figure 18. The Add-ons tab in Firefox.

**Step 2 –** Then, click one of the four categories below:

* Extensions
* Appearance
* Plugins
* Services

**Step 3 –** 
Then, press F12 for developer tools. In the lowest row, paste the snippet of code supplied below, as shown in Figure 19.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_3.png)

Figure 19. The Console tab.

**NOTE:** You may get a warning saying you cannot paste until you say it's okay. To permit pasting, type allow pasting," as shown in Figure 20.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_4.png)

Figure 20. Allowing pasting to occur.

**Step 4 –** You can use this snippet to discover IDs for extensions, appearance, plugins, and services:

```
var addonElements = window.document.getElementsByClassName("addon");  
for (var i = 0; i < addonElements.length; ++i) {  
var addonElement = addonElements[i];  
console.log(addonElement.attributes["name"].value + " = " + addonElement.value);  
}
```
**Step 5 –** Paste the snippet into the lowest place on the page, as shown in Figure 21.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_5.png)

Figure 21. Copying the snippet to the Console tab.

The result you will get (which is to the right of the equal sign within quotes) will be the name of the GUID or friendly name, as shown in Figure 22 and Figure 23.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_6.png)

Figure 22. Example 1 showing only GUIDs.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_7.png)

Figure 23. Example 2 showing the friendly name and GUID.

**Step 6 –** Then, inside the Endpoint Policy Manager MMC console, you will add the ID you want (without quotes), as shown in Figure 24.

![](../../../../../../../../static/images/PolicyPak/Content/Resources/Images/ApplicationSettings/Preconfigured/Firefox/Add Ons_8.png)

Figure 24. Adding the ID within the Endpoint Policy Manager MMC console.