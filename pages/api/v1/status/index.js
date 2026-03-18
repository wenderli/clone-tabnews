import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseName = process.env.POSTGRES_DB;

  const databaseValues = (
    await database.query({
      text: `SELECT 
            current_setting('server_version') as server_version,
            current_setting('max_connections')::int as max_connections,
            (SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1) as opened_connections;`,
      values: [databaseName],
    })
  ).rows[0];

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        server_version: databaseValues.server_version,
        max_connections: databaseValues.max_connections,
        opened_connections: databaseValues.opened_connections,
      },
    },
  });
}

export default status;
