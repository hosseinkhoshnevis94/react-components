import Button from "./Button";

export default function StepButtons({onNext,onPrevious,messages,step}){
    return(
        <>
        <Button bgColor={step==1 ?" #dbdbdb" : "#7950f2"} textColor="#fff" onClick={onPrevious}>
                  <span>👈</span> Previous
                </Button>
    
                <Button bgColor={step==messages.length ?" #dbdbdb" : "#7950f2"} textColor={step==messages.length ?" #8f8f8f" : "#fff"} onClick={onNext}>
                  Next <span>👉</span>
                </Button>
        </>
    )
    }