# View Job XML File

At the bottom of the Job Properties window is the __View XML__ button. To view the XML file, click __View__ XML.

| ![View XML button on Job Properties window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/properties/viewxmlbutton.webp) | ![XML Text window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/properties/viewxml.webp) |
| --- | --- |
| Job Properties Window | Job XML File |

This opens the job’s XML file, which contains all of the job, query, and reporting configurations. When the log level is directly set at job level, the job XML ```<JOBLOGLEVEL>``` parameter will show a value of:

- 0 for Debug
- 1 for Info
- 2 for Warning
- 3 for Error

__NOTE:__ Job analysis configurations are kept in a separate XML file.
