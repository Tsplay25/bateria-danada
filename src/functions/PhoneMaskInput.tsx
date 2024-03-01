"use client";

import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
// @ts-ignore
import InputMask from "react-input-mask";

interface PhoneMaskProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneMaskInput({ value, onChange }: PhoneMaskProps) {
  const { register } = useFormContext();

  const handlePhoneChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  };

  return (
    <InputMask
      {...register("phone", { required: "Você precisa digitar seu telefone" })}
      mask="(99) 99999-9999"
      placeholder="(99) 99999-9999"
      maskChar="_"
      value={value}
      onChange={handlePhoneChange}
      className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2"
    />
  );
}
