# Proposed Directory Structure – Access Analyzer 12.0

```text
docs/accessanalyzer/12.0
├── _category_.json
├── index.md
├── overview.md
├── whats-new.md
├── getting-started
│   ├── index.md                ← renamed from `gettingstarted.md`
│   ├── requirements
│   │   └── overview.md         ← moved from `requirements/overview.md`
│   └── quick-tour.md           ← *new*, generated from existing intro content
├── installation
│   ├── index.md                ← moved from `install/overview.md`
│   ├── application             ← was `install/application/`
│   ├── filesystem-proxy        ← was `install/filesystemproxy/`
│   └── sharepoint-agent        ← was `install/sharepointagent/`
├── configuration
│   ├── index.md                ← *new overview page*
│   └── data-sources            ← consolidated from `config/` sub-folders
│       ├── active-directory
│       │   └── overview.md
│       ├── dell-celerra-vnx
│       ├── dell-powerscale
│       ├── dell-unity
│       ├── entraid
│       ├── exchange-online
│       ├── hitachi
│       ├── nasuni
│       ├── netapp-7mode
│       ├── netapp-cmode
│       ├── nutanix
│       ├── qumulo
│       ├── sharepoint
│       ├── sharepoint-online
│       └── windows-file
├── administration
│   ├── index.md                ← moved from `admin/overview.md`
│   ├── navigation              ← `admin/navigate/`
│   ├── actions                 ← `admin/action/`
│   ├── analysis                ← `admin/analysis/`
│   ├── data-collectors         ← `admin/datacollector/`
│   ├── jobs                    ← `admin/jobs/`
│   ├── schedule                ← `admin/schedule/`
│   ├── reporting               ← `admin/report/`
│   ├── maintenance             ← `admin/maintenance/`
│   ├── settings                ← `admin/settings/`
│   ├── host-discovery          ← `admin/hostdiscovery/`
│   └── host-management         ← `admin/hostmanagement/`
├── sensitive-data
│   ├── index.md                ← moved from `sensitivedatadiscovery/overview.md`
│   ├── criteria-editor         ← `sensitivedatadiscovery/criteriaeditor/`
│   ├── exempted-file-extensions.md
│   ├── metadata-tags.md
│   ├── supported-formats.md
│   └── system-criteria.md
├── solutions
│   ├── index.md                ← moved from `solutions/overview.md`
│   ├── active-directory        ← `solutions/activedirectory/`
│   ├── active-directory-inventory
│   ├── active-directory-permissions-analyzer
│   ├── anyid
│   ├── aws
│   ├── box
│   ├── databases
│   ├── dropbox
│   ├── entraid
│   ├── entraid-inventory
│   ├── exchange
│   ├── file-system
│   ├── nis-inventory
│   ├── sharepoint
│   ├── unix
│   └── windows
├── cds-a                      ← **CDSA Feature**
│   └── index.md               ← merge of 3 tiny files: `job.md`, `overview.md`, `presentation.md`
├── integrations
│   └── stealth-audit
│       └── mapi-cdo-install
│           ├── index.md       ← merge of `appendix.md` & `stealthaudit_mapi_cdo_installation.md`
└── reference                  ← placeholder for future expansion
    └── index.md

```

_Only directory and key leaf files are shown above; subordinate files retain their original names and relative placement within each new folder._
