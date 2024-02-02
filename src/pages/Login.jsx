import { useState } from "react";
import UserIcon from "../assets/User.svg";
import LockIcon from "../assets/lock.svg";
import EyeIcon from "../assets/Eye.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ userName: "", userPassword: "" });
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (user.userName && user.userPassword) {
      if (user.userName === "admin" && user.userPassword === "admin") {
        navigate("/dashboard");
      } else {
        alert("parol yoki login xato!");
      }
    } else {
      alert("Iltimos formni to'ldiring");
    }
  };
  const handleChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="w-full flex">
      <div className="w-1/2 px-[41px] login-bg h-screen">
        <h1 className="mt-[43px] mb-[132px] text-white text-[32px] font-extrabold tracking-[1.6px]">
          Delever
        </h1>
      </div>
      <div className="w-1/2 px-[64px] pb-[25px] pt-[86px] flex flex-col">
        <h2 className="text-[#001A49] text-[36px] font-bold leading-[48px] tracking-[-0.792px]">
          Вход в платформу
        </h2>

        {/* ------ Login form -----  */}

        <form method="POST" className="mt-[40px]" onSubmit={handleSubmit}>
          <label
            htmlFor="userName"
            className="text-[#1A2024] font-semibold inline-block mb-[8px]"
          >
            Имя пользователья<span className="text-[#F76659]">* </span>
          </label>
          <div className="relative flex items-center">
            <input
              id="userName"
              name="userName"
              onChange={handleChange}
              value={user.userName}
              required
              type="text"
              className="w-full text-black text-[14px] p-[12px] pl-[48px] rounded-[8px] border border-[#6E8BB74D]"
            />
            <img
              src={UserIcon}
              alt="usericon"
              className="absolute left-[12px]"
            />
          </div>
          <label
            htmlFor="userPassword"
            className="text-[#1A2024] font-semibold inline-block mt-[16px] mb-[8px]"
          >
            Пароль<span className="text-[#F76659]"> *</span>
          </label>
          <div className="relative flex items-center">
            <input
              id="userPassword"
              name="userPassword"
              onChange={handleChange}
              value={user.userPassword}
              required
              type="password"
              className="w-full text-black text-[14px] p-[12px] pl-[48px] rounded-[8px] border border-[#6E8BB74D]"
            />
            <img src={LockIcon} alt="lock" className="absolute left-[12px]" />
            <img
              src={EyeIcon}
              alt="eye"
              className="absolute right-[12px] cursor-pointer"
            />
          </div>
          <div className="mt-[24px] flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-[16px] h-[16px] mr-[16px]"
            />
            <label htmlFor="remember" className="text-[#6E8BB7] font-medium">
              Запомнить меня
            </label>
          </div>
          <button
            type="submit"
            className="w-full block p-[12px] text-white bg-[#0067F4] mt-[40px] font-semibold rounded-[8px]"
          >
            Войти
          </button>
        </form>
        <div className="mt-auto text-[#6E8BB7] font-medium">
          Copyright ©Delever. Все права защищены
        </div>
      </div>
    </div>
  );
};

export default Login;
