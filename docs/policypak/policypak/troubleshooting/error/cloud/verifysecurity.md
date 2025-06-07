# I'm getting an error when installing the cloud client which says "An error occured when verifying security for the message"

Please ensure that the system time on the client system is correct. You can try [https://answers.microsoft.com/en-us/windows/forum/all/how-to-force-windows-10-time-to-synch-with-a-time/20f3b546-af38-42fb-a2d0-d4df13cc8f43](https://answers.microsoft.com/en-us/windows/forum/all/how-to-force-windows-10-time-to-synch-with-a-time/20f3b546-af38-42fb-a2d0-d4df13cc8f43) to have the computer re-sync its time with an online source.

An example of the error can be seen here:

![113_1_dtyeryrtyy](/static/img/product_docs/policypak/policypak/troubleshooting/cloud/underhood/underneath_the_hood_and_troubleshooting_5.png)

Please follow the following steps

__Step 1 –__ Change the timezone to UTC like what is shown here:

![20_1_sdgdfhfgnfjfghjfghjfghjfghj](/static/img/product_docs/policypak/policypak/troubleshooting/error/20_1_sdgdfhfgnfjfghjfghjfghjfghj.png)

__Step 2 –__ Verify the time on the computer is now the same as what is seen [http://www.worldtimeserver.com/current\_time\_in\_UTC.aspx](http://www.worldtimeserver.com/current_time_in_UTC.aspx)

__Step 3 –__ If the computer's time is "off", change it so it matches UTC time.

__Step 4 –__ Then join Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud.

__Step 5 –__ After join, change timezone to your correct timezone.

__Step 6 –__ Verify PPcloud still works with commandline: ```ppcloud /sync```
