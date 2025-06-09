# CDSA Job

The CDSA Job is available through the Instant Job Library under the CDSA library. See the [Instant Job Wizard](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for instructions of how to add this instant job to the Jobs tree. When installing the job, select __Local host__ on the Host pages of the Instant Job Wizard.

Ensure the supporting solutions have successfully collected and analyzed data prior to running this job. See the [Presentation Dependencies](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/cdsa/presentation.md) topic for alignment between presentation slides and jobs that supply the data points.

The CDSA job generates three PowerPoint files:

- For the Presenter

  - The __Netwrix\_CDSA\_Presentation.pptx__ file is designed to be presented live to the customer
- For the Customer as printable assets

  - The __Netwrix\_CDSA\_8.5x11\_Presentation.pptx__ file is designed to be given to the customer for self-review as a PDF file
  - The __Netwrix\_CDSA\_A4\_Presentation.pptx__ file is designed to be given to the customer for self-review as a PDF file

__CAUTION:__ Do not send any these presentations to a customer in PowerPoint format.

The printable assets can be converted to PDFs or printed booklet style at a professional print shop (suggested) if desired.

These presentations are located within the job’s folder in the Access Analyzer installation directory, which varies according to the location of the job within the Jobs tree. Navigate to this folder by clicking __Open Folder__ on the job's overview page.

The presentation files contain slides for both a classic CDSA presentation applicable to most organizations and an ePHI Security Assessment applicable to the healthcare industry.

## Delivering a CDSA Presentation Slide Show

The __Netwrix\_CDSA\_Presentation.pptx__ file is designed to be presented live to the customer. There are two presentation options for the live slide show:

- The __CDSA - Classic__ slide show contains the first 24 slides and is applicable for most organizations
- The __ePHI Security Assessment__ slide show contains the ending slides with select summary slides from the Classic slide show and is applicable to the healthcare industry

Use the Custom Slide Show drop-down menu on the Slide Show ribbon in PowerPoint to select the appropriate presentation.

__NOTE:__ Slide 17 is hidden by default as same information is available on Slides 18-20.

Netwrix University includes a training module with details on the key talking points for a live delivery of the slide shows. Check out the __315 – Getting Started with Credential & Data Security Assessment__ training course.

## Choosing a PDF Version

Both of the printable assets have two customized options for converting to a PDF:

- CDSA Classic – Contains the first 24 slides and is applicable for most organizations
- ePHI Security Assessment – Contains the ending slides with select summary slides from the Classic slide show and is applicable to the healthcare industry

Follow the steps to create the appropriate custom PDF.

__Step 1 –__ Use the __Save As__ option.

__Step 2 –__ Set the file name as desired and change the Save As type to __PDF__.

__Step 3 –__ Click __Options__ and change the Range to __Custom show__.

__Step 4 –__ By default, this is set to the __CDSA Classic__ show. If needed, change it to the __ePHI Security Assessment__ show.

__Step 5 –__ Click __OK__ to confirm the option, and then click __Save__ to generate the PDF.

The presentation is converted to a PDF with only the applicable slides included.

__NOTE:__ Slide 16 is hidden by default as same information is available on Slides 17-19.

## Custom Slide Show Alignment

The table lists each slide as it is listed in the __Netwrix\_CDSA\_Presentation.pptx__ file. It indicates which slides are included in each custom slide show. There are slight variations in page numbering with the files designed to be saved as PDFs.

| # | Slide Title | CDSA Classic | ePHI Security Assessment |
| --- | --- | --- | --- |
| 1 | Executive Summary | X |  |
| 2 | Netwrix Credential and Data Security Assessment (CDSA) | X |  |
| 3 | Data Security | X |  |
| 4 | Condition: Open Access | X | X |
| 5 | Sensitive Data | X |  |
| 6 | Stale Data | X |  |
| 7 | Active Directory Security | X | X |
| 8 | Password Issues | X |  |
| 9 | Toxic Active Directory Conditions | X |  |
| 10 | Non-Administrators that can Perform Sensitive AD Actions | X |  |
| 11 | Active Directory Sensitive Security Groups | X |  |
| 12 | Windows: Assessment Summary | X | X |
| 13 | Local Administrators | X |  |
| 14 | Service Accounts | X |  |
| 15 | Ticket and Credential Management | X |  |
| 16 | Shadow Access Rights | X |  |
| 17 | Additional Findings (FS, AD, Windows OS) |  |  |
| 18 | Additional Findings (FS, SharePoint, Box, Dropbox) | X | X |
| 19 | Additional Findings (Exchange, Databases) | X | X |
| 20 | Additional Findings (AD, Windows OS) | X | X |
| 21 | Product Portfolio | X | X |
| 22 | Path To Success | X | X |
| 23 | Netwrix | X | X |
| 24 | Thank You | X | X |
| 25 | Executive Summary: ePHI Security Assessment |  | X |
| 26 | Netwrix ePHI Security Assessment |  | X |
| 27 | ePHI Data |  | X |
| 28 | Condition: Stale Data |  | X |
| 29 | AD Security Assessment |  | X |
| 30 | Windows: Security Assessment |  | X |
| 31 | Shadow Access Rights to ePHI Data |  | X |
