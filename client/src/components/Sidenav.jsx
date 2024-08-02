import { IoMdSettings } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { navlinks } from "./Content";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { useDispatch, useSelector } from "react-redux";
import { closePurchaseOrder } from "../store/PurchaseOrder/PurchaseOrderSlice";
import { IoClose } from "react-icons/io5";

const Sidenav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openedPurchaseOrders = useSelector((state) => state.purchaseOrders);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const handleClose = (purchaseOrderNumber) => {
    dispatch(closePurchaseOrder(purchaseOrderNumber));
    if (openedPurchaseOrders.length === 1) {
      navigate("/purchaseorders");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="flex min-h-screen w-[245px] flex-col justify-between shadow-md">
      <div>
        <div className="mb-5 border-b-[1px] px-5 py-4">
          <Link to={"/"}>
            <h1 className="text-2xl font-semibold text-[#5347cE]">
              Shakil Print
            </h1>
          </Link>
        </div>

        <div className="flex flex-col gap-2 px-2">
          {navlinks.map((link) => (
            <Link to={link.link}>
              <NavigationLink
                key={link.text}
                text={link.text}
                icon={link.icon}
                link={link.link}
                isActiveLink={isActiveLink}
              />
            </Link>
          ))}
          <hr />
          {openedPurchaseOrders.map((purchaseOrderNumber) => (
            <div
              key={purchaseOrderNumber} // Ensure each div has a unique key
              className="flex items-center justify-between"
            >
              <Link to={`/purchaseorders/${purchaseOrderNumber}`}>
                <NavigationLink
                  text={`PO ${purchaseOrderNumber}`}
                  icon={TiDocumentText}
                  link={`/purchaseorders/${purchaseOrderNumber}`}
                  isActiveLink={isActiveLink}
                />
              </Link>
              <button
                onClick={() => handleClose(purchaseOrderNumber)}
                className="text-red-500 hover:text-red-700"
              >
                <IoClose />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 px-2">
        <Link to={"/settings"}>
          <NavigationLink
            isActiveLink={isActiveLink}
            text="Settings"
            icon={IoMdSettings}
            link={"/settings"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
