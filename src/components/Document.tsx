import { useTranslation } from 'react-i18next';
import document from '../assets/images/DOCUMENTS.png';
import doc1 from '../assets/images/doc1.jpg';
import doc2 from '../assets/images/doc2.jpg';
import doc3 from '../assets/images/doc3.jpg';
import { HiDocumentDownload } from 'react-icons/hi';

const Document = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center py-10 mt-0 md:mt-[100px]">
      <div className="relative w-full max-w-3xl flex justify-center mb-10">
        <img
          className="relative w-full h-auto"
          src={document}
          alt="Documents text"
        />
        <h3 className="absolute top-5 text-white uppercase text-center font-semibold text-[24px] md:text-[32px] leading-[32px] md:leading-[39px] tracking-[6px] md:tracking-[10px]">
          {t('documents')}
        </h3>
      </div>
      <div className="container flex flex-wrap justify-center gap-8 w-full max-w-4xl">
        {[doc1, doc2, doc3].map((doc, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full max-w-xs"
          >
            <img
              className="rounded-[16px] w-full h-auto"
              src={doc}
              alt={`doc ${index + 1}`}
            />
            <span className="flex items-center justify-center md:justify-end space-x-2 pt-4">
              <HiDocumentDownload color="white" className="text-xl" />
              <p className="text-white text-sm md:text-base">Download</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
