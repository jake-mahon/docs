# Proposed Directory Structure – Directory Manager 11.0

```text
docs/directorymanager/11.0
├── _category_.json
├── index.md                # landing page (kept)
├── overview.md             # was introduction.md
├── release-notes
│   └── whats-new.md        # was whatsnew.md
├── getting-started
│   └── index.md            # was gettingstarted.md
├── installation
│   ├── index.md            # was install/overview.md
│   └── [all existing install/* content]
├── administration          # renamed from admincenter
│   ├── index.md            # new overview (admincenter/history.md merged)
│   ├── general             # admincenter/general/*
│   ├── identity-store      # admincenter/identitystore/*
│   ├── data-sources        # admincenter/datasource/*
│   ├── entitlement         # admincenter/entitlement/*
│   ├── help-desk           # admincenter/helpdesk/*
│   ├── mobile-service      # admincenter/mobileservice/*
│   ├── notification        # admincenter/notification/*
│   ├── portal-builder      # admincenter/portal/*
│   ├── replication         # admincenter/replication/*
│   ├── schedule            # admincenter/schedule/*
│   ├── security-roles      # admincenter/securityrole/*
│   ├── services            # admincenter/service/*
│   └── setup-auth          # admincenter/setupauth/*
├── authentication          # renamed from authenticate
│   ├── index.md            # authenticate/overview.md
│   ├── identity-provider   # authenticate/asidentityprovider/*
│   └── service-provider    # authenticate/asserviceprovider/* (sub-folders stay)
├── configuration
│   ├── index.md            # new stub
│   └── entra-id            # configureentraid/*
├── portal                  # end-user portal docs
│   └── [existing directorymanager/portal content]
├── api
│   └── [existing api/*]
├── management-shell
│   └── [existing managementshell/*]
└── _additional future dirs_

*Note: Only high-level paths are shown. All sub-pages retain their original
file names, converted to hyphen-case where necessary.*
```
