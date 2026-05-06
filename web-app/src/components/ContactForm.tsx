"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import getCompanyName from "@/lib/api/companyName";
import { Checkbox } from "./ui/checkbox";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  nip: string;
  letter: string;
  consent: boolean;
};

const schema = z.object({
  name: z.string().min(1, "Podaj imię i nazwisko"),
  email: z.string().email("Niepoprawny email"),
  phone: z
    .string()
    .min(9, "Numer jest za krótki.")
    .max(9, "Numer jest za długi.")
    .regex(/^[0-9+\s-]+$/, "Niepoprawny numer telefonu"),
  company: z.string().min(1, "Podaj nazwę firmy"),
  nip: z
    .string()
    .regex(/^\d+$/, "NIP może zawierać tylko cyfry")
    .min(10, "NIP musi mieć 10 cyfr")
    .max(10, "NIP musi mieć 10 cyfr"),
  letter: z.string().min(1, "Wpisz wiadomość").max(500, "Za długa wiadomość."),
  consent: z.boolean(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("ok:", data);
  };

  const nip = watch("nip");

  useEffect(() => {
    const fetchData = async () => {
      if (nip?.length === 10) {
        const company = await getCompanyName(nip);
        if (company?.name) {
          setValue("company", company.name, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      }
    };
    fetchData();
  }, [nip, setValue]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-fit group gap-0.5 border-none">
          <p>Wypełnij formularz</p>
          <MdKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white text-primary rounded-4xl p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Napisz do nas
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="input-container">
            <Input
              {...register("name")}
              placeholder="Imię i nazwisko"
              className="bg-primary/5 border border-primary/10 placeholder:text-primary/40 focus:border-accent focus:ring-0"
            />
            {errors.name?.message && (
              <p className="text-error text-sm">{errors.name?.message}</p>
            )}
          </div>

          <div className="input-container">
            <Input
              {...register("email")}
              placeholder="Adres email"
              className="bg-primary/5 border border-primary/10 placeholder:text-primary/40 focus:border-accent focus:ring-0"
            />
            {errors.email?.message && (
              <p className="text-error text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className="input-container">
            <Input
              {...register("phone")}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  "",
                );
              }}
              placeholder="Numer telefonu"
              className="bg-primary/5 border border-primary/10 placeholder:text-primary/40 focus:border-accent focus:ring-0"
            />
            {errors.phone?.message && (
              <p className="text-error text-sm">{errors.phone?.message}</p>
            )}
          </div>
          <div className="input-container">
            <Input
              {...register("nip")}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  "",
                );
              }}
              placeholder="NIP"
              className="bg-primary/5 border border-primary/10 placeholder:text-primary/40 focus:border-accent focus:ring-0"
            />
            {errors.nip?.message && (
              <p className="text-error text-sm">{errors.nip?.message}</p>
            )}
          </div>
          <div className="input-container">
            <Input
              disabled={!nip || nip.length < 10}
              {...register("company")}
              placeholder={
                !nip ? "Najpierw wprowadź NIP" : "Wprowadź nazwę firmy"
              }
              className="bg-primary/5 border border-primary/10 placeholder:text-primary/40 focus:border-accent focus:ring-0"
            />
            {errors.company?.message && (
              <p className="text-error text-sm">{errors.company?.message}</p>
            )}
          </div>
          <div className="input-container">
            <textarea
              {...register("letter")}
              placeholder="Opis sprawy"
              className="h-28 rounded-md bg-primary/5 border border-primary/10 p-3 placeholder:text-primary/40 focus:border-accent focus:ring-0 outline-none resize-none"
            />
            {errors.letter?.message && (
              <p className="text-error text-sm">{errors.letter?.message}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              className={`
    border-gray-300
    data-[state=checked]:bg-accent
    data-[state=checked]:border-accent
    data-[state=checked]:text-white

    ${errors.consent ? "border-red-500" : ""}
  `}
              {...register("consent")}
            />
            <label className="text-xs text-gray-600 leading-snug">
              Wyrażam zgodę na przetwarzanie danych osobowych w celu kontaktu.
            </label>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="bg-accent text-white hover:bg-accent/90 w-max p-4"
            >
              Wyślij
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
