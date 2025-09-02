import { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const InputField = ({
    type,
    label,
    defaultValue,
  }: {
    type: string;
    label: string;
    defaultValue?: string;
  }) => (
    <div className="relative">
      {label ? (
        <span className="block text-[#e46033] text-sm mb-1">{label}</span>
      ) : null}
      <input
        type={type}
        required
        defaultValue={defaultValue}
        className="w-full h-12 bg-transparent border-b-2 border-white/90 text-white outline-none focus:border-[#e46033]"
      />
    </div>
  );

  // corte afinado: mantiene igual el ángulo en ambos estados
  const CUT_TOP = isRegister ? 58 : 66; // % en el borde superior
  const CUT_BOTTOM = 42; // % en el borde inferior

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#25252b]">
      <div className="relative w-[1100px] h-[520px] overflow-hidden border border-[#e46033] shadow-[0_0_35px_#e46033] bg-[#1f2024]">
        {/* ======= ÚNICO SHAPE: PANEL NARANJA ======= */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-[#e46033] via-[#cf542d] to-[#6b2c19] opacity-95 transition-[clip-path] duration-700"
          style={{
            // Login: panel naranja a la derecha (trapecio)
            // Register: panel naranja a la izquierda (trapecio espejado)
            clipPath: isRegister
              ? `polygon(0 0, ${CUT_TOP}% 0, ${
                  100 - CUT_BOTTOM
                }% 100%, 0% 100%)`
              : `polygon(100% 0, 100% 100%, ${CUT_BOTTOM}% 100%, ${CUT_TOP}% 0)`,
          }}
        />

        {/* ======= LOGIN FORM (izquierda) ======= */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center px-16 transition-all duration-700 z-20 ${
            isRegister
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-white text-[40px] font-extrabold text-center mb-10">
            Login
          </h2>

          <div className="max-w-[520px]">
            <InputField
              type="text"
              label="Username"
              defaultValue="aca el texto"
            />
            <div className="mt-6">
              <InputField type="password" label="Password" />
            </div>

            <button
              type="button"
              className="mt-8 h-12 w-[66%] rounded-full border border-[#e46033] text-white font-semibold tracking-wide relative overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1f2024] before:via-[#e46033] before:to-[#1f2024]
                         before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              Login
            </button>

            <p className="text-center text-sm text-white/90 mt-6">
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-[#e46033] font-semibold underline-offset-4 hover:underline"
                onClick={() => setIsRegister(true)}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* ======= LOGIN RIGHT TEXT ======= */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 flex flex-col justify-center pr-16 text-right transition-all duration-700 z-10 ${
            isRegister
              ? "translate-x-full opacity-0 blur-sm"
              : "translate-x-0 opacity-100 blur-0"
          }`}
        >
          <h2 className="text-white text-[44px] font-extrabold uppercase leading-[1.1] mb-6">
            WELCOME
            <br />
            BACK!
          </h2>
          <p className="text-white/90 leading-7 max-w-[520px] ml-auto">
            We are happy to have you with us again. If you need anything, we are
            here to help.
          </p>
        </div>

        {/* ======= REGISTER LEFT TEXT ======= */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center pl-16 text-left transition-all duration-700 z-10 ${
            isRegister
              ? "translate-x-0 opacity-100 blur-0"
              : "-translate-x-full opacity-0 blur-sm"
          }`}
        >
          <h2 className="text-white text-[44px] font-extrabold uppercase leading-[1.1] mb-6">
            WELCOME!
          </h2>
          <p className="text-white/90 leading-7 max-w-[520px]">
            We’re delighted to have you here. If you need any assistance, feel
            free to reach out.
          </p>
        </div>

        {/* ======= REGISTER FORM (derecha) ======= */}
        <div
          className={`absolute top-0 right-0 h-full w-1/2 flex flex-col justify-center transition-all duration-700 z-20 ${
            isRegister
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="w-full pr-20 pl-12">
            <h2 className="text-white text-[40px] font-extrabold text-center mb-10">
              Register
            </h2>

            <div className="max-w-[500px] ml-auto">
              <InputField
                type="text"
                label="Username"
                defaultValue="aca el texto"
              />
              <div className="mt-6">
                <InputField type="email" label="Email" />
              </div>
              <div className="mt-6">
                <InputField type="password" label="Password" />
              </div>

              <button
                type="button"
                className="mt-8 h-12 w-[66%] rounded-full border border-[#e46033] text-white font-semibold tracking-wide relative overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1f2024] before:via-[#e46033] before:to-[#1f2024]
                           before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                Register
              </button>

              <p className="text-center text-sm text-white/90 mt-6">
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-[#e46033] font-semibold underline-offset-4 hover:underline"
                  onClick={() => setIsRegister(false)}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
