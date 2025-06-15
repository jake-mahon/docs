# Agent Installer Update Window

Netwrix periodically releases updated Agent installation packages. Typically these updates are associated with Microsoft KBs (hot-fixes) which alter the LSASS components interfering with the Agent instrumentation. See the [Agent Information](../../../install/agent/overview.md) topic for additional information.

To download an installation package, the Threat Prevention server must be connected to the internet. It may be necessary to allow the following URL in the browser security settings:

- For Threat Prevention v7.5: [https://www.netwrix.com/go/siagent750zip](https://www.netwrix.com/go/siagent750zip)

Follow the steps to download the updated Agent installer.

__Step 1 –__ Click __Agents__ in the left pane to launch the Agents interface. Then click __Update Agent Installer__ to launch the Agent Installer Update window.

![Agent Installer Update window](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/agents/window/checkfornewversion.webp)

__Step 2 –__ Click __Check for Newer Version of the Netwrix Threat Prevention Agent__. Threat Prevention downloads the Agent installer from a static URL and then compares the Agent installer currently in use to the installer downloaded.

![Agent Installer Update window showing that Agent Installer is up-to-date](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/agents/window/uptodate.webp)

- If the versions are the same, the message specifies __Agent Installer is up-to-date…__ and displays the Agent version number. Click __Close__ to close the window.

![Agent Installer Update window showing that Agent version is outdated](../../../../../../static/img/product_docs/threatprevention/threatprevention/admin/agents/window/agentversionmismatch.webp)

- If the downloaded version is newer, the message displays both version numbers and provides an option to apply the update. Click __Apply Update__.

__NOTE:__ When the Agent installer is replaced with a newer version, all Agents’ versions in the Agents interface are highlighted to indicate they are not the current version. Agents should then be updated to the new version using the Upgrade Agent option on the right-click menu.
