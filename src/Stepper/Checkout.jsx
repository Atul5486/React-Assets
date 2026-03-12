import React, { useEffect, useRef, useState } from 'react'

const Checkout = ({ stepperConfig }) => {
    const [currStep, setCurrStep] = useState(1);
    const [isCompeleted, setIsCompeleted] = useState(false)
    const [margin, setMargin] = useState({
        marginLeft: 0,
        marginRight: 0
    });
    const stepRef = useRef([]);
    const handleNext = () => {
        setCurrStep((prev) => {
            if (currStep === stepperConfig.length) {
                setIsCompeleted(true);
                return prev
            } else {
                return prev + 1
            }
        })
    }
    const calculateProgress = () => {
        return ((currStep - 1) / (stepperConfig.length - 1) * 100)
    }

    useEffect(() => {
        setMargin({
            marginLeft: stepRef.current[0].offsetWidth,
            marginRight: stepRef.current[stepperConfig.length - 1].offsetWidth,

        })

    }, [stepRef, stepperConfig.length])
    const Action = stepperConfig[currStep - 1]?.Component;

    if (!stepperConfig) return <></>
    return (
        <>
            <div className='stepper'>
                {
                    stepperConfig.map((step, index) => {
                        return (
                            <div ref={(elem => stepRef.current[index] = elem)} key={index}
                                className={`step ${currStep > index + 1 || isCompeleted ? "complete" : ""
                                    } ${currStep === index + 1 ? "active" : ""} `}>
                                <div className='step-number'>{currStep > index + 1 || isCompeleted ? (
                                    <span>&#10003;</span>
                                ) : (
                                    index + 1
                                )}</div>
                                <div className='step-name'>{step.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
            <div className='progress-bar'
                style={{ width: `calc(100%-${margin.marginLeft + margin.marginRight})px`,
                marginLeft: margin.marginLeft,
            marginRight: margin.marginRight,
             }}>
                <div className='progress'
                    style={{ width:`${calculateProgress()}%` }}>
                </div>
            </div>
            </div>

            <Action />
            {
                !isCompeleted && (
                    <button onClick={handleNext}>{currStep > stepperConfig.length - 1 ? "Finish" : "Next"}</button>
                )
            }
        </>
    )
}

export default Checkout