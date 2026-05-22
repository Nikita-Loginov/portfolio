"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { contactMessageSchema, ContactMessageInput } from "../../model/schema";

import { useSendContactMessage } from "../../model/useSendContactMessage";

import { Button, Input } from "@/shared";

import scss from "./ContactForm.module.scss";

const defaultValues: ContactMessageInput = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const { isPending, mutate } = useSendContactMessage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: ContactMessageInput) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Заявка успешно отправлена");
        reset(defaultValues);
      },
      onError: () => {
        toast.error("Ошибка отправки заявки");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss["contact-form"]}>
      <div className={scss["contact-form__inputs"]}>
        <Input
          {...register("name")}
          autoComplete="name"
          error={errors.name?.message}
          placeholder="Имя*"
        />

        <Input
          {...register("email")}
          autoComplete="email"
          error={errors.email?.message}
          placeholder="E-mail*"
        />

        <Input
          {...register("message")}
          error={errors.message?.message}
          as="textarea"
          placeholder="Сообщение*"
        />
      </div>

      <div className={scss["contact-form__footer"]}>
        <div className={scss["contact-form__btns"]}>
          <Button typeBtn="submit" disabled={isPending}>
            <p className="p2">{isPending ? "Отправляем..." : "Отправить"}</p>
          </Button>
        </div>
      </div>
    </form>
  );
};
