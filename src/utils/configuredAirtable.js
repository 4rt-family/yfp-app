import Airtable from 'airtable';

const apiKey = process.env.AIRTABLE_API_KEY;
const tableBase = process.env.AIRTABLE_TABLE_BASE;

export default new Airtable({ apiKey }).base(tableBase);
