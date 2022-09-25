import React from 'react'
import ListIn from '../component/ListIn';

const List = () => {
  return (
    <div className="container">
        <h1 className="text-center my-4">
            REACT 게시판
        </h1>
        <table className="table table-hover">
            <colgroup className="mobile-hidden">
               <col width="55" />
               <col />
               <col wdith="120" />
               <col width="120" />
               <col width="80" />       
            </colgroup> 
            <thead>
                <tr className="text-center">
                    <th className="mobile-hidden">번호</th>
                    <th className="mobile-hidden">제목</th>
                    <th className="mobile-hidden">글쓴이</th>
                    <th className="mobile-hidden">날짜</th>
                    <th className="mobile-hidden">조회수</th>
                </tr>
            </thead> 
            <tbody>
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
                <ListIn />
            </tbody>
        </table>
    </div>    
  )
}

export default List