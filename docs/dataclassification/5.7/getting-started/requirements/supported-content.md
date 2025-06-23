# Supported Content Types

The table below lists types of content and their default extensions supported out of the box.

**NOTE:** To review the full list of available content types, navigate to Config → Text Processing →
Content Type Extraction Methods.

| Default extension | Content type     |
| ----------------- | ---------------- |
| .aiff             | AIFF             |
| .bmp              | Bitmap           |
| .chm              | Compiled HTML    |
| .doc              | Word             |
| .docx             | Word Xml         |
| .dwg              | CAD              |
| .eml              | Exchange Mail    |
| .flv              | FLV              |
| .html             | HTML             |
| .java             | Java Source      |
| .jpg              | JPEG             |
| .mpp              | Project          |
| .msg              | Message          |
| .pdf              | PDF              |
| .webp             | png              |
| .ppt              | Powerpoint       |
| .pptx             | Powerpoint Xml   |
| .pub              | Publisher        |
| .rar              | Archive          |
| .rtf              | Rich Text        |
| .tiff             | Tiff             |
| .tmp              | Unknown          |
| .txt              | Text             |
| .vsd              | Visio            |
| .vtl              | Dictionary / VTL |
| .wav              | WAV              |
| .wp               | Word Perfect     |
| .xls              | Excel            |
| .xlsx             | Excel Xml        |
| .xml              | XML              |
| .zip              | Archive          |
| .7z               | Archive          |

# Supported Data Sources

The table below lists systems that can be crawled with Netwrix Data Classification:

| Data Source                                          | Supported Versions                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File System                                          | - CIFS/SMB (Preferred) - NFS                                                                                                                                                                                                                                                                                                                                                                                                                |
| SharePoint, SharePoint Online, OneDrive for Business | - 2010 and above                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Database                                             | - Microsoft SQL Server 2008 and above - MySQL 5.0.2 and above - Oracle 10g and above - PostgreSQL 7.4 and above                                                                                                                                                                                                                                                                                                                             |
| Box                                                  | - Enterprise - Business / Business Plus - Starter                                                                                                                                                                                                                                                                                                                                                                                           |
| Dropbox                                              | - Business                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Exchange                                             | - Exchange Server 2010 and above - Exchange Online **NOTE:** Automatic detection, crawling and classification of multiple Exchange mailboxes from the same Exchange server (and, respectively, _Exchange Server_ content source configuration in the NDC web console) is only supported for Exchange Server 2013 or later due to limitations in the Microsoft APIs. For earlier versions, consider using _Exchange Mailbox_ content source. |
| Google Drive                                         | - N/A                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Outlook Mail Archive                                 | - Outlook 2010 and above                                                                                                                                                                                                                                                                                                                                                                                                                    |
