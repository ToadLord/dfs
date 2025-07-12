type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  query: string;
};

export default function EmailTemplate({
  firstName,
  lastName,
  email,
  query,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#f9fafb",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: 32,
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 16,
          color: "#2563eb",
        }}
      >
        New Contact Query
      </h2>
      <div style={{ marginBottom: 12 }}>
        <span style={{ fontWeight: 600 }}>Name:</span>{" "}
        <span>
          {firstName} {lastName}
        </span>
      </div>
      <div style={{ marginBottom: 12 }}>
        <span style={{ fontWeight: 600 }}>Email:</span> <span>{email}</span>
      </div>
      <div style={{ marginBottom: 0 }}>
        <span style={{ fontWeight: 600 }}>Query:</span>
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: 12,
            marginTop: 6,
            border: "1px solid #e5e7eb",
            color: "#374151",
          }}
        >
          {query}
        </div>
      </div>
    </div>
  );
}
