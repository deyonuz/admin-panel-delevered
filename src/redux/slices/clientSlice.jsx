import { createSlice } from "@reduxjs/toolkit";

const clientsList = [];
for (let i = 1; i < 10; i++) {
  clientsList.push({
    id: i,
    clientName: "Bobur" + i,
    clientSurname: "Toshov" + i,
    phones: [{ id: "1", phone: "+998 (93) 949-10-11", isNew: false }],
    typeClient: "vip",
    orders: {
      currentOrders: [],
      historyOrders: [],
    },
  });
}

const initialState = {
  clientsList,
  client: {
    clientName: "",
    clientSurname: "",
    phones: [{ id: "1", phone: "", isNew: false }],
    typeClient: "vip",
    orders: {
      currentOrders: [],
      historyOrders: [],
    },
  },
};

export const clientSlice = createSlice({
  name: "clientState",
  initialState,
  reducers: {
    setClient: (state, { payload }) => {
      state.client = payload;
    },
    setClientFullName: (state, { payload }) => {
      state.client[payload.name] = payload.value;
    },
    addNewPhone: (state, { payload }) => {
      const newPhone = {
        id: Date.now(),
        phone: "",
        isNew: true,
      };
      state.client.phones.push(newPhone);
    },
    changeClientPhone: (state, { payload }) => {
      state.client.phones[payload.index].phone = payload.value;
    },
    deletePhone: (state, { payload }) => {
      const filteredPhones = state.client.phones.filter(
        ({ id }) => id !== payload
      );
      state.client.phones = filteredPhones;
    },
    setTypeClient: (state, { payload }) => {
      state.client.typeClient = payload;
    },
  },
});

export const {
  setClientFullName,
  setTypeClient,
  changeClientPhone,
  addNewPhone,
  deletePhone,
  setClient,
} = clientSlice.actions;
export default clientSlice.reducer;
