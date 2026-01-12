import { GlobalConfig } from 'payload'

export const Statistics: GlobalConfig = {
  slug: 'statistics',
  access: {
    read: () => true,
    update: () => true, // TODO: Secure this in production, but needed for server action update if not using local API
  },
  fields: [
    {
      name: 'startCount',
      type: 'number',
      defaultValue: 18,
      required: true,
      admin: {
        description: 'The starting number for the visitor counter',
      },
    },
    {
      name: 'visitorCount',
      type: 'number',
      defaultValue: 0,
      required: true,
      admin: {
        description: 'The actual number of unique visitors (added to start count)',
        readOnly: true,
      },
    },
    {
      name: 'ips',
      type: 'json',
      defaultValue: [],
      admin: {
        description: 'List of hashed IPs or visitor IDs',
        readOnly: true,
      },
    },
  ],
}
