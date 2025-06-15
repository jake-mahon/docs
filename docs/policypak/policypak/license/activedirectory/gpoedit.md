# I can only EDIT GPOs and not create them. Can I still use Endpoint Policy Manager?

Yes. And here is why.

First, you will need to import Netwrix Endpoint Policy Manager (formerly PolicyPak) licensing files.

After a GPO is created (not by you), and you edit it, see [The License Tool (LT) isn't permitting me to install License Files (or I am using AGPM, GPA, or GPOAdmin.) What should I try?](wizard.md) for additional information. You will import the license files while editing the GPO.

Next, all normal operations in Endpoint Policy Manager are available to you, like Endpoint Policy Manager Application Manager and Endpoint Policy Manager Admin Templates Manager.

__NOTE:__  Note that Endpoint Policy Manager Application Manager Pak definitions can be stored in regular shares, and don't need to be stored in the Central Store, which would require domain controllers.

See[Using Shares to Store Your Paks (Share-Based Storage)](../../video/applicationsettings/shares.md) for additional information on using shares with Endpoint Policy Manager Admin Templates Manager.
