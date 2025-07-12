function OrderDetail() {
  const order = {
    id: 123,
    client_id: 456,
    user_id: 789,
    created_at: "2025-07-12T15:30:00",
    estimated_delivery_date: "2025-07-20T00:00:00",
    real_delivery_date: null,
    state: "en proceso",
    total: 1500,
    pagado: false,
    garments: [
      { type: "Camisa", description: "Camisa blanca talla M" },
      { type: "Pantalón", description: "Jean azul talla 32" }
    ]
  };

  const containerStyle = {
    maxWidth: 600,
    margin: "30px auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  const titleStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: 20
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555"
  };

  const garmentListStyle = {
    listStyleType: "disc",
    paddingLeft: 20,
    color: "#444"
  };

  const garmentItemStyle = {
    marginBottom: 6
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Detalle de la Orden #{order.id}</h2>

      <p><span style={labelStyle}>Cliente ID:</span> {order.client_id}</p>
      <p><span style={labelStyle}>Usuario ID:</span> {order.user_id}</p>
      <p><span style={labelStyle}>Creado:</span> {new Date(order.created_at).toLocaleString()}</p>
      <p><span style={labelStyle}>Fecha estimada de entrega:</span> {new Date(order.estimated_delivery_date).toLocaleDateString()}</p>
      <p>
        <span style={labelStyle}>Fecha real de entrega:</span>{" "}
        {order.real_delivery_date ? new Date(order.real_delivery_date).toLocaleDateString() : "No entregado aún"}
      </p>
      <p><span style={labelStyle}>Estado:</span> {order.state}</p>
      <p><span style={labelStyle}>Total:</span> ${order.total}</p>
      <p><span style={labelStyle}>Pagado:</span> {order.pagado ? "Sí" : "No"}</p>

      {order.garments && order.garments.length > 0 && (
        <>
          <h3 style={{ color: "#333", marginTop: 30 }}>Prendas</h3>
          <ul style={garmentListStyle}>
            {order.garments.map((garment, index) => (
              <li key={index} style={garmentItemStyle}>
                <span style={labelStyle}>Tipo:</span> {garment.type} | <span style={labelStyle}>Descripción:</span> {garment.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default OrderDetail;
