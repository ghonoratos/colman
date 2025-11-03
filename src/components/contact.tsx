"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
  policy: boolean;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    defaultValues: {
      policy: true,
    },
  });

  const phoneMask = (value: string): string => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    toast.promise(
      async () => {
        try {
          const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
        } catch (error) {
          console.error(error);
        }
      },
      {
        loading: "Enviando orçamento...",
        success: <b>Orçamento enviado!</b>,
        error: <b>Erro no envio, tente novamente</b>,
      }
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section
      id="contact"
      className="bg-gray-50 py-12 scroll-mt-32 snap-mandatory"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-8 overflow-clip">
          <div className="text-center w-full lg:text-left lg:w-7/12">
            <h2 className="text-3xl md:text-5xl lg:max-w-[70%] mx-auto fade-in-scroll font-bold mb-6 text-gray-700">
              Seu conforto começa com um bom serviço
            </h2>
            <p className="lg:text-lg text-gray-600 slide-left leading-relaxed lg:max-w-[80%]">
              A Colman acredita que todo bom projeto começa com uma boa
              comunicação. Por isso, estamos sempre prontos para ouvir, entender
              e agir com rapidez. Preencha o formulário e fale com nossa equipe:
              seja para um grande projeto hidráulico ou um pequeno reparo, você
              pode contar com atendimento ágil, soluções seguras e um resultado
              de excelência.
            </p>
          </div>
          <div className="w-full lg:w-5/12 bg-white py-12 px-6 slide-right border-zinc-200 rounded-lg shadow-md">
            <h3 className="text-3xl text-gray-700 font-bold leading-tight tracking-tight mb-2">
              Peça já seu orçamento
            </h3>
            <p className="lg:text-lg  font-light text-gray-500 mb-8">
              Entraremos em contato o mais rápido possível
            </p>

            <Toaster />

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-1">
                <label
                  className="font-medium text-gray-600 block"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="border-zinc-100 text-gray-600 border-2 rounded-md py-2 px-4"
                  type="text"
                  {...register("name", { required: "Nome é obrigatório" })}
                  placeholder="João da Silva"
                />
                {errors.name?.message && (
                  <span className="text-red-600">{errors.name?.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="font-medium text-gray-600 block"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="border-zinc-100 text-gray-600 border-2 rounded-md py-2 px-4"
                  type="email"
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Por favor, insira um email válido",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email?.message && (
                  <span className="text-red-600">{errors.email?.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="font-medium text-gray-600 block"
                  htmlFor="name"
                >
                  Telefone/Celular
                </label>
                <input
                  className="border-zinc-100 text-gray-600 border-2 rounded-md py-2 px-4"
                  type="text"
                  {...register("phone", {
                    required: "Telefone é obrigatório",
                  })}
                  onChange={(e) => setValue("phone", phoneMask(e.target.value))}
                  placeholder="(99) 9999-9999"
                  maxLength={15}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="font-medium text-gray-600 block"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="border-zinc-100 text-gray-600 border-2 rounded-md py-2 px-4"
                  {...register("message", { required: true })}
                  placeholder="Escreva sua mensagem aqui"
                />
              </div>
              <label
                className="flex items-center cursor-pointer gap-2 leading-tight"
                htmlFor="policy"
              >
                <Controller
                  name="policy"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="policy"
                      name="policy"
                      className="accent-primary w-[16px] h-[16px]"
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
                <span>
                  Li e aceito os termos da{" "}
                  <Link
                    className="text-primary underline "
                    href="/politica-de-privacidade"
                    target="_blank"
                  >
                    política de privacidade
                  </Link>
                </span>
              </label>
              <button
                className="py-2 px-8 mt-8 self-end flex gap-2 items-center bg-primary text-white rounded-md cursor-pointer"
                type="submit"
              >
                <span>Solicitar orçamento</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
