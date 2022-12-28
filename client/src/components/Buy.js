import { ethers } from "ethers";

const Buy = ({ state }) => {
    const buyChai = async (event) => {
        event.preventDefault();

        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract);
        const amount = { value: ethers.utils.parseEther("0.001") };
        const transaction = await contract.buyChai(name, message, amount);
        await transaction.wait();
        console.log("transaction is done");
    };

    return (
        <>
        <section className=" mx-auto mt-12 md:mt-20 text-center w-full">
        <div className="py-16 text-black px-4 bg-orange-200">
            <form onSubmit={buyChai}>
                <div className="my-4">
                    <label className="mx-2 my-4 flex items-center justify-center text-center ">Name</label>
                    <div className="flex items-center justify-center py-4">
                        <input id="name"
                        className="p-3 flex rounded-md text-black text-center w-1/3"
                        type="text"
                        placeholder="Enter your Name"
                        />
                    </div>
                    <label className="mx-2 my-4  mt-3 flex items-center justify-center text-center">
                        Message
                    </label>
                    <div className="flex items-center justify-center py-4 ">
                        <input id="message"
                        className="p-4 flex rounded-md text-black text-center w-1/3"
                        type="text"
                        placeholder="Enter your Message"
                        />
                    </div>
                    <div className="flex items-center justify-center py-4 md:drop-shadow-lg tracking-wider ">
                        <button disabled = {!state.contract} type= "submit" className="bg-[#96D4D4] rounded-full  w-full lg:w-[25%] my-3 py-3 md:text-xl on-button-hover-effect ">
                            {" "}
                            Buy  ☕  for 0.001 ETH ♦{" "}
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default Buy;
