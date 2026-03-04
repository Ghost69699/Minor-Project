function History({ history }) {
  return (
    <div className="history-container">
      <div className="history-header">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <h2>Detection History</h2>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 12h6M9 16h6M9 8h6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <p className="empty-message">No detections yet</p>
          <p className="empty-hint">Upload a crop image to get started</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-number">{index + 1}</div>
              <div className="history-content">
                <p className="history-text">{item}</p>
                <span className="history-time">Just now</span>
              </div>
              <svg className="history-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
