export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        background: "#f9f9f9",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfFjSi0CExEhICcoyZyb6cnwum2jCL3A4KtdOHqgXr7L_Znuw/viewform?embedded=true"
        width="100%"
        height="950"
        style={{
          maxWidth: "640px",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
        allowFullScreen
        title="Contact Form"
      >
        Loading…
      </iframe>
    </div>
  );
}
