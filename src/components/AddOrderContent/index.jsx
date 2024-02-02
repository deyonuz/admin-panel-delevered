import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Select } from "antd";
import InputMask from "react-input-mask";
import { PiXBold } from "react-icons/pi";
import { FaEquals, FaMinus, FaPlus } from "react-icons/fa6";
import { TbSum } from "react-icons/tb";
import { MdMonetizationOn, MdDirectionsCarFilled } from "react-icons/md";
import TitleWithBorderB from "../TitleWithBorderB";
import BankImg from "../../assets/bank.svg";
import PaymeImg from "../../assets/payme.svg";
import ClickImg from "../../assets/click.svg";
import CashImg from "../../assets/cash.svg";
import {
  addNewPhone,
  setClientName,
  deletePhone,
  setClientSurName,
  setClientType,
  setPhoneChanges,
  setClientDesc,
  setProductTitle,
  incrementProductCount,
  decrementProductCount,
  setProductDesc,
  addNewproduct,
  deleteProduct,
  setPaymentType,
  setCourier,
  setOperator,
  setOrderType,
  setOrderTarif,
  setOrderData,
  setOrder,
} from "../../redux/slices/orderSlice";

const paymentTypes = [
  { Img: <img src={CashImg} />, title: "cash" },
  { Img: <img src={PaymeImg} />, title: "payme" },
  { Img: <img src={ClickImg} />, title: "click" },
  { Img: <img src={BankImg} />, title: "bank" },
];

const fastFoodList = [
  { label: "Гамбургер", value: "Гамбургер", price: 20000 },
  { label: "Чизбургер", value: "Чизбургер", price: 22000 },
  { label: "Картошка фри", value: "Картошка фри", price: 10000 },
  { label: "Чикен-наггетс", value: "Чикен-наггетс", price: 15000 },
  {
    label: "Картошка по-деревенски",
    value: "Картошка по-деревенски",
    price: 25000,
  },
  { label: "Биг Мак", value: "Биг Мак", price: 25000 },
  { label: "Фиш-рояль", value: "Фиш-рояль", price: 20000 },
  { label: "Чикен-бургер", value: "Чикен-бургер", price: 20000 },
  { label: "Твистер", value: "Твистер", price: 20000 },
  { label: "Пицца", value: "Пицца", price: 20000 },
  { label: "Шаурма", value: "Шаурма", price: 20000 },
  { label: "Хот-дог", value: "Хот-дог", price: 20000 },
  { label: "Тендерс", value: "Тендерс", price: 20000 },
  { label: "Куриные крылья", value: "Куриные крылья", price: 20000 },
  { label: "Такос", value: "Такос", price: 20000 },
];

