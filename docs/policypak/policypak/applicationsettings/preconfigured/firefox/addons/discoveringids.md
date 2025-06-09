# Discovering IDs for Firefox Add-Ons

__Step 1 –__ Finding add-on IDs requires a little bit of work. To discover them, you need to click on "Add-ons" in Firefox on an example computer, as shown in Figure 18.

![add_ons](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons.png)

Figure 18. The Add-ons tab in Firefox.

__Step 2 –__ Then, click one of the four categories below:

- Extensions
- Appearance
- Plugins
- Services

__Step 3 –__ 
Then, press F12 for developer tools. In the lowest row, paste the snippet of code supplied below, as shown in Figure 19.

![add_ons_3](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_3.png)

Figure 19. The Console tab.

__NOTE:__ You may get a warning saying you cannot paste until you say it's okay. To permit pasting, type allow pasting," as shown in Figure 20.

![add_ons_4](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_4.png)

Figure 20. Allowing pasting to occur.

__Step 4 –__ You can use this snippet to discover IDs for extensions, appearance, plugins, and services:

```
var addonElements = window.document.getElementsByClassName("addon");  
for (var i = 0; i < addonElements.length; ++i) {  
var addonElement = addonElements[i];  
console.log(addonElement.attributes["name"].value + " = " + addonElement.value);  
}
```

__Step 5 –__ Paste the snippet into the lowest place on the page, as shown in Figure 21.

![add_ons_5](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_5.png)

Figure 21. Copying the snippet to the Console tab.

The result you will get (which is to the right of the equal sign within quotes) will be the name of the GUID or friendly name, as shown in Figure 22 and Figure 23.

![add_ons_6](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_6.png)

Figure 22. Example 1 showing only GUIDs.

![add_ons_7](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_7.png)

Figure 23. Example 2 showing the friendly name and GUID.

__Step 6 –__ Then, inside the Endpoint Policy Manager MMC console, you will add the ID you want (without quotes), as shown in Figure 24.

![add_ons_8](/img/product_docs/policypak/policypak/applicationsettings/preconfigured/firefox/addons/add_ons_8.png)

Figure 24. Adding the ID within the Endpoint Policy Manager MMC console.
