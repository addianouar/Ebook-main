// Purchase.tsx
import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import {
  Check,
  Download,
  Shield,
  MessageCircle,
  CreditCard,
  Clock,
} from "lucide-react";
import ebookCover from "@/assets/cupcake.jpg";
import pattern from "@/assets/pattern.jpg";
import Swal from "sweetalert2";

export const Purchase = () => {
  const content = {
    en: {
      header: {
        small: "Order Now",
        title: (
          <>
            Get Your <span className="text-[#C5912C]">Copy</span>
          </>
        ),
        description:
          "Transform your approach to pastry today with this revolutionary guide. Limited-time offer with satisfaction guarantee.",
      },
      title: "CUPCAKE EVOLUTION Vol 1",
      author: "By Sara Alöwe",
      oldPrice: "1999 MAD",
      newPrice: "799 MAD",
      discount: "-60%",
      offer: "Limited launch offer",
      timerTitle: " Special Offer Ends In:",
      benefitsTitle: "What You’ll Get:",
      benefits: [
        "Perfectly balanced bases, inserts, and creams for beautiful and delicious cakes.",
        "Step-by-step techniques with chef tips to guarantee your success.",
        "A practical conversion table to simplify your preparations.",
        "Get free access to our Telegram group where you’ll find lessons, guidance, and discussions.",
        "20% off the next Volume 2 to continue your pastry journey.",
        "Certificate of achievement after applying the recipes, to showcase your skills.",
      ],
      paypal: "Pay with PayPal - 76 EUR",
      bank: "Bank Transfer (via WhatsApp)",
      guarantees: [
        { icon: Download, text: "Instant\nDownload" },
        { icon: Shield, text: "Secure\nPayment" },
        { icon: MessageCircle, text: "24/7\nSupport" },
      ],
      terms:
        "By proceeding with the purchase, you agree to our sales and privacy terms. Satisfaction guaranteed.",
    },
  };

  const data = content.en;

  // === Countdown ===
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    let totalSeconds = 47 * 3600 + 59 * 60 + 59;

    const interval = setInterval(() => {
      totalSeconds--;
      if (totalSeconds < 0) {
        totalSeconds = 47 * 3600 + 59 * 60 + 59;
      }

      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // === Card rotation ===
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
      setRotate({ x, y });
    };

    const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // === PayPal ===
  const handlePayPalPayment = async () => {
    const payPalWindow = window.open("", "_blank");

    const { value: formValues } = await Swal.fire({
      title: "Enter Your Info",
      html: `
        <input id="swal-email" type="email" class="swal2-input" placeholder="Your Email Address" required>
        <input id="swal-phone" type="tel" class="swal2-input" placeholder="Your Phone Number" required>
      `,
      confirmButtonText: "Validate & Continue",
      confirmButtonColor: "#C5912C",
      showCancelButton: true,
      cancelButtonColor: "#94a3b8",
      preConfirm: () => {
        const email = (document.getElementById("swal-email") as HTMLInputElement)
          ?.value;
        const phone = (document.getElementById("swal-phone") as HTMLInputElement)
          ?.value;

        if (!email || !phone) {
          Swal.showValidationMessage("Please fill out both fields!");
          return null;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          Swal.showValidationMessage("Please enter a valid email!");
          return null;
        }

        return { email, phone };
      },
    });

    if (!formValues) {
      payPalWindow?.close();
      return;
    }

    try {
      await fetch("https://formspree.io/f/mjkaabrb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formValues.email,
          phone: formValues.phone,
          message: "New ebook order - Cupcake Evolution Vol 1",
        }),
      });

      Swal.fire({
        icon: "success",
        title: "Redirecting to PayPal...",
        timer: 1500,
        showConfirmButton: false,
      });

      payPalWindow!.location.href =
        "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=saraalaoui.paypal@gmail.com&amount=76&currency_code=EUR&item_name=Alchemical+Cakes+Vol+1";
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send your info. Please try again.",
        confirmButtonColor: "#C5912C",
      });
      payPalWindow?.close();
    }
  };

  // === WhatsApp ===
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in the ebook 'Cupcakes Volume 1' and would like to pay via bank transfer. Can you please provide the details?"
    );
    window.open(`https://wa.me/+212664576477?text=${message}`, "_blank");
  };

  return (
    <section
      id="purchase"
      className="relative py-16 lg:py-24 bg-[#F2EFE8] flex justify-center items-center"
    >
      <img
        src={pattern}
        alt="Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10 animate-luxury-float"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl animate-fade-in-up">
          <p className="text-[#C5912C] uppercase tracking-wider font-medium">
            {data.header.small}
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#651C32] my-2">
            {data.header.title}
          </h2>
          <p className="text-[#651C32]/80 text-base sm:text-lg">
            {data.header.description}
          </p>
        </div>

        {/* Countdown */}
        <div className="bg-[#651C32] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-pulse mb-8">
          <Clock size={20} className="text-[#C5912C]" />
          <span className="font-semibold tracking-wide">
            {data.timerTitle}
          </span>
          <span className="text-[#C5912C] font-bold text-lg">
            {String(timeLeft.hours).padStart(2, "0")}h :
            {String(timeLeft.minutes).padStart(2, "0")}m :
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex justify-center">
            <div
              ref={cardRef}
              className="relative w-[350px] transition-transform duration-500 transform-gpu hover:scale-105"
              style={{
                transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) perspective(800px)`,
              }}
            >
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-3xl rotate-3 scale-110"></div>
              <img
                src={ebookCover}
                alt="Ebook Cover"
                className="relative z-10 w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          <Card className="bg-white/95 border border-[#C5912C]/30 p-8 shadow-2xl rounded-2xl w-full max-w-lg">
            {/* Card content unchanged */}
          </Card>
        </div>
      </div>
    </section>
  );
};
