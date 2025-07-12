function GarmentDetail() {
  const garment = {
    id: 1,
    type: "Camisa",
    description: "Camisa blanca talla M",
    observations: "Mancha en el cuello",
    order_detail: [
      { id: 101, service_name: "Lavado", price: 50 },
      { id: 102, service_name: "Planchado", price: 30 }
    ]
  };

  const containerStyle = {
    maxWidth: 500,
    margin: "30px auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#fefefe",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555"
  };

  const listStyle = {
    paddingLeft: 20,
    color: "#444",
    listStyleType: "disc"
  };

  return (
    <div style={containerStyle}>
      <h2>Detalle de la Prenda #{garment.id}</h2>
      <p><span style={labelStyle}>Tipo:</span> {garment.type}</p>
      <p><span style={labelStyle}>Descripción:</span> {garment.description || "N/A"}</p>
      <p><span style={labelStyle}>Observaciones:</span> {garment.observations || "Ninguna"}</p>

      {garment.order_detail && garment.order_detail.length > 0 ? (
        <>
          <p style={labelStyle}>Servicios a realizar:</p>
          <ul style={listStyle}>
            {garment.order_detail.map(service => (
              <li key={service.id}>
                {service.service_name} - ${service.price}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay servicios registrados.</p>
      )}
    </div>
  );
}

export default GarmentDetail;
