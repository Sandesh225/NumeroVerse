import { features } from "./../../../constants/index";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Discover Numeroverse's
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ml-2">
            Key Features
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 bg-neutral-900 text-orange-700 flex justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="mt-1 mb-2 text-xl font-semibold text-neutral-100">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
