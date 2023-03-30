import React, { useEffect, useState } from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from "react-router-dom";
import useOrgin from "../../hooks/useOrgin";

const Boards = () => {

    const { orgin, isLoading, error } = useOrgin()

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
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3 row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Add Board</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {boards && boards.map((board) => (
                        <div className="board-details" style={{ width: "28%" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <img src={board.image} style={{ height: "7vh", width: "5vh" }} alt="" />
                                <h4><Link to={`/home?org=${board.name}`} onClick={() => { console.log("board._id"); console.log(board._id); orgin(board._id) }} disabled={isLoading}>{board.name}</Link></h4>
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