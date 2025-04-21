"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.push(`/${newLocale}`);
    });
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      disabled={isPending}
      className={cn("px-2", {
        "transition-opacity [&:disabled]:opacity-30": isPending,
      })}
      onClick={() => switchLocale(locale === "en" ? "tr" : "en")}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
