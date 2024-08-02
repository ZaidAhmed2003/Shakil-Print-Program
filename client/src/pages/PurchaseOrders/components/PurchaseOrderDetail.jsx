import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  closePurchaseOrder,
  openPurchaseOrder,
} from "../../../store/PurchaseOrder/PurchaseOrderSlice";

const PurchaseOrderDetail = () => {
  const { purchaseOrderNumber } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const purchaseOrders = useSelector(
    (state) => state.purchaseOrderData.purchaseOrders,
  );

  const openOrders = useSelector((state) => state.purchaseOrderSlice);

  useEffect(() => {
    dispatch(openPurchaseOrder(purchaseOrderNumber));
  }, [dispatch, purchaseOrderNumber]);

  const purchaseOrder = purchaseOrders.find(
    (po) => po.purchaseOrderNumber === purchaseOrderNumber,
  );

  const handleClose = () => {
    dispatch(closePurchaseOrder(purchaseOrderNumber));
    navigate("/purchaseorders");
  };

  if (!purchaseOrders) {
    return (
      <Layout title="PO NOT FOUND">
        <div>Purchase orders data is not available.</div>
      </Layout>
    );
  }

  return (
    <Layout title={`Purchase Order ${purchaseOrderNumber}`}>
      <div className="flex justify-end">
        <button
          className="mb-4 cursor-pointer rounded-md bg-primary px-4 py-2 font-semibold text-white hover:bg-blue-600"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-medium">
          Purchase Order {purchaseOrderNumber}
        </h2>
        <p>{Date()}</p>
      </div>
      <div className="mb-20 flex flex-wrap justify-between gap-6 gap-y-10">
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">PO Email Date </h3>
          <p>{purchaseOrder.emailDate}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Unit / Division </h3>
          <p>{purchaseOrder.unit}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Required Quantity </h3>
          <p>{purchaseOrder.requiredQuantity}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">PO Quantity </h3>
          <p>{purchaseOrder.purchaseOrderQuantity}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Quantity In</h3>
          <p>{purchaseOrder.quantityForPrint}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Quantity Out</h3>
          <p>{purchaseOrder.quantityPrinted}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Towellers PO</h3>
          <p>{purchaseOrder.clientPurchaseOrderNumber}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Shipment Date</h3>
          <p>{purchaseOrder.shipmentDate}</p>
        </div>
        <div className="flex flex-col items-center gap-2 px-6">
          <h3 className="font-bold">Shipment Date</h3>
          <p>{purchaseOrder.shipmentDate}</p>
        </div>
      </div>
      <div className="">
        <table className="w-full border rounded-md">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan={2}>Quantity</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th className="border-b px-4 py-2">Sno</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Item</th>
              <th className="border-b px-4 py-2">Body Color</th>
              <th className="border-b px-4 py-2">Sreens</th>
              <th className="border-b px-4 py-2">Actual</th>
              <th className="border-b px-4 py-2">Print</th>
              <th className="border-b px-4 py-2">Strike Off</th>
              <th className="border-b px-4 py-2">PP Sample</th>
              <th className="border-b px-4 py-2">Printed</th>
            </tr>
          </thead>
        </table>
      </div>
    </Layout>
  );
};

export default PurchaseOrderDetail;
