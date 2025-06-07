# How can I use the only remaining Endpoint Policy Manager published Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)

__Step 1 –__ Copy the contents below.

```
{    "name": "com.policypak.ppbragent",    "description": "Chrome Native Messaging implementation",    "path": "PPBRAgent.exe",    "type": "stdio",      
"allowed_origins": [        "chrome-extension://kndjicdjdanehpnonfmdekhinhdcdnbo/",        "chrome-extension://mdmkjmbojjnnhlohmjhaapalpbbhkdcg/",          
"chrome-extension://fmbfiodledfjldlhiemaadmgppoeklbn/"    ]}
```

__Step 2 –__ Save in a file named

```com.policypak.chromehost.json```

__Step 3 –__ The goal is to copy that file to

```
C:\Program Files\PolicyPak\Browser Router\Client
```

On machines with the CSE (CSE 18.7.1779.937 - 19.12.2283.849)That you CANNOT upgrade to latest CSE for now.

![774_1_img-01](/static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/clientsideextension/774_1_img-01.jpg)

You can use a variety of methods to get the file copied. Options include:

- Group Policy Preferences Files
- Endpoint Policy Manager Remote Work Delivery Manager
- Endpoint Policy Manager Scripts
- SCCM
- Any other way you want to copy a file down to the machine

To show one example, using Group Policy Preferences Files…

Here's the ```Com.policypak.chromehost.json``` file stored in the file in the share called ```\\dc2016\share```

![774_3_img-02_950x542](/static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/clientsideextension/774_3_img-02_950x542.jpg)

Using Group Policy Preferences Files, on the Computer side…

![774_5_img-03_950x650](/static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/clientsideextension/774_5_img-03_950x650.jpg)

#### Specify:

Source:

```
\\dc2016\SHARE\com.policypak.chromehost.json
```

Destination (must include the path and file name):

```
C:\Program Files\PolicyPak\Browser Router\Client\com.policypak.chromehost.json
```

Run ```GPupdate ```on the client, and here's the result.

Note that upgrading to modern CSE versions will have a SIMIILARLY named file in this folder.

These two files can sit side by side without issue if you need to use an OLDER CSE for now, then UPGRADE to latest CSE later.

![774_7_img-05_950x675](/static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/clientsideextension/774_7_img-05_950x675.jpg)
