# I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?

If GP finds a non-Microsoft CSE it'll reconfigure itself into its own service host which causes this. The reconfigure happens after Winlogon has registered the RCP interfaces for delivering Winlogon revents. The restart causes the error. Microsoft is researching a fix, but at this time is considered "known behavior."

The error is saying the "Group Policy Service failed at sign-in".

__NOTE:__  users never see this message more than once per PC.

There is more information at the Microsoft website: [https://support.microsoft.com/en-us/help/2976660/first-logon-fails-with-the-universal-unique-identifier-uuid-type-is-no](https://support.microsoft.com/en-us/help/2976660/first-logon-fails-with-the-universal-unique-identifier-uuid-type-is-no)

![20_1_sdgdfhfgnfjfghjfghjfghjfghj](/img/product_docs/policypak/policypak/troubleshooting/error/20_1_sdgdfhfgnfjfghjfghjfghjfghj.png)
