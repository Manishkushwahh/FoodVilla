import { useState } from "react";

const Section = ({Title,Descripton,isVisible,setIsVisible}) => {
    
    return(
        <div className="border border-black p-2 m-2">
            <h1 className="font-bold text-1xl">{Title}</h1>
            {isVisible ? 
            (<button 
                onClick={()=> setIsVisible(false)} 
                className="cursor-pointer underline"
            >
            Hide
            </button>)
            :
            (<button 
                onClick={()=> setIsVisible(true)} 
                className="cursor-pointer underline"
            >
            Show
            </button>
            )}
            
            {isVisible && <p>{Descripton}</p>}
        </div>
    );
}

const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("About");
    return(
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">InstaMart</h1>
            <Section 
            Title={"About"}
            Descripton={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
            isVisible={visibleSection === "About"}
            setIsVisible={()=> setVisibleSection("About")}
            />

            <Section 
            Title={"Details"}
            Descripton={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
            isVisible={visibleSection === "Details"}
            setIsVisible={()=> setVisibleSection("Details")}
            />

            <Section 
            Title={"Product"}
            Descripton={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
            isVisible={visibleSection === "Product"}
            setIsVisible={()=> setVisibleSection("Product")}
            />
            
        </div>
    );
};

export default InstaMart;