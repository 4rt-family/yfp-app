import configuredAirtable from '../../utils/configuredAirtable';

const tableName = process.env.AIRTABLE_PASTAS_TABLE_NAME;

export default async (req) => {
  if (req.method !== 'POST') {
    return;
  }
  const data = JSON.parse(req.body);
  await configuredAirtable(tableName).create([
    {
      fields: {
        Title: data.title,
        Tags: [],
        Content: data.content,
        Status: 'Moderation',
      },
    },
  ]);
};
