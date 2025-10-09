// Purchase.tsx
import { Card } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Check, Download, Shield, MessageCircle, CreditCard, Clock } from "lucide-react";
import ebookCover from "@/assets/cupcake.jpg";
import pattern from "@/assets/pattern.jpg";
import Swal from "sweetalert2";
import { useRef, useEffect, useState } from "react";

export const Purchase = () => {
  const content = {
    en: {
      header: {
        small: "Order Now",
        title: <>Get Your <span className="text-[#C5912C]">Copy</span></>,
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

  // === Countdown Logic (Looping every 48 hours) ===
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    let totalSeconds = 47 * 3600 + 59 * 60 + 59;

    const interval = setInterval(() => {
      totalSeconds--;

      if (totalSeconds < 0) {
        // reset
        totalSeconds = 47 * 3600 + 59 * 60 + 59;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // === Rotation effect ===
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

const handlePayPalPayment = async () => {
  const { value: formValues } = await Swal.fire({
    title: "Enter Your Info",
    html: `
      <style>
        .swal2-popup {
          border-radius: 16px;
          padding: 2rem;
        }
        
        .swal2-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }
        
        .swal2-html-container {
          margin: 0;
        }
        
        .swal2-input {
          width: 85%;
          padding: 0.875rem 1rem;
          margin: 0.625rem auto;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: none;
        }
        
        .swal2-input:focus {
          border-color: #C5912C;
          outline: none;
          box-shadow: 0 0 0 3px rgba(197, 145, 44, 0.1);
        }
        
        .swal2-input::placeholder {
          color: #9ca3af;
          font-weight: 400;
        }
        
        .swal2-input:hover {
          border-color: #d1d5db;
        }
        
        .swal2-actions {
          margin-top: 1.75rem;
          gap: 0.75rem;
        }
        
        .swal2-confirm, .swal2-cancel {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .swal2-confirm:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(197, 145, 44, 0.3);
        }
        
        .swal2-cancel:hover {
          background-color: #94a3b8 !important;
          transform: translateY(-2px);
        }
        
        .swal2-validation-message {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
          border-radius: 8px;
          padding: 0.75rem;
          margin-top: 1rem;
          font-weight: 500;
        }
      </style>
      <input id="swal-email" type="email" class="swal2-input" placeholder="Your Email Address" required>
      <input id="swal-phone" type="tel" class="swal2-input" placeholder="Your Phone Number" required>
    `,
    focusConfirm: false,
    confirmButtonText: "Validate & Continue",
    confirmButtonColor: "#C5912C",
    showCancelButton: true,
    cancelButtonColor: "#94a3b8",
    preConfirm: () => {
      const email = (document.getElementById("swal-email") as HTMLInputElement)?.value;
      const phone = (document.getElementById("swal-phone") as HTMLInputElement)?.value;
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !phone) {
        Swal.showValidationMessage("Please fill out both fields!");
        return null;
      }
      if (!emailRegex.test(email)) {
        Swal.showValidationMessage("Please enter a valid email address!");
        return null;
      }
      return { email, phone };
    },
  });

  if (formValues) {
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
        html: `
          <style>
            .swal2-popup {
              border-radius: 16px;
            }
            .swal2-icon.swal2-success {
              border-color: #C5912C;
            }
            .swal2-icon.swal2-success [class^='swal2-success-line'] {
              background-color: #C5912C;
            }
            .swal2-icon.swal2-success .swal2-success-ring {
              border-color: rgba(197, 145, 44, 0.3);
            }
          </style>
          <p style="color: #6b7280; margin-top: 0.5rem;">Please complete your payment on PayPal</p>
        `,
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.open(
          `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=saraalaoui.paypal@gmail.com&amount=76&currency_code=EUR&item_name=Alchemical+Cakes+Vol+1`,
          "_blank"
        );
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: `
          <style>
            .swal2-popup {
              border-radius: 16px;
            }
          </style>
          <p style="color: #6b7280; margin-top: 0.5rem;">Failed to send your info. Please try again.</p>
        `,
        confirmButtonColor: "#C5912C",
        confirmButtonText: "Try Again",
      });
    }
  }
};
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
      {/* Pattern */}
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
          <p className="text-[#651C32]/80 text-base sm:text-lg">{data.header.description}</p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-[#651C32] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-pulse mb-8">
          <Clock size={20} className="text-[#C5912C]" />
          <span className="font-semibold tracking-wide">
            {data.timerTitle}
          </span>
          <span className="text-[#C5912C] font-bold text-lg sm:text-xl ml-2">
            {String(timeLeft.hours).padStart(2, "0")}h :
            {String(timeLeft.minutes).padStart(2, "0")}m :
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full">
          {/* Ebook */}
          <div className="flex justify-center w-full lg:w-auto">
            <div
              ref={cardRef}
              className="relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] transition-transform duration-500 transform-gpu hover:scale-105 animate-fade-in-up"
              style={{
                transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) perspective(800px)`,
              }}
            >
              <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-3xl transform rotate-3 scale-110 animate-luxury-glow"></div>
              <img
                src={ebookCover}
                alt="Ebook Cover"
                className="relative z-10 w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* Purchase Card */}
          <Card className="bg-white/95 backdrop-blur-sm border border-[#C5912C]/30 p-6 sm:p-8 xl:p-10 shadow-2xl rounded-2xl hover:shadow-gold transition-all duration-500 w-full max-w-lg">
            {/* Title & Price */}
            <div className="text-center space-y-3">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#651C32]">
                {data.title}
              </h3>
              <p className="text-[#C5912C] font-inter">{data.author}</p>
              <div className="flex flex-wrap justify-center items-center gap-3 mt-2">
                <span className="line-through text-[#651C32]/40">{data.oldPrice}</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#C5912C]">{data.newPrice}</span>
                <span className="bg-[#C5912C] text-white px-3 py-1 rounded-full text-xs sm:text-sm animate-pulse">
                  {data.discount}
                </span>
              </div>
              <p className="text-[#651C32]/70 mt-1">{data.offer}</p>
            </div>

            {/* Benefits */}
            <div className="mt-6 space-y-2">
              <h4 className="font-playfair text-[#C5912C] text-center font-semibold">{data.benefitsTitle}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {data.benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 p-1 rounded hover:bg-[#C5912C]/5 transition"
                  >
                    <Check className="text-[#C5912C] mt-0.5" size={16} />
                    <span className="text-[#651C32]/80 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <LuxuryButton
                className="w-full sm:w-1/2 bg-[#C5912C] hover:bg-[#B47B24] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 text-center whitespace-normal"
                onClick={handlePayPalPayment}
              >
                <CreditCard size={18} /> {data.paypal}
              </LuxuryButton>
              <LuxuryButton
                className="w-full sm:w-1/2 bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-2xl font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 text-center whitespace-normal"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle size={18} /> {data.bank}
              </LuxuryButton>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 text-center border-t border-[#C5912C]/20 pt-4">
              {data.guarantees.map((g, i) => (
                <div key={i} className="space-y-1">
                  <g.icon className="text-[#C5912C] mx-auto" size={18} />
                  <p className="text-[#651C32]/70 text-xs whitespace-pre-line">{g.text}</p>
                </div>
              ))}
            </div>

            <p className="text-[#651C32]/50 text-xs text-center mt-3">{data.terms}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
