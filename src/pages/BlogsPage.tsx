import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "@/Context/languagecontext";
import { Globe, ArrowLeft, Download } from "lucide-react";
import pattern from "@/assets/pattern.jpg";

// Placeholder imports — replace these with your actual files
import blogPreview from "@/assets/blog-preview.webp";
import blogPdfEn from "@/assets/blog-en.pdf";
import blogPdfAr from "@/assets/blog-ar.pdf";

const BlogsPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [showOverlay, setShowOverlay] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const content = {
    fr: {
      backLabel: "Retour",
      pageTitle: "BLOG",
      downloadEn: "English Version",
      downloadAr: "النسخة العربية",
      overlayTitle: "Télécharger le Blog",
      overlaySubtitle: "Choisissez votre langue",
    },
    ar: {
      backLabel: "رجوع",
      pageTitle: "المدونة",
      downloadEn: "English Version",
      downloadAr: "النسخة العربية",
      overlayTitle: "تحميل المدونة",
      overlaySubtitle: "اختر لغتك",
    },
  };

  const t = content[language];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (showOverlay) return;

      const imageEl = imageRef.current;
      if (!imageEl) return;

      const rect = imageEl.getBoundingClientRect();
      // Trigger when the bottom of the image is near the bottom of the viewport
      if (rect.bottom <= window.innerHeight + 50) {
        setShowOverlay(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOverlay]);

  // Lock body scroll when overlay is visible
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  const handleDownload = (pdfUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F2EFE8] relative"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#C5912C] transition-all duration-300 flex items-center gap-2"
      >
        <Globe size={20} />
        <span className="font-semibold">
          {language === "fr" ? "AR" : "FR"}
        </span>
      </button>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 bg-[#651C32] text-white p-3 rounded-full shadow-lg hover:bg-[#C5912C] transition-all duration-300 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="font-semibold hidden sm:inline">{t.backLabel}</span>
      </button>

      {/* Background Pattern */}
      <img
        src={pattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-32">
        {/* Page Title */}
        <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#651C32]">
            {t.pageTitle}
          </h1>
        </div>

        {/* Blog Preview Image */}
        <div
          ref={imageRef}
          className="max-w-3xl mx-auto animate-fade-in-up"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5912C]/30">
            <img
              src={blogPreview}
              alt="Blog Preview"
              className="w-full h-auto object-contain"
            />
            {/* Subtle gradient at bottom to hint there's more */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F2EFE8]/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Spacer to enable scrolling to trigger overlay */}
        <div className="h-32 sm:h-48" />
      </div>

      {/* Download Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#651C32]/80 backdrop-blur-md animate-fade-in"
            onClick={() => setShowOverlay(false)}
          />

          {/* Overlay Content */}
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 mx-4 max-w-lg w-full shadow-2xl border border-[#C5912C]/30 animate-scale-in">
            {/* Close hint */}
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-[#651C32]/50 hover:text-[#651C32] transition-colors text-2xl leading-none"
            >
              ×
            </button>

            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-[#C5912C]/20 rounded-full flex items-center justify-center">
                <Download
                  size={40}
                  className="text-[#651C32]"
                />
              </div>

              {/* Title */}
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#651C32]">
                {t.overlayTitle}
              </h2>
              <p className="text-[#651C32]/60 font-inter text-sm sm:text-base">
                {t.overlaySubtitle}
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* English Button */}
                <button
                  onClick={() =>
                    handleDownload(blogPdfEn, "blog-english.pdf")
                  }
                  className="flex-1 flex items-center justify-center gap-3 bg-[#651C32] text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-[#C5912C] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Download size={22} />
                  <span>{t.downloadEn}</span>
                </button>

                {/* Arabic Button */}
                <button
                  onClick={() =>
                    handleDownload(blogPdfAr, "blog-arabic.pdf")
                  }
                  className="flex-1 flex items-center justify-center gap-3 bg-[#C5912C] text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-[#651C32] transition-all duration-300 hover:scale-105 shadow-lg"
                  dir="rtl"
                >
                  <Download size={22} />
                  <span>{t.downloadAr}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
