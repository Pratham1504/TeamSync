import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from "react-router-dom";
// import useOrgin from "../../hooks/useOrgin";

const Boards = () => {

    // const { orgin, isLoading, error } = useOrgin()

    const [boards, setBoards] = useState();

    useEffect(() => {
        const fetchdata = async () => {
            const board = await fetch('/board/')
            const boardss = await board.json();
            if (!board) console.log("empty");
            if (board.ok) {
                setBoards(boardss);
            }
        }
        fetchdata();
    }, [])


    return (
        <>
            <div>
                <div style={{ display: "flex", height: "10vh", alignItems: "center", backgroundColor: "#f1f1f1", boxShadow: "2px 2px 5px rgba(0,0,0,0.10)", }}>
                    <div style={{ width: "0.7%", backgroundColor: "blue", marginRight: "8px", borderRadius: "20%" }}>.</div>
                    <h3>Boards</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="board-details" data-bs-toggle="modal" data-bs-target="#Create-Board" onClick={() => { }} style={{ width: "28%", fontSize: "150%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1" }}>
                        <IoIosAddCircleOutline /> <p>New Board</p>
                    </div>
                    <div class="modal fade" id="Create-Board" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add New Board</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <label for="name">Name of Board:</label>
                                        <input type="text" id="name" name="name" required />

                                        <label for="Description">Description of Board:</label>
                                        <input type="text" id="description" name="name"/>

                                        <label for="image">Image of Organization:</label>
                                        <input type="file" id="image" name="image" accept="image/*" required />

                                        <input type="submit" value="Submit" />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {boards && boards.map((board) => (
                        <div className="board-details" style={{ width: "28%" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <img src={board.image} style={{ height: "7vh", width: "5vh" }} alt="" />
                                <h4><Link to={`/home?org=${board.name}`}></Link></h4>
                            </div>
                            <p><strong>Creator: </strong>{board.description}</p>
                            <p>{formatDistanceToNow(new Date(board.createdAt), { addSuffix: true })}</p>
                            <span className="material-symbols-outlined" onClick={() => { }}><FiMoreVertical /></span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )


}
export default Boards;