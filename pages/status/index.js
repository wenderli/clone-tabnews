import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (!data) return <div>Sem dados disponíveis.</div>;

  const updatedAtFormatted = new Date(data.updated_at).toLocaleString("pt-BR");

  return (
    <section>
      <h2>Status do Sistema</h2>
      <div>
        <strong>Última atualização:</strong> {updatedAtFormatted}
      </div>

      <hr />

      <h3>Dependências</h3>
      <div>
        <strong>Banco de Dados:</strong>
        <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
          <li>
            <strong>Versão:</strong> {data.dependencies.database.version}
          </li>
          <li>
            <strong>Conexões Máximas:</strong>{" "}
            {data.dependencies.database.max_connections}
          </li>
          <li>
            <strong>Conexões Abertas:</strong>{" "}
            {data.dependencies.database.opened_connections}
          </li>
        </ul>
      </div>
    </section>
  );
}
