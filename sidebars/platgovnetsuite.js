// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  platgovnetsuiteSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Platform Governance for NetSuite',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/what-is-strongpoint',
        'getting-started/navigating-strongpoint',
        'getting-started/requirements-and-licensing',
        'getting-started/whats-new',
      ],
    },
    {
      type: 'category',
      label: 'Installation and Setup',
      collapsed: true,
      items: [
        'installation-and-setup/index',
        'installation-and-setup/installation-guide',
        'installation-and-setup/initial-configuration',
        'installation-and-setup/permissions-and-access',
        'installation-and-setup/menus-and-navigation',
        'installation-and-setup/running-the-spider',
        'installation-and-setup/auto-spider-alerts',
        'installation-and-setup/sandbox-deployment',
        'installation-and-setup/go-live-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Change Management',
      collapsed: true,
      items: [
        'change-management/index',
        {
          type: 'category',
          label: 'Concepts',
          collapsed: true,
          items: [
            'change-management/concepts/change-approval-policies',
            'change-management/concepts/multi-environment-management',
            'change-management/concepts/change-logs',
          ],
        },
        {
          type: 'category',
          label: 'Working with Changes',
          collapsed: true,
          items: [
            'change-management/working-with-changes/creating-change-requests',
            'change-management/working-with-changes/change-request-forms',
            'change-management/working-with-changes/approving-changes',
            'change-management/working-with-changes/validating-changes',
            'change-management/working-with-changes/comparing-environments',
            'change-management/working-with-changes/resolving-non-compliance',
          ],
        },
        {
          type: 'category',
          label: 'Policies',
          collapsed: true,
          items: [
            'change-management/policies/setting-up-policies',
            'change-management/policies/subsidiary-policies',
            'change-management/policies/multi-stream-approval',
            'change-management/policies/managing-policies',
          ],
        },
        {
          type: 'category',
          label: 'Examples',
          collapsed: true,
          items: [
            'change-management/examples/script-deployments',
            'change-management/examples/field-changes',
            'change-management/examples/record-changes',
            'change-management/examples/search-changes',
          ],
        },
        'change-management/reports',
      ],
    },
    {
      type: 'category',
      label: 'Customization Management',
      collapsed: true,
      items: [
        'customization-management/index',
        'customization-management/customization-records',
        'customization-management/impact-analysis',
        'customization-management/entity-relationship-diagrams',
        'customization-management/templates-and-forms',
        {
          type: 'category',
          label: 'Bundle Removal',
          collapsed: true,
          items: [
            'customization-management/bundle-removal/index',
            'customization-management/bundle-removal/categorizing-customizations',
            'customization-management/bundle-removal/custom-lists-and-fields',
            'customization-management/bundle-removal/mass-updates',
            'customization-management/bundle-removal/saved-searches',
            'customization-management/bundle-removal/export-and-cleanup',
          ],
        },
        'customization-management/integration-records',
      ],
    },
    {
      type: 'category',
      label: 'Security and Compliance',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Segregation of Duties',
          collapsed: true,
          items: [
            'security-and-compliance/segregation-of-duties/index',
            'security-and-compliance/segregation-of-duties/installation',
            'security-and-compliance/segregation-of-duties/creating-rules',
            'security-and-compliance/segregation-of-duties/approval-workflows',
            'security-and-compliance/segregation-of-duties/managing-violations',
            'security-and-compliance/segregation-of-duties/exceptions',
            'security-and-compliance/segregation-of-duties/reports',
            'security-and-compliance/segregation-of-duties/testing-scenarios',
          ],
        },
        {
          type: 'category',
          label: 'User Access Review',
          collapsed: true,
          items: [
            'security-and-compliance/user-access-review/index',
            'security-and-compliance/user-access-review/installation',
            {
              type: 'category',
              label: 'Administrators',
              collapsed: true,
              items: [
                'security-and-compliance/user-access-review/administrators/index',
                'security-and-compliance/user-access-review/administrators/owner-management',
                'security-and-compliance/user-access-review/administrators/pending-assignments',
                'security-and-compliance/user-access-review/administrators/review-management',
              ],
            },
            {
              type: 'category',
              label: 'Owners',
              collapsed: true,
              items: [
                'security-and-compliance/user-access-review/owners/index',
                'security-and-compliance/user-access-review/owners/membership-reviews',
                'security-and-compliance/user-access-review/owners/permission-reviews',
                'security-and-compliance/user-access-review/owners/role-reviews',
              ],
            },
            {
              type: 'category',
              label: 'Reviewers',
              collapsed: true,
              items: [
                'security-and-compliance/user-access-review/reviewers/index',
                'security-and-compliance/user-access-review/reviewers/additional-reviews',
              ],
            },
            'security-and-compliance/user-access-review/auditors',
            'security-and-compliance/user-access-review/history',
          ],
        },
        {
          type: 'category',
          label: 'Financial Controls',
          collapsed: true,
          items: [
            'security-and-compliance/financial-controls/index',
            'security-and-compliance/financial-controls/getting-started',
            'security-and-compliance/financial-controls/control-incidents',
            'security-and-compliance/financial-controls/preapproved-changes',
            'security-and-compliance/financial-controls/lookback-analysis',
            'security-and-compliance/financial-controls/supported-records',
          ],
        },
        'security-and-compliance/user-management',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Script Management',
          collapsed: true,
          items: [
            'operations/script-management/index',
            'operations/script-management/performance-analysis',
            'operations/script-management/error-monitoring',
            'operations/script-management/debugging-logs',
            'operations/script-management/script-scheduling',
          ],
        },
        {
          type: 'category',
          label: 'Maintenance',
          collapsed: true,
          items: [
            'operations/maintenance/index',
            'operations/maintenance/cleanup-strategies',
            'operations/maintenance/archiving-fields',
            'operations/maintenance/unused-customizations',
            'operations/maintenance/default-ids',
            'operations/maintenance/field-descriptions',
            'operations/maintenance/automated-cleanup',
          ],
        },
        'operations/process-management',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/index',
        {
          type: 'category',
          label: 'Jira',
          collapsed: true,
          items: [
            'integrations/jira/index',
            'integrations/jira/walkthrough',
            'integrations/jira/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'ServiceNow',
          collapsed: true,
          items: [
            'integrations/servicenow/index',
            'integrations/servicenow/installation',
            'integrations/servicenow/ticket-creation',
          ],
        },
        {
          type: 'category',
          label: 'Zendesk',
          collapsed: true,
          items: ['integrations/zendesk/index', 'integrations/zendesk/walkthrough'],
        },
        'integrations/integration-mapping',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api-reference/index',
        {
          type: 'category',
          label: 'Change Request API',
          collapsed: true,
          items: [
            'api-reference/change-request-api/create-update',
            'api-reference/change-request-api/retrieve',
            'api-reference/change-request-api/push',
            'api-reference/change-request-api/delete',
          ],
        },
        'api-reference/customization-api',
        'api-reference/impact-analysis-api',
        'api-reference/entity-relationship-api',
      ],
    },
    {
      type: 'category',
      label: 'Tools and Utilities',
      collapsed: true,
      items: ['tools-and-utilities/index', 'tools-and-utilities/standard-field-analysis'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/spider-issues',
        'troubleshooting/search-timeouts',
        'troubleshooting/mobile-access',
        'troubleshooting/reporting-bugs',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Release Notes',
          collapsed: true,
          items: [
            'reference/release-notes/version-7-3',
            'reference/release-notes/version-7-2',
            'reference/release-notes/version-7-1',
            'reference/release-notes/version-7-0',
          ],
        },
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
