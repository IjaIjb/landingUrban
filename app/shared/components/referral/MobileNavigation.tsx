"use client";

import { Button } from "@/components/UI/button";
import { Label } from "@/components/UI/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/sheet";
import { DialogProps } from "@radix-ui/react-dialog";

const SHEET_SIDES = [
  "top",
  // , "right", "bottom", "left"
] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function MobileNavigation({ ...props }: DialogProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} {...props}>
          <SheetContent side={side}>
            {/* ---------------content herte */}
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
