import Order from "./Order";
import OrderButton from "./OrderButton";

export default function Footer({openHour,closeHour}) {
    const hour = new Date().getHours();
    const isOpen = hour >= openHour && hour <= closeHour;
  
  
    // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
    // else alert("Sorry we're closed");
  
    if (!isOpen) return <p>CLOSED</p>;
    return (
  
      <>
      <footer  className="footer">
        {isOpen ? 
          <Order closeHour={closeHour} openHour={openHour} button={<OrderButton/>} />
           : 
            <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        }
  
      </footer>
        </>
    );
  
  }