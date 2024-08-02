import { FaMoneyBill } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TiDocumentText } from "react-icons/ti";

export const dashboardItems = [
  {
    icon: TiDocumentText,
    text: "Total Purchase Order",
  },
];

export const purchaseOrderTable = [
  { label: "Sno." },
  { label: "Unit" },
  { label: "Date" },
  { label: "PO Number" },
  { label: "Teams" },
  { label: "Items" },
  { label: "Strike Off", width: "w-10" },
  { label: "PP Sample", width: "w-10" },
  { label: "Req Qty", width: "w-20" },
  { label: "P.O Qty", width: "w-20" },
  { label: "Qty In", width: "w-20" },
  { label: "Qty Out", width: "w-20" },
  { label: "Towellers PO" },
  { label: "Shipment Date" },
  { label: "Balance" },
  { label: "Actions" },
];

export const purchaseOrderTopTable = [
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "Quantity", colspan: "4" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
];

export const navlinks = [
  {
    icon: RxDashboard,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: TiDocumentText,
    text: "Purchase Orders",
    link: "/purchaseorders",
  },
  {
    icon: FaMoneyBill,
    text: "Billing",
    link: "/billing",
  },
];
