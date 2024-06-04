import { cn } from "@/lib/utils";

interface PhoneProps extends HTMLAttribute<HTMLDListElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-event-none z-50 select-none"
        alt="phone Image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-coven"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
