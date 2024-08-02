import Layout from "./../../../components/Layout";
import FormInput from "./../../../components/FormInput";
import Button from "./../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  purchaseOrderNumber: Yup.string().required("PO Number is Required"),
});

const AddPurchaseOrder = () => {
  const navigate = useNavigate();
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      purchaseOrderNumber: "",
      unit: "",
      emailDate: "",
      teams: [
        {
          teamName: "",
          bodyColor: "",
          artworkColors: [""],
          quantityIn: 0,
          quantityOut: 0,
          actualQuantity: 0,
        },
      ],
      items: [{ name: "", value: "" }],
      requiredQuantity: 0,
      purchaseOrderQuantity: 0,
      quantityIn: 0,
      quantityOut: 0,
      clientPurchaseOrderNumber: "",
      shipmentDate: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(
          "http://localhost:5000/shakilprint/purchaseorders",
          values,
        );
        alert("Purchase Order added successfully");
        navigate("/purchaseorders");
        formik.resetForm();
      } catch (error) {
        console.error("Error submitting form", error);
        alert("Failed to add Purchase Order");
      }
    },
  });

  return (
    <Layout title="Add Purchase Order">
      <div className="container mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
              {/* PURCHASE ORDER NUMBER */}

              <FormInput
                formik={formik}
                id="purchaseOrderNumber"
                name="purchaseOrderNumber"
                label="Purchase Order Number"
              />

              {/* UNIT OR DIVISION */}
              <FormInput formik={formik} id="unit" name="unit" label="Unit" />
              {/* EMAIL DATE WHICH THE PO COMES */}
              <FormInput
                formik={formik}
                id="emailDate"
                name="emailDate"
                label="Email Date"
                type="date"
              />
              {/* REQUIRED QUANTITY */}
              <FormInput
                formik={formik}
                id="requiredQuantity"
                name="requiredQuantity"
                label="Required Quantity"
              />
              {/* PO QUANTITY */}
              <FormInput
                formik={formik}
                id="purchaseOrderQuantity"
                name="purchaseOrderQuantity"
                label="Purchase Order Quantity"
              />
              {/* Clients PO Number */}
              <FormInput
                formik={formik}
                id="clientPurchaseOrderNumber"
                name="clientPurchaseOrderNumber"
                label="Client PO Number"
              />
              {/* Shipment Date */}
              <FormInput
                formik={formik}
                id="shipmentDate"
                name="shipmentDate"
                label="Shipment Date"
                type="date"
              />
            </div>
          </div>
          <div>
            <Button type="submit">Add Purchase Order</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddPurchaseOrder;
