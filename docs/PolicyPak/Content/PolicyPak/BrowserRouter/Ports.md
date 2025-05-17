---
sidebar_position: 3134
title: Routing Using Ports
---

# Routing Using Ports

Endpoint Policy Manager Browser Router can open a specific website when a particular website needs a specific port. In the example below we have `www.portquiz.net:1001` being used for a specific Google Chrome website.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_23.png)

**NOTE:** For a video on using Endpoint Policy Manager Browser Router and ports, see [Endpoint Policy Manager Browser Router and Ports](../Video/BrowserRouter/Ports "Endpoint Policy Manager Browser Router and Ports").

In this way, you can have granular control over which browser is opened for which website. Additionally, for Internet Explorer 11, Endpoint Policy Manager Browser Router will automatically insert the port into Internet Explorer 11 Enterprise Mode v2 site lists. All you need to do is add a route similar to the one shown below.

![](../../../../../static/images/PolicyPak/Content/Resources/Images/Netwrix_Book 5 - Browser Router/About PolicyPak Browser Router_24.png)

**NOTE:** Not every version of Internet Explorer 11 is ready to receive v2 site lists. For a list of which versions of Internet Explorer 11 use v1 vs v2, see [When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?](../Troubleshooting/BrowserRouter/Versions "When does Endpoint Policy Manager Browser Router write v1 or v2 Enterprise Mode site lists?").