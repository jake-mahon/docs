# Why don't routes work from IE to other browsers?

For some customers, some Internet Explorer settings set or un-set are interfering with Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router's IE plug in.

Before setting the setting in Group Policy, we suggest you test one or two machines; and there are two settings you need to test.

Said another way, ONE, TWO or THREE values may need to be tested to encompass a complete solution.

## Value #1: Enable third-party browser extensions

__Step 1 –__ Test on one or two machines and ensure this is ON as seen here.

__Step 2 –__ Reboot the machine and see if Endpoint Policy Manager Browser Router will route from IE to other browsers

![415_1_image0014](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_1_image0014.webp)

(Old: Not needed anymore; here for archival purposes…

## Value #2: Enhanced Protection Mode.

__Step 1 –__ Test on one or two machines with this OFF as seen here.

__Step 2 –__ Reboot the machine and see if Endpoint Policy Manager Browser Router will route from IE to other browsers.

![415_2_image003](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_2_image003.jpg)

(Old: Not needed anymore; here for archival purposes…) .

## Value #3:

__Step 1 –__ Set the "Enable 64-bit processes for Enhanced Protection mode" CHECKED as seen here.

__Step 2 –__ Reboot the machine and see if Endpoint Policy Manager Browser Router will route from IE to other browsers.

![415_3_image005](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_3_image005.jpg)

Once you learn what combination works, then set these settings in Group Policy . You can do this on USER or COMPUTER side. We recommend COMPUTER.

Windows ComponentsInternet ExplorerInternet Control PanelAdvanced Page

Then select the:

Turn on Enhanced Protection Mode :: Set to Disabled

And/or

Turn on 64-bit tab processes when running in Enhanced Protection Mode :: Set to Enabled

_Remember,_ Remember that each machine needs to be rebooted after it receives these directives; just like you did in your manual tests.

![415_4_image0061](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_4_image0061.jpg)

Note also that the settings can be hiding in one ore more GPOs, so use GPresult to look for those values.

Additionally, these same values can be found in Group Policy Preferences Internet Explorer 10 settings (which affects 10 and 11).

An example GPresult /h report will show a Group Policy Preferences setting demonstrating the required "Enable third-party browser extensions (requires restart)" as DISABLING the ability to use third-party extensions.

![415_5_faq-asdf-01](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_5_faq-asdf-01.jpg)

In these cases, you need to find the Group Policy Preferences item within the GPO and set the value to GREEN and CHECK which will "Enable third-party browser extensions".

![415_6_faq-asdf-02](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_6_faq-asdf-02.jpg)

Only then will the GPO's GPresult report demonstrate that the required item is Enabled like what's seen here.

![415_7_faq-asdf-03](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/browserrouter/internetexplorer/415_7_faq-asdf-03.jpg)
