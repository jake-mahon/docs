# How-to manually install and enable Endpoint Policy Manager Browser Router (PPBR) extension for Google Chrome?

If you want to install the Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser extension for Google chrome manually from a local/network path, follow the below steps.

__Step 1 –__ Download the PPBR Chrome Extension's .CRX file

__Step 2 –__ Copythe PPBR Chrome Extension on Target Computer

__Step 3 –__ Google Chrome Registry Settings for Extensions

__Step 4 –__ (for end users) How-To Enable PPBR Chrome Extension

## 1. Downloading the PPBR Chrome Extension's .CRX File

Follow these steps to convert the Chrome Web Store link of any Extension to an ```.CRX``` File.

__Step 1 –__ Check the information here: [What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/policypak/policypak/troubleshooting/browserrouter/clientsideextension/chromeextensionid.md) Note down the Extension ID. You'll need this step every time we release updates for Software.

__Step 2 –__ Append the PPBR Chrome Extension ID with the following URL: [https://chrome.google.com/webstore/detail/policypak-browser-router/[PPBR-Extension-ID](https://chrome.google.com/webstore/detail/policypak-browser-router/[PPBR-Extension-ID)]

![535_1_image-20191222210303-1](/img/product_docs/policypak/policypak/browserrouter/install/535_1_image-20191222210303-1.webp)

__Step 3 –__ ote the PPBR Chrome Extension's Version Number.

__Step 4 –__ Launch this URL, [https://www.crxextractor.com/](https://www.crxextractor.com/)

__Step 5 –__ Insert the updated PPBR Chrome Extension URL that you appended in step 1.2.

![535_3_image-20191222210303-2_457x162](/img/product_docs/policypak/policypak/browserrouter/install/535_3_image-20191222210303-2_457x162.webp)

__Step 6 –__ Click __OK__

![535_5_image-20191222210303-3](/img/product_docs/policypak/policypak/browserrouter/install/535_5_image-20191222210303-3.webp)

__Step 7 –__ Click on Get .CRX

__Step 8 –__ Save the file on network location so end-users can ```read/access```.

## 2. Copy the PPBR Chrome Extension on the Target Computer

Copy the``` .CRX``` extension file using Group Policy Preference item.

__Step 1 –__ Go to ```Computer Configuration\\Preferences\\Windows Settings\\Files```.

__Step 2 –__ Right-click on the __Files__ node and select __New__ and then __File__.

![535_7_image-20191222210303-4](/img/product_docs/policypak/policypak/browserrouter/install/535_7_image-20191222210303-4.webp)

__Step 3 –__ Configure this policy as shown below. Change __Source__ and __Destination__ paths as needed.

__Step 4 –__ Run ```GPUPDATE``` on theTarget Computer and verify that the ``` .CRX``` file is on theexpected location.

## 3. Google Chrome Registry Settings for Extensions

Follow these steps to only install PPBR Chrome Extension.

__Step 1 –__ Launch GPO Item and browse the following location: ```Computer Configuration\\Preferences\\Windows Settings\\Registry```

__Step 2 –__ Right-click on __Registry node__, then click on __New__ > __Registry Item__

![535_9_image-20191222210303-5](/img/product_docs/policypak/policypak/browserrouter/install/535_9_image-20191222210303-5.webp)

__Step 3 –__ Configure the setting as shown below. The value's references are under Chrome REG section.

Chrome REG:

Create the registry key:

```
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]  
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]
```

Create the following registry key values:

```
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]\\path  
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]\\path  
TYPE: REG_SZVALUE: "C:\\path\\to\\your\\extension.crx"  
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]\\version  
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]\\version  
TYPE: REG_SZ  
VALUE: [version of your .crx as specified in the manifest
```

__Step 4 –__ Run ```GPUPDATE ```on the target computer and verify the results.

## 4. (for end users) How-to Enable PPBR Chrome Extension

This section has to be executed by the end-user.

![535_11_image-20191222210303-6](/img/product_docs/policypak/policypak/browserrouter/install/535_11_image-20191222210303-6.webp)

__Step 1 –__ Relaunch Google Chrome and wait for the notification banner, thenclick the __Enable extension__ button.

![535_13_image-20191222210303-7](/img/product_docs/policypak/policypak/browserrouter/install/535_13_image-20191222210303-7.webp)

If you aren't prompted forthe __Enable extension__ window, look for this icon -in the Chrome Browser and follow the instructions in the next step to enable it.

![535_15_image-20191222210303-8](/img/product_docs/policypak/policypak/browserrouter/install/535_15_image-20191222210303-8.webp)

__Step 2 –__ Select an option for Endpoint Policy Manager Browser Router Chrome Extension:

![535_17_image-20191222210303-9](/img/product_docs/policypak/policypak/browserrouter/install/535_17_image-20191222210303-9.webp)

__Step 3 –__  Click on __Enable extension__ button:
