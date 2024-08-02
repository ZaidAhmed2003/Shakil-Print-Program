const Table = () => {
  return (
    <table className="min-w-full table-fixed border-separate rounded-lg border border-gray-200 bg-white">
      <thead className="border-b">
        <tr className="border-b">
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th colSpan="4" className="border-b bg-gray-50 px-4 py-2 text-center">
            Quantity
          </th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
          <th className="border-b px-4 py-2"></th>
        </tr>
        <tr className="border-b px-4 py-2">
          <th className="border-b px-4 py-2">Sno.</th>
          <th className="border-b px-4 py-2">Unit</th>
          <th className="border-b px-4 py-2">Date</th>
          <th className="border-b px-4 py-2">PO Number</th>
          <th className="border-b px-4 py-2">Teams</th>
          <th className="border-b px-4 py-2">Items</th>
          <th className="w-10 border-b px-4 py-2">Strike Off</th>
          <th className="w-10 border-b px-4 py-2">PP Sample</th>
          <th className="w-20 border-b px-4 py-2">Req Qty</th>
          <th className="w-20 border-b px-4 py-2">P.O Qty</th>
          <th className="w-20 border-b px-4 py-2">Qty In</th>
          <th className="w-20 border-b px-4 py-2">Qty Out</th>

          <th className="border-b px-4 py-2">Towellers PO</th>
          <th className="border-b px-4 py-2">Shipment Date</th>
          <th className="border-b px-4 py-2">Balance</th>
          <th className="border-b px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {poData.map((po, index) => {
          const result = computeResult(po.quantityForPrint, po.quantityPrinted);
          return (
            <tr key={po.id} className="text-center">
              <td className="border-b px-4 py-4">{index + 1}</td>
              <td className="border-b px-4 py-4">{po.unit}</td>
              <td className="border-b px-4 py-4">{po.emailDate}</td>
              <td
                className="cursor-pointer border-b px-4 py-4"
                onClick={() => handleRowClick(po.purchaseOrderNumber)}
              >
                {po.purchaseOrderNumber}
              </td>
              <td className="border-b px-4 py-4">{po.teams}</td>
              <td className="border-b px-4 py-4">{po.items}</td>
              <td className="border-b px-4 py-4">
                <input type="checkbox" checked={po.strikeOff} readOnly />
              </td>
              <td className="border-b px-4 py-4">
                <input type="checkbox" checked={po.ppSample} readOnly />
              </td>
              <td className="border-b px-2 py-4">{po.requiredQuantity}</td>
              <td className="border-b px-2 py-4">{po.purchaseOrderQuantity}</td>
              <td className="border-b px-2 py-4">{po.quantityForPrint}</td>
              <td className="border-b px-2 py-4">{po.quantityPrinted}</td>
              <td className="border-b px-4 py-4">
                {po.clientPurchaseOrderNumber}
              </td>
              <td className="border-b px-4 py-4">{po.shipmentDate}</td>
              <td className="border-b px-4 py-4">{result}</td>
              <td className="border-b px-4 py-4">
                <div className="flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
