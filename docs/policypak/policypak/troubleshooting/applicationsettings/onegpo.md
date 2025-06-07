# Should I put lots of Paks (or other PP directives into one GPO?)

[How many Endpoint Policy Manager policies can I create within one Group Policy Object?](/docs/product_docs/policypak/policypak/troubleshooting/applicationsettings/limitations.md)

Then, as a suggestion, the best practice for Netwrix Endpoint Policy Manager (formerly PolicyPak) is to have one GPO for each "thing" you want to do.

For instance, if you wanted to manage Chrome, you could create ONE GPO and then use Item Level Targeting to specify the conditions of WHO would get the settings WHEN.

Here is an example:

![345_1_2015-09-01_1047](/static/img/product_docs/policypak/policypak/troubleshooting/applicationsettings/345_1_2015-09-01_1047.png)

Then you would do the same for another GPO, say, for Firefox, and another GPO for Internet Explorer settings, and so on.
