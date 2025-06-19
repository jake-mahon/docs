# Installation

Password Policy Enforcer/Web V7.11 is designed to run on Windows 2003, 2008, and 2012. Users access
Password Policy Enforcer/Web from their web browser.

### System Requirements

- Windows 2003, 2003 R2, 2008, 2008 R2, 2012, or 2012 R2.
- 5 megabytes of free disk space.
- 5 megabytes free RAM.

**NOTE:** Password Policy Enforcer/Web can share server resources with other applications. It can be
installed on an existing, well secured web server.

## Preparing IIS

Windows 2008 and 2012 include a modular version of IIS that only has a small set of core features
enabled by default. Password Policy Enforcer/Web is an ISAPI (Internet Server Application
Programming Interface) extension, so you must enable ISAPI extensions on the server that will host
Password Policy Enforcer/Web.

Follow the steps below to manage various circumstances that may arise during installation. Listed
below are common situations that impact installation and the steps necessary to work around them:

- [If IIS is not installed on Windows 2012](#if-iisis-not-installed-on-windows-2012)
- [If IIS is already installed on Windows 2012](#if-iisis-already-installed-on-windows-2012)
- [If IIS is not installed on Windows 2008](#if-iisis-not-installed-on-windows-2008)
- [If IIS is already installed on Windows 2008](#if-iisis-already-installed-on-windows-2008)

#### If IIS is not installed on Windows 2012

Follow the steps below to prepare IIS is IIS is not installed on Windows 2012.

**Step 1 –** Start the Server Manager (ServerManager.exe).

![installing_ppe_web](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web.webp)

**Step 2 –** Click **Manage** > **Add Roles and Features**.

**Step 3 –** Click **Next** on Before You Begin page (if applicable).

**Step 4 –** Select **Role-based or Feature-based installation**, then click **Next**.

**Step 5 –** Select an appropriate server, then click **Next**.

**Step 6 –** Select the Web Server (IIS) role.

**Step 7 –** Click **Add Features** if asked to install required features.

**Step 8 –** Click **Next** three times.

![installing_ppe_web_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_1.webp)

**Step 9 –** Expand the Application Development group, then select **ISAPI Extensions**.

**Step 10 –** Click **Next**, then click **Install**.

**Step 11 –** Wait for IIS to install, then click **Close**.

#### If IIS is already installed on Windows 2012

Follow the steps below to prepare IIS is IIS is already installed on Windows 2012

**Step 1 –** Start the Server Manager (ServerManager.exe).

![installing_ppe_web](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web.webp)

**Step 2 –** Click **Manage** > **Add Roles and Features**.

**Step 3 –** Click **Next** on the Before You Begin page (if applicable).

**Step 4 –** Select **Role-based or Feature-based installation**, then click **Next**.

**Step 5 –** Select an appropriate server, then click **Next**.

**Step 6 –** Expand the Web Server (IIS) (Installed) group.

**Step 7 –** Expand the Web Server (Installed) group.

![installing_ppe_web_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_2.webp)

**Step 8 –** Expand the Application Development group, then select **ISAPI Extensions**.

**Step 9 –** Click **Next** twice, then click **Install**.

**Step 10 –** Wait for the ISAPI Extensions feature to install, then click **Close**.

#### If IIS is not installed on Windows 2008

Follow the steps below to prepare IIS if IIS is not installed on Windows 2008.

**Step 1 –** Start the Server Manager console (ServerManager.msc).

**Step 2 –** Click the **Roles** item in the left pane.

![installing_ppe_web_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_3.webp)

**Step 3 –** Click **Add Roles** in the right pane.

**Step 4 –** Click **Next** on the Before You Begin page (if applicable).

**Step 5 –** Select the Web Server (IIS) role, then click **Next** twice.

![installing_ppe_web_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_4.webp)

**Step 6 –** Select **ISAPI Extensions** in the Application Development group.

**Step 7 –** Click **Next**, then click **install**.

**Step 8 –** Wait for IIS to install, then click **Close**.

#### If IIS is already installed on Windows 2008

Follow the steps below to prepare IIS is IIS is already installed on Windows 2008.

**Step 1 –** Start the Server Manager console (ServerManager.msc).

**Step 2 –** Expand the **Roles** item in the left pane, then click **Web Server (IIS)**.

**Step 3 –** Scroll down to the Role Services section in the right pane.

![installing_ppe_web_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_5.webp)

**Step 4 –** Click **Add Role Services**.

**Step 5 –** Select **ISAPI Extensions** in the Application Development group.

**Step 6 –** Click **Next**, then click **Install**.

**Step 7 –** Wait for the role service to install, then click **Close**.

## The PPE/Web Setup Wizard

The Setup Wizard copies the required files onto the server and configures IIS to run the Password
Policy Enforcer/Web application.

Follow the steps below to install PPE/Web.

**Step 1 –** Start the Password Policy Enforcer/Web Setup Wizard (PPEWeb711.exe).

**Step 2 –** If another version of Password Policy Enforcer/Web is detected, the Setup Wizard may
required older files to be backed up. Back up these files if the original files have been modified.
Click **Next**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the License Agreement. Click **I accept the terms of the license agreement**, then
click **Next** if you accept all the terms.

**Step 5 –** Click **Browse...** if you want to choose a different folder for the Password Policy
Enforcer/Web documentation and tools, then click **Next**.

**Step 6 –** Select an **IIS Web Site** from the dropdown. Change the default Virtual Directory, if
needed.

**NOTE:** Password Policy Enforcer/Web should be installed in its own virtual directory.

**Step 7 –** Click **Next** twice.

**Step 8 –** Wait for Password Policy Enforcer/Web to install, then click **Finish**.

#### Upgrading from PPE/Web V7.x

Some planning is needed to ensure a smooth upgrade from PPE/Web V7.x. A trial run on a lab network
is recommended.

#### Before You Begin

The HTML templates and associated images are overwritten during an upgrade. You must back up and
customized HTML templates and images before upgrading. The HTML templates and images are installed
in the `\Inetpub\wwwroot\ppeweb\` folder by default.

**NOTE:** A full backup of the PPE/Web server is recommended. This allows you to roll back to the
previous version if the upgrade cannot be completed. You may need to restart Windows after
upgrading.

**CAUTION:** PPE/Web V7.11 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade
Password Policy Enforcer to a compatible version if you have enabled Password Policy Enforcer
integration.

#### Upgrading to V7.11

**Step 1 –** Start the PPE/Web Setup Wizard and follow the prompts. The Setup Wizard uninstalls the
previous version. There is no need to manually uninstall previous versions.

**Step 2 –** Restore any customized HTML templates and images after upgrading. Do not restore
PPEWeb.dll from the backup as it belongs to the previous version.

## Upgrading from PPW/Web V6.x

Some planning is needed to ensure a smooth upgrade from PPE/Web V6.x. A trial run on a lab network
is recommended.

#### Before You Begin

The HTML templates and associated images are overwritten during an upgrade. You must back up any
customized HTML templates and iages before upgrading The HTML templates and images are installed in
the `\Inetpub\wwwroot\ppeweb\` folder by default.

**NOTE:** A full backup of the PPE/Web server is recommended. This allows you to roll back to the
previous version if the upgrade cannot be completed. You may need to restart Windows after
upgrading.

**CAUTION:** PPE/Web V7.11 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade
Password Policy Enforcer to a compatible version if you have enabled Password Policy Enforcer
integration.

#### Upgrading to V7.11Upgrading to V7.11

Follow the steps below to upgrade PPE/Web to V7.11.

**Step 1 –** Start the PPE/Web Setup Wizard and follow the prompts The Setup Wizard uninstalls the
previous version. There is no need to manually uninstall previous versions.

**Step 2 –** Restore any customized HTML templates and images after upgrading. Do not restore
PPEWeb.dll from the backup as it belongs to the previous version.

**Step 3 –** Open the Configuration Console to import you PPE/Web configuration settings. You will
also need to install your new license key if you have a perpetual license. See the
[Configuration](/docs/passwordpolicyenforcer/10.2/web-interface/configuration.md)
topic for additional information.

## Upgrading from PPE/Web V3.x

PPE/Web V3.x did not include a Setup Wizard, so you should manually remove the old version before
upgrading.

#### Removing PPE/Web V3.x

Follow the steps below to manually remove PPE/Web V3.x.

**Step 1 –** Open the IIS Manager console.

**Step 2 –** Right-click the PPE/Web virtual directory in the left pane of the IIS Manager console,
then click Delete. Click Yes to confirm.

**Step 3 –** Click the Web Service Extensions item in the left pane of the IIS Manager console.
Right-click the PPE/Web item in the right pane, then click Delete. Click Yes to confirm.

**Step 4 –** Back up the PPE/Web V3.x files.

**NOTE:** the PPE/Web V3.x files are most likely located in the `\Inetpub\wwwroot\ppeweb\` folder.

**Step 5 –** Delete the folder containing the PPE/Web V3.x files.

#### Upgrading to V7.11

Follow the steps below to upgrade to PPE/Web V7.x.

**Step 1 –** Start the PPE/Web Setup Wizard and follow the prompts.

**Step 2 –** Open the Configuration console to configure PPE/Web and install your new license key.

**NOTE:** Any customizations to the PPE/Web V3.x user interface will need to be recreated after
upgrading to PPE/Web V7.11. See the
[Editing HTML Templates](/docs/passwordpolicyenforcer/10.2/web-interface/customizing-templates.md)
topic for additional information.

# License Agreement

NETWRIX PTY LTD ("NETWRIX") IS WILLING TO LICENSE THIS SOFTWARE ONLY UPON THE CONDITION THAT YOU
ACCEPT ALL OF THE TERMS CONTAINED IN THIS SOFTWARE LICENSE AGREEMENT. PLEASE READ THE TERMS
CAREFULLY. IF YOU DO NOT AGREE WITH THESE TERMS, THEN NETWRIX IS UNWILLING TO LICENSE THE SOFTWARE
TO YOU.

NETWRIX SOFTWARE LICENSE AGREEMENT AND WARRANTY STATEMENT

(End-User Trial Use License With Option For Extended Use/Redistribution Prohibited)

1. The Software.

   The Software licensed under this Agreement consists of computer programs, data compilation(s),
   and documentation referred to as PPE/Web V7.x (the "Software").

2. Trial Use.

   You are authorized to use the Software for evaluation purposes during a trial use term of thirty
   (30) days, unless prior to the expiration of the trial use term this license is terminated by
   You for convenience or terminated by either party for material breach. You have the option to
   register for full use of the Software at any time by paying the required license fee.
   Registration will authorize You to use an unlocking key which will convert the Software to full
   use, subject to the terms and conditions of this agreement. Your use of the Software under this
   trial use license for any purpose after the expiration of the initial trial use term is not
   authorized without the prior written consent of Netwrix. Upon expiration of the limited trial
   use term, the Software may automatically disable itself. Immediately upon expiration of the
   limited trial use term, You shall either register for full use of the Software, or destroy all
   copies of the Software and documentation.

3. Perpetual Term.

   If You purchase a perpetual license, then the term of the license granted herein shall be
   perpetual unless terminated by You for convenience or terminated by either party for material
   breach.

   Immediately upon termination of this license for any reason, You shall destroy all copies of the
   Software and documentation.

4. Subscription Term(s).

   If You purchase a subscription license, then the term of this license is on a subscription basis
   with an initial term of one (1) year, and optional renewal terms of one (1) year each, unless
   prior to renewal this license is terminated by You for convenience or terminated by either party
   for material breach. Renewal procedures are available from Netwrix, and unless such procedures
   are strictly satisfied, including the payment of any required license fee, Your use of the
   Software for any purpose after the expiration of the subscription term is not authorized. Upon
   expiration of the subscription term, the Software may automatically disable itself. Immediately
   upon expiration or termination of this license for any reason, You shall destroy all copies of
   the Software and documentation.

5. License Grant.

   You are granted non-exclusive rights to install and use the Software on any computer and/or
   transmit the Software over a computer network, provided that You acquire and dedicate a licensed
   copy of the Software for each user who may access the Software. A license for the Software may
   not be shared or used concurrently by different users. You may purchase additional licenses for
   the Software from time to time. This Agreement shall take precedence over any purchase order for
   additional licenses, and any conflicting, inconsistent, or additional terms in such purchase
   orders shall be null and void. You may copy the Software for archival purposes, provided that
   all copies must contain the original Software's proprietary notices in unaltered form.

6. Restrictions.

   You may not: (i) permit others to use the Software, except as expressly provided above for
   authorized network use; (ii) modify or translate the Software, except the HTML, CSS, and image
   files; (iii) reverse engineer, decompile, or disassemble the Software, except to the extent this
   restriction is expressly prohibited by applicable law; (iv) create derivative works based on the
   Software; (v) merge the Software with another product; (vi) copy the Software, except as
   expressly provided above; or (vii) modify, remove or obscure any copyright, trademark or other
   proprietary rights notices or labels on the Software.

7. Transfers.

   You may not transfer the Software or any rights under this Agreement without the prior written
   consent of Netwrix, which consent shall not be unreasonably withheld. A condition to any
   transfer or assignment shall be that the recipient agrees to the terms of this Agreement. Any
   attempted transfer or assignment in violation of this provision shall be null and void.

8. Ownership.

   Netwrix and its suppliers own the Software and all intellectual property rights embodied
   therein, including copyrights and valuable trade secrets embodied in the Software's design and
   coding methodology. The Software is protected by Australian copyright laws and international
   treaty provisions. This Agreement provides You only a limited use license, and no ownership of
   any intellectual property.

LIMITED WARRANTY STATEMENT; LIMITATION OF LIABILITY. Netwrix warrants only to You that the Software
shall, in unmodified form, perform substantially in accordance with accompanying documentation under
normal use for a period of thirty (30) days from the purchase date. The entire and exclusive
liability and remedy for breach of this Limited Warranty shall be, at Netwrix option, either (i)
return of the amount received by Netwrix for the Software, or (ii) replacement of defective Software
and/or documentation. NETWRIX AND ITS SUPPLIERS AND RESELLERS SPECIFICALLY DISCLAIM THE IMPLIED
WARRANTIES OF TITLE, NON- INFRINGEMENT, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SYSTEM
INTEGRATION, AND DATA ACCURACY. THERE IS NO WARRANTY OR GUARANTEE THAT THE OPERATION OF THE SOFTWARE
WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE SOFTWARE WILL MEET ANY PARTICULAR CRITERIA OF
PERFORMANCE, QUALITY, ACCURACY, PURPOSE, OR NEED, EXCEPT AS EXPRESSLY PROVIDED IN THE LIMITED
WARRANTY. THIS DISCLAIMER OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT. NO USE OF THE
SOFTWARE IS AUTHORIZED HEREUNDER EXCEPT UNDER THIS DISCLAIMER. No action for the above Limited
Warranty may be commenced after one (1) year following the expiration date of the warranty. To the
extent that this Warranty Statement is inconsistent with the jurisdiction where You use the
Software, the Warranty Statement shall be deemed to be modified consistent with such local law.
Under such local law, certain limitations may not apply, and You may have additional rights which
vary from jurisdiction to jurisdiction. For example, some states in the United States and some
jurisdictions outside the United States may: (i) preclude the disclaimers and limitations of this
Warranty Statement from limiting the rights of a consumer; (ii) otherwise restrict the ability of a
manufacturer to make such disclaimers or to impose such limitations; or (iii) grant the consumer
additional legal rights, specify the duration of implied warranties which the manufacturer cannot
disclaim, or prohibit limitations on how long an implied warranty lasts.

INDEPENDENT OF THE FORGOING PROVISIONS, IN NO EVENT AND UNDER NO LEGAL THEORY, INCLUDING WITHOUT
LIMITATION, TORT, CONTRACT, OR STRICT PRODUCTS LIABILITY, SHALL NETWRIX OR ANY OF ITS SUPPLIERS BE
LIABLE TO YOU OR ANY OTHER PERSON FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF
ANY KIND, INCLUDING WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER
MALFUNCTION, OR ANY OTHER KIND OF COMMERCIAL DAMAGE, EVEN IF NETWRIX HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION SHALL NOT APPLY TO LIABILITY FOR DEATH OR PERSONAL
INJURY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.

IN NO EVENT SHALL NETWRIX'S LIABILITY FOR ACTUAL DAMAGES FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF
THE FORM OF ACTION, EXCEED THE AMOUNT OF THE PURCHASE PRICE PAID, IF ANY, FOR THE SOFTWARE LICENSE.

EXPORT CONTROLS. You agree to comply with all local laws in Your jurisdiction which might impact
Your right to import, export or use the Software, and You represent that You have complied with any
regulations or registration procedures required by applicable law to make this license enforceable.

MISCELLANEOUS. This Agreement constitutes the entire understanding of the parties with respect to
the subject matter of this Agreement and merges all prior communications, representations, and
agreements. This Agreement may be modified only by a written agreement signed by the parties. If any
provision of this Agreement is held to be unenforceable for any reason, such provision shall be
reformed only to the extent necessary to make it enforceable. This Agreement shall be construed
under the laws of the State of New South Wales, Australia, excluding rules regarding conflicts of
law. This Agreement will not be governed by the United Nations Convention on Contracts for the
International Sale of Goods, the application of which is expressly excluded. The parties have
requested that this Agreement and all documents contemplated hereby be drawn up in English. Les
parties aux presentes ont exige que cette entente et tous autres documents envisages par les
presentes soient rediges en anglais.

U.S. GOVERNMENT END USERS: If the Software and documentation is acquired by or for the United States
Government then it is provided with RESTRICTED RIGHTS. Use, duplication, or disclosure by the United
States Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of The Rights
in Technical Data and Computer Software clause at DFARS 252.227-7013, or subparagraphs (c)(1) and
(2) of the Commercial Computer Software-Restricted Rights at 48 CFR 52.227-19 or clause
18-52.227-86(d) of the NASA supplement to the FAR, as applicable. Manufacturer is NETWRIX PTY LTD, 9
Monteray Terrace, Glenmore Park, NSW 2745 Australia.
