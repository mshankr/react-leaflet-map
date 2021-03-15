const Table = ({ tableData, setHighlightIdx, className }) => {
  return (
    <table className={`ui table selectable pointer ${className}`}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Location</th>
          <th>Address</th>
          <th>Timezone</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowItem) => (
          <tr key={rowItem.id} onMouseEnter={() => setHighlightIdx(rowItem.id)}>
            <td data-label="Company">{rowItem.companyName}</td>
            <td data-label="Location">
              {rowItem.city}, {rowItem.country}
            </td>
            <td data-label="Address">{rowItem.streetAddress}</td>
            <td data-label="Timezone">{rowItem.timeZone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
