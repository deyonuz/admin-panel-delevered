import { createSlice } from "@reduxjs/toolkit";

const data = [];
for (let i = 1; i < 146; i++) {
  data.push({
    orderId: i,
    allPrice: 20000,
    date: i,
    timer: "02:00",
    status: "new",
    orderType: "order",
    orderTariff: "vip",
    address: "yunusabad",
    branch: "yunusabad",
    home: "2",
    apartment: "56",
    floor: "6",
    client: {
      clientType: "vip",
      name: "Anvarjon",
      surname: "Soliyev",
      phones: [{ phone: "+998 (93) 949-44-11", id: 1, type: "old", desc: "" }],
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
      courier: "Anvar",
      operator: "Bobur",
      deliveryPrice: 10000,
    },
  });
}

const initialState = {
  order: {
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
  },
  columnsStatus: {
    num: true,
    client: true,
    orderId: true,
    timer: true,
    courier: true,
    branch: true,
    orderType: true,
    orderPrice: true,
    status: true,
  },
  activeOrderTabItem: "all",
  orderList: data,
  filteredOrderList: data,
  isOpenMenu: true,
  isOpenSettingsMenu: true,
};

export const orderSlice = createSlice({
  name: "orderState",
  initialState,
  reducers: {
    setDateOrderCreatedAt: (state, { payload }) => {
      state.order.date = payload;
    },
    setStatusOrder: (state, { payload }) => {
      state.order.status = payload;
    },
    setOrderId: (state, { payload }) => {
      state.order.orderId = payload;
    },
    setTimerOrder: (state, { payload }) => {
      state.order.timer = payload;
    },
    setOrderType: (state, { payload }) => {
      state.order.orderType = payload;
    },
    setOrderTarif: (state, { payload }) => {
      state.order.orderTariff = payload;
    },
    setClientType: (state, { payload }) => {
      state.order.client.clientType = payload;
    },
    setClientName: (state, { payload }) => {
      state.order.client.name = payload;
    },
    setClientSurName: (state, { payload }) => {
      state.order.client.surname = payload;
    },
    setClientDesc: (state, { payload }) => {
      state.order.client.description = payload;
    },
    setPhoneChanges: (state, { payload: { value, index } }) => {
      state.order.client.phones[index].phone = value;
    },
    addNewPhone: (state) => {
      const newPhone = { phone: "", id: Date.now(), type: "new" };
      state.order.client.phones.push(newPhone);
    },
    deletePhone: (state, { payload }) => {
      const newPhones = state.order.client.phones.filter(
        (item) => item.id !== payload
      );
      state.order.client.phones = newPhones;
    },
    setProductTitle: (state, { payload: { index, value, price } }) => {
      state.order.products[index].title = value;
      state.order.products[index].price = price;
    },
    incrementProductCount: (state, { payload }) => {
      state.order.products[payload].count += 1;
    },
    decrementProductCount: (state, { payload }) => {
      if (state.order.products[payload].count > 1) {
        state.order.products[payload].count -= 1;
      }
    },
    deleteProduct: (state, { payload }) => {
      const filteredProducts = state.order.products.filter(
        (item) => item.id !== payload
      );
      state.order.products = filteredProducts;
    },
    setProductDesc: (state, { payload: { index, value } }) => {
      state.order.products[index].desc = value;
    },
    addNewproduct: (state) => {
      const newProduct = {
        id: Date.now(),
        title: "Гамбургер",
        price: 20000,
        count: 1,
        desc: "",
      };
      state.order.products.push(newProduct);
    },
    setPaymentType: (state, { payload }) => {
      state.order.payment.paymentType = payload;
    },
    setCourier: (state, { payload }) => {
      state.order.payment.courier = payload;
    },
    setOperator: (state, { payload }) => {
      state.order.payment.operator = payload;
    },
    setOrderData: (state, { payload: { name, value } }) => {
      state.order[name] = value;
    },
    addNewOrder: (state, { payload }) => {
      const newOrder = {
        ...state.order,
        allPrice:
          state.order.products.reduce((sum, product) => {
            return sum + product.count * product.price;
          }, 0) + state.order.payment.deliveryPrice,
      };
      const orderIndex = state.orderList.findIndex(
        ({ orderId }) => orderId.toString() === payload
      );
      if (orderIndex !== -1) {
        state.orderList[orderIndex] = newOrder;
      } else {
        state.orderList.push(newOrder);
      }
    },
    setOrder: (state, { payload }) => {
      state.order = payload;
    },
    setFilteredOrderList: (state, { payload }) => {
      const newOrderList =
        payload === "all"
          ? state.orderList
          : state.orderList.filter(({ status }) => status === payload);
      state.filteredOrderList = newOrderList;
    },
    setActiveOrderTabItem: (state, { payload }) => {
      state.activeOrderTabItem = payload;
    },
    searchOrderItems: (state, { payload }) => {
      const searchedItems = state.orderList.filter(
        ({ payment, client, orderId }) =>
          payment.courier.toLowerCase().includes(payload.toLowerCase()) ||
          orderId.toString().toLowerCase().includes(payload.toLowerCase()) ||
          client.name.toLowerCase().includes(payload.toLowerCase()) ||
          client.surname.toLowerCase().includes(payload.toLowerCase())
      );
      state.filteredOrderList = searchedItems;
    },
    setIsOpenMenu: (state, { payload }) => {
      state.isOpenMenu = payload;
    },
    setIsOpenSettingsMenu: (state, { payload }) => {
      state.isOpenSettingsMenu = payload;
    },
  },
});

export const {
  setDateOrderCreatedAt,
  setStatusOrder,
  setTimerOrder,
  setClientType,
  setClientName,
  setClientSurName,
  setPhoneChanges,
  addNewPhone,
  deletePhone,
  setClientDesc,
  setProductTitle,
  incrementProductCount,
  decrementProductCount,
  deleteProduct,
  setProductDesc,
  addNewproduct,
  setPaymentType,
  setCourier,
  setOperator,
  setOrderTarif,
  setOrderType,
  setOrderData,
  addNewOrder,
  setOrderId,
  setOrder,
  setFilteredOrderList,
  setActiveOrderTabItem,
  searchOrderItems,
  setIsOpenMenu,
  setIsOpenSettingsMenu,
} = orderSlice.actions;

export default orderSlice.reducer;
