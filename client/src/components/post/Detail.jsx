import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [postInfo, setPostInfo] = useState({});

  // 글 정보 가져오기

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };

    axios
      .post("/api/post/detail", body)
      .then((respose) => {
        if (respose.data.success) {
          setPostInfo(respose.data.post);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.postNum]);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/list");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("게시글 삭제가 실패햇습니다.");
        });
    }
  };

  return (
    <>
      <div className="detail_wrap">
        <div className="detail_title">
          <h3>{postInfo.title}</h3>
          <p className="auth">서현</p>
        </div>
        <div className="detail_content">
          {postInfo.image ? (
            <img src={`${postInfo.image}`} alt={postInfo.title} />
          ) : null}
          {postInfo.content}
        </div>
        <div className="detail_btn">
          <Link to={`/modify/${postInfo.postNum}`}>수정하기</Link>
          <button onClick={() => DeleteHandler()}>삭제하기</button>
          <Link to="/list">목록보기</Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
