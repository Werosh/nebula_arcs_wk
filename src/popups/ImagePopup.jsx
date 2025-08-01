import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ImagePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasShownPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Prevent scrolling when popup is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const closeButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className=" absolute min-h-screen  p-8">
      {/* Image Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0  bg-opacity-50 backdrop-blur-md" />

            {/* Popup container */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close button */}
              <motion.button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg"
                variants={closeButtonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <X size={24} className="text-gray-700" />
              </motion.button>

              {/* Image content */}
              <div>
                <a href="/#contact">
                  <img
                    src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/524956269_122099692400961184_5057875098348867065_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IAsL-i6th-YQ7kNvwE5ZyHa&_nc_oc=AdkPEWKDMlseVvY6eP5pJskt9kyfWQlVwtcT5hzxp3NNvIwqlcWIIFXl2ZWGULxQpvg5k4gpbPZNevIBMmJlMRrw&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=xh-2zvthjYZb5k-PTy1_kQ&oh=00_AfTyyXh79mnmnsZ4WE1XbOfEw60GdTkOI-waCCcUmdlZjg&oe=688ECD71"
                    alt="Beautiful landscape"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImagePopup;
