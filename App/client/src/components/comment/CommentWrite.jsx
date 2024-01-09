import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CommentWrite = (props) => {
    const { setCommentList } = props;
    const [isOverLimit, setIsOverLimit] = useState(false);

    const [comment, setComment] = useState("");
    const [youName, setYouName] = useState("");

    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        // if (user.accessToken === "") {
        //     alert("로그인을 해주세요.");
        //     return props.toggleModal();
        // }

        if (!comment) {
            return alert("댓글을 작성해주세요.");
        }

        if (comment.length > 100) {
            return alert("댓글은 100자 이하로 작성해주세요.")
        }

        let body = {
            name: youName,
            comment: comment,
            uid: user.uid,
        }

        axios
            .post("/api/comment/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 작성이 성공하였습니다.");

                    // API를 통해 새로운 데이터를 받아옵니다.
                    axios.post("/api/comment/list")
                        .then((res) => {
                            if (res.data.success) {
                                setCommentList([...res.data.commentList]);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                    setComment("");
                } else {
                    alert("댓글 작성이 실패했습니다.")
                }
            })
    }

    const handleInputChange = (e) => {
        const text = e.currentTarget.value;
        setComment(text);

        if (text.length > 100) {
            setIsOverLimit(true);
        } else {
            setIsOverLimit(false);
        }
    }

    return (
        <div className="comment__form">
            <form>
                {user.accessToken ? (
                    ""
                ) : (
                    <>
                        <label htmlFor="yourName" className='blind'>이름</label>
                        <input
                            id="yourName"
                            placeholder="Name"
                            type='text'
                            value={youName}
                            onChange={(e) => { setYouName(e.currentTarget.value) }}
                        />
                    </>
                )
                }

                <textarea
                    placeholder="Leave a Comment"
                    type="text"
                    value={comment}
                    onChange={(e) => { handleInputChange(e) }}
                />
                <p className={isOverLimit ? 'comment__length limit' : 'comment__length'}>
                    <i>{comment.length}</i> / 100
                </p>
                <button
                    onClick={(e) => {
                        SubmitHandler(e)
                    }}
                >Write</button>
            </form >
        </div >
    )
}

export default CommentWrite
