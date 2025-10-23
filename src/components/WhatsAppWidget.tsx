import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '6281216661658';

const WhatsAppWidget = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [open, setOpen] = useState(false);
  const [hiddenOnHero, setHiddenOnHero] = useState(false);
  const [message, setMessage] = useState("Hello! I'm interested in Permata Signature Residence.");

  const openChat = () => {
    const encoded = encodeURIComponent(message.trim());
    const url = isMobile
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Hide the widget when the Hero section (#home) is visible
  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Consider it visible if at least 40% of hero is in view
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.4;
        setHiddenOnHero(visible);
        if (visible && open) {
          setOpen(false);
        }
      },
      { threshold: [0, 0.4, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [open]);

  return (
    <div className={`fixed right-4 bottom-4 z-50 ${hiddenOnHero ? 'pointer-events-none opacity-0' : 'opacity-100'} transition-opacity`}>
      {/* Chat Panel */}
      {open && (
        <div className="mb-3 w-72 sm:w-80 rounded-xl overflow-hidden shadow-xl bg-white/95 backdrop-blur border border-white/40">
          <div className="px-4 py-3 bg-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                {/* WhatsApp glyph */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.72a11.78 11.78 0 0 0 5.67 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.16-3.39-8.39ZM12.05 21.3h-.01a9.48 9.48 0 0 1-4.84-1.32l-.35-.21-3.78 1.02 1.01-3.68-.23-.38a9.47 9.47 0 0 1-1.45-5.07c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.8 6.72c0 5.24-4.27 9.5-9.5 9.5Zm5.43-7.1c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.51-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.51.07-.78.36-.27.3-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.06 3.14 5 4.41.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35Z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold leading-4">Chat with us</p>
                <p className="text-[11px] opacity-90 leading-4">Typically replies in minutes</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/90 hover:text-white" aria-label="Close chat">
              ✕
            </button>
          </div>
          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">Send us a message on WhatsApp and we'll get back to you shortly.</div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-[#25D366]"
              placeholder="Type your message..."
            />
            <button
              onClick={openChat}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white py-2.5 font-medium hover:bg-[#1EBE57] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.99 3.01a1 1 0 0 0-1.05-.24L3.4 8.38a1 1 0 0 0 .06 1.9l6.86 2.06 2.06 6.86a1 1 0 0 0 1.9.06l5.6-16.54a1 1 0 0 0-.89-1.71ZM13.7 18.3l-1.54-5.14 5.14-5.14-6.68 4.4-5.13-1.54 12.17-4.13L13.7 18.3Z"/></svg>
              Send on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1EBE57] flex items-center justify-center"
        aria-label="Open WhatsApp chat"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.72a11.78 11.78 0 0 0 5.67 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.16-3.39-8.39ZM12.05 21.3h-.01a9.48 9.48 0 0 1-4.84-1.32l-.35-.21-3.78 1.02 1.01-3.68-.23-.38a9.47 9.47 0 0 1-1.45-5.07c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.8 6.72c0 5.24-4.27 9.5-9.5 9.5Zm5.43-7.1c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.51-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.51.07-.78.36-.27.3-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.06 3.14 5 4.41.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35Z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
