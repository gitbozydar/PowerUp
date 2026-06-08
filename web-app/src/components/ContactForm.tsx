"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { useEffect, useState } from "react";
import getCompanyName from "@/lib/companyName";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  nip: string;
  letter: string;
  invoice: File[];
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
  invoice: z
    .array(z.instanceof(File))
    .min(1, "Dodaj przynajmniej jedną fakturę")
    .max(10, "Możesz dodać maksymalnie 10 plików")
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      "Każdy plik może mieć maksymalnie 5MB",
    )
    .refine(
      (files) =>
        files.every((file) =>
          ["application/pdf", "image/jpeg", "image/png"].includes(file.type),
        ),
      "Dozwolone: PDF, JPG, PNG",
    ),
  consent: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę",
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      invoice: [],
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setLoading(true);
    try {
      toast.success("Formularz został przesłany pomyślnie.", {
        position: "bottom-right",
        classNames: {
          toast:
            "!bg-primary/70 !text-white !backdrop-blur-lg !border-primary !rounded-full !font-primary",
          icon: "!text-success",
          title: "!font-bold",
        },
      });
      reset();
      setFiles([]);
      null;
    } catch (error) {
      toast.error("Wystąpił błąd.", {
        position: "bottom-right",
        classNames: {
          toast:
            "!bg-primary/70 !text-white !backdrop-blur-lg !border-primary !rounded-full !font-primary",
          icon: "!text-error",
          title: "!font-bold",
        },
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const nip = watch("nip");
  const consent = watch("consent");

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
    <Dialog open={open} onOpenChange={setOpen}>
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

        <DialogDescription className="sr-only">
          Formularz kontaktowy
        </DialogDescription>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="input-container">
            <Input {...register("name")} placeholder="Imię i nazwisko" />
            {errors.name?.message && (
              <p className="text-error text-sm">{errors.name?.message}</p>
            )}
          </div>

          <div className="input-container">
            <Input {...register("email")} placeholder="Email" />
            {errors.email?.message && (
              <p className="text-error text-sm">{errors.email?.message}</p>
            )}
          </div>

          <div className="input-container">
            <Input
              maxLength={9}
              {...register("phone")}
              placeholder="Numer telefonu"
            />
            {errors.phone?.message && (
              <p className="text-error text-sm">{errors.phone?.message}</p>
            )}
          </div>

          <div className="input-container">
            <Input {...register("nip")} maxLength={10} placeholder="NIP" />
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

          <div className="input-container">
            <label className="text-sm text-gray-600 block mb-2">
              Faktury (PDF, JPG, PNG)
            </label>

            <div
              onClick={() => document.getElementById("invoice")?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();

                const droppedFiles = Array.from(e.dataTransfer.files);

                setFiles((prev) => {
                  const updated = [...prev, ...droppedFiles];

                  setValue("invoice", updated, {
                    shouldValidate: true,
                  });

                  return updated;
                });
              }}
              className="cursor-pointer rounded-xl border-dashed border bg-primary/5 p-6 text-center hover:bg-primary/10 transition"
            >
              <p className="text-sm text-primary/60">
                Przeciągnij pliki lub kliknij aby dodać faktury
              </p>

              <p className="text-xs text-primary/40 mt-1">
                maks. 10 plików • PDF / JPG / PNG
              </p>

              <input
                id="invoice"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  const selectedFiles = Array.from(e.target.files || []);

                  setFiles((prev) => {
                    const updated = [...prev, ...selectedFiles];

                    setValue("invoice", updated, {
                      shouldValidate: true,
                    });

                    return updated;
                  });
                }}
              />

              {files.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  {files.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between gap-3 rounded-lg bg-white/50 px-3 py-2 text-sm overflow-hidden"
                    >
                      <span className="flex-1 min-w-0 truncate">
                        {file.name}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();

                          const updated = files.filter((_, i) => i !== index);

                          setFiles(updated);

                          setValue("invoice", updated, {
                            shouldValidate: true,
                          });
                        }}
                        className="shrink-0 text-error hover:underline"
                      >
                        usuń
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {errors.invoice?.message && (
              <p className="text-error text-sm mt-2">
                {errors.invoice.message as string}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={!!consent}
              onCheckedChange={(val) => {
                setValue("consent", !!val, {
                  shouldValidate: true,
                });
              }}
              className={`
    border-gray-300
    data-[state=checked]:bg-accent
    data-[state=checked]:border-accent
    data-[state=checked]:text-white
    ${errors.consent ? "border-red-500" : ""}
  `}
            />
            <label className="text-xs text-gray-600 leading-snug">
              Wyrażam zgodę na przetwarzanie danych osobowych w celu kontaktu.
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-accent text-white hover:bg-accent/90 w-full p-4"
          >
            {loading ? <Spinner /> : "Wyślij"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
