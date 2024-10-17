"use client"
import React, { useState } from "react";
import { Button, Hr, Text } from "..";

const StepperContainer = ({children}) =>{
    const [currentStep, setCurrentStep] = useState(0);

    const stepperTitles = React.Children.map(children, (child) => child.props.title);
    const tes = React.Children.map(children, (child) => child);
    console.log(tes)

    const stepperChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, { isActive: index === currentStep })
    );

    const updateStepper = (step) => {
      setCurrentStep(step);
    };

    const nextStep = () => {
      if (currentStep < stepperTitles.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    return (
    <div className="">
            <ol className="flex items-center md:w-3/4 mx-auto text-sm text-gray-500 font-medium sm:text-base">
                {stepperTitles.map((step, index) => (
                // <li key={index} className={`flex relative text-black-600 ${index < stepperTitles.length - 1 ? ` w-full after:content-[''] after:w-full after:h-0.5 ${index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200' } after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-7 lg:after:left-9` : ''}`}>
                // <li key={index} className={`flex relative text-black-600 ${index < stepperTitles.length - 1 ? ` w-full after:content-[''] after:w-full lg:after:w-7/12 xl:after:w-3/4 after:h-0.5 ${index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200' } after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-5 lg:after:left-[4rem] xl:after:left-14` : ''}`}>
                <li key={index} className={`flex relative text-black-600 ${index < stepperTitles.length - 1 ? ` w-full after:content-[''] after:w-full lg:after:w-7/12 xl:after:w-3/4 after:h-0.5 ${index <= currentStep - 1 ? 'after:bg-primary-100' : 'after:bg-slate-200' } after:inline-block after:absolute lg:after:top-4 after:top-3 after:left-5 md:after:left-5 lg:after:left-[4rem] xl:after:left-[17%]` : ''}`}>

                    <div class="block relative whitespace-nowrap z-10">
                    {
                        index <= currentStep ? 
                        // <span onClick={() => updateStepper(index)} class="w-8 h-8 bg-primary-100 border-4 box-content border-blue-200 rounded-full flex items-center justify-center">
                        // <div style={{marginLeft: '0px'}} class="w-2.5 h-2.5 bg-white rounded-full"></div>
                        // </span> 
                        <span style={{boxShadow: '0px 0px 0px 4px #068CCD3D'}} class="w-6 h-6 bg-primary-100 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-8 lg:h-8">
                            <div style={{marginLeft: '0px'}} class="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </span>
                        : 
                        // <span onClick={() => updateStepper(index)} class="w-8 h-8 bg-slate-100 border-2 box-content border-slate-200 rounded-full flex items-center justify-center">
                        // <div style={{marginLeft: '0px'}} class="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                        // </span>
                        <span class="w-6 h-6 bg-slate-100 border-2 border-slate-200 rounded rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-8 lg:h-8">
                            <div style={{marginLeft: '0px'}} class="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                        </span>
                    } <Text size="sm" className="text-center whitespace-nowrap absolute left-1/2 transform -translate-x-1/2">{step}</Text>
                </div>
                    
                </li>
                ))}
            </ol>

          <div className={'mt-16'}>
          {stepperChildren}
          </div>
           

      {/* Navigation Buttons */}

        <Hr/>

      <div className="flex mt-5 w-full gap-3">
      <Button
          onClick={nextStep}
          className={'py-2'}
        >
          {currentStep === stepperTitles.length - 1 ? 'Tambah' : 'Selanjutnya'}
        </Button>

        <Button
          className={'py-2'}
          onClick={prevStep}
          // disabled={currentStep === 0}
          variant="white"
        >
          Batal
        </Button>
        
      </div>
    </div>



    )
}

export default StepperContainer