import React, { useState } from "react";
import { login, signup } from "../apis/userApis";
import useAuthStore from "../store/authStore";
import useSocketStore from "../store/socketStore";

const Login = () => {
    const setUser = useAuthStore((store) => store.setUser);
    const initSocket = useSocketStore((store) => store.initSocket);
    const [info, setInfo] = useState({
        isLogin: true,
        username: "",
        password: "",
        email: "",
        error: "",
        passwordError: "",
        usernameError: "",
        emailError: "",
    });
    const handleInfoChange = (data) => {
        setInfo((prevInfo) => ({ ...prevInfo, ...data }));
    };
    const handleLogin = async () => {
        let passwordError = "";
        let usernameError = "";
        let emailError = "";
        handleInfoChange({
            error: "",
            passwordError: "",
            usernameError: "",
            emailError: "",
        });
        const { username, password, isLogin, email } = info;
        if (username?.trim()?.length < 6) {
            usernameError = "Username must be 6 charecters long";
        }
        if (password?.trim()?.length < 6) {
            passwordError = "password must be 6 charecters long";
        }
        if (!isLogin) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email?.trim() || !emailRegex.test(email)) {
                emailError = "Invalid email";
            }
        }
        if (passwordError || usernameError || emailError) {
            handleInfoChange({ passwordError, usernameError, emailError });
            return;
        }
        let res;
        if (isLogin) {
            res = await login({ username, password });
        } else {
            res = await signup({ username, password, email });
        }
        if (res?.user) {
            setUser({ ...res.user, token: res.token });
            initSocket();
        }
        handleInfoChange({ error: res.message });
    };
    return (
        <div className=" w-[350px] bg-zinc-700 rounded-xl p-5 flex flex-col gap-4">
            <div className="w-full h-[250px] bg-amber-300 rounded-xl overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/1c/dd/2f/1cdd2fe0d9e09d886acb186e0facfc20.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className=" self-center w-fit bg-zinc-500 rounded-2xl p-1 flex justify-center gap-2">
                <input
                    type="radio"
                    name="login-toggle"
                    id="login"
                    className="hidden [&:checked+label]:bg-amber-500"
                    checked={info?.isLogin}
                    onChange={() => handleInfoChange({ isLogin: true })}
                />
                <label
                    htmlFor="login"
                    className="text-sm font-semibold p-1 leading-none rounded-xl text-white cursor-pointer"
                >
                    Login
                </label>
                <input
                    type="radio"
                    name="login-toggle"
                    id="signup"
                    className="hidden [&:checked+label]:bg-amber-500"
                    checked={!info?.isLogin}
                    onChange={() => handleInfoChange({ isLogin: false })}
                />
                <label
                    htmlFor="signup"
                    className="text-sm font-semibold p-1 leading-none rounded-xl text-white cursor-pointer"
                >
                    Signup
                </label>
            </div>
            {info?.error && (
                <p className="text-sm text-center leading-none text-red-400">
                    {info?.error}
                </p>
            )}
            {!info?.isLogin && (
                <div className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        placeholder="Email"
                        value={info?.email}
                        onChange={(e) =>
                            handleInfoChange({ email: e.target.value })
                        }
                        className="w-full h-10 bg-zinc-600 rounded-xl text-white indent-4 focus:outline-none"
                    />
                    {info?.emailError && (
                        <p className="text-sm text-center leading-none text-red-400">
                            {info?.emailError}
                        </p>
                    )}
                </div>
            )}

            <div className="w-full flex flex-col gap-1">
                <input
                    type="text"
                    placeholder="User name"
                    value={info?.username}
                    onChange={(e) =>
                        handleInfoChange({ username: e.target.value })
                    }
                    className="w-full h-10 bg-zinc-600 rounded-xl text-white indent-4 focus:outline-none"
                />
                {info?.usernameError && (
                    <p className="text-sm text-center leading-none text-red-400">
                        {info?.usernameError}
                    </p>
                )}
            </div>

            <div className="w-full flex flex-col gap-1">
                <input
                    type="password"
                    placeholder="Password"
                    value={info?.password}
                    onChange={(e) =>
                        handleInfoChange({ password: e.target.value })
                    }
                    className="w-full h-10 bg-zinc-600 rounded-xl text-white indent-4 focus:outline-none"
                />
                {info?.passwordError && (
                    <p className="text-sm text-center leading-none text-red-400">
                        {info?.passwordError}
                    </p>
                )}
            </div>

            <button
                onClick={handleLogin}
                className="w-full h-10 bg-amber-500 rounded-xl hover:opacity-90 cursor-pointer text-white font-semibold"
            >
                {info?.isLogin ? "Login" : "Signup"}
            </button>
        </div>
    );
};

export default Login;
