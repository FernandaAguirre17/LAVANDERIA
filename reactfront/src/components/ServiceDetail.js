function ServiceDetail() {
 
  const service = {
    id: 1,
    name: "Lavado",
    description: "Lavado en seco para prendas delicadas",
    price: 50.0,
   
  };

  const containerStyle = {
    maxWidth: 500,
    margin: "30px auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2>Detalle del Servicio #{service.id}</h2>
      <p><span style={labelStyle}>Nombre:</span> {service.name}</p>
      <p><span style={labelStyle}>Descripción:</span> {service.description || "Sin descripción"}</p>
      <p><span style={labelStyle}>Precio:</span> ${service.price}</p>
    </div>
  );
}

export default ServiceDetail;
