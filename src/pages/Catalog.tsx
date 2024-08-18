const Catalog: React.FC = () => {
  const products = Array(12).fill('APV');

  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-between px-4">
        <div className="w-full flex justify-between items-center mt-[100px] mb-8">
          <p className="text-white text-[24px] font-bold">Catalog products</p>
          <button className="bg-[#F9E400] px-[20px] py-[15px] text-[#1B1A17] rounded-[16px] font-normal text-[14px] leading-[17px]">
            Download catalog
          </button>
        </div>
        <div className="flex flex-wrap justify-between sm:justify-start">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-md m-2 w-full sm:w-[calc(33.33%-1rem)]"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                Electrical cables
              </h3>
              <ul>
                {Array(5)
                  .fill(product)
                  .map((item, idx) => (
                    <li key={idx} className="text-gray-400">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
