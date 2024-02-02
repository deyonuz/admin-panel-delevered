import { useState } from "react";
import { Checkbox, Input, TimePicker } from "antd";
import InputMask from "react-input-mask";
import { FaMinus, FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import TitleWithBorderB from "../TitleWithBorderB";
import ShareImg from "../../assets/share-img.png";

const { RangePicker } = TimePicker;

const BranchAbout = () => {
  const days = [
    {
      title: "Понедельник",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Вторник",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Среда",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Четверг",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Пятница",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Суббота",
      isWork: true,
      time: ["09:00", "18:00"],
    },
    {
      title: "Воскрессенье",
      isWork: false,
      time: ["09:00", "18:00"],
    },
  ];
  const [workingDays, setWorkingDays] = useState(days);
  const [phones, setPhones] = useState([
    { id: "1", phone: "+998 (90) 123-45-67", isNew: false },
  ]);



  const handleChangePhones = (value, index) => {
    const newPhones = [...phones];
    newPhones[index].phone = value;
    setPhones([...newPhones]);
  };

  const handledeletePhone = (id) => {
    const filteredPhones = phones.filter((item) => item.id !== id);
    setPhones(filteredPhones);
  };
  const addPhone = () => {
    const newPhone = {
      id: Date.now(),
      phone: "",
      isNew: true,
    };
    setPhones([...phones, newPhone]);
  };

  const handleTimeChange = (timeString, index) => {
    const days = [...workingDays];
    days[index].time = timeString;
    setWorkingDays(days);
  }
  const handleIsWorkChange = (checked, index) => {
    const days = [...workingDays];
    days[index].isWork = checked;
    setWorkingDays(days);
  }

  return (
    <div className="p-[20px] text-[14px]">
      <div className="grid grid-cols-2 gap-x-[20px]">
        <div className="w-full">
          <div className="bg-white rounded-[6px] pb-[16px] pt-[8px]">
            <TitleWithBorderB>Общие сведения</TitleWithBorderB>
            <div className="flex text-[14px] px-[16px] mt-[16px]">
              <div className="w-[144px] pr-[24px]">
                <img
                  src={ShareImg}
                  alt="client-img"
                  className="w-[120px] h-[120px] rounded-full"
                />
                <div className="relative text-center mt-[8px]">
                  <label
                    htmlFor="branchImg"
                    className="cursor-pointer text-[14px] font-medium text-[#4094F7]"
                  >
                    Изменить фото
                  </label>
                  <input
                    name="branchImg"
                    type="file"
                    className="absolute left-0 top-0 invisible"
                    id="branchImg"
                  />
                </div>
              </div>
              <div className="w-[calc(100%-144px)]">
                <div className="flex items-center">
                  <h2 className="w-[112px] text-[#48535B] font-semibold">
                    Название
                  </h2>
                  <div className="w-[calc(100%-112px)]">
                    <Input />
                  </div>
                </div>
                {phones.map(({ id, phone, isNew }, index) => (
                  <div key={id} className="flex items-center mt-[16px]">
                    <h2 className="w-[112px] text-[#48535B] font-semibold">
                      Телефон
                    </h2>
                    <div className="w-[calc(100%-112px)] flex items-center gap-x-[12px]">
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
                        onClick={
                          !isNew ? addPhone : () => handledeletePhone(id)
                        }
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
                <div className="mt-[16px] flex items-center">
                  <h2 className="w-[112px] text-[#48535B] font-semibold">
                    Адрес
                  </h2>
                  <div className="w-[calc(100%-112px)]">
                    <Input />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[20px] bg-white pt-[8px] rounded-[6px]">
            <TitleWithBorderB>Локация</TitleWithBorderB>
            <div className="p-[16px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.8398702582!2d69.11455388143591!3d41.2827379466668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1706656442644!5m2!1suz!2s"
                width="100%"
                height="240"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full pt-[8px] bg-white rounded-[6px]">
          <TitleWithBorderB>График работы</TitleWithBorderB>
          {workingDays.map(({ isWork, time, title }, index) => (
            <div key={index} className="px-[16px] mt-[16px] flex items-center">
              <h2 className="w-[112px] text-[#48535B] font-semibold">
                {title}
              </h2>
              <div className="w-[calc(100%-128px)] px-[16px]">
                <RangePicker
                  onChange={(_, timeString) =>
                    handleTimeChange(timeString, index)
                  }
                  format={"HH:mm"}
                  className="w-full"
                  value={[dayjs(time[0], "hh:mm"), dayjs(time[1], "hh:mm")]}
                  disabled={!isWork}
                />
              </div>
              <Checkbox
                onChange={(evt) => handleIsWorkChange(evt.target.checked, index)}
                className="ml-auto"
                checked={isWork}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchAbout;
