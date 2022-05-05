import configuredAirtable from '../../utils/configuredAirtable';

const tableName = process.env.AIRTABLE_PASTAS_TABLE_NAME;

export default async (req, res) => (
    configuredAirtable(tableName)
      // GET all Done records
      .select({ fields: [], filterByFormula: `{Status} = 'Done'` })
      .all()
      // Filter to get just ids
      .then((data) => data.map((r) => r.id))
      // Get random id
      .then((ids) => ids[Math.floor(Math.random() * ids.length)])
      // GET random record
      .then((id) => configuredAirtable(tableName).find(id))
      // Return record
      .then((record) => {
        res.statusCode = 200;
        res.json({ data: record.fields });
      })
  );
