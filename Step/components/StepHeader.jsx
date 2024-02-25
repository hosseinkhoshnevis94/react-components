export default function StepHeader({messages,step}){
    return(
        <div className="numbers">
        {messages.map((item,index) =>  <div key={item} className={step >= index+1 ? "active" : ""}>{index+1}</div> )}
      </div>
    )
    }
    