import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadCVButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloading2, setDownloading2] = useState(false);
  const cvPath = "/assets/CV/ashan-edirisinghe-SE.pdf";
  const cvPath2 = "/assets/CV/ashan-edirisinghe-devops.pdf";

  const downloadCV = () => {
    setDownloading(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'ashan-edirisinghe-SE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const downloadCV2 = () => {
    setDownloading2(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvPath2;
    link.download = 'ashan-edirisinghe-devops.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading2(false);
    }, 2000);
  };

  return (
    <>
    <motion.button
      onClick={downloadCV}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="/assets/download.svg" className="w-5" alt="download done icon" />
            CV Downloaded
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="/assets/download.svg" className="w-5" alt="download icon" />
            Download SE CV
          </motion.p>
        )}
 
      

      </AnimatePresence>
    </motion.button>

    <motion.button
      onClick={downloadCV2}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading2 ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="/assets/download.svg" className="w-5" alt="download done icon" />
            CV Downloaded
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="/assets/download.svg" className="w-5" alt="download icon" />
            Download DevOps CV
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
    </>
  );
};

export default DownloadCVButton;