import { useState, useEffect } from "react";

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memoMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memoMessage();
    }, [contract]);

    // return (
    //     <>
    //     <p style={{ textAlign: "center", marginTop: "20px" }}>Suppoters</p>
    //     {memos.map((memo) => {
    //         return (
    //         <div
    //             className="container-fluid"
    //             style={{ width: "100%" }}
    //             key={Math.random()}
    //         >
    //             <table
    //             style={{
    //                 marginBottom: "10px",
    //             }}
    //             >
    //             <tbody>
    //                 <tr>
    //                 <td
    //                     style={{
    //                     backgroundColor: "#96D4D4",
    //                     border: "1px solid white",
    //                     borderCollapse: "collapse",
    //                     padding: "7px",
    //                     width: "100px",
    //                     }}
    //                 >
    //                     {memo.name}
    //                 </td>
    //                 <td
    //                     style={{
    //                     backgroundColor: "#96D4D4",
    //                     border: "1px solid white",
    //                     borderCollapse: "collapse",
    //                     padding: "7px",
    //                     width: "800px",
    //                     }}
    //                 >
    //                     {new Date(memo.timestamp * 1000).toLocaleString()}
    //                 </td>
    //                 <td
    //                     style={{
    //                     backgroundColor: "#96D4D4",
    //                     border: "1px solid white",
    //                     borderCollapse: "collapse",
    //                     padding: "7px",
    //                     width: "300px",
    //                     }}
    //                 >
    //                     {memo.message}
    //                 </td>
    //                 <td
    //                     style={{
    //                     backgroundColor: "#96D4D4",
    //                     border: "1px solid white",
    //                     borderCollapse: "collapse",
    //                     padding: "7px",
    //                     width: "400px",
    //                     }}
    //                 >
    //                     {memo.from}
    //                 </td>
    //                 </tr>
    //             </tbody>
    //             </table>
    //         </div>
    //         );
    //     })}
    // </>
    // );

    return (
        <>
            <section className="mx-auto mt-12 md:mt-20 text-center bg-yellow-200 py-3">
            <p className="font-bold text-center md:max-w-2xl md:mx-auto my-6 text-lg md:text-5xl text-gray-800 leading-normal">
                Supporters
            </p>
            {memos.map((memo) => {
                return (
                <div
                    className="flex flex-col items-center justify-between py-2 px-5 mx-auto my-2 w-full "
                    key={Math.random()}
                >
                    <table>
                    <tbody>
                        <tr className="bg-orange-200 rounded-full">
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {memo.name}
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {new Date(memo.timestamp * 1000).toLocaleString()}
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {memo.message}
                        </td>
                        <td className=" px-3 py-4 mx-2 my-2 w-1/4 border border-collapse border-spacing-4 border-black">
                            {memo.from}
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                );
            })}
            </section>
        </>
    );
};

export default Memos;
