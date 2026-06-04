"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import toast from "react-hot-toast";

import { Input, Button, Check } from "@/shared";

import {
  BUDGET_OPTIONS,
  DEADLINE_OPTIONS,
  ProjectMessageInput,
  projectMessageSchema,
} from "../../model/schema";

import { useModalStore } from "@/shared/store/modal/modal.store";

import { useSendProjectMessage } from "../../model/useSendProjectMessage";

import scss from "./ProjectForm.module.scss";

const defaultValues: ProjectMessageInput = {
  name: "",
  email: "",
  message: "",
  deadline: null,
  budget: null,
};

export const ProjectForm = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProjectMessageInput>({
    resolver: zodResolver(projectMessageSchema),
    defaultValues: defaultValues,
  });

  const { isPending, mutate } = useSendProjectMessage();

  const selectedDeadline = watch("deadline");
  const selectedBudget = watch("budget");

  const { close } = useModalStore();

  const onSubmit = async (data: ProjectMessageInput) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Заявка успешно отправлена");
        reset(defaultValues);
        close()
      },
      onError: () => {
        toast.error("Ошибка отправки заявки");
      },
    });
  };

  

  return (
    <form className={scss["project-form"]} onSubmit={handleSubmit(onSubmit)}>
      <div className={scss["project-form__top"]}>
        <p className="h3">Готовы начать? Свяжитесь со мной.</p>
      </div>

      <div className={scss["project-form__items"]}>
        <div className={scss["project-form__inputs"]}>
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
            placeholder="Расскажите о вашем проекте*"
          />
        </div>

        <div className={scss["project-form__item"]}>
          <p className="p2">Сроки (не обязательно)</p>

          <div className={scss["project-form__checks"]}>
            {DEADLINE_OPTIONS.map((option) => (
              <Check
                key={option}
                label={option}
                name="deadline"
                type="radio"
                checked={selectedDeadline === option}
                onChange={(checked) => checked && setValue("deadline", option)}
              />
            ))}
          </div>

          {errors.deadline && (
            <p className={classNames("p2", scss["project-form__error"])}>
              {errors.deadline.message}
            </p>
          )}
        </div>

        <div className={scss["project-form__item"]}>
          <p className="p2">Бюджет (не обязательно)</p>

          <div className={scss["project-form__checks"]}>
            {BUDGET_OPTIONS.map((option) => (
              <Check
                key={option}
                label={option}
                name="budget"
                type="radio"
                checked={selectedBudget === option}
                onChange={(checked) => checked && setValue("budget", option)}
              />
            ))}
          </div>

          {errors.budget && (
            <p className={classNames("p2", scss["project-form__error"])}>
              {errors.budget.message}
            </p>
          )}
        </div>
      </div>

      <div className={scss["project-form__footer"]}>
        <div className={scss["project-form__btns"]}>
          <Button typeBtn="submit" disabled={isPending}>
            <p className="p2">{isPending ? "Отправляем..." : "Отправить"}</p>
          </Button>
        </div>
      </div>
    </form>
  );
};
