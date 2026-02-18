import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------------
// SETUP: Replace this URL with your deployed Google Apps Script URL
// See instructions below the component for how to create it.
// ---------------------------------------------------------------
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbymEiRnJF8sQXjOQ7xyO_n61eTusIgTZ2ZE6VpOBMQw8CHsseV7sZ5d__Yykb_5tPiGSA/exec";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyAccessModal = ({ isOpen, onClose }: EarlyAccessModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSending(true);
    setError(false);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          date: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setSubmitted(false);
          setSending(false);
          setName("");
          setEmail("");
        }, 300);
      }, 2000);
    } catch {
      setError(true);
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[250] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-md mx-4"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[#F5E6E8] p-10 sm:p-12">
              {!submitted ? (
                <>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-5 text-[#651C32]/40 hover:text-[#651C32] transition-colors font-light text-xl"
                  >
                    x
                  </button>

                  <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#651C32] mb-2">
                    Reserve Your Seat
                  </h3>
                  <p className="text-[#651C32]/40 text-sm font-inter font-bold mb-10 tracking-wide">
                    Be the first to know when we launch.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-[#651C32]/20 py-3 text-[#651C32] font-bold placeholder-[#651C32]/30 focus:outline-none focus:border-[#651C32]/50 transition-colors font-inter text-sm tracking-wide"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full bg-transparent border-b border-[#651C32]/20 py-3 text-[#651C32] font-bold placeholder-[#651C32]/30 focus:outline-none focus:border-[#651C32]/50 transition-colors font-inter text-sm tracking-wide"
                        required
                      />
                    </div>
                    {error && (
                      <p className="text-red-400 text-xs font-inter font-bold tracking-wide">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      className={`w-full py-4 font-inter font-bold text-sm tracking-[0.2em] uppercase transition-colors ${
                        sending
                          ? "bg-[#651C32]/50 text-white/60 cursor-wait"
                          : "bg-[#651C32] text-white hover:bg-[#4a1424]"
                      }`}
                      whileHover={sending ? {} : { scale: 1.01 }}
                      whileTap={sending ? {} : { scale: 0.99 }}
                    >
                      {sending ? "Sending..." : "Reserve my seat"}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="font-playfair font-bold text-2xl text-[#651C32] mb-3">
                    Thank you
                  </p>
                  <p className="text-[#651C32]/40 text-sm font-inter font-bold tracking-wide">
                    We will be in touch shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EarlyAccessModal;
