# What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)

Here's what you should try on ONE affected machine…

### Try 1:

__Step 1 –__  Install the ```LATEST CSE.```

__Step 2 –__ Reboot and log on three times to "clear things out." Did this magically make the problem go away? Yes? → AS ADMIN…Run ```PPLOGS``` and send us PPLOGS (renamed please to ```PPLOGS-RESOLVED-REBOOT.ZIP```)

### Try 2:

__Step 3 –__  Add new key to HKLMSoftwarePoliciesPolicypakConfigDriver and set ```REG_DWORD ```Enabled = 0 (see screenshot at end of this article.)

__Step 4 –__ Run``` GPupdate /force``` and then reboot.

__Step 5 –__ Did this make the problem go away? Yes? → As ADMIN.. Run ```PPLOGS``` and send us PPLOGS (renamed please to ```PPLOGS-RESOLVED-DRIVER-ZERO.ZIP```)

### Try 3:

__Step 6 –__ Delete the registry key you created in TRY 2.

__Step 7 –__ Uninstall most recent Endpoint Policy Manager CSE (from Portal).

__Step 8 –__  Install previous Endpoint Policy Manager CSE (If you need it, ask your tech support professional.)

__Step 9 –__  Reboot.

__Step 10 –__  Did this make the problem go away? If Yes.. that means the problem is between last build and this build. Yes? → As ADMIN.. Run ```PPLOGS``` and send us PPLOGS (renamed please to ```PPLOGS-RESOLVED-PREVIOUS-VERSION.ZIP```)

### Try 4:

__Step 11 –__  Uninstall the previous Endpoint Policy Manager CSE from previous step.

__Step 12 –__  Ask your SUPPORT rep if you should turn on DEBUG LOGGING Install the DEBUG BUILD … CSE (get from your support rep).

__Step 13 –__  Make the problem occur, then→ AS ADMIN, run ```pplogs``` and send us file renamed as ```PPLOGS-DEBUG-BUILD-AS-ADMIN.ZIP```.

### WARNING:

- You should be performing these steps ONLY as a test directed by Endpoint Policy Manager technical staff.
- Do NOT run with the Driver disabled in Production.
- This will stop much of Endpoint Policy Manager's inner workings such as:
  - Endpoint Policy Manager [https://www.policypak.com/products/policypak-least-privilege-manager.html](https://www.policypak.com/products/policypak-least-privilege-manager.html) (completely).
  - Endpoint Policy Manager Application Manager (Reapply on launch.)
  - Endpoint Policy Manager Browser Router (FF extension installation in some cases).
  - Endpoint Policy Manager Applock.
  - Endpoint Policy Manager File Associations Manager. … And possibly other items.

![175_1_image002](/static/img/product_docs/policypak/policypak/troubleshooting/install/175_1_image002.png)
