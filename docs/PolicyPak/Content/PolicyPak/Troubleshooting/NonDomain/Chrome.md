---
sidebar_position: 3809
title: Which items in Chrome will, and will not work when non-domain joined?
---

# Which items in Chrome will, and will not work when non-domain joined?

If you use the Chrome Pak (with Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager) or the Chrome ADMX settings (with Endpoint Policy Manager Admin Templates Manager) Chrome may not apply all settings as expected when the computer is non-domain joined.

In our testing, here are the settings which will and will not work when non-domain joined.

| BASICS TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Show Home button |  |
| Always show the bookmarks bar | Checkmark Icon |
| On startup open the following page(s) |  |
| Set Pages | Short white line |
| Use New Tab Page as homepage | Short white line |
| Check to disable auto-update Google Chrome | Short white line |

| IMPORT BOOKMARKS AND SETTINGS TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Browsing history | Checkmark Icon |
| Favorites/Bookmarks | Checkmark Icon |
| Saved Passwords | Checkmark Icon |
| Search engines | Checkmark Icon |

| ADVANCED TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Use a prediction service to help complete searches and URLs typed in the address bar | Checkmark Icon |
| Use a web service to help resolve spelling errors | Checkmark Icon |
| Offer to save passwords I enter on the web | Checkmark Icon |
| Offer to translate pages that aren't in a language I read | Checkmark Icon |
| Download location | Checkmark Icon |
| Continue running background apps when Google Chrome is closed | Checkmark Icon |
| Use hardware acceleration when available | Checkmark Icon |
| Predict network actions to improve page load performance | Short white line |
| Enable phishing and malware protection | Short white line |
| Automatically send usage statistics and crash reports to Google | Short white line |
| Show notifications when new printers are detected on the network | Short white line |
| Check for server certificate revocation | Short white line |
| Enable Autofill to fill out web forms in a single click. | Short white line |

| CONTENT SETTINGS TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Cookies | Checkmark Icon |
| Block third-party cookies and site data | Checkmark Icon |
| Images | Checkmark Icon |
| Pop-ups | Checkmark Icon |
| Location | Checkmark Icon |
| Notifications | Checkmark Icon |
| Media | Checkmark Icon |
| Ads | Checkmark Icon |
| USB devices | Checkmark Icon |
| PDF documents | Checkmark Icon |
| JavaScript | Short white line |
| Plug-ins | Short white line |
| Handlers | Short white line |
| Mouse cursor | Short white line |
| Protected content | Short white line |
| Unsandboxed plug-in access | Short white line |
| Automatic Downloads | Short white line |
| MIDI devices full control | Short white line |

| CLEAR BROWSING DATA TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Browsing history | Short white line |
| Download history | Short white line |
| Cookies and other site and plugin data | Short white line |
| Cached images and files | Short white line |
| Passwords | Short white line |
| Autofill form data | Short white line |

| SITES TAB | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Allow cookies on these sites | Checkmark Icon |
| Block cookies on these sites | Checkmark Icon |
| Allow session only cookies on these sites | Checkmark Icon |
| Allow images on these sites | Checkmark Icon |
| Block images on these sites | Checkmark Icon |
| Allow JavaScript on these sites | Checkmark Icon |
| Block JavaScript on these sites | Checkmark Icon |
| Allow popups on these sites | Checkmark Icon |
| Block popups on these sites | Checkmark Icon |
| Allow notifications on these sites | Checkmark Icon |
| Block notifications on these sites | Checkmark Icon |
| Allow plugins on these sites | Checkmark Icon |
| Block plugins on these sites | Checkmark Icon |
| Automatically select client certificates for these sites | Short white line |
| List of URLs | Short white line |

| EXTENSIONS | |
| --- | --- |
| SETTING NAME | WORKS IN NON-DOMAIN |
| Extension-Install-Blacklist | Checkmark Icon |
| Extension-Install-Forcelist | Checkmark Icon |
| Extension-Install-Whitelist | Checkmark Icon |
| Extension-Install-Sources | Checkmark Icon |

If you have questions about our results, please use the Endpoint Policy Manager Forums.