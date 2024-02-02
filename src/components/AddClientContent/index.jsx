import { Input, Select } from "antd";
import InputMask from "react-input-mask";
import TitleWithBorderB from "../TitleWithBorderB";
import ClientImg from "../../assets/client-img.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeClientPhone, setClientFullName, addNewPhone, deletePhone, setTypeClient } from "../../redux/slices/clientSlice";

const AddClientContent = () => {
  const { id } = useParams();
  const {clientName, typeClient, clientSurname, phones} = useSelector(state => state.clientState.client);
  const dispatch = useDispatch();



  const handleChangeFullName = (evt) => {
    const fullName = {
      name: evt.target.name,
      value: evt.target.value,
    };
    dispatch(setClientFullName(fullName));
  }

  const handleChangePhones = (value, index) => {
    dispatch(changeClientPhone({value, index}));
  };

  const handledeletePhone = (id) => {
    dispatch(deletePhone(id));
  };
  const addPhone = () => {
    dispatch(addNewPhone());
  };

  return (
    <div className="text-[14px] bg-white pt-[8px] rounded-[6px] mt-[20px]">
      <TitleWithBorderB>Клиент</TitleWithBorderB>
      <div className="p-[16px] flex">
        <div className="w-[144px] pr-[24px]">
          <img
            src={ClientImg}
            alt="client-img"
            className="w-[120px] h-[120px] rounded-full"
          />
          <div className="relative text-center mt-[8px]">
            <label
              htmlFor="client-img"
              className="cursor-pointer text-[14px] font-medium text-[#4094F7]"
            >
              Изменить фото
            </label>
            <input
              name="clientImg"
              type="file"
              className="absolute left-0 top-0 invisible"
              id="client-img"
            />
          </div>
        </div>
        <div className="w-[calc(100%-144px)]">
          <div className="w-full flex items-center mb-[16px]">
            <h2 className="w-[15%] font-semibold">Имя</h2>
            <div className="w-[85%] pl-[24px]">
              <Input
                value={clientName}
                onChange={handleChangeFullName}
                name="clientName"
              />
            </div>
          </div>
          <div className="w-full flex items-center mb-[16px]">
            <h2 className="w-[15%] font-semibold">Фамилия</h2>
            <div className="w-[85%] pl-[24px]">
              <Input
                value={clientSurname}
                onChange={handleChangeFullName}
                name="clientSurname"
              />
            </div>
          </div>
          <div className="w-full">
            {phones.map(({ id, phone, isNew }, index) => (
              <div className="flex items-center mb-[16px]" key={id}>
                <h2 className="w-[15%] font-semibold">Телефон</h2>
                <div className="w-[85%] items-center gap-x-[16px] flex pl-[24px]">
                  <InputMask
                    className="w-full outline-none focus-within:border-[#1677ff] h-[32px] pl-[12px] border border-[#d9d9d9] rounded-[6px]"
                    value={phone}
                    mask={"+\\9\\98 (99) 999-99-99"}
                    onChange={(evt) =>
                      handleChangePhones(evt.target.value, index)
                    }
                  />
                  <button
                    type="button"
                    onClick={!isNew ? addPhone : () => handledeletePhone(id)}
                    className="flex items-center justify-center rounded-[6px] h-[32px] bg-[#4094F71A] w-[32px]"
                  >
                    {!isNew ? (
                      <FaPlus className="text-[#4094F7]" />
                    ) : (
                      <FaMinus className="text-[red]" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center mb-[16px]">
            <h2 className="w-[15%] font-semibold">Тип клиента</h2>
            <div className="w-[85%] pl-[24px]">
              <Select
                className="w-full bg-white-select"
                value={typeClient}
                onChange={varl => dispatch(setTypeClient(val))}
                options={[{ label: "VIP", value: "vip" }]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientContent;
