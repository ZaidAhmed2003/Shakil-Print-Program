import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openPurchaseOrder } from "../../store/PurchaseOrder/PurchaseOrderSlice";
import { fetchPurchaseOrders } from "../../store/Data/fetchPurchaseOrdersSlice";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

const PurchaseOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/shakilprint/purchaseorders/${id}`,
      );
      alert("Deleted");
      dispatch(fetchPurchaseOrders()); // Call function to refresh the list of purchase orders
    } catch (error) {
      console.error("Error deleting purchase order", error);
      alert("Failed to delete Purchase Order");
    }
  };

  const handleRefresh = () => {
    dispatch(fetchPurchaseOrders());
  };

  useEffect(() => {
    dispatch(fetchPurchaseOrders());
  }, [dispatch]);

  const handleRowClick = (purchaseOrderNumber) => {
    dispatch(openPurchaseOrder(purchaseOrderNumber));
    navigate(`/purchaseorders/${purchaseOrderNumber}`);
  };

  const purchaseOrders = useSelector(
    (state) => state.purchaseOrderData.purchaseOrders || [],
  );

  const handleAddPurchaseOrder = () => {
    navigate("/addpurchaseorder");
  };

  const computeResult = (j, k) => {
    if (j === "" || k === "") {
      return "";
    } else if (j - k === 0) {
      return "Done";
    } else {
      return j - k;
    }
  };

  return (
    <Layout title="Purchase Orders">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end gap-5">
          <Button size="small" handleOnClick={handleAddPurchaseOrder}>
            Add Purchase Order
          </Button>
          <Button size="small" handleOnClick={handleRefresh}>
            Refresh
          </Button>
        </div>
        <div className="">
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
                <th
                  colSpan="4"
                  className="border-b bg-gray-50 px-4 py-2 text-center"
                >
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
              {purchaseOrders &&
                purchaseOrders.map((order, index) => {
                  const result = computeResult(
                    order.quantityForPrint,
                    order.quantityPrinted,
                  );

                  return (
                    <tr key={order._id} className="text-center">
                      <td className="border-b px-4 py-4">{index + 1}</td>
                      <td className="border-b px-4 py-4">{order.unit}</td>
                      <td className="border-b px-4 py-4"></td>
                      <td
                        className="cursor-pointer border-b px-4 py-4"
                        onClick={() =>
                          handleRowClick(order.purchaseOrderNumber)
                        }
                      >
                        PO {order.purchaseOrderNumber}
                      </td>
                      <td className="border-b px-4 py-4">
                        {order.teams.length}
                      </td>
                      <td className="border-b px-4 py-4">
                        {order.items.length}
                      </td>
                      <td className="border-b px-4 py-4">
                        <input
                          type="checkbox"
                          checked={order.strikeOff}
                          readOnly
                        />
                      </td>
                      <td className="border-b px-4 py-4">
                        <input
                          type="checkbox"
                          checked={order.ppSample}
                          readOnly
                        />
                      </td>
                      <td className="border-b px-2 py-4">
                        {order.requiredQuantity}
                      </td>
                      <td className="border-b px-2 py-4">
                        {order.purchaseOrderQuantity}
                      </td>
                      <td className="border-b px-2 py-4">
                        {order.quantityForPrint}
                      </td>
                      <td className="border-b px-2 py-4">
                        {order.quantityPrinted}
                      </td>
                      <td className="border-b px-4 py-4">
                        {order.clientPurchaseOrderNumber}
                      </td>
                      <td className="border-b px-4 py-4">
                        {order.shipmentDate}
                      </td>
                      <td className="border-b px-4 py-4">{result}</td>
                      <td className="border-b px-4 py-4">
                        <div className="flex space-x-4">
                          <button className="text-blue-500 hover:text-blue-700">
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(order._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default PurchaseOrders;
