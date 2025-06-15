# I want all the files in a folder to be ALLOWED when SecureRun is used. What is the correct syntax?

If you want to allow all files in a folder to be permitted when SecureRun is used, do not use this
syntax.

![628_1_img1](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/leastprivilege/securerun/628_1_img1.jpg)

Instead, if you want to allow all .exe files in the application folder, then you should be using
either

%localappdata%\Slack (no wildcard/asterisk) + Folder typelike what's seen here…

![628_2_img2](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/leastprivilege/securerun/628_2_img2.jpg)

Or

%localappdata%\Slack\\\* + File type

![628_3_image-20210311160348-2](../../../../../../static/img/product_docs/policypak/policypak/troubleshooting/leastprivilege/securerun/628_3_image-20210311160348-2.webp)
