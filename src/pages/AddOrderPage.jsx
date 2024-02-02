import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Aside from "../components/Aside";
import AddOrderHeader from "../components/AddOrderHeader";
import TabTitles from "../components/TabTitles";
import AddOrderContent from "../components/AddOrderContent";
import { validateOrder } from "../helpers";
import { addNewOrder, setOrder, setOrderId } from "../redux/slices/orderSlice";

const tabItems = [
  { key: "1", label: "Основное", children: <AddOrderContent /> },
  { key: "2", label: "История изменений" },
];

const AddOrderPage = () => {
  const { order, orderList } = useSelector((state) => state.orderState);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitOrder = (evt) => {
    evt.preventDefault();
    const validationErrors = validateOrder(order);

    if (Object.keys(validationErrors).length === 0) {
      const obj = {
        orderId: "",
        date: "",
        timer: "",
        status: "new",
        orderType: "order",
        orderTariff: "vip",
        address: "",
        branch: "",
        home: "",
        apartment: "",
        floor: "",
        client: {
          clientType: "vip",
          name: "",
          surname: "",
          phones: [{ phone: "", id: 1, type: "old", desc: "" }],
          description: "",
        },
        products: [
          {
            id: "1",
            title: "Гамбургер",
            price: 20000,
            count: 1,
            desc: "",
          },
        ],
        payment: {
          paymentType: "cash",
          courier: null,
          operator: null,
          deliveryPrice: 10000,
        },
      };
      dispatch(addNewOrder(id));
      dispatch(setOrder(obj));
      navigate("/order");
    } else {
      alert("Iltimos Hamma maydonlarni toldiring!!!");
    }
  };
  useEffect(() => {
    dispatch(setOrderId(id));
    const findObj = orderList.find((order) => order.orderId.toString() === id);
    console.log(findObj);
    if (findObj !== undefined) {
      dispatch(setOrder(findObj));
    }
  }, [id]);

  return (
    <div className="h-screen flex">
      <Aside />
      <form
        onSubmit={handleSubmitOrder}
        className="w-[calc(100%-64px)] h-screen overflow-y-auto"
      >
        <AddOrderHeader id={id} />
        <TabTitles items={tabItems} />
      </form>
    </div>
  );
};

export default AddOrderPage;
