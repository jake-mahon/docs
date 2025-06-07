# Using Endpoint Policy Manager Scripts and Triggers

You may want to map a drive on a remote machine whenever it connects to the network through VPN or map a printer whenever a user opens a designated application and then unmap the drive or printer once the VPN connection or application is closed. You can do this through the use of Endpoint Policy Manager scripts and triggers.

__NOTE:__ For an overview of Endpoint Policy Manager scripts and triggers see [Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed.](/docs/product_docs/policypak/policypak/video/scriptstriggers/mapdrivetriggers.md).

__Step 1 –__ Let's use an example in which you want to map a printer for your users whenever they use Acrobat Reader. There are a couple of script options we can use to map a printer. It is highly recommended that you manually test your scripts first in order to make sure they work properly. This will prevent you from having to troubleshoot issues down the road when you deploy your policies. In Figure 18 we are using a simple PowerShell script to map the printer. (If the PowerShell script doesn't work for your environment then you can use a traditional batch script to map it.)

![getting_to_know_scripts_triggers_14](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_14.png)

Figure 18. Using a PowerShell script to map a printer.

__Step 2 –__ There are no revert scripts when using triggers so this section is not applicable as shown in Figure 19.

![getting_to_know_scripts_triggers_15](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_15.png)

Figure 19. There are no revert scripts when using triggers.

__Step 3 –__ You then need to select your desired trigger type. In Figure 20 we are selecting "Process start."  Notice the other trigger options available.

![getting_to_know_scripts_triggers_16](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_16.png)

Figure 20. Choosing the desired trigger type.

__Step 4 –__ You must then select the process. You can either point to the application file or point to the application process itself if it is currently running. In Figure 21 we have selected the Acrobat Reader file.

![getting_to_know_scripts_triggers_17](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_17.png)

Figure 21. Selecting the application file.

__Step 5 –__ You can then configure Item-level Targeting if desired.

__Step 6 –__ Now you need to create another policy that will remove the printer mapping once the user closes Acrobat Reader. To do this, we will use a PowerShell script, shown in Figure 22.

![getting_to_know_scripts_triggers_18](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_18.png)

Figure 22. Using a PowerShell script to remove a printer connection.

__Step 7 –__ Now you need to select "Process close" for the trigger type, as shown in Figure 23.

![getting_to_know_scripts_triggers_19](/static/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_19.png)

Figure 23. Choosing "Process close" as the trigger type to remove the printer when the user closes Acrobat Reader.

__Step 8 –__ Finally, point to the application file or open process and configure Item-level Targeting if desired.
