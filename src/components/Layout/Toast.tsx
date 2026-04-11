import { useRef } from "react";
import { useToast } from "@/hooks/useToast";
import { useGSAP } from "@gsap/react";
import { cva, type VariantProps } from "class-variance-authority";
import gsap from "gsap";

const toastVariants = cva(
  "border bg-background px-6 py-3 text-sm uppercase tracking-wider",
  {
    variants: {
      variant: {
        success: "border-primary text-primary",
        error: "border-red-700 text-red-700",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

type ToastItemProps = VariantProps<typeof toastVariants> & {
  id: number;
  message: string;
};

const Toast = ({ id, message, variant }: ToastItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { removeToast } = useToast();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, duration: 0.3 },
    );

    tl.to(ref.current, {
      opacity: 0,
      x: 200,
      duration: 0.3,
      delay: 3,
      onComplete: () => removeToast(id),
    });
  }, []);

  return (
    <div ref={ref} className={toastVariants({ variant })}>
      {message}
    </div>
  );
};

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
        />
      ))}
    </div>
  );
};
