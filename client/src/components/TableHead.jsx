const TableHead = () => {
  return (
    <tr className="border-b">
      {columns.map((column, index) => (
        <th
          key={index}
          className={`border-b px-4 py-2 ${column.width ? column.width : ""}`}
        >
          {column.label}
        </th>
      ))}
    </tr>
  );
};

export default TableHead;
