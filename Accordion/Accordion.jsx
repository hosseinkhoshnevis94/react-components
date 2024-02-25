import './style.css'
import AccordionItem from './AccordionItem';


const Accordion = ({data}) => {
    return (
        <div className="accordion">
          {data.map((item, i) => (
            <AccordionItem title={item.title} text={item.text} num={i} key={item.title} />
          ))}
        </div>
      );
}

export default Accordion