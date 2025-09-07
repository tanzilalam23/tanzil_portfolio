import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactOptions = [
  {
    id: 'email',
    label: 'Email',
    icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
    type: 'info',
    value: 'mohammadtanzilalam@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
    type: 'info',
    value: '+49 17674560350',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />,
    type: 'link',
    value: 'https://www.linkedin.com/in/mohammad-tanzil-alam/',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <Github className="w-6 h-6 sm:w-8 sm:h-8" />,
    type: 'link',
    value: 'https://github.com/tanzilalam23',
  },
];

const ContactKeyboard = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [pressedKey, setPressedKey] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleKeyPress = (option) => {
    setPressedKey(option.id);
    setTimeout(() => setPressedKey(null), 200);

    if (option.type === 'link') {
      window.open(option.value, '_blank');
    } else {
      setActiveKey(option.id === activeKey ? null : option.id);
      setCopied(false); // reset copied state if switching
    }
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      console.error("Clipboard operation failed:", err);
      // Still show success message as fallback method might work
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div id="contactOptions" className="relative py-12 sm:py-16 bg-gray-900 text-center min-h-screen flex flex-col justify-center px-4">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 opacity-20 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgb(0,255,186)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 opacity-15 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgb(37,40,131)' }}
        />
      </div>

      <div className="relative z-10">
        <h3
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 drop-shadow-lg"
          style={{ color: 'rgb(0,255,186)' }}
        >
          Contact Me
        </h3>

        {/* Keyboard grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xs sm:max-w-lg mx-auto mb-6 sm:mb-8">
          {contactOptions.map((option) => {
            const isPressed = pressedKey === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleKeyPress(option)}
                className={`
                  relative overflow-hidden rounded-2xl sm:rounded-3xl
                  transition-all duration-200 ease-out cursor-pointer
                  min-h-[100px] sm:min-h-[120px] group
                  ${isPressed
                    ? 'transform translate-y-2 sm:translate-y-3'
                    : 'transform translate-y-0 hover:translate-y-1 hover:scale-105 active:translate-y-2 active:scale-95'
                  }
                `}
                style={{
                  background: isPressed
                    ? `linear-gradient(145deg, rgb(30,35,100), rgb(20,25,80))`
                    : `linear-gradient(145deg, rgb(37,40,131), rgb(25,28,90))`,
                  boxShadow: isPressed
                    ? `
                        inset 0 4px 12px rgba(0,0,0,0.4),
                        inset 0 -2px 8px rgba(0,255,186,0.1),
                        0 2px 8px rgba(0,0,0,0.3)
                      `
                    : `
                        0 8px 20px rgba(0,0,0,0.3),
                        0 4px 12px rgba(37,40,131,0.4),
                        inset 0 1px 0 rgba(0,255,186,0.2),
                        inset 0 -1px 0 rgba(0,0,0,0.2)
                      `,
                }}
              >
                {/* Key bevel */}
                <div
                  className="absolute inset-1 rounded-xl sm:rounded-2xl"
                  style={{
                    background: isPressed
                      ? `linear-gradient(145deg, rgb(25,28,90), rgb(35,38,120))`
                      : `linear-gradient(145deg, rgb(45,48,140), rgb(30,33,100))`,
                    boxShadow: isPressed
                      ? 'inset 0 2px 6px rgba(0,0,0,0.3)'
                      : 'inset 0 -2px 6px rgba(0,0,0,0.2), inset 0 2px 6px rgba(0,255,186,0.1)',
                  }}
                />

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,255,186,0.3) 0%, transparent 70%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 sm:p-4">
                  <div
                    className="mb-2 sm:mb-3 drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
                    style={{ color: 'rgb(0,255,186)' }}
                  >
                    {option.icon}
                  </div>
                  <div
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: 'rgb(0,255,186)' }}
                  >
                    {option.label}
                  </div>
                </div>

                {/* Decorative dots */}
                <div
                  className="absolute top-2 left-2 w-2 h-2 rounded-full opacity-20"
                  style={{ backgroundColor: 'rgb(0,255,186)' }}
                />
                <div
                  className="absolute bottom-2 right-2 w-1 h-1 rounded-full opacity-10"
                  style={{ backgroundColor: 'rgb(0,255,186)' }}
                />
              </button>
            );
          })}
        </div>

        {/* Info display area */}
        <div className="min-h-[100px] flex items-center justify-center px-4">
          {activeKey && (
            <div 
              key={activeKey} 
              className="animate-fade-in text-center w-full max-w-md"
            >
              {contactOptions
                .filter((opt) => opt.id === activeKey && opt.type === 'info')
                .map((opt) => (
                  <button
                    key={opt.id}
                    className="p-4 sm:p-6 rounded-2xl backdrop-blur-sm border cursor-pointer hover:scale-105 transition-all duration-10000 w-full group"
                    onClick={() => copyToClipboard(opt.value)}
                    style={{
                      backgroundColor: 'rgba(37,40,131,0.3)',
                      borderColor: 'rgb(0,255,186)',
                      boxShadow: '0 8px 32px rgba(0,255,186,0.1)',
                    }}
                  >
                    <p
                      className="font-medium text-lg sm:text-2xl mb-2 break-all"
                      style={{ color: 'rgb(0,255,186)' }}
                    >
                      {opt.value}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-2">
                      📋 Click to copy to clipboard
                    </p>
                    {copied && (
                      <p className="font-medium text-green-400 text-sm sm:text-base animate-pulse">
                        ✓ Copied to clipboard!
                      </p>
                    )}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Keyboard base */}
        <div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-lg h-6 sm:h-8 rounded-b-3xl opacity-60"
          style={{
            background: `linear-gradient(145deg, rgb(20,25,80), rgb(15,20,60))`,
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ContactKeyboard;