const AddOrderContent = () => {
  const {
    client,
    orderId,
    products,
    payment,
    orderType,
    orderTariff,
    address,
    branch,
    home,
    apartment,
    floor,
  } = useSelector((state) => state.orderState.order);
  const { orderList } = useSelector((state) => state.orderState);

  const { clientType, name, surname, phones, description } = client;

  const dispatch = useDispatch();

  const { paymentType, courier, operator, deliveryPrice } = payment;

  const addPhone = () => {
    dispatch(addNewPhone());
  };
  const handlePhoneChange = (value, index) => {
    dispatch(setPhoneChanges({ index, value }));
  };
  const handledeletePhone = (id) => {
    dispatch(deletePhone(id));
  };

  const handleChangeProductTitle = (val, index) => {
    const findedProduct = fastFoodList.find((item) => item.value === val);
    dispatch(setProductTitle({ index, ...findedProduct }));
  };
  const handleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };
  const incrementCount = (index) => {
    dispatch(incrementProductCount(index));
  };
  const decrementCount = (index) => {
    dispatch(decrementProductCount(index));
  };

  const handleChangeDesc = (value, index) => {
    dispatch(setProductDesc({ value, index }));
  };

  const addProduct = () => {
    dispatch(addNewproduct());
  };

  const isDisabledAddProductsBtn = products.every(
    (product) => product.desc !== ""
  );

  const AllPrice = products.reduce((sum, product) => {
    return sum + product.count * product.price;
  }, 0);
  const handleChangeOrderData = (evt) => {
    const orderData = { name: evt.target.name, value: evt.target.value };
    dispatch(setOrderData(orderData));
  };

  return (
    <div className="px-[16px] mb-[41px] pt-[20px] font-inter">
      <div className="grid grid-cols-2 gap-x-[20px]">
        <div className="w-full bg-white rounded-[6px] pt-[8px]">
          <TitleWithBorderB>Клиент</TitleWithBorderB>
          <div className="p-[16px]">
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">
                Тип клиента
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Select
                  options={[
                    { value: "", label: "Тип клиента" },
                    { value: "vip", label: "VIP" },
                  ]}
                  style={{ width: "100%" }}
                  className="bg-white-select"
                  value={clientType}
                  onChange={(val) => dispatch(setClientType(val))}
                />
              </div>
            </div>
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">Имя</h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  placeholder="Введите имя"
                  value={name}
                  onChange={(evt) => dispatch(setClientName(evt.target.value))}
                />
              </div>
            </div>
            <div className="mb-[20px] items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">Фамилия</h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  placeholder="Фамилия"
                  value={surname}
                  onChange={(evt) =>
                    dispatch(setClientSurName(evt.target.value))
                  }
                />
              </div>
            </div>
            {phones.map(({ phone, id, type }, index) => (
              <div
                className="flex mb-[20px] items-center gap-x-[16px]"
                key={id}
              >
                <h2 className="w-[96px] font-semibold text-[#48535B]">
                  Телефон
                </h2>
                <div className="w-[calc(100%-128px)]">
                  <InputMask
                    mask={"+\\9\\98 (99) 999-99-99"}
                    className="w-full outline-none focus-within:border-[#1677ff] h-[32px] pl-[12px] border border-[#d9d9d9] rounded-[6px]"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(evt) =>
                      handlePhoneChange(evt.target.value, index)
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={
                    type === "old" ? addPhone : () => handledeletePhone(id)
                  }
                  className="flex items-center justify-center rounded-[6px] h-[32px] bg-[#4094F71A] w-[32px]"
                >
                  {type === "old" ? (
                    <FaPlus className="text-[#4094F7]" />
                  ) : (
                    <FaMinus className="text-[red]" />
                  )}
                </button>
              </div>
            ))}
            <div className="items-center flex gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[#48535B]">
                Описание
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  placeholder="Описание"
                  value={description}
                  onChange={(evt) => dispatch(setClientDesc(evt.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[6px] pt-[8px]">
          <TitleWithBorderB>Доставка</TitleWithBorderB>
          <div className="p-[16px]">
            <div className="flex  gap-x-[24px]">
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                  Тип доставки
                </h2>
                <div className="w-[calc(100%-96px)] pl-[16px]">
                  <Select
                    className="bg-white-select"
                    style={{ width: "100%" }}
                    placeholder={"Тип доставки"}
                    options={[
                      { label: "Доставка", value: "order" },
                      { label: "VIP", value: "vip" },
                    ]}
                    onChange={(val) => dispatch(setOrderType(val))}
                    value={orderType}
                  />
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[#48535B]">Тариф</h2>
                <div className="w-[calc(100%-96px)]">
                  <Select
                    className="bg-white-select"
                    style={{ width: "100%" }}
                    placeholder={"Тариф"}
                    options={[
                      { label: "VIP", value: "vip" },
                      { label: "Normal", value: "normal" },
                    ]}
                    onChange={(val) => dispatch(setOrderTarif(val))}
                    value={orderTariff}
                  />
                </div>
              </div>
            </div>
            <div className="flex my-[16px] items-center gap-x-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Адрес
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  name="address"
                  value={address}
                  onChange={handleChangeOrderData}
                  placeholder="Адрес или обьект"
                />
              </div>
            </div>
            <div className="w-full h-[289px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10678.547694123168!2d69.25191440429185!3d41.31830179035486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0054fc3f19%3A0x3ec7893532dc8339!2sObshchezhitiye%20Konservatorii!5e0!3m2!1suz!2s!4v1706192357931!5m2!1suz!2s"
                width={"100%"}
                height="289"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center gap-x-[16px] my-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Филиал
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  name="branch"
                  value={branch}
                  onChange={handleChangeOrderData}
                  placeholder="Филиал"
                />
              </div>
            </div>
            <div className="flex  gap-x-[24px]">
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                  Дом
                </h2>
                <div className="w-[calc(100%-96px)] pl-[16px]">
                  <Input
                    name="home"
                    value={home}
                    onChange={handleChangeOrderData}
                    placeholder="Дом"
                  />
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <h2 className="w-[96px] font-semibold text-[#48535B]">
                  Квартира
                </h2>
                <div className="w-[calc(100%-96px)]">
                  <Input
                    name="apartment"
                    value={apartment}
                    onChange={handleChangeOrderData}
                    placeholder="Квартира"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-[16px] mt-[16px]">
              <h2 className="w-[96px] font-semibold text-[14px] text-[#48535B]">
                Этаж
              </h2>
              <div className="w-[calc(100%-96px)]">
                <Input
                  name="floor"
                  value={floor}
                  onChange={handleChangeOrderData}
                  placeholder="Этаж"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] pt-[8px] border-b bg-white rounded-[6px]">
        <TitleWithBorderB>Продукты</TitleWithBorderB>
        {products.map((item, index) => (
          <div className="p-[16px]" key={item.id}>
            <div className="flex gap-x-[12px] items-center">
              <div className="w-[25%]">
                <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                  Наименование
                </h2>
                <Select
                  className="bg-white-select"
                  style={{ width: "100%" }}
                  value={item.title}
                  options={fastFoodList}
                  onChange={(val) => handleChangeProductTitle(val, index)}
                />
              </div>
              <div className="w-[45%]  flex items-center">
                <div className="w-[30%] pr-[12px]">
                  <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                    Цена
                  </h2>
                  <Input value={`${item.price} сум`} />
                </div>
                <div className="w-[40%] flex ">
                  <PiXBold className="self-center mt-[25px] mr-[12px] text-[20px] text-[#4094F7]" />
                  <div className="">
                    <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                      Кол-во
                    </h2>
                    <div className="flex items-center rounded-lg border border-[#d9d9d9]">
                      <button
                        onClick={() => decrementCount(index)}
                        type="button"
                        className="h-[32px] w-[32px] flex items-center justify-center border-r border-l-[#d9d9d9] text-[#4094F7]"
                      >
                        <FaMinus />
                      </button>
                      <button type="button" className="h-[32px] w-[64px]">
                        {item.count}
                      </button>
                      <button
                        onClick={() => incrementCount(index)}
                        type="button"
                        className="h-[32px] w-[32px] flex items-center justify-center border-l border-l-[#d9d9d9] text-[#4094F7]"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <FaEquals className="ml-[12px] text-[20px] text-[#4094F7] self-center mt-[23px]" />
                </div>
                <div className="w-[30%]">
                  <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                    Общая стоимость
                  </h2>
                  <Input value={item.price * item.count + " сум"} />
                </div>
              </div>
              <div className="w-[30%]">
                <h2 className="mb-[4px] font-semibold text-[14px] text-[#48535B]">
                  Описание
                </h2>
                <div className="flex items-center">
                  <div className="w-[calc(100%-32px)] pr-[12px]">
                    <Input
                      value={item.desc}
                      onChange={(evt) =>
                        handleChangeDesc(evt.target.value, index)
                      }
                    />
                  </div>
                  {item.id !== "1" && (
                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      type="button"
                      className="flex items-center rounded-lg bg-[#F766591A] text-[#F76659] justify-center h-[32px] w-[32px]"
                    >
                      <PiXBold />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="px-[16px]">
          <button
            type="button"
            disabled={!isDisabledAddProductsBtn}
            onClick={addProduct}
            className=" w-full rounded-lg block border bg-[rgba(64,148,247,0.10)] disabled:border-dashed text-[#4094F7] disabled:text-[#6E8BB7] flex items-center justify-center disabled:border-[#6E8BB780] py-[8px] disabled:bg-[#6E8BB71A]"
          >
            <FaPlus />
            <span className="ml-[10px]">Добавить продукт</span>
          </button>
        </div>
        <div className="mt-[16px] grid grid-cols-2">
          <div className="w-full border-r">
            <div className="flex px-[16px] items-center gap-x-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Типы оплаты
              </h2>
              {paymentTypes.map(({ Img, title }, index) => (
                <label
                  htmlFor={title}
                  key={index}
                  className={`relative cursor-pointer rounded-xl w-1/5 border ${
                    paymentType === title
                      ? "bg-[rgba(64,148,247,0.10)] border-[#4094F7]"
                      : "bg-[#F7F9FB]"
                  } flex items-center justify-center h-[40px]`}
                >
                  <input
                    onChange={(evt) =>
                      dispatch(setPaymentType(evt.target.value))
                    }
                    value={title}
                    className="payment-type-radio left-0 top-0 absolute invisible opacity-0"
                    type="radio"
                    name="payment-type"
                    id={title}
                  />
                  {Img}
                </label>
              ))}
            </div>
            <div className="flex items-center px-[16px] my-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Курьер
              </h2>
              <div className="w-4/5">
                <Select
                  className="bg-white-select w-full"
                  placeholder={"Курьер"}
                  options={[{ label: "Anvar Anvarov", value: "Anvar Anvarov" }]}
                  onChange={(val) => dispatch(setCourier(val))}
                  value={courier}
                />
              </div>
            </div>
            <div className="flex items-center px-[16px] mb-[16px]">
              <h2 className="w-1/5 font-semibold text-[14px] text-[#48535B]">
                Оператор
              </h2>
              <div className="w-4/5">
                <Select
                  className="bg-white-select w-full"
                  placeholder={"Оператор"}
                  options={[{ label: "Anvar Anvarov", value: "Anvar Anvarov" }]}
                  onChange={(val) => dispatch(setOperator(val))}
                  value={operator}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-[16px]">
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] font-semibold border-b pb-[20px]">
              <div className="w-full flex items-center">
                <MdMonetizationOn className="text-[24px] text-[#4094F7]" />
                <span className="text-[#84919A] font-normal ml-[12px]">
                  Сумма заказа
                </span>
              </div>
              <div className="w-full text-[#303940]">{AllPrice}</div>
              <div className="w-full flex items-center">
                <MdDirectionsCarFilled className="text-[24px] text-[#4094F7] " />
                <span className="text-[#84919A] font-normal ml-[12px]">
                  Сумма доставки
                </span>
              </div>
              <div className="w-full">{deliveryPrice + " сум"}</div>
            </div>
            <div className="grid mt-[20px] text-[#303940] grid-cols-2 gap-x-[32px] gap-y-[16px] font-semibold pb-[20px]">
              <div className="w-full flex items-center">
                <TbSum className="text-[24px] text-[#4094F7]" />
                <span className="ml-[12px]">Сумма заказа</span>
              </div>
              <div className="w-full">{deliveryPrice + AllPrice} сум</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderContent;
