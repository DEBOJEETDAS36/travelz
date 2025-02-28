// import { cn } from "@/lib/utils";
// import React from "react";

// const TestimonialCard = ({
//   image,
//   name,
//   review,
//   className,
//   isLeft = false,
// }: {
//   image?: string;
//   name?: string;
//   review?: string;
//   className?: string;
//   isLeft?: boolean;
// }) => {
//   return (
//     <div
//       className={cn(
//         `overflow-hidden w-[90%] md:w-[calc(50%-2rem)] flex flex-col ${
//           isLeft
//             ? "self-end md:self-start md:rounded-tr-none"
//             : "self-start md:self-end md:-mt-32 md:rounded-tl-none"
//         }`,
//         className
//       )}
//     >
//       <div
//         className={`flex flex-wrap flex-row items-center p-3 rounded-full bg-secondary w-fit ${
//           isLeft ? "self-end rounded-tr-none" : "self-start rounded-tl-none"
//         }`}
//       >
//         <div className="size-12 bg-primary/50 rounded-full" />
//         <p className="px-4 text-lg">{name || "John doe"}</p>
//       </div>
//       <div className="p-5">
//         <p className={`${isLeft ? "md:text-right" : "text-left"} text-muted-foreground`}>
//           {review ||
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem distinctio aspernatur tempora doloribus ad natus maiores doloremque nesciunt quos culpa est eveniet ab cumque id provident similique, eum odit!"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;


import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const TestimonialCard = forwardRef<
  HTMLDivElement,
  {
    image?: string;
    name?: string;
    review?: string;
    className?: string;
    isLeft?: boolean;
  }
>(({ image, name, review, className, isLeft = false }, ref) => {
  return (
    <div
      ref={ref} // Attach ref here
      className={cn(
        `opacity-0 overflow-hidden w-[90%] md:w-[calc(50%-2rem)] flex flex-col transition-opacity duration-1000 ease-out ${
          isLeft
            ? "self-end md:self-start md:rounded-tr-none"
            : "self-start md:self-end md:-mt-32 md:rounded-tl-none"
        }`,
        className
      )}
    >
      <div
        className={`flex flex-wrap flex-row items-center p-3 rounded-full bg-secondary w-fit ${
          isLeft ? "self-end rounded-tr-none" : "self-start rounded-tl-none"
        }`}
      >
        <div className="size-12 bg-primary/50 rounded-full" />
        <p className="px-4 text-lg">{name || "John Doe"}</p>
      </div>
      <div className="p-5">
        <p className={`${isLeft ? "md:text-right" : "text-left"} text-muted-foreground`}>
          {review ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem distinctio aspernatur tempora doloribus ad natus maiores doloremque nesciunt quos culpa est eveniet ab cumque id provident similique, eum odit!"}
        </p>
      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard"; // Required for forwardRef

export default TestimonialCard;
