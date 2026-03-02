function History({ history }) {
 return (
  <div className="history-box glass">
    <h2>Recent Detections</h2>

    {history.length === 0 ? (
      <p>No detections yet</p>
    ) : (
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

}

export default History;
