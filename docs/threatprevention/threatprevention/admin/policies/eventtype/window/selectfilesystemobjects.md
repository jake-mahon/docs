# Select File System Objects Window

The Select File System Objects window provides a list of available file system paths. Paths to selected objects are added to the filter from where you clicked the __Add__ (+) button to open this window.

![Select File System Objects Window](/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/window/filesystemobjects.png)

- Select an Agent from the drop-down menu and click __Connect__.
- Navigate through the domain tree and check the desired item(s) in the __Results__ pane on the right.
- Then click __OK__ to close the window.

See the [Selection Windows](/docs/threatprevention/threatprevention/admin/policies/eventtype/window/overview.md) topic for additional information.

The selection is displayed in the appropriate box of the File System filter, File System Paths filter, or the File System Enterprise Auditor filter.

![Select File System Objects Window - NAS Device added](/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/window/filesystemobjectsnas.png)

For NAS monitoring, the selected Agent needs to be deployed to a Windows server acting as a proxy server for NAS activity. If the correct Agent is selected, the IP address(es) of the NAS device(s) are displayed in the Navigation pane. Type the path(s), one per row in the Results pane. Click __OK__ and the NAS paths are added to the list of paths to be monitored.

The paths entered can be file or folder names.

- For example, type c:\HR\NewHireProcess.doc for a NAS device with 192.168.16.188 as IP address, and it appears in the paths list as c:\HR\NewHireProcess.doc (\192.168.16.188).